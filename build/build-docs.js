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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(83)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(25)('wks');
var uid = __webpack_require__(26);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(11) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(49);
var dP = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43);
var defined = __webpack_require__(13);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(5);
var ctx = __webpack_require__(28);
var hide = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(235);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(42);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(47);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(56);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(57);
var hide = __webpack_require__(6);
var has = __webpack_require__(9);
var Iterators = __webpack_require__(8);
var $iterCreate = __webpack_require__(58);
var setToStringTag = __webpack_require__(31);
var getPrototypeOf = __webpack_require__(62);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(63)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(30)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(65);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(8);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
    return 0;
  }
  var inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 === w2) {
    w2 = outer.clientWidth;
  }

  document.body.removeChild(outer);

  return w1 - w2;
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dropdown_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b6c60d80_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Dropdown_vue__ = __webpack_require__(169);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dropdown_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b6c60d80_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Dropdown_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Dropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b6c60d80", Component.options)
  } else {
    hotAPI.reload("data-v-b6c60d80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DropdownLi_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_239de25d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DropdownLi_vue__ = __webpack_require__(171);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DropdownLi_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_239de25d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DropdownLi_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/DropdownLi.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DropdownLi.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-239de25d", Component.options)
  } else {
    hotAPI.reload("data-v-239de25d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Popover_vue__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7680f674_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Popover_vue__ = __webpack_require__(190);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Popover_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7680f674_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Popover_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Popover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Popover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7680f674", Component.options)
  } else {
    hotAPI.reload("data-v-7680f674", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(39);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(50);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _toConsumableArray2 = __webpack_require__(66);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _gettingStarted = __webpack_require__(74);

var _gettingStarted2 = _interopRequireDefault(_gettingStarted);

var _container = __webpack_require__(76);

var _container2 = _interopRequireDefault(_container);

var _headerDocs = __webpack_require__(78);

var _headerDocs2 = _interopRequireDefault(_headerDocs);

var _alertDocs = __webpack_require__(80);

var _alertDocs2 = _interopRequireDefault(_alertDocs);

var _accordionDocs = __webpack_require__(86);

var _accordionDocs2 = _interopRequireDefault(_accordionDocs);

var _affixDocs = __webpack_require__(89);

var _affixDocs2 = _interopRequireDefault(_affixDocs);

var _asideDocs = __webpack_require__(93);

var _asideDocs2 = _interopRequireDefault(_asideDocs);

var _carouselDocs = __webpack_require__(96);

var _carouselDocs2 = _interopRequireDefault(_carouselDocs);

var _buttonsDocs = __webpack_require__(98);

var _buttonsDocs2 = _interopRequireDefault(_buttonsDocs);

var _datepickerDocs = __webpack_require__(101);

var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);

var _dropdownDocs = __webpack_require__(104);

var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);

var _modalDocs = __webpack_require__(106);

var _modalDocs2 = _interopRequireDefault(_modalDocs);

var _popoverDocs = __webpack_require__(109);

var _popoverDocs2 = _interopRequireDefault(_popoverDocs);

var _progressbarDocs = __webpack_require__(112);

var _progressbarDocs2 = _interopRequireDefault(_progressbarDocs);

var _selectDocs = __webpack_require__(115);

var _selectDocs2 = _interopRequireDefault(_selectDocs);

var _tabsDocs = __webpack_require__(118);

var _tabsDocs2 = _interopRequireDefault(_tabsDocs);

var _tooltipDocs = __webpack_require__(122);

var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);

var _spinnerDocs = __webpack_require__(125);

var _spinnerDocs2 = _interopRequireDefault(_spinnerDocs);

var _src = __webpack_require__(128);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */
/* eslint no-new: off, require-jsdoc: off */

__webpack_require__(237);
__webpack_require__(239);
__webpack_require__(241);
__webpack_require__(243);
// import typeaheadDocs from './example/typeaheadDocs.vue';


Vue.use(_src2.default);

new Vue({
  el: '#wrapper',
  components: {
    gettingStarted: _gettingStarted2.default,
    container: _container2.default,
    alertDocs: _alertDocs2.default,
    headerDocs: _headerDocs2.default,
    accordionDocs: _accordionDocs2.default,
    affixDocs: _affixDocs2.default,
    asideDocs: _asideDocs2.default,
    carouselDocs: _carouselDocs2.default,
    buttonsDocs: _buttonsDocs2.default,
    datepickerDocs: _datepickerDocs2.default,
    dropdownDocs: _dropdownDocs2.default,
    modalDocs: _modalDocs2.default,
    popoverDocs: _popoverDocs2.default,
    progressbarDocs: _progressbarDocs2.default,
    selectDocs: _selectDocs2.default,
    tabsDocs: _tabsDocs2.default,
    tooltipDocs: _tooltipDocs2.default,
    // typeaheadDocs,
    spinnerDocs: _spinnerDocs2.default,
    list: {
      inherit: true,
      template: ''
    }
  },
  data: function data() {
    return {
      anchor: []
    };
  },

  filters: {
    space: function space(val) {
      return val.replace('-', ' ');
    }
  },
  mounted: function mounted() {
    // add h1.anchor.innerHTML to sidebar list
    var anchor = document.querySelectorAll('.anchor');
    this.anchor = [].concat((0, _toConsumableArray3.default)(anchor)).map(function (el) {
      return el.innerHTML.replace(' ', '-');
    });
    // Scrollspy
    var section = document.querySelectorAll('.bs-docs-section');
    var sections = {};

    window.addEventListener('load', function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(section), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var e = _step.value;

          sections[e.id] = e.offsetTop;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    window.addEventListener('scroll', function () {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

      var navbar = document.querySelector('#sidenav');

      if (!navbar) {
        return;
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)((0, _keys2.default)(sections)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var i = _step2.value;

          if (sections[i] + 420 <= scrollPosition) {
            if (navbar.querySelector('.active')) {
              navbar.querySelector('.active').className = '';
            }
            var a = navbar.querySelector('a[href*=' + i + ']');
            if (!a) {
              return;
            }
            a.parentNode.className = 'active';
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    });
  }
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
module.exports = __webpack_require__(5).Object.keys;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(12);
var $keys = __webpack_require__(22);

__webpack_require__(46)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(44)(false);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(24);
var toAbsoluteIndex = __webpack_require__(45);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(17);
var core = __webpack_require__(5);
var fails = __webpack_require__(19);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(19)(function () {
  return Object.defineProperty(__webpack_require__(29)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(32);
module.exports = __webpack_require__(64);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
var global = __webpack_require__(4);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(8);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(54);
var step = __webpack_require__(55);
var Iterators = __webpack_require__(8);
var toIObject = __webpack_require__(14);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(59);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(31);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(60);
var enumBugKeys = __webpack_require__(27);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(29)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(61).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(12);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var defined = __webpack_require__(13);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var get = __webpack_require__(33);
module.exports = __webpack_require__(5).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(67);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(69);
module.exports = __webpack_require__(5).Array.from;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(28);
var $export = __webpack_require__(17);
var toObject = __webpack_require__(12);
var call = __webpack_require__(70);
var isArrayIter = __webpack_require__(71);
var toLength = __webpack_require__(24);
var createProperty = __webpack_require__(72);
var getIterFn = __webpack_require__(33);

$export($export.S + $export.F * !__webpack_require__(73)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(8);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10);
var createDesc = __webpack_require__(20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_120e3ba2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_gettingStarted_vue__ = __webpack_require__(75);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_120e3ba2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_gettingStarted_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/gettingStarted.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] gettingStarted.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-120e3ba2", Component.options)
  } else {
    hotAPI.reload("data-v-120e3ba2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "getting-started"
    }
  }, [_c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#getting-started"
    }
  }, [_vm._v("Getting started")])]), _vm._v(" "), _c('div', {
    staticClass: "bs-callout bs-callout-success"
  }, [_c('h4', [_vm._v("About this project")]), _vm._v(" "), _c('p', [_vm._v("\n        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\n        As a result no dependency on jQuery or Bootstrap's JavaScript is required.\n        The only required dependencies are:\n      ")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "http://vuejs.org/"
    }
  }, [_vm._v("Vue.js")]), _vm._v("\n          (required ^1.0.8, test with 1.0.8).")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://getbootstrap.com/"
    }
  }, [_vm._v("Bootstrap CSS")]), _vm._v("\n          (required 3.x.x, test with 3.3.5).\n          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\n        ")])])]), _vm._v(" "), _c('h2', [_vm._v("CommonJS")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "language-javascript"
  }, [_vm._v("$ npm install vue-strap\n\nvar alert = require('vue-strap/lib/alert');\n// or\nvar alert = require('vue-strap').alert;\n\nnew Vue({\n  components: {\n    'alert': alert\n  }\n})")])]), _vm._v(" "), _c('h2', [_vm._v("ES6")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "language-javascript"
  }, [_vm._v("$ npm install vue-strap\n\nimport alert from 'vue-strap/src/alert'\n// or\nimport { alert } from 'vue-strap'\n\nnew Vue({\n  components: {\n    alert\n  }\n})")])]), _vm._v(" "), _c('h2', [_vm._v("Browser globals")]), _vm._v(" "), _c('p', [_vm._v("\n      The "), _c('code', [_vm._v("dist")]), _vm._v(" folder contains "), _c('code', [_vm._v("vue-strap.js")]), _vm._v(" and "), _c('code', [_vm._v("vue-strap.js")]), _vm._v(" with\n      all components exported in the "), _c('code', [_vm._v("window.VueStrap")]), _vm._v(" object.\n    ")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("\n<script src=\"path/to/vue.js\"></script>\n<script src=\"path/to/vue-strap.js\"></script>\n<script>\n  var alert = VueStrap.alert\n</script>\n    ")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-120e3ba2", esExports)
  }
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3887738c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_container_vue__ = __webpack_require__(77);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3887738c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_container_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/container.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] container.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3887738c", Component.options)
  } else {
    hotAPI.reload("data-v-3887738c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container bs-docs-container"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3887738c", esExports)
  }
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35faaa6d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_headerDocs_vue__ = __webpack_require__(79);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35faaa6d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_headerDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/headerDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] headerDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35faaa6d", Component.options)
  } else {
    hotAPI.reload("data-v-35faaa6d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "navbar navbar-static-top bs-docs-nav",
    attrs: {
      "id": "top",
      "role": "banner"
    }
  }, [_c('navbar', [_c('button', {
    staticClass: "navbar-toggle collapsed",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#bs-navbar",
      "aria-controls": "bs-navbar",
      "aria-expanded": "false"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Toggle navigation")]), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  })]), _vm._v(" "), _c('a', {
    staticClass: "navbar-brand",
    attrs: {
      "href": "../"
    }
  }, [_vm._v("VueStrap")]), _vm._v(" "), _c('nav', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "bs-navbar"
    },
    slot: "dropdown-menu"
  }, [_c('ul', {
    staticClass: "nav navbar-nav"
  }, [_c('li', [_c('a', {
    staticStyle: {
      "color": "#19986B"
    },
    attrs: {
      "href": "#accordion"
    }
  }, [_vm._v("Components")])])]), _vm._v(" "), _c('ul', {
    staticClass: "nav navbar-nav navbar-right"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/yuche/vue-strap"
    }
  }, [_c('span', {
    staticClass: "icon-github-circled"
  }), _vm._v("\n          GitHub\n        ")])])])])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-35faaa6d", esExports)
  }
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alertDocs_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ee2adc2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_alertDocs_vue__ = __webpack_require__(85);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alertDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ee2adc2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_alertDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/alertDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] alertDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ee2adc2", Component.options)
  } else {
    hotAPI.reload("data-v-4ee2adc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("115f1e32", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ee2adc2\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alertDocs.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ee2adc2\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alertDocs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.alert-icon-float-left {\n  font-size:32px;float:left;margin-right:5px;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/docs/example/docs/example/alertDocs.vue?06030c70"],"names":[],"mappings":";AAyLA;EACA,eAAA,WAAA,iBAAA;CACA","file":"alertDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"alert\">\n    <h1 class=\"page-header\">\n      <a href=\"#alert\" class=\"anchor\">Alert</a>\n    </h1>\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        Click to toggle alert on right\n      </button>\n\n      <button class=\"btn btn-danger btn-lg\"\n        @click=\"showTop = !showTop\">\n        Click to toggle alert on top\n      </button>\n      <hr>\n      <alert type=\"success\" >\n        <strong>Well Done!</strong>\n        You successfully read this important alert message.\n      </alert>\n\n      <alert type=\"info\" >\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n      </alert>\n\n      <alert type=\"danger\" dismissable>\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n      </alert>\n\n      <alert type=\"warning\" dismissable>\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\n      </alert>\n\n      <alert\n        :show=\"showRight\"\n        :duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n        @close=\"showRight = false\"\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n\n      <alert\n        :show=\"showTop\"\n        :duration=\"3000\"\n        type=\"danger\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable\n        @close=\"showTop = false\"\n      >\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n    </div>\n\n    <pre><code class=\"language-markup\">&lt;button class=\"btn btn-default btn-lg\"\n  @click=\"showRight = !showRight\"&gt;\n  Click to toggle alert on right\n&lt;/button&gt;\n\n&lt;button class=\"btn btn-default btn-lg\"\n  @click=\"showTop = !showTop\"&gt;\n  Click to toggle alert on top\n&lt;/button&gt;\n&lt;hr&gt;\n&lt;alert type=\"success\" &gt;\n  &lt;strong&gt;Well Done!&lt;/strong&gt;\n  You successfully read this important alert message.\n&lt;/alert&gt;\n\n&lt;alert type=\"info\" &gt;\n  &lt;strong&gt;Heads up!&lt;/strong&gt; This alert needs your attention, but it's not super important.\n&lt;/alert&gt;\n\n&lt;alert type=\"danger\" dismissable&gt;\n  &lt;strong&gt;Oh snap!&lt;/strong&gt; Change a few things up and try submitting again.\n&lt;/alert&gt;\n\n&lt;alert type=\"warning\" dismissable&gt;\n  &lt;strong&gt;Warning!&lt;/strong&gt; Better check yourself, you're not looking too good.\n&lt;/alert&gt;\n\n&lt;alert\n  :show=\"showRight\"\n  :duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable\n  @close=\"showRight = false\"\n&gt;\n  &lt;span class=\"icon-ok-circled alert-icon-float-left\"&gt;&lt;/span&gt;\n  &lt;strong&gt;Well Done!&lt;/strong&gt;\n  &lt;p&gt;You successfully read this important alert message.&lt;/p&gt;\n&lt;/alert&gt;\n\n&lt;alert\n  :show=\"showTop\"\n  :duration=\"3000\"\n  type=\"danger\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable\n  @close=\"showTop = false\"\n&gt;\n  &lt;span class=\"icon-info-circled alert-icon-float-left\"&gt;&lt;/span&gt;\n  &lt;strong&gt;Heads up!&lt;/strong&gt;\n  &lt;p&gt;This alert needs your attention.&lt;/p&gt;\n&lt;/alert&gt;\n</code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>Whether show the component</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether show close button</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code></td>\n          <td><code>success</code></td>\n          <td>Components styles</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>how to position the component.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        showRight: false,\n        showTop: false\n      };\n    },\n  };\n</script>\n\n<style>\n  .alert-icon-float-left {\n    font-size:32px;float:left;margin-right:5px;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      showRight: false,
      showTop: false
    };
  }
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "alert"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('button', {
    staticClass: "btn btn-success btn-lg",
    on: {
      "click": function($event) {
        _vm.showRight = !_vm.showRight
      }
    }
  }, [_vm._v("\n        Click to toggle alert on right\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger btn-lg",
    on: {
      "click": function($event) {
        _vm.showTop = !_vm.showTop
      }
    }
  }, [_vm._v("\n        Click to toggle alert on top\n      ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('alert', {
    attrs: {
      "type": "success"
    }
  }, [_c('strong', [_vm._v("Well Done!")]), _vm._v("\n        You successfully read this important alert message.\n      ")]), _vm._v(" "), _c('alert', {
    attrs: {
      "type": "info"
    }
  }, [_c('strong', [_vm._v("Heads up!")]), _vm._v(" This alert needs your attention, but it's not super important.\n      ")]), _vm._v(" "), _c('alert', {
    attrs: {
      "type": "danger",
      "dismissable": ""
    }
  }, [_c('strong', [_vm._v("Oh snap!")]), _vm._v(" Change a few things up and try submitting again.\n      ")]), _vm._v(" "), _c('alert', {
    attrs: {
      "type": "warning",
      "dismissable": ""
    }
  }, [_c('strong', [_vm._v("Warning!")]), _vm._v(" Better check yourself, you're not looking too good.\n      ")]), _vm._v(" "), _c('alert', {
    attrs: {
      "show": _vm.showRight,
      "duration": 3000,
      "type": "success",
      "width": "400px",
      "placement": "top-right",
      "dismissable": ""
    },
    on: {
      "close": function($event) {
        _vm.showRight = false
      }
    }
  }, [_c('span', {
    staticClass: "icon-ok-circled alert-icon-float-left"
  }), _vm._v(" "), _c('strong', [_vm._v("Well Done!")]), _vm._v(" "), _c('p', [_vm._v("You successfully read this important alert message.")])]), _vm._v(" "), _c('alert', {
    attrs: {
      "show": _vm.showTop,
      "duration": 3000,
      "type": "danger",
      "width": "400px",
      "placement": "top",
      "dismissable": ""
    },
    on: {
      "close": function($event) {
        _vm.showTop = false
      }
    }
  }, [_c('span', {
    staticClass: "icon-info-circled alert-icon-float-left"
  }), _vm._v(" "), _c('strong', [_vm._v("Heads up!")]), _vm._v(" "), _c('p', [_vm._v("This alert needs your attention.")])])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Options")]), _vm._v(" "), _vm._m(2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#alert"
    }
  }, [_vm._v("Alert")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<button class=\"btn btn-default btn-lg\"\n  @click=\"showRight = !showRight\">\n  Click to toggle alert on right\n</button>\n\n<button class=\"btn btn-default btn-lg\"\n  @click=\"showTop = !showTop\">\n  Click to toggle alert on top\n</button>\n<hr>\n<alert type=\"success\" >\n  <strong>Well Done!</strong>\n  You successfully read this important alert message.\n</alert>\n\n<alert type=\"info\" >\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n</alert>\n\n<alert type=\"danger\" dismissable>\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</alert>\n\n<alert type=\"warning\" dismissable>\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\n</alert>\n\n<alert\n  :show=\"showRight\"\n  :duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable\n  @close=\"showRight = false\"\n>\n  <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n  <strong>Well Done!</strong>\n  <p>You successfully read this important alert message.</p>\n</alert>\n\n<alert\n  :show=\"showTop\"\n  :duration=\"3000\"\n  type=\"danger\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable\n  @close=\"showTop = false\"\n>\n  <span class=\"icon-info-circled alert-icon-float-left\"></span>\n  <strong>Heads up!</strong>\n  <p>This alert needs your attention.</p>\n</alert>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("show")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("true")])]), _vm._v(" "), _c('td', [_vm._v("Whether show the component")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("dismissable")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("false")])]), _vm._v(" "), _c('td', [_vm._v("Whether show close button")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(", one of\n          "), _c('code', [_vm._v("success")]), _vm._v(" "), _c('code', [_vm._v("info")]), _vm._v(" "), _c('code', [_vm._v("warning")]), _vm._v(" "), _c('code', [_vm._v("danger")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("success")])]), _vm._v(" "), _c('td', [_vm._v("Components styles")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("duration")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("0")])]), _vm._v(" "), _c('td', [_vm._v("Auto close duration. Set "), _c('code', [_vm._v("0")]), _vm._v(" or a negative number will NOT be auto-close.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("width")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placement")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(". one of "), _c('code', [_vm._v("top")]), _vm._v(", "), _c('code', [_vm._v("top-right")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("how to position the component.")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ee2adc2", esExports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_accordionDocs_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43bce7a4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_accordionDocs_vue__ = __webpack_require__(88);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_accordionDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43bce7a4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_accordionDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/accordionDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] accordionDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43bce7a4", Component.options)
  } else {
    hotAPI.reload("data-v-43bce7a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      checked: true
    };
  }
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "accordion"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.checked),
      expression: "checked"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : (_vm.checked)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.checked,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.checked = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.checked = $$c
        }
      }
    }
  }), _vm._v("\n        Open only one at a time.\n      ")]), _vm._v(" "), _c('accordion', {
    attrs: {
      "one-at-a-time": _vm.checked
    }
  }, [_c('panel', {
    attrs: {
      "header": "Panel #1",
      "is-open": true
    }
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")]), _vm._v(" "), _c('panel', {
    attrs: {
      "header": "Panel #2"
    }
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")]), _vm._v(" "), _c('panel', {
    attrs: {
      "header": "Panel #3"
    }
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")]), _vm._v(" "), _c('panel', {
    attrs: {
      "header": "Panel #4"
    }
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")])], 1)], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Accordion Options")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("Panel Options")]), _vm._v(" "), _vm._m(3)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#accordion"
    }
  }, [_vm._v("Accordion")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<input type=\"checkbox\" v-model=\"checked\">\n<label for=\"checked\">Open only one at a time.</label>\n\n<accordion :one-at-a-time=\"checked\">\n  <panel header=\"Panel #1\" :is-open=\"true\">\n    ...\n  </panel>\n  <panel header=\"Panel #2\">\n    ...\n  </panel>\n  <panel header=\"Panel #3\">\n    ...\n  </panel>\n  <panel header=\"Panel #4\">\n    ...\n  </panel>\n</accordion>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("one-at-a-time")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("false")])]), _vm._v(" "), _c('td', [_vm._v("Control whether expanding an item will cause the other items to close.")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("is-open")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("false")])]), _vm._v(" "), _c('td', [_vm._v("Whether accordion group is open or closed.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("header")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("The clickable text on the group's header. You need one to be able to click on the header for toggling.")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-43bce7a4", esExports)
  }
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_701a4236_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_affixDocs_vue__ = __webpack_require__(92);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-701a4236"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_701a4236_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_affixDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/affixDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] affixDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-701a4236", Component.options)
  } else {
    hotAPI.reload("data-v-701a4236", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("011f60d5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-701a4236\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./affixDocs.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-701a4236\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./affixDocs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.animated[data-v-701a4236] {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite\n}\n@keyframes shake-data-v-701a4236 {\n0%, 100% {transform: translateX(0);\n}\n10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);\n}\n20%, 40%, 60%, 80% {transform: translateX(5px);\n}\n}\n.shake[data-v-701a4236] {\n    -webkit-animation-name: shake-data-v-701a4236;\n    animation-name: shake-data-v-701a4236;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/docs/example/docs/example/affixDocs.vue?1161c89e"],"names":[],"mappings":";AA4CA;IACA,+BAAA;IACA,uBAAA;IACA,kCAAA;IACA,0BAAA;IACA,mCAAA;CACA;AACA;AACA,UAAA,yBAAA;CAAA;AACA,yBAAA,4BAAA;CAAA;AACA,oBAAA,2BAAA;CAAA;CACA;AACA;IACA,8CAAA;IACA,sCAAA;CACA","file":"affixDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"affix\">\n    <h1 class=\"page-header\"><a href=\"#affix\" class=\"anchor\">Affix</a></h1>\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <pre><code class=\"language-markup\">&lt;affix offset=\"\"&gt;\n  &lt;nav class=\"sidebar\"&gt;\n    &lt;ul&gt;\n      &lt;li&gt;...&lt;/li&gt;\n      &lt;li&gt;...&lt;/li&gt;\n      &lt;li&gt;...&lt;/li&gt;\n    &lt;/ul&gt;\n  &lt;/nav&gt;\n&lt;/affix&gt;\n</code></pre>\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>offset</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Pixels to offset from top of screen when calculating position of scroll.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n\n<style scoped>\n.animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite\n}\n@keyframes shake {\n    0%, 100% {transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "affix"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('h3', [_vm._v("\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        "), _c('tooltip', {
    attrs: {
      "trigger": "hover",
      "effect": "fadein",
      "content": "I'm a direction, not jerking off!",
      "placement": "left"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-hand-right pull-right animated shake"
  })])], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Options")]), _vm._v(" "), _vm._m(2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#affix"
    }
  }, [_vm._v("Affix")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<affix offset=\"\">\n  <nav class=\"sidebar\">\n    <ul>\n      <li>...</li>\n      <li>...</li>\n      <li>...</li>\n    </ul>\n  </nav>\n</affix>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("offset")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("0")])]), _vm._v(" "), _c('td', [_vm._v("Pixels to offset from top of screen when calculating position of scroll.")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-701a4236", esExports)
  }
}

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asideDocs_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_676b64c4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_asideDocs_vue__ = __webpack_require__(95);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_asideDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_676b64c4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_asideDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/asideDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] asideDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-676b64c4", Component.options)
  } else {
    hotAPI.reload("data-v-676b64c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      showLeft: false,
      showRight: false
    };
  }
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "aside"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('button', {
    staticClass: "btn btn-success btn-lg",
    on: {
      "click": function($event) {
        _vm.showRight = true
      }
    }
  }, [_vm._v("Show Aside on right")]), _vm._v(" "), _c('bs-aside', {
    attrs: {
      "show": _vm.showRight,
      "placement": "right",
      "header": "Title",
      "width": 350
    },
    on: {
      "close": function($event) {
        _vm.showRight = false
      }
    }
  }, [_c('h4', [_vm._v("Text in aside")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.")]), _vm._v(" "), _c('p', [_vm._v(" Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.")]), _vm._v(" "), _c('div', {
    staticClass: "aside-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.showRight = false
      }
    }
  }, [_vm._v("Close")])])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger btn-lg",
    on: {
      "click": function($event) {
        _vm.showLeft = true
      }
    }
  }, [_vm._v("Show Aside on left")]), _vm._v(" "), _c('bs-aside', {
    attrs: {
      "show": _vm.showLeft,
      "placement": "left",
      "header": "Title",
      "width": 350
    },
    on: {
      "close": function($event) {
        _vm.showLeft = false
      }
    }
  }, [_c('h4', [_vm._v("Text in aside")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.")]), _vm._v(" "), _c('p', [_vm._v(" Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.")]), _vm._v(" "), _c('div', {
    staticClass: "aside-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.showLeft = false
      }
    }
  }, [_vm._v("Close")])])])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Options")]), _vm._v(" "), _vm._m(2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#aside"
    }
  }, [_vm._v("Aside")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<button\nclass=\"btn btn-success btn-lg\"\n@click=\"showRight = true\">Show Aside on right</button>\n\n<bs-aside :show=\"showRight\" @close=\"showRight = false\" placement=\"right\" header=\"Title\" :width=\"350\">\n...\n</bs-aside>\n\n<button\nclass=\"btn btn-danger btn-lg\"\n@click=\"showLeft = true\">Show Aside on left</button>\n\n<bs-aside :show=\"showLeft\" @close=\"showLeft = false\" placement=\"left\" header=\"Title\" :width=\"350\">\n...\n</bs-aside>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("show")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Whether show the component.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placement")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(", one of "), _c('code', [_vm._v("left")]), _vm._v(", "), _c('code', [_vm._v("right")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("right")])]), _vm._v(" "), _c('td', [_vm._v("how to position the component.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("header")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Header text of the aside component.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("width")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-676b64c4", esExports)
  }
}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55fe0200_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_carouselDocs_vue__ = __webpack_require__(97);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55fe0200_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_carouselDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/carouselDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] carouselDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55fe0200", Component.options)
  } else {
    hotAPI.reload("data-v-55fe0200", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "carousel"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('carousel', [_c('slider', [_c('img', {
    attrs: {
      "src": "http://placehold.it/1200x500?text=one"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "carousel-caption"
  }, [_c('h3', [_vm._v("Slide #1")]), _vm._v(" "), _c('p', [_vm._v("sunt in culpa qui officia deserunt mollit a.")])])]), _vm._v(" "), _c('slider', [_c('img', {
    attrs: {
      "src": "http://placehold.it/1200x500?text=two"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "carousel-caption"
  }, [_c('h3', [_vm._v("Slide #2")]), _vm._v(" "), _c('p', [_vm._v("sunt in culpa qui officia deserunt mollit a.")])])]), _vm._v(" "), _c('slider', [_c('img', {
    attrs: {
      "src": "http://placehold.it/1200x500?text=three"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "carousel-caption"
  }, [_c('h3', [_vm._v("Slide #3")]), _vm._v(" "), _c('p', [_vm._v("sunt in culpa qui officia deserunt mollit a.")])])])], 1)], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Options")]), _vm._v(" "), _vm._m(2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#caoursel"
    }
  }, [_vm._v("Carousel")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<carousel>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=one\">\n      <div class=\"carousel-caption\">\n       ...\n     </div>\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=two\">\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=three\">\n  </slider>\n</carousel>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("indicators")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("true")])]), _vm._v(" "), _c('td', [_vm._v("Whether to show the indicators.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("controls")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("true")])]), _vm._v(" "), _c('td', [_vm._v("Whether to show the direction controls.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("interval")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("5000")])]), _vm._v(" "), _c('td', [_vm._v("The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        ")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55fe0200", esExports)
  }
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_buttonsDocs_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38d303b2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_buttonsDocs_vue__ = __webpack_require__(100);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_buttonsDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38d303b2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_buttonsDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/buttonsDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] buttonsDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38d303b2", Component.options)
  } else {
    hotAPI.reload("data-v-38d303b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      checkboxValue: [],
      radioValue: ''
    };
  }
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "buttons"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('h4', [_vm._v("Checkbox")]), _vm._v(" "), _c('checkbox-group', {
    model: {
      value: (_vm.checkboxValue),
      callback: function($$v) {
        _vm.checkboxValue = $$v
      },
      expression: "checkboxValue"
    }
  }, [_c('checkbox', {
    attrs: {
      "value": "left"
    }
  }, [_vm._v("Left")]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "value": "middle",
      "checked": ""
    }
  }, [_vm._v("Middle")]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "value": "right"
    }
  }, [_vm._v("Right")])], 1), _vm._v(" "), _c('p', [_c('pre', [_vm._v("Checkbox value: " + _vm._s(_vm.checkboxValue) + "\n        ")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("Radio")]), _vm._v(" "), _c('radio-group', {
    attrs: {
      "type": "primary"
    },
    model: {
      value: (_vm.radioValue),
      callback: function($$v) {
        _vm.radioValue = $$v
      },
      expression: "radioValue"
    }
  }, [_c('radio', {
    attrs: {
      "value": "left"
    }
  }, [_vm._v("Left")]), _vm._v(" "), _c('radio', {
    attrs: {
      "value": "middle",
      "checked": ""
    }
  }, [_vm._v("Middle")]), _vm._v(" "), _c('radio', {
    attrs: {
      "value": "right"
    }
  }, [_vm._v("Right")])], 1), _vm._v(" "), _c('radio-group', {
    attrs: {
      "type": "success"
    },
    model: {
      value: (_vm.radioValue),
      callback: function($$v) {
        _vm.radioValue = $$v
      },
      expression: "radioValue"
    }
  }, [_c('radio', {
    attrs: {
      "value": "left"
    }
  }, [_vm._v("Left")]), _vm._v(" "), _c('radio', {
    attrs: {
      "value": "middle",
      "checked": ""
    }
  }, [_vm._v("Middle")]), _vm._v(" "), _c('radio', {
    attrs: {
      "value": "right"
    }
  }, [_vm._v("Right")])], 1), _vm._v(" "), _c('p', [_c('pre', [_vm._v("Radio value: " + _vm._s(_vm.radioValue) + "\n        ")])])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Group options")]), _vm._v(" "), _vm._m(2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#buttons"
    }
  }, [_vm._v("Buttons")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<checkbox-group v-model=\"checkboxValue\">\n  <checkbox value=\"left\">Left</checkbox>\n  <checkbox value=\"middle\" checked>Middle</checkbox>\n  <checkbox value=\"right\">Right</checkbox>\n</checkbox-group>\n\n<radio-group v-model=\"radioValue\" type=\"primary\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n\n<radio-group v-model=\"radioValue\" type=\"success\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("value")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Array")]), _vm._v(" or "), _c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("If defined, then the defined values will be checked otherwise the elements with a checked attribute\n          will be checked.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(", one of "), _c('code', [_vm._v("default")]), _vm._v(" "), _c('code', [_vm._v("primary")]), _vm._v(" "), _c('code', [_vm._v("danger")]), _vm._v(" "), _c('code', [_vm._v("info")]), _vm._v(" "), _c('code', [_vm._v("warning")]), _vm._v(" "), _c('code', [_vm._v("success")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("default")])]), _vm._v(" "), _c('td')])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-38d303b2", esExports)
  }
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_datepickerDocs_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bb3a81c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_datepickerDocs_vue__ = __webpack_require__(103);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_datepickerDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bb3a81c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_datepickerDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/datepickerDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] datepickerDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bb3a81c", Component.options)
  } else {
    hotAPI.reload("data-v-6bb3a81c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            disabled: [],
            value: '01/01/2016',
            dateValue: '',
            format: ['dd/MM/yyyy'],
            reset: true,
            picker: true
        };
    },
    methods: {
        dateChanged(value) {
            console.log(value);
            console.log(this.$refs);
        }
    }
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "datepicker"
    }
  }, [_vm._m(0), _vm._v(" "), _c('tabs', [_c('tab', {
    attrs: {
      "header": "Example"
    }
  }, [_c('p', [_c('pre', [_vm._v("Selected date is: " + _vm._s(_vm.dateValue))])]), _vm._v(" "), _c('datepicker', {
    ref: "dp",
    attrs: {
      "disabled-days-of-week": _vm.disabled,
      "format": _vm.format.toString(),
      "show-reset-button": _vm.reset,
      "show-picker-button": _vm.picker
    },
    on: {
      "change": _vm.dateChanged
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("Disabled days of week")]), _vm._v(" "), _c('bs-select', {
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.disabled),
      callback: function($$v) {
        _vm.disabled = $$v
      },
      expression: "disabled"
    }
  }, [_c('bs-option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("4")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("5")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("6")])], 1), _vm._v(" "), _c('h4', [_vm._v("Format")]), _vm._v(" "), _c('bs-select', {
    model: {
      value: (_vm.format),
      callback: function($$v) {
        _vm.format = $$v
      },
      expression: "format"
    }
  }, [_c('bs-option', {
    attrs: {
      "value": "yyyy,MM,dd"
    }
  }, [_vm._v("yyyy,MM,dd")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "yyyy-MM-dd"
    }
  }, [_vm._v("yyyy-MM-dd")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "yyyy.MM.dd"
    }
  }, [_vm._v("yyyy.MM.dd")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "MMM/dd/yyyy"
    }
  }, [_vm._v("MMM/dd/yyyy")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "MMMM/dd/yyyy"
    }
  }, [_vm._v("MMMM/dd/yyyy")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "dd/MM/yyyy"
    }
  }, [_vm._v("dd/MM/yyyy")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "dd-MM-yyyy"
    }
  }, [_vm._v("dd-MM-yyyy")])], 1), _vm._v(" "), _c('h4', [_vm._v("Reset button")]), _vm._v(" "), _c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.reset),
      expression: "reset"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.reset) ? _vm._i(_vm.reset, null) > -1 : (_vm.reset)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.reset,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.reset = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.reset = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.reset = $$c
        }
      }
    }
  }), _vm._v(" toggle reset button\n                ")]), _vm._v(" "), _c('h4', [_vm._v("Picker button")]), _vm._v(" "), _c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.picker),
      expression: "picker"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.picker) ? _vm._i(_vm.picker, null) > -1 : (_vm.picker)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.picker,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.picker = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.picker = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.picker = $$c
        }
      }
    }
  }), _vm._v(" toggle picker button\n                ")])], 1), _vm._v(" "), _c('tab', {
    attrs: {
      "header": "Markup"
    }
  }, [_c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<datepicker\n  v-model=\"value\"\n  :disabled-days-of-week=\"disabled\"\n  :format=\"format\"\n  :show-reset-button=\"reset\">\n</datepicker>\n")])])]), _vm._v(" "), _c('tab', {
    attrs: {
      "header": "Options"
    }
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("value")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Input's value")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td', [_vm._v("text")]), _vm._v(" "), _c('td', [_vm._v("Input's type. Type "), _c('code', [_vm._v("hidden")]), _vm._v(" can be used to only show a picker button.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("tabindex")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Input's tabindex")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Input's placeholder")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Input's disabled")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("format")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("dd/MM/yyyy")])]), _vm._v(" "), _c('td', [_vm._v("The date format, combination of d, dd, M, MM , MMM, MMMM, yyyy.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabledDaysOfWeek")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Array")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("showResetButton")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("If "), _c('strong', [_vm._v("true")]), _vm._v(" shows an × shaped button to clear the selected date. Usefull in forms where date entry is optional.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("showPickerButton")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("If "), _c('strong', [_vm._v("true")]), _vm._v(" shows a button to trigger the datepicker while clicking on the input does nothing.")])])])])]), _vm._v(" "), _c('tab', {
    attrs: {
      "header": "Events"
    }
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Parameters")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('td', [_vm._v("change")]), _vm._v(" "), _c('td', [_vm._v("value")]), _vm._v(" "), _c('td', [_vm._v("Triggered on value change")])])])])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#datepicker"
    }
  }, [_vm._v("Datepicker")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6bb3a81c", esExports)
  }
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7662a0b1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_dropdownDocs_vue__ = __webpack_require__(105);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7662a0b1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_dropdownDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/dropdownDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dropdownDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7662a0b1", Component.options)
  } else {
    hotAPI.reload("data-v-7662a0b1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "dropdown"
    }
  }, [_vm._m(0), _vm._v(" "), _c('tabs', [_c('tab', {
    attrs: {
      "header": "Example"
    }
  }, [_c('dropdown', [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n            Action\n            "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    slot: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider",
    attrs: {
      "role": "separator"
    }
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])]), _vm._v(" "), _c('dropdown', [_c('ul', {
    staticClass: "dropdown-menu",
    slot: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider",
    attrs: {
      "role": "separator"
    }
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])]), _vm._v(" "), _c('dropdown', [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n            Action "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    slot: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider",
    attrs: {
      "role": "separator"
    }
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group btn-group-justified",
    attrs: {
      "role": "group"
    }
  }, [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#",
      "role": "button"
    }
  }, [_vm._v("Left")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#",
      "role": "button"
    }
  }, [_vm._v("Middle")]), _vm._v(" "), _c('dropdown', [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n              Dropdown "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    slot: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider",
    attrs: {
      "role": "separator"
    }
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])])], 1)], 1), _vm._v(" "), _c('tab', {
    attrs: {
      "header": "Markup"
    }
  }, [_c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<dropdown>\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n    Action\n    <span class=\"caret\"></span>\n  </button>\n  <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li role=\"separator\" class=\"divider\"></li>\n    <li><a href=\"#\">Separated link</a></li>\n  </ul>\n</dropdown>\n")])])]), _vm._v(" "), _c('tab', {
    attrs: {
      "header": "Usage"
    }
  }, [_c('p', [_vm._v("\n          Just use as "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "http://getbootstrap.com/javascript/#dropdowns"
    }
  }, [_vm._v("original Bootstrap way")]), _vm._v(".\n        ")])])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#dropdown"
    }
  }, [_vm._v("Dropdown")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7662a0b1", esExports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalDocs_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24333e13_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_modalDocs_vue__ = __webpack_require__(108);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24333e13_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_modalDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/modalDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modalDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24333e13", Component.options)
  } else {
    hotAPI.reload("data-v-24333e13", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      showModal: false,
      fadeModal: false,
      zoomModal: false,
      showCustomModal: false,
      largeModal: false,
      smallModal: false
    };
  }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "modal"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.showModal = true
      }
    }
  }, [_vm._v("Show modal")]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "Modal title",
      "show": _vm.showModal
    },
    on: {
      "close": function($event) {
        _vm.showModal = false
      }
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal "), _c('b', [_vm._v("Title")])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body",
    slot: "modal-body"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    on: {
      "click": function($event) {
        _vm.fadeModal = true
      }
    }
  }, [_vm._v("Fade modal")]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "Fade Modal",
      "show": _vm.fadeModal,
      "effect": "fade",
      "width": "800"
    },
    on: {
      "close": function($event) {
        _vm.fadeModal = false
      }
    }
  }, [_c('div', {
    staticClass: "modal-body",
    slot: "modal-body"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.zoomModal = true
      }
    }
  }, [_vm._v("Zoom modal")]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "Zoom Modal",
      "show": _vm.zoomModal,
      "effect": "zoom",
      "width": "400"
    },
    on: {
      "close": function($event) {
        _vm.zoomModal = false
      }
    }
  }, [_c('div', {
    staticClass: "modal-body",
    slot: "modal-body"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.showCustomModal = true
      }
    }
  }, [_vm._v("Show custom modal")]), _vm._v(" "), _c('modal', {
    attrs: {
      "show": _vm.showCustomModal,
      "effect": "fade",
      "width": "50%"
    },
    on: {
      "close": function($event) {
        _vm.showCustomModal = false
      }
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_c('i', [_vm._v("Custom")]), _vm._v(" "), _c('code', [_vm._v("Modal")]), _vm._v(" "), _c('b', [_vm._v("Title")])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body",
    slot: "modal-body"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer",
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.showCustomModal = false
      }
    }
  }, [_vm._v("Exit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.showCustomModal = false
      }
    }
  }, [_vm._v("Custom Save")])])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning",
    on: {
      "click": function($event) {
        _vm.largeModal = true
      }
    }
  }, [_vm._v("Large modal")]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "Large Modal",
      "show": _vm.largeModal,
      "large": ""
    },
    on: {
      "close": function($event) {
        _vm.largeModal = false
      }
    }
  }, [_c('div', {
    staticClass: "modal-body",
    slot: "modal-body"
  }, [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    on: {
      "click": function($event) {
        _vm.smallModal = true
      }
    }
  }, [_vm._v("Small modal")]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "Small Modal",
      "show": _vm.smallModal,
      "small": ""
    },
    on: {
      "close": function($event) {
        _vm.smallModal = false
      }
    }
  }, [_c('div', {
    staticClass: "modal-body",
    slot: "modal-body"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.\n        ")])])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Options")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("Usage")]), _vm._v(" "), _vm._m(3)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#modal"
    }
  }, [_vm._v("Modal")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<button class=\"btn btn-default\"\n  @click=\"showModal = true\"\n  >Show modal\n</button>\n<modal :show=\"showModal\" @click=\"showModal = false\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-primary\"\n  @click=\"fadeModal = true\">\n  Fade modal\n</button>\n<modal title=\"Fade Modal\" :show=\"fadeModal\" @close=\"fadeModal = false\" effect=\"fade\" width=\"800\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-success\"\n  @click=\"zoomModal = true\">\n  Zoom modal\n</button>\n<modal title=\"Zoom Modal\" :show=\"zoomModal\" @close=\"zoomModal = false\" effect=\"zoom\" width=\"400\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-default\"\n  @click=\"showCustomModal = true\">\n  Show custom modal\n</button>\n<modal :show=\"showCustomModal\" @close=\"showCustomModal = false\" effect=\"fade\" width=\"400\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      <i>Custom</i> <code>Modal</code> <b>Title</b>\n    </h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n  <div slot=\"modal-footer\" class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n    <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n  </div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"largeModal = true\"\n  >Large Modal\n</button>\n<modal :show=\"largeModal\" @close=\"largeModal = false\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"smallModal = true\"\n  >Small Modal\n</button>\n<modal :show=\"smallModal\" @close=\"smallModal = false\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Title of the modal component.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("ok-text")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td', [_vm._v("Save changes")]), _vm._v(" "), _c('td', [_vm._v("Text for OK button")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("cancel-text")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td', [_vm._v("Close")]), _vm._v(" "), _c('td', [_vm._v("Text for cancel button")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("width")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Number, String or null")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("null")])]), _vm._v(" "), _c('td', [_vm._v("Pass a Number in pixels or a String with relational sizes ( ex: '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("callback")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Function")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("A callback Function when you click the modal primary button.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("large")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("false")])]), _vm._v(" "), _c('td', [_vm._v("Creates a large modal ( see boostrap's documentation for .modal-lg )")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("small")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("false")])]), _vm._v(" "), _c('td', [_vm._v("Creates a small modal ( see boostrap's documentation for .modal-sm )")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("backdrop")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("true")])]), _vm._v(" "), _c('td', [_vm._v("Enables/disables closing the modal by clicking on the backdrop.")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n    If you just need a simple modal, you can use the "), _c('code', [_vm._v("title")]), _vm._v(" prop and the default footer. However, if you\n    need to put custom HTML or a custom footer, you can override the header or footer block by using\n    "), _c('code', [_vm._v("<div slot=\"modal-title\" class=\"modal-title\">...</div>")]), _vm._v(" and\n    "), _c('code', [_vm._v("<div slot=\"modal-footer\" class=\"modal-footer\">...</div>")]), _vm._v(".\n  ")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24333e13", esExports)
  }
}

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popoverDocs_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed728d6a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_popoverDocs_vue__ = __webpack_require__(111);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popoverDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed728d6a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_popoverDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/popoverDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] popoverDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed728d6a", Component.options)
  } else {
    hotAPI.reload("data-v-ed728d6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet'
    };
  }
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "popover"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('popover', {
    attrs: {
      "effect": "fade",
      "header": true,
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "top"
    }
  }, [_c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v("Popover on top")])]), _vm._v(" "), _c('popover', {
    attrs: {
      "effect": "fade",
      "header": true,
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "left"
    }
  }, [_c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v("Popover on left")])]), _vm._v(" "), _c('popover', {
    attrs: {
      "effect": "fade",
      "header": true,
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "right"
    }
  }, [_c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v("Popover on right")])]), _vm._v(" "), _c('popover', {
    attrs: {
      "effect": "fade",
      "placement": "bottom",
      "header": true,
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod"
    }
  }, [_c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v("Popover on bottom")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("No title")]), _vm._v(" "), _c('popover', {
    attrs: {
      "effect": "fade",
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "top"
    }
  }, [_c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v("Popover on top")])]), _vm._v(" "), _c('popover', {
    attrs: {
      "effect": "fade",
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "left"
    }
  }, [_c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v("Popover on left")])]), _vm._v(" "), _c('popover', {
    attrs: {
      "effect": "fade",
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "right"
    }
  }, [_c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v("Popover on right")])]), _vm._v(" "), _c('popover', {
    attrs: {
      "effect": "fade",
      "placement": "bottom",
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod"
    }
  }, [_c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v("Popover on bottom")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("Trigger")]), _vm._v(" "), _c('p', [_c('popover', {
    attrs: {
      "effect": "scale",
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "top",
      "trigger": "hover"
    }
  }, [_c('button', {
    staticClass: "btn btn-default "
  }, [_vm._v("Mouseenter")])])], 1), _vm._v(" "), _c('popover', {
    attrs: {
      "effect": "scale",
      "title": "Title",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "bottom",
      "trigger": "focus"
    }
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Focus"
    }
  })])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Options")]), _vm._v(" "), _vm._m(2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#popover"
    }
  }, [_vm._v("Popover")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<popover\n  effect=\"fade\"\n  placement=\"bottom\"\n  title=\"Title\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default\">Popover on bottom</button>\n</popover>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("trigger")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(", one of "), _c('code', [_vm._v("click")]), _vm._v(" "), _c('code', [_vm._v("focus")]), _vm._v(" "), _c('code', [_vm._v("hover")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("click")])]), _vm._v(" "), _c('td', [_vm._v("How the popover is triggered.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("effect")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(", one of "), _c('code', [_vm._v("scale")]), _vm._v(" "), _c('code', [_vm._v("fade")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("fade")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("content")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("header")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("true")])]), _vm._v(" "), _c('td', [_vm._v("Whether to show the header.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placement")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(", one of "), _c('code', [_vm._v("top")]), _vm._v(" "), _c('code', [_vm._v("left")]), _vm._v(" "), _c('code', [_vm._v("right")]), _vm._v(" "), _c('code', [_vm._v("bottom")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("How to position the popover.")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ed728d6a", esExports)
  }
}

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progressbar_docs_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_292d8e27_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_progressbar_docs_vue__ = __webpack_require__(114);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progressbar_docs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_292d8e27_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_progressbar_docs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/progressbar-docs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] progressbar-docs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-292d8e27", Component.options)
  } else {
    hotAPI.reload("data-v-292d8e27", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      dynamicData: [5, 15, 25, 35, 45],
      stackedData: [10, 20, 30, 40]
    };
  },
  methods: {
    dynamicClick() {
      this.dynamicData = this.dynamicData.map(() => {
        return Math.floor(Math.random() * 50);
      });
    },
    stackedClick() {
      let i = 100;
      this.stackedData = this.stackedData.map(() => {
        const random = Math.floor(Math.random() * i);
        i = i - random;
        return random;
      });
    }
  }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "progressbar"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('h4', [_vm._v("Static")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "progress"
  }, [_c('progressbar', {
    attrs: {
      "now": 20,
      "type": "success"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "progress"
  }, [_c('progressbar', {
    attrs: {
      "now": 40,
      "type": "info"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "progress"
  }, [_c('progressbar', {
    attrs: {
      "now": 60,
      "type": "primary"
    }
  })], 1)])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("\n        Dynamic\n        "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.dynamicClick
    }
  }, [_vm._v("Randomize")])]), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('progressbar', {
    attrs: {
      "now": _vm.dynamicData[0] * 2,
      "type": "info"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('progressbar', {
    attrs: {
      "now": _vm.dynamicData[1] * 2,
      "type": "warning"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('progressbar', {
    attrs: {
      "now": _vm.dynamicData[2] * 2,
      "type": "danger"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('progressbar', {
    attrs: {
      "now": _vm.dynamicData[3] * 2,
      "type": "success",
      "striped": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('progressbar', {
    attrs: {
      "now": _vm.dynamicData[4] * 2,
      "type": "success",
      "striped": "",
      "animated": ""
    }
  })], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("\n        Stacked\n        "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.stackedClick
    }
  }, [_vm._v("Randomize")])]), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('progressbar', {
    attrs: {
      "now": _vm.stackedData[0],
      "label": "",
      "type": "warning",
      "striped": ""
    }
  }), _vm._v(" "), _c('progressbar', {
    attrs: {
      "now": _vm.stackedData[1],
      "label": "",
      "type": "success"
    }
  }), _vm._v(" "), _c('progressbar', {
    attrs: {
      "now": _vm.stackedData[2],
      "label": "",
      "type": "danger"
    }
  }), _vm._v(" "), _c('progressbar', {
    attrs: {
      "now": _vm.stackedData[3],
      "label": "",
      "type": "primary",
      "striped": "",
      "animated": ""
    }
  })], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Options")]), _vm._v(" "), _vm._m(2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#progressbar"
    }
  }, [_vm._v("Progressbar")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<!-- Stacked -->\n<div class=\"progress\">\n  <progressbar :now=\"\" label type=\"warning\" striped></progressbar>\n\n  <progressbar :now=\"\" label type=\"success\" ></progressbar>\n\n  <progressbar :now=\"\" label type=\"danger\"></progressbar>\n\n  <progressbar :now=\"\" label type=\"primary\" striped animated></progressbar>\n</div>\n<!-- Single -->\n<div class=\"progress\">\n  <progressbar :now=\"\" label type=\"warning\" striped></progressbar>\n</div>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("now")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("The current value of progress completed.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Style type. Possible values are 'success', 'warning' etc.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("label")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("Whether to show the label.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("striped")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("false")])]), _vm._v(" "), _c('td', [_vm._v("Whether the progressbar has striped effect or not.")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-292d8e27", esExports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_selectDocs_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13ff1ddc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_selectDocs_vue__ = __webpack_require__(117);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_selectDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13ff1ddc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_selectDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/selectDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] selectDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13ff1ddc", Component.options)
  } else {
    hotAPI.reload("data-v-13ff1ddc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      fruitOptions: [{ value: 'Apple', label: 'Apple' }, { value: 'Banana', label: 'Banana' }, { value: 'Cherry', label: 'Cherry' }, { value: 'Orange', label: 'Orange' }, { value: 'Grape', label: 'Grape' }],
      arr: [],
      arr2: [],
      single: [],
      multiple: [],
      multipleLimit: [],
      custom: [],
      disabled: []
    };
  }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "select"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('p', [_c('pre', [_vm._v("Select data : " + _vm._s(_vm.single))])]), _vm._v(" "), _c('bs-select', {
    model: {
      value: (_vm.single),
      callback: function($$v) {
        _vm.single = $$v
      },
      expression: "single"
    }
  }, [_c('bs-option', {
    attrs: {
      "value": "Apple"
    }
  }, [_vm._v("Apple")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Banana"
    }
  }, [_vm._v("Banana")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Cherry"
    }
  }, [_vm._v("Cherry")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Orange"
    }
  }, [_vm._v("Orange")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Grape"
    }
  }, [_vm._v("Grape")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("Multiple select")]), _vm._v(" "), _c('p', [_c('pre', [_vm._v("Select data : " + _vm._s(_vm.multiple.join(', ')))])]), _vm._v(" "), _c('bs-select', {
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.multiple),
      callback: function($$v) {
        _vm.multiple = $$v
      },
      expression: "multiple"
    }
  }, [_c('bs-option', {
    attrs: {
      "value": "Apple"
    }
  }, [_vm._v("Apple")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Banana"
    }
  }, [_vm._v("Banana")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Cherry"
    }
  }, [_vm._v("Cherry")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Orange"
    }
  }, [_vm._v("Orange")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Grape"
    }
  }, [_vm._v("Grape")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("Multiple select limit")]), _vm._v(" "), _c('p', [_c('pre', [_vm._v("Select data : " + _vm._s(_vm.multipleLimit.join(', ')))])]), _vm._v(" "), _c('bs-select', {
    attrs: {
      "multiple": "",
      "limit": 2
    },
    model: {
      value: (_vm.multipleLimit),
      callback: function($$v) {
        _vm.multipleLimit = $$v
      },
      expression: "multipleLimit"
    }
  }, [_c('bs-option', {
    attrs: {
      "value": "Apple"
    }
  }, [_vm._v("Apple")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Banana"
    }
  }, [_vm._v("Banana")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Cherry"
    }
  }, [_vm._v("Cherry")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Orange"
    }
  }, [_vm._v("Orange")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Grape"
    }
  }, [_vm._v("Grape")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("Custom template")]), _vm._v(" "), _c('p', [_c('pre', [_vm._v("Select data : " + _vm._s(_vm.custom.join(', ')))])]), _vm._v(" "), _c('bs-select', {
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.custom),
      callback: function($$v) {
        _vm.custom = $$v
      },
      expression: "custom"
    }
  }, [_c('bs-option', {
    attrs: {
      "value": "Star"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-star",
    slot: "span"
  }), _vm._v(" Star")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Heart"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-heart",
    slot: "span"
  }), _vm._v(" Heart")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Film"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-film",
    slot: "span"
  }), _vm._v(" Film")]), _vm._v(" "), _c('bs-option', {
    attrs: {
      "value": "Inbox"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-inbox",
    slot: "span"
  }), _vm._v(" Inbox")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("Array/Collection driven w/ search")]), _vm._v(" "), _c('p', [_vm._v("\n        Optionally specify an options (array/collection) which will drive the contents of the property. You can enable search mode in this case.\n        "), _c('pre', [_vm._v("Select data : " + _vm._s(_vm.arr))])]), _vm._v(" "), _c('bs-select', {
    attrs: {
      "options": _vm.fruitOptions,
      "search": true,
      "close-on-select": true
    },
    model: {
      value: (_vm.arr),
      callback: function($$v) {
        _vm.arr = $$v
      },
      expression: "arr"
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("Automatically close array driven selects")]), _vm._v(" "), _c('p', [_vm._v("Using the property :close-on-select=\"true\" array driven selects will auto-close after selecting an entry.")]), _vm._v(" "), _c('bs-select', {
    attrs: {
      "options": _vm.fruitOptions,
      "close-on-select": true
    },
    model: {
      value: (_vm.arr2),
      callback: function($$v) {
        _vm.arr2 = $$v
      },
      expression: "arr2"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("Disabled selects")]), _vm._v(" "), _c('bs-select', {
    attrs: {
      "options": _vm.fruitOptions,
      "close-on-select": true,
      "disabled": true
    },
    model: {
      value: (_vm.disabled),
      callback: function($$v) {
        _vm.disabled = $$v
      },
      expression: "disabled"
    }
  })], 1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("Select Options")]), _vm._v(" "), _vm._m(3)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#select"
    }
  }, [_vm._v("Select")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n      This a "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://silviomoreto.github.io/bootstrap-select/"
    }
  }, [_vm._v("bootstrap-select")]), _vm._v(" implementation.\n    ")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<bs-select>\n  <bs-option value=\"Apple\">Apple</bs-option>\n  <bs-option value=\"Banana\">Banana</bs-option>\n  <bs-option value=\"Cherry\">Cherry</bs-option>\n  <bs-option value=\"Orange\">Orange</bs-option>\n  <bs-option value=\"Grape\">Grape</bs-option>\n</bs-select>\n<hr>\n<bs-select multiple>\n  <bs-option value=\"Apple\">Apple</bs-option>\n  <bs-option value=\"Banana\">Banana</bs-option>\n  <bs-option value=\"Cherry\">Cherry</bs-option>\n  <bs-option value=\"Orange\">Orange</bs-option>\n  <bs-option value=\"Grape\">Grape</bs-option>\n</bs-select>\n<hr>\n <bs-select multiple :limit=\"2\">\n  <bs-option value=\"Apple\">Apple</bs-option>\n  <bs-option value=\"Banana\">Banana</bs-option>\n  <bs-option value=\"Cherry\">Cherry</bs-option>\n  <bs-option value=\"Orange\">Orange</bs-option>\n  <bs-option value=\"Grape\">Grape</bs-option>\n</bs-select>\n<hr>\n<bs-select multiple>\n  <bs-option value=\"Star\"><span slot=\"span\" class=\"glyphicon glyphicon-star\"></span> Star</bs-option>\n  <bs-option value=\"Heart\"><span slot=\"span\" class=\"glyphicon glyphicon-heart\"></span> Heart</bs-option>\n  <bs-option value=\"Film\"><span slot=\"span\" class=\"glyphicon glyphicon-film\"></span> Film</bs-option>\n  <bs-option value=\"Inbox\"><span slot=\"span\" class=\"glyphicon glyphicon-inbox\"></span> Inbox</bs-option>\n</bs-select>\n\n<bs-select v-model=\"arr\" :options=\"fruitOptions\" :search=\"true\">\n</bs-select>\nfruitOptions = [\n  {value:'apple', label:'Apple'},\n  {value:'banana', label:'Banana'},\n  {value:'cherry', label:'Cherry'},\n  {value:'orange', label:'Orange'},\n  {value:'grape', label:'Grape'},\n]\n\n<bs-select v-model=\"arr2\" :options=\"fruitOptions\" :close-on-select=\"true\">\n</bs-select>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("value")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Array")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("[]")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td', [_vm._v("Nothing Selected")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("multiple")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("false")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("limit")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("1024")])]), _vm._v(" "), _c('td', [_vm._v("Limit the number of elements you are allowed to select.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("false")])]), _vm._v(" "), _c('td')])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13ff1ddc", esExports)
  }
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c13f19e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tabsDocs_vue__ = __webpack_require__(121);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c13f19e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c13f19e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tabsDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/tabsDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tabsDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c13f19e", Component.options)
  } else {
    hotAPI.reload("data-v-5c13f19e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c84d62c4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c13f19e\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabsDocs.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c13f19e\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabsDocs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.animated[data-v-5c13f19e] {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite\n}\n@keyframes shake-data-v-5c13f19e {\n0%, 100% {transform: translateY(0);\n}\n10%, 30%, 50%, 70%, 90% {transform: translateY(-5px);\n}\n20%, 40%, 60%, 80% {transform: translateY(5px);\n}\n}\n.shake[data-v-5c13f19e] {\n    -webkit-animation-name: shake-data-v-5c13f19e;\n    animation-name: shake-data-v-5c13f19e;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/docs/example/docs/example/tabsDocs.vue?5df1c40c"],"names":[],"mappings":";AA+FA;IACA,+BAAA;IACA,uBAAA;IACA,kCAAA;IACA,0BAAA;IACA,mCAAA;CACA;AACA;AACA,UAAA,yBAAA;CAAA;AACA,yBAAA,4BAAA;CAAA;AACA,oBAAA,2BAAA;CAAA;CACA;AACA;IACA,8CAAA;IACA,sCAAA;CACA","file":"tabsDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"tabs\">\n    <h1 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs</a></h1>\n\n    <tabs>\n      <tab header=\"Example\" icon=\"play-circle\">\n        <span class=\"glyphicon glyphicon-hand-up animated shake\"></span>\n        This documentation uses tabs for its layout.\n      </tab>\n\n      <tab header=\"Markup\" icon=\"pencil\">\n        <pre><code class=\"language-markup\">&lt;tabs&gt;\n  &lt;tab header=\"one\" icon=\"pencil\"&gt;\n    ...\n  &lt;/tab&gt;\n  &lt;tab header=\"two\"&gt;\n    ...\n  &lt;/tab&gt;\n  &lt;tab header=\"three\" disabled&gt;\n    ...\n  &lt;/tab&gt;\n&lt;/tabs&gt;\n</code></pre>\n      </tab>\n\n      <tab header=\"Tabs options (container)\" icon=\"th-list\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Default</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>active</td>\n              <td><code>Number</code></td>\n              <td><code>0</code></td>\n              <td>Active tab index (0 based)</td>\n            </tr>\n            <tr>\n              <td>navStyle</td>\n              <td><code>String</code></td>\n              <td>tabs</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>effect</td>\n              <td><code>String</code></td>\n              <td>fadein</td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n      </tab>\n\n      <tab header=\"Tab options (child)\" icon=\"th-list\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Default</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>header</td>\n              <td><code>String</code></td>\n              <td></td>\n              <td>Heading text of the tab.</td>\n            </tr>\n            <tr>\n              <td>icon</td>\n              <td><code>String</code></td>\n              <td></td>\n              <td>Icon displayed in the tab heading.</td>\n            </tr>\n            <tr>\n              <td>disabled</td>\n              <td><code>Boolean</code></td>\n              <td><code>false</code></td>\n              <td>Whether tab is clickable and can be activated.</td>\n            </tr>\n          </tbody>\n        </table>\n      </tab>\n    </tabs>\n  </div>\n</template>\n\n<style scoped>\n.animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite\n}\n@keyframes shake {\n    0%, 100% {transform: translateY(0);}\n    10%, 30%, 50%, 70%, 90% {transform: translateY(-5px);}\n    20%, 40%, 60%, 80% {transform: translateY(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "tabs"
    }
  }, [_vm._m(0), _vm._v(" "), _c('tabs', [_c('tab', {
    attrs: {
      "header": "Example",
      "icon": "play-circle"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-hand-up animated shake"
  }), _vm._v("\n        This documentation uses tabs for its layout.\n      ")]), _vm._v(" "), _c('tab', {
    attrs: {
      "header": "Markup",
      "icon": "pencil"
    }
  }, [_c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<tabs>\n  <tab header=\"one\" icon=\"pencil\">\n    ...\n  </tab>\n  <tab header=\"two\">\n    ...\n  </tab>\n  <tab header=\"three\" disabled>\n    ...\n  </tab>\n</tabs>\n")])])]), _vm._v(" "), _c('tab', {
    attrs: {
      "header": "Tabs options (container)",
      "icon": "th-list"
    }
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("active")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("0")])]), _vm._v(" "), _c('td', [_vm._v("Active tab index (0 based)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("navStyle")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td', [_vm._v("tabs")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("effect")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td', [_vm._v("fadein")]), _vm._v(" "), _c('td')])])])]), _vm._v(" "), _c('tab', {
    attrs: {
      "header": "Tab options (child)",
      "icon": "th-list"
    }
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("header")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Heading text of the tab.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("icon")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Icon displayed in the tab heading.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("false")])]), _vm._v(" "), _c('td', [_vm._v("Whether tab is clickable and can be activated.")])])])])])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#tabs"
    }
  }, [_vm._v("Tabs")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c13f19e", esExports)
  }
}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tooltipDocs_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69efeca9_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_tooltipDocs_vue__ = __webpack_require__(124);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tooltipDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69efeca9_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_tooltipDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/tooltipDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tooltipDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69efeca9", Component.options)
  } else {
    hotAPI.reload("data-v-69efeca9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet'
    };
  }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "tooltip"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('tooltip', {
    attrs: {
      "header": true,
      "content": "Lorem ipsum dolor sit amet",
      "placement": "top"
    }
  }, [_c('button', {
    staticClass: "btn btn-default "
  }, [_vm._v("tooltip on top")])]), _vm._v(" "), _c('tooltip', {
    attrs: {
      "header": true,
      "content": "Lorem ipsum dolor sit amet",
      "placement": "left"
    }
  }, [_c('button', {
    staticClass: "btn btn-default "
  }, [_vm._v("tooltip on left")])]), _vm._v(" "), _c('tooltip', {
    attrs: {
      "header": true,
      "content": "Lorem ipsum dolor sit amet",
      "placement": "right"
    }
  }, [_c('button', {
    staticClass: "btn btn-default "
  }, [_vm._v("tooltip on right")])]), _vm._v(" "), _c('tooltip', {
    attrs: {
      "placement": "bottom",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod"
    }
  }, [_c('button', {
    staticClass: "btn btn-default "
  }, [_vm._v("tooltip on bottom")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v("Triger")]), _vm._v(" "), _c('p', [_c('tooltip', {
    attrs: {
      "trigger": "click",
      "effect": "scale",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "top"
    }
  }, [_c('button', {
    staticClass: "btn btn-default "
  }, [_vm._v("Click")])])], 1), _vm._v(" "), _c('tooltip', {
    attrs: {
      "effect": "scale",
      "content": "Lorem ipsum dolor sit amet",
      "placement": "bottom",
      "trigger": "focus"
    }
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Focus"
    }
  })])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Options")]), _vm._v(" "), _vm._m(2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#tooltip"
    }
  }, [_vm._v("Tooltip")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<tooltip\n  effect=\"scale\"\n  placement=\"bottom\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">tooltip on bottom</button>\n</tooltip>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("trigger")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(", one of "), _c('code', [_vm._v("hover")]), _vm._v(" "), _c('code', [_vm._v("focus")]), _vm._v(" "), _c('code', [_vm._v("hover")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("click")])]), _vm._v(" "), _c('td', [_vm._v("How the tooltip is triggered.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("effect")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(", one of "), _c('code', [_vm._v("scale")]), _vm._v(" "), _c('code', [_vm._v("fadein")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("scale")])]), _vm._v(" "), _c('td')]), _c('tr', [_c('td', [_vm._v("content")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placement")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("String")]), _vm._v(", one of "), _c('code', [_vm._v("top")]), _vm._v(" "), _c('code', [_vm._v("left")]), _vm._v(" "), _c('code', [_vm._v("right")]), _vm._v(" "), _c('code', [_vm._v("bottom")])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("How to position the tooltip.")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69efeca9", esExports)
  }
}

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spinnerDocs_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_444a58bf_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_spinnerDocs_vue__ = __webpack_require__(127);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spinnerDocs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_444a58bf_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_spinnerDocs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/example/spinnerDocs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] spinnerDocs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-444a58bf", Component.options)
  } else {
    hotAPI.reload("data-v-444a58bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const sizes = [{
  text: 'sm',
  value: 'sm'
}, {
  text: 'md',
  value: 'md'
}, {
  text: 'lg',
  value: 'lg'
}];

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      fixed: false,
      size: 'lg',
      sizes: sizes.concat({ text: 'xl', value: 'xl' })
    };
  },
  methods: {
    showSpinner() {
      this.$refs.spinner.show();
      setTimeout(() => {
        this.$refs.spinner.hide();
      }, 2000);
    }
  }
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs-docs-section",
    attrs: {
      "id": "spnner"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs-example"
  }, [_c('div', [_c('label', [_vm._v("fixed "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.fixed),
      expression: "fixed"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.fixed) ? _vm._i(_vm.fixed, null) > -1 : (_vm.fixed)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.fixed,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.fixed = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.fixed = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.fixed = $$c
        }
      }
    }
  })]), _vm._v(" "), _c('label', [_vm._v("size\n          "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.size),
      expression: "size"
    }],
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.size = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.sizes), function(option) {
    return _c('option', {
      domProps: {
        "value": option.value
      }
    }, [_vm._v("\n              " + _vm._s(option.text) + "\n            ")])
  }))])]), _vm._v(" "), _c('div', [_c('button', {
    on: {
      "click": function($event) {
        _vm.showSpinner()
      }
    }
  }, [_vm._v("show spinner")]), _vm._v(" "), _c('spinner', {
    ref: "spinner",
    attrs: {
      "id": "spinner-box",
      "size": _vm.size,
      "fixed": _vm.fixed,
      "text": "I will close in 2 secs"
    }
  })], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('p', [_vm._v("To close the spinner, use the following code:")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("Spinner Options")]), _vm._v(" "), _vm._m(3)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_c('a', {
    staticClass: "anchor",
    attrs: {
      "href": "#spnner"
    }
  }, [_vm._v("Spinner")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<spinner ref=\"spinner\" :size=\"(sm,md,lg...)\" :fixed=\"(true,false)\"\n  text=\"I will close in 2 secs\"></spinner>\n")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('code', {
    staticClass: "language-javascript"
  }, [_vm._v("this.$refs.spinner.hide()")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Text")])]), _vm._v(" "), _c('td', [_vm._v("md")]), _vm._v(" "), _c('td', [_vm._v("The size of the spinner (either [sm, md, lg]).")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("fixed")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("Set to true if you want the spinner to occupy the entire window space.")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-444a58bf", esExports)
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Alert = __webpack_require__(129);

var _Alert2 = _interopRequireDefault(_Alert);

var _Carousel = __webpack_require__(134);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Slider = __webpack_require__(139);

var _Slider2 = _interopRequireDefault(_Slider);

var _Accordion = __webpack_require__(142);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _Affix = __webpack_require__(145);

var _Affix2 = _interopRequireDefault(_Affix);

var _Aside = __webpack_require__(150);

var _Aside2 = _interopRequireDefault(_Aside);

var _CheckboxGroup = __webpack_require__(155);

var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);

var _Checkbox = __webpack_require__(158);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Datepicker = __webpack_require__(163);

var _Datepicker2 = _interopRequireDefault(_Datepicker);

var _Dropdown = __webpack_require__(35);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownLi = __webpack_require__(36);

var _DropdownLi2 = _interopRequireDefault(_DropdownLi);

var _Modal = __webpack_require__(172);

var _Modal2 = _interopRequireDefault(_Modal);

var _Option = __webpack_require__(177);

var _Option2 = _interopRequireDefault(_Option);

var _Panel = __webpack_require__(182);

var _Panel2 = _interopRequireDefault(_Panel);

var _Popover = __webpack_require__(37);

var _Popover2 = _interopRequireDefault(_Popover);

var _Progressbar = __webpack_require__(191);

var _Progressbar2 = _interopRequireDefault(_Progressbar);

var _Radio = __webpack_require__(194);

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioGroup = __webpack_require__(199);

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _Select = __webpack_require__(202);

var _Select2 = _interopRequireDefault(_Select);

var _Tab = __webpack_require__(207);

var _Tab2 = _interopRequireDefault(_Tab);

var _Tabs = __webpack_require__(212);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tooltip = __webpack_require__(217);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Typeahead = __webpack_require__(222);

var _Typeahead2 = _interopRequireDefault(_Typeahead);

var _Navbar = __webpack_require__(228);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Spinner = __webpack_require__(231);

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue) {
    Vue.component('alert', _Alert2.default);
    Vue.component('carousel', _Carousel2.default);
    Vue.component('slider', _Slider2.default);
    Vue.component('accordion', _Accordion2.default);
    Vue.component('affix', _Affix2.default);
    Vue.component('bs-aside', _Aside2.default);
    Vue.component('checkbox-group', _CheckboxGroup2.default);
    Vue.component('checkbox', _Checkbox2.default);
    Vue.component('datepicker', _Datepicker2.default);
    Vue.component('dropdown', _Dropdown2.default);
    Vue.component('dropdown-li', _DropdownLi2.default);
    Vue.component('modal', _Modal2.default);
    Vue.component('bs-option', _Option2.default);
    Vue.component('panel', _Panel2.default);
    Vue.component('popover', _Popover2.default);
    Vue.component('progressbar', _Progressbar2.default);
    Vue.component('radio', _Radio2.default);
    Vue.component('radio-group', _RadioGroup2.default);
    Vue.component('bs-select', _Select2.default);
    Vue.component('tab', _Tab2.default);
    Vue.component('tabs', _Tabs2.default);
    Vue.component('tooltip', _Tooltip2.default);
    Vue.component('typeahead', _Typeahead2.default);
    Vue.component('navbar', _Navbar2.default);
    Vue.component('spinner', _Spinner2.default);
  }
};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alert_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa5b2b86_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Alert_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alert_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa5b2b86_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Alert_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Alert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Alert.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa5b2b86", Component.options)
  } else {
    hotAPI.reload("data-v-aa5b2b86", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("02ce312a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-aa5b2b86\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-aa5b2b86\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fade-enter-active, .fade-leave-active {\n  transition: opacity .2s ease;\n}\n.fade-enter, .fade-leave-active {\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 2;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Alert.vue?58658d31"],"names":[],"mappings":";AA2EA;EACA,6BAAA;CACA;AACA;EACA,WAAA;CACA;AAEA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;CACA;AAEA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;CACA","file":"Alert.vue","sourcesContent":["<template>\n  <transition name=\"fade\">\n    <div v-show=\"show\" :class=\"{\n      'alert':         true,\n      'alert-success': type == 'success',\n      'alert-warning': type == 'warning',\n      'alert-info':    type == 'info',\n      'alert-danger':  type == 'danger',\n      'top':           placement === 'top',\n      'top-right':     placement === 'top-right',\n    }\" :style=\"{width: width}\" role=\"alert\">\n      <button v-show=\"dismissable\" type=\"button\" class=\"close\" @click=\"close\">\n        <span>&times;</span>\n      </button>\n      <slot></slot>\n    </div>\n  </transition>\n</template>\n\n<script>\n  export default {\n    props: {\n      type: {\n        type: String,\n      },\n      dismissable: {\n        type: Boolean,\n        default: false,\n      },\n      show: {\n        type: Boolean,\n        default: true,\n      },\n      duration: {\n        type: Number,\n        default: 0,\n      },\n      width: {\n        type: String\n      },\n      placement: {\n        type: String\n      }\n    },\n    watch: {\n      show(value) {\n        this.clearTimeout();\n        if (value) {\n          this.$emit('open');\n          if (this.duration) {\n            this._timeout = setTimeout(this.close, this.duration);\n          }\n        } else {\n          this.$emit('close');\n        }\n        this.$emit('visibility-change', value);\n      },\n    },\n    methods: {\n      open() {\n        this.show = true;\n      },\n      close() {\n        this.show = false;\n      },\n      clearTimeout() {\n        if (this._timeout) {\n          clearTimeout(this._timeout);\n        }\n      },\n    },\n  }\n</script>\n\n<style>\n  .fade-enter-active, .fade-leave-active {\n    transition: opacity .2s ease;\n  }\n  .fade-enter, .fade-leave-active {\n    opacity: 0;\n  }\n\n  .alert.top {\n    position: fixed;\n    top: 30px;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n\n  .alert.top-right {\n    position: fixed;\n    top: 30px;\n    right: 50px;\n    z-index: 2;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    type: {
      type: String
    },
    dismissable: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 0
    },
    width: {
      type: String
    },
    placement: {
      type: String
    }
  },
  watch: {
    show(value) {
      this.clearTimeout();
      if (value) {
        this.$emit('open');
        if (this.duration) {
          this._timeout = setTimeout(this.close, this.duration);
        }
      } else {
        this.$emit('close');
      }
      this.$emit('visibility-change', value);
    }
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    clearTimeout() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
    }
  }
});

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    class: {
      'alert': true,
      'alert-success': _vm.type == 'success',
        'alert-warning': _vm.type == 'warning',
        'alert-info': _vm.type == 'info',
        'alert-danger': _vm.type == 'danger',
        'top': _vm.placement === 'top',
        'top-right': _vm.placement === 'top-right',
    },
    style: ({
      width: _vm.width
    }),
    attrs: {
      "role": "alert"
    }
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dismissable),
      expression: "dismissable"
    }],
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.close
    }
  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-aa5b2b86", esExports)
  }
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Carousel_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5e651e2_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Carousel_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c5e651e2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Carousel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5e651e2_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Carousel_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Carousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Carousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5e651e2", Component.options)
  } else {
    hotAPI.reload("data-v-c5e651e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("525db419", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5e651e2\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5e651e2\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.carousel-control[data-v-c5e651e2] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Carousel.vue?ef1b2d1a"],"names":[],"mappings":";AAgIA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\n  <div class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\" v-show=\"indicators\">\n      <indicator :indicator=\"indicator\" :active-index=\"activeIndex\" @change=\"activeIndex = arguments[0]\" :is-animating=\"isAnimating\" @animating-change=\"isAnimating = arguments[0]\"></indicator>\n    </ol>\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <slot></slot>\n    </div>\n    <!-- Controls -->\n    <div v-show=\"controls\" class=\"carousel-controls hidden-xs\">\n      <a class=\"left carousel-control\" role=\"button\" @click=\"prevClick\">\n        <span class=\"fa fa-arrow-left\" aria-hidden=\"true\"></span>\n      </a>\n      <a class=\"right carousel-control\" role=\"button\" @click=\"nextClick\">\n        <span class=\"fa fa-arrow-right\" aria-hidden=\"true\"></span>\n      </a>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    props: {\n      indicators: {\n        type: Boolean,\n        default: true,\n      },\n      controls: {\n        type: Boolean,\n        default: true,\n      },\n      interval: {\n        type: Number,\n        default: 5000,\n      },\n    },\n    components: {\n      indicator: {\n        props: [\n          'indicator',\n          'activeIndex',\n          'isAnimating',\n        ],\n        template: '<li v-for=\"(item, index) in indicator\" @click=\"onClick(index)\" :class=\"{\\'active\\': index === activeIndex}\"><span></span></li>',\n        methods: {\n          onClick(index) {\n            if (this.isAnimating || this.activeIndex === index) {\n              return false;\n            }\n            this.isAnimating = true;\n            this.activeIndex = index;\n          },\n        },\n        watch: {\n          isAnimating() {\n            this.$emit('animating-change', this.isAnimating);\n          },\n          activeIndex() {\n            this.$emit('change', this.activeIndex);\n          },\n        },\n      },\n    },\n    data() {\n      return {\n        indicator: [],\n        activeIndex: 0,\n        isAnimating: false,\n      };\n    },\n    computed: {\n      slider() {\n        return this.$el.querySelectorAll('.item');\n      },\n    },\n    watch: {\n      activeIndex(newVal, oldVal) {\n        this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);\n      },\n    },\n    methods: {\n      transitionend() {\n        [...this.slider].forEach((el) => el.className = 'item');\n        selectedEl.classList.add('active');\n        this.isAnimating = false;\n      },\n      slide(direction, selected, prev) {\n        const prevSelectedEl = this.slider[prev];\n        const selectedEl = this.slider[selected];\n\n        selectedEl.classList.add(direction === 'left' ? 'next' : 'prev');\n        // request property that requires layout to force a layout\n        var x = selectedEl.clientHeight;\n        prevSelectedEl.addEventListener('transitionend', this.transitionend);\n        prevSelectedEl.addEventListener('transitionend', this.transitionend);\n        prevSelectedEl.classList.add(direction);\n        selectedEl.classList.add(direction);\n      },\n      nextClick() {\n        if (this.isAnimating) return false;\n        this.isAnimating = true;\n        this.activeIndex = this.activeIndex + 1 < this.slider.length ? this.activeIndex + 1 : 0;\n      },\n      prevClick() {\n        if (this.isAnimating) return false;\n        this.isAnimating = true;\n        this.activeIndex = this.activeIndex === 0 ? this.slider.length - 1 : this.activeIndex - 1;\n      },\n    },\n    mounted() {\n      let intervalID = null\n      const el = this.$el\n\n      function intervalManager(flag, func, time) {\n        flag ? intervalID = setInterval(func, time) : clearInterval(intervalID)\n      }\n      if (this.interval) {\n        intervalManager(true, this.nextClick, this.interval);\n        el.addEventListener('mouseenter', () => intervalManager(false));\n        el.addEventListener('mouseleave', () => intervalManager(true, this.nextClick, this.interval));\n      }\n    },\n  };\n</script>\n\n<style scoped>\n  .carousel-control {\n    cursor: pointer;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    indicators: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  components: {
    indicator: {
      props: ['indicator', 'activeIndex', 'isAnimating'],
      template: '<li v-for="(item, index) in indicator" @click="onClick(index)" :class="{\'active\': index === activeIndex}"><span></span></li>',
      methods: {
        onClick(index) {
          if (this.isAnimating || this.activeIndex === index) {
            return false;
          }
          this.isAnimating = true;
          this.activeIndex = index;
        }
      },
      watch: {
        isAnimating() {
          this.$emit('animating-change', this.isAnimating);
        },
        activeIndex() {
          this.$emit('change', this.activeIndex);
        }
      }
    }
  },
  data() {
    return {
      indicator: [],
      activeIndex: 0,
      isAnimating: false
    };
  },
  computed: {
    slider() {
      return this.$el.querySelectorAll('.item');
    }
  },
  watch: {
    activeIndex(newVal, oldVal) {
      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);
    }
  },
  methods: {
    transitionend() {
      [...this.slider].forEach(el => el.className = 'item');
      selectedEl.classList.add('active');
      this.isAnimating = false;
    },
    slide(direction, selected, prev) {
      const prevSelectedEl = this.slider[prev];
      const selectedEl = this.slider[selected];

      selectedEl.classList.add(direction === 'left' ? 'next' : 'prev');
      // request property that requires layout to force a layout
      var x = selectedEl.clientHeight;
      prevSelectedEl.addEventListener('transitionend', this.transitionend);
      prevSelectedEl.addEventListener('transitionend', this.transitionend);
      prevSelectedEl.classList.add(direction);
      selectedEl.classList.add(direction);
    },
    nextClick() {
      if (this.isAnimating) return false;
      this.isAnimating = true;
      this.activeIndex = this.activeIndex + 1 < this.slider.length ? this.activeIndex + 1 : 0;
    },
    prevClick() {
      if (this.isAnimating) return false;
      this.isAnimating = true;
      this.activeIndex = this.activeIndex === 0 ? this.slider.length - 1 : this.activeIndex - 1;
    }
  },
  mounted() {
    let intervalID = null;
    const el = this.$el;

    function intervalManager(flag, func, time) {
      flag ? intervalID = setInterval(func, time) : clearInterval(intervalID);
    }
    if (this.interval) {
      intervalManager(true, this.nextClick, this.interval);
      el.addEventListener('mouseenter', () => intervalManager(false));
      el.addEventListener('mouseleave', () => intervalManager(true, this.nextClick, this.interval));
    }
  }
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "carousel slide",
    attrs: {
      "data-ride": "carousel"
    }
  }, [_c('ol', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.indicators),
      expression: "indicators"
    }],
    staticClass: "carousel-indicators"
  }, [_c('indicator', {
    attrs: {
      "indicator": _vm.indicator,
      "active-index": _vm.activeIndex,
      "is-animating": _vm.isAnimating
    },
    on: {
      "change": function($event) {
        _vm.activeIndex = arguments[0]
      },
      "animating-change": function($event) {
        _vm.isAnimating = arguments[0]
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "carousel-inner",
    attrs: {
      "role": "listbox"
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.controls),
      expression: "controls"
    }],
    staticClass: "carousel-controls hidden-xs"
  }, [_c('a', {
    staticClass: "left carousel-control",
    attrs: {
      "role": "button"
    },
    on: {
      "click": _vm.prevClick
    }
  }, [_c('span', {
    staticClass: "fa fa-arrow-left",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "right carousel-control",
    attrs: {
      "role": "button"
    },
    on: {
      "click": _vm.nextClick
    }
  }, [_c('span', {
    staticClass: "fa fa-arrow-right",
    attrs: {
      "aria-hidden": "true"
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c5e651e2", esExports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fcd1c060_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Slider_vue__ = __webpack_require__(141);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fcd1c060_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Slider_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fcd1c060", Component.options)
  } else {
    hotAPI.reload("data-v-fcd1c060", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      index: 0,
      show: false
    };
  },
  computed: {
    show() {
      return this.$parent.activeIndex === this.index;
    }
  },
  mounted() {
    for (var c in this.$parent.$children) {
      if (this.$parent.$children[c].$el == this.$el) {
        this.index = parseInt(c, 10);
        break;
      }
    }
    //this.index = [...this.$el.parentNode.children].indexOf(this.$el)
    this.$parent.indicator.push(this.index);
    if (this.index === 0) {
      this.$el.classList.add('active');
    }
  }
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fcd1c060", esExports)
  }
}

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Accordion_vue__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f2baf8ae_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Accordion_vue__ = __webpack_require__(144);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Accordion_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f2baf8ae_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Accordion_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Accordion.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Accordion.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2baf8ae", Component.options)
  } else {
    hotAPI.reload("data-v-f2baf8ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    oneAtATime: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setActivePanel(panel) {
      if (!this.oneAtATime) {
        return;
      }
      for (const item of this.$children) {
        if (panel !== item) {
          item.isOpen = false;
        }
      }
    }
  }
});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-group"
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f2baf8ae", esExports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Affix_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_614e58b1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Affix_vue__ = __webpack_require__(149);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Affix_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_614e58b1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Affix_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Affix.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Affix.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-614e58b1", Component.options)
  } else {
    hotAPI.reload("data-v-614e58b1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5c2db27a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-614e58b1\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Affix.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-614e58b1\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Affix.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.vue-affix {\n  position: fixed;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Affix.vue?5170dea4"],"names":[],"mappings":";AA+EA;EACA,gBAAA;CACA","file":"Affix.vue","sourcesContent":["<template>\n  <div>\n    <div v-bind:class=\"{'vue-affix': affixed}\" v-bind:style=\"styles\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    props: {\n      offset: {\n        type: Number,\n        default: 0,\n      },\n    },\n    data() {\n      return {\n        affixed: false,\n        styles: {},\n      };\n    },\n    methods: {\n      scrolling() {\n        const scrollTop = this.getScroll(window, true);\n        const elementOffset = this.getOffset(this.$el);\n        if (!this.affixed && scrollTop > elementOffset.top) {\n          this.affixed = true;\n          this.styles = {\n            top: this.offset + 'px',\n            left: elementOffset.left + 'px',\n            width: this.$el.offsetWidth + 'px',\n          };\n        }\n        if (this.affixed && scrollTop < elementOffset.top) {\n          this.affixed = false;\n          this.styles = {};\n        }\n      },\n      // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20\n      getScroll(w, top) {\n        let ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];\n        const method = 'scroll' + (top ? 'Top' : 'Left');\n        if (typeof ret !== 'number') {\n          const d = w.document;\n            // ie6,7,8 standard mode\n          ret = d.documentElement[method];\n          if (typeof ret !== 'number') {\n            // quirks mode\n            ret = d.body[method];\n          }\n        }\n        return ret;\n      },\n      getOffset(element) {\n        const rect = element.getBoundingClientRect();\n        const body = document.body;\n        const clientTop = element.clientTop || body.clientTop || 0;\n        const clientLeft = element.clientLeft || body.clientLeft || 0;\n        const scrollTop = this.getScroll(window, true);\n        const scrollLeft = this.getScroll(window);\n        return {\n          top: rect.top + scrollTop - clientTop,\n          left: rect.left + scrollLeft - clientLeft,\n        };\n      }\n    },\n    mounted() {\n      window.addEventListener('scroll', this.scrolling);\n      window.addEventListener('resize', this.scrolling);\n    },\n    beforeDestroy() {\n      window.removeEventListener('scroll', this.scrolling);\n      window.removeEventListener('resize', this.scrolling);\n    }\n  }\n</script>\n\n<style>\n  .vue-affix {\n    position: fixed;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      affixed: false,
      styles: {}
    };
  },
  methods: {
    scrolling() {
      const scrollTop = this.getScroll(window, true);
      const elementOffset = this.getOffset(this.$el);
      if (!this.affixed && scrollTop > elementOffset.top) {
        this.affixed = true;
        this.styles = {
          top: this.offset + 'px',
          left: elementOffset.left + 'px',
          width: this.$el.offsetWidth + 'px'
        };
      }
      if (this.affixed && scrollTop < elementOffset.top) {
        this.affixed = false;
        this.styles = {};
      }
    },
    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
    getScroll(w, top) {
      let ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
      const method = 'scroll' + (top ? 'Top' : 'Left');
      if (typeof ret !== 'number') {
        const d = w.document;
        // ie6,7,8 standard mode
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
          // quirks mode
          ret = d.body[method];
        }
      }
      return ret;
    },
    getOffset(element) {
      const rect = element.getBoundingClientRect();
      const body = document.body;
      const clientTop = element.clientTop || body.clientTop || 0;
      const clientLeft = element.clientLeft || body.clientLeft || 0;
      const scrollTop = this.getScroll(window, true);
      const scrollLeft = this.getScroll(window);
      return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
      };
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrolling);
    window.addEventListener('resize', this.scrolling);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrolling);
    window.removeEventListener('resize', this.scrolling);
  }
});

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: {
      'vue-affix': _vm.affixed
    },
    style: (_vm.styles)
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-614e58b1", esExports)
  }
}

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Aside_vue__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cdc5819_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Aside_vue__ = __webpack_require__(154);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Aside_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cdc5819_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Aside_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Aside.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Aside.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cdc5819", Component.options)
  } else {
    hotAPI.reload("data-v-3cdc5819", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("25a27be4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cdc5819\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cdc5819\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.aside-open {\n  transition: transform 0.3s;\n}\n.aside-open.has-push-right {\n  transform: translateX(-300px);\n}\n.aside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 1049;\n  overflow: auto;\n  background: #fff;\n}\n.aside.left {\n  left: 0;\n  right: auto;\n}\n.aside.right {\n  left: auto;\n  right: 0;\n}\n.slideleft-enter {\n  animation: slideleft-in .3s;\n}\n.slideleft-leave-active {\n  animation: slideleft-out .3s;\n}\n@keyframes slideleft-in {\n0% {\n    transform: translateX(-100%);\n    opacity: 0;\n}\n100% {\n    transform: translateX(0);\n    opacity: 1;\n}\n}\n@keyframes slideleft-out {\n0% {\n    transform: translateX(0);\n    opacity: 1;\n}\n100% {\n    transform: translateX(-100%);\n    opacity: 0;\n}\n}\n.slideright-enter {\n  animation: slideright-in .3s;\n}\n.slideright-leave-active {\n  animation: slideright-out .3s;\n}\n@keyframes slideright-in {\n0% {\n    transform: translateX(100%);\n    opacity: 0;\n}\n100% {\n    transform: translateX(0);\n    opacity: 1;\n}\n}\n@keyframes slideright-out {\n0% {\n    transform: translateX(0);\n    opacity: 1;\n}\n100% {\n    transform: translateX(100%);\n    opacity: 0;\n}\n}\n.aside:focus {\n  outline: 0\n}\n@media (max-width: 991px) {\n.aside {\n    min-width: 240px\n}\n}\n.aside.left {\n  right: auto;\n  left: 0\n}\n.aside.right {\n  right: 0;\n  left: auto\n}\n.aside .aside-dialog .aside-header {\n  border-bottom: 1px solid #e5e5e5;\n  min-height: 16.43px;\n  padding: 6px 15px;\n  background: #337ab7;\n  color: #fff\n}\n.aside .aside-dialog .aside-header .close {\n  margin-right: -8px;\n  padding: 4px 8px;\n  color: #fff;\n  font-size: 25px;\n  opacity: .8\n}\n.aside .aside-dialog .aside-body {\n  position: relative;\n  padding: 15px\n}\n.aside .aside-dialog .aside-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5\n}\n.aside .aside-dialog .aside-footer .btn+.btn {\n  margin-left: 5px;\n  margin-bottom: 0\n}\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n  margin-left: -1px\n}\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\n  margin-left: 0\n}\n.aside-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  opacity: 0;\n  transition: opacity .3s ease;\n  background-color: #000\n}\n.aside-backdrop.in {\n  opacity: .5;\n  filter: alpha(opacity=50)\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Aside.vue?7dbb4a58"],"names":[],"mappings":";AAqFA;EACA,2BAAA;CACA;AAEA;EACA,8BAAA;CACA;AAEA;EACA,gBAAA;EACA,OAAA;EACA,UAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;CACA;AAEA;EACA,QAAA;EACA,YAAA;CACA;AAEA;EACA,WAAA;EACA,SAAA;CACA;AAEA;EACA,4BAAA;CACA;AAEA;EACA,6BAAA;CACA;AAEA;AACA;IACA,6BAAA;IACA,WAAA;CACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;CACA;AAEA;AACA;IACA,yBAAA;IACA,WAAA;CACA;AACA;IACA,6BAAA;IACA,WAAA;CACA;CACA;AAEA;EACA,6BAAA;CACA;AAEA;EACA,8BAAA;CACA;AAEA;AACA;IACA,4BAAA;IACA,WAAA;CACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;CACA;AAEA;AACA;IACA,yBAAA;IACA,WAAA;CACA;AACA;IACA,4BAAA;IACA,WAAA;CACA;CACA;AAEA;EACA,UAAA;CACA;AAEA;AACA;IACA,gBAAA;CACA;CACA;AAEA;EACA,YAAA;EACA,OAAA;CACA;AAEA;EACA,SAAA;EACA,UAAA;CACA;AAEA;EACA,iCAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,WAAA;CACA;AAEA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;CACA;AAEA;EACA,mBAAA;EACA,aAAA;CACA;AAEA;EACA,cAAA;EACA,kBAAA;EACA,6BAAA;CACA;AAEA;EACA,iBAAA;EACA,gBAAA;CACA;AAEA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,gBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,cAAA;EACA,WAAA;EACA,6BAAA;EACA,sBAAA;CACA;AAEA;EACA,YAAA;EACA,yBAAA;CACA","file":"Aside.vue","sourcesContent":["<template>\n  <transition :name=\"this.placement === 'left' ? 'slideleft' : 'slideright'\">\n    <div class=\"aside\" :style=\"{width: width + 'px'}\" :class=\"{\n      left:  placement === 'left',\n      right: placement === 'right',\n    }\" v-show=\"show\">\n      <div class=\"aside-dialog\">\n        <div class=\"aside-content\">\n          <div class=\"aside-header\">\n            <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\n            <h4 class=\"aside-title\">\n              <slot name=\"header\">\n              {{ header }}\n              </slot>\n            </h4>\n          </div>\n          <div class=\"aside-body\">\n            <slot></slot>\n          </div>\n        </div>\n      </div>\n    </div>\n  </transition>\n</template>\n\n<script>\n  import getScrollBarWidth from './utils/getScrollBarWidth.js';\n\n  export default {\n    props: {\n      show: {\n        type: Boolean,\n        default: true,\n      },\n      placement: {\n        type: String,\n        default: 'right',\n      },\n      header: {\n        type: String,\n      },\n      width: {\n        type: Number,\n        default: '320',\n      },\n    },\n    watch: {\n      show(val) {\n        let backdrop = document.createElement('div');\n        backdrop.classList.add('aside-backdrop');\n        const scrollBarWidth = getScrollBarWidth();\n        if (val) {\n          document.body.appendChild(backdrop);\n          document.body.classList.add('modal-open');\n          if (scrollBarWidth !== 0) {\n            document.body.style.paddingRight = `${scrollBarWidth}px`;\n          }\n          // request property that requires layout to force a layout\n          var x = backdrop.clientHeight;\n          backdrop.classList.add('in');\n          backdrop.addEventListener('click', this.close);\n          this.$emit('open');\n        } else {\n          backdrop.removeEventListener('click', this.close);\n          backdrop = document.querySelector('.aside-backdrop');\n          try {\n            backdrop.classList.add('aside-backdrop');\n            document.body.classList.remove('modal-open');\n            document.body.style.paddingRight = '0';\n            document.body.removeChild(backdrop);\n          } catch (e) {}\n          this.$emit('close');\n        }\n        this.$emit('visibility-change', val);\n      },\n    },\n    methods: {\n      close() {\n        this.show = false;\n      },\n    },\n  };\n</script>\n\n<style>\n  .aside-open {\n    transition: transform 0.3s;\n  }\n\n  .aside-open.has-push-right {\n    transform: translateX(-300px);\n  }\n\n  .aside {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 1049;\n    overflow: auto;\n    background: #fff;\n  }\n\n  .aside.left {\n    left: 0;\n    right: auto;\n  }\n\n  .aside.right {\n    left: auto;\n    right: 0;\n  }\n\n  .slideleft-enter {\n    animation: slideleft-in .3s;\n  }\n\n  .slideleft-leave-active {\n    animation: slideleft-out .3s;\n  }\n\n  @keyframes slideleft-in {\n    0% {\n      transform: translateX(-100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n\n  @keyframes slideleft-out {\n    0% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      transform: translateX(-100%);\n      opacity: 0;\n    }\n  }\n\n  .slideright-enter {\n    animation: slideright-in .3s;\n  }\n\n  .slideright-leave-active {\n    animation: slideright-out .3s;\n  }\n\n  @keyframes slideright-in {\n    0% {\n      transform: translateX(100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n\n  @keyframes slideright-out {\n    0% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      transform: translateX(100%);\n      opacity: 0;\n    }\n  }\n\n  .aside:focus {\n    outline: 0\n  }\n\n  @media (max-width: 991px) {\n    .aside {\n      min-width: 240px\n    }\n  }\n\n  .aside.left {\n    right: auto;\n    left: 0\n  }\n\n  .aside.right {\n    right: 0;\n    left: auto\n  }\n\n  .aside .aside-dialog .aside-header {\n    border-bottom: 1px solid #e5e5e5;\n    min-height: 16.43px;\n    padding: 6px 15px;\n    background: #337ab7;\n    color: #fff\n  }\n\n  .aside .aside-dialog .aside-header .close {\n    margin-right: -8px;\n    padding: 4px 8px;\n    color: #fff;\n    font-size: 25px;\n    opacity: .8\n  }\n\n  .aside .aside-dialog .aside-body {\n    position: relative;\n    padding: 15px\n  }\n\n  .aside .aside-dialog .aside-footer {\n    padding: 15px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5\n  }\n\n  .aside .aside-dialog .aside-footer .btn+.btn {\n    margin-left: 5px;\n    margin-bottom: 0\n  }\n\n  .aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n    margin-left: -1px\n  }\n\n  .aside .aside-dialog .aside-footer .btn-block+.btn-block {\n    margin-left: 0\n  }\n\n  .aside-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    opacity: 0;\n    transition: opacity .3s ease;\n    background-color: #000\n  }\n\n  .aside-backdrop.in {\n    opacity: .5;\n    filter: alpha(opacity=50)\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getScrollBarWidth_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getScrollBarWidth_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_getScrollBarWidth_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    show: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    header: {
      type: String
    },
    width: {
      type: Number,
      default: '320'
    }
  },
  watch: {
    show(val) {
      let backdrop = document.createElement('div');
      backdrop.classList.add('aside-backdrop');
      const scrollBarWidth = __WEBPACK_IMPORTED_MODULE_0__utils_getScrollBarWidth_js___default()();
      if (val) {
        document.body.appendChild(backdrop);
        document.body.classList.add('modal-open');
        if (scrollBarWidth !== 0) {
          document.body.style.paddingRight = `${scrollBarWidth}px`;
        }
        // request property that requires layout to force a layout
        var x = backdrop.clientHeight;
        backdrop.classList.add('in');
        backdrop.addEventListener('click', this.close);
        this.$emit('open');
      } else {
        backdrop.removeEventListener('click', this.close);
        backdrop = document.querySelector('.aside-backdrop');
        try {
          backdrop.classList.add('aside-backdrop');
          document.body.classList.remove('modal-open');
          document.body.style.paddingRight = '0';
          document.body.removeChild(backdrop);
        } catch (e) {}
        this.$emit('close');
      }
      this.$emit('visibility-change', val);
    }
  },
  methods: {
    close() {
      this.show = false;
    }
  }
});

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": this.placement === 'left' ? 'slideleft' : 'slideright'
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "aside",
    class: {
      left: _vm.placement === 'left',
        right: _vm.placement === 'right',
    },
    style: ({
      width: _vm.width + 'px'
    })
  }, [_c('div', {
    staticClass: "aside-dialog"
  }, [_c('div', {
    staticClass: "aside-content"
  }, [_c('div', {
    staticClass: "aside-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.close
    }
  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _c('h4', {
    staticClass: "aside-title"
  }, [_vm._t("header", [_vm._v("\n            " + _vm._s(_vm.header) + "\n            ")])], 2)]), _vm._v(" "), _c('div', {
    staticClass: "aside-body"
  }, [_vm._t("default")], 2)])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3cdc5819", esExports)
  }
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CheckboxGroup_vue__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b927746_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_CheckboxGroup_vue__ = __webpack_require__(157);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CheckboxGroup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b927746_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_CheckboxGroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/CheckboxGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CheckboxGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b927746", Component.options)
  } else {
    hotAPI.reload("data-v-4b927746", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-group",
    attrs: {
      "data-toggle": "buttons"
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b927746", esExports)
  }
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57fcb01c_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Checkbox_vue__ = __webpack_require__(162);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-57fcb01c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57fcb01c_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Checkbox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Checkbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Checkbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57fcb01c", Component.options)
  } else {
    hotAPI.reload("data-v-57fcb01c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("78fb5ca9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fcb01c\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fcb01c\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\ninput[type='checkbox'][data-v-57fcb01c] {\n  display: none;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Checkbox.vue?87e24bc4"],"names":[],"mappings":";AAmDA;EACA,cAAA;CACA","file":"Checkbox.vue","sourcesContent":["<template>\n  <label class=\"btn\" :class=\"{\n    'active':      checked,\n    'btn-success': type == 'success',\n    'btn-warning': type == 'warning',\n    'btn-info':    type == 'info',\n    'btn-danger':  type == 'danger',\n    'btn-default': type == 'default',\n    'btn-primary': type == 'primary',\n  }\" :title=\"title\">\n    <input v-if=\"uncheckedValue\" type=\"hidden\" :name=\"name\" v-model=\"hiddenValue\">\n    <input :value=\"value\" :name=\"checkboxName\" :tabindex=\"tabindex\" type=\"checkbox\" autocomplete=\"off\" v-model=\"checked\">\n    <slot></slot>\n  </label>\n</template>\n\n<script>\n  export default {\n    props: {\n      name: String,\n      value: String,\n      uncheckedValue: String,\n      tabindex: String,\n      title: String,\n      type: {\n        type: String,\n        default: 'default',\n      },\n      checked: {\n        type: Boolean,\n        default: false,\n      },\n    },\n\n    computed: {\n      checkboxName() {\n        return this.uncheckedValue ? false : this.name;\n      },\n      hiddenValue() {\n        return this.checked ? this.value : this.uncheckedValue;\n      },\n      watch: {\n        checked() {\n          this.$emit('input', this.checked);\n        },\n      },\n    },\n  };\n</script>\n\n<style scoped>\n  input[type='checkbox'] {\n    display: none;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: String,
    value: String,
    uncheckedValue: String,
    tabindex: String,
    title: String,
    type: {
      type: String,
      default: 'default'
    },
    checked: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    checkboxName() {
      return this.uncheckedValue ? false : this.name;
    },
    hiddenValue() {
      return this.checked ? this.value : this.uncheckedValue;
    },
    watch: {
      checked() {
        this.$emit('input', this.checked);
      }
    }
  }
});

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "btn",
    class: {
      'active': _vm.checked,
      'btn-success': _vm.type == 'success',
        'btn-warning': _vm.type == 'warning',
        'btn-info': _vm.type == 'info',
        'btn-danger': _vm.type == 'danger',
        'btn-default': _vm.type == 'default',
        'btn-primary': _vm.type == 'primary',
    },
    attrs: {
      "title": _vm.title
    }
  }, [(_vm.uncheckedValue) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.hiddenValue),
      expression: "hiddenValue"
    }],
    attrs: {
      "type": "hidden",
      "name": _vm.name
    },
    domProps: {
      "value": (_vm.hiddenValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.hiddenValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.checked),
      expression: "checked"
    }],
    attrs: {
      "name": _vm.checkboxName,
      "tabindex": _vm.tabindex,
      "type": "checkbox",
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.value,
      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, _vm.value) > -1 : (_vm.checked)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.checked,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.value,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.checked = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.checked = $$c
        }
      }
    }
  }), _vm._v(" "), _vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57fcb01c", esExports)
  }
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Datepicker_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76437bab_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Datepicker_vue__ = __webpack_require__(167);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(164)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Datepicker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76437bab_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Datepicker_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Datepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Datepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76437bab", Component.options)
  } else {
    hotAPI.reload("data-v-76437bab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("147426bc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76437bab\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76437bab\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.datepicker {\n  position: relative;\n  display: inline-block;\n}\n.datapicker a.disabled {\n  cursor: not-allowed;\n}\n.datepicker .input-group-addon.close {\n  float: none;\n  opacity: 1;\n  line-height: .5;\n  border-left: 0;\n}\n.datepicker-popup {\n  position: absolute;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n.datepicker-inner {\n  width: 218px;\n}\n.datepicker-body {\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span {\n  display: inline-block;\n  width: 28px;\n  line-height: 28px;\n  height: 28px;\n  border-radius: 4px;\n}\n.datepicker-ctrl p {\n  width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span {\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray {\n  color: #999;\n}\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n  background: rgb(50, 118, 177)!important;\n  color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n  background-color: #eeeeee;\n}\n.datepicker-weekRange span {\n  font-weight: bold;\n}\n.datepicker-label {\n  background-color: #f8f8f8;\n  font-weight: 700;\n  padding: 7px 0;\n  text-align: center;\n}\n.datepicker-ctrl {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n.month-btn {\n  font-weight: bold;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.datepicker-preBtn {\n  left: 2px;\n}\n.datepicker-nextBtn {\n  right: 2px;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Datepicker.vue?33f4dae2"],"names":[],"mappings":";AA2aA;EACA,mBAAA;EACA,sBAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;CACA;AAEA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,4CAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;;;EAGA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AAEA;EACA,kCAAA;EACA,8BAAA;CACA;AAEA;;;;EAIA,YAAA;CACA;AAEA;;EAEA,wCAAA;EACA,uBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;;;;EAIA,gBAAA;CACA;AAEA;;;;;EAKA,0BAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;CACA;AAEA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;CACA;AAEA;EACA,kBAAA;EACA,0BAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;CACA;AAEA;EACA,UAAA;CACA;AAEA;EACA,WAAA;CACA","file":"Datepicker.vue","sourcesContent":["<template>\n  <div class=\"datepicker\">\n    <div :class=\"{\n      'input-group': (showResetButton || showPickerButton) && type != 'hidden'\n    }\">\n      <input ref=\"input\" :name=\"name\" :tabindex=\"tabindex\" :placeholder=\"placeholder\" :disabled=\"disabled\" :required=\"required\" class=\"form-control datepicker-input\" :type=\"type\" @focus=\"show\" @blur=\"close\" :value=\"formattedValue\" @input=\"formattedValue = $event.target.value\" @keydown.up.prevent=\"incrementDay\" @keydown.down.prevent=\"decrementDay\" @keydown.33.prevent=\"incrementMonth\" @keydown.34.prevent=\"decrementMonth\">\n      <a v-if=\"showResetButton && type != 'hidden'\" class=\"input-group-addon close\" :class=\"{disabled: disabled !== undefined}\" @click.prevent=\"clear\">\n        &times;\n      </a>\n      <a v-if=\"showPickerButton\" :class=\"{\n        disabled: disabled !== undefined,\n        'input-group-addon': type != 'hidden'\n      }\" @click.prevent=\"show\" href=\"javascript:void(0)\">\n        <span :class=\"[iconset, iconset + '-calendar']\"></span>\n      </a>\n    </div>\n\n    <div ref=\"popup\" class=\"datepicker-popup panel\" tabindex=\"-1\" @blur=\"close\" v-if=\"displayDayView || displayMonthView || displayYearView\">\n      <div class=\"datepicker-inner\" v-show=\"displayDayView\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(date)}}</p>\n          </div>\n          <div class=\"datepicker-weekRange\">\n            <span v-for=\"w in weekRange\">{{w}}</span>\n          </div>\n          <div class=\"datepicker-dateRange\">\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date, event.target)\">{{d.text}}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"datepicker-inner\" v-show=\"displayMonthView\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(date)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange\">\n            <span v-for=\"(m, index) in monthNames\" :class=\"{\n              'datepicker-dateRange-item-active': monthNames[month]  === m\n            }\" @click=\"monthSelect(index)\">\n              {{m.substr(0,3)}}\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"datepicker-inner\" v-show=\"displayYearView\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n            <p>{{stringifyDecadeHeader(date)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange decadeRange\">\n            <span v-for=\"decade in decadeRange\" :class=\"{\n              'datepicker-dateRange-item-active': year === decade.text\n            }\" @click.stop=\"yearSelect(decade.text)\">\n              {{decade.text}}\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    props: {\n      name: String,\n      tabindex: String,\n      placeholder: String,\n      disabled: String,\n      required: String,\n      value: String,\n      type: {\n        type: String,\n        default: 'text',\n      },\n      format: {\n        default: 'dd/MM/yyyy',\n      },\n      firstDayOfWeek: {\n        type: Number,\n        default: 1,\n      },\n      disabledDaysOfWeek: {\n        type: Array,\n        default () {\n          return [];\n        },\n      },\n      showResetButton: {\n        type: Boolean,\n        default: false,\n      },\n      showPickerButton: {\n        type: Boolean,\n        default: false,\n      },\n      iconset: {\n        type: String,\n        default: 'glyphicon',\n      },\n    },\n    data() {\n      return {\n        dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n        displayDayView: false,\n        displayMonthView: false,\n        displayYearView: false,\n        monthNames: [\n          'January', 'February', 'March',\n          'April', 'May', 'June',\n          'July', 'August', 'September',\n          'October', 'November', 'December'\n        ],\n      };\n    },\n    mounted() {\n      if (!this.value) {\n        this.clear();\n      }\n      window.addEventListener('click', this.close);\n    },\n    beforeDestroy() {\n      window.removeEventListener('click', this.close);\n    },\n    watch: {\n      value() {\n        this.$emit('input', this.value);\n      },\n      format(format, old) {\n        const date = this.parse(this.value, old);\n        this.value = this.stringify(date, format);\n      },\n    },\n    computed: {\n      date: {\n        get() {\n          let date = null;\n          if (this.value) {\n            date = this.parse(this.value);\n          }\n          return date ? date : this.parse(new Date());\n        },\n        set(value) {\n          this.value = this.stringify(value);\n        },\n      },\n      formattedValue() {\n        if (!this.value) {\n          return '';\n        }\n        return this.stringify(this.date, this.format);\n      },\n      weekRange() {\n        const range = [];\n        for (let i = 0; i < 7; i++) {\n          range.push(this.dayNames[(i + this.firstDayOfWeek) % 7]);\n        }\n        return range;\n      },\n      decadeRange() {\n        const decadeRange = [];\n        const yearStr = this.year.toString();\n        const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1;\n        for (let i = 0; i < 12; i++) {\n          decadeRange.push({\n            text: firstYearOfDecade + i,\n          });\n        }\n        return decadeRange;\n      },\n      dateRange() {\n        const dateRange = [];\n\n        const firstOfMonth = new Date(this.year, this.month, 1);\n        let firstDayWeek = firstOfMonth.getDay();\n        if (firstDayWeek === 0) {\n          firstDayWeek = 7;\n        }\n        let numDaysOfPrevMonth = firstDayWeek - this.firstDayOfWeek;\n        if (numDaysOfPrevMonth < 0) {\n          numDaysOfPrevMonth += 7;\n        }\n\n        if (numDaysOfPrevMonth) {\n          const preMonth = this.getYearMonth(this.year, this.month - 1);\n          const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);\n\n          for (let i = numDaysOfPrevMonth - 1; i >= 0; i--) {\n            const dayText = prevMonthDayCount - i;\n            dateRange.push({\n              text: dayText,\n              date: new Date(preMonth.year, preMonth.month, dayText),\n              sclass: 'datepicker-item-gray',\n            });\n          }\n        }\n\n        const dayCount = this.getDayCount(this.year, this.month);\n        for (let i = 1; i <= dayCount; i++) {\n          const date = new Date(this.year, this.month, i);\n          const week = date.getDay();\n          let sclass = '';\n          this.disabledDaysOfWeek.forEach(el => {\n            if (week === parseInt(el, 10)) {\n              sclass = 'datepicker-item-disable';\n            }\n          });\n\n          if (i === this.day) {\n            if (date.getFullYear() === this.year && date.getMonth() === this.month) {\n              sclass = 'datepicker-dateRange-item-active';\n            }\n          }\n          dateRange.push({\n            text: i,\n            date: date,\n            sclass: sclass,\n          });\n        }\n\n        const nextMonthNeed = 7 - (dayCount + numDaysOfPrevMonth) % 7;\n\n        if (nextMonthNeed != 7) {\n          const nextMonth = this.getYearMonth(this.year, this.month + 1);\n\n          for (let i = 1; i <= nextMonthNeed; i++) {\n            dateRange.push({\n              text: i,\n              date: new Date(nextMonth.year, nextMonth.month, i),\n              sclass: 'datepicker-item-gray',\n            });\n          }\n        }\n\n        return dateRange;\n      },\n      year() {\n        return this.date.getFullYear();\n      },\n      month() {\n        return this.date.getMonth();\n      },\n      day() {\n        return this.date.getDate();\n      },\n    },\n    methods: {\n      close(e) {\n        if (e && e.type == 'click' && this.$el.contains(e.target)) {\n          return;\n        }\n        if (e && e.type == 'blur' && this.$el.contains(e.relatedTarget)) {\n          return;\n        }\n        this.displayDayView = this.displayMonthView = this.displayYearView = false;\n      },\n      toggle(e) {\n        if (e && this.disabled !== undefined) {\n          return;\n        }\n        if (e.target.nodeName == 'INPUT' && this.showPickerButton) {\n          return;\n        }\n        this.displayDayView = !(this.displayMonthView || this.displayYearView || this.displayDayView);\n      },\n      show(e) {\n        if (e && this.disabled !== undefined) {\n          return;\n        }\n        this.displayDayView = true;\n      },\n      clear(e) {\n        if (e && this.disabled !== undefined) {\n          return;\n        }\n        if (this.required !== undefined) {\n          this.date = new Date();\n        } else {\n          this.value = '';\n        }\n      },\n      preNextDecadeClick(flag) {\n        if (flag === 0) {\n          this.date = new Date(this.year - 10, this.month, this.day);\n        } else {\n          this.date = new Date(this.year + 10, this.month, this.day);\n        }\n      },\n      preNextMonthClick(flag) {\n        if (flag === 0) {\n          const preMonth = this.getYearMonth(this.year, this.month - 1);\n          this.date = new Date(preMonth.year, preMonth.month, this.day);\n        } else {\n          const nextMonth = this.getYearMonth(this.year, this.month + 1);\n          this.date = new Date(nextMonth.year, nextMonth.month, this.day);\n        }\n      },\n      preNextYearClick(flag) {\n        if (flag === 0) {\n          this.date = new Date(this.year - 1, this.month, this.day);\n        } else {\n          this.date = new Date(this.year + 1, this.month, this.day);\n        }\n      },\n      yearSelect(year) {\n        this.displayYearView = false;\n        this.displayMonthView = true;\n        this.date = new Date(year, this.month, this.day);\n      },\n      daySelect(date, el) {\n        if (el.classList[0] === 'datepicker-item-disable') {\n          return false;\n        } else {\n          this.date = date;\n          this.displayDayView = false;\n        }\n      },\n      switchMonthView() {\n        this.displayDayView = false;\n        this.displayMonthView = true;\n      },\n      switchDecadeView() {\n        this.displayMonthView = false;\n        this.displayYearView = true;\n      },\n      monthSelect(index) {\n        this.displayMonthView = false;\n        this.displayDayView = true;\n        this.date = new Date(this.year, index, this.day);\n      },\n      getYearMonth(year, month) {\n        if (month > 11) {\n          year++;\n          month = 0;\n        } else if (month < 0) {\n          year--;\n          month = 11;\n        }\n        return {\n          year: year,\n          month: month\n        };\n      },\n      stringifyDecadeHeader(date) {\n        const yearStr = date.getFullYear().toString();\n        const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;\n        const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;\n        return `${firstYearOfDecade}-${lastYearOfDecade}`;\n      },\n      stringifyDayHeader(date) {\n        return this.monthNames[date.getMonth()] + ' ' + date.getFullYear();\n      },\n      parseMonth(date) {\n        return this.monthNames[date.getMonth()];\n      },\n      stringifyYearHeader(date) {\n        return date.getFullYear();\n      },\n      stringify(date, format = this.format) {\n        const year = date.getFullYear();\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        const monthName = this.parseMonth(date);\n\n        return format\n          .replace(/yyyy/g, year)\n          .replace(/MMMM/g, monthName)\n          .replace(/MMM/g, monthName.substring(0, 3))\n          .replace(/MM/g, ('0' + month).slice(-2))\n          .replace(/dd/g, ('0' + day).slice(-2))\n          .replace(/yy/g, year)\n          .replace(/M(?!a)/g, month)\n          .replace(/d/g, day);\n      },\n      parse(str, format = this.format) {\n        if (str.length == 10 && (format == 'dd-MM-yyyy' || format == 'dd/MM/yyyy')) {\n          str = str.substring(3, 5) + '-' + str.substring(0, 2) + '-' + str.substring(6, 10);\n        }\n        const date = new Date(str);\n        return isNaN(date.getFullYear()) ? null : date;\n      },\n      getDayCount(year, month) {\n        const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n\n        if (month === 1) {\n          if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {\n            return 29;\n          }\n          return 28;\n        }\n\n        return dict[month];\n      },\n      incrementDay() {\n        const newdate = new Date(this.date);\n        newdate.setDate(newdate.getDate() + 1);\n        this.date = newdate;\n      },\n      decrementDay() {\n        const newdate = new Date(this.date);\n        newdate.setDate(newdate.getDate() - 1);\n        this.date = newdate;\n      },\n      incrementMonth() {\n        const newdate = new Date(this.date);\n        newdate.setMonth(newdate.getMonth() + 1);\n        this.date = newdate;\n      },\n      decrementMonth() {\n        const newdate = new Date(this.date);\n        newdate.setMonth(newdate.getMonth() - 1);\n        this.date = newdate;\n      },\n    },\n  }\n</script>\n\n<style>\n  .datepicker {\n    position: relative;\n    display: inline-block;\n  }\n\n  .datapicker a.disabled {\n    cursor: not-allowed;\n  }\n\n  .datepicker .input-group-addon.close {\n    float: none;\n    opacity: 1;\n    line-height: .5;\n    border-left: 0;\n  }\n\n  .datepicker-popup {\n    position: absolute;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  }\n\n  .datepicker-inner {\n    width: 218px;\n  }\n\n  .datepicker-body {\n    padding: 10px 10px;\n  }\n\n  .datepicker-ctrl p,\n  .datepicker-ctrl span,\n  .datepicker-body span {\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n  }\n\n  .datepicker-ctrl p {\n    width: 65%;\n  }\n\n  .datepicker-ctrl span {\n    position: absolute;\n  }\n\n  .datepicker-body span {\n    text-align: center;\n  }\n\n  .datepicker-monthRange span {\n    width: 48px;\n    height: 50px;\n    line-height: 45px;\n  }\n\n  .datepicker-item-disable {\n    background-color: white!important;\n    cursor: not-allowed!important;\n  }\n\n  .decadeRange span:first-child,\n  .decadeRange span:last-child,\n  .datepicker-item-disable,\n  .datepicker-item-gray {\n    color: #999;\n  }\n\n  .datepicker-dateRange-item-active:hover,\n  .datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n  }\n\n  .datepicker-monthRange {\n    margin-top: 10px\n  }\n\n  .datepicker-monthRange span,\n  .datepicker-ctrl span,\n  .datepicker-ctrl p,\n  .datepicker-dateRange span {\n    cursor: pointer;\n  }\n\n  .datepicker-monthRange span:hover,\n  .datepicker-ctrl p:hover,\n  .datepicker-ctrl i:hover,\n  .datepicker-dateRange span:hover,\n  .datepicker-dateRange-item-hover {\n    background-color: #eeeeee;\n  }\n\n  .datepicker-weekRange span {\n    font-weight: bold;\n  }\n\n  .datepicker-label {\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n  }\n\n  .datepicker-ctrl {\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n  }\n\n  .month-btn {\n    font-weight: bold;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .datepicker-preBtn {\n    left: 2px;\n  }\n\n  .datepicker-nextBtn {\n    right: 2px;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: String,
    tabindex: String,
    placeholder: String,
    disabled: String,
    required: String,
    value: String,
    type: {
      type: String,
      default: 'text'
    },
    format: {
      default: 'dd/MM/yyyy'
    },
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    disabledDaysOfWeek: {
      type: Array,
      default() {
        return [];
      }
    },
    showResetButton: {
      type: Boolean,
      default: false
    },
    showPickerButton: {
      type: Boolean,
      default: false
    },
    iconset: {
      type: String,
      default: 'glyphicon'
    }
  },
  data() {
    return {
      dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      displayDayView: false,
      displayMonthView: false,
      displayYearView: false,
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
  },
  mounted() {
    if (!this.value) {
      this.clear();
    }
    window.addEventListener('click', this.close);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    },
    format(format, old) {
      const date = this.parse(this.value, old);
      this.value = this.stringify(date, format);
    }
  },
  computed: {
    date: {
      get() {
        let date = null;
        if (this.value) {
          date = this.parse(this.value);
        }
        return date ? date : this.parse(new Date());
      },
      set(value) {
        this.value = this.stringify(value);
      }
    },
    formattedValue() {
      if (!this.value) {
        return '';
      }
      return this.stringify(this.date, this.format);
    },
    weekRange() {
      const range = [];
      for (let i = 0; i < 7; i++) {
        range.push(this.dayNames[(i + this.firstDayOfWeek) % 7]);
      }
      return range;
    },
    decadeRange() {
      const decadeRange = [];
      const yearStr = this.year.toString();
      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
      for (let i = 0; i < 12; i++) {
        decadeRange.push({
          text: firstYearOfDecade + i
        });
      }
      return decadeRange;
    },
    dateRange() {
      const dateRange = [];

      const firstOfMonth = new Date(this.year, this.month, 1);
      let firstDayWeek = firstOfMonth.getDay();
      if (firstDayWeek === 0) {
        firstDayWeek = 7;
      }
      let numDaysOfPrevMonth = firstDayWeek - this.firstDayOfWeek;
      if (numDaysOfPrevMonth < 0) {
        numDaysOfPrevMonth += 7;
      }

      if (numDaysOfPrevMonth) {
        const preMonth = this.getYearMonth(this.year, this.month - 1);
        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);

        for (let i = numDaysOfPrevMonth - 1; i >= 0; i--) {
          const dayText = prevMonthDayCount - i;
          dateRange.push({
            text: dayText,
            date: new Date(preMonth.year, preMonth.month, dayText),
            sclass: 'datepicker-item-gray'
          });
        }
      }

      const dayCount = this.getDayCount(this.year, this.month);
      for (let i = 1; i <= dayCount; i++) {
        const date = new Date(this.year, this.month, i);
        const week = date.getDay();
        let sclass = '';
        this.disabledDaysOfWeek.forEach(el => {
          if (week === parseInt(el, 10)) {
            sclass = 'datepicker-item-disable';
          }
        });

        if (i === this.day) {
          if (date.getFullYear() === this.year && date.getMonth() === this.month) {
            sclass = 'datepicker-dateRange-item-active';
          }
        }
        dateRange.push({
          text: i,
          date: date,
          sclass: sclass
        });
      }

      const nextMonthNeed = 7 - (dayCount + numDaysOfPrevMonth) % 7;

      if (nextMonthNeed != 7) {
        const nextMonth = this.getYearMonth(this.year, this.month + 1);

        for (let i = 1; i <= nextMonthNeed; i++) {
          dateRange.push({
            text: i,
            date: new Date(nextMonth.year, nextMonth.month, i),
            sclass: 'datepicker-item-gray'
          });
        }
      }

      return dateRange;
    },
    year() {
      return this.date.getFullYear();
    },
    month() {
      return this.date.getMonth();
    },
    day() {
      return this.date.getDate();
    }
  },
  methods: {
    close(e) {
      if (e && e.type == 'click' && this.$el.contains(e.target)) {
        return;
      }
      if (e && e.type == 'blur' && this.$el.contains(e.relatedTarget)) {
        return;
      }
      this.displayDayView = this.displayMonthView = this.displayYearView = false;
    },
    toggle(e) {
      if (e && this.disabled !== undefined) {
        return;
      }
      if (e.target.nodeName == 'INPUT' && this.showPickerButton) {
        return;
      }
      this.displayDayView = !(this.displayMonthView || this.displayYearView || this.displayDayView);
    },
    show(e) {
      if (e && this.disabled !== undefined) {
        return;
      }
      this.displayDayView = true;
    },
    clear(e) {
      if (e && this.disabled !== undefined) {
        return;
      }
      if (this.required !== undefined) {
        this.date = new Date();
      } else {
        this.value = '';
      }
    },
    preNextDecadeClick(flag) {
      if (flag === 0) {
        this.date = new Date(this.year - 10, this.month, this.day);
      } else {
        this.date = new Date(this.year + 10, this.month, this.day);
      }
    },
    preNextMonthClick(flag) {
      if (flag === 0) {
        const preMonth = this.getYearMonth(this.year, this.month - 1);
        this.date = new Date(preMonth.year, preMonth.month, this.day);
      } else {
        const nextMonth = this.getYearMonth(this.year, this.month + 1);
        this.date = new Date(nextMonth.year, nextMonth.month, this.day);
      }
    },
    preNextYearClick(flag) {
      if (flag === 0) {
        this.date = new Date(this.year - 1, this.month, this.day);
      } else {
        this.date = new Date(this.year + 1, this.month, this.day);
      }
    },
    yearSelect(year) {
      this.displayYearView = false;
      this.displayMonthView = true;
      this.date = new Date(year, this.month, this.day);
    },
    daySelect(date, el) {
      if (el.classList[0] === 'datepicker-item-disable') {
        return false;
      } else {
        this.date = date;
        this.displayDayView = false;
      }
    },
    switchMonthView() {
      this.displayDayView = false;
      this.displayMonthView = true;
    },
    switchDecadeView() {
      this.displayMonthView = false;
      this.displayYearView = true;
    },
    monthSelect(index) {
      this.displayMonthView = false;
      this.displayDayView = true;
      this.date = new Date(this.year, index, this.day);
    },
    getYearMonth(year, month) {
      if (month > 11) {
        year++;
        month = 0;
      } else if (month < 0) {
        year--;
        month = 11;
      }
      return {
        year: year,
        month: month
      };
    },
    stringifyDecadeHeader(date) {
      const yearStr = date.getFullYear().toString();
      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
      return `${firstYearOfDecade}-${lastYearOfDecade}`;
    },
    stringifyDayHeader(date) {
      return this.monthNames[date.getMonth()] + ' ' + date.getFullYear();
    },
    parseMonth(date) {
      return this.monthNames[date.getMonth()];
    },
    stringifyYearHeader(date) {
      return date.getFullYear();
    },
    stringify(date, format = this.format) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const monthName = this.parseMonth(date);

      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
    },
    parse(str, format = this.format) {
      if (str.length == 10 && (format == 'dd-MM-yyyy' || format == 'dd/MM/yyyy')) {
        str = str.substring(3, 5) + '-' + str.substring(0, 2) + '-' + str.substring(6, 10);
      }
      const date = new Date(str);
      return isNaN(date.getFullYear()) ? null : date;
    },
    getDayCount(year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (month === 1) {
        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
          return 29;
        }
        return 28;
      }

      return dict[month];
    },
    incrementDay() {
      const newdate = new Date(this.date);
      newdate.setDate(newdate.getDate() + 1);
      this.date = newdate;
    },
    decrementDay() {
      const newdate = new Date(this.date);
      newdate.setDate(newdate.getDate() - 1);
      this.date = newdate;
    },
    incrementMonth() {
      const newdate = new Date(this.date);
      newdate.setMonth(newdate.getMonth() + 1);
      this.date = newdate;
    },
    decrementMonth() {
      const newdate = new Date(this.date);
      newdate.setMonth(newdate.getMonth() - 1);
      this.date = newdate;
    }
  }
});

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "datepicker"
  }, [_c('div', {
    class: {
      'input-group': (_vm.showResetButton || _vm.showPickerButton) && _vm.type != 'hidden'
    }
  }, [_c('input', {
    ref: "input",
    staticClass: "form-control datepicker-input",
    attrs: {
      "name": _vm.name,
      "tabindex": _vm.tabindex,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "required": _vm.required,
      "type": _vm.type
    },
    domProps: {
      "value": _vm.formattedValue
    },
    on: {
      "focus": _vm.show,
      "blur": _vm.close,
      "input": function($event) {
        _vm.formattedValue = $event.target.value
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.incrementDay($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.decrementDay($event)
      }, function($event) {
        if (!('button' in $event) && $event.keyCode !== 33) { return null; }
        $event.preventDefault();
        _vm.incrementMonth($event)
      }, function($event) {
        if (!('button' in $event) && $event.keyCode !== 34) { return null; }
        $event.preventDefault();
        _vm.decrementMonth($event)
      }]
    }
  }), _vm._v(" "), (_vm.showResetButton && _vm.type != 'hidden') ? _c('a', {
    staticClass: "input-group-addon close",
    class: {
      disabled: _vm.disabled !== undefined
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.clear($event)
      }
    }
  }, [_vm._v("\n      ×\n    ")]) : _vm._e(), _vm._v(" "), (_vm.showPickerButton) ? _c('a', {
    class: {
      disabled: _vm.disabled !== undefined,
        'input-group-addon': _vm.type != 'hidden'
    },
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.show($event)
      }
    }
  }, [_c('span', {
    class: [_vm.iconset, _vm.iconset + '-calendar']
  })]) : _vm._e()]), _vm._v(" "), (_vm.displayDayView || _vm.displayMonthView || _vm.displayYearView) ? _c('div', {
    ref: "popup",
    staticClass: "datepicker-popup panel",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "blur": _vm.close
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.displayDayView),
      expression: "displayDayView"
    }],
    staticClass: "datepicker-inner"
  }, [_c('div', {
    staticClass: "datepicker-body"
  }, [_c('div', {
    staticClass: "datepicker-ctrl"
  }, [_c('span', {
    staticClass: "month-btn datepicker-preBtn",
    on: {
      "click": function($event) {
        _vm.preNextMonthClick(0)
      }
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    staticClass: "month-btn datepicker-nextBtn",
    on: {
      "click": function($event) {
        _vm.preNextMonthClick(1)
      }
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('p', {
    on: {
      "click": _vm.switchMonthView
    }
  }, [_vm._v(_vm._s(_vm.stringifyDayHeader(_vm.date)))])]), _vm._v(" "), _c('div', {
    staticClass: "datepicker-weekRange"
  }, _vm._l((_vm.weekRange), function(w) {
    return _c('span', [_vm._v(_vm._s(w))])
  })), _vm._v(" "), _c('div', {
    staticClass: "datepicker-dateRange"
  }, _vm._l((_vm.dateRange), function(d) {
    return _c('span', {
      class: d.sclass,
      on: {
        "click": function($event) {
          _vm.daySelect(d.date, _vm.event.target)
        }
      }
    }, [_vm._v(_vm._s(d.text))])
  }))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.displayMonthView),
      expression: "displayMonthView"
    }],
    staticClass: "datepicker-inner"
  }, [_c('div', {
    staticClass: "datepicker-body"
  }, [_c('div', {
    staticClass: "datepicker-ctrl"
  }, [_c('span', {
    staticClass: "month-btn datepicker-preBtn",
    on: {
      "click": function($event) {
        _vm.preNextYearClick(0)
      }
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    staticClass: "month-btn datepicker-nextBtn",
    on: {
      "click": function($event) {
        _vm.preNextYearClick(1)
      }
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('p', {
    on: {
      "click": _vm.switchDecadeView
    }
  }, [_vm._v(_vm._s(_vm.stringifyYearHeader(_vm.date)))])]), _vm._v(" "), _c('div', {
    staticClass: "datepicker-monthRange"
  }, _vm._l((_vm.monthNames), function(m, index) {
    return _c('span', {
      class: {
        'datepicker-dateRange-item-active': _vm.monthNames[_vm.month] === m
      },
      on: {
        "click": function($event) {
          _vm.monthSelect(index)
        }
      }
    }, [_vm._v("\n            " + _vm._s(m.substr(0, 3)) + "\n          ")])
  }))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.displayYearView),
      expression: "displayYearView"
    }],
    staticClass: "datepicker-inner"
  }, [_c('div', {
    staticClass: "datepicker-body"
  }, [_c('div', {
    staticClass: "datepicker-ctrl"
  }, [_c('span', {
    staticClass: "month-btn datepicker-preBtn",
    on: {
      "click": function($event) {
        _vm.preNextDecadeClick(0)
      }
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    staticClass: "month-btn datepicker-nextBtn",
    on: {
      "click": function($event) {
        _vm.preNextDecadeClick(1)
      }
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.stringifyDecadeHeader(_vm.date)))])]), _vm._v(" "), _c('div', {
    staticClass: "datepicker-monthRange decadeRange"
  }, _vm._l((_vm.decadeRange), function(decade) {
    return _c('span', {
      class: {
        'datepicker-dateRange-item-active': _vm.year === decade.text
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.yearSelect(decade.text)
        }
      }
    }, [_vm._v("\n            " + _vm._s(decade.text) + "\n          ")])
  }))])])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76437bab", esExports)
  }
}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    iconset: {
      type: String,
      default: 'glyphicon'
    }
  },
  methods: {
    open() {
      this.$el.classList.add('open');
    },
    toggle(e) {
      if (e) {
        e.preventDefault();
      }
      this.$el.classList.toggle('open');
    },
    close(e) {
      if (e) {
        if (this._toggle && e.target == this._toggle) {
          return;
        }
        if (this.$el.contains(e.target) && e.target.nodeName.toLowerCase() != 'a') {
          return;
        }
      }
      this.$el.classList.remove('open');
    }
  },
  mounted() {
    this._toggle = this.$el.querySelector('[data-toggle="dropdown"]');
    if (this._toggle) {
      this._toggle.addEventListener('click', this.toggle);
    }
    window.addEventListener('click', this.close);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close);
  }
});

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-group"
  }, [_vm._t("default", [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.toggle($event)
      }
    }
  }, [_c('span', {
    class: [_vm.iconset, _vm.iconset + '-menu-hamburger']
  }), _vm._v(" "), _c('span', {
    staticClass: "caret"
  })])]), _vm._v(" "), _vm._t("dropdown-menu")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b6c60d80", esExports)
  }
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__ = __webpack_require__(35);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__["default"]]
});

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "btn-group dropdown"
  }, [_vm._t("default", [_c('a', {
    attrs: {
      "href": "javascript:void(0)",
      "data-toggle": "dropdown"
    }
  }, [_c('span', {
    class: [_vm.iconset, _vm.iconset + '-menu-hamburger']
  }), _vm._v(" "), _c('span', {
    staticClass: "caret"
  })])]), _vm._v(" "), _vm._t("dropdown-menu")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-239de25d", esExports)
  }
}

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f95c69e4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__ = __webpack_require__(176);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(173)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f95c69e4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f95c69e4", Component.options)
  } else {
    hotAPI.reload("data-v-f95c69e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("66b87d72", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f95c69e4\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f95c69e4\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.modal {\n  transition: all 0.3s ease;\n}\n.modal.movable {\n  transition: opacity 0.3s ease;\n}\n.modal.movable .modal-header {\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n.modal.movable.dragging .modal-header {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n.modal.in {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal.in.modeless {\n  background: transparent;\n  overflow: visible;\n}\n.modal.in.movable {\n  bottom: initial;\n  left: initial;\n  right: initial;\n}\n.modal.modeless .modal-dialog {\n  margin: 20px;\n}\n.modal.zoom .modal-dialog {\n  -webkit-transform: scale(0.1);\n  -moz-transform: scale(0.1);\n  -ms-transform: scale(0.1);\n  transform: scale(0.1);\n  top: 300px;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n  -webkit-transform: translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0);\n  opacity: 1;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Modal.vue?6d185577"],"names":[],"mappings":";AAoOA;EACA,0BAAA;CACA;AAEA;EACA,8BAAA;CACA;AAEA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;CACA;AAEA;EACA,yBAAA;EACA,sBAAA;EACA,iBAAA;CACA;AAEA;EACA,qCAAA;CACA;AAEA;EACA,wBAAA;EACA,kBAAA;CACA;AAEA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,8BAAA;EACA,2BAAA;EACA,0BAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;EACA,6BAAA;EACA,0BAAA;EACA,qBAAA;CACA;AAEA;EACA,4BAAA;EACA,yBAAA;EACA,wBAAA;EACA,oBAAA;EACA,6CAAA;EACA,qCAAA;EACA,WAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n  <div role=\"dialog\" class=\"modal\" :class=\"{\n    modeless: !backdrop,\n    movable:  draggable,\n    dragging: dragging,\n    fade:   effect === 'fade',\n    zoom:   effect === 'zoom',\n    in:     show,\n  }\" :style=\"{\n    display: display ? 'block' : 'none',\n    top: position.y + 'px',\n    left: position.x + 'px',\n    transform: translateStyle,\n  }\" @click=\"backdropClick\">\n    <div :class=\"{\n      'modal-dialog': true,\n      'modal-lg':   large,\n      'modal-sm':   small,\n    }\" role=\"document\" :style=\"{width: optionalWidth}\">\n      <div ref=\"modalContent\" class=\"modal-content\">\n        <slot name=\"modal-header\">\n          <div class=\"modal-header\"\n             @mousedown=\"startDrag\" @touchstart=\"startDrag\">\n            <button type=\"button\" class=\"close\" @click=\"cancel\">\n              &times;\n            </button>\n            <h4 class=\"modal-title\">\n              <slot name=\"title\">\n                <span v-html=\"title\"></span>\n              </slot>\n            </h4>\n          </div>\n        </slot>\n\n        <slot name=\"modal-body\">\n          <div class=\"modal-body\" v-html=\"body\"></div>\n        </slot>\n\n        <slot name=\"modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"cancel\">{{ cancelText }}</button>\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"confirm\">{{ okText }}</button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  import getScrollBarWidth from './utils/getScrollBarWidth.js';\n\n  export default {\n    props: {\n      okText: {\n        type: String,\n        default: 'Save changes',\n      },\n      cancelText: {\n        type: String,\n        default: 'Close',\n      },\n      title: {\n        type: String,\n        default: '',\n      },\n      body: {\n        type: String,\n        default: '',\n      },\n      show: {\n        require: true,\n        type: Boolean,\n      },\n      width: {\n        default: null,\n      },\n      callback: {\n        type: Function,\n        default() {\n          return true;\n        },\n      },\n      effect: {\n        type: String,\n        default: null,\n      },\n      backdrop: {\n        type: Boolean,\n        default: true,\n      },\n      movable: {\n        type: Boolean,\n        default: true,\n      },\n      large: {\n        type: Boolean,\n        default: false,\n      },\n      small: {\n        type: Boolean,\n        default: false,\n      },\n    },\n    data() {\n      return {\n        display: true,\n        dragging: false,\n        start: {\n          x: 0,\n          y: 0,\n        },\n        position: {\n          x: 0,\n          y: 0,\n        },\n        translate: {\n          x: 0,\n          y: 0,\n        },\n      };\n    },\n    computed: {\n      draggable() {\n        return !this.backdrop && this.movable;\n      },\n      optionalWidth() {\n        if (this.width === null) {\n          return null;\n        } else if (Number.isInteger(this.width)) {\n          return `${this.width}px`;\n        }\n        return this.width;\n      },\n      translateStyle() {\n        return `translate(${this.translate.x}px, ${this.translate.y}px)`;\n      },\n    },\n    methods: {\n      close() {\n        this.show = false;\n      },\n      cancel() {\n        this.$emit('cancel');\n        this.close();\n      },\n      confirm() {\n        if (this.callback) {\n          const result = this.callback();\n          if (result !== undefined && !result) {\n            return;\n          }\n        }\n        this.$emit('confirm');\n        this.close();\n      },\n      backdropClick(e) {\n        if (this.backdrop && e.target === this.$el) {\n          this.cancel();\n        }\n      },\n      startDrag(e) {\n        if (!this.draggable || (!e.changedTouches && e.button != 0)) {\n          return;\n        }\n        e.stopPropagation();\n        e.preventDefault();\n\n        e = e.changedTouches ? e.changedTouches[0] : e;\n        this.dragging = true;\n        this.start.x = e.pageX - this.position.x;\n        this.start.y = e.pageY - this.position.y;\n\n        document.body.addEventListener('mousemove', this.onDrag);\n        document.body.addEventListener('touchmove', this.onDrag);\n        document.body.addEventListener('mouseup', this.stopDrag);\n        document.body.addEventListener('touchend', this.stopDrag);\n      },\n      onDrag(e) {\n        e.stopPropagation();\n        e.preventDefault();\n\n        e = e.changedTouches ? e.changedTouches[0] : e\n        this.translate.x = e.pageX - this.start.x - this.position.x;\n        this.translate.y = e.pageY - this.start.y - this.position.y;\n      },\n      stopDrag(e) {\n        this.dragging = false;\n        this.position.x = e.pageX - this.start.x;\n        this.position.y = e.pageY - this.start.y;\n        this.translate.x = 0;\n        this.translate.y = 0;\n\n        document.body.removeEventListener('mousemove', this.onDrag);\n        document.body.removeEventListener('touchmove', this.onDrag);\n        document.body.removeEventListener('mouseup', this.stopDrag);\n        document.body.removeEventListener('touchend', this.stopDrag);\n      },\n    },\n    watch: {\n      show: {\n        handler(val) {\n          const body = document.body;\n          if (val) {\n            this.$refs.modalContent.focus();\n            this.display = true;\n            body.classList.add('modal-open');\n            const scrollBarWidth = getScrollBarWidth();\n            if (scrollBarWidth !== 0) {\n              body.style.paddingRight = scrollBarWidth + 'px';\n            }\n            this.$emit('open');\n          } else {\n            setTimeout(() => {\n              this.display = false;\n              body.classList.remove('modal-open');\n              body.style.paddingRight = '0';\n              this.$emit('close');\n            }, 300);\n          }\n          this.$emit('visibility-change', val);\n        },\n        immediate: true,\n      },\n    },\n  }\n</script>\n<style>\n  .modal {\n    transition: all 0.3s ease;\n  }\n\n  .modal.movable {\n    transition: opacity 0.3s ease;\n  }\n\n  .modal.movable .modal-header {\n    cursor: -webkit-grab;\n    cursor: -moz-grab;\n    cursor: grab;\n  }\n\n  .modal.movable.dragging .modal-header {\n    cursor: -webkit-grabbing;\n    cursor: -moz-grabbing;\n    cursor: grabbing;\n  }\n\n  .modal.in {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n\n  .modal.in.modeless {\n    background: transparent;\n    overflow: visible;\n  }\n\n  .modal.in.movable {\n    bottom: initial;\n    left: initial;\n    right: initial;\n  }\n\n  .modal.modeless .modal-dialog {\n    margin: 20px;\n  }\n\n  .modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    -moz-transform: scale(0.1);\n    -ms-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n\n  .modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getScrollBarWidth_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getScrollBarWidth_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_getScrollBarWidth_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    okText: {
      type: String,
      default: 'Save changes'
    },
    cancelText: {
      type: String,
      default: 'Close'
    },
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    show: {
      require: true,
      type: Boolean
    },
    width: {
      default: null
    },
    callback: {
      type: Function,
      default() {
        return true;
      }
    },
    effect: {
      type: String,
      default: null
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    movable: {
      type: Boolean,
      default: true
    },
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      display: true,
      dragging: false,
      start: {
        x: 0,
        y: 0
      },
      position: {
        x: 0,
        y: 0
      },
      translate: {
        x: 0,
        y: 0
      }
    };
  },
  computed: {
    draggable() {
      return !this.backdrop && this.movable;
    },
    optionalWidth() {
      if (this.width === null) {
        return null;
      } else if (Number.isInteger(this.width)) {
        return `${this.width}px`;
      }
      return this.width;
    },
    translateStyle() {
      return `translate(${this.translate.x}px, ${this.translate.y}px)`;
    }
  },
  methods: {
    close() {
      this.show = false;
    },
    cancel() {
      this.$emit('cancel');
      this.close();
    },
    confirm() {
      if (this.callback) {
        const result = this.callback();
        if (result !== undefined && !result) {
          return;
        }
      }
      this.$emit('confirm');
      this.close();
    },
    backdropClick(e) {
      if (this.backdrop && e.target === this.$el) {
        this.cancel();
      }
    },
    startDrag(e) {
      if (!this.draggable || !e.changedTouches && e.button != 0) {
        return;
      }
      e.stopPropagation();
      e.preventDefault();

      e = e.changedTouches ? e.changedTouches[0] : e;
      this.dragging = true;
      this.start.x = e.pageX - this.position.x;
      this.start.y = e.pageY - this.position.y;

      document.body.addEventListener('mousemove', this.onDrag);
      document.body.addEventListener('touchmove', this.onDrag);
      document.body.addEventListener('mouseup', this.stopDrag);
      document.body.addEventListener('touchend', this.stopDrag);
    },
    onDrag(e) {
      e.stopPropagation();
      e.preventDefault();

      e = e.changedTouches ? e.changedTouches[0] : e;
      this.translate.x = e.pageX - this.start.x - this.position.x;
      this.translate.y = e.pageY - this.start.y - this.position.y;
    },
    stopDrag(e) {
      this.dragging = false;
      this.position.x = e.pageX - this.start.x;
      this.position.y = e.pageY - this.start.y;
      this.translate.x = 0;
      this.translate.y = 0;

      document.body.removeEventListener('mousemove', this.onDrag);
      document.body.removeEventListener('touchmove', this.onDrag);
      document.body.removeEventListener('mouseup', this.stopDrag);
      document.body.removeEventListener('touchend', this.stopDrag);
    }
  },
  watch: {
    show: {
      handler(val) {
        const body = document.body;
        if (val) {
          this.$refs.modalContent.focus();
          this.display = true;
          body.classList.add('modal-open');
          const scrollBarWidth = __WEBPACK_IMPORTED_MODULE_0__utils_getScrollBarWidth_js___default()();
          if (scrollBarWidth !== 0) {
            body.style.paddingRight = scrollBarWidth + 'px';
          }
          this.$emit('open');
        } else {
          setTimeout(() => {
            this.display = false;
            body.classList.remove('modal-open');
            body.style.paddingRight = '0';
            this.$emit('close');
          }, 300);
        }
        this.$emit('visibility-change', val);
      },
      immediate: true
    }
  }
});

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal",
    class: {
      modeless: !_vm.backdrop,
        movable: _vm.draggable,
        dragging: _vm.dragging,
        fade: _vm.effect === 'fade',
        zoom: _vm.effect === 'zoom', in: _vm.show,
    },
    style: ({
      display: _vm.display ? 'block' : 'none',
      top: _vm.position.y + 'px',
      left: _vm.position.x + 'px',
      transform: _vm.translateStyle,
    }),
    attrs: {
      "role": "dialog"
    },
    on: {
      "click": _vm.backdropClick
    }
  }, [_c('div', {
    class: {
      'modal-dialog': true,
      'modal-lg': _vm.large,
      'modal-sm': _vm.small,
    },
    style: ({
      width: _vm.optionalWidth
    }),
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    ref: "modalContent",
    staticClass: "modal-content"
  }, [_vm._t("modal-header", [_c('div', {
    staticClass: "modal-header",
    on: {
      "mousedown": _vm.startDrag,
      "touchstart": _vm.startDrag
    }
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("\n            ×\n          ")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._t("title", [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })])], 2)])]), _vm._v(" "), _vm._t("modal-body", [_c('div', {
    staticClass: "modal-body",
    domProps: {
      "innerHTML": _vm._s(_vm.body)
    }
  })]), _vm._v(" "), _vm._t("modal-footer", [_c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v(_vm._s(_vm.okText))])])])], 2)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f95c69e4", esExports)
  }
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Option_vue__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dcf17538_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Option_vue__ = __webpack_require__(181);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(178)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dcf17538"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Option_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dcf17538_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Option_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Option.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Option.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dcf17538", Component.options)
  } else {
    hotAPI.reload("data-v-dcf17538", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6c069605", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dcf17538\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Option.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dcf17538\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Option.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\na span.check-mark[data-v-dcf17538] {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Option.vue?c9cb4618"],"names":[],"mappings":";AA8CA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;CACA","file":"Option.vue","sourcesContent":["<template>\n  <li style=\"position:relative\">\n    <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\">\n      <span ref=\"v\"><slot></slot></span>\n      <span :class=\"[iconset, iconset + '-ok']\" class=\"check-mark\" v-show=\"chosen\"></span>\n    </a>\n  </li>\n</template>\n\n<script>\n  export default {\n    props: {\n      value: {\n        type: String\n      },\n      iconset: {\n        type: String,\n        default: 'glyphicon',\n      },\n    },\n    data() {\n      return {\n        chosen: false\n      }\n    },\n    computed: {\n      chosen() {\n        return this.$parent.value.indexOf(this.value) !== -1\n      }\n    },\n    methods: {\n      handleClick() {\n        const parent = this.$parent\n        if (parent.multiple) {\n          const index = parent.value.indexOf(this.value)\n          index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1)\n        } else {\n          parent.value = [this.value]\n          parent.show = false\n        }\n      }\n    }\n  }\n</script>\n\n<style scoped>\n  a span.check-mark {\n    position: absolute;\n    display: inline-block;\n    right: 15px;\n    margin-top: 5px;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    value: {
      type: String
    },
    iconset: {
      type: String,
      default: 'glyphicon'
    }
  },
  data() {
    return {
      chosen: false
    };
  },
  computed: {
    chosen() {
      return this.$parent.value.indexOf(this.value) !== -1;
    }
  },
  methods: {
    handleClick() {
      const parent = this.$parent;
      if (parent.multiple) {
        const index = parent.value.indexOf(this.value);
        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
      } else {
        parent.value = [this.value];
        parent.show = false;
      }
    }
  }
});

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticStyle: {
      "position": "relative"
    }
  }, [_c('a', {
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "mousedown": function($event) {
        $event.preventDefault();
        _vm.handleClick($event)
      }
    }
  }, [_c('span', {
    ref: "v"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.chosen),
      expression: "chosen"
    }],
    staticClass: "check-mark",
    class: [_vm.iconset, _vm.iconset + '-ok']
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dcf17538", esExports)
  }
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Panel_vue__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_acbf5236_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Panel_vue__ = __webpack_require__(186);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Panel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_acbf5236_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Panel_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Panel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Panel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-acbf5236", Component.options)
  } else {
    hotAPI.reload("data-v-acbf5236", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c780b664", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-acbf5236\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panel.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-acbf5236\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.panel-heading {\n  cursor: pointer;\n}\n.collapse-enter-active, .collapse-leave-active {\n  transition: max-height .5s ease;\n  overflow: hidden;\n}\n.collapse-enter,\n.collapse-leave-active {\n  max-height: 0!important;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Panel.vue?544edee8"],"names":[],"mappings":";AAgDA;EACA,gBAAA;CACA;AAEA;EACA,gCAAA;EACA,iBAAA;CACA;AAEA;;EAEA,wBAAA;CACA","file":"Panel.vue","sourcesContent":["<template>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" @click=\"isOpen = !isOpen\">\n      <h4 class=\"panel-title\">\n        <slot name=\"header\">{{ header }}</slot>\n      </h4>\n    </div>\n    <transition name=\"collapse\" @after-enter=\"afterEnter\" @before-leave=\"beforeLeave\">\n      <div class=\"panel-collapse\" v-show=\"isOpen\">\n        <div class=\"panel-body\">\n          <slot></slot>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\n  export default {\n    props: {\n      isOpen: {\n        type: Boolean,\n        default: false,\n      },\n      header: String,\n    },\n    watch: {\n      isOpen() {\n        if (this.isOpen) {\n          this.$parent.setActivePanel(this);\n        }\n        this.$emit('visibility-change', this.isOpen);\n      },\n    },\n    methods: {\n      afterEnter(el) {\n        el.style.maxHeight = \"\";\n      },\n      beforeLeave(el) {\n        el.style.maxHeight = `${el.offsetHeight}px`;\n        // Recalculate DOM before the class gets added.\n        return el.offsetHeight;\n      },\n    },\n  }\n</script>\n\n<style>\n  .panel-heading {\n    cursor: pointer;\n  }\n\n  .collapse-enter-active, .collapse-leave-active {\n    transition: max-height .5s ease;\n    overflow: hidden;\n  }\n\n  .collapse-enter,\n  .collapse-leave-active {\n    max-height: 0!important;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    header: String
  },
  watch: {
    isOpen() {
      if (this.isOpen) {
        this.$parent.setActivePanel(this);
      }
      this.$emit('visibility-change', this.isOpen);
    }
  },
  methods: {
    afterEnter(el) {
      el.style.maxHeight = "";
    },
    beforeLeave(el) {
      el.style.maxHeight = `${el.offsetHeight}px`;
      // Recalculate DOM before the class gets added.
      return el.offsetHeight;
    }
  }
});

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading",
    on: {
      "click": function($event) {
        _vm.isOpen = !_vm.isOpen
      }
    }
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_vm._t("header", [_vm._v(_vm._s(_vm.header))])], 2)]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "collapse"
    },
    on: {
      "after-enter": _vm.afterEnter,
      "before-leave": _vm.beforeLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    staticClass: "panel-collapse"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_vm._t("default")], 2)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-acbf5236", esExports)
  }
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4b38c92b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7680f674\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7680f674\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fade-enter-active, .fade-leave-active,\n.scale-enter-active, .scale-leave-active {\n  transition-property: opacity, transform;\n  transition-duration: .2s;\n  transition-timing-function: ease;\n}\n.fade-enter, .fade-leave-active {\n  opacity: 0;\n}\n.scale-enter, .scale-leave-active {\n  transform: scale(0);\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Popover.vue?14da7008"],"names":[],"mappings":";AA4HA;;EAEA,wCAAA;EACA,yBAAA;EACA,iCAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,oBAAA;CACA","file":"Popover.vue","sourcesContent":["<template>\n  <div>\n    <span ref=\"trigger\">\n      <slot></slot>\n    </span>\n    <transition :name=\"effect\">\n      <div class=\"popover\" :class=\"{\n        top:    placement === 'top',\n        left:   placement === 'left',\n        right:  placement === 'right',\n        bottom: placement === 'bottom',\n      }\" :style=\"{display: show ? 'block' : 'none'}\" ref=\"popover\" v-show=\"show\">\n        <div class=\"arrow\"></div>\n        <h3 class=\"popover-title\" v-show=\"title\">\n          <slot name=\"title\">{{title}}</slot>\n        </h3>\n        <div class=\"popover-content\">\n          <slot name=\"content\">\n            <span v-html=\"content\"></span>\n          </slot>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    trigger: {\n      type: String,\n      default: 'click',\n    },\n    effect: {\n      type: String,\n      default: 'fadein',\n    },\n    title: {\n      type: String,\n    },\n    content: {\n      type: String,\n    },\n    header: {\n      type: Boolean,\n      default: true,\n    },\n    placement: {\n      type: String,\n    },\n  },\n  data() {\n    return {\n      position: {\n        top: 0,\n        left: 0,\n      },\n      show: true,\n    };\n  },\n  methods: {\n    toggle() {\n      this.show = !this.show;\n    },\n    display() {\n      this.show = true;\n    },\n    hide() {\n      this.show = false;\n    },\n  },\n  mounted() {\n    if (!this.$refs.popover) {\n      console.error('Couldn\\'t find popover ref in your component that uses popoverMixin.');\n      return;\n    }\n    const popover = this.$refs.popover;\n    const trig = this.$refs.trigger.children[0];\n    if (this.trigger === 'hover') {\n      trig.addEventListener('mouseenter', this.display);\n      trig.addEventListener('mouseleave', this.hide);\n    } else if (this.trigger === 'focus') {\n      trig.addEventListener('focus', this.display);\n      trig.addEventListener('blur', this.hide);\n    } else {\n      trig.addEventListener('click', this.toggle);\n    }\n\n    switch (this.placement) {\n    case 'top':\n      this.position.left = trig.offsetLeft - popover.offsetWidth / 2 + trig.offsetWidth / 2;\n      this.position.top = trig.offsetTop - popover.offsetHeight;\n      break;\n    case 'left':\n      this.position.left = trig.offsetLeft - popover.offsetWidth;\n      this.position.top = trig.offsetTop + trig.offsetHeight / 2 - popover.offsetHeight / 2;\n      break;\n    case 'right':\n      this.position.left = trig.offsetLeft + trig.offsetWidth;\n      this.position.top = trig.offsetTop + trig.offsetHeight / 2 - popover.offsetHeight / 2;\n      break;\n    case 'bottom':\n      this.position.left = trig.offsetLeft - popover.offsetWidth / 2 + trig.offsetWidth / 2;\n      this.position.top = trig.offsetTop + trig.offsetHeight;\n      break;\n    default:\n      console.log('Wrong placement prop');\n    }\n    popover.style.top = `${this.position.top}px`;\n    popover.style.left = `${this.position.left}px`;\n    this.toggle();\n  },\n  beforeDestroy() {\n    const trig = this.$refs.trigger.children[0];\n    trig.removeEventListener('mouseenter', this.display);\n    trig.removeEventListener('mouseleave', this.hide);\n    trig.removeEventListener('focus', this.display);\n    trig.removeEventListener('blur', this.hide);\n    trig.removeEventListener('click', this.toggle);\n  },\n};\n</script>\n\n<style>\n  .fade-enter-active, .fade-leave-active,\n  .scale-enter-active, .scale-leave-active {\n    transition-property: opacity, transform;\n    transition-duration: .2s;\n    transition-timing-function: ease;\n  }\n  .fade-enter, .fade-leave-active {\n    opacity: 0;\n  }\n  .scale-enter, .scale-leave-active {\n    transform: scale(0);\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    effect: {
      type: String,
      default: 'fadein'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    header: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String
    }
  },
  data() {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: true
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    display() {
      this.show = true;
    },
    hide() {
      this.show = false;
    }
  },
  mounted() {
    if (!this.$refs.popover) {
      console.error('Couldn\'t find popover ref in your component that uses popoverMixin.');
      return;
    }
    const popover = this.$refs.popover;
    const trig = this.$refs.trigger.children[0];
    if (this.trigger === 'hover') {
      trig.addEventListener('mouseenter', this.display);
      trig.addEventListener('mouseleave', this.hide);
    } else if (this.trigger === 'focus') {
      trig.addEventListener('focus', this.display);
      trig.addEventListener('blur', this.hide);
    } else {
      trig.addEventListener('click', this.toggle);
    }

    switch (this.placement) {
      case 'top':
        this.position.left = trig.offsetLeft - popover.offsetWidth / 2 + trig.offsetWidth / 2;
        this.position.top = trig.offsetTop - popover.offsetHeight;
        break;
      case 'left':
        this.position.left = trig.offsetLeft - popover.offsetWidth;
        this.position.top = trig.offsetTop + trig.offsetHeight / 2 - popover.offsetHeight / 2;
        break;
      case 'right':
        this.position.left = trig.offsetLeft + trig.offsetWidth;
        this.position.top = trig.offsetTop + trig.offsetHeight / 2 - popover.offsetHeight / 2;
        break;
      case 'bottom':
        this.position.left = trig.offsetLeft - popover.offsetWidth / 2 + trig.offsetWidth / 2;
        this.position.top = trig.offsetTop + trig.offsetHeight;
        break;
      default:
        console.log('Wrong placement prop');
    }
    popover.style.top = `${this.position.top}px`;
    popover.style.left = `${this.position.left}px`;
    this.toggle();
  },
  beforeDestroy() {
    const trig = this.$refs.trigger.children[0];
    trig.removeEventListener('mouseenter', this.display);
    trig.removeEventListener('mouseleave', this.hide);
    trig.removeEventListener('focus', this.display);
    trig.removeEventListener('blur', this.hide);
    trig.removeEventListener('click', this.toggle);
  }
});

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', {
    ref: "trigger"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.effect
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    ref: "popover",
    staticClass: "popover",
    class: {
      top: _vm.placement === 'top',
        left: _vm.placement === 'left',
        right: _vm.placement === 'right',
        bottom: _vm.placement === 'bottom',
    },
    style: ({
      display: _vm.show ? 'block' : 'none'
    })
  }, [_c('div', {
    staticClass: "arrow"
  }), _vm._v(" "), _c('h3', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.title),
      expression: "title"
    }],
    staticClass: "popover-title"
  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), _c('div', {
    staticClass: "popover-content"
  }, [_vm._t("content", [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])], 2)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7680f674", esExports)
  }
}

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Progressbar_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12dfefe7_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Progressbar_vue__ = __webpack_require__(193);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Progressbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12dfefe7_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Progressbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Progressbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Progressbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12dfefe7", Component.options)
  } else {
    hotAPI.reload("data-v-12dfefe7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    now: {
      type: Number,
      require: true
    },
    label: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    }
  }
});

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: {
      'progress-bar': true,
      'progress-bar-success': _vm.type == 'success',
        'progress-bar-warning': _vm.type == 'warning',
        'progress-bar-info': _vm.type == 'info',
        'progress-bar-danger': _vm.type == 'danger',
        'progress-bar-striped': _vm.striped,
        'active': _vm.animated
    },
    style: ({
      width: _vm.now + '%'
    }),
    attrs: {
      "role": "progressbar"
    }
  }, [_vm._v("\n  " + _vm._s(_vm.label ? _vm.now + '%' : '') + "\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12dfefe7", esExports)
  }
}

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6faee548_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Radio_vue__ = __webpack_require__(198);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(195)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6faee548"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6faee548_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Radio_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Radio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Radio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6faee548", Component.options)
  } else {
    hotAPI.reload("data-v-6faee548", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6741edf8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6faee548\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6faee548\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\ninput[type='radio'][data-v-6faee548] {\n  display: none;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Radio.vue?167e9381"],"names":[],"mappings":";AA6CA;EACA,cAAA;CACA","file":"Radio.vue","sourcesContent":["<template>\n  <label class=\"btn\" :class=\"{\n    'active':    checked,\n    'btn-success': type == 'success',\n    'btn-warning': type == 'warning',\n    'btn-info':  type == 'info',\n    'btn-danger':  type == 'danger',\n    'btn-default': type == 'default',\n    'btn-primary': type == 'primary',\n  }\" :title=\"title\">\n    <input :value=\"value\" :name=\"$parent.name\" :tabindex=\"tabindex\" type=\"radio\" autocomplete=\"off\" :checked=\"checked\" @click=\"handleClick\">\n    <slot></slot>\n  </label>\n</template>\n\n<script>\n  export default {\n    props: {\n      value: String,\n      tabindex: String,\n      title: String,\n      type: {\n        type: String,\n        default: 'default',\n      },\n    },\n    computed: {\n      checked() {\n        return this.$parent.value == this.value;\n      },\n    },\n    methods: {\n      handleClick() {\n        this.$parent.value = this.value;\n      },\n    },\n    watch: {\n      value() {\n        this.$emit('input', this.value);\n      },\n    },\n  };\n</script>\n\n<style scoped>\n  input[type='radio'] {\n    display: none;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    value: String,
    tabindex: String,
    title: String,
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    checked() {
      return this.$parent.value == this.value;
    }
  },
  methods: {
    handleClick() {
      this.$parent.value = this.value;
    }
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    }
  }
});

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "btn",
    class: {
      'active': _vm.checked,
      'btn-success': _vm.type == 'success',
        'btn-warning': _vm.type == 'warning',
        'btn-info': _vm.type == 'info',
        'btn-danger': _vm.type == 'danger',
        'btn-default': _vm.type == 'default',
        'btn-primary': _vm.type == 'primary',
    },
    attrs: {
      "title": _vm.title
    }
  }, [_c('input', {
    attrs: {
      "name": _vm.$parent.name,
      "tabindex": _vm.tabindex,
      "type": "radio",
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.value,
      "checked": _vm.checked
    },
    on: {
      "click": _vm.handleClick
    }
  }), _vm._v(" "), _vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6faee548", esExports)
  }
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RadioGroup_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0878b133_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_RadioGroup_vue__ = __webpack_require__(201);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RadioGroup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0878b133_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_RadioGroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/RadioGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RadioGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0878b133", Component.options)
  } else {
    hotAPI.reload("data-v-0878b133", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: String,
    value: String
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    }
  }
});

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-group",
    attrs: {
      "data-toggle": "buttons"
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0878b133", esExports)
  }
}

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Select_vue__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4617532a_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Select_vue__ = __webpack_require__(206);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4617532a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Select_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4617532a_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Select_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4617532a", Component.options)
  } else {
    hotAPI.reload("data-v-4617532a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5261f386", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4617532a\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4617532a\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.bs-searchbox[data-v-4617532a] {\n  padding: 4px 8px;\n}\n.btn-group .dropdown-menu .notify[data-v-4617532a] {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n  pointer-events: none;\n  opacity: .9;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Select.vue?ee87e398"],"names":[],"mappings":";AAoKA;EACA,iBAAA;CACA;AAEA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,0BAAA;EACA,+CAAA;EACA,qBAAA;EACA,YAAA;CACA","file":"Select.vue","sourcesContent":["<template>\n  <div class=\"btn-group\" :class=\"{open: show}\">\n    <button ref=\"btn\" type=\"button\" class=\"btn btn-default dropdown-toggle\" @click=\"toggleDropdown\" @blur=\"show = (search ? show : false)\" :disabled=\"disabled\">\n      <span class=\"btn-placeholder\" v-show=\"showPlaceholder\">{{placeholder}}</span>\n      <span class=\"btn-content\">{{ selectedItems }}</span>\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <template v-if=\"options.length\">\n        <li v-if=\"search\" class=\"bs-searchbox\">\n          <input type=\"text\" placeholder=\"Search\" v-model=\"searchText\" class=\"form-control\" autocomplete=\"off\">\n        </li>\n        <li v-for=\"option in filteredOptions\" :id=\"option.value\" style=\"position:relative\">\n          <a @mousedown.prevent=\"select(option.value)\" style=\"cursor:pointer\">\n      {{ option.label }}\n      <span :class=\"[iconset, iconset + '-ok']\" class=\"check-mark\" v-show=\"isSelected(option.value)\"></span>\n      </a>\n        </li>\n      </template>\n      <slot v-else></slot>\n      <transition name=\"fadein\">\n        <div class=\"notify\" v-show=\"showNotify\">\n          Limit reached ({{limit}} items max).\n        </div>\n      </transition>\n    </ul>\n  </div>\n</template>\n\n<script>\n  export default {\n    props: {\n      options: {\n        type: Array,\n        default () {\n          return [];\n        },\n      },\n      value: [String, Array],\n      placeholder: {\n        type: String,\n        default: 'Nothing Selected',\n      },\n      multiple: {\n        type: Boolean,\n        default: false,\n      },\n      search: { // Allow searching (only works when options are provided)\n        type: Boolean,\n        default: false,\n      },\n      limit: {\n        type: Number,\n        default: 1024,\n      },\n      closeOnSelect: { // only works when multiple==false\n        type: Boolean,\n        default: false,\n      },\n      disabled: {\n        type: Boolean,\n        default: false,\n      },\n      iconset: {\n        type: String,\n        default: 'glyphicon',\n      },\n    },\n    mounted() {\n      if (this.value.constructor !== Array) {\n        if (this.value.length === 0) {\n          this.value = [];\n        } else {\n          this.value = [this.value];\n        }\n      } else {\n        if (!this.multiple && this.value.length > 1) {\n          this.value = this.value.slice(0, 1);\n        } else if (this.multiple && this.value.length > this.limit) {\n          this.value = this.value.slice(0, this.limit);\n        }\n      }\n    },\n    data() {\n      return {\n        searchText: null,\n        show: false,\n        showNotify: false,\n      };\n    },\n    computed: {\n      selectedItems() {\n        let foundItems = [];\n        if (this.value.length) {\n          for (var item of this.value) {\n            if (this.options.length === 0) {\n              //\n              foundItems = this.value;\n            } else {\n              if (typeof item === \"string\") {\n                let option;\n                this.options.some(o => {\n                  if (o.value === item) {\n                    option = o;\n                    return true;\n                  }\n                })\n                option && foundItems.push(option.label);\n              }\n            }\n          }\n          return foundItems.join(', ');\n        }\n      },\n      showPlaceholder() {\n        return this.value.length === 0;\n      },\n      filteredOptions() {\n        return this.options.filter(o => o.value.indexOf(this.searchText) > -1);\n      },\n    },\n    watch: {\n      value(val) {\n        if (val.length > this.limit) {\n          this.showNotify = true;\n          this.value.pop();\n          setTimeout(() => this.showNotify = false, 1000);\n        }\n        this.$emit('input', this.value);\n      },\n    },\n    methods: {\n      select(v) {\n        if (this.value.indexOf(v) === -1) {\n          if (this.multiple) {\n            this.value.push(v);\n          } else {\n            this.value = [v];\n          }\n        } else {\n          if (this.multiple) {\n            const index = this.value.indexOf(v);\n            this.value.splice(index, 1);\n          }\n        }\n        if (this.closeOnSelect) {\n          this.toggleDropdown();\n        }\n      },\n      isSelected(v) {\n        if (this.value.constructor !== Array) {\n          return this.value == v;\n        } else {\n          return this.value.indexOf(v) !== -1;\n        }\n      },\n      toggleDropdown() {\n        this.show = !this.show;\n      },\n    },\n  }\n</script>\n\n<style scoped>\n  .bs-searchbox {\n    padding: 4px 8px;\n  }\n\n  .btn-group .dropdown-menu .notify {\n    position: absolute;\n    bottom: 5px;\n    width: 96%;\n    margin: 0 2%;\n    min-height: 26px;\n    padding: 3px 5px;\n    background: #f5f5f5;\n    border: 1px solid #e3e3e3;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n    pointer-events: none;\n    opacity: .9;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    value: [String, Array],
    placeholder: {
      type: String,
      default: 'Nothing Selected'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    search: { // Allow searching (only works when options are provided)
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 1024
    },
    closeOnSelect: { // only works when multiple==false
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconset: {
      type: String,
      default: 'glyphicon'
    }
  },
  mounted() {
    if (this.value.constructor !== Array) {
      if (this.value.length === 0) {
        this.value = [];
      } else {
        this.value = [this.value];
      }
    } else {
      if (!this.multiple && this.value.length > 1) {
        this.value = this.value.slice(0, 1);
      } else if (this.multiple && this.value.length > this.limit) {
        this.value = this.value.slice(0, this.limit);
      }
    }
  },
  data() {
    return {
      searchText: null,
      show: false,
      showNotify: false
    };
  },
  computed: {
    selectedItems() {
      let foundItems = [];
      if (this.value.length) {
        for (var item of this.value) {
          if (this.options.length === 0) {
            //
            foundItems = this.value;
          } else {
            if (typeof item === "string") {
              let option;
              this.options.some(o => {
                if (o.value === item) {
                  option = o;
                  return true;
                }
              });
              option && foundItems.push(option.label);
            }
          }
        }
        return foundItems.join(', ');
      }
    },
    showPlaceholder() {
      return this.value.length === 0;
    },
    filteredOptions() {
      return this.options.filter(o => o.value.indexOf(this.searchText) > -1);
    }
  },
  watch: {
    value(val) {
      if (val.length > this.limit) {
        this.showNotify = true;
        this.value.pop();
        setTimeout(() => this.showNotify = false, 1000);
      }
      this.$emit('input', this.value);
    }
  },
  methods: {
    select(v) {
      if (this.value.indexOf(v) === -1) {
        if (this.multiple) {
          this.value.push(v);
        } else {
          this.value = [v];
        }
      } else {
        if (this.multiple) {
          const index = this.value.indexOf(v);
          this.value.splice(index, 1);
        }
      }
      if (this.closeOnSelect) {
        this.toggleDropdown();
      }
    },
    isSelected(v) {
      if (this.value.constructor !== Array) {
        return this.value == v;
      } else {
        return this.value.indexOf(v) !== -1;
      }
    },
    toggleDropdown() {
      this.show = !this.show;
    }
  }
});

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-group",
    class: {
      open: _vm.show
    }
  }, [_c('button', {
    ref: "btn",
    staticClass: "btn btn-default dropdown-toggle",
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.toggleDropdown,
      "blur": function($event) {
        _vm.show = (_vm.search ? _vm.show : false)
      }
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPlaceholder),
      expression: "showPlaceholder"
    }],
    staticClass: "btn-placeholder"
  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _c('span', {
    staticClass: "btn-content"
  }, [_vm._v(_vm._s(_vm.selectedItems))]), _vm._v(" "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [(_vm.options.length) ? [(_vm.search) ? _c('li', {
    staticClass: "bs-searchbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchText),
      expression: "searchText"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Search",
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.searchText)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchText = $event.target.value
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.filteredOptions), function(option) {
    return _c('li', {
      staticStyle: {
        "position": "relative"
      },
      attrs: {
        "id": option.value
      }
    }, [_c('a', {
      staticStyle: {
        "cursor": "pointer"
      },
      on: {
        "mousedown": function($event) {
          $event.preventDefault();
          _vm.select(option.value)
        }
      }
    }, [_vm._v("\n    " + _vm._s(option.label) + "\n    "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.isSelected(option.value)),
        expression: "isSelected(option.value)"
      }],
      staticClass: "check-mark",
      class: [_vm.iconset, _vm.iconset + '-ok']
    })])])
  })] : _vm._t("default"), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fadein"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showNotify),
      expression: "showNotify"
    }],
    staticClass: "notify"
  }, [_vm._v("\n        Limit reached (" + _vm._s(_vm.limit) + " items max).\n      ")])])], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4617532a", esExports)
  }
}

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tab_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f275a36_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Tab_vue__ = __webpack_require__(211);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(208)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f275a36"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f275a36_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Tab_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Tab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f275a36", Component.options)
  } else {
    hotAPI.reload("data-v-4f275a36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(209);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2e2b8be8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f275a36\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tab.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f275a36\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-4f275a36], .fade-leave-active[data-v-4f275a36] {\n  transition: opacity .2s ease;\n}\n.fade-enter[data-v-4f275a36], .fade-leave-active[data-v-4f275a36] {\n  opacity: 0;\n}\n.tab-content > .tab-pane[data-v-4f275a36] {\n  display: block;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Tab.vue?5280fb1c"],"names":[],"mappings":";AAqCA;EACA,6BAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,eAAA;CACA","file":"Tab.vue","sourcesContent":["<template>\n  <transition :name=\"$parent.effect\">\n    <div role=\"tabpanel\" class=\"tab-pane\" :class=\"{hide:!show, active:show}\" v-show=\"show\" :transition=\"$parent.effect\">\n      <slot></slot>\n    </div>\n  </transition>\n</template>\n\n<script>\n  export default {\n    props: {\n      icon: String,\n      header: {\n        type: String,\n      },\n      disabled: {\n        type: Boolean,\n        default: false,\n      },\n    },\n    data() {\n      return {\n        index: 0,\n      };\n    },\n    computed: {\n      show() {\n        return (this.$parent.active == this.index);\n      },\n    },\n    created() {\n      this.$parent.registerTab(this);\n    },\n  }\n</script>\n\n<style scoped>\n  .fade-enter-active, .fade-leave-active {\n    transition: opacity .2s ease;\n  }\n  .fade-enter, .fade-leave-active {\n    opacity: 0;\n  }\n  .tab-content > .tab-pane {\n    display: block;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    icon: String,
    header: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      index: 0
    };
  },
  computed: {
    show() {
      return this.$parent.active == this.index;
    }
  },
  created() {
    this.$parent.registerTab(this);
  }
});

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.$parent.effect
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "tab-pane",
    class: {
      hide: !_vm.show, active: _vm.show
    },
    attrs: {
      "role": "tabpanel",
      "transition": _vm.$parent.effect
    }
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f275a36", esExports)
  }
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd20e4a6_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs_vue__ = __webpack_require__(216);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(213)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cd20e4a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd20e4a6_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cd20e4a6", Component.options)
  } else {
    hotAPI.reload("data-v-cd20e4a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6c60b412", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cd20e4a6\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cd20e4a6\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\nul[data-v-cd20e4a6] {\n  position: relative;\n}\n.nav-tabs[data-v-cd20e4a6] {\n  position: relative;\n  margin-bottom: 15px;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Tabs.vue?800c56ee"],"names":[],"mappings":";AAwKA;EACA,mBAAA;CACA;AAEA;EACA,mBAAA;EACA,oBAAA;CACA","file":"Tabs.vue","sourcesContent":["<template>\n  <div>\n    <!-- Nav tabs -->\n    <ul ref=\"tabsContainer\" class=\"nav\" :class=\"['nav-' + navStyle]\" role=\"tablist\">\n      <dropdown-li v-show=\"overflowIndex\" ref=\"dropdown\" class=\"pull-right tabdrop\" :class=\"{'active': active >= overflowIndex}\">\n        <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li v-for=\"(tab, index) in tabs\" v-if=\"isDropdownTab(tab, index)\" @click.prevent=\"tabclick(tab, index)\" :disabled=\"tab.disabled\">\n            <a href=\"#\">\n              <span v-if=\"tab.icon\" :class=\"[iconset, iconset + '-' + tab.icon]\"></span>\n              <span v-html=\"tab.header\"></span>\n            </a>\n          </li>\n        </ul>\n      </dropdown-li>\n\n      <li v-for=\"(tab, index) in tabs\" :class=\"{\n        'active': (index === active),\n        'disabled': tab.disabled\n      }\" @click.prevent=\"tabclick(tab, index)\" :disabled=\"tab.disabled\" v-if=\"isRegularTab(tab, index)\">\n        <a class=\"tab\" href=\"#\">\n          <span v-if=\"tab.icon\"  :class=\"[iconset, iconset + '-' + tab.icon]\"></span>\n          <span v-html=\"tab.header\"></span>\n        </a>\n      </li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div ref=\"tabContent\" class=\"tab-content\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\n  import DropdownLi from './DropdownLi.vue';\n\n  export default {\n    components: {\n      DropdownLi,\n    },\n    props: {\n      navStyle: {\n        type: String,\n        default: 'tabs',\n      },\n      effect: {\n        type: String,\n        default: 'fade',\n      },\n      active: {\n        type: Number,\n        default: 0,\n      },\n      iconset: {\n        type: String,\n        default: 'glyphicon',\n      },\n    },\n    data() {\n      return {\n        overflowIndex: 0,\n        resizeTimer: false,\n        tabs: [],\n      };\n    },\n    created() {\n      window.addEventListener('resize', this.timedReflow);\n    },\n    beforeDestroy() {\n      window.removeEventListener('resize', this.timedReflow);\n    },\n    mounted() {\n      this.$nextTick(this.initTabs);\n    },\n    watch: {\n      active() {\n        const child = this.getActiveChild();\n        if (child) {\n          this.$emit('change', child);\n          child.$emit('activated');\n        }\n      },\n    },\n    methods: {\n      isRegularTab(tab, index) {\n        return tab.$el.getAttribute('role') == 'tabpanel' && (!this.overflowIndex || index < this.overflowIndex);\n      },\n\n      isDropdownTab(tab, index) {\n        return tab.$el.getAttribute('role') == 'tabpanel' && (this.overflowIndex && index >= this.overflowIndex);\n      },\n\n      tabclick(tab, index) {\n        if (!tab.disabled) {\n          this.active = index;\n        }\n      },\n\n      getActiveChild() {\n        for (const child of this.$children) {\n          if (child.$el.getAttribute('role') == 'tabpanel' && child.index == this.active) {\n            return child;\n          }\n        }\n        return false;\n      },\n\n      timedReflow() {\n        clearTimeout(this.resizeTimer);\n        this.resizeTimer = setTimeout(this.reflow, 100);\n      },\n\n      findFirstOverflow(verify) {\n        const tabs = [].slice.call(this.$refs.tabsContainer.children);\n        let i = 0;\n        for (const tab of tabs) {\n          if (tab.nodeName != 'LI' || tab == this.$refs.dropdown.$el) {\n            continue;\n          }\n          if (tab.offsetTop > 0) {\n            this.overflowIndex = i;\n            break;\n          }\n          i++;\n        }\n        if (!verify) {\n          this.$nextTick(function() {\n            this.findFirstOverflow(true);\n          }.bind(this));\n        }\n      },\n\n      reflow() {\n        this.overflowIndex = 0;\n        this.$nextTick(this.findFirstOverflow);\n      },\n\n      registerTab(tab) {\n        if (!this.$refs.tabContent) {\n          return;\n        }\n        this.initTabs();\n      },\n\n      initTabs() {\n        this.sortTabs();\n        this.timedReflow();\n      },\n\n      sortTabs() {\n        let index = 0;\n        const children = [].slice.call(this.$refs.tabContent.children);\n        this.tabs = [];\n        for (const pane of children) {\n          for (const tab of this.$children) {\n            if (tab.$el == pane) {\n              tab.index = index++;\n              this.tabs.push(tab);\n              break;\n            }\n          }\n        }\n      },\n    }\n  }\n</script>\n\n<style scoped>\n  ul {\n    position: relative;\n  }\n\n  .nav-tabs {\n    position: relative;\n    margin-bottom: 15px;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DropdownLi_vue__ = __webpack_require__(36);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    DropdownLi: __WEBPACK_IMPORTED_MODULE_0__DropdownLi_vue__["default"]
  },
  props: {
    navStyle: {
      type: String,
      default: 'tabs'
    },
    effect: {
      type: String,
      default: 'fade'
    },
    active: {
      type: Number,
      default: 0
    },
    iconset: {
      type: String,
      default: 'glyphicon'
    }
  },
  data() {
    return {
      overflowIndex: 0,
      resizeTimer: false,
      tabs: []
    };
  },
  created() {
    window.addEventListener('resize', this.timedReflow);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.timedReflow);
  },
  mounted() {
    this.$nextTick(this.initTabs);
  },
  watch: {
    active() {
      const child = this.getActiveChild();
      if (child) {
        this.$emit('change', child);
        child.$emit('activated');
      }
    }
  },
  methods: {
    isRegularTab(tab, index) {
      return tab.$el.getAttribute('role') == 'tabpanel' && (!this.overflowIndex || index < this.overflowIndex);
    },

    isDropdownTab(tab, index) {
      return tab.$el.getAttribute('role') == 'tabpanel' && this.overflowIndex && index >= this.overflowIndex;
    },

    tabclick(tab, index) {
      if (!tab.disabled) {
        this.active = index;
      }
    },

    getActiveChild() {
      for (const child of this.$children) {
        if (child.$el.getAttribute('role') == 'tabpanel' && child.index == this.active) {
          return child;
        }
      }
      return false;
    },

    timedReflow() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(this.reflow, 100);
    },

    findFirstOverflow(verify) {
      const tabs = [].slice.call(this.$refs.tabsContainer.children);
      let i = 0;
      for (const tab of tabs) {
        if (tab.nodeName != 'LI' || tab == this.$refs.dropdown.$el) {
          continue;
        }
        if (tab.offsetTop > 0) {
          this.overflowIndex = i;
          break;
        }
        i++;
      }
      if (!verify) {
        this.$nextTick(function () {
          this.findFirstOverflow(true);
        }.bind(this));
      }
    },

    reflow() {
      this.overflowIndex = 0;
      this.$nextTick(this.findFirstOverflow);
    },

    registerTab(tab) {
      if (!this.$refs.tabContent) {
        return;
      }
      this.initTabs();
    },

    initTabs() {
      this.sortTabs();
      this.timedReflow();
    },

    sortTabs() {
      let index = 0;
      const children = [].slice.call(this.$refs.tabContent.children);
      this.tabs = [];
      for (const pane of children) {
        for (const tab of this.$children) {
          if (tab.$el == pane) {
            tab.index = index++;
            this.tabs.push(tab);
            break;
          }
        }
      }
    }
  }
});

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ul', {
    ref: "tabsContainer",
    staticClass: "nav",
    class: ['nav-' + _vm.navStyle],
    attrs: {
      "role": "tablist"
    }
  }, [_c('dropdown-li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.overflowIndex),
      expression: "overflowIndex"
    }],
    ref: "dropdown",
    staticClass: "pull-right tabdrop",
    class: {
      'active': _vm.active >= _vm.overflowIndex
    }
  }, [_c('ul', {
    staticClass: "dropdown-menu",
    slot: "dropdown-menu"
  }, _vm._l((_vm.tabs), function(tab, index) {
    return (_vm.isDropdownTab(tab, index)) ? _c('li', {
      attrs: {
        "disabled": tab.disabled
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.tabclick(tab, index)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [(tab.icon) ? _c('span', {
      class: [_vm.iconset, _vm.iconset + '-' + tab.icon]
    }) : _vm._e(), _vm._v(" "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(tab.header)
      }
    })])]) : _vm._e()
  }))]), _vm._v(" "), _vm._l((_vm.tabs), function(tab, index) {
    return (_vm.isRegularTab(tab, index)) ? _c('li', {
      class: {
        'active': (index === _vm.active),
        'disabled': tab.disabled
      },
      attrs: {
        "disabled": tab.disabled
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.tabclick(tab, index)
        }
      }
    }, [_c('a', {
      staticClass: "tab",
      attrs: {
        "href": "#"
      }
    }, [(tab.icon) ? _c('span', {
      class: [_vm.iconset, _vm.iconset + '-' + tab.icon]
    }) : _vm._e(), _vm._v(" "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(tab.header)
      }
    })])]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    ref: "tabContent",
    staticClass: "tab-content"
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cd20e4a6", esExports)
  }
}

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d55d1b8_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltip_vue__ = __webpack_require__(221);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(218)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d55d1b8_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltip_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Tooltip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tooltip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d55d1b8", Component.options)
  } else {
    hotAPI.reload("data-v-2d55d1b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7b17a484", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d55d1b8\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d55d1b8\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.tooltip {\n  opacity: .9\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Tooltip.vue?1ff79474"],"names":[],"mappings":";AA0CA;EACA,WAAA;CACA","file":"Tooltip.vue","sourcesContent":["<template>\n  <div>\n    <span ref=\"trigger\">\n      <slot></slot>\n    </span>\n    <transition :name=\"effect\">\n      <div ref=\"popover\" class=\"tooltip\" :class=\"{\n        'top':    placement === 'top',\n        'left':   placement === 'left',\n        'right':  placement === 'right',\n        'bottom': placement === 'bottom',\n      }\" v-show=\"show\" role=\"tooltip\">\n        <div class=\"tooltip-arrow\"></div>\n        <div class=\"tooltip-inner\">\n          <slot name=\"content\">\n            <span v-html=\"content\"></span>\n          </slot>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\n  import Popover from './Popover.vue';\n\n  export default {\n    extends: Popover,\n    props: {\n      trigger: {\n        type: String,\n        default: 'hover',\n      },\n      effect: {\n        type: String,\n        default: 'scale',\n      },\n    },\n  };\n</script>\n\n<style>\n  .tooltip {\n    opacity: .9\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Popover_vue__ = __webpack_require__(37);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0__Popover_vue__["default"],
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    effect: {
      type: String,
      default: 'scale'
    }
  }
});

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', {
    ref: "trigger"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.effect
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    ref: "popover",
    staticClass: "tooltip",
    class: {
      'top': _vm.placement === 'top',
        'left': _vm.placement === 'left',
        'right': _vm.placement === 'right',
        'bottom': _vm.placement === 'bottom',
    },
    attrs: {
      "role": "tooltip"
    }
  }, [_c('div', {
    staticClass: "tooltip-arrow"
  }), _vm._v(" "), _c('div', {
    staticClass: "tooltip-inner"
  }, [_vm._t("content", [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])], 2)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d55d1b8", esExports)
  }
}

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Typeahead_vue__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7962fcb0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Typeahead_vue__ = __webpack_require__(227);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(223)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Typeahead_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7962fcb0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Typeahead_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Typeahead.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Typeahead.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7962fcb0", Component.options)
  } else {
    hotAPI.reload("data-v-7962fcb0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("793813ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7962fcb0\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7962fcb0\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.dropdown-menu> li> a {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/home/mtorromeo/development/vue-strap/src/src/Typeahead.vue?41fdfc88"],"names":[],"mappings":";AA0IA;EACA,gBAAA;CACA","file":"Typeahead.vue","sourcesContent":["<template>\n  <div style=\"position: relative\" v-bind:class=\"{'open':showDropdown}\">\n    <input type=\"text\" class=\"form-control\" :placeholder=\"placeholder\" autocomplete=\"off\" v-model=\"query\" @input=\"update\" @keydown.up=\"up\" @keydown.down=\"down\" @keydown.enter=\"hit\" @keydown.esc=\"reset\" @blur=\"showDropdown = false\" />\n    <ul class=\"dropdown-menu\" ref=\"dropdown\">\n      <li v-for=\"(item, index) in items\" v-bind:class=\"{'active': isActive(index)}\">\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive(index)\">\n          <partial :name=\"templateName\"></partial>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n</template>\n\n<script>\n  import callAjax from './utils/callAjax.js'\n\n  export default {\n    partials: {\n      default: '<span v-html=\"highlight(item, query)\"></span>',\n    },\n    props: {\n      data: {\n        type: Array,\n      },\n      limit: {\n        type: Number,\n        default: 8,\n      },\n      async: {\n        type: String,\n      },\n      template: {\n        type: String,\n      },\n      templateName: {\n        type: String,\n        default: 'default',\n      },\n      key: {\n        type: String,\n        default: null,\n      },\n      matchCase: {\n        type: Boolean,\n        default: false,\n      },\n      matchStart: {\n        type: Boolean,\n        default: false,\n      },\n      onHit: {\n        type: Function,\n        default (items) {\n          this.reset();\n          this.query = items;\n        },\n      },\n      placeholder: {\n        type: String,\n      },\n    },\n    data() {\n      return {\n        query: '',\n        showDropdown: false,\n        noResults: true,\n        current: 0,\n        items: [],\n      };\n    },\n    computed: {\n      primitiveData() {\n        if (this.data) {\n          return this.data.filter(value => {\n            value = this.matchCase ? value : value.toLowerCase();\n            var query = this.matchCase ? this.query : this.query.toLowerCase();\n            return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;\n          }).slice(0, this.limit);\n        }\n      }\n    },\n    created() {\n      this.items = this.primitiveData;\n    },\n    mounted() {\n      // register a partial:\n      if (this.templateName && this.templateName !== 'default') {\n        Vue.partial(this.templateName, this.template);\n      }\n    },\n    methods: {\n      update() {\n        if (!this.query) {\n          this.reset()\n          return false\n        }\n        if (this.data) {\n          this.items = this.primitiveData\n          this.showDropdown = this.items.length ? true : false\n        }\n        if (this.async) {\n          callAjax(this.async + this.query, (data) => {\n            this.items = (this.key ? data[this.key] : data).slice(0, this.limit)\n            this.showDropdown = this.items.length ? true : false\n          })\n        }\n      },\n      reset() {\n        this.items = [];\n        this.query = '';\n        this.loading = false;\n        this.showDropdown = false;\n      },\n      setActive(index) {\n        this.current = index;\n      },\n      isActive(index) {\n        return this.current === index;\n      },\n      hit(e) {\n        e.preventDefault()\n        this.onHit(this.items[this.current], this);\n      },\n      up() {\n        if (this.current > 0) this.current--;\n      },\n      down() {\n        if (this.current < this.items.length - 1) this.current++;\n      },\n      highlight(value, phrase) {\n        return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');\n      },\n    },\n  };\n</script>\n\n<style>\n  .dropdown-menu> li> a {\n    cursor: pointer;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_callAjax_js__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_callAjax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_callAjax_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  partials: {
    default: '<span v-html="highlight(item, query)"></span>'
  },
  props: {
    data: {
      type: Array
    },
    limit: {
      type: Number,
      default: 8
    },
    async: {
      type: String
    },
    template: {
      type: String
    },
    templateName: {
      type: String,
      default: 'default'
    },
    key: {
      type: String,
      default: null
    },
    matchCase: {
      type: Boolean,
      default: false
    },
    matchStart: {
      type: Boolean,
      default: false
    },
    onHit: {
      type: Function,
      default(items) {
        this.reset();
        this.query = items;
      }
    },
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      query: '',
      showDropdown: false,
      noResults: true,
      current: 0,
      items: []
    };
  },
  computed: {
    primitiveData() {
      if (this.data) {
        return this.data.filter(value => {
          value = this.matchCase ? value : value.toLowerCase();
          var query = this.matchCase ? this.query : this.query.toLowerCase();
          return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
        }).slice(0, this.limit);
      }
    }
  },
  created() {
    this.items = this.primitiveData;
  },
  mounted() {
    // register a partial:
    if (this.templateName && this.templateName !== 'default') {
      Vue.partial(this.templateName, this.template);
    }
  },
  methods: {
    update() {
      if (!this.query) {
        this.reset();
        return false;
      }
      if (this.data) {
        this.items = this.primitiveData;
        this.showDropdown = this.items.length ? true : false;
      }
      if (this.async) {
        __WEBPACK_IMPORTED_MODULE_0__utils_callAjax_js___default()(this.async + this.query, data => {
          this.items = (this.key ? data[this.key] : data).slice(0, this.limit);
          this.showDropdown = this.items.length ? true : false;
        });
      }
    },
    reset() {
      this.items = [];
      this.query = '';
      this.loading = false;
      this.showDropdown = false;
    },
    setActive(index) {
      this.current = index;
    },
    isActive(index) {
      return this.current === index;
    },
    hit(e) {
      e.preventDefault();
      this.onHit(this.items[this.current], this);
    },
    up() {
      if (this.current > 0) this.current--;
    },
    down() {
      if (this.current < this.items.length - 1) this.current++;
    },
    highlight(value, phrase) {
      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
    }
  }
});

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (callback && httpRequest.readyState === 4 && httpRequest.status === 200) {
      var data = JSON.parse(httpRequest.responseText);
      callback(data);
    }
  };
  httpRequest.open('GET', url);
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.send();
};

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: {
      'open': _vm.showDropdown
    },
    staticStyle: {
      "position": "relative"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }, _vm.update],
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        _vm.up($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        _vm.down($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.hit($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.reset($event)
      }],
      "blur": function($event) {
        _vm.showDropdown = false
      }
    }
  }), _vm._v(" "), _c('ul', {
    ref: "dropdown",
    staticClass: "dropdown-menu"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('li', {
      class: {
        'active': _vm.isActive(index)
      }
    }, [_c('a', {
      on: {
        "mousedown": function($event) {
          $event.preventDefault();
          _vm.hit($event)
        },
        "mousemove": function($event) {
          _vm.setActive(index)
        }
      }
    }, [_c('partial', {
      attrs: {
        "name": _vm.templateName
      }
    })], 1)])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7962fcb0", esExports)
  }
}

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3306937f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__ = __webpack_require__(230);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3306937f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3306937f", Component.options)
  } else {
    hotAPI.reload("data-v-3306937f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    toggleCollapse(e) {
      e.preventDefault();

      // collapse data-target
      var tmp = this.$el.querySelector('[data-target]');
      var id = tmp.getAttribute('data-target');
      var o = document.getElementById(id.substring(1));
      o.classList.toggle('collapse');
    },
    outerClick(e) {
      if (!this.$el.contains(e.target)) {
        this.$el.classList.remove('open');
      }
    }
  },
  mounted() {
    const toggle = this.$el.querySelector('[data-toggle="collapse"]');
    if (toggle) {
      toggle.style.borderRadius = '4px';
      toggle.addEventListener('click', this.toggleCollapse);
    }
    window.addEventListener('click', this.outerClick);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.outerClick);
  }
});

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("dropdown-menu")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3306937f", esExports)
  }
}

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Spinner_vue__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ac4fe3a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Spinner_vue__ = __webpack_require__(236);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Spinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ac4fe3a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Spinner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Spinner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Spinner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ac4fe3a", Component.options)
  } else {
    hotAPI.reload("data-v-5ac4fe3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner_scss__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__spinner_scss__);
//
//
//
//
//
//
//
//
//

// import styling


const MIN_WAIT = 500; // in ms

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      active: false
    };
  },
  props: {
    size: {
      type: String,
      default: 'md'
    },
    text: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    spinnerSize() {
      return this.size ? `spinner-${this.size}` : `spinner-sm`;
    }
  },
  methods: {
    getMinWait(delay = 0) {
      return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay;
    },
    show(options) {
      if (options && options.text) {
        this.text = options.text;
      }
      if (options && options.size) {
        this.size = options.size;
      }
      if (options && options.fixed) {
        this.fixed = options.fixed;
      }

      // block scrolling when spinner is on
      document.body.style.overflowY = 'hidden';

      // activate spinner
      this._started = new Date();
      this.active = true;
    },
    hide() {
      const delay = 0;
      this._spinnerAnimation = setTimeout(() => {
        this.active = false;
        document.body.style.overflowY = this._bodyOverflow;
      }, this.getMinWait(delay));
    }
  },
  destroyed() {
    clearTimeout(this._spinnerAnimation);
    document.body.style.overflowY = this._bodyOverflow;
  },
  mounted() {
    this._bodyOverflow = document.body.style.overflowY || '';
  }
});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(21)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./spinner.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./spinner.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*!\n *\n * Spinner\n * With fallback to IE9\n *\n */\n@keyframes spin {\n  100% {\n    transform: rotate(360deg); } }\n\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9); }\n  .spinner-gritcode.spinner-fixed {\n    position: fixed; }\n  .spinner-gritcode .spinner-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n  .spinner-gritcode .spinner-circle {\n    position: relative;\n    border: 4px solid #ccc;\n    border-right-color: #337ab7;\n    border-radius: 50%;\n    display: inline-block;\n    animation: spin 0.6s linear;\n    animation-iteration-count: infinite;\n    width: 3em;\n    height: 3em;\n    z-index: 2; }\n  .spinner-gritcode .spinner-text {\n    position: relative;\n    text-align: center;\n    margin-top: 0.5em;\n    z-index: 2;\n    width: 100%;\n    font-size: 95%;\n    color: #337ab7; }\n\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em; }\n\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em; }\n\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em; }\n\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em; }\n\n.ie9 .spinner-gritcode .spinner-circle,\n.lt-ie10 .spinner-gritcode .spinner-circle,\n.no-csstransforms3d .spinner-gritcode .spinner-circle,\n.no-csstransitions .spinner-gritcode .spinner-circle,\n.oldie .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px; }\n", ""]);

// exports


/***/ }),
/* 235 */
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
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    staticClass: "spinner spinner-gritcode",
    class: [_vm.spinnerSize, {
      'spinner-fixed': _vm.fixed
    }]
  }, [_c('div', {
    staticClass: "spinner-wrapper"
  }, [_c('div', {
    staticClass: "spinner-circle"
  }), _vm._v(" "), _c('div', {
    staticClass: "spinner-text"
  }, [_vm._v(_vm._s(_vm.text))])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ac4fe3a", esExports)
  }
}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(21)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?root=./docs/!./docs.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?root=./docs/!./docs.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap Docs (http://getbootstrap.com)\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see http://creativecommons.org/licenses/by/3.0/.\n */\n\n\n/*\n * Bootstrap Documentation\n * Special styles for presenting Bootstrap's documentation and code examples.\n *\n * Table of contents:\n *\n * Scaffolding\n * Main navigation\n * Footer\n * Social buttons\n * Homepage\n * Page headers\n * Old docs callout\n * Ads\n * Side navigation\n * Docs sections\n * Callouts\n * Grid styles\n * Examples\n * Code snippets (highlight)\n * Responsive tests\n * Glyphicons\n * Customizer\n * MenuItem\n * Miscellaneous\n */\n\n\n/*\n * Scaffolding\n *\n * Update the basics of our documents to prep for docs content.\n */\n\nbody {\n  position: relative; /* For scrollspy */\n}\n\n/* Keep code small in tables on account of limited space */\n.table code {\n  font-size: 13px;\n  font-weight: normal;\n}\n\n/* Outline button for use within the docs */\n.btn-outline {\n  color: #563d7c;\n  background-color: transparent;\n  border-color: #563d7c;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n/* Inverted outline button (white on dark) */\n.btn-outline-inverse {\n  color: #fff;\n  background-color: transparent;\n  border-color: #cdbfe3;\n}\n.btn-outline-inverse:hover,\n.btn-outline-inverse:focus,\n.btn-outline-inverse:active {\n  color: #563d7c;\n  text-shadow: none;\n  background-color: #fff;\n  border-color: #fff;\n}\n\n/* Bootstrap \"B\" icon */\n.bs-docs-booticon {\n  display: block;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  cursor: default;\n  background-color: #563d7c;\n  border-radius: 15%;\n}\n.bs-docs-booticon-sm {\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  line-height: 28px;\n}\n.bs-docs-booticon-lg {\n  width: 144px;\n  height: 144px;\n  font-size: 108px;\n  line-height: 140px;\n}\n.bs-docs-booticon-inverse {\n  color: #563d7c;\n  background-color: #fff;\n}\n.bs-docs-booticon-outline {\n  background-color: transparent;\n  border: 1px solid #cdbfe3;\n}\n\n\n/*\n * Main navigation\n *\n * Turn the `.navbar` at the top of the docs purple.\n */\n\n.bs-docs-nav {\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 0;\n}\n.bs-home-nav .bs-nav-b {\n  display: none;\n}\n.bs-docs-nav .navbar-brand,\n.bs-docs-nav .navbar-nav > li > a {\n  font-weight: 500;\n  color: #563d7c;\n}\n.bs-docs-nav .navbar-nav > li > a:hover,\n.bs-docs-nav .navbar-nav > .active > a,\n.bs-docs-nav .navbar-nav > .active > a:hover {\n  color: #463265;\n  background-color: #f9f9f9;\n}\n.bs-docs-nav .navbar-toggle .icon-bar {\n  background-color: #563d7c;\n}\n.bs-docs-nav .navbar-header .navbar-toggle {\n  border-color: #fff;\n}\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\n  background-color: #f9f9f9;\n  border-color: #f9f9f9;\n}\n\n\n/*\n * Footer\n *\n * Separated section of content at the bottom of all pages, save the homepage.\n */\n\n.bs-docs-footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 100px;\n  color: #777;\n  text-align: center;\n  border-top: 1px solid #e5e5e5;\n}\n.bs-docs-footer-links {\n  padding-left: 0;\n  margin-top: 20px;\n  color: #999;\n}\n.bs-docs-footer-links li {\n  display: inline;\n  padding: 0 2px;\n}\n.bs-docs-footer-links li:first-child {\n  padding-left: 0;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-footer p {\n    margin-bottom: 0;\n  }\n}\n\n\n/*\n * Social buttons\n *\n * Twitter and GitHub social action buttons (for homepage and footer).\n */\n\n.bs-docs-social {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.bs-docs-social-buttons {\n  display: inline-block;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.bs-docs-social-buttons li {\n  display: inline-block;\n  padding: 5px 8px;\n  line-height: 1;\n}\n.bs-docs-social-buttons .twitter-follow-button {\n  width: 225px !important;\n}\n.bs-docs-social-buttons .twitter-share-button {\n  width: 98px !important;\n}\n/* Style the GitHub buttons via CSS instead of inline attributes */\n.github-btn {\n  overflow: hidden;\n  border: 0;\n}\n\n\n/*\n * Homepage\n *\n * Tweaks to the custom homepage and the masthead (main jumbotron).\n */\n\n/* Share masthead with page headers */\n.bs-docs-masthead,\n.bs-docs-header {\n  position: relative;\n  padding: 30px 15px;\n  color: #cdbfe3;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,.1);\n  background-color: #6f5499;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:      -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:         linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\n  background-repeat: repeat-x;\n}\n\n/* Masthead (headings and download button) */\n.bs-docs-masthead .bs-docs-booticon {\n  margin: 0 auto 30px;\n}\n.bs-docs-masthead h1 {\n  font-weight: 300;\n  line-height: 1;\n  color: #fff;\n}\n.bs-docs-masthead .lead {\n  margin: 0 auto 30px;\n  font-size: 20px;\n  color: #fff;\n}\n.bs-docs-masthead .version {\n  margin-top: -15px;\n  margin-bottom: 30px;\n  color: #9783b9;\n}\n.bs-docs-masthead .btn {\n  width: 100%;\n  padding: 15px 30px;\n  font-size: 20px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-masthead .btn {\n    width: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .bs-docs-masthead h1 {\n    font-size: 60px;\n  }\n  .bs-docs-masthead .lead {\n    font-size: 24px;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-masthead .lead {\n    width: 80%;\n    font-size: 30px;\n  }\n}\n\n\n/*\n * Page headers\n *\n * Jumbotron-esque headers at the top of every page that's not the homepage.\n */\n\n/* Page headers */\n.bs-docs-header {\n  margin-bottom: 40px;\n  font-size: 20px;\n}\n.bs-docs-header h1 {\n  margin-top: 0;\n  color: #fff;\n}\n.bs-docs-header p {\n  margin-bottom: 0;\n  font-weight: 300;\n  line-height: 1.4;\n}\n.bs-docs-header .container {\n  position: relative;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-header {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    font-size: 24px;\n    text-align: left;\n  }\n  .bs-docs-header h1 {\n    font-size: 60px;\n    line-height: 1;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-header h1,\n  .bs-docs-header p {\n    margin-right: 380px;\n  }\n}\n\n\n/*\n * Carbon ads\n *\n * Single display ad that shows on all pages (except homepage) in page headers.\n * The hella `!important` is required for any pre-set property.\n */\n\n.carbonad {\n  width: auto !important;\n  height: auto !important;\n  padding: 20px !important;\n  margin: 30px -30px -31px !important;\n  overflow: hidden; /* clearfix */\n  font-size: 13px !important;\n  line-height: 16px !important;\n  text-align: left;\n  background: transparent !important;\n  border: solid #866ab3 !important;\n  border-width: 1px 0 !important;\n}\n.carbonad-img {\n  margin: 0 !important;\n}\n.carbonad-text,\n.carbonad-tag {\n  display: block !important;\n  float: none !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: 145px !important;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n}\n.carbonad-text {\n  padding-top: 0 !important;\n}\n.carbonad-tag {\n  color: inherit !important;\n  text-align: left !important;\n}\n.carbonad-text a,\n.carbonad-tag a {\n  color: #fff !important;\n}\n.carbonad #azcarbon > img {\n  display: none; /* hide what I assume are tracking images */\n}\n\n@media (min-width: 480px) {\n  .carbonad {\n    width: 330px !important;\n    margin: 20px auto !important;\n    border-width: 1px !important;\n    border-radius: 4px;\n  }\n  .bs-docs-masthead .carbonad {\n    margin: 50px auto 0 !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .carbonad {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .carbonad {\n    position: absolute;\n    top: 0;\n    right: 15px; /* 15px instead of 0 since box-sizing */\n    width: 330px !important;\n    padding: 15px !important;\n    margin: 0 !important;\n  }\n  .bs-docs-masthead .carbonad {\n    position: static;\n  }\n}\n\n\n/*\n * Homepage featurettes\n *\n * Reasons to use Bootstrap, entries from the Expo, and more.\n */\n\n.bs-docs-featurette {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #555;\n  text-align: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e5e5e5;\n}\n.bs-docs-featurette + .bs-docs-footer {\n  margin-top: 0;\n  border-top: 0;\n}\n\n.bs-docs-featurette-title {\n  margin-bottom: 5px;\n  font-size: 30px;\n  font-weight: normal;\n  color: #333;\n}\n.half-rule {\n  width: 100px;\n  margin: 40px auto;\n}\n.bs-docs-featurette h3 {\n  margin-bottom: 5px;\n  font-weight: normal;\n  color: #333;\n}\n.bs-docs-featurette-img {\n  display: block;\n  margin-bottom: 20px;\n  color: #333;\n}\n.bs-docs-featurette-img:hover {\n  color: #428bca;\n  text-decoration: none;\n}\n.bs-docs-featurette-img img {\n  display: block;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-featurette .img-responsive {\n    margin-top: 30px;\n  }\n}\n@media (min-width: 768px) {\n  .bs-docs-featurette {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n  .bs-docs-featurette-title {\n    font-size: 40px;\n  }\n  .bs-docs-featurette .lead {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .bs-docs-featured-sites .col-sm-3:first-child img {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  .bs-docs-featured-sites .col-sm-3:last-child img {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n\n  .bs-docs-featurette .img-responsive {\n    margin-top: 0;\n  }\n}\n\n/* Featured sites */\n.bs-docs-featured-sites {\n  margin-right: -1px;\n  margin-left: -1px;\n}\n.bs-docs-featured-sites .col-sm-3 {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n.bs-docs-featured-sites .img-responsive {\n  margin-bottom: 15px;\n}\n@media (min-width: 480px) {\n  .bs-docs-featured-sites .img-responsive {\n    margin-bottom: 0;\n  }\n}\n\n/* Example thumbnails */\n@media (max-width: 480px) {\n  .bs-examples {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n  .bs-examples > [class^=\"col-\"] {\n    padding-right: 10px;\n    padding-left: 10px;\n  }\n}\n\n\n/*\n * Side navigation\n *\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\n * sections of docs content.\n */\n\n/* By default it's not affixed in mobile views, so undo that */\n.bs-docs-sidebar.affix {\n  position: static;\n}\n@media (min-width: 768px) {\n  .bs-docs-sidebar {\n    padding-left: 20px;\n  }\n}\n\n/* First level of nav */\n.bs-docs-sidenav {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n/* All levels of nav */\n.bs-docs-sidebar .nav > li > a {\n  display: block;\n  padding: 4px 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #999;\n}\n.bs-docs-sidebar .nav > li > a:hover,\n.bs-docs-sidebar .nav > li > a:focus {\n  padding-left: 19px;\n  color: #1D976C;\n  text-decoration: none;\n  background-color: transparent;\n  border-left: 1px solid #1D976C;\n}\n.bs-docs-sidebar .nav > .active > a,\n.bs-docs-sidebar .nav > .active:hover > a,\n.bs-docs-sidebar .nav > .active:focus > a {\n  padding-left: 18px;\n  font-weight: bold;\n  color: #1D976C;\n  background-color: transparent;\n  border-left: 2px solid #1D976C;\n}\n\n/* Nav: second level (shown on .active) */\n.bs-docs-sidebar .nav .nav {\n  display: none; /* Hide by default, but at >768px, show it */\n  padding-bottom: 10px;\n}\n.bs-docs-sidebar .nav .nav > li > a {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 30px;\n  font-size: 12px;\n  font-weight: normal;\n}\n.bs-docs-sidebar .nav .nav > li > a:hover,\n.bs-docs-sidebar .nav .nav > li > a:focus {\n  padding-left: 29px;\n}\n.bs-docs-sidebar .nav .nav > .active > a,\n.bs-docs-sidebar .nav .nav > .active:hover > a,\n.bs-docs-sidebar .nav .nav > .active:focus > a {\n  padding-left: 28px;\n  font-weight: 500;\n}\n\n/* Back to top (hidden on mobile) */\n.back-to-top,\n.bs-docs-theme-toggle {\n  display: none;\n  padding: 4px 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #999;\n}\n.back-to-top:hover,\n.bs-docs-theme-toggle:hover {\n  color: #563d7c;\n  text-decoration: none;\n}\n.bs-docs-theme-toggle {\n  margin-top: 0;\n}\n\n@media (min-width: 768px) {\n  .back-to-top,\n  .bs-docs-theme-toggle {\n    display: block;\n  }\n}\n\n/* Show and affix the side nav when space allows it */\n@media (min-width: 992px) {\n  .bs-docs-sidebar .nav > .active > ul {\n    display: block;\n  }\n  /* Widen the fixed sidebar */\n  .bs-docs-sidebar.affix,\n  .bs-docs-sidebar.affix-bottom {\n    width: 213px;\n  }\n  .bs-docs-sidebar.affix {\n    position: fixed; /* Undo the static from mobile first approach */\n    top: 20px;\n  }\n  .bs-docs-sidebar.affix-bottom {\n    position: absolute; /* Undo the static from mobile first approach */\n  }\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1200px) {\n  /* Widen the fixed sidebar again */\n  .bs-docs-sidebar.affix-bottom,\n  .bs-docs-sidebar.affix {\n    width: 263px;\n  }\n}\n\n\n/*\n * Docs sections\n *\n * Content blocks for each component or feature.\n */\n\n/* Space things out */\n.bs-docs-section {\n  margin-bottom: 60px;\n}\n.bs-docs-section:last-child {\n  margin-bottom: 0;\n}\n\nh1[id] {\n  padding-top: 20px;\n  margin-top: 0;\n}\n\n\n/*\n * Callouts\n *\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\n * Requires a base and modifier class.\n */\n\n/* Common styles for all types */\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px;\n}\n.bs-callout h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n  margin-bottom: 0;\n}\n.bs-callout code {\n  border-radius: 3px;\n}\n\n/* Tighten up space between multiple callouts */\n.bs-callout + .bs-callout {\n  margin-top: -5px;\n}\n\n/* Variations */\n.bs-callout-danger {\n  border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n  color: #d9534f;\n}\n.bs-callout-warning {\n  border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n  color: #f0ad4e;\n}\n.bs-callout-info {\n  border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n  color: #5bc0de;\n}\n\n\n/*\n * Color swatches\n *\n * Color swatches and associated values for our grayscale and brand colors.\n */\n\n.color-swatches {\n  margin: 0 -5px;\n  overflow: hidden; /* clearfix */\n}\n.color-swatch {\n  float: left;\n  width: 60px;\n  height: 60px;\n  margin: 0 5px;\n  border-radius: 3px;\n}\n\n@media (min-width: 768px) {\n  .color-swatch {\n    width: 100px;\n    height: 100px;\n  }\n}\n\n/* Framework colors */\n.color-swatches .gray-darker {\n  background-color: #222;\n}\n.color-swatches .gray-dark {\n  background-color: #333;\n}\n.color-swatches .gray {\n  background-color: #555;\n}\n.color-swatches .gray-light {\n  background-color: #999;\n}\n.color-swatches .gray-lighter {\n  background-color: #eee;\n}\n.color-swatches .brand-primary {\n  background-color: #428bca;\n}\n.color-swatches .brand-success {\n  background-color: #5cb85c;\n}\n.color-swatches .brand-warning {\n  background-color: #f0ad4e;\n}\n.color-swatches .brand-danger {\n  background-color: #d9534f;\n}\n.color-swatches .brand-info {\n  background-color: #5bc0de;\n}\n\n/* Docs colors */\n.color-swatches .bs-purple {\n  background-color: #563d7c;\n}\n.color-swatches .bs-purple-light {\n  background-color: #c7bfd3;\n}\n.color-swatches .bs-purple-lighter {\n  background-color: #e5e1ea;\n}\n.color-swatches .bs-gray {\n  background-color: #f9f9f9;\n}\n\n\n/*\n * Team members\n *\n * Avatars, names, and usernames for core team.\n */\n\n.bs-team .team-member {\n  line-height: 32px;\n  color: #555;\n}\n.bs-team .team-member:hover {\n  color: #333;\n  text-decoration: none;\n}\n.bs-team .github-btn {\n  float: right;\n  width: 180px;\n  height: 20px;\n  margin-top: 6px;\n}\n.bs-team img {\n  float: left;\n  width: 32px;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n\n\n/*\n * Grid examples\n *\n * Highlight the grid columns within the docs so folks can see their padding,\n * alignment, sizing, etc.\n */\n\n.show-grid {\n  margin-bottom: 15px;\n}\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: #eee;\n  background-color: rgba(86,61,124,.15);\n  border: 1px solid #ddd;\n  border: 1px solid rgba(86,61,124,.2);\n}\n\n\n/*\n * Examples\n *\n * Isolated sections of example content for each component or feature. Usually\n * followed by a code snippet.\n */\n\n.bs-example {\n  position: relative;\n  padding: 45px 15px 15px;\n  margin: 0 -15px 15px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n          box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n}\n/* Echo out a label for the example */\n.bs-example:after {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #959595;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  content: \"Example\";\n}\n\n/* Tweak display of the code snippets when following an example */\n.bs-example + .highlight {\n  margin: -15px -15px 15px;\n  border-width: 0 0 1px;\n  border-radius: 0;\n}\n\n/* Make the examples and snippets not full-width */\n@media (min-width: 768px) {\n  .bs-example {\n    margin-right: 0;\n    margin-left: 0;\n    background-color: #fff;\n    border-color: #ddd;\n    border-width: 1px;\n    border-radius: 4px 4px 0 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .bs-example + .highlight {\n    margin-top: -16px;\n    margin-right: 0;\n    margin-left: 0;\n    border-width: 1px;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n}\n\n/* Undo width of container */\n.bs-example .container {\n  width: auto;\n}\n\n/* Tweak content of examples for optimum awesome */\n.bs-example > p:last-child,\n.bs-example > ul:last-child,\n.bs-example > ol:last-child,\n.bs-example > blockquote:last-child,\n.bs-example > .form-control:last-child,\n.bs-example > .table:last-child,\n.bs-example > .navbar:last-child,\n.bs-example > .jumbotron:last-child,\n.bs-example > .alert:last-child,\n.bs-example > .panel:last-child,\n.bs-example > .list-group:last-child,\n.bs-example > .well:last-child,\n.bs-example > .progress:last-child,\n.bs-example > .table-responsive:last-child > .table {\n  margin-bottom: 0;\n}\n.bs-example > p > .close {\n  float: none;\n}\n\n/* Typography */\n.bs-example-type .table .type-info {\n  color: #999;\n  vertical-align: middle;\n}\n.bs-example-type .table td {\n  padding: 15px 0;\n  border-color: #eee;\n}\n.bs-example-type .table tr:first-child td {\n  border-top: 0;\n}\n.bs-example-type h1,\n.bs-example-type h2,\n.bs-example-type h3,\n.bs-example-type h4,\n.bs-example-type h5,\n.bs-example-type h6 {\n  margin: 0;\n}\n\n/* Contextual background colors */\n.bs-example-bg-classes p {\n  padding: 15px;\n}\n\n/* Images */\n.bs-example > .img-circle,\n.bs-example > .img-rounded,\n.bs-example > .img-thumbnail {\n  margin: 5px;\n}\n\n/* Tables */\n.bs-example > .table-responsive > .table {\n  background-color: #fff;\n}\n\n/* Buttons */\n.bs-example > .btn,\n.bs-example > .btn-group {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.bs-example > .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n/* Forms */\n.bs-example-control-sizing select,\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\n  margin-top: 10px;\n}\n.bs-example-form .input-group {\n  margin-bottom: 10px;\n}\n.bs-example > textarea.form-control {\n  resize: vertical;\n}\n\n/* List groups */\n.bs-example > .list-group {\n  max-width: 400px;\n}\n\n/* Navbars */\n.bs-example .navbar:last-child {\n  margin-bottom: 0;\n}\n.bs-navbar-top-example,\n.bs-navbar-bottom-example {\n  z-index: 1;\n  padding: 0;\n  overflow: hidden; /* cut the drop shadows off */\n}\n.bs-navbar-top-example .navbar-header,\n.bs-navbar-bottom-example .navbar-header {\n  margin-left: 0;\n}\n.bs-navbar-top-example .navbar-fixed-top,\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  position: relative;\n  margin-right: 0;\n  margin-left: 0;\n}\n.bs-navbar-top-example {\n  padding-bottom: 45px;\n}\n.bs-navbar-top-example:after {\n  top: auto;\n  bottom: 15px;\n}\n.bs-navbar-top-example .navbar-fixed-top {\n  top: -1px;\n}\n.bs-navbar-bottom-example {\n  padding-top: 45px;\n}\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  bottom: -1px;\n}\n.bs-navbar-bottom-example .navbar {\n  margin-bottom: 0;\n}\n@media (min-width: 768px) {\n  .bs-navbar-top-example .navbar-fixed-top,\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\n    position: absolute;\n  }\n}\n\n/* Pagination */\n.bs-example .pagination {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n/* Pager */\n.bs-example > .pager {\n  margin-top: 0;\n}\n\n/* Example modals */\n.bs-example-modal {\n  background-color: #f5f5f5;\n}\n.bs-example-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  z-index: 1;\n  display: block;\n}\n.bs-example-modal .modal-dialog {\n  left: auto;\n  margin-right: auto;\n  margin-left: auto;\n}\n.custom-modal {\n  width: 90%;\n}\n\n/* Example dropdowns */\n.bs-example > .dropdown > .dropdown-toggle {\n  float: left;\n}\n.bs-example > .dropdown > .dropdown-menu {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n/* Example tabbable tabs */\n.bs-example-tabs .nav-tabs {\n  margin-bottom: 15px;\n}\n\n/* Tooltips */\n.bs-example-tooltips {\n  text-align: center;\n}\n.bs-example-tooltips > .btn {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n/* Popovers */\n.bs-example-popover {\n  padding-bottom: 24px;\n  background-color: #f9f9f9;\n}\n.bs-example-popover .popover {\n  position: relative;\n  display: block;\n  float: left;\n  width: 260px;\n  margin: 20px;\n}\n\n/* Scrollspy demo on fixed height div */\n.scrollspy-example {\n  position: relative;\n  height: 200px;\n  margin-top: 10px;\n  overflow: auto;\n}\n\n/* MenuItem */\n.bs-example .dropdown-menu.open {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n\n/*\n * Code snippets\n *\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\n */\n\n.highlight {\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px;\n}\n.highlight pre {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  word-break: normal;\n  word-wrap: nowrap;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.highlight pre code {\n  font-size: inherit;\n  color: #333; /* Effectively the base text color */\n}\n.highlight pre code:first-child {\n  display: inline-block;\n  padding-right: 45px;\n}\n\n\n/*\n * Responsive tests\n *\n * Generate a set of tests to show the responsive utilities in action.\n */\n\n/* Responsive (scrollable) doc tables */\n.table-responsive .highlight pre {\n  white-space: normal;\n}\n\n/* Utility classes table  */\n.bs-table th small,\n.responsive-utilities th small {\n  display: block;\n  font-weight: normal;\n  color: #999;\n}\n.responsive-utilities tbody th {\n  font-weight: normal;\n}\n.responsive-utilities td {\n  text-align: center;\n}\n.responsive-utilities td.is-visible {\n  color: #468847;\n  background-color: #dff0d8 !important;\n}\n.responsive-utilities td.is-hidden {\n  color: #ccc;\n  background-color: #f9f9f9 !important;\n}\n\n/* Responsive tests */\n.responsive-utilities-test {\n  margin-top: 5px;\n}\n.responsive-utilities-test .col-xs-6 {\n  margin-bottom: 10px;\n}\n.responsive-utilities-test span {\n  display: block;\n  padding: 15px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.1;\n  text-align: center;\n  border-radius: 4px;\n}\n.visible-on .col-xs-6 .hidden-xs,\n.visible-on .col-xs-6 .hidden-sm,\n.visible-on .col-xs-6 .hidden-md,\n.visible-on .col-xs-6 .hidden-lg,\n.hidden-on .col-xs-6 .hidden-xs,\n.hidden-on .col-xs-6 .hidden-sm,\n.hidden-on .col-xs-6 .hidden-md,\n.hidden-on .col-xs-6 .hidden-lg {\n  color: #999;\n  border: 1px solid #ddd;\n}\n.visible-on .col-xs-6 .visible-xs-block,\n.visible-on .col-xs-6 .visible-sm-block,\n.visible-on .col-xs-6 .visible-md-block,\n.visible-on .col-xs-6 .visible-lg-block,\n.hidden-on .col-xs-6 .visible-xs-block,\n.hidden-on .col-xs-6 .visible-sm-block,\n.hidden-on .col-xs-6 .visible-md-block,\n.hidden-on .col-xs-6 .visible-lg-block {\n  color: #468847;\n  background-color: #dff0d8;\n  border: 1px solid #d6e9c6;\n}\n\n\n/*\n * Glyphicons\n *\n * Special styles for displaying the icons and their classes in the docs.\n */\n\n.bs-glyphicons {\n  margin: 0 -10px 20px;\n  overflow: hidden;\n}\n.bs-glyphicons-list {\n  padding-left: 0;\n  list-style: none;\n}\n.bs-glyphicons li {\n  float: left;\n  width: 25%;\n  height: 115px;\n  padding: 10px;\n  font-size: 10px;\n  line-height: 1.4;\n  text-align: center;\n  background-color: #f9f9f9;\n  border: 1px solid #fff;\n}\n.bs-glyphicons .glyphicon {\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n.bs-glyphicons .glyphicon-class {\n  display: block;\n  text-align: center;\n  word-wrap: break-word; /* Help out IE10+ with class names */\n}\n.bs-glyphicons li:hover {\n  color: #fff;\n  background-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .bs-glyphicons {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .bs-glyphicons li {\n    width: 12.5%;\n    font-size: 12px;\n  }\n}\n\n\n/*\n * Customizer\n *\n * Since this is so form control heavy, we have quite a few styles to customize\n * the display of inputs, headings, and more. Also included are all the download\n * buttons and actions.\n */\n\n.bs-customizer .toggle {\n  float: right;\n  margin-top: 25px;\n}\n\n/* Headings and form contrls */\n.bs-customizer label {\n  margin-top: 10px;\n  font-weight: 500;\n  color: #555;\n}\n.bs-customizer h2 {\n  padding-top: 30px;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-customizer h3 {\n  margin-bottom: 0;\n}\n.bs-customizer h4 {\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n.bs-customizer .bs-callout h4 {\n  margin-top: 0; /* lame, but due to specificity we have to duplicate */\n  margin-bottom: 5px;\n}\n.bs-customizer input[type=\"text\"] {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  background-color: #fafafa;\n}\n.bs-customizer .help-block {\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n/* For the variables, use regular weight */\n#less-section label {\n  font-weight: normal;\n}\n\n.bs-customizer-input {\n  float: left;\n  width: 33.333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n/* Downloads */\n.bs-customize-download .btn-outline {\n  padding: 20px;\n}\n\n/* Error handling */\n.bs-customizer-alert {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  padding: 15px 0;\n  color: #fff;\n  background-color: #d9534f;\n  border-bottom: 1px solid #b94441;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n          box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n}\n.bs-customizer-alert .close {\n  margin-top: -4px;\n  font-size: 24px;\n}\n.bs-customizer-alert p {\n  margin-bottom: 0;\n}\n.bs-customizer-alert .glyphicon {\n  margin-right: 5px;\n}\n.bs-customizer-alert pre {\n  margin: 10px 0 0;\n  color: #fff;\n  background-color: #a83c3a;\n  border-color: #973634;\n  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n          box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n}\n\n\n/*\n * Brand guidelines\n *\n * Extra styles for displaying wordmarks, logos, etc.\n */\n\n/* Logo series wrapper */\n.bs-brand-logos {\n  display: table;\n  width: 100%;\n  margin-bottom: 15px;\n  overflow: hidden;\n  color: #563d7c;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\n\n/* Individual items */\n.bs-brand-item {\n  padding: 60px 0;\n  text-align: center;\n}\n.bs-brand-item + .bs-brand-item {\n  border-top: 1px solid #fff;\n}\n.bs-brand-logos .inverse {\n  color: #fff;\n  background-color: #563d7c;\n}\n.bs-brand-item .svg {\n  width: 144px;\n  height: 144px;\n}\n\n/* Heading content within */\n.bs-brand-item h1,\n.bs-brand-item h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.bs-brand-item .bs-docs-booticon {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/* Make the icons stand out on what is/isn't okay */\n.bs-brand-item .glyphicon {\n  width: 30px;\n  height: 30px;\n  margin: 10px auto -10px;\n  line-height: 30px;\n  color: #fff;\n  border-radius: 50%;\n}\n.bs-brand-item .glyphicon-ok {\n  background-color: #5cb85c;\n}\n.bs-brand-item .glyphicon-remove {\n  background-color: #d9534f;\n}\n\n@media (min-width: 768px) {\n  .bs-brand-item {\n    display: table-cell;\n    width: 1%;\n  }\n  .bs-brand-item + .bs-brand-item {\n    border-top: 0;\n    border-left: 1px solid #fff;\n  }\n  .bs-brand-item h1 {\n    font-size: 60px;\n  }\n}\n\n\n/*\n * Miscellaneous\n *\n * Odds and ends for optimum docs display.\n */\n\n/* Examples gallery: space out content better */\n.bs-examples .thumbnail {\n  margin-bottom: 10px;\n}\n.bs-examples h4 {\n  margin-bottom: 5px;\n}\n.bs-examples p {\n  margin-bottom: 20px;\n}\n\n/* Pseudo :focus state for showing how it looks in the docs */\n#focusedInput {\n  border-color: rgb(204,204,204); /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\n  border-color: rgba(82,168,236,.8);\n  outline: 0;\n  outline: thin dotted \\9; /* IE6-9 */\n  -webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);\n          box-shadow: 0 0 8px rgba(82,168,236,.6);\n}\n\n\n/*\n * ZeroClipboard styles\n */\n\n.zero-clipboard {\n  position: relative;\n  display: none;\n}\n.btn-clipboard {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  display: block;\n  padding: 5px 8px;\n  font-size: 12px;\n  color: #777;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #e1e1e8;\n  border-radius: 0 4px 0 4px;\n}\n.btn-clipboard-hover {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .zero-clipboard {\n    display: block;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(21)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?root=./docs/!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?root=./docs/!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*\n * React-Bootstrap Documentation\n * Special styles for presenting react-bootstrap's documentation and code examples.\n * Based on the Bootstrap Documentation styles and overridden as necessary.\n */\n\nbody {\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif;\n}\n\npre[class*=\"language-\"] {\n  border-radius: 0;\n  padding: 0;\n}\n\n.bs-docs-section h1 {\n  font-size: 42px\n}\n\n.bs-docs-nav .navbar-nav > li > a {\n  color: #333;\n}\n.bs-docs-footer {\n  padding-top: 20px;\n  text-align: left;\n}\n.bs-docs-nav .navbar-collapse {\n  overflow: hidden;\n}\n.bs-docs-nav {\n    box-shadow: 0 3px 3px rgba(0,0,0,0.175);\n}\n\n.bs-docs-header p {\n  font-weight: lighter;\n}\n\n\n.bs-docs-header a {\n  color: white;\n  font-weight: normal;\n}\n.btn-outline-inverse {\n  border-color: white;\n  transition: color .15s ease;\n}\n.bs-docs-header a:hover,\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\n.bs-docs-nav .navbar-brand {\n  color: #1D976C;\n}\n\n.bs-docs-masthead, .bs-docs-header {\n  background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */\n\n  filter: none;\n  color: #e9e9e9;\n}\n\n.bs-docs-masthead {\n  margin-bottom: 20px;\n}\n\n.bs-docs-header h1 {\n  color: #ffffff;\n}\n\n.bs-docs-header p {\n  color: #ffffff;\n}\n\na.back-to-top {\n  font-size: 13px;\n  margin-top: 0;\n}\n\n.bs-docs-sidebar .nav>li>a {\n  color: #767676;\n  font-size: 14px;\n}\n\n.bs-docs-sidebar .nav>li>a:hover, .bs-docs-sidebar .nav>li>a:focus {\n  color: #42b983;\n  border-left: 1px solid #42b983;\n}\n\n.back-to-top:hover {\n  color: #42b983;\n}\n\n\n.CodeMirror, .CodeMirror-scroll {\n  height: auto;\n}\n\n.bs-example .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n.bs-example .static-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  left: auto;\n  bottom: auto;\n  z-index: 1;\n  display: block;\n}\n\n.bs-docs-booticon {\n  background-size: contain;\n  border: 0;\n  width: 200px;\n  height: 200px;\n}\n\n.bs-example-popover-contained {\n  height: 200px;\n}\n\n.bs-example-popover-contained > div {\n  position: relative;\n}\n\n.bs-example-popover-scroll {\n  overflow: scroll;\n  height: 200px;\n}\n\n.bs-example-popover-scroll > div {\n  position: relative;\n  padding: 100px 0;\n}\n\n.playground {\n  margin-bottom: 36px;\n}\n\n.bs-example {\n  margin-bottom: 0;\n}\n\n.bs-example + .highlight {\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top: none;\n  border-bottom-right-radius: 0;\n}\n\n.code-toggle {\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: -1px;\n  background: #fafafa;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: 1px solid #e1e1e8;\n  border-top: none;\n  padding: 4px 8px;\n}\n\n@media (min-width: 768px) {\n  .code-toggle {\n    background: #fff;\n  }\n}\n\n.code-toggle.open {\n  background: #f8f5ec;\n}\n\n/* Minimal CSS Needed for contained modals */\n.modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n\n.prop-table {\n  background-color: white;\n}\n\n.bs-example.tooltip-static .tooltip {\n  position: relative;\n  display: inline-block;\n  margin: 5px 10px;\n\n}\n\n.bs-example .super-colors {\n  background: -moz-linear-gradient( top ,\n      rgba(255, 0, 0, 1) 0%,\n      rgba(255, 255, 0, 1) 15%,\n      rgba(0, 255, 0, 1) 30%,\n      rgba(0, 255, 255, 1) 50%,\n      rgba(0, 0, 255, 1) 65%,\n      rgba(255, 0, 255, 1) 80%,\n      rgba(255, 0, 0, 1) 100%);\n  background: -webkit-gradient(linear,  left top,  left bottom,\n      color-stop(0%, rgba(255, 0, 0, 1)),\n      color-stop(15%, rgba(255, 255, 0, 1)),\n      color-stop(30%, rgba(0, 255, 0, 1)),\n      color-stop(50%, rgba(0, 255, 255, 1)),\n      color-stop(65%, rgba(0, 0, 255, 1)),\n      color-stop(80%, rgba(255, 0, 255, 1)),\n      color-stop(100%, rgba(255, 0, 0, 1)));\n}\n\n/*.bs-example .custom-menu > ul > li {\n    padding: 0 20px;\n}*/\n\n.anchor,\n.anchor:hover,\n.anchor:active,\n.anchor:focus {\n  color: black;\n  text-decoration: none;\n  position: relative;\n}\n.anchor-icon {\n  font-size: 90%;\n  padding-top: 0.1em;\n  position: absolute;\n  left: -0.8em;\n  opacity: 0;\n}\n\nh1:hover .anchor-icon,\nh1 a:focus .anchor-icon,\nh2:hover .anchor-icon,\nh2 a:focus .anchor-icon,\nh3:hover .anchor-icon,\nh3 a:focus .anchor-icon,\nh4:hover .anchor-icon,\nh4 a:focus .anchor-icon {\n  opacity: 0.5;\n}\n\n.prop-desc pre {\n  border-radius: 0;\n  border-width: 0;\n  border-left-width: 3px;\n}\n\n.prop-desc-heading {\n  margin-bottom: 10px;\n}\n\n.bs-callout {\n    padding: 20px;\n    margin: 20px 0;\n    border: 1px solid #eee;\n    border-left-width: 5px;\n    border-radius: 3px;\n}\n.bs-callout h4 {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n    margin-bottom: 0;\n}\n.bs-callout code {\n    border-radius: 3px;\n}\n.bs-callout+.bs-callout {\n    margin-top: -5px;\n}\n.bs-callout-default {\n    border-left-color: #777;\n}\n.bs-callout-default h4 {\n    color: #777;\n}\n.bs-callout-primary {\n    border-left-color: #428bca;\n}\n.bs-callout-primary h4 {\n    color: #428bca;\n}\n.bs-callout-success {\n    border-left-color: #42b983;\n}\n.bs-callout-success h4 {\n    color: #42b983;\n}\n.bs-callout-danger {\n    border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n    color: #d9534f;\n}\n.bs-callout-warning {\n    border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n    color: #f0ad4e;\n}\n.bs-callout-info {\n    border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n    color: #5bc0de;\n}\n", ""]);

// exports


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					// Check for existence for IE8
					return o.map && o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || document.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				env.element.textContent = env.code;
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	tokenize: function(text, grammar, language) {
		var Token = _.Token;

		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		tokenloop: for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i=0, pos = 0; i<strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						break tokenloop;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && p < to; ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						/*
						 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
						 */
						if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					}

					if (!match) {
						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);
				}
			}
		}

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}
 	// In worker
	_self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code,
		    immediateClose = message.immediateClose;

		_self.postMessage(_.highlight(code, _.languages[lang], lang));
		if (immediateClose) {
			_self.close();
		}
	}, false);

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (document.addEventListener && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/i,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation': /[=>"']/
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});
	
	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		if(Array.prototype.forEach) { // Check to prevent error in IE8
			Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
				var src = pre.getAttribute('data-src');

				var language, parent = pre;
				var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (pre.className.match(lang) || [, ''])[1];
				}

				if (!language) {
					var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
					language = Extensions[extension] || extension;
				}

				var code = document.createElement('code');
				code.className = 'language-' + language;

				pre.textContent = '';

				code.textContent = 'Loading…';

				pre.appendChild(code);

				var xhr = new XMLHttpRequest();

				xhr.open('GET', src, true);

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {

						if (xhr.status < 400 && xhr.responseText) {
							code.textContent = xhr.responseText;

							Prism.highlightElement(code);
						}
						else if (xhr.status >= 400) {
							code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
						}
						else {
							code.textContent = '✖ Error: File does not exist or is empty';
						}
					}
				};

				xhr.send(null);
			});
		}

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(242)))

/***/ }),
/* 242 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Prism */

(function () {

  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }

  // The languages map is built automatically with gulp
  var Languages = {
    'css': 'CSS',
    'clike': 'C-like',
    'javascript': 'JavaScript',
    'abap': 'ABAP',
    'actionscript': 'ActionScript',
    'apacheconf': 'Apache Configuration',
    'apl': 'APL',
    'applescript': 'AppleScript',
    'aspnet': 'ASP.NET (C#)',
    'autoit': 'AutoIt',
    'autohotkey': 'AutoHotkey',
    'basic': 'BASIC',
    'csharp': 'C#',
    'cpp': 'C++',
    'coffeescript': 'CoffeeScript',
    'css-extras': 'CSS Extras',
    'fsharp': 'F#',
    'glsl': 'GLSL',
    'http': 'HTTP',
    'inform7': 'Inform 7',
    'latex': 'LaTeX',
    'lolcode': 'LOLCODE',
    'matlab': 'MATLAB',
    'mel': 'MEL',
    'nasm': 'NASM',
    'nginx': 'nginx',
    'nsis': 'NSIS',
    'objectivec': 'Objective-C',
    'ocaml': 'OCaml',
    'php': 'PHP',
    'php-extras': 'PHP Extras',
    'powershell': 'PowerShell',
    'jsx': 'React JSX',
    'rest': 'reST (reStructuredText)',
    'sas': 'SAS',
    'sass': 'Sass (Sass)',
    'scss': 'Sass (Scss)',
    'sql': 'SQL',
    'typescript': 'TypeScript',
    'vhdl': 'VHDL',
    'vim': 'vim',
    'wiki': 'Wiki markup',
    'yaml': 'YAML'
  };
  Prism.hooks.add('before-highlight', function (env) {
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }
    var language = Languages[env.language] || env.language.substring(0, 1).toUpperCase() + env.language.substring(1);
    pre.setAttribute('data-language', language);
  });
})();

/***/ })
/******/ ]);
//# sourceMappingURL=build-docs.js.map