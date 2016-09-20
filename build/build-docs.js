/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./docs/index.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 45);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 80);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 102);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _gettingStarted = __webpack_require__(/*! ./example/gettingStarted.vue */ 110);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _container = __webpack_require__(/*! ./example/container.vue */ 112);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _headerDocs = __webpack_require__(/*! ./example/headerDocs.vue */ 114);
	
	var _headerDocs2 = _interopRequireDefault(_headerDocs);
	
	var _alertDocs = __webpack_require__(/*! ./example/alertDocs.vue */ 116);
	
	var _alertDocs2 = _interopRequireDefault(_alertDocs);
	
	var _accordionDocs = __webpack_require__(/*! ./example/accordionDocs.vue */ 123);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _affixDocs = __webpack_require__(/*! ./example/affixDocs.vue */ 126);
	
	var _affixDocs2 = _interopRequireDefault(_affixDocs);
	
	var _asideDocs = __webpack_require__(/*! ./example/asideDocs.vue */ 130);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _carouselDocs = __webpack_require__(/*! ./example/carouselDocs.vue */ 133);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _buttonsDocs = __webpack_require__(/*! ./example/buttonsDocs.vue */ 135);
	
	var _buttonsDocs2 = _interopRequireDefault(_buttonsDocs);
	
	var _datepickerDocs = __webpack_require__(/*! ./example/datepickerDocs.vue */ 138);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _dropdownDocs = __webpack_require__(/*! ./example/dropdownDocs.vue */ 141);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _modalDocs = __webpack_require__(/*! ./example/modalDocs.vue */ 143);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _popoverDocs = __webpack_require__(/*! ./example/popoverDocs.vue */ 146);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _progressbarDocs = __webpack_require__(/*! ./example/progressbar-docs.vue */ 149);
	
	var _progressbarDocs2 = _interopRequireDefault(_progressbarDocs);
	
	var _selectDocs = __webpack_require__(/*! ./example/selectDocs.vue */ 152);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _tabsDocs = __webpack_require__(/*! ./example/tabsDocs.vue */ 155);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _tooltipDocs = __webpack_require__(/*! ./example/tooltipDocs.vue */ 159);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _spinnerDocs = __webpack_require__(/*! ./example/spinnerDocs.vue */ 162);
	
	var _spinnerDocs2 = _interopRequireDefault(_spinnerDocs);
	
	var _src = __webpack_require__(/*! ../src */ 168);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global Vue */
	/* eslint no-new: off, require-jsdoc: off */
	
	__webpack_require__(/*! ./assets/docs.css */ 284);
	__webpack_require__(/*! ./assets/style.css */ 286);
	__webpack_require__(/*! prismjs */ 288);
	__webpack_require__(/*! ./js/showLanguage */ 289);
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

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/object/keys.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 46), __esModule: true };

/***/ },
/* 46 */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/object/keys.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.keys */ 47);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 67).Object.keys;

/***/ },
/* 47 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.keys.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 48)
	  , $keys    = __webpack_require__(/*! ./_object-keys */ 50);
	
	__webpack_require__(/*! ./_object-sap */ 65)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 48 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_to-object.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./_defined */ 49);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 49 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_defined.js ***!
  \***********************************************/
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 50 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-keys.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(/*! ./_object-keys-internal */ 51)
	  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 64);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 51 */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(/*! ./_has */ 52)
	  , toIObject    = __webpack_require__(/*! ./_to-iobject */ 53)
	  , arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 56)(false)
	  , IE_PROTO     = __webpack_require__(/*! ./_shared-key */ 60)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 52 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_has.js ***!
  \*******************************************/
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 53 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_to-iobject.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./_iobject */ 54)
	  , defined = __webpack_require__(/*! ./_defined */ 49);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 54 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_iobject.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./_cof */ 55);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 55 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_cof.js ***!
  \*******************************************/
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 56 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/_array-includes.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 53)
	  , toLength  = __webpack_require__(/*! ./_to-length */ 57)
	  , toIndex   = __webpack_require__(/*! ./_to-index */ 59);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 57 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_to-length.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./_to-integer */ 58)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 58 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_to-integer.js ***!
  \**************************************************/
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 59 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/_to-index.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 58)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 60 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_shared-key.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(/*! ./_shared */ 61)('keys')
	  , uid    = __webpack_require__(/*! ./_uid */ 63);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 61 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_shared.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./_global */ 62)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 62 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_global.js ***!
  \**********************************************/
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 63 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_uid.js ***!
  \*******************************************/
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 64 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 65 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-sap.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./_export */ 66)
	  , core    = __webpack_require__(/*! ./_core */ 67)
	  , fails   = __webpack_require__(/*! ./_fails */ 76);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 66 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_export.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 62)
	  , core      = __webpack_require__(/*! ./_core */ 67)
	  , ctx       = __webpack_require__(/*! ./_ctx */ 68)
	  , hide      = __webpack_require__(/*! ./_hide */ 70)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
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
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 67 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_core.js ***!
  \********************************************/
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 68 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_ctx.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./_a-function */ 69);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 69 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_a-function.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 70 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_hide.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(/*! ./_object-dp */ 71)
	  , createDesc = __webpack_require__(/*! ./_property-desc */ 79);
	module.exports = __webpack_require__(/*! ./_descriptors */ 75) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 71 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_object-dp.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(/*! ./_an-object */ 72)
	  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 74)
	  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 78)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 75) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 72 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_an-object.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 73);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 73 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_is-object.js ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 74 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(/*! ./_descriptors */ 75) && !__webpack_require__(/*! ./_fails */ 76)(function(){
	  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 77)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 75 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_descriptors.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./_fails */ 76)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 76 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/_fails.js ***!
  \*********************************************/
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 77 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_dom-create.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 73)
	  , document = __webpack_require__(/*! ./_global */ 62).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 78 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/_to-primitive.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(/*! ./_is-object */ 73);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 79 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_property-desc.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 80 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 81), __esModule: true };

/***/ },
/* 81 */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/get-iterator.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 82);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 97);
	module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 99);

/***/ },
/* 82 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 83);
	var global        = __webpack_require__(/*! ./_global */ 62)
	  , hide          = __webpack_require__(/*! ./_hide */ 70)
	  , Iterators     = __webpack_require__(/*! ./_iterators */ 86)
	  , TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 95)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 83 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 84)
	  , step             = __webpack_require__(/*! ./_iter-step */ 85)
	  , Iterators        = __webpack_require__(/*! ./_iterators */ 86)
	  , toIObject        = __webpack_require__(/*! ./_to-iobject */ 53);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./_iter-define */ 87)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 84 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 85 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iter-step.js ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 86 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iterators.js ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 87 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-define.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(/*! ./_library */ 88)
	  , $export        = __webpack_require__(/*! ./_export */ 66)
	  , redefine       = __webpack_require__(/*! ./_redefine */ 89)
	  , hide           = __webpack_require__(/*! ./_hide */ 70)
	  , has            = __webpack_require__(/*! ./_has */ 52)
	  , Iterators      = __webpack_require__(/*! ./_iterators */ 86)
	  , $iterCreate    = __webpack_require__(/*! ./_iter-create */ 90)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 94)
	  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 96)
	  , ITERATOR       = __webpack_require__(/*! ./_wks */ 95)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 88 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_library.js ***!
  \***********************************************/
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 89 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/_redefine.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./_hide */ 70);

/***/ },
/* 90 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-create.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(/*! ./_object-create */ 91)
	  , descriptor     = __webpack_require__(/*! ./_property-desc */ 79)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 94)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./_hide */ 70)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 95)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 91 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_object-create.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(/*! ./_an-object */ 72)
	  , dPs         = __webpack_require__(/*! ./_object-dps */ 92)
	  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 64)
	  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 60)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(/*! ./_dom-create */ 77)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(/*! ./_html */ 93).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 92 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-dps.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(/*! ./_object-dp */ 71)
	  , anObject = __webpack_require__(/*! ./_an-object */ 72)
	  , getKeys  = __webpack_require__(/*! ./_object-keys */ 50);
	
	module.exports = __webpack_require__(/*! ./_descriptors */ 75) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 93 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_html.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./_global */ 62).document && document.documentElement;

/***/ },
/* 94 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./_object-dp */ 71).f
	  , has = __webpack_require__(/*! ./_has */ 52)
	  , TAG = __webpack_require__(/*! ./_wks */ 95)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 95 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_wks.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(/*! ./_shared */ 61)('wks')
	  , uid        = __webpack_require__(/*! ./_uid */ 63)
	  , Symbol     = __webpack_require__(/*! ./_global */ 62).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 96 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-gpo.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(/*! ./_has */ 52)
	  , toObject    = __webpack_require__(/*! ./_to-object */ 48)
	  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 60)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 97 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./_string-at */ 98)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./_iter-define */ 87)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 98 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_string-at.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 58)
	  , defined   = __webpack_require__(/*! ./_defined */ 49);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 99 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(/*! ./_an-object */ 72)
	  , get      = __webpack_require__(/*! ./core.get-iterator-method */ 100);
	module.exports = __webpack_require__(/*! ./_core */ 67).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 100 */
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 101)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 95)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 86);
	module.exports = __webpack_require__(/*! ./_core */ 67).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 101 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_classof.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./_cof */ 55)
	  , TAG = __webpack_require__(/*! ./_wks */ 95)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 102 */
/*!******************************************************!*\
  !*** ./~/babel-runtime/helpers/toConsumableArray.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(/*! ../core-js/array/from */ 103);
	
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

/***/ },
/* 103 */
/*!***********************************************!*\
  !*** ./~/babel-runtime/core-js/array/from.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ 104), __esModule: true };

/***/ },
/* 104 */
/*!********************************************!*\
  !*** ./~/core-js/library/fn/array/from.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.string.iterator */ 97);
	__webpack_require__(/*! ../../modules/es6.array.from */ 105);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 67).Array.from;

/***/ },
/* 105 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.from.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(/*! ./_ctx */ 68)
	  , $export        = __webpack_require__(/*! ./_export */ 66)
	  , toObject       = __webpack_require__(/*! ./_to-object */ 48)
	  , call           = __webpack_require__(/*! ./_iter-call */ 106)
	  , isArrayIter    = __webpack_require__(/*! ./_is-array-iter */ 107)
	  , toLength       = __webpack_require__(/*! ./_to-length */ 57)
	  , createProperty = __webpack_require__(/*! ./_create-property */ 108)
	  , getIterFn      = __webpack_require__(/*! ./core.get-iterator-method */ 100);
	
	$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ 109)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 106 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iter-call.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./_an-object */ 72);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 107 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_is-array-iter.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(/*! ./_iterators */ 86)
	  , ITERATOR   = __webpack_require__(/*! ./_wks */ 95)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 108 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/_create-property.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(/*! ./_object-dp */ 71)
	  , createDesc      = __webpack_require__(/*! ./_property-desc */ 79);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 109 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-detect.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(/*! ./_wks */ 95)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 110 */
/*!*****************************************!*\
  !*** ./docs/example/gettingStarted.vue ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue */ 111)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 111 */
/*!******************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/gettingStarted.vue ***!
  \******************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"getting-started\">\n    <h1 class=\"page-header\"><a href=\"#getting-started\" class=\"anchor\">Getting started</a></h1>\n    <div class=\"bs-callout bs-callout-success\">\n      <h4>About this project</h4>\n      <p>\n        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\n        As a result no dependency on jQuery or Bootstrap's JavaScript is required.\n        The only required dependencies are:\n      </p>\n      <ul>\n        <li><a href=\"http://vuejs.org/\">Vue.js</a>\n          (required ^1.0.8, test with 1.0.8).</li>\n        <li><a href=\"http://getbootstrap.com/\">Bootstrap CSS</a>\n          (required 3.x.x, test with 3.3.5).\n          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\n        </li>\n      </ul>\n    </div>\n    <h2>CommonJS</h2>\n    <pre><code class=\"language-javascript\">$ npm install vue-strap\n\nvar alert = require('vue-strap/lib/alert');\n// or\nvar alert = require('vue-strap').alert;\n\nnew Vue({\n  components: {\n    'alert': alert\n  }\n})</code></pre>\n    <h2>ES6</h2>\n    <pre><code class=\"language-javascript\">$ npm install vue-strap\n\nimport alert from 'vue-strap/src/alert'\n// or\nimport { alert } from 'vue-strap'\n\nnew Vue({\n  components: {\n    alert\n  }\n})</code></pre>\n    <h2>Browser globals</h2>\n    <p>\n      The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.js</code> with\n      all components exported in the <code>window.VueStrap</code> object.\n    </p>\n    <pre><code class=\"language-markup\">\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/vue-strap.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  var alert = VueStrap.alert\n&lt;/script&gt;\n    </code></pre>\n  </div>";

/***/ },
/* 112 */
/*!************************************!*\
  !*** ./docs/example/container.vue ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./container.vue */ 113)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./container.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./container.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./container.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 113 */
/*!*************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/container.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container bs-docs-container\">\n    <div class=\"row\">\n        <slot></slot>\n    </div>\n  </div>";

/***/ },
/* 114 */
/*!*************************************!*\
  !*** ./docs/example/headerDocs.vue ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./headerDocs.vue */ 115)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./headerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./headerDocs.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./headerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 115 */
/*!**************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/headerDocs.vue ***!
  \**************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<header class=\"navbar navbar-static-top bs-docs-nav\" id=\"top\" role=\"banner\">\n    <navbar>\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"../\" class=\"navbar-brand\">VueStrap</a>\n      <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\" slot=\"dropdown-menu\">\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a href=\"#accordion\" style=\"color:#19986B\">Components</a>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"https://github.com/yuche/vue-strap\">\n            <span class=\"icon-github-circled\"></span>\n            GitHub\n          </a></li>\n        </ul>\n      </nav>\n    </navbar>\n  </header>";

/***/ },
/* 116 */
/*!************************************!*\
  !*** ./docs/example/alertDocs.vue ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../../~/vue-loader/lib/style-rewriter.js?id=_v-5218cfc4&file=alertDocs.vue!./../../~/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue */ 117)
	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue */ 121)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./alertDocs.vue */ 122)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./alertDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./alertDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 117 */
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-5218cfc4&file=alertDocs.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/example/alertDocs.vue ***!
  \*********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/vue-loader/lib/style-rewriter.js?id=_v-5218cfc4&file=alertDocs.vue!./../../~/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue */ 118);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5218cfc4&file=alertDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5218cfc4&file=alertDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 118 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-5218cfc4&file=alertDocs.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/example/alertDocs.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".alert-icon-float-left {\n    font-size:32px;float:left;margin-right:5px;\n  }", ""]);
	
	// exports


/***/ },
/* 119 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 120 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 121 */
/*!********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/alertDocs.vue ***!
  \********************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="alert">
	//     <h1 class="page-header">
	//       <a href="#alert" class="anchor">Alert</a>
	//     </h1>
	//     <div class="bs-example" >
	//       <button class="btn btn-success btn-lg"
	//         @click="showRight = !showRight">
	//         Click to toggle alert on right
	//       </button>
	
	//       <button class="btn btn-danger btn-lg"
	//         @click="showTop = !showTop">
	//         Click to toggle alert on top
	//       </button>
	//       <hr>
	//       <alert type="success" >
	//         <strong>Well Done!</strong>
	//         You successfully read this important alert message.
	//       </alert>
	
	//       <alert type="info" >
	//         <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
	//       </alert>
	
	//       <alert type="danger" dismissable>
	//         <strong>Oh snap!</strong> Change a few things up and try submitting again.
	//       </alert>
	
	//       <alert type="warning" dismissable>
	//         <strong>Warning!</strong> Better check yourself, you're not looking too good.
	//       </alert>
	
	//       <alert
	//         :show="showRight"
	//         :duration="3000"
	//         type="success"
	//         width="400px"
	//         placement="top-right"
	//         dismissable
	//         @close="showRight = false"
	//       >
	//         <span class="icon-ok-circled alert-icon-float-left"></span>
	//         <strong>Well Done!</strong>
	//         <p>You successfully read this important alert message.</p>
	//       </alert>
	
	//       <alert
	//         :show="showTop"
	//         :duration="3000"
	//         type="danger"
	//         width="400px"
	//         placement="top"
	//         dismissable
	//         @close="showTop = false"
	//       >
	//         <span class="icon-info-circled alert-icon-float-left"></span>
	//         <strong>Heads up!</strong>
	//         <p>This alert needs your attention.</p>
	//       </alert>
	//     </div>
	
	//     <pre><code class="language-markup">&lt;button class="btn btn-default btn-lg"
	//   @click="showRight = !showRight"&gt;
	//   Click to toggle alert on right
	// &lt;/button&gt;
	
	// &lt;button class="btn btn-default btn-lg"
	//   @click="showTop = !showTop"&gt;
	//   Click to toggle alert on top
	// &lt;/button&gt;
	// &lt;hr&gt;
	// &lt;alert type="success" &gt;
	//   &lt;strong&gt;Well Done!&lt;/strong&gt;
	//   You successfully read this important alert message.
	// &lt;/alert&gt;
	
	// &lt;alert type="info" &gt;
	//   &lt;strong&gt;Heads up!&lt;/strong&gt; This alert needs your attention, but it's not super important.
	// &lt;/alert&gt;
	
	// &lt;alert type="danger" dismissable&gt;
	//   &lt;strong&gt;Oh snap!&lt;/strong&gt; Change a few things up and try submitting again.
	// &lt;/alert&gt;
	
	// &lt;alert type="warning" dismissable&gt;
	//   &lt;strong&gt;Warning!&lt;/strong&gt; Better check yourself, you're not looking too good.
	// &lt;/alert&gt;
	
	// &lt;alert
	//   :show="showRight"
	//   :duration="3000"
	//   type="success"
	//   width="400px"
	//   placement="top-right"
	//   dismissable
	//   @close="showRight = false"
	// &gt;
	//   &lt;span class="icon-ok-circled alert-icon-float-left"&gt;&lt;/span&gt;
	//   &lt;strong&gt;Well Done!&lt;/strong&gt;
	//   &lt;p&gt;You successfully read this important alert message.&lt;/p&gt;
	// &lt;/alert&gt;
	
	// &lt;alert
	//   :show="showTop"
	//   :duration="3000"
	//   type="danger"
	//   width="400px"
	//   placement="top"
	//   dismissable
	//   @close="showTop = false"
	// &gt;
	//   &lt;span class="icon-info-circled alert-icon-float-left"&gt;&lt;/span&gt;
	//   &lt;strong&gt;Heads up!&lt;/strong&gt;
	//   &lt;p&gt;This alert needs your attention.&lt;/p&gt;
	// &lt;/alert&gt;
	// </code></pre>
	
	//     <h2>Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>show</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>true</code></td>
	//           <td>Whether show the component</td>
	//         </tr>
	//         <tr>
	//           <td>dismissable</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>Whether show close button</td>
	//         </tr>
	//         <tr>
	//           <td>type</td>
	//           <td><code>String</code>, one of
	//           <code>success</code>
	//           <code>info</code>
	//           <code>warning</code>
	//           <code>danger</code></td>
	//           <td><code>success</code></td>
	//           <td>Components styles</td>
	//         </tr>
	//         <tr>
	//           <td>duration</td>
	//           <td><code>Number</code></td>
	//           <td><code>0</code></td>
	//           <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>
	//         </tr>
	//         <tr>
	//           <td>width</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>placement</td>
	//           <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>
	//           <td></td>
	//           <td>how to position the component.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      showRight: false,
	      showTop: false
	    };
	  }
	};
	// </script>
	
	// <style>
	//   .alert-icon-float-left {
	//     font-size:32px;float:left;margin-right:5px;
	//   }
	// </style>

/***/ },
/* 122 */
/*!*************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/alertDocs.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"alert\">\n    <h1 class=\"page-header\">\n      <a href=\"#alert\" class=\"anchor\">Alert</a>\n    </h1>\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        Click to toggle alert on right\n      </button>\n\n      <button class=\"btn btn-danger btn-lg\"\n        @click=\"showTop = !showTop\">\n        Click to toggle alert on top\n      </button>\n      <hr>\n      <alert type=\"success\" >\n        <strong>Well Done!</strong>\n        You successfully read this important alert message.\n      </alert>\n\n      <alert type=\"info\" >\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n      </alert>\n\n      <alert type=\"danger\" dismissable>\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n      </alert>\n\n      <alert type=\"warning\" dismissable>\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\n      </alert>\n\n      <alert\n        :show=\"showRight\"\n        :duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n        @close=\"showRight = false\"\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n\n      <alert\n        :show=\"showTop\"\n        :duration=\"3000\"\n        type=\"danger\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable\n        @close=\"showTop = false\"\n      >\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n    </div>\n\n    <pre><code class=\"language-markup\">&lt;button class=\"btn btn-default btn-lg\"\n  @click=\"showRight = !showRight\"&gt;\n  Click to toggle alert on right\n&lt;/button&gt;\n\n&lt;button class=\"btn btn-default btn-lg\"\n  @click=\"showTop = !showTop\"&gt;\n  Click to toggle alert on top\n&lt;/button&gt;\n&lt;hr&gt;\n&lt;alert type=\"success\" &gt;\n  &lt;strong&gt;Well Done!&lt;/strong&gt;\n  You successfully read this important alert message.\n&lt;/alert&gt;\n\n&lt;alert type=\"info\" &gt;\n  &lt;strong&gt;Heads up!&lt;/strong&gt; This alert needs your attention, but it's not super important.\n&lt;/alert&gt;\n\n&lt;alert type=\"danger\" dismissable&gt;\n  &lt;strong&gt;Oh snap!&lt;/strong&gt; Change a few things up and try submitting again.\n&lt;/alert&gt;\n\n&lt;alert type=\"warning\" dismissable&gt;\n  &lt;strong&gt;Warning!&lt;/strong&gt; Better check yourself, you're not looking too good.\n&lt;/alert&gt;\n\n&lt;alert\n  :show=\"showRight\"\n  :duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable\n  @close=\"showRight = false\"\n&gt;\n  &lt;span class=\"icon-ok-circled alert-icon-float-left\"&gt;&lt;/span&gt;\n  &lt;strong&gt;Well Done!&lt;/strong&gt;\n  &lt;p&gt;You successfully read this important alert message.&lt;/p&gt;\n&lt;/alert&gt;\n\n&lt;alert\n  :show=\"showTop\"\n  :duration=\"3000\"\n  type=\"danger\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable\n  @close=\"showTop = false\"\n&gt;\n  &lt;span class=\"icon-info-circled alert-icon-float-left\"&gt;&lt;/span&gt;\n  &lt;strong&gt;Heads up!&lt;/strong&gt;\n  &lt;p&gt;This alert needs your attention.&lt;/p&gt;\n&lt;/alert&gt;\n</code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>Whether show the component</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether show close button</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code></td>\n          <td><code>success</code></td>\n          <td>Components styles</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>how to position the component.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 123 */
/*!****************************************!*\
  !*** ./docs/example/accordionDocs.vue ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue */ 124)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./accordionDocs.vue */ 125)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./accordionDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./accordionDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 124 */
/*!************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/accordionDocs.vue ***!
  \************************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="accordion">
	//     <h1 class="page-header"><a href="#accordion" class="anchor">Accordion</a></h1>
	//     <div class="bs-example">
	//       <p>
	//         <input type="checkbox" v-model="checked">
	//         Open only one at a time.
	//       </p>
	//       <accordion :one-at-a-time="checked">
	//         <panel header="Panel #1" :is-open="true">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #2">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #3">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #4">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//       </accordion>
	//     </div>
	//     <pre><code class="language-markup">&lt;input type="checkbox" v-model="checked"&gt;
	// &lt;label for="checked"&gt;Open only one at a time.&lt;/label&gt;
	
	// &lt;accordion :one-at-a-time="checked"&gt;
	//   &lt;panel header="Panel #1" :is-open="true"&gt;
	//     ...
	//   &lt;/panel&gt;
	//   &lt;panel header="Panel #2"&gt;
	//     ...
	//   &lt;/panel&gt;
	//   &lt;panel header="Panel #3"&gt;
	//     ...
	//   &lt;/panel&gt;
	//   &lt;panel header="Panel #4"&gt;
	//     ...
	//   &lt;/panel&gt;
	// &lt;/accordion&gt;
	// </code></pre>
	//     <h2>Accordion Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>one-at-a-time</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>Control whether expanding an item will cause the other items to close.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//     <h2>Panel Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>is-open</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>Whether accordion group is open or closed.</td>
	//         </tr>
	//         <tr>
	//           <td>header</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      checked: true
	    };
	  }
	};
	// </script>

/***/ },
/* 125 */
/*!*****************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/accordionDocs.vue ***!
  \*****************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"accordion\">\n    <h1 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <input type=\"checkbox\" v-model=\"checked\">\n        Open only one at a time.\n      </p>\n      <accordion :one-at-a-time=\"checked\">\n        <panel header=\"Panel #1\" :is-open=\"true\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #2\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #3\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #4\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n      </accordion>\n    </div>\n    <pre><code class=\"language-markup\">&lt;input type=\"checkbox\" v-model=\"checked\"&gt;\n&lt;label for=\"checked\"&gt;Open only one at a time.&lt;/label&gt;\n\n&lt;accordion :one-at-a-time=\"checked\"&gt;\n  &lt;panel header=\"Panel #1\" :is-open=\"true\"&gt;\n    ...\n  &lt;/panel&gt;\n  &lt;panel header=\"Panel #2\"&gt;\n    ...\n  &lt;/panel&gt;\n  &lt;panel header=\"Panel #3\"&gt;\n    ...\n  &lt;/panel&gt;\n  &lt;panel header=\"Panel #4\"&gt;\n    ...\n  &lt;/panel&gt;\n&lt;/accordion&gt;\n</code></pre>\n    <h2>Accordion Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>one-at-a-time</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Control whether expanding an item will cause the other items to close.</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>Panel Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>is-open</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether accordion group is open or closed.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 126 */
/*!************************************!*\
  !*** ./docs/example/affixDocs.vue ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../../~/vue-loader/lib/style-rewriter.js?id=_v-73506438&file=affixDocs.vue&scoped=true!./../../~/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue */ 127)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/template-rewriter.js?id=_v-73506438&file=affixDocs.vue!./../../~/vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue */ 129)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-73506438&file=affixDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-73506438&file=affixDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-73506438&file=affixDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 127 */
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-73506438&file=affixDocs.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/example/affixDocs.vue ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/vue-loader/lib/style-rewriter.js?id=_v-73506438&file=affixDocs.vue&scoped=true!./../../~/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue */ 128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-73506438&file=affixDocs.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-73506438&file=affixDocs.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 128 */
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-73506438&file=affixDocs.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/example/affixDocs.vue ***!
  \****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".animated[_v-73506438] {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite\n}\n@-webkit-keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n@keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n.shake[_v-73506438] {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}", ""]);
	
	// exports


/***/ },
/* 129 */
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/template-rewriter.js?id=_v-73506438&file=affixDocs.vue!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/affixDocs.vue ***!
  \***************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"affix\" _v-73506438=\"\">\n    <h1 class=\"page-header\" _v-73506438=\"\"><a href=\"#affix\" class=\"anchor\" _v-73506438=\"\">Affix</a></h1>\n    <div class=\"bs-example\" _v-73506438=\"\">\n      <h3 _v-73506438=\"\">\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\" _v-73506438=\"\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\" _v-73506438=\"\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <pre _v-73506438=\"\"><code class=\"language-markup\" _v-73506438=\"\">&lt;affix offset=\"\"&gt;\n  &lt;nav class=\"sidebar\"&gt;\n    &lt;ul&gt;\n      &lt;li&gt;...&lt;/li&gt;\n      &lt;li&gt;...&lt;/li&gt;\n      &lt;li&gt;...&lt;/li&gt;\n    &lt;/ul&gt;\n  &lt;/nav&gt;\n&lt;/affix&gt;\n</code></pre>\n    <h2 _v-73506438=\"\">Options</h2>\n    <table class=\"table table-bordered\" _v-73506438=\"\">\n      <thead _v-73506438=\"\">\n        <tr _v-73506438=\"\">\n          <th _v-73506438=\"\">Name</th>\n          <th _v-73506438=\"\">Type</th>\n          <th _v-73506438=\"\">Default</th>\n          <th _v-73506438=\"\">Description</th>\n        </tr>\n      </thead>\n      <tbody _v-73506438=\"\">\n        <tr _v-73506438=\"\">\n          <td _v-73506438=\"\">offset</td>\n          <td _v-73506438=\"\"><code _v-73506438=\"\">Number</code></td>\n          <td _v-73506438=\"\"><code _v-73506438=\"\">0</code></td>\n          <td _v-73506438=\"\">Pixels to offset from top of screen when calculating position of scroll.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 130 */
/*!************************************!*\
  !*** ./docs/example/asideDocs.vue ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue */ 131)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./asideDocs.vue */ 132)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./asideDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./asideDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 131 */
/*!********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/asideDocs.vue ***!
  \********************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="aside">
	//     <h1 class="page-header"><a href="#aside" class="anchor">Aside</a></h1>
	//     <div class="bs-example">
	//       <button class="btn btn-success btn-lg" @click="showRight = true">Show Aside on right</button>
	
	//       <bs-aside :show="showRight" @close="showRight = false" placement="right" header="Title" :width="350">
	//         <h4>Text in aside</h4>
	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//         tempor incididunt ut labore et dolore magna aliqua.</p>
	//         <p> Ut enim ad minim veniam,
	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//         consequat.</p>
	//         <div class="aside-footer">
	//           <button type="button" class="btn btn-default" @click="showRight=false">Close</button>
	//         </div>
	//       </bs-aside>
	
	//       <button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button>
	
	//       <bs-aside :show="showLeft" @close="showLeft = false" placement="left" header="Title" :width="350">
	//         <h4>Text in aside</h4>
	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//         tempor incididunt ut labore et dolore magna aliqua.</p>
	//         <p> Ut enim ad minim veniam,
	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//         consequat.</p>
	//         <div class="aside-footer">
	//           <button type="button" class="btn btn-default" @click="showLeft = false">Close</button>
	//         </div>
	//       </bs-aside>
	//     </div>
	//     <pre><code class="language-markup">&lt;button
	// class="btn btn-success btn-lg"
	// @click="showRight = true"&gt;Show Aside on right&lt;/button&gt;
	
	// &lt;bs-aside :show="showRight" @close="showRight = false" placement="right" header="Title" :width="350"&gt;
	// ...
	// &lt;/bs-aside&gt;
	
	// &lt;button
	// class="btn btn-danger btn-lg"
	// @click="showLeft = true"&gt;Show Aside on left&lt;/button&gt;
	
	// &lt;bs-aside :show="showLeft" @close="showLeft = false" placement="left" header="Title" :width="350"&gt;
	// ...
	// &lt;/bs-aside&gt;
	// </code></pre>
	
	//     <h2>Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>show</td>
	//           <td><code>Boolean</code></td>
	//           <td></td>
	//           <td>Whether show the component.</td>
	//         </tr>
	//         <tr>
	//           <td>placement</td>
	//           <td><code>String</code>, one of <code>left</code>, <code>right</code></td>
	//           <td><code>right</code></td>
	//           <td>how to position the component.</td>
	//         </tr>
	//         <tr>
	//           <td>header</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>Header text of the aside component.</td>
	//         </tr>
	//         <tr>
	//           <td>width</td>
	//           <td><code>Number</code></td>
	//           <td></td>
	//           <td></td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      showLeft: false,
	      showRight: false
	    };
	  }
	};
	// </script>

/***/ },
/* 132 */
/*!*************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/asideDocs.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"aside\">\n    <h1 class=\"page-header\"><a href=\"#aside\" class=\"anchor\">Aside</a></h1>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-success btn-lg\" @click=\"showRight = true\">Show Aside on right</button>\n\n      <bs-aside :show=\"showRight\" @close=\"showRight = false\" placement=\"right\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showRight=false\">Close</button>\n        </div>\n      </bs-aside>\n\n      <button class=\"btn btn-danger btn-lg\" @click=\"showLeft = true\">Show Aside on left</button>\n\n      <bs-aside :show=\"showLeft\" @close=\"showLeft = false\" placement=\"left\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showLeft = false\">Close</button>\n        </div>\n      </bs-aside>\n    </div>\n    <pre><code class=\"language-markup\">&lt;button\nclass=\"btn btn-success btn-lg\"\n@click=\"showRight = true\"&gt;Show Aside on right&lt;/button&gt;\n\n&lt;bs-aside :show=\"showRight\" @close=\"showRight = false\" placement=\"right\" header=\"Title\" :width=\"350\"&gt;\n...\n&lt;/bs-aside&gt;\n\n&lt;button\nclass=\"btn btn-danger btn-lg\"\n@click=\"showLeft = true\"&gt;Show Aside on left&lt;/button&gt;\n\n&lt;bs-aside :show=\"showLeft\" @close=\"showLeft = false\" placement=\"left\" header=\"Title\" :width=\"350\"&gt;\n...\n&lt;/bs-aside&gt;\n</code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td></td>\n          <td>Whether show the component.</td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>, one of <code>left</code>, <code>right</code></td>\n          <td><code>right</code></td>\n          <td>how to position the component.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Header text of the aside component.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 133 */
/*!***************************************!*\
  !*** ./docs/example/carouselDocs.vue ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue */ 134)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 134 */
/*!****************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/carouselDocs.vue ***!
  \****************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"carousel\">\n    <h1 class=\"page-header\"><a href=\"#caoursel\" class=\"anchor\">Carousel</a></h1>\n    <div class=\"bs-example\">\n      <carousel>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=one\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=two\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=three\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n      </carousel>\n    </div>\n    <pre><code class=\"language-markup\">&lt;carousel&gt;\n  &lt;slider&gt;\n    &lt;img src=\"http://placehold.it/1200x400?text=one\"&gt;\n      &lt;div class=\"carousel-caption\"&gt;\n       ...\n     &lt;/div&gt;\n  &lt;/slider&gt;\n  &lt;slider&gt;\n    &lt;img src=\"http://placehold.it/1200x400?text=two\"&gt;\n  &lt;/slider&gt;\n  &lt;slider&gt;\n    &lt;img src=\"http://placehold.it/1200x400?text=three\"&gt;\n  &lt;/slider&gt;\n&lt;/carousel&gt;\n</code></pre>\n\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>indicators</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the indicators.</td>\n      </tr>\n      <tr>\n        <td>controls</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the direction controls.</td>\n      </tr>\n      <tr>\n        <td>interval</td>\n        <td><code>Number</code></td>\n        <td><code>5000</code></td>\n        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 135 */
/*!**************************************!*\
  !*** ./docs/example/buttonsDocs.vue ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue */ 136)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./buttonsDocs.vue */ 137)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonsDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonsDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 136 */
/*!**********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/buttonsDocs.vue ***!
  \**********************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="buttons">
	//     <h1 class="page-header"><a href="#buttons" class="anchor">Buttons</a></h1>
	//     <div class="bs-example">
	//       <h4>Checkbox</h4>
	//       <checkbox-group v-model="checkboxValue">
	//         <checkbox value="left">Left</checkbox>
	//         <checkbox value="middle" checked>Middle</checkbox>
	//         <checkbox value="right">Right</checkbox>
	//       </checkbox-group>
	//       <p>
	//         <pre>
	// Checkbox value: {{checkboxValue}}
	//         </pre>
	//       </p>
	//       <hr>
	//       <h4>Radio</h4>
	//       <radio-group v-model="radioValue" type="primary">
	//         <radio value="left">Left</radio>
	//         <radio value="middle" checked>Middle</radio>
	//         <radio value="right">Right</radio>
	//       </radio-group>
	
	//       <radio-group v-model="radioValue" type="success">
	//         <radio value="left">Left</radio>
	//         <radio value="middle" checked>Middle</radio>
	//         <radio value="right">Right</radio>
	//       </radio-group>
	//       <p>
	//         <pre>
	// Radio value: {{radioValue}}
	//         </pre>
	//       </p>
	//     </div>
	
	//     <pre><code class="language-markup">&lt;checkbox-group v-model="checkboxValue"&gt;
	//   &lt;checkbox value="left"&gt;Left&lt;/checkbox&gt;
	//   &lt;checkbox value="middle" checked&gt;Middle&lt;/checkbox&gt;
	//   &lt;checkbox value="right"&gt;Right&lt;/checkbox&gt;
	// &lt;/checkbox-group&gt;
	
	// &lt;radio-group v-model="radioValue" type="primary"&gt;
	//   &lt;radio value="left"&gt;Left&lt;/radio&gt;
	//   &lt;radio value="middle" checked&gt;Middle&lt;/radio&gt;
	//   &lt;radio value="right"&gt;Right&lt;/radio&gt;
	// &lt;/radio-group&gt;
	
	// &lt;radio-group v-model="radioValue" type="success"&gt;
	//   &lt;radio value="left"&gt;Left&lt;/radio&gt;
	//   &lt;radio value="middle" checked&gt;Middle&lt;/radio&gt;
	//   &lt;radio value="right"&gt;Right&lt;/radio&gt;
	// &lt;/radio-group&gt;
	// </code></pre>
	
	//     <h2>Group options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>value</td>
	//           <td><code>Array</code> or <code>String</code></td>
	//           <td></td>
	//           <td>If defined, then the defined values will be checked otherwise the elements with a checked attribute
	//           will be checked.</td>
	//         </tr>
	//         <tr>
	//           <td>type</td>
	//           <td><code>String</code>, one of <code>default</code>
	//           <code>primary</code>
	//           <code>danger</code>
	//           <code>info</code>
	//           <code>warning</code>
	//           <code>success</code></td>
	//           <td><code>default</code></td>
	//           <td></td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      checkboxValue: [],
	      radioValue: ''
	    };
	  }
	};
	// </script>

/***/ },
/* 137 */
/*!***************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/buttonsDocs.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"buttons\">\n    <h1 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Buttons</a></h1>\n    <div class=\"bs-example\">\n      <h4>Checkbox</h4>\n      <checkbox-group v-model=\"checkboxValue\">\n        <checkbox value=\"left\">Left</checkbox>\n        <checkbox value=\"middle\" checked>Middle</checkbox>\n        <checkbox value=\"right\">Right</checkbox>\n      </checkbox-group>\n      <p>\n        <pre>\nCheckbox value: {{checkboxValue}}\n        </pre>\n      </p>\n      <hr>\n      <h4>Radio</h4>\n      <radio-group v-model=\"radioValue\" type=\"primary\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n\n      <radio-group v-model=\"radioValue\" type=\"success\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n      <p>\n        <pre>\nRadio value: {{radioValue}}\n        </pre>\n      </p>\n    </div>\n\n    <pre><code class=\"language-markup\">&lt;checkbox-group v-model=\"checkboxValue\"&gt;\n  &lt;checkbox value=\"left\"&gt;Left&lt;/checkbox&gt;\n  &lt;checkbox value=\"middle\" checked&gt;Middle&lt;/checkbox&gt;\n  &lt;checkbox value=\"right\"&gt;Right&lt;/checkbox&gt;\n&lt;/checkbox-group&gt;\n\n&lt;radio-group v-model=\"radioValue\" type=\"primary\"&gt;\n  &lt;radio value=\"left\"&gt;Left&lt;/radio&gt;\n  &lt;radio value=\"middle\" checked&gt;Middle&lt;/radio&gt;\n  &lt;radio value=\"right\"&gt;Right&lt;/radio&gt;\n&lt;/radio-group&gt;\n\n&lt;radio-group v-model=\"radioValue\" type=\"success\"&gt;\n  &lt;radio value=\"left\"&gt;Left&lt;/radio&gt;\n  &lt;radio value=\"middle\" checked&gt;Middle&lt;/radio&gt;\n  &lt;radio value=\"right\"&gt;Right&lt;/radio&gt;\n&lt;/radio-group&gt;\n</code></pre>\n\n    <h2>Group options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>Array</code> or <code>String</code></td>\n          <td></td>\n          <td>If defined, then the defined values will be checked otherwise the elements with a checked attribute\n          will be checked.</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of <code>default</code>\n          <code>primary</code>\n          <code>danger</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>success</code></td>\n          <td><code>default</code></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 138 */
/*!*****************************************!*\
  !*** ./docs/example/datepickerDocs.vue ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue */ 139)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./datepickerDocs.vue */ 140)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./datepickerDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./datepickerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 139 */
/*!*************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/datepickerDocs.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="bs-docs-section" id="datepicker">
	//         <h1 class="page-header"><a href="#datepicker" class="anchor">Datepicker</a></h1>
	
	//         <tabs>
	//             <tab header="Example">
	//                 <p>
	//                     <pre>Selected date is: {{dateValue}}</pre>
	//                 </p>
	
	//                 <datepicker ref="dp" v-model="value" :disabled-days-of-week="disabled" :format="format.toString()" :show-reset-button="reset" :show-picker-button="picker" @change="dateChanged"></datepicker>
	
	//                 <h4>Disabled days of week</h4>
	
	//                 <bs-select multiple v-model="disabled">
	//                     <bs-option value="0">0</bs-option>
	//                     <bs-option value="1">1</bs-option>
	//                     <bs-option value="2">2</bs-option>
	//                     <bs-option value="3">3</bs-option>
	//                     <bs-option value="4">4</bs-option>
	//                     <bs-option value="5">5</bs-option>
	//                     <bs-option value="6">6</bs-option>
	//                 </bs-select>
	
	//                 <h4>Format</h4>
	//                 <bs-select v-model="format">
	//                     <bs-option value="yyyy,MM,dd">yyyy,MM,dd</bs-option>
	//                     <bs-option value="yyyy-MM-dd">yyyy-MM-dd</bs-option>
	//                     <bs-option value="yyyy.MM.dd">yyyy.MM.dd</bs-option>
	//                     <bs-option value="MMM/dd/yyyy">MMM/dd/yyyy</bs-option>
	//                     <bs-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</bs-option>
	//                     <bs-option value="dd/MM/yyyy">dd/MM/yyyy</bs-option>
	//                     <bs-option value="dd-MM-yyyy">dd-MM-yyyy</bs-option>
	//                 </bs-select>
	
	//                 <h4>Reset button</h4>
	//                 <label>
	//                     <input type="checkbox" v-model="reset"> toggle reset button
	//                 </label>
	
	//                 <h4>Picker button</h4>
	//                 <label>
	//                     <input type="checkbox" v-model="picker"> toggle picker button
	//                 </label>
	//             </tab>
	
	//             <tab header="Markup">
	//                 <pre><code class="language-markup">&lt;datepicker
	//   v-model="value"
	//   :disabled-days-of-week="disabled"
	//   :format="format"
	//   :show-reset-button="reset"&gt;
	// &lt;/datepicker&gt;
	// </code></pre>
	//             </tab>
	
	//             <tab header="Options">
	//                 <table class="table table-bordered">
	//                     <thead>
	//                         <tr>
	//                             <th>Name</th>
	//                             <th>Type</th>
	//                             <th>Default</th>
	//                             <th>Description</th>
	//                         </tr>
	//                     </thead>
	//                     <tbody>
	//                         <tr>
	//                             <td>value</td>
	//                             <td><code>String</code></td>
	//                             <td></td>
	//                             <td>Input's value</td>
	//                         </tr>
	//                         <tr>
	//                             <td>type</td>
	//                             <td><code>String</code></td>
	//                             <td>text</td>
	//                             <td>Input's type. Type <code>hidden</code> can be used to only show a picker button.</td>
	//                         </tr>
	//                         <tr>
	//                             <td>tabindex</td>
	//                             <td><code>String</code></td>
	//                             <td></td>
	//                             <td>Input's tabindex</td>
	//                         </tr>
	//                         <tr>
	//                             <td>placeholder</td>
	//                             <td><code>String</code></td>
	//                             <td></td>
	//                             <td>Input's placeholder</td>
	//                         </tr>
	//                         <tr>
	//                             <td>disabled</td>
	//                             <td><code>String</code></td>
	//                             <td></td>
	//                             <td>Input's disabled</td>
	//                         </tr>
	//                         <tr>
	//                             <td>format</td>
	//                             <td><code>String</code></td>
	//                             <td><code>dd/MM/yyyy</code></td>
	//                             <td>The date format, combination of d, dd, M, MM , MMM, MMMM, yyyy.</td>
	//                         </tr>
	//                         <tr>
	//                             <td>disabledDaysOfWeek</td>
	//                             <td><code>Array</code></td>
	//                             <td></td>
	//                             <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated.</td>
	//                         </tr>
	//                         <tr>
	//                             <td>showResetButton</td>
	//                             <td><code>Boolean</code></td>
	//                             <td>false</td>
	//                             <td>If <strong>true</strong> shows an &times; shaped button to clear the selected date. Usefull in forms where date entry is optional.</td>
	//                         </tr>
	//                         <tr>
	//                             <td>showPickerButton</td>
	//                             <td><code>Boolean</code></td>
	//                             <td>false</td>
	//                             <td>If <strong>true</strong> shows a button to trigger the datepicker while clicking on the input does nothing.</td>
	//                         </tr>
	//                     </tbody>
	//                 </table>
	//             </tab>
	
	//             <tab header="Events">
	//                 <table class="table table-bordered">
	//                     <thead>
	//                         <tr>
	//                             <th>Name</th>
	//                             <th>Parameters</th>
	//                             <th>Description</th>
	//                         </tr>
	//                     </thead>
	//                     <tbody>
	//                         <td>change</td>
	//                         <td>value</td>
	//                         <td>Triggered on value change</td>
	//                     </tbody>
	//                 </table>
	//             </tab>
	//         </tabs>
	//     </div>
	// </template>
	
	// <script>
	exports.default = {
	    data: function data() {
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
	        dateChanged: function dateChanged(value) {
	            console.log(value);
	            console.log(this.$refs);
	        }
	    }
	};
	// </script>

/***/ },
/* 140 */
/*!******************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/datepickerDocs.vue ***!
  \******************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"datepicker\">\n        <h1 class=\"page-header\"><a href=\"#datepicker\" class=\"anchor\">Datepicker</a></h1>\n\n        <tabs>\n            <tab header=\"Example\">\n                <p>\n                    <pre>Selected date is: {{dateValue}}</pre>\n                </p>\n\n                <datepicker ref=\"dp\" v-model=\"value\" :disabled-days-of-week=\"disabled\" :format=\"format.toString()\" :show-reset-button=\"reset\" :show-picker-button=\"picker\" @change=\"dateChanged\"></datepicker>\n\n                <h4>Disabled days of week</h4>\n\n                <bs-select multiple v-model=\"disabled\">\n                    <bs-option value=\"0\">0</bs-option>\n                    <bs-option value=\"1\">1</bs-option>\n                    <bs-option value=\"2\">2</bs-option>\n                    <bs-option value=\"3\">3</bs-option>\n                    <bs-option value=\"4\">4</bs-option>\n                    <bs-option value=\"5\">5</bs-option>\n                    <bs-option value=\"6\">6</bs-option>\n                </bs-select>\n\n                <h4>Format</h4>\n                <bs-select v-model=\"format\">\n                    <bs-option value=\"yyyy,MM,dd\">yyyy,MM,dd</bs-option>\n                    <bs-option value=\"yyyy-MM-dd\">yyyy-MM-dd</bs-option>\n                    <bs-option value=\"yyyy.MM.dd\">yyyy.MM.dd</bs-option>\n                    <bs-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</bs-option>\n                    <bs-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</bs-option>\n                    <bs-option value=\"dd/MM/yyyy\">dd/MM/yyyy</bs-option>\n                    <bs-option value=\"dd-MM-yyyy\">dd-MM-yyyy</bs-option>\n                </bs-select>\n\n                <h4>Reset button</h4>\n                <label>\n                    <input type=\"checkbox\" v-model=\"reset\"> toggle reset button\n                </label>\n\n                <h4>Picker button</h4>\n                <label>\n                    <input type=\"checkbox\" v-model=\"picker\"> toggle picker button\n                </label>\n            </tab>\n\n            <tab header=\"Markup\">\n                <pre><code class=\"language-markup\">&lt;datepicker\n  v-model=\"value\"\n  :disabled-days-of-week=\"disabled\"\n  :format=\"format\"\n  :show-reset-button=\"reset\"&gt;\n&lt;/datepicker&gt;\n</code></pre>\n            </tab>\n\n            <tab header=\"Options\">\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td><code>String</code></td>\n                            <td></td>\n                            <td>Input's value</td>\n                        </tr>\n                        <tr>\n                            <td>type</td>\n                            <td><code>String</code></td>\n                            <td>text</td>\n                            <td>Input's type. Type <code>hidden</code> can be used to only show a picker button.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td><code>String</code></td>\n                            <td></td>\n                            <td>Input's tabindex</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td><code>String</code></td>\n                            <td></td>\n                            <td>Input's placeholder</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td><code>String</code></td>\n                            <td></td>\n                            <td>Input's disabled</td>\n                        </tr>\n                        <tr>\n                            <td>format</td>\n                            <td><code>String</code></td>\n                            <td><code>dd/MM/yyyy</code></td>\n                            <td>The date format, combination of d, dd, M, MM , MMM, MMMM, yyyy.</td>\n                        </tr>\n                        <tr>\n                            <td>disabledDaysOfWeek</td>\n                            <td><code>Array</code></td>\n                            <td></td>\n                            <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated.</td>\n                        </tr>\n                        <tr>\n                            <td>showResetButton</td>\n                            <td><code>Boolean</code></td>\n                            <td>false</td>\n                            <td>If <strong>true</strong> shows an &times; shaped button to clear the selected date. Usefull in forms where date entry is optional.</td>\n                        </tr>\n                        <tr>\n                            <td>showPickerButton</td>\n                            <td><code>Boolean</code></td>\n                            <td>false</td>\n                            <td>If <strong>true</strong> shows a button to trigger the datepicker while clicking on the input does nothing.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </tab>\n\n            <tab header=\"Events\">\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <td>change</td>\n                        <td>value</td>\n                        <td>Triggered on value change</td>\n                    </tbody>\n                </table>\n            </tab>\n        </tabs>\n    </div>";

/***/ },
/* 141 */
/*!***************************************!*\
  !*** ./docs/example/dropdownDocs.vue ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue */ 142)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 142 */
/*!****************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/dropdownDocs.vue ***!
  \****************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"dropdown\">\n    <h1 class=\"page-header\"><a href=\"#dropdown\" class=\"anchor\">Dropdown</a></h1>\n\n    <tabs>\n      <tab header=\"Example\">\n        <dropdown>\n          <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n            Action\n            <span class=\"caret\"></span>\n          </button>\n          <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </dropdown>\n\n        <dropdown>\n          <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </dropdown>\n\n        <dropdown>\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"dropdown\">\n            Action <span class=\"caret\"></span>\n          </button>\n          <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </dropdown>\n\n        <div class=\"btn-group btn-group-justified\" role=\"group\">\n          <a href=\"#\" class=\"btn btn-default\" role=\"button\">Left</a>\n          <a href=\"#\" class=\"btn btn-default\" role=\"button\">Middle</a>\n          <dropdown>\n            <a href=\"#\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n              Dropdown <span class=\"caret\"></span>\n            </a>\n            <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n              <li><a href=\"#\">Action</a></li>\n              <li><a href=\"#\">Another action</a></li>\n              <li><a href=\"#\">Something else here</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\">Separated link</a></li>\n            </ul>\n          </dropdown>\n        </div>\n      </tab>\n\n      <tab header=\"Markup\">\n        <pre><code class=\"language-markup\">&lt;dropdown&gt;\n  &lt;button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\"&gt;\n    Action\n    &lt;span class=\"caret\"&gt;&lt;/span&gt;\n  &lt;/button&gt;\n  &lt;ul slot=\"dropdown-menu\" class=\"dropdown-menu\"&gt;\n    &lt;li&gt;&lt;a href=\"#\"&gt;Action&lt;/a&gt;&lt;/li&gt;\n    &lt;li&gt;&lt;a href=\"#\"&gt;Another action&lt;/a&gt;&lt;/li&gt;\n    &lt;li&gt;&lt;a href=\"#\"&gt;Something else here&lt;/a&gt;&lt;/li&gt;\n    &lt;li role=\"separator\" class=\"divider\"&gt;&lt;/li&gt;\n    &lt;li&gt;&lt;a href=\"#\"&gt;Separated link&lt;/a&gt;&lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/dropdown&gt;\n</code></pre>\n      </tab>\n\n      <tab header=\"Usage\">\n        <p>\n          Just use as <a target=\"_blank\" href=\"http://getbootstrap.com/javascript/#dropdowns\">original Bootstrap way</a>.\n        </p>\n      </tab>\n    </tabs>\n  </div>";

/***/ },
/* 143 */
/*!************************************!*\
  !*** ./docs/example/modalDocs.vue ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue */ 144)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./modalDocs.vue */ 145)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./modalDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./modalDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 144 */
/*!********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/modalDocs.vue ***!
  \********************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="modal">
	//     <h1 class="page-header"><a href="#modal" class="anchor">Modal</a></h1>
	//     <div class="bs-example">
	//       <button class="btn btn-default" @click="showModal = true">Show modal</button>
	//       <modal title="Modal title" :show="showModal" @close="showModal = false">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">Modal <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-success" @click="fadeModal = true">Fade modal</button>
	//       <modal title="Fade Modal" :show="fadeModal" @close="fadeModal = false" effect="fade" width="800">
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button>
	//       <modal title="Zoom Modal" :show="zoomModal" @close="zoomModal = false" effect="zoom" width="400">
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button>
	//       <modal :show="showCustomModal" @close="showCustomModal = false" effect="fade" width="50%">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//         <div slot="modal-footer" class="modal-footer">
	//           <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
	//           <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
	//         </div>
	//       </modal>
	//       <button class="btn btn-warning" @click="largeModal = true">Large modal</button>
	//       <modal title="Large Modal" :show="largeModal" @close="largeModal = false" large>
	//         <div slot="modal-body" class="modal-body">
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//         </div>
	//       </modal>
	//       <button class="btn btn-danger" @click="smallModal = true">Small modal</button>
	//       <modal title="Small Modal" :show="smallModal" @close="smallModal = false" small>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat.
	//         </div>
	//       </modal>
	//     </div>
	//     <pre><code class="language-markup">&lt;button class="btn btn-default"
	//   @click="showModal = true"
	//   &gt;Show modal
	// &lt;/button&gt;
	// &lt;modal :show="showModal" @click="showModal = false"&gt;
	//   &lt;div slot="modal-header" class="modal-header"&gt;
	//     &lt;h4 class="modal-title"&gt;Modal title&lt;/h4&gt;
	//   &lt;/div&gt;
	//   &lt;div slot="modal-body" class="modal-body"&gt;...&lt;/div&gt;
	// &lt;/modal&gt;
	
	// &lt;button class="btn btn-primary"
	//   @click="fadeModal = true"&gt;
	//   Fade modal
	// &lt;/button&gt;
	// &lt;modal title="Fade Modal" :show="fadeModal" @close="fadeModal = false" effect="fade" width="800"&gt;
	//   &lt;div slot="modal-body" class="modal-body"&gt;...&lt;/div&gt;
	// &lt;/modal&gt;
	
	// &lt;button class="btn btn-success"
	//   @click="zoomModal = true"&gt;
	//   Zoom modal
	// &lt;/button&gt;
	// &lt;modal title="Zoom Modal" :show="zoomModal" @close="zoomModal = false" effect="zoom" width="400"&gt;
	//   &lt;div slot="modal-body" class="modal-body"&gt;...&lt;/div&gt;
	// &lt;/modal&gt;
	
	// &lt;button class="btn btn-default"
	//   @click="showCustomModal = true"&gt;
	//   Show custom modal
	// &lt;/button&gt;
	// &lt;modal :show="showCustomModal" @close="showCustomModal = false" effect="fade" width="400"&gt;
	//   &lt;div slot="modal-header" class="modal-header"&gt;
	//     &lt;h4 class="modal-title"&gt;
	//       &lt;i&gt;Custom&lt;/i&gt; &lt;code&gt;Modal&lt;/code&gt; &lt;b&gt;Title&lt;/b&gt;
	//     &lt;/h4&gt;
	//   &lt;/div&gt;
	//   &lt;div slot="modal-body" class="modal-body"&gt;...&lt;/div&gt;
	//   &lt;div slot="modal-footer" class="modal-footer"&gt;
	//     &lt;button type="button" class="btn btn-default" @click='showCustomModal = false'&gt;Exit&lt;/button&gt;
	//     &lt;button type="button" class="btn btn-success" @click='showCustomModal = false'&gt;Custom Save&lt;/button&gt;
	//   &lt;/div&gt;
	// &lt;/modal&gt;
	// &lt;button class="btn btn-default"
	//   @click="largeModal = true"
	//   &gt;Large Modal
	// &lt;/button&gt;
	// &lt;modal :show="largeModal" @close="largeModal = false"&gt;
	//   &lt;div slot="modal-body" class="modal-body"&gt;...&lt;/div&gt;
	// &lt;/modal&gt;
	// &lt;button class="btn btn-default"
	//   @click="smallModal = true"
	//   &gt;Small Modal
	// &lt;/button&gt;
	// &lt;modal :show="smallModal" @close="smallModal = false"&gt;
	//   &lt;div slot="modal-body" class="modal-body"&gt;...&lt;/div&gt;
	// &lt;/modal&gt;
	// </code></pre>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>title</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>Title of the modal component.</td>
	//       </tr>
	//       <tr>
	//         <td>ok-text</td>
	//         <td><code>String</code></td>
	//         <td>Save changes</td>
	//         <td>Text for OK button</td>
	//       </tr>
	//       <tr>
	//         <td>cancel-text</td>
	//         <td><code>String</code></td>
	//         <td>Close</td>
	//         <td>Text for cancel button</td>
	//       </tr>
	//       <tr>
	//         <td>width</td>
	//         <td><code>Number, String or null</code></td>
	//         <td><code>null</code></td>
	//         <td>Pass a Number in pixels or a String with relational sizes ( ex: '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</td>
	//       </tr>
	//       <tr>
	//         <td>callback</td>
	//         <td><code>Function</code></td>
	//         <td></td>
	//         <td>A callback Function when you click the modal primary button.</td>
	//       </tr>
	//       <tr>
	//         <td>large</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>false</code></td>
	//         <td>Creates a large modal ( see boostrap's documentation for .modal-lg )</td>
	//       </tr>
	//       <tr>
	//         <td>small</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>false</code></td>
	//         <td>Creates a small modal ( see boostrap's documentation for .modal-sm )</td>
	//       </tr>
	//       <tr>
	//         <td>backdrop</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>true</code></td>
	//         <td>Enables/disables closing the modal by clicking on the backdrop.</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   <h2>Usage</h2>
	//   <p>
	//     If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you
	//     need to put custom HTML or a custom footer, you can override the header or footer block by using
	//     <code>&lt;div slot="modal-title" class="modal-title"&gt;...&lt;/div&gt;</code> and
	//     <code>&lt;div slot="modal-footer" class="modal-footer"&gt;...&lt;/div&gt;</code>.
	//   </p>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      showModal: false,
	      fadeModal: false,
	      zoomModal: false,
	      showCustomModal: false,
	      largeModal: false,
	      smallModal: false
	    };
	  }
	};
	// </script>

/***/ },
/* 145 */
/*!*************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/modalDocs.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"modal\">\n    <h1 class=\"page-header\"><a href=\"#modal\" class=\"anchor\">Modal</a></h1>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-default\" @click=\"showModal = true\">Show modal</button>\n      <modal title=\"Modal title\" :show=\"showModal\" @close=\"showModal = false\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-success\" @click=\"fadeModal = true\">Fade modal</button>\n      <modal title=\"Fade Modal\" :show=\"fadeModal\" @close=\"fadeModal = false\" effect=\"fade\" width=\"800\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" :show=\"zoomModal\" @close=\"zoomModal = false\" effect=\"zoom\" width=\"400\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\n      <modal :show=\"showCustomModal\" @close=\"showCustomModal = false\" effect=\"fade\" width=\"50%\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n        <div slot=\"modal-footer\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <button class=\"btn btn-warning\" @click=\"largeModal = true\">Large modal</button>\n      <modal title=\"Large Modal\" :show=\"largeModal\" @close=\"largeModal = false\" large>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </div>\n      </modal>\n      <button class=\"btn btn-danger\" @click=\"smallModal = true\">Small modal</button>\n      <modal title=\"Small Modal\" :show=\"smallModal\" @close=\"smallModal = false\" small>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.\n        </div>\n      </modal>\n    </div>\n    <pre><code class=\"language-markup\">&lt;button class=\"btn btn-default\"\n  @click=\"showModal = true\"\n  &gt;Show modal\n&lt;/button&gt;\n&lt;modal :show=\"showModal\" @click=\"showModal = false\"&gt;\n  &lt;div slot=\"modal-header\" class=\"modal-header\"&gt;\n    &lt;h4 class=\"modal-title\"&gt;Modal title&lt;/h4&gt;\n  &lt;/div&gt;\n  &lt;div slot=\"modal-body\" class=\"modal-body\"&gt;...&lt;/div&gt;\n&lt;/modal&gt;\n\n&lt;button class=\"btn btn-primary\"\n  @click=\"fadeModal = true\"&gt;\n  Fade modal\n&lt;/button&gt;\n&lt;modal title=\"Fade Modal\" :show=\"fadeModal\" @close=\"fadeModal = false\" effect=\"fade\" width=\"800\"&gt;\n  &lt;div slot=\"modal-body\" class=\"modal-body\"&gt;...&lt;/div&gt;\n&lt;/modal&gt;\n\n&lt;button class=\"btn btn-success\"\n  @click=\"zoomModal = true\"&gt;\n  Zoom modal\n&lt;/button&gt;\n&lt;modal title=\"Zoom Modal\" :show=\"zoomModal\" @close=\"zoomModal = false\" effect=\"zoom\" width=\"400\"&gt;\n  &lt;div slot=\"modal-body\" class=\"modal-body\"&gt;...&lt;/div&gt;\n&lt;/modal&gt;\n\n&lt;button class=\"btn btn-default\"\n  @click=\"showCustomModal = true\"&gt;\n  Show custom modal\n&lt;/button&gt;\n&lt;modal :show=\"showCustomModal\" @close=\"showCustomModal = false\" effect=\"fade\" width=\"400\"&gt;\n  &lt;div slot=\"modal-header\" class=\"modal-header\"&gt;\n    &lt;h4 class=\"modal-title\"&gt;\n      &lt;i&gt;Custom&lt;/i&gt; &lt;code&gt;Modal&lt;/code&gt; &lt;b&gt;Title&lt;/b&gt;\n    &lt;/h4&gt;\n  &lt;/div&gt;\n  &lt;div slot=\"modal-body\" class=\"modal-body\"&gt;...&lt;/div&gt;\n  &lt;div slot=\"modal-footer\" class=\"modal-footer\"&gt;\n    &lt;button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'&gt;Exit&lt;/button&gt;\n    &lt;button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'&gt;Custom Save&lt;/button&gt;\n  &lt;/div&gt;\n&lt;/modal&gt;\n&lt;button class=\"btn btn-default\"\n  @click=\"largeModal = true\"\n  &gt;Large Modal\n&lt;/button&gt;\n&lt;modal :show=\"largeModal\" @close=\"largeModal = false\"&gt;\n  &lt;div slot=\"modal-body\" class=\"modal-body\"&gt;...&lt;/div&gt;\n&lt;/modal&gt;\n&lt;button class=\"btn btn-default\"\n  @click=\"smallModal = true\"\n  &gt;Small Modal\n&lt;/button&gt;\n&lt;modal :show=\"smallModal\" @close=\"smallModal = false\"&gt;\n  &lt;div slot=\"modal-body\" class=\"modal-body\"&gt;...&lt;/div&gt;\n&lt;/modal&gt;\n</code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Title of the modal component.</td>\n      </tr>\n      <tr>\n        <td>ok-text</td>\n        <td><code>String</code></td>\n        <td>Save changes</td>\n        <td>Text for OK button</td>\n      </tr>\n      <tr>\n        <td>cancel-text</td>\n        <td><code>String</code></td>\n        <td>Close</td>\n        <td>Text for cancel button</td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td><code>Number, String or null</code></td>\n        <td><code>null</code></td>\n        <td>Pass a Number in pixels or a String with relational sizes ( ex: '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</td>\n      </tr>\n      <tr>\n        <td>callback</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>A callback Function when you click the modal primary button.</td>\n      </tr>\n      <tr>\n        <td>large</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>Creates a large modal ( see boostrap's documentation for .modal-lg )</td>\n      </tr>\n      <tr>\n        <td>small</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>Creates a small modal ( see boostrap's documentation for .modal-sm )</td>\n      </tr>\n      <tr>\n        <td>backdrop</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Enables/disables closing the modal by clicking on the backdrop.</td>\n      </tr>\n    </tbody>\n  </table>\n  <h2>Usage</h2>\n  <p>\n    If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you\n    need to put custom HTML or a custom footer, you can override the header or footer block by using\n    <code>&lt;div slot=\"modal-title\" class=\"modal-title\"&gt;...&lt;/div&gt;</code> and\n    <code>&lt;div slot=\"modal-footer\" class=\"modal-footer\"&gt;...&lt;/div&gt;</code>.\n  </p>\n  </div>";

/***/ },
/* 146 */
/*!**************************************!*\
  !*** ./docs/example/popoverDocs.vue ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue */ 147)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./popoverDocs.vue */ 148)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./popoverDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./popoverDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 147 */
/*!**********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/popoverDocs.vue ***!
  \**********************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="popover">
	//     <h1 class="page-header"><a href="#popover" class="anchor">Popover</a></h1>
	//     <div class="bs-example">
	//       <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="top">
	//         <button class="btn btn-default">Popover on top</button>
	//       </popover>
	//       <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="left">
	//         <button class="btn btn-default">Popover on left</button>
	//       </popover>
	//       <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="right">
	//         <button class="btn btn-default">Popover on right</button>
	//       </popover>
	//       <popover effect="fade" placement="bottom" :header="true" title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//         <button class="btn btn-default">Popover on bottom</button>
	//       </popover>
	//       <hr>
	//       <h4>No title</h4>
	//       <popover effect="fade" title="Title" content="Lorem ipsum dolor sit amet" placement="top">
	//         <button class="btn btn-default">Popover on top</button>
	//       </popover>
	//       <popover effect="fade" title="Title" content="Lorem ipsum dolor sit amet" placement="left">
	//         <button class="btn btn-default">Popover on left</button>
	//       </popover>
	//       <popover effect="fade" title="Title" content="Lorem ipsum dolor sit amet" placement="right">
	//         <button class="btn btn-default">Popover on right</button>
	//       </popover>
	//       <popover effect="fade" placement="bottom" title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//         <button class="btn btn-default">Popover on bottom</button>
	//       </popover>
	//       <hr>
	//       <h4>Trigger</h4>
	//       <p>
	//         <popover effect="scale"  title="Title" content="Lorem ipsum dolor sit amet" placement="top" trigger="hover">
	//           <button class="btn btn-default ">Mouseenter</button>
	//         </popover>
	//       </p>
	//       <popover effect="scale"
	//       title="Title" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
	//         <input type="text" class="form-control" placeholder="Focus">
	//       </popover>
	//     </div>
	//     <pre><code class="language-markup">&lt;popover
	//   effect="fade"
	//   placement="bottom"
	//   title="Title"
	//   content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//   &lt;button class="btn btn-default">Popover on bottom&lt;/button>
	// &lt;/popover>
	// </code></pre>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>trigger</td>
	//         <td><code>String</code>, one of <code>click</code>
	//           <code>focus</code>
	//           <code>hover</code></td>
	//         <td><code>click</code></td>
	//         <td>How the popover is triggered.</td>
	//       </tr>
	//       <tr>
	//         <td>effect</td>
	//         <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>
	//         <td><code>fade</code></td>
	//         <td></td>
	//       </tr>
	//       <tr>
	//         <td>title</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td></td>
	//       </tr>
	//       <tr>
	//         <td>content</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td></td>
	//       </tr>
	//       <tr>
	//         <td>header</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>true</code></td>
	//         <td>Whether to show the header.</td>
	//       </tr>
	//       <tr>
	//         <td>placement</td>
	//         <td><code>String</code>, one of <code>top</code>
	//           <code>left</code>
	//           <code>right</code>
	//           <code>bottom</code></td>
	//         <td></td>
	//         <td>How to position the popover.</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  }
	};
	// </script>

/***/ },
/* 148 */
/*!***************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/popoverDocs.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"popover\">\n    <h1 class=\"page-header\"><a href=\"#popover\" class=\"anchor\">Popover</a></h1>\n    <div class=\"bs-example\">\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default\">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default\">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default\">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default\">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>No title</h4>\n      <popover effect=\"fade\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default\">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default\">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default\">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\" title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default\">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>Trigger</h4>\n      <p>\n        <popover effect=\"scale\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n          <button class=\"btn btn-default \">Mouseenter</button>\n        </popover>\n      </p>\n      <popover effect=\"scale\"\n      title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </popover>\n    </div>\n    <pre><code class=\"language-markup\">&lt;popover\n  effect=\"fade\"\n  placement=\"bottom\"\n  title=\"Title\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  &lt;button class=\"btn btn-default\">Popover on bottom&lt;/button>\n&lt;/popover>\n</code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>click</code>\n          <code>focus</code>\n          <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the popover is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>\n        <td><code>fade</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the header.</td>\n      </tr>\n      <tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n          <code>left</code>\n          <code>right</code>\n          <code>bottom</code></td>\n        <td></td>\n        <td>How to position the popover.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 149 */
/*!*******************************************!*\
  !*** ./docs/example/progressbar-docs.vue ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue */ 150)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./progressbar-docs.vue */ 151)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progressbar-docs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progressbar-docs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 150 */
/*!***************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/progressbar-docs.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="progressbar">
	//     <h1 class="page-header"><a href="#progressbar" class="anchor">Progressbar</a></h1>
	//     <div class="bs-example">
	//       <h4>Static</h4>
	//       <div class="row">
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar :now="20" type="success"></progressbar>
	//           </div>
	//         </div>
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar :now="40" type="info"></progressbar>
	//           </div>
	//         </div>
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar :now="60" type="primary"></progressbar>
	//           </div>
	//         </div>
	//       </div>
	
	//       <hr>
	
	//       <h4>
	//         Dynamic
	//         <button type="button" class="btn btn-default" @click="dynamicClick">Randomize</button>
	//       </h4>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[0] * 2" type="info"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[1] * 2" type="warning"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[2] * 2" type="danger"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[3] * 2" type="success" striped></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[4] * 2" type="success" striped animated></progressbar>
	//       </div>
	
	//       <hr>
	
	//       <h4>
	//         Stacked
	//         <button type="button" class="btn btn-default" @click="stackedClick">Randomize</button>
	//       </h4>
	
	//       <div class="progress">
	//         <progressbar :now="stackedData[0]" label type="warning" striped></progressbar>
	
	//         <progressbar :now="stackedData[1]" label type="success" ></progressbar>
	
	//         <progressbar :now="stackedData[2]" label type="danger"></progressbar>
	
	//         <progressbar :now="stackedData[3]" label type="primary" striped animated></progressbar>
	//       </div>
	
	//     </div>
	//     <pre><code class="language-markup">&lt;!-- Stacked --&gt;
	// &lt;div class="progress"&gt;
	//   &lt;progressbar :now="" label type="warning" striped&gt;&lt;/progressbar&gt;
	
	//   &lt;progressbar :now="" label type="success" &gt;&lt;/progressbar&gt;
	
	//   &lt;progressbar :now="" label type="danger"&gt;&lt;/progressbar&gt;
	
	//   &lt;progressbar :now="" label type="primary" striped animated&gt;&lt;/progressbar&gt;
	// &lt;/div&gt;
	// &lt;!-- Single --&gt;
	// &lt;div class="progress"&gt;
	//   &lt;progressbar :now="" label type="warning" striped&gt;&lt;/progressbar&gt;
	// &lt;/div&gt;
	// </code></pre>
	
	//     <h2>Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>now</td>
	//           <td><code>Number</code></td>
	//           <td></td>
	//           <td>The current value of progress completed.</td>
	//         </tr>
	//         <tr>
	//           <td>type</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>Style type. Possible values are 'success', 'warning' etc.</td>
	//         </tr>
	//         <tr>
	//           <td>label</td>
	//           <td><code>Boolean</code></td>
	//           <td>false</td>
	//           <td>Whether to show the label.</td>
	//         </tr>
	//         <tr>
	//           <td>striped</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>Whether the progressbar has striped effect or not.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      dynamicData: [5, 15, 25, 35, 45],
	      stackedData: [10, 20, 30, 40]
	    };
	  },
	
	  methods: {
	    dynamicClick: function dynamicClick() {
	      this.dynamicData = this.dynamicData.map(function () {
	        return Math.floor(Math.random() * 50);
	      });
	    },
	    stackedClick: function stackedClick() {
	      var i = 100;
	      this.stackedData = this.stackedData.map(function () {
	        var random = Math.floor(Math.random() * i);
	        i = i - random;
	        return random;
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 151 */
/*!********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/progressbar-docs.vue ***!
  \********************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"progressbar\">\n    <h1 class=\"page-header\"><a href=\"#progressbar\" class=\"anchor\">Progressbar</a></h1>\n    <div class=\"bs-example\">\n      <h4>Static</h4>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar :now=\"20\" type=\"success\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar :now=\"40\" type=\"info\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar :now=\"60\" type=\"primary\"></progressbar>\n          </div>\n        </div>\n      </div>\n\n      <hr>\n\n      <h4>\n        Dynamic\n        <button type=\"button\" class=\"btn btn-default\" @click=\"dynamicClick\">Randomize</button>\n      </h4>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[0] * 2\" type=\"info\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[1] * 2\" type=\"warning\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[2] * 2\" type=\"danger\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[3] * 2\" type=\"success\" striped></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[4] * 2\" type=\"success\" striped animated></progressbar>\n      </div>\n\n      <hr>\n\n      <h4>\n        Stacked\n        <button type=\"button\" class=\"btn btn-default\" @click=\"stackedClick\">Randomize</button>\n      </h4>\n\n      <div class=\"progress\">\n        <progressbar :now=\"stackedData[0]\" label type=\"warning\" striped></progressbar>\n\n        <progressbar :now=\"stackedData[1]\" label type=\"success\" ></progressbar>\n\n        <progressbar :now=\"stackedData[2]\" label type=\"danger\"></progressbar>\n\n        <progressbar :now=\"stackedData[3]\" label type=\"primary\" striped animated></progressbar>\n      </div>\n\n    </div>\n    <pre><code class=\"language-markup\">&lt;!-- Stacked --&gt;\n&lt;div class=\"progress\"&gt;\n  &lt;progressbar :now=\"\" label type=\"warning\" striped&gt;&lt;/progressbar&gt;\n\n  &lt;progressbar :now=\"\" label type=\"success\" &gt;&lt;/progressbar&gt;\n\n  &lt;progressbar :now=\"\" label type=\"danger\"&gt;&lt;/progressbar&gt;\n\n  &lt;progressbar :now=\"\" label type=\"primary\" striped animated&gt;&lt;/progressbar&gt;\n&lt;/div&gt;\n&lt;!-- Single --&gt;\n&lt;div class=\"progress\"&gt;\n  &lt;progressbar :now=\"\" label type=\"warning\" striped&gt;&lt;/progressbar&gt;\n&lt;/div&gt;\n</code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>now</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td>The current value of progress completed.</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Style type. Possible values are 'success', 'warning' etc.</td>\n        </tr>\n        <tr>\n          <td>label</td>\n          <td><code>Boolean</code></td>\n          <td>false</td>\n          <td>Whether to show the label.</td>\n        </tr>\n        <tr>\n          <td>striped</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether the progressbar has striped effect or not.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 152 */
/*!*************************************!*\
  !*** ./docs/example/selectDocs.vue ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue */ 153)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./selectDocs.vue */ 154)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./selectDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./selectDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 153 */
/*!*********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/selectDocs.vue ***!
  \*********************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="select">
	//     <h1 class="page-header"><a href="#select" class="anchor">Select</a></h1>
	//     <p>
	//       This a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.
	//     </p>
	//     <div class="bs-example">
	//       <p>
	//         <pre>Select data : {{single}}</pre>
	//       </p>
	//       <bs-select v-model="single">
	//         <bs-option value="Apple">Apple</bs-option>
	//         <bs-option value="Banana">Banana</bs-option>
	//         <bs-option value="Cherry">Cherry</bs-option>
	//         <bs-option value="Orange">Orange</bs-option>
	//         <bs-option value="Grape">Grape</bs-option>
	//       </bs-select>
	//       <hr>
	//       <h4>Multiple select</h4>
	//       <p>
	//         <pre>Select data : {{multiple.join(', ')}}</pre>
	//       </p>
	//       <bs-select multiple v-model="multiple">
	//         <bs-option value="Apple">Apple</bs-option>
	//         <bs-option value="Banana">Banana</bs-option>
	//         <bs-option value="Cherry">Cherry</bs-option>
	//         <bs-option value="Orange">Orange</bs-option>
	//         <bs-option value="Grape">Grape</bs-option>
	//       </bs-select>
	//       <hr>
	//       <h4>Multiple select limit</h4>
	//       <p>
	//         <pre>Select data : {{multipleLimit.join(', ')}}</pre>
	//       </p>
	//       <bs-select multiple :limit="2" v-model="multipleLimit">
	//         <bs-option value="Apple">Apple</bs-option>
	//         <bs-option value="Banana">Banana</bs-option>
	//         <bs-option value="Cherry">Cherry</bs-option>
	//         <bs-option value="Orange">Orange</bs-option>
	//         <bs-option value="Grape">Grape</bs-option>
	//       </bs-select>
	//       <hr>
	//       <h4>Custom template</h4>
	//       <p>
	//         <pre>Select data : {{custom.join(', ')}}</pre>
	//       </p>
	//       <bs-select multiple v-model="custom">
	//         <bs-option value="Star"><span slot="span" class="glyphicon glyphicon-star"></span> Star</bs-option>
	//         <bs-option value="Heart"><span slot="span" class="glyphicon glyphicon-heart"></span> Heart</bs-option>
	//         <bs-option value="Film"><span slot="span" class="glyphicon glyphicon-film"></span> Film</bs-option>
	//         <bs-option value="Inbox"><span slot="span" class="glyphicon glyphicon-inbox"></span> Inbox</bs-option>
	//       </bs-select>
	//       <hr />
	//       <h4>Array/Collection driven w/ search</h4>
	//       <p>
	//         Optionally specify an options (array/collection) which will drive the contents of the property. You can enable search mode in this case.
	//         <pre>Select data : {{arr}}</pre>
	//       </p>
	//       <bs-select v-model="arr" :options="fruitOptions" :search="true" :close-on-select="true">
	//       </bs-select>
	
	//       <hr />
	//       <h4>Automatically close array driven selects</h4>
	//       <p>Using the property :close-on-select="true" array driven selects will auto-close after selecting an entry.</p>
	//       <bs-select v-model="arr2" :options="fruitOptions" :close-on-select="true">
	//       </bs-select>
	
	//       <h4>Disabled selects</h4>
	//       <bs-select v-model="disabled" :options="fruitOptions" :close-on-select="true" :disabled="true">
	//       </bs-select>
	
	//     </div>
	//     <pre><code class="language-markup">&lt;bs-select&gt;
	//   &lt;bs-option value="Apple"&gt;Apple&lt;/bs-option&gt;
	//   &lt;bs-option value="Banana"&gt;Banana&lt;/bs-option&gt;
	//   &lt;bs-option value="Cherry"&gt;Cherry&lt;/bs-option&gt;
	//   &lt;bs-option value="Orange"&gt;Orange&lt;/bs-option&gt;
	//   &lt;bs-option value="Grape"&gt;Grape&lt;/bs-option&gt;
	// &lt;/bs-select&gt;
	// &lt;hr&gt;
	// &lt;bs-select multiple&gt;
	//   &lt;bs-option value="Apple"&gt;Apple&lt;/bs-option&gt;
	//   &lt;bs-option value="Banana"&gt;Banana&lt;/bs-option&gt;
	//   &lt;bs-option value="Cherry"&gt;Cherry&lt;/bs-option&gt;
	//   &lt;bs-option value="Orange"&gt;Orange&lt;/bs-option&gt;
	//   &lt;bs-option value="Grape"&gt;Grape&lt;/bs-option&gt;
	// &lt;/bs-select&gt;
	// &lt;hr&gt;
	//  &lt;bs-select multiple :limit="2"&gt;
	//   &lt;bs-option value="Apple"&gt;Apple&lt;/bs-option&gt;
	//   &lt;bs-option value="Banana"&gt;Banana&lt;/bs-option&gt;
	//   &lt;bs-option value="Cherry"&gt;Cherry&lt;/bs-option&gt;
	//   &lt;bs-option value="Orange"&gt;Orange&lt;/bs-option&gt;
	//   &lt;bs-option value="Grape"&gt;Grape&lt;/bs-option&gt;
	// &lt;/bs-select&gt;
	// &lt;hr&gt;
	// &lt;bs-select multiple&gt;
	//   &lt;bs-option value="Star"&gt;&lt;span slot="span" class="glyphicon glyphicon-star"&gt;&lt;/span&gt; Star&lt;/bs-option&gt;
	//   &lt;bs-option value="Heart"&gt;&lt;span slot="span" class="glyphicon glyphicon-heart"&gt;&lt;/span&gt; Heart&lt;/bs-option&gt;
	//   &lt;bs-option value="Film"&gt;&lt;span slot="span" class="glyphicon glyphicon-film"&gt;&lt;/span&gt; Film&lt;/bs-option&gt;
	//   &lt;bs-option value="Inbox"&gt;&lt;span slot="span" class="glyphicon glyphicon-inbox"&gt;&lt;/span&gt; Inbox&lt;/bs-option&gt;
	// &lt;/bs-select&gt;
	
	// &lt;bs-select v-model="arr" :options="fruitOptions" :search="true"&gt;
	// &lt;/bs-select&gt;
	// fruitOptions = [
	//   {value:'apple', label:'Apple'},
	//   {value:'banana', label:'Banana'},
	//   {value:'cherry', label:'Cherry'},
	//   {value:'orange', label:'Orange'},
	//   {value:'grape', label:'Grape'},
	// ]
	
	// &lt;bs-select v-model="arr2" :options="fruitOptions" :close-on-select="true"&gt;
	// &lt;/bs-select&gt;
	// </code></pre>
	//     <h2>Select Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>value</td>
	//           <td><code>Array</code></td>
	//           <td><code>[]</code></td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>placeholder</td>
	//           <td><code>String</code></td>
	//           <td>Nothing Selected</td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>multiple</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>limit</td>
	//           <td><code>Number</code></td>
	//           <td><code>1024</code></td>
	//           <td>Limit the number of elements you are allowed to select.</td>
	//         </tr>
	//         <tr>
	//           <td>disabled</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td></td>
	//         </tr>
	//       </tbody>
	//     </table>
	
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
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
	};
	// </script>

/***/ },
/* 154 */
/*!**************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/selectDocs.vue ***!
  \**************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"select\">\n    <h1 class=\"page-header\"><a href=\"#select\" class=\"anchor\">Select</a></h1>\n    <p>\n      This a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.\n    </p>\n    <div class=\"bs-example\">\n      <p>\n        <pre>Select data : {{single}}</pre>\n      </p>\n      <bs-select v-model=\"single\">\n        <bs-option value=\"Apple\">Apple</bs-option>\n        <bs-option value=\"Banana\">Banana</bs-option>\n        <bs-option value=\"Cherry\">Cherry</bs-option>\n        <bs-option value=\"Orange\">Orange</bs-option>\n        <bs-option value=\"Grape\">Grape</bs-option>\n      </bs-select>\n      <hr>\n      <h4>Multiple select</h4>\n      <p>\n        <pre>Select data : {{multiple.join(', ')}}</pre>\n      </p>\n      <bs-select multiple v-model=\"multiple\">\n        <bs-option value=\"Apple\">Apple</bs-option>\n        <bs-option value=\"Banana\">Banana</bs-option>\n        <bs-option value=\"Cherry\">Cherry</bs-option>\n        <bs-option value=\"Orange\">Orange</bs-option>\n        <bs-option value=\"Grape\">Grape</bs-option>\n      </bs-select>\n      <hr>\n      <h4>Multiple select limit</h4>\n      <p>\n        <pre>Select data : {{multipleLimit.join(', ')}}</pre>\n      </p>\n      <bs-select multiple :limit=\"2\" v-model=\"multipleLimit\">\n        <bs-option value=\"Apple\">Apple</bs-option>\n        <bs-option value=\"Banana\">Banana</bs-option>\n        <bs-option value=\"Cherry\">Cherry</bs-option>\n        <bs-option value=\"Orange\">Orange</bs-option>\n        <bs-option value=\"Grape\">Grape</bs-option>\n      </bs-select>\n      <hr>\n      <h4>Custom template</h4>\n      <p>\n        <pre>Select data : {{custom.join(', ')}}</pre>\n      </p>\n      <bs-select multiple v-model=\"custom\">\n        <bs-option value=\"Star\"><span slot=\"span\" class=\"glyphicon glyphicon-star\"></span> Star</bs-option>\n        <bs-option value=\"Heart\"><span slot=\"span\" class=\"glyphicon glyphicon-heart\"></span> Heart</bs-option>\n        <bs-option value=\"Film\"><span slot=\"span\" class=\"glyphicon glyphicon-film\"></span> Film</bs-option>\n        <bs-option value=\"Inbox\"><span slot=\"span\" class=\"glyphicon glyphicon-inbox\"></span> Inbox</bs-option>\n      </bs-select>\n      <hr />\n      <h4>Array/Collection driven w/ search</h4>\n      <p>\n        Optionally specify an options (array/collection) which will drive the contents of the property. You can enable search mode in this case.\n        <pre>Select data : {{arr}}</pre>\n      </p>\n      <bs-select v-model=\"arr\" :options=\"fruitOptions\" :search=\"true\" :close-on-select=\"true\">\n      </bs-select>\n\n      <hr />\n      <h4>Automatically close array driven selects</h4>\n      <p>Using the property :close-on-select=\"true\" array driven selects will auto-close after selecting an entry.</p>\n      <bs-select v-model=\"arr2\" :options=\"fruitOptions\" :close-on-select=\"true\">\n      </bs-select>\n\n      <h4>Disabled selects</h4>\n      <bs-select v-model=\"disabled\" :options=\"fruitOptions\" :close-on-select=\"true\" :disabled=\"true\">\n      </bs-select>\n\n    </div>\n    <pre><code class=\"language-markup\">&lt;bs-select&gt;\n  &lt;bs-option value=\"Apple\"&gt;Apple&lt;/bs-option&gt;\n  &lt;bs-option value=\"Banana\"&gt;Banana&lt;/bs-option&gt;\n  &lt;bs-option value=\"Cherry\"&gt;Cherry&lt;/bs-option&gt;\n  &lt;bs-option value=\"Orange\"&gt;Orange&lt;/bs-option&gt;\n  &lt;bs-option value=\"Grape\"&gt;Grape&lt;/bs-option&gt;\n&lt;/bs-select&gt;\n&lt;hr&gt;\n&lt;bs-select multiple&gt;\n  &lt;bs-option value=\"Apple\"&gt;Apple&lt;/bs-option&gt;\n  &lt;bs-option value=\"Banana\"&gt;Banana&lt;/bs-option&gt;\n  &lt;bs-option value=\"Cherry\"&gt;Cherry&lt;/bs-option&gt;\n  &lt;bs-option value=\"Orange\"&gt;Orange&lt;/bs-option&gt;\n  &lt;bs-option value=\"Grape\"&gt;Grape&lt;/bs-option&gt;\n&lt;/bs-select&gt;\n&lt;hr&gt;\n &lt;bs-select multiple :limit=\"2\"&gt;\n  &lt;bs-option value=\"Apple\"&gt;Apple&lt;/bs-option&gt;\n  &lt;bs-option value=\"Banana\"&gt;Banana&lt;/bs-option&gt;\n  &lt;bs-option value=\"Cherry\"&gt;Cherry&lt;/bs-option&gt;\n  &lt;bs-option value=\"Orange\"&gt;Orange&lt;/bs-option&gt;\n  &lt;bs-option value=\"Grape\"&gt;Grape&lt;/bs-option&gt;\n&lt;/bs-select&gt;\n&lt;hr&gt;\n&lt;bs-select multiple&gt;\n  &lt;bs-option value=\"Star\"&gt;&lt;span slot=\"span\" class=\"glyphicon glyphicon-star\"&gt;&lt;/span&gt; Star&lt;/bs-option&gt;\n  &lt;bs-option value=\"Heart\"&gt;&lt;span slot=\"span\" class=\"glyphicon glyphicon-heart\"&gt;&lt;/span&gt; Heart&lt;/bs-option&gt;\n  &lt;bs-option value=\"Film\"&gt;&lt;span slot=\"span\" class=\"glyphicon glyphicon-film\"&gt;&lt;/span&gt; Film&lt;/bs-option&gt;\n  &lt;bs-option value=\"Inbox\"&gt;&lt;span slot=\"span\" class=\"glyphicon glyphicon-inbox\"&gt;&lt;/span&gt; Inbox&lt;/bs-option&gt;\n&lt;/bs-select&gt;\n\n&lt;bs-select v-model=\"arr\" :options=\"fruitOptions\" :search=\"true\"&gt;\n&lt;/bs-select&gt;\nfruitOptions = [\n  {value:'apple', label:'Apple'},\n  {value:'banana', label:'Banana'},\n  {value:'cherry', label:'Cherry'},\n  {value:'orange', label:'Orange'},\n  {value:'grape', label:'Grape'},\n]\n\n&lt;bs-select v-model=\"arr2\" :options=\"fruitOptions\" :close-on-select=\"true\"&gt;\n&lt;/bs-select&gt;\n</code></pre>\n    <h2>Select Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>Array</code></td>\n          <td><code>[]</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td>Nothing Selected</td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>1024</code></td>\n          <td>Limit the number of elements you are allowed to select.</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>";

/***/ },
/* 155 */
/*!***********************************!*\
  !*** ./docs/example/tabsDocs.vue ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../../~/vue-loader/lib/style-rewriter.js?id=_v-6470875c&file=tabsDocs.vue&scoped=true!./../../~/vue-loader/lib/selector.js?type=style&index=0!./tabsDocs.vue */ 156)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/template-rewriter.js?id=_v-6470875c&file=tabsDocs.vue!./../../~/vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue */ 158)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-6470875c&file=tabsDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-6470875c&file=tabsDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-6470875c&file=tabsDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 156 */
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-6470875c&file=tabsDocs.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/example/tabsDocs.vue ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/vue-loader/lib/style-rewriter.js?id=_v-6470875c&file=tabsDocs.vue&scoped=true!./../../~/vue-loader/lib/selector.js?type=style&index=0!./tabsDocs.vue */ 157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6470875c&file=tabsDocs.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabsDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6470875c&file=tabsDocs.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabsDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 157 */
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-6470875c&file=tabsDocs.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/example/tabsDocs.vue ***!
  \**************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".animated[_v-6470875c] {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite\n}\n@-webkit-keyframes shake {\n    0%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateY(-5px);transform: translateY(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateY(5px);transform: translateY(5px);}\n}\n@keyframes shake {\n    0%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateY(-5px);transform: translateY(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateY(5px);transform: translateY(5px);}\n}\n.shake[_v-6470875c] {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}", ""]);
	
	// exports


/***/ },
/* 158 */
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/template-rewriter.js?id=_v-6470875c&file=tabsDocs.vue!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/tabsDocs.vue ***!
  \*************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tabs\" _v-6470875c=\"\">\n    <h1 class=\"page-header\" _v-6470875c=\"\"><a href=\"#tabs\" class=\"anchor\" _v-6470875c=\"\">Tabs</a></h1>\n\n    <tabs _v-6470875c=\"\">\n      <tab header=\"Example\" icon=\"play-circle\" _v-6470875c=\"\">\n        <span class=\"glyphicon glyphicon-hand-up animated shake\" _v-6470875c=\"\"></span>\n        This documentation uses tabs for its layout.\n      </tab>\n\n      <tab header=\"Markup\" icon=\"pencil\" _v-6470875c=\"\">\n        <pre _v-6470875c=\"\"><code class=\"language-markup\" _v-6470875c=\"\">&lt;tabs&gt;\n  &lt;tab header=\"one\" icon=\"pencil\"&gt;\n    ...\n  &lt;/tab&gt;\n  &lt;tab header=\"two\"&gt;\n    ...\n  &lt;/tab&gt;\n  &lt;tab header=\"three\" disabled&gt;\n    ...\n  &lt;/tab&gt;\n&lt;/tabs&gt;\n</code></pre>\n      </tab>\n\n      <tab header=\"Tabs options (container)\" icon=\"th-list\" _v-6470875c=\"\">\n        <table class=\"table table-bordered\" _v-6470875c=\"\">\n          <thead _v-6470875c=\"\">\n            <tr _v-6470875c=\"\">\n              <th _v-6470875c=\"\">Name</th>\n              <th _v-6470875c=\"\">Type</th>\n              <th _v-6470875c=\"\">Default</th>\n              <th _v-6470875c=\"\">Description</th>\n            </tr>\n          </thead>\n          <tbody _v-6470875c=\"\">\n            <tr _v-6470875c=\"\">\n              <td _v-6470875c=\"\">active</td>\n              <td _v-6470875c=\"\"><code _v-6470875c=\"\">Number</code></td>\n              <td _v-6470875c=\"\"><code _v-6470875c=\"\">0</code></td>\n              <td _v-6470875c=\"\">Active tab index (0 based)</td>\n            </tr>\n            <tr _v-6470875c=\"\">\n              <td _v-6470875c=\"\">navStyle</td>\n              <td _v-6470875c=\"\"><code _v-6470875c=\"\">String</code></td>\n              <td _v-6470875c=\"\">tabs</td>\n              <td _v-6470875c=\"\"></td>\n            </tr>\n            <tr _v-6470875c=\"\">\n              <td _v-6470875c=\"\">effect</td>\n              <td _v-6470875c=\"\"><code _v-6470875c=\"\">String</code></td>\n              <td _v-6470875c=\"\">fadein</td>\n              <td _v-6470875c=\"\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </tab>\n\n      <tab header=\"Tab options (child)\" icon=\"th-list\" _v-6470875c=\"\">\n        <table class=\"table table-bordered\" _v-6470875c=\"\">\n          <thead _v-6470875c=\"\">\n            <tr _v-6470875c=\"\">\n              <th _v-6470875c=\"\">Name</th>\n              <th _v-6470875c=\"\">Type</th>\n              <th _v-6470875c=\"\">Default</th>\n              <th _v-6470875c=\"\">Description</th>\n            </tr>\n          </thead>\n          <tbody _v-6470875c=\"\">\n            <tr _v-6470875c=\"\">\n              <td _v-6470875c=\"\">header</td>\n              <td _v-6470875c=\"\"><code _v-6470875c=\"\">String</code></td>\n              <td _v-6470875c=\"\"></td>\n              <td _v-6470875c=\"\">Heading text of the tab.</td>\n            </tr>\n            <tr _v-6470875c=\"\">\n              <td _v-6470875c=\"\">icon</td>\n              <td _v-6470875c=\"\"><code _v-6470875c=\"\">String</code></td>\n              <td _v-6470875c=\"\"></td>\n              <td _v-6470875c=\"\">Icon displayed in the tab heading.</td>\n            </tr>\n            <tr _v-6470875c=\"\">\n              <td _v-6470875c=\"\">disabled</td>\n              <td _v-6470875c=\"\"><code _v-6470875c=\"\">Boolean</code></td>\n              <td _v-6470875c=\"\"><code _v-6470875c=\"\">false</code></td>\n              <td _v-6470875c=\"\">Whether tab is clickable and can be activated.</td>\n            </tr>\n          </tbody>\n        </table>\n      </tab>\n    </tabs>\n  </div>";

/***/ },
/* 159 */
/*!**************************************!*\
  !*** ./docs/example/tooltipDocs.vue ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue */ 160)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./tooltipDocs.vue */ 161)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tooltipDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tooltipDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 160 */
/*!**********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/tooltipDocs.vue ***!
  \**********************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="tooltip">
	//     <h1 class="page-header"><a href="#tooltip" class="anchor">Tooltip</a></h1>
	//     <div class="bs-example">
	//       <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="top">
	//         <button class="btn btn-default ">tooltip on top</button>
	//       </tooltip>
	//       <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="left">
	//         <button class="btn btn-default ">tooltip on left</button>
	//       </tooltip>
	//       <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="right">
	//         <button class="btn btn-default ">tooltip on right</button>
	//       </tooltip>
	//       <tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//         <button class="btn btn-default ">tooltip on bottom</button>
	//       </tooltip>
	//       <hr>
	//       <h4>Triger</h4>
	//       <p>
	//         <tooltip trigger="click"
	//         effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="hover">
	//             <button class="btn btn-default ">Click</button>
	//         </tooltip>
	//       </p>
	//       <tooltip effect="scale"
	//     content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
	//         <input type="text" class="form-control" placeholder="Focus">
	//       </tooltip>
	//     </div>
	//     <pre><code class="language-markup">&lt;tooltip
	//   effect="scale"
	//   placement="bottom"
	//   content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod"&gt;
	//   &lt;button class="btn btn-default "&gt;tooltip on bottom&lt;/button&gt;
	// &lt;/tooltip&gt;
	// </code></pre>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>trigger</td>
	//         <td><code>String</code>, one of <code>hover</code>
	//         <code>focus</code>
	//         <code>hover</code></td>
	//         <td><code>click</code></td>
	//         <td>How the tooltip is triggered.</td>
	//       </tr>
	//       <tr>
	//         <td>effect</td>
	//         <td><code>String</code>, one of <code>scale</code> <code>fadein</code></td>
	//         <td><code>scale</code></td>
	//         <td></td>
	//       <tr>
	//         <td>content</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td></td>
	//       </tr>
	//       <tr>
	//         <td>placement</td>
	//         <td><code>String</code>, one of <code>top</code>
	//         <code>left</code>
	//         <code>right</code>
	//         <code>bottom</code></td>
	//         <td></td>
	//         <td>How to position the tooltip.</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  }
	};
	// </script>

/***/ },
/* 161 */
/*!***************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/tooltipDocs.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tooltip\">\n    <h1 class=\"page-header\"><a href=\"#tooltip\" class=\"anchor\">Tooltip</a></h1>\n    <div class=\"bs-example\">\n      <tooltip  :header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">tooltip on top</button>\n      </tooltip>\n      <tooltip  :header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">tooltip on left</button>\n      </tooltip>\n      <tooltip  :header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">tooltip on right</button>\n      </tooltip>\n      <tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">tooltip on bottom</button>\n      </tooltip>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <tooltip trigger=\"click\"\n        effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Click</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\"\n    content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </tooltip>\n    </div>\n    <pre><code class=\"language-markup\">&lt;tooltip\n  effect=\"scale\"\n  placement=\"bottom\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\"&gt;\n  &lt;button class=\"btn btn-default \"&gt;tooltip on bottom&lt;/button&gt;\n&lt;/tooltip&gt;\n</code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>hover</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the tooltip is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fadein</code></td>\n        <td><code>scale</code></td>\n        <td></td>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the tooltip.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 162 */
/*!**************************************!*\
  !*** ./docs/example/spinnerDocs.vue ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../../~/vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue */ 163)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./spinnerDocs.vue */ 164)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./spinnerDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./spinnerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 163 */
/*!**********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/example/spinnerDocs.vue ***!
  \**********************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" id="spnner">
	//     <h1 class="page-header"><a href="#spnner" class="anchor">Spinner</a></h1>
	//     <div class="bs-example">
	
	//       <!-- Html controls start-->
	//       <div >
	//         <label>fixed <input type="checkbox" v-model="fixed"></label>
	//         <label>size
	//           <select v-model="size">
	//             <option v-for="option in sizes" v-bind:value="option.value">
	//               {{ option.text }}
	//             </option>
	//           </select>
	//         </label>
	//       </div>
	//       <!-- Html controls end-->
	
	//       <!-- Html markup start-->
	//       <div >
	//         <button @click="showSpinner()">show spinner</button>
	//         <spinner ref="spinner" id="spinner-box" :size="size" :fixed="fixed" text="I will close in 2 secs"></spinner>
	//       </div>
	//       <!-- Html markup end-->
	
	//     </div>
	
	//     <pre><code class="language-markup">&lt;spinner ref="spinner" :size="(sm,md,lg...)" :fixed="(true,false)"
	//   text="I will close in 2 secs"&gt;&lt;/spinner&gt;
	// </code></pre>
	
	//   <p>To close the spinner, use the following code:</p>
	//   <pre><code class="language-javascript">this.$refs.spinner.hide()</code></pre>
	//   <h2>Spinner Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>size</td>
	//         <td><code>Text</code></td>
	//         <td>md</td>
	//         <td>The size of the spinner (either [sm, md, lg]).</td>
	//       </tr>
	//       <tr>
	//         <td>fixed</td>
	//         <td><code>Boolean</code></td>
	//         <td>false</td>
	//         <td>Set to true if you want the spinner to occupy the entire window space.</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	
	// <script>
	var sizes = [{
	  text: 'sm',
	  value: 'sm'
	}, {
	  text: 'md',
	  value: 'md'
	}, {
	  text: 'lg',
	  value: 'lg'
	}];
	
	exports.default = {
	  data: function data() {
	    return {
	      fixed: false,
	      size: 'lg',
	      sizes: sizes.concat({ text: 'xl', value: 'xl' })
	    };
	  },
	
	  methods: {
	    showSpinner: function showSpinner() {
	      var _this = this;
	
	      this.$refs.spinner.show();
	      setTimeout(function () {
	        _this.$refs.spinner.hide();
	      }, 2000);
	    }
	  }
	};
	// </script>

/***/ },
/* 164 */
/*!***************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/example/spinnerDocs.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"spnner\">\n    <h1 class=\"page-header\"><a href=\"#spnner\" class=\"anchor\">Spinner</a></h1>\n    <div class=\"bs-example\">\n\n      <!-- Html controls start-->\n      <div >\n        <label>fixed <input type=\"checkbox\" v-model=\"fixed\"></label>\n        <label>size\n          <select v-model=\"size\">\n            <option v-for=\"option in sizes\" v-bind:value=\"option.value\">\n              {{ option.text }}\n            </option>\n          </select>\n        </label>\n      </div>\n      <!-- Html controls end-->\n\n      <!-- Html markup start-->\n      <div >\n        <button @click=\"showSpinner()\">show spinner</button>\n        <spinner ref=\"spinner\" id=\"spinner-box\" :size=\"size\" :fixed=\"fixed\" text=\"I will close in 2 secs\"></spinner>\n      </div>\n      <!-- Html markup end-->\n\n    </div>\n\n    <pre><code class=\"language-markup\">&lt;spinner ref=\"spinner\" :size=\"(sm,md,lg...)\" :fixed=\"(true,false)\"\n  text=\"I will close in 2 secs\"&gt;&lt;/spinner&gt;\n</code></pre>\n\n  <p>To close the spinner, use the following code:</p>\n  <pre><code class=\"language-javascript\">this.$refs.spinner.hide()</code></pre>\n  <h2>Spinner Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>size</td>\n        <td><code>Text</code></td>\n        <td>md</td>\n        <td>The size of the spinner (either [sm, md, lg]).</td>\n      </tr>\n      <tr>\n        <td>fixed</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>Set to true if you want the spinner to occupy the entire window space.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Alert = __webpack_require__(/*! ./Alert.vue */ 169);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Carousel = __webpack_require__(/*! ./Carousel.vue */ 174);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slider = __webpack_require__(/*! ./Slider.vue */ 179);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Accordion = __webpack_require__(/*! ./Accordion.vue */ 182);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Affix = __webpack_require__(/*! ./Affix.vue */ 185);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Aside = __webpack_require__(/*! ./Aside.vue */ 190);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	var _CheckboxGroup = __webpack_require__(/*! ./CheckboxGroup.vue */ 196);
	
	var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);
	
	var _Checkbox = __webpack_require__(/*! ./Checkbox.vue */ 199);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Datepicker = __webpack_require__(/*! ./Datepicker.vue */ 204);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Dropdown = __webpack_require__(/*! ./Dropdown.vue */ 209);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _DropdownLi = __webpack_require__(/*! ./DropdownLi.vue */ 212);
	
	var _DropdownLi2 = _interopRequireDefault(_DropdownLi);
	
	var _Modal = __webpack_require__(/*! ./Modal.vue */ 215);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Option = __webpack_require__(/*! ./Option.vue */ 224);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _Panel = __webpack_require__(/*! ./Panel.vue */ 229);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _Popover = __webpack_require__(/*! ./Popover.vue */ 234);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Progressbar = __webpack_require__(/*! ./Progressbar.vue */ 239);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	var _Radio = __webpack_require__(/*! ./Radio.vue */ 242);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var _RadioGroup = __webpack_require__(/*! ./RadioGroup.vue */ 247);
	
	var _RadioGroup2 = _interopRequireDefault(_RadioGroup);
	
	var _Select = __webpack_require__(/*! ./Select.vue */ 250);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Tab = __webpack_require__(/*! ./Tab.vue */ 255);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(/*! ./Tabs.vue */ 260);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Tooltip = __webpack_require__(/*! ./Tooltip.vue */ 265);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Typeahead = __webpack_require__(/*! ./Typeahead.vue */ 270);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Navbar = __webpack_require__(/*! ./Navbar.vue */ 276);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Spinner = __webpack_require__(/*! ./Spinner.vue */ 279);
	
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

/***/ },
/* 169 */
/*!***********************!*\
  !*** ./src/Alert.vue ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-2b032cfb&file=Alert.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue */ 170)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue */ 172)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue */ 173)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 170 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-2b032cfb&file=Alert.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Alert.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-2b032cfb&file=Alert.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue */ 171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2b032cfb&file=Alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2b032cfb&file=Alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 171 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-2b032cfb&file=Alert.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Alert.vue ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".fade-enter-active, .fade-leave-active {\n    -webkit-transition: opacity .2s ease;\n    transition: opacity .2s ease;\n  }\n  .fade-enter, .fade-leave-active {\n    opacity: 0;\n  }\n\n  .alert.top {\n    position: fixed;\n    top: 30px;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n\n  .alert.top-right {\n    position: fixed;\n    top: 30px;\n    right: 50px;\n    z-index: 2;\n  }", ""]);
	
	// exports


/***/ },
/* 172 */
/*!*******************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Alert.vue ***!
  \*******************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <transition name="fade">
	//     <div v-show="show" :class="{
	//       'alert':         true,
	//       'alert-success': type == 'success',
	//       'alert-warning': type == 'warning',
	//       'alert-info':    type == 'info',
	//       'alert-danger':  type == 'danger',
	//       'top':           placement === 'top',
	//       'top-right':     placement === 'top-right',
	//     }" :style="{width: width}" role="alert">
	//       <button v-show="dismissable" type="button" class="close" @click="close">
	//         <span>&times;</span>
	//       </button>
	//       <slot></slot>
	//     </div>
	//   </transition>
	// </template>
	
	// <script>
	exports.default = {
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
	    show: function show(value) {
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
	    open: function open() {
	      this.show = true;
	    },
	    close: function close() {
	      this.show = false;
	    },
	    clearTimeout: function (_clearTimeout) {
	      function clearTimeout() {
	        return _clearTimeout.apply(this, arguments);
	      }
	
	      clearTimeout.toString = function () {
	        return _clearTimeout.toString();
	      };
	
	      return clearTimeout;
	    }(function () {
	      if (this._timeout) {
	        clearTimeout(this._timeout);
	      }
	    })
	  }
	};
	// </script>
	
	// <style>
	//   .fade-enter-active, .fade-leave-active {
	//     transition: opacity .2s ease;
	//   }
	//   .fade-enter, .fade-leave-active {
	//     opacity: 0;
	//   }
	
	//   .alert.top {
	//     position: fixed;
	//     top: 30px;
	//     margin: 0 auto;
	//     left: 0;
	//     right: 0;
	//     z-index: 2;
	//   }
	
	//   .alert.top-right {
	//     position: fixed;
	//     top: 30px;
	//     right: 50px;
	//     z-index: 2;
	//   }
	// </style>

/***/ },
/* 173 */
/*!************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Alert.vue ***!
  \************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<transition name=\"fade\">\n    <div v-show=\"show\" :class=\"{\n      'alert':         true,\n      'alert-success': type == 'success',\n      'alert-warning': type == 'warning',\n      'alert-info':    type == 'info',\n      'alert-danger':  type == 'danger',\n      'top':           placement === 'top',\n      'top-right':     placement === 'top-right',\n    }\" :style=\"{width: width}\" role=\"alert\">\n      <button v-show=\"dismissable\" type=\"button\" class=\"close\" @click=\"close\">\n        <span>&times;</span>\n      </button>\n      <slot></slot>\n    </div>\n  </transition>";

/***/ },
/* 174 */
/*!**************************!*\
  !*** ./src/Carousel.vue ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-47633391&file=Carousel.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue */ 175)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue */ 177)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/template-rewriter.js?id=_v-47633391&file=Carousel.vue!./../~/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue */ 178)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-47633391&file=Carousel.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-47633391&file=Carousel.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 175 */
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-47633391&file=Carousel.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Carousel.vue ***!
  \**********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-47633391&file=Carousel.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue */ 176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-47633391&file=Carousel.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-47633391&file=Carousel.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 176 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-47633391&file=Carousel.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Carousel.vue ***!
  \*****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".carousel-control[_v-47633391] {\n    cursor: pointer;\n  }", ""]);
	
	// exports


/***/ },
/* 177 */
/*!**********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Carousel.vue ***!
  \**********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 102);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="carousel slide" data-ride="carousel">
	//     <!-- Indicators -->
	//     <ol class="carousel-indicators" v-show="indicators">
	//       <indicator :indicator="indicator" :active-index="activeIndex" @change="activeIndex = arguments[0]" :is-animating="isAnimating" @animating-change="isAnimating = arguments[0]"></indicator>
	//     </ol>
	//     <!-- Wrapper for slides -->
	//     <div class="carousel-inner" role="listbox">
	//       <slot></slot>
	//     </div>
	//     <!-- Controls -->
	//     <div v-show="controls" class="carousel-controls hidden-xs">
	//       <a class="left carousel-control" role="button" @click="prevClick">
	//         <span class="fa fa-arrow-left" aria-hidden="true"></span>
	//       </a>
	//       <a class="right carousel-control" role="button" @click="nextClick">
	//         <span class="fa fa-arrow-right" aria-hidden="true"></span>
	//       </a>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
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
	        onClick: function onClick(index) {
	          if (this.isAnimating || this.activeIndex === index) {
	            return false;
	          }
	          this.isAnimating = true;
	          this.activeIndex = index;
	        }
	      },
	      watch: {
	        isAnimating: function isAnimating() {
	          this.$emit('animating-change', this.isAnimating);
	        },
	        activeIndex: function activeIndex() {
	          this.$emit('change', this.activeIndex);
	        }
	      }
	    }
	  },
	  data: function data() {
	    return {
	      indicator: [],
	      activeIndex: 0,
	      isAnimating: false
	    };
	  },
	
	  computed: {
	    slider: function slider() {
	      return this.$el.querySelectorAll('.item');
	    }
	  },
	  watch: {
	    activeIndex: function activeIndex(newVal, oldVal) {
	      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);
	    }
	  },
	  methods: {
	    transitionend: function transitionend() {
	      [].concat((0, _toConsumableArray3.default)(this.slider)).forEach(function (el) {
	        return el.className = 'item';
	      });
	      selectedEl.classList.add('active');
	      this.isAnimating = false;
	    },
	    slide: function slide(direction, selected, prev) {
	      var prevSelectedEl = this.slider[prev];
	      var selectedEl = this.slider[selected];
	
	      selectedEl.classList.add(direction === 'left' ? 'next' : 'prev');
	      // request property that requires layout to force a layout
	      var x = selectedEl.clientHeight;
	      prevSelectedEl.addEventListener('transitionend', this.transitionend);
	      prevSelectedEl.addEventListener('transitionend', this.transitionend);
	      prevSelectedEl.classList.add(direction);
	      selectedEl.classList.add(direction);
	    },
	    nextClick: function nextClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex = this.activeIndex + 1 < this.slider.length ? this.activeIndex + 1 : 0;
	    },
	    prevClick: function prevClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex = this.activeIndex === 0 ? this.slider.length - 1 : this.activeIndex - 1;
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    var intervalID = null;
	    var el = this.$el;
	
	    function intervalManager(flag, func, time) {
	      flag ? intervalID = setInterval(func, time) : clearInterval(intervalID);
	    }
	    if (this.interval) {
	      intervalManager(true, this.nextClick, this.interval);
	      el.addEventListener('mouseenter', function () {
	        return intervalManager(false);
	      });
	      el.addEventListener('mouseleave', function () {
	        return intervalManager(true, _this.nextClick, _this.interval);
	      });
	    }
	  }
	};
	// </script>
	
	// <style scoped>
	//   .carousel-control {
	//     cursor: pointer;
	//   }
	// </style>

/***/ },
/* 178 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/template-rewriter.js?id=_v-47633391&file=Carousel.vue!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Carousel.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" _v-47633391=\"\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-47633391=\"\">\n      <indicator :indicator=\"indicator\" :active-index=\"activeIndex\" @change=\"activeIndex = arguments[0]\" :is-animating=\"isAnimating\" @animating-change=\"isAnimating = arguments[0]\" _v-47633391=\"\"></indicator>\n    </ol>\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\" _v-47633391=\"\">\n      <slot _v-47633391=\"\"></slot>\n    </div>\n    <!-- Controls -->\n    <div v-show=\"controls\" class=\"carousel-controls hidden-xs\" _v-47633391=\"\">\n      <a class=\"left carousel-control\" role=\"button\" @click=\"prevClick\" _v-47633391=\"\">\n        <span class=\"fa fa-arrow-left\" aria-hidden=\"true\" _v-47633391=\"\"></span>\n      </a>\n      <a class=\"right carousel-control\" role=\"button\" @click=\"nextClick\" _v-47633391=\"\">\n        <span class=\"fa fa-arrow-right\" aria-hidden=\"true\" _v-47633391=\"\"></span>\n      </a>\n    </div>\n  </div>";

/***/ },
/* 179 */
/*!************************!*\
  !*** ./src/Slider.vue ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue */ 180)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue */ 181)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 180 */
/*!********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Slider.vue ***!
  \********************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="item">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.activeIndex === this.index;
	    }
	  },
	  mounted: function mounted() {
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
	};
	// </script>

/***/ },
/* 181 */
/*!*************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Slider.vue ***!
  \*************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"item\">\n    <slot></slot>\n  </div>";

/***/ },
/* 182 */
/*!***************************!*\
  !*** ./src/Accordion.vue ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue */ 183)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue */ 184)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 183 */
/*!***********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Accordion.vue ***!
  \***********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 80);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="panel-group">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    oneAtATime: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    setActivePanel: function setActivePanel(panel) {
	      if (!this.oneAtATime) {
	        return;
	      }
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.$children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;
	
	          if (panel !== item) {
	            item.isOpen = false;
	          }
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
	    }
	  }
	};
	// </script>

/***/ },
/* 184 */
/*!****************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Accordion.vue ***!
  \****************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\n    <slot></slot>\n  </div>";

/***/ },
/* 185 */
/*!***********************!*\
  !*** ./src/Affix.vue ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-3d01c922&file=Affix.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue */ 186)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue */ 188)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue */ 189)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 186 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-3d01c922&file=Affix.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Affix.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-3d01c922&file=Affix.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue */ 187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3d01c922&file=Affix.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3d01c922&file=Affix.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 187 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-3d01c922&file=Affix.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Affix.vue ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".vue-affix {\n    position: fixed;\n  }", ""]);
	
	// exports


/***/ },
/* 188 */
/*!*******************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Affix.vue ***!
  \*******************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <div v-bind:class="{'vue-affix': affixed}" v-bind:style="styles">
	//       <slot></slot>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false,
	      styles: {}
	    };
	  },
	
	  methods: {
	    scrolling: function scrolling() {
	      var scrollTop = this.getScroll(window, true);
	      var elementOffset = this.getOffset(this.$el);
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
	    getScroll: function getScroll(w, top) {
	      var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	      var method = 'scroll' + (top ? 'Top' : 'Left');
	      if (typeof ret !== 'number') {
	        var d = w.document;
	        // ie6,7,8 standard mode
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	          // quirks mode
	          ret = d.body[method];
	        }
	      }
	      return ret;
	    },
	    getOffset: function getOffset(element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = this.getScroll(window, true);
	      var scrollLeft = this.getScroll(window);
	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }
	  },
	  mounted: function mounted() {
	    window.addEventListener('scroll', this.scrolling);
	    window.addEventListener('resize', this.scrolling);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('scroll', this.scrolling);
	    window.removeEventListener('resize', this.scrolling);
	  }
	};
	// </script>
	
	// <style>
	//   .vue-affix {
	//     position: fixed;
	//   }
	// </style>

/***/ },
/* 189 */
/*!************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Affix.vue ***!
  \************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div>\n    <div v-bind:class=\"{'vue-affix': affixed}\" v-bind:style=\"styles\">\n      <slot></slot>\n    </div>\n  </div>";

/***/ },
/* 190 */
/*!***********************!*\
  !*** ./src/Aside.vue ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-85e5ca52&file=Aside.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue */ 191)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue */ 193)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue */ 195)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 191 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-85e5ca52&file=Aside.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Aside.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-85e5ca52&file=Aside.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue */ 192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-85e5ca52&file=Aside.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-85e5ca52&file=Aside.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 192 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-85e5ca52&file=Aside.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Aside.vue ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".aside-open {\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n  }\n\n  .aside-open.has-push-right {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n\n  .aside {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 1049;\n    overflow: auto;\n    background: #fff;\n  }\n\n  .aside.left {\n    left: 0;\n    right: auto;\n  }\n\n  .aside.right {\n    left: auto;\n    right: 0;\n  }\n\n  .slideleft-enter {\n    -webkit-animation: slideleft-in .3s;\n            animation: slideleft-in .3s;\n  }\n\n  .slideleft-leave-active {\n    -webkit-animation: slideleft-out .3s;\n            animation: slideleft-out .3s;\n  }\n\n  @-webkit-keyframes slideleft-in {\n    0% {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n\n  @keyframes slideleft-in {\n    0% {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n\n  @-webkit-keyframes slideleft-out {\n    0% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      opacity: 0;\n    }\n  }\n\n  @keyframes slideleft-out {\n    0% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      opacity: 0;\n    }\n  }\n\n  .slideright-enter {\n    -webkit-animation: slideright-in .3s;\n            animation: slideright-in .3s;\n  }\n\n  .slideright-leave-active {\n    -webkit-animation: slideright-out .3s;\n            animation: slideright-out .3s;\n  }\n\n  @-webkit-keyframes slideright-in {\n    0% {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n\n  @keyframes slideright-in {\n    0% {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n\n  @-webkit-keyframes slideright-out {\n    0% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      opacity: 0;\n    }\n  }\n\n  @keyframes slideright-out {\n    0% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      opacity: 0;\n    }\n  }\n\n  .aside:focus {\n    outline: 0\n  }\n\n  @media (max-width: 991px) {\n    .aside {\n      min-width: 240px\n    }\n  }\n\n  .aside.left {\n    right: auto;\n    left: 0\n  }\n\n  .aside.right {\n    right: 0;\n    left: auto\n  }\n\n  .aside .aside-dialog .aside-header {\n    border-bottom: 1px solid #e5e5e5;\n    min-height: 16.43px;\n    padding: 6px 15px;\n    background: #337ab7;\n    color: #fff\n  }\n\n  .aside .aside-dialog .aside-header .close {\n    margin-right: -8px;\n    padding: 4px 8px;\n    color: #fff;\n    font-size: 25px;\n    opacity: .8\n  }\n\n  .aside .aside-dialog .aside-body {\n    position: relative;\n    padding: 15px\n  }\n\n  .aside .aside-dialog .aside-footer {\n    padding: 15px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5\n  }\n\n  .aside .aside-dialog .aside-footer .btn+.btn {\n    margin-left: 5px;\n    margin-bottom: 0\n  }\n\n  .aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n    margin-left: -1px\n  }\n\n  .aside .aside-dialog .aside-footer .btn-block+.btn-block {\n    margin-left: 0\n  }\n\n  .aside-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    opacity: 0;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n    background-color: #000\n  }\n\n  .aside-backdrop.in {\n    opacity: .5;\n    filter: alpha(opacity=50)\n  }", ""]);
	
	// exports


/***/ },
/* 193 */
/*!*******************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Aside.vue ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getScrollBarWidth = __webpack_require__(/*! ./utils/getScrollBarWidth.js */ 194);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
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
	    show: function show(val) {
	      var backdrop = document.createElement('div');
	      backdrop.classList.add('aside-backdrop');
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        document.body.appendChild(backdrop);
	        document.body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          document.body.style.paddingRight = scrollBarWidth + 'px';
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
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>
	
	// <style>
	//   .aside-open {
	//     transition: transform 0.3s;
	//   }
	
	//   .aside-open.has-push-right {
	//     transform: translateX(-300px);
	//   }
	
	//   .aside {
	//     position: fixed;
	//     top: 0;
	//     bottom: 0;
	//     z-index: 1049;
	//     overflow: auto;
	//     background: #fff;
	//   }
	
	//   .aside.left {
	//     left: 0;
	//     right: auto;
	//   }
	
	//   .aside.right {
	//     left: auto;
	//     right: 0;
	//   }
	
	//   .slideleft-enter {
	//     animation: slideleft-in .3s;
	//   }
	
	//   .slideleft-leave-active {
	//     animation: slideleft-out .3s;
	//   }
	
	//   @keyframes slideleft-in {
	//     0% {
	//       transform: translateX(-100%);
	//       opacity: 0;
	//     }
	//     100% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//   }
	
	//   @keyframes slideleft-out {
	//     0% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//     100% {
	//       transform: translateX(-100%);
	//       opacity: 0;
	//     }
	//   }
	
	//   .slideright-enter {
	//     animation: slideright-in .3s;
	//   }
	
	//   .slideright-leave-active {
	//     animation: slideright-out .3s;
	//   }
	
	//   @keyframes slideright-in {
	//     0% {
	//       transform: translateX(100%);
	//       opacity: 0;
	//     }
	//     100% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//   }
	
	//   @keyframes slideright-out {
	//     0% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//     100% {
	//       transform: translateX(100%);
	//       opacity: 0;
	//     }
	//   }
	
	//   .aside:focus {
	//     outline: 0
	//   }
	
	//   @media (max-width: 991px) {
	//     .aside {
	//       min-width: 240px
	//     }
	//   }
	
	//   .aside.left {
	//     right: auto;
	//     left: 0
	//   }
	
	//   .aside.right {
	//     right: 0;
	//     left: auto
	//   }
	
	//   .aside .aside-dialog .aside-header {
	//     border-bottom: 1px solid #e5e5e5;
	//     min-height: 16.43px;
	//     padding: 6px 15px;
	//     background: #337ab7;
	//     color: #fff
	//   }
	
	//   .aside .aside-dialog .aside-header .close {
	//     margin-right: -8px;
	//     padding: 4px 8px;
	//     color: #fff;
	//     font-size: 25px;
	//     opacity: .8
	//   }
	
	//   .aside .aside-dialog .aside-body {
	//     position: relative;
	//     padding: 15px
	//   }
	
	//   .aside .aside-dialog .aside-footer {
	//     padding: 15px;
	//     text-align: right;
	//     border-top: 1px solid #e5e5e5
	//   }
	
	//   .aside .aside-dialog .aside-footer .btn+.btn {
	//     margin-left: 5px;
	//     margin-bottom: 0
	//   }
	
	//   .aside .aside-dialog .aside-footer .btn-group .btn+.btn {
	//     margin-left: -1px
	//   }
	
	//   .aside .aside-dialog .aside-footer .btn-block+.btn-block {
	//     margin-left: 0
	//   }
	
	//   .aside-backdrop {
	//     position: fixed;
	//     top: 0;
	//     right: 0;
	//     bottom: 0;
	//     left: 0;
	//     z-index: 1040;
	//     opacity: 0;
	//     transition: opacity .3s ease;
	//     background-color: #000
	//   }
	
	//   .aside-backdrop.in {
	//     opacity: .5;
	//     filter: alpha(opacity=50)
	//   }
	// </style>
	// <template>
	//   <transition :name="this.placement === 'left' ? 'slideleft' : 'slideright'">
	//     <div class="aside" :style="{width: width + 'px'}" :class="{
	//       left:  placement === 'left',
	//       right: placement === 'right',
	//     }" v-show="show">
	//       <div class="aside-dialog">
	//         <div class="aside-content">
	//           <div class="aside-header">
	//             <button type="button" class="close" @click='close'><span>&times;</span></button>
	//             <h4 class="aside-title">
	//               <slot name="header">
	//               {{ header }}
	//               </slot>
	//             </h4>
	//           </div>
	//           <div class="aside-body">
	//             <slot></slot>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </transition>
	// </template>
	
	// <script>

/***/ },
/* 194 */
/*!****************************************!*\
  !*** ./src/utils/getScrollBarWidth.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
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

/***/ },
/* 195 */
/*!************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Aside.vue ***!
  \************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<transition :name=\"this.placement === 'left' ? 'slideleft' : 'slideright'\">\n    <div class=\"aside\" :style=\"{width: width + 'px'}\" :class=\"{\n      left:  placement === 'left',\n      right: placement === 'right',\n    }\" v-show=\"show\">\n      <div class=\"aside-dialog\">\n        <div class=\"aside-content\">\n          <div class=\"aside-header\">\n            <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\n            <h4 class=\"aside-title\">\n              <slot name=\"header\">\n              {{ header }}\n              </slot>\n            </h4>\n          </div>\n          <div class=\"aside-body\">\n            <slot></slot>\n          </div>\n        </div>\n      </div>\n    </div>\n  </transition>";

/***/ },
/* 196 */
/*!*******************************!*\
  !*** ./src/CheckboxGroup.vue ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./CheckboxGroup.vue */ 197)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./CheckboxGroup.vue */ 198)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./CheckboxGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./CheckboxGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./CheckboxGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./CheckboxGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./CheckboxGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 197 */
/*!***************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/CheckboxGroup.vue ***!
  \***************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group" data-toggle="buttons">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {};
	// </script>

/***/ },
/* 198 */
/*!********************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/CheckboxGroup.vue ***!
  \********************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\n    <slot></slot>\n  </div>";

/***/ },
/* 199 */
/*!**************************!*\
  !*** ./src/Checkbox.vue ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-7e580474&file=Checkbox.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue */ 200)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue */ 202)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/template-rewriter.js?id=_v-7e580474&file=Checkbox.vue!./../~/vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue */ 203)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-7e580474&file=Checkbox.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-7e580474&file=Checkbox.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 200 */
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-7e580474&file=Checkbox.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Checkbox.vue ***!
  \**********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-7e580474&file=Checkbox.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue */ 201);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7e580474&file=Checkbox.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7e580474&file=Checkbox.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 201 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-7e580474&file=Checkbox.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Checkbox.vue ***!
  \*****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, "input[type='checkbox'][_v-7e580474] {\n    display: none;\n  }", ""]);
	
	// exports


/***/ },
/* 202 */
/*!**********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Checkbox.vue ***!
  \**********************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <label class="btn" :class="{
	//     'active':      checked,
	//     'btn-success': type == 'success',
	//     'btn-warning': type == 'warning',
	//     'btn-info':    type == 'info',
	//     'btn-danger':  type == 'danger',
	//     'btn-default': type == 'default',
	//     'btn-primary': type == 'primary',
	//   }" :title="title">
	//     <input v-if="uncheckedValue" type="hidden" :name="name" v-model="hiddenValue">
	//     <input :value="value" :name="checkboxName" :tabindex="tabindex" type="checkbox" autocomplete="off" v-model="checked">
	//     <slot></slot>
	//   </label>
	// </template>
	
	// <script>
	exports.default = {
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
	    checkboxName: function checkboxName() {
	      return this.uncheckedValue ? false : this.name;
	    },
	    hiddenValue: function hiddenValue() {
	      return this.checked ? this.value : this.uncheckedValue;
	    },
	
	    watch: {
	      checked: function checked() {
	        this.$emit('input', this.checked);
	      }
	    }
	  }
	};
	// </script>
	
	// <style scoped>
	//   input[type='checkbox'] {
	//     display: none;
	//   }
	// </style>

/***/ },
/* 203 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/template-rewriter.js?id=_v-7e580474&file=Checkbox.vue!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Checkbox.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\" :class=\"{\n    'active':      checked,\n    'btn-success': type == 'success',\n    'btn-warning': type == 'warning',\n    'btn-info':    type == 'info',\n    'btn-danger':  type == 'danger',\n    'btn-default': type == 'default',\n    'btn-primary': type == 'primary',\n  }\" :title=\"title\" _v-7e580474=\"\">\n    <input v-if=\"uncheckedValue\" type=\"hidden\" :name=\"name\" v-model=\"hiddenValue\" _v-7e580474=\"\">\n    <input :value=\"value\" :name=\"checkboxName\" :tabindex=\"tabindex\" type=\"checkbox\" autocomplete=\"off\" v-model=\"checked\" _v-7e580474=\"\">\n    <slot _v-7e580474=\"\"></slot>\n  </label>";

/***/ },
/* 204 */
/*!****************************!*\
  !*** ./src/Datepicker.vue ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-371680a6&file=Datepicker.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue */ 205)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue */ 207)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue */ 208)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 205 */
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-371680a6&file=Datepicker.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Datepicker.vue ***!
  \**************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-371680a6&file=Datepicker.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue */ 206);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-371680a6&file=Datepicker.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-371680a6&file=Datepicker.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 206 */
/*!*********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-371680a6&file=Datepicker.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Datepicker.vue ***!
  \*********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".datepicker {\n    position: relative;\n    display: inline-block;\n  }\n\n  .datapicker a.disabled {\n    cursor: not-allowed;\n  }\n\n  .datepicker .input-group-addon.close {\n    float: none;\n    opacity: 1;\n    line-height: .5;\n    border-left: 0;\n  }\n\n  .datepicker-popup {\n    position: absolute;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  }\n\n  .datepicker-inner {\n    width: 218px;\n  }\n\n  .datepicker-body {\n    padding: 10px 10px;\n  }\n\n  .datepicker-ctrl p,\n  .datepicker-ctrl span,\n  .datepicker-body span {\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n  }\n\n  .datepicker-ctrl p {\n    width: 65%;\n  }\n\n  .datepicker-ctrl span {\n    position: absolute;\n  }\n\n  .datepicker-body span {\n    text-align: center;\n  }\n\n  .datepicker-monthRange span {\n    width: 48px;\n    height: 50px;\n    line-height: 45px;\n  }\n\n  .datepicker-item-disable {\n    background-color: white!important;\n    cursor: not-allowed!important;\n  }\n\n  .decadeRange span:first-child,\n  .decadeRange span:last-child,\n  .datepicker-item-disable,\n  .datepicker-item-gray {\n    color: #999;\n  }\n\n  .datepicker-dateRange-item-active:hover,\n  .datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n  }\n\n  .datepicker-monthRange {\n    margin-top: 10px\n  }\n\n  .datepicker-monthRange span,\n  .datepicker-ctrl span,\n  .datepicker-ctrl p,\n  .datepicker-dateRange span {\n    cursor: pointer;\n  }\n\n  .datepicker-monthRange span:hover,\n  .datepicker-ctrl p:hover,\n  .datepicker-ctrl i:hover,\n  .datepicker-dateRange span:hover,\n  .datepicker-dateRange-item-hover {\n    background-color: #eeeeee;\n  }\n\n  .datepicker-weekRange span {\n    font-weight: bold;\n  }\n\n  .datepicker-label {\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n  }\n\n  .datepicker-ctrl {\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n  }\n\n  .month-btn {\n    font-weight: bold;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .datepicker-preBtn {\n    left: 2px;\n  }\n\n  .datepicker-nextBtn {\n    right: 2px;\n  }", ""]);
	
	// exports


/***/ },
/* 207 */
/*!************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Datepicker.vue ***!
  \************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="datepicker">
	//     <div :class="{
	//       'input-group': (showResetButton || showPickerButton) && type != 'hidden'
	//     }">
	//       <input ref="input" :name="name" :tabindex="tabindex" :placeholder="placeholder" :disabled="disabled" :required="required" class="form-control datepicker-input" :type="type" @focus="show" @blur="close" v-model="formattedValue">
	//       <a v-if="showResetButton && type != 'hidden'" class="input-group-addon close" :class="{disabled: disabled !== undefined}" @click.prevent="clear">
	//         &times;
	//       </a>
	//       <a v-if="showPickerButton" :class="{
	//         disabled: disabled !== undefined,
	//         'input-group-addon': type != 'hidden'
	//       }" @click.prevent="show" href="javascript:void(0)">
	//         <span :class="[iconset, iconset + '-calendar']"></span>
	//       </a>
	//     </div>
	
	//     <div ref="popup" class="datepicker-popup panel" tabindex="-1" @blur="close" v-if="displayDayView || displayMonthView || displayYearView">
	//       <div class="datepicker-inner" v-show="displayDayView">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="month-btn datepicker-preBtn" @click="preNextMonthClick(0)">&lt;</span>
	//             <span class="month-btn datepicker-nextBtn" @click="preNextMonthClick(1)">&gt;</span>
	//             <p @click="switchMonthView">{{stringifyDayHeader(date)}}</p>
	//           </div>
	//           <div class="datepicker-weekRange">
	//             <span v-for="w in weekRange">{{w}}</span>
	//           </div>
	//           <div class="datepicker-dateRange">
	//             <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d.date, event.target)">{{d.text}}</span>
	//           </div>
	//         </div>
	//       </div>
	
	//       <div class="datepicker-inner" v-show="displayMonthView">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="month-btn datepicker-preBtn" @click="preNextYearClick(0)">&lt;</span>
	//             <span class="month-btn datepicker-nextBtn" @click="preNextYearClick(1)">&gt;</span>
	//             <p @click="switchDecadeView">{{stringifyYearHeader(date)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange">
	//             <span v-for="(m, index) in monthNames" :class="{
	//               'datepicker-dateRange-item-active': monthNames[month]  === m
	//             }" @click="monthSelect(index)">
	//               {{m.substr(0,3)}}
	//             </span>
	//           </div>
	//         </div>
	//       </div>
	
	//       <div class="datepicker-inner" v-show="displayYearView">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="month-btn datepicker-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
	//             <span class="month-btn datepicker-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
	//             <p>{{stringifyDecadeHeader(date)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange decadeRange">
	//             <span v-for="decade in decadeRange" :class="{
	//               'datepicker-dateRange-item-active': year === decade.text
	//             }" @click.stop="yearSelect(decade.text)">
	//               {{decade.text}}
	//             </span>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
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
	      default: function _default() {
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
	  data: function data() {
	    return {
	      dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	      displayDayView: false,
	      displayMonthView: false,
	      displayYearView: false,
	      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	    };
	  },
	  mounted: function mounted() {
	    if (!this.value) {
	      this.clear();
	    }
	    window.addEventListener('click', this.close);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('click', this.close);
	  },
	
	  watch: {
	    value: function value() {
	      this.$emit('input', this.value);
	    },
	    format: function format(_format, old) {
	      var date = this.parse(this.value, old);
	      this.value = this.stringify(date, _format);
	    }
	  },
	  computed: {
	    date: {
	      get: function get() {
	        var date = null;
	        if (this.value) {
	          date = this.parse(this.value);
	        }
	        return date ? date : this.parse(new Date());
	      },
	      set: function set(value) {
	        this.value = this.stringify(value);
	      }
	    },
	    formattedValue: function formattedValue() {
	      if (!this.value) {
	        return '';
	      }
	      return this.stringify(this.date, this.format);
	    },
	    weekRange: function weekRange() {
	      var range = [];
	      for (var i = 0; i < 7; i++) {
	        range.push(this.dayNames[(i + this.firstDayOfWeek) % 7]);
	      }
	      return range;
	    },
	    decadeRange: function decadeRange() {
	      var decadeRange = [];
	      var yearStr = this.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	      return decadeRange;
	    },
	    dateRange: function dateRange() {
	      var _this = this;
	
	      var dateRange = [];
	
	      var firstOfMonth = new Date(this.year, this.month, 1);
	      var firstDayWeek = firstOfMonth.getDay();
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var numDaysOfPrevMonth = firstDayWeek - this.firstDayOfWeek;
	      if (numDaysOfPrevMonth < 0) {
	        numDaysOfPrevMonth += 7;
	      }
	
	      if (numDaysOfPrevMonth) {
	        var preMonth = this.getYearMonth(this.year, this.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	
	        for (var i = 0; i < numDaysOfPrevMonth; i++) {
	          var dayText = prevMonthDayCount - numDaysOfPrevMonth + i;
	          dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      var dayCount = this.getDayCount(this.year, this.month);
	
	      var _loop = function _loop(_i) {
	        var date = new Date(_this.year, _this.month, _i);
	        var week = date.getDay();
	        var sclass = '';
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) {
	            sclass = 'datepicker-item-disable';
	          }
	        });
	
	        if (_i === _this.day) {
	          if (date.getFullYear() === _this.year && date.getMonth() === _this.month) {
	            sclass = 'datepicker-dateRange-item-active';
	          }
	        }
	        dateRange.push({
	          text: _i,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var _i = 1; _i <= dayCount; _i++) {
	        _loop(_i);
	      }
	
	      var nextMonthNeed = 7 - (dayCount + numDaysOfPrevMonth) % 7;
	
	      if (nextMonthNeed != 7) {
	        var nextMonth = this.getYearMonth(this.year, this.month + 1);
	
	        for (var _i2 = 1; _i2 <= nextMonthNeed; _i2++) {
	          dateRange.push({
	            text: _i2,
	            date: new Date(nextMonth.year, nextMonth.month, _i2),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      return dateRange;
	    },
	    year: function year() {
	      return this.date.getFullYear();
	    },
	    month: function month() {
	      return this.date.getMonth();
	    },
	    day: function day() {
	      return this.date.getDate();
	    }
	  },
	  methods: {
	    close: function close(e) {
	      if (e && e.type == 'click' && this.$el.contains(e.target)) {
	        return;
	      }
	      if (e && e.type == 'blur' && this.$el.contains(e.relatedTarget)) {
	        return;
	      }
	      this.displayDayView = this.displayMonthView = this.displayYearView = false;
	    },
	    toggle: function toggle(e) {
	      if (e && this.disabled !== undefined) {
	        return;
	      }
	      if (e.target.nodeName == 'INPUT' && this.showPickerButton) {
	        return;
	      }
	      this.displayDayView = !(this.displayMonthView || this.displayYearView || this.displayDayView);
	    },
	    show: function show(e) {
	      if (e && this.disabled !== undefined) {
	        return;
	      }
	      this.displayDayView = true;
	    },
	    clear: function clear(e) {
	      if (e && this.disabled !== undefined) {
	        return;
	      }
	      if (this.required !== undefined) {
	        this.date = new Date();
	      } else {
	        this.value = '';
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      if (flag === 0) {
	        this.date = new Date(this.year - 10, this.month, this.day);
	      } else {
	        this.date = new Date(this.year + 10, this.month, this.day);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(this.year, this.month - 1);
	        this.date = new Date(preMonth.year, preMonth.month, this.day);
	      } else {
	        var nextMonth = this.getYearMonth(this.year, this.month + 1);
	        this.date = new Date(nextMonth.year, nextMonth.month, this.day);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      if (flag === 0) {
	        this.date = new Date(this.year - 1, this.month, this.day);
	      } else {
	        this.date = new Date(this.year + 1, this.month, this.day);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.date = new Date(year, this.month, this.day);
	    },
	    daySelect: function daySelect(date, el) {
	      if (el.classList[0] === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.date = date;
	        this.displayDayView = false;
	      }
	    },
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
	      this.displayDayView = true;
	      this.date = new Date(this.year, index, this.day);
	    },
	    getYearMonth: function getYearMonth(year, month) {
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
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.monthNames[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMonth: function parseMonth(date) {
	      return this.monthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      if (str.length == 10 && (format == 'dd-MM-yyyy' || format == 'dd/MM/yyyy')) {
	        str = str.substring(3, 5) + '-' + str.substring(0, 2) + '-' + str.substring(6, 10);
	      }
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
	      }
	
	      return dict[month];
	    }
	  }
	};
	// </script>
	
	// <style>
	//   .datepicker {
	//     position: relative;
	//     display: inline-block;
	//   }
	
	//   .datapicker a.disabled {
	//     cursor: not-allowed;
	//   }
	
	//   .datepicker .input-group-addon.close {
	//     float: none;
	//     opacity: 1;
	//     line-height: .5;
	//     border-left: 0;
	//   }
	
	//   .datepicker-popup {
	//     position: absolute;
	//     margin-top: 2px;
	//     z-index: 1000;
	//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
	//   }
	
	//   .datepicker-inner {
	//     width: 218px;
	//   }
	
	//   .datepicker-body {
	//     padding: 10px 10px;
	//   }
	
	//   .datepicker-ctrl p,
	//   .datepicker-ctrl span,
	//   .datepicker-body span {
	//     display: inline-block;
	//     width: 28px;
	//     line-height: 28px;
	//     height: 28px;
	//     border-radius: 4px;
	//   }
	
	//   .datepicker-ctrl p {
	//     width: 65%;
	//   }
	
	//   .datepicker-ctrl span {
	//     position: absolute;
	//   }
	
	//   .datepicker-body span {
	//     text-align: center;
	//   }
	
	//   .datepicker-monthRange span {
	//     width: 48px;
	//     height: 50px;
	//     line-height: 45px;
	//   }
	
	//   .datepicker-item-disable {
	//     background-color: white!important;
	//     cursor: not-allowed!important;
	//   }
	
	//   .decadeRange span:first-child,
	//   .decadeRange span:last-child,
	//   .datepicker-item-disable,
	//   .datepicker-item-gray {
	//     color: #999;
	//   }
	
	//   .datepicker-dateRange-item-active:hover,
	//   .datepicker-dateRange-item-active {
	//     background: rgb(50, 118, 177)!important;
	//     color: white!important;
	//   }
	
	//   .datepicker-monthRange {
	//     margin-top: 10px
	//   }
	
	//   .datepicker-monthRange span,
	//   .datepicker-ctrl span,
	//   .datepicker-ctrl p,
	//   .datepicker-dateRange span {
	//     cursor: pointer;
	//   }
	
	//   .datepicker-monthRange span:hover,
	//   .datepicker-ctrl p:hover,
	//   .datepicker-ctrl i:hover,
	//   .datepicker-dateRange span:hover,
	//   .datepicker-dateRange-item-hover {
	//     background-color: #eeeeee;
	//   }
	
	//   .datepicker-weekRange span {
	//     font-weight: bold;
	//   }
	
	//   .datepicker-label {
	//     background-color: #f8f8f8;
	//     font-weight: 700;
	//     padding: 7px 0;
	//     text-align: center;
	//   }
	
	//   .datepicker-ctrl {
	//     position: relative;
	//     height: 30px;
	//     line-height: 30px;
	//     font-weight: bold;
	//     text-align: center;
	//   }
	
	//   .month-btn {
	//     font-weight: bold;
	//     -webkit-user-select: none;
	//     -moz-user-select: none;
	//     -ms-user-select: none;
	//     user-select: none;
	//   }
	
	//   .datepicker-preBtn {
	//     left: 2px;
	//   }
	
	//   .datepicker-nextBtn {
	//     right: 2px;
	//   }
	// </style>

/***/ },
/* 208 */
/*!*****************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Datepicker.vue ***!
  \*****************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"datepicker\">\n    <div :class=\"{\n      'input-group': (showResetButton || showPickerButton) && type != 'hidden'\n    }\">\n      <input ref=\"input\" :name=\"name\" :tabindex=\"tabindex\" :placeholder=\"placeholder\" :disabled=\"disabled\" :required=\"required\" class=\"form-control datepicker-input\" :type=\"type\" @focus=\"show\" @blur=\"close\" v-model=\"formattedValue\">\n      <a v-if=\"showResetButton && type != 'hidden'\" class=\"input-group-addon close\" :class=\"{disabled: disabled !== undefined}\" @click.prevent=\"clear\">\n        &times;\n      </a>\n      <a v-if=\"showPickerButton\" :class=\"{\n        disabled: disabled !== undefined,\n        'input-group-addon': type != 'hidden'\n      }\" @click.prevent=\"show\" href=\"javascript:void(0)\">\n        <span :class=\"[iconset, iconset + '-calendar']\"></span>\n      </a>\n    </div>\n\n    <div ref=\"popup\" class=\"datepicker-popup panel\" tabindex=\"-1\" @blur=\"close\" v-if=\"displayDayView || displayMonthView || displayYearView\">\n      <div class=\"datepicker-inner\" v-show=\"displayDayView\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(date)}}</p>\n          </div>\n          <div class=\"datepicker-weekRange\">\n            <span v-for=\"w in weekRange\">{{w}}</span>\n          </div>\n          <div class=\"datepicker-dateRange\">\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date, event.target)\">{{d.text}}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"datepicker-inner\" v-show=\"displayMonthView\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(date)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange\">\n            <span v-for=\"(m, index) in monthNames\" :class=\"{\n              'datepicker-dateRange-item-active': monthNames[month]  === m\n            }\" @click=\"monthSelect(index)\">\n              {{m.substr(0,3)}}\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"datepicker-inner\" v-show=\"displayYearView\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n            <p>{{stringifyDecadeHeader(date)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange decadeRange\">\n            <span v-for=\"decade in decadeRange\" :class=\"{\n              'datepicker-dateRange-item-active': year === decade.text\n            }\" @click.stop=\"yearSelect(decade.text)\">\n              {{decade.text}}\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 209 */
/*!**************************!*\
  !*** ./src/Dropdown.vue ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue */ 210)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue */ 211)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 210 */
/*!**********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Dropdown.vue ***!
  \**********************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group">
	//     <slot>
	//       <button class="btn btn-default" type="button" @click.prevent="toggle">
	//         <span :class="[iconset, iconset + '-menu-hamburger']"></span>
	//         <span class="caret"></span>
	//       </button>
	//     </slot>
	//     <slot name="dropdown-menu"></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    iconset: {
	      type: String,
	      default: 'glyphicon'
	    }
	  },
	  methods: {
	    open: function open() {
	      this.$el.classList.add('open');
	    },
	    toggle: function toggle(e) {
	      if (e) {
	        e.preventDefault();
	      }
	      this.$el.classList.toggle('open');
	    },
	    close: function close(e) {
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
	  mounted: function mounted() {
	    this._toggle = this.$el.querySelector('[data-toggle="dropdown"]');
	    if (this._toggle) {
	      this._toggle.addEventListener('click', this.toggle);
	    }
	    window.addEventListener('click', this.close);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('click', this.close);
	  }
	};
	// </script>

/***/ },
/* 211 */
/*!***************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Dropdown.vue ***!
  \***************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\">\n    <slot>\n      <button class=\"btn btn-default\" type=\"button\" @click.prevent=\"toggle\">\n        <span :class=\"[iconset, iconset + '-menu-hamburger']\"></span>\n        <span class=\"caret\"></span>\n      </button>\n    </slot>\n    <slot name=\"dropdown-menu\"></slot>\n  </div>";

/***/ },
/* 212 */
/*!****************************!*\
  !*** ./src/DropdownLi.vue ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./DropdownLi.vue */ 213)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./DropdownLi.vue */ 214)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./DropdownLi.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./DropdownLi.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./DropdownLi.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./DropdownLi.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./DropdownLi.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 213 */
/*!************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/DropdownLi.vue ***!
  \************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(/*! ./Dropdown.vue */ 209);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_Dropdown2.default]
	};
	// </script>
	// <template>
	//   <li class="btn-group dropdown">
	//     <slot>
	//       <a href="javascript:void(0)" data-toggle="dropdown">
	//         <span :class="[iconset, iconset + '-menu-hamburger']"></span>
	//         <span class="caret"></span>
	//       </a>
	//     </slot>
	//     <slot name="dropdown-menu"></slot>
	//   </li>
	// </template>
	
	// <script>

/***/ },
/* 214 */
/*!*****************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/DropdownLi.vue ***!
  \*****************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<li class=\"btn-group dropdown\">\n    <slot>\n      <a href=\"javascript:void(0)\" data-toggle=\"dropdown\">\n        <span :class=\"[iconset, iconset + '-menu-hamburger']\"></span>\n        <span class=\"caret\"></span>\n      </a>\n    </slot>\n    <slot name=\"dropdown-menu\"></slot>\n  </li>";

/***/ },
/* 215 */
/*!***********************!*\
  !*** ./src/Modal.vue ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-03828dcc&file=Modal.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue */ 216)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue */ 218)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue */ 223)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 216 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-03828dcc&file=Modal.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Modal.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-03828dcc&file=Modal.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue */ 217);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-03828dcc&file=Modal.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-03828dcc&file=Modal.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 217 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-03828dcc&file=Modal.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Modal.vue ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n  }\n\n  .modal.movable {\n    -webkit-transition: opacity 0.3s ease;\n    transition: opacity 0.3s ease;\n  }\n\n  .modal.movable .modal-header {\n    cursor: -webkit-grab;\n    cursor: grab;\n  }\n\n  .modal.movable.dragging .modal-header {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n  }\n\n  .modal.in {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n\n  .modal.in.modeless {\n    background: transparent;\n    overflow: visible;\n  }\n\n  .modal.in.movable {\n    bottom: initial;\n    left: initial;\n    right: initial;\n  }\n\n  .modal.modeless .modal-dialog {\n    margin: 20px;\n  }\n\n  .modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n\n  .modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n  }", ""]);
	
	// exports


/***/ },
/* 218 */
/*!*******************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Modal.vue ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(/*! babel-runtime/core-js/number/is-integer */ 219);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _getScrollBarWidth = __webpack_require__(/*! ./utils/getScrollBarWidth.js */ 194);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
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
	      default: function _default() {
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
	  data: function data() {
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
	    draggable: function draggable() {
	      return !this.backdrop && this.movable;
	    },
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(this.width)) {
	        return this.width + 'px';
	      }
	      return this.width;
	    },
	    translateStyle: function translateStyle() {
	      return 'translate(' + this.translate.x + 'px, ' + this.translate.y + 'px)';
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    },
	    cancel: function cancel() {
	      this.$emit('cancel');
	      this.close();
	    },
	    confirm: function confirm() {
	      if (this.callback) {
	        var result = this.callback();
	        if (result !== undefined && !result) {
	          return;
	        }
	      }
	      this.$emit('confirm');
	      this.close();
	    },
	    backdropClick: function backdropClick(e) {
	      if (this.backdrop && e.target === this.$el) {
	        this.cancel();
	      }
	    },
	    startDrag: function startDrag(e) {
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
	    onDrag: function onDrag(e) {
	      e.stopPropagation();
	      e.preventDefault();
	
	      e = e.changedTouches ? e.changedTouches[0] : e;
	      this.translate.x = e.pageX - this.start.x - this.position.x;
	      this.translate.y = e.pageY - this.start.y - this.position.y;
	    },
	    stopDrag: function stopDrag(e) {
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
	      handler: function handler(val) {
	        var _this = this;
	
	        var body = document.body;
	        if (val) {
	          this.$refs.modalContent.focus();
	          this.display = true;
	          body.classList.add('modal-open');
	          var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	          if (scrollBarWidth !== 0) {
	            body.style.paddingRight = scrollBarWidth + 'px';
	          }
	          this.$emit('open');
	        } else {
	          setTimeout(function () {
	            _this.display = false;
	            body.classList.remove('modal-open');
	            body.style.paddingRight = '0';
	            _this.$emit('close');
	          }, 300);
	        }
	        this.$emit('visibility-change', val);
	      },
	
	      immediate: true
	    }
	  }
	};
	// </script>
	// <style>
	//   .modal {
	//     transition: all 0.3s ease;
	//   }
	
	//   .modal.movable {
	//     transition: opacity 0.3s ease;
	//   }
	
	//   .modal.movable .modal-header {
	//     cursor: -webkit-grab;
	//     cursor: -moz-grab;
	//     cursor: grab;
	//   }
	
	//   .modal.movable.dragging .modal-header {
	//     cursor: -webkit-grabbing;
	//     cursor: -moz-grabbing;
	//     cursor: grabbing;
	//   }
	
	//   .modal.in {
	//     background-color: rgba(0, 0, 0, 0.5);
	//   }
	
	//   .modal.in.modeless {
	//     background: transparent;
	//     overflow: visible;
	//   }
	
	//   .modal.in.movable {
	//     bottom: initial;
	//     left: initial;
	//     right: initial;
	//   }
	
	//   .modal.modeless .modal-dialog {
	//     margin: 20px;
	//   }
	
	//   .modal.zoom .modal-dialog {
	//     -webkit-transform: scale(0.1);
	//     -moz-transform: scale(0.1);
	//     -ms-transform: scale(0.1);
	//     transform: scale(0.1);
	//     top: 300px;
	//     opacity: 0;
	//     -webkit-transition: all 0.3s;
	//     -moz-transition: all 0.3s;
	//     transition: all 0.3s;
	//   }
	
	//   .modal.zoom.in .modal-dialog {
	//     -webkit-transform: scale(1);
	//     -moz-transform: scale(1);
	//     -ms-transform: scale(1);
	//     transform: scale(1);
	//     -webkit-transform: translate3d(0, -300px, 0);
	//     transform: translate3d(0, -300px, 0);
	//     opacity: 1;
	//   }
	// </style>
	// <template>
	//   <div role="dialog" class="modal" :class="{
	//     modeless: !backdrop,
	//     movable:  draggable,
	//     dragging: dragging,
	//     fade:   effect === 'fade',
	//     zoom:   effect === 'zoom',
	//     in:     show,
	//   }" :style="{
	//     display: display ? 'block' : 'none',
	//     top: position.y + 'px',
	//     left: position.x + 'px',
	//     transform: translateStyle,
	//   }" @click="backdropClick">
	//     <div :class="{
	//       'modal-dialog': true,
	//       'modal-lg':   large,
	//       'modal-sm':   small,
	//     }" role="document" :style="{width: optionalWidth}">
	//       <div ref="modalContent" class="modal-content">
	//         <slot name="modal-header">
	//           <div class="modal-header"
	//              @mousedown="startDrag" @touchstart="startDrag">
	//             <button type="button" class="close" @click="cancel">
	//               &times;
	//             </button>
	//             <h4 class="modal-title">
	//               <slot name="title">
	//                 <span v-html="title"></span>
	//               </slot>
	//             </h4>
	//           </div>
	//         </slot>
	
	//         <slot name="modal-body">
	//           <div class="modal-body" v-html="body"></div>
	//         </slot>
	
	//         <slot name="modal-footer">
	//           <div class="modal-footer">
	//             <button type="button" class="btn btn-default" @click="cancel">{{ cancelText }}</button>
	//             <button type="button" class="btn btn-primary" @click="confirm">{{ okText }}</button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 219 */
/*!******************************************************!*\
  !*** ./~/babel-runtime/core-js/number/is-integer.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/number/is-integer */ 220), __esModule: true };

/***/ },
/* 220 */
/*!***************************************************!*\
  !*** ./~/core-js/library/fn/number/is-integer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.number.is-integer */ 221);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 67).Number.isInteger;

/***/ },
/* 221 */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/es6.number.is-integer.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(/*! ./_export */ 66);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(/*! ./_is-integer */ 222)});

/***/ },
/* 222 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_is-integer.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(/*! ./_is-object */ 73)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 223 */
/*!************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Modal.vue ***!
  \************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div role=\"dialog\" class=\"modal\" :class=\"{\n    modeless: !backdrop,\n    movable:  draggable,\n    dragging: dragging,\n    fade:   effect === 'fade',\n    zoom:   effect === 'zoom',\n    in:     show,\n  }\" :style=\"{\n    display: display ? 'block' : 'none',\n    top: position.y + 'px',\n    left: position.x + 'px',\n    transform: translateStyle,\n  }\" @click=\"backdropClick\">\n    <div :class=\"{\n      'modal-dialog': true,\n      'modal-lg':   large,\n      'modal-sm':   small,\n    }\" role=\"document\" :style=\"{width: optionalWidth}\">\n      <div ref=\"modalContent\" class=\"modal-content\">\n        <slot name=\"modal-header\">\n          <div class=\"modal-header\"\n             @mousedown=\"startDrag\" @touchstart=\"startDrag\">\n            <button type=\"button\" class=\"close\" @click=\"cancel\">\n              &times;\n            </button>\n            <h4 class=\"modal-title\">\n              <slot name=\"title\">\n                <span v-html=\"title\"></span>\n              </slot>\n            </h4>\n          </div>\n        </slot>\n\n        <slot name=\"modal-body\">\n          <div class=\"modal-body\" v-html=\"body\"></div>\n        </slot>\n\n        <slot name=\"modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"cancel\">{{ cancelText }}</button>\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"confirm\">{{ okText }}</button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 224 */
/*!************************!*\
  !*** ./src/Option.vue ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-176eda66&file=Option.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Option.vue */ 225)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Option.vue */ 227)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/template-rewriter.js?id=_v-176eda66&file=Option.vue!./../~/vue-loader/lib/selector.js?type=template&index=0!./Option.vue */ 228)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-176eda66&file=Option.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-176eda66&file=Option.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 225 */
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-176eda66&file=Option.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Option.vue ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-176eda66&file=Option.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Option.vue */ 226);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-176eda66&file=Option.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-176eda66&file=Option.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 226 */
/*!*************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-176eda66&file=Option.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Option.vue ***!
  \*************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, "a span.check-mark[_v-176eda66] {\n    position: absolute;\n    display: inline-block;\n    right: 15px;\n    margin-top: 5px;\n  }", ""]);
	
	// exports


/***/ },
/* 227 */
/*!********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Option.vue ***!
  \********************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <li style="position:relative">
	//     <a @mousedown.prevent="handleClick" style="cursor:pointer">
	//       <span ref="v"><slot></slot></span>
	//       <span :class="[iconset, iconset + '-ok']" class="check-mark" v-show="chosen"></span>
	//     </a>
	//   </li>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    iconset: {
	      type: String,
	      default: 'glyphicon'
	    }
	  },
	  data: function data() {
	    return {
	      chosen: false
	    };
	  },
	
	  computed: {
	    chosen: function chosen() {
	      return this.$parent.value.indexOf(this.value) !== -1;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      if (parent.multiple) {
	        var index = parent.value.indexOf(this.value);
	        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      } else {
	        parent.value = [this.value];
	        parent.show = false;
	      }
	    }
	  }
	};
	// </script>
	
	// <style scoped>
	//   a span.check-mark {
	//     position: absolute;
	//     display: inline-block;
	//     right: 15px;
	//     margin-top: 5px;
	//   }
	// </style>

/***/ },
/* 228 */
/*!************************************************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/template-rewriter.js?id=_v-176eda66&file=Option.vue!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Option.vue ***!
  \************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<li style=\"position:relative\" _v-176eda66=\"\">\n    <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\" _v-176eda66=\"\">\n      <span ref=\"v\" _v-176eda66=\"\"><slot _v-176eda66=\"\"></slot></span>\n      <span :class=\"[iconset, iconset + '-ok']\" class=\"check-mark\" v-show=\"chosen\" _v-176eda66=\"\"></span>\n    </a>\n  </li>";

/***/ },
/* 229 */
/*!***********************!*\
  !*** ./src/Panel.vue ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-29d119a3&file=Panel.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue */ 230)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue */ 232)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue */ 233)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 230 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-29d119a3&file=Panel.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Panel.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-29d119a3&file=Panel.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue */ 231);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-29d119a3&file=Panel.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-29d119a3&file=Panel.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 231 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-29d119a3&file=Panel.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Panel.vue ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".panel-heading {\n    cursor: pointer;\n  }\n\n  .collapse-enter-active, .collapse-leave-active {\n    -webkit-transition: max-height .5s ease;\n    transition: max-height .5s ease;\n    overflow: hidden;\n  }\n\n  .collapse-enter,\n  .collapse-leave-active {\n    max-height: 0!important;\n  }", ""]);
	
	// exports


/***/ },
/* 232 */
/*!*******************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Panel.vue ***!
  \*******************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="panel panel-default">
	//     <div class="panel-heading" @click="isOpen = !isOpen">
	//       <h4 class="panel-title">
	//         <slot name="header">{{ header }}</slot>
	//       </h4>
	//     </div>
	//     <transition name="collapse" @after-enter="afterEnter" @before-leave="beforeLeave">
	//       <div class="panel-collapse" v-show="isOpen">
	//         <div class="panel-body">
	//           <slot></slot>
	//         </div>
	//       </div>
	//     </transition>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    isOpen: {
	      type: Boolean,
	      default: false
	    },
	    header: String
	  },
	  watch: {
	    isOpen: function isOpen() {
	      if (this.isOpen) {
	        this.$parent.setActivePanel(this);
	      }
	      this.$emit('visibility-change', this.isOpen);
	    }
	  },
	  methods: {
	    afterEnter: function afterEnter(el) {
	      el.style.maxHeight = "";
	    },
	    beforeLeave: function beforeLeave(el) {
	      el.style.maxHeight = el.offsetHeight + "px";
	      // Recalculate DOM before the class gets added.
	      return el.offsetHeight;
	    }
	  }
	};
	// </script>
	
	// <style>
	//   .panel-heading {
	//     cursor: pointer;
	//   }
	
	//   .collapse-enter-active, .collapse-leave-active {
	//     transition: max-height .5s ease;
	//     overflow: hidden;
	//   }
	
	//   .collapse-enter,
	//   .collapse-leave-active {
	//     max-height: 0!important;
	//   }
	// </style>

/***/ },
/* 233 */
/*!************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Panel.vue ***!
  \************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\" @click=\"isOpen = !isOpen\">\n      <h4 class=\"panel-title\">\n        <slot name=\"header\">{{ header }}</slot>\n      </h4>\n    </div>\n    <transition name=\"collapse\" @after-enter=\"afterEnter\" @before-leave=\"beforeLeave\">\n      <div class=\"panel-collapse\" v-show=\"isOpen\">\n        <div class=\"panel-body\">\n          <slot></slot>\n        </div>\n      </div>\n    </transition>\n  </div>";

/***/ },
/* 234 */
/*!*************************!*\
  !*** ./src/Popover.vue ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-086adff8&file=Popover.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue */ 235)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue */ 237)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue */ 238)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 235 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-086adff8&file=Popover.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Popover.vue ***!
  \********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-086adff8&file=Popover.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue */ 236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-086adff8&file=Popover.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-086adff8&file=Popover.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 236 */
/*!***************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-086adff8&file=Popover.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Popover.vue ***!
  \***************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".fade-enter-active, .fade-leave-active,\n  .scale-enter-active, .scale-leave-active {\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: opacity, transform;\n    transition-property: opacity, transform, -webkit-transform;\n    -webkit-transition-duration: .2s;\n            transition-duration: .2s;\n    -webkit-transition-timing-function: ease;\n            transition-timing-function: ease;\n  }\n  .fade-enter, .fade-leave-active {\n    opacity: 0;\n  }\n  .scale-enter, .scale-leave-active {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }", ""]);
	
	// exports


/***/ },
/* 237 */
/*!*********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Popover.vue ***!
  \*********************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <span ref="trigger">
	//       <slot></slot>
	//     </span>
	//     <transition :name="effect">
	//       <div class="popover" :class="{
	//         top:    placement === 'top',
	//         left:   placement === 'left',
	//         right:  placement === 'right',
	//         bottom: placement === 'bottom',
	//       }" :style="{display: show ? 'block' : 'none'}" ref="popover" v-show="show">
	//         <div class="arrow"></div>
	//         <h3 class="popover-title" v-show="title">
	//           <slot name="title">{{title}}</slot>
	//         </h3>
	//         <div class="popover-content">
	//           <slot name="content">
	//             <span v-html="content"></span>
	//           </slot>
	//         </div>
	//       </div>
	//     </div>
	//   </transition>
	// </template>
	
	// <script>
	exports.default = {
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
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      show: true
	    };
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	    },
	    display: function display() {
	      this.show = true;
	    },
	    hide: function hide() {
	      this.show = false;
	    }
	  },
	  mounted: function mounted() {
	    if (!this.$refs.popover) {
	      console.error('Couldn\'t find popover ref in your component that uses popoverMixin.');
	      return;
	    }
	    var popover = this.$refs.popover;
	    var trig = this.$refs.trigger.children[0];
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
	    popover.style.top = this.position.top + 'px';
	    popover.style.left = this.position.left + 'px';
	    this.toggle();
	  },
	  beforeDestroy: function beforeDestroy() {
	    var trig = this.$refs.trigger.children[0];
	    trig.removeEventListener('mouseenter', this.display);
	    trig.removeEventListener('mouseleave', this.hide);
	    trig.removeEventListener('focus', this.display);
	    trig.removeEventListener('blur', this.hide);
	    trig.removeEventListener('click', this.toggle);
	  }
	};
	// </script>
	
	// <style>
	//   .fade-enter-active, .fade-leave-active,
	//   .scale-enter-active, .scale-leave-active {
	//     transition-property: opacity, transform;
	//     transition-duration: .2s;
	//     transition-timing-function: ease;
	//   }
	//   .fade-enter, .fade-leave-active {
	//     opacity: 0;
	//   }
	//   .scale-enter, .scale-leave-active {
	//     transform: scale(0);
	//   }
	// </style>

/***/ },
/* 238 */
/*!**************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Popover.vue ***!
  \**************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div>\n    <span ref=\"trigger\">\n      <slot></slot>\n    </span>\n    <transition :name=\"effect\">\n      <div class=\"popover\" :class=\"{\n        top:    placement === 'top',\n        left:   placement === 'left',\n        right:  placement === 'right',\n        bottom: placement === 'bottom',\n      }\" :style=\"{display: show ? 'block' : 'none'}\" ref=\"popover\" v-show=\"show\">\n        <div class=\"arrow\"></div>\n        <h3 class=\"popover-title\" v-show=\"title\">\n          <slot name=\"title\">{{title}}</slot>\n        </h3>\n        <div class=\"popover-content\">\n          <slot name=\"content\">\n            <span v-html=\"content\"></span>\n          </slot>\n        </div>\n      </div>\n    </div>\n  </transition>";

/***/ },
/* 239 */
/*!*****************************!*\
  !*** ./src/Progressbar.vue ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue */ 240)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue */ 241)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 240 */
/*!*************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Progressbar.vue ***!
  \*************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div role="progressbar" v-bind:class="{
	//   'progress-bar' : true,
	//   'progress-bar-success':type == 'success',
	//   'progress-bar-warning':type == 'warning',
	//   'progress-bar-info':type == 'info',
	//   'progress-bar-danger':type == 'danger',
	//   'progress-bar-striped':striped,
	//   'active':animated
	//   }" v-bind:style="{width: now + '%'}">
	//     {{label ? now + '%':'' }}
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
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
	};
	// </script>

/***/ },
/* 241 */
/*!******************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Progressbar.vue ***!
  \******************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div role=\"progressbar\" v-bind:class=\"{\n  'progress-bar' : true,\n  'progress-bar-success':type == 'success',\n  'progress-bar-warning':type == 'warning',\n  'progress-bar-info':type == 'info',\n  'progress-bar-danger':type == 'danger',\n  'progress-bar-striped':striped,\n  'active':animated\n  }\" v-bind:style=\"{width: now + '%'}\">\n    {{label ? now + '%':'' }}\n  </div>";

/***/ },
/* 242 */
/*!***********************!*\
  !*** ./src/Radio.vue ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-4859501a&file=Radio.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue */ 243)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue */ 245)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/template-rewriter.js?id=_v-4859501a&file=Radio.vue!./../~/vue-loader/lib/selector.js?type=template&index=0!./Radio.vue */ 246)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-4859501a&file=Radio.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Radio.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-4859501a&file=Radio.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Radio.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 243 */
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-4859501a&file=Radio.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Radio.vue ***!
  \****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-4859501a&file=Radio.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue */ 244);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4859501a&file=Radio.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4859501a&file=Radio.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 244 */
/*!***********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-4859501a&file=Radio.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Radio.vue ***!
  \***********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, "input[type='radio'][_v-4859501a] {\n    display: none;\n  }", ""]);
	
	// exports


/***/ },
/* 245 */
/*!*******************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Radio.vue ***!
  \*******************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <label class="btn" :class="{
	//     'active':    checked,
	//     'btn-success': type == 'success',
	//     'btn-warning': type == 'warning',
	//     'btn-info':  type == 'info',
	//     'btn-danger':  type == 'danger',
	//     'btn-default': type == 'default',
	//     'btn-primary': type == 'primary',
	//   }" :title="title">
	//     <input :value="value" :name="$parent.name" :tabindex="tabindex" type="radio" autocomplete="off" :checked="checked" @click="handleClick">
	//     <slot></slot>
	//   </label>
	// </template>
	
	// <script>
	exports.default = {
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
	    checked: function checked() {
	      return this.$parent.value == this.value;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.$parent.value = this.value;
	    }
	  },
	  watch: {
	    value: function value() {
	      this.$emit('input', this.value);
	    }
	  }
	};
	// </script>
	
	// <style scoped>
	//   input[type='radio'] {
	//     display: none;
	//   }
	// </style>

/***/ },
/* 246 */
/*!**********************************************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/template-rewriter.js?id=_v-4859501a&file=Radio.vue!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Radio.vue ***!
  \**********************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\" :class=\"{\n    'active':    checked,\n    'btn-success': type == 'success',\n    'btn-warning': type == 'warning',\n    'btn-info':  type == 'info',\n    'btn-danger':  type == 'danger',\n    'btn-default': type == 'default',\n    'btn-primary': type == 'primary',\n  }\" :title=\"title\" _v-4859501a=\"\">\n    <input :value=\"value\" :name=\"$parent.name\" :tabindex=\"tabindex\" type=\"radio\" autocomplete=\"off\" :checked=\"checked\" @click=\"handleClick\" _v-4859501a=\"\">\n    <slot _v-4859501a=\"\"></slot>\n  </label>";

/***/ },
/* 247 */
/*!****************************!*\
  !*** ./src/RadioGroup.vue ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./RadioGroup.vue */ 248)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./RadioGroup.vue */ 249)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./RadioGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./RadioGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./RadioGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./RadioGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./RadioGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 248 */
/*!************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/RadioGroup.vue ***!
  \************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group" data-toggle="buttons">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    name: String,
	    value: String
	  },
	  watch: {
	    value: function value() {
	      this.$emit('input', this.value);
	    }
	  }
	};
	// </script>

/***/ },
/* 249 */
/*!*****************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/RadioGroup.vue ***!
  \*****************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\n    <slot></slot>\n  </div>";

/***/ },
/* 250 */
/*!************************!*\
  !*** ./src/Select.vue ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-62dbeb6d&file=Select.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Select.vue */ 251)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Select.vue */ 253)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/template-rewriter.js?id=_v-62dbeb6d&file=Select.vue!./../~/vue-loader/lib/selector.js?type=template&index=0!./Select.vue */ 254)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-62dbeb6d&file=Select.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-62dbeb6d&file=Select.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 251 */
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-62dbeb6d&file=Select.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Select.vue ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-62dbeb6d&file=Select.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Select.vue */ 252);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-62dbeb6d&file=Select.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-62dbeb6d&file=Select.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 252 */
/*!*************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-62dbeb6d&file=Select.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Select.vue ***!
  \*************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".bs-searchbox[_v-62dbeb6d] {\n    padding: 4px 8px;\n  }\n\n  .btn-group .dropdown-menu .notify[_v-62dbeb6d] {\n    position: absolute;\n    bottom: 5px;\n    width: 96%;\n    margin: 0 2%;\n    min-height: 26px;\n    padding: 3px 5px;\n    background: #f5f5f5;\n    border: 1px solid #e3e3e3;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n    pointer-events: none;\n    opacity: .9;\n  }", ""]);
	
	// exports


/***/ },
/* 253 */
/*!********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Select.vue ***!
  \********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 80);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="btn-group" :class="{open: show}">
	//     <button ref="btn" type="button" class="btn btn-default dropdown-toggle" @click="toggleDropdown" @blur="show = (search ? show : false)" :disabled="disabled">
	//       <span class="btn-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
	//       <span class="btn-content">{{ selectedItems }}</span>
	//       <span class="caret"></span>
	//     </button>
	//     <ul class="dropdown-menu">
	//       <template v-if="options.length">
	//         <li v-if="search" class="bs-searchbox">
	//           <input type="text" placeholder="Search" v-model="searchText" class="form-control" autocomplete="off">
	//         </li>
	//         <li v-for="option in filteredOptions" :id="option.value" style="position:relative">
	//           <a @mousedown.prevent="select(option.value)" style="cursor:pointer">
	//       {{ option.label }}
	//       <span :class="[iconset, iconset + '-ok']" class="check-mark" v-show="isSelected(option.value)"></span>
	//       </a>
	//         </li>
	//       </template>
	//       <slot v-else></slot>
	//       <transition name="fadein">
	//         <div class="notify" v-show="showNotify">
	//           Limit reached ({{limit}} items max).
	//         </div>
	//       </transition>
	//     </ul>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    options: {
	      type: Array,
	      default: function _default() {
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
	  mounted: function mounted() {
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
	  data: function data() {
	    return {
	      searchText: null,
	      show: false,
	      showNotify: false
	    };
	  },
	
	  computed: {
	    selectedItems: function selectedItems() {
	      var foundItems = [];
	      if (this.value.length) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = (0, _getIterator3.default)(this.value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var item = _step.value;
	
	            if (this.options.length === 0) {
	              //
	              foundItems = this.value;
	            } else {
	              if (typeof item === "string") {
	                var option = void 0;
	                this.options.some(function (o) {
	                  if (o.value === item) {
	                    option = o;
	                    return true;
	                  }
	                });
	                option && foundItems.push(option.label);
	              }
	            }
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
	
	        return foundItems.join(', ');
	      }
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.value.length === 0;
	    },
	    filteredOptions: function filteredOptions() {
	      var _this = this;
	
	      return this.options.filter(function (o) {
	        return o.value.indexOf(_this.searchText) > -1;
	      });
	    }
	  },
	  watch: {
	    value: function value(val) {
	      var _this2 = this;
	
	      if (val.length > this.limit) {
	        this.showNotify = true;
	        this.value.pop();
	        setTimeout(function () {
	          return _this2.showNotify = false;
	        }, 1000);
	      }
	      this.$emit('input', this.value);
	    }
	  },
	  methods: {
	    select: function select(v) {
	      if (this.value.indexOf(v) === -1) {
	        if (this.multiple) {
	          this.value.push(v);
	        } else {
	          this.value = [v];
	        }
	      } else {
	        if (this.multiple) {
	          var index = this.value.indexOf(v);
	          this.value.splice(index, 1);
	        }
	      }
	      if (this.closeOnSelect) {
	        this.toggleDropdown();
	      }
	    },
	    isSelected: function isSelected(v) {
	      if (this.value.constructor !== Array) {
	        return this.value == v;
	      } else {
	        return this.value.indexOf(v) !== -1;
	      }
	    },
	    toggleDropdown: function toggleDropdown() {
	      this.show = !this.show;
	    }
	  }
	};
	// </script>
	
	// <style scoped>
	//   .bs-searchbox {
	//     padding: 4px 8px;
	//   }
	
	//   .btn-group .dropdown-menu .notify {
	//     position: absolute;
	//     bottom: 5px;
	//     width: 96%;
	//     margin: 0 2%;
	//     min-height: 26px;
	//     padding: 3px 5px;
	//     background: #f5f5f5;
	//     border: 1px solid #e3e3e3;
	//     box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
	//     pointer-events: none;
	//     opacity: .9;
	//   }
	// </style>

/***/ },
/* 254 */
/*!************************************************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/template-rewriter.js?id=_v-62dbeb6d&file=Select.vue!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Select.vue ***!
  \************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" :class=\"{open: show}\" _v-62dbeb6d=\"\">\n    <button ref=\"btn\" type=\"button\" class=\"btn btn-default dropdown-toggle\" @click=\"toggleDropdown\" @blur=\"show = (search ? show : false)\" :disabled=\"disabled\" _v-62dbeb6d=\"\">\n      <span class=\"btn-placeholder\" v-show=\"showPlaceholder\" _v-62dbeb6d=\"\">{{placeholder}}</span>\n      <span class=\"btn-content\" _v-62dbeb6d=\"\">{{ selectedItems }}</span>\n      <span class=\"caret\" _v-62dbeb6d=\"\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" _v-62dbeb6d=\"\">\n      <template v-if=\"options.length\" _v-62dbeb6d=\"\">\n        <li v-if=\"search\" class=\"bs-searchbox\" _v-62dbeb6d=\"\">\n          <input type=\"text\" placeholder=\"Search\" v-model=\"searchText\" class=\"form-control\" autocomplete=\"off\" _v-62dbeb6d=\"\">\n        </li>\n        <li v-for=\"option in filteredOptions\" :id=\"option.value\" style=\"position:relative\" _v-62dbeb6d=\"\">\n          <a @mousedown.prevent=\"select(option.value)\" style=\"cursor:pointer\" _v-62dbeb6d=\"\">\n      {{ option.label }}\n      <span :class=\"[iconset, iconset + '-ok']\" class=\"check-mark\" v-show=\"isSelected(option.value)\" _v-62dbeb6d=\"\"></span>\n      </a>\n        </li>\n      </template>\n      <slot v-else=\"\" _v-62dbeb6d=\"\"></slot>\n      <transition name=\"fadein\" _v-62dbeb6d=\"\">\n        <div class=\"notify\" v-show=\"showNotify\" _v-62dbeb6d=\"\">\n          Limit reached ({{limit}} items max).\n        </div>\n      </transition>\n    </ul>\n  </div>";

/***/ },
/* 255 */
/*!*********************!*\
  !*** ./src/Tab.vue ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-24f49718&file=Tab.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue */ 256)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue */ 258)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/template-rewriter.js?id=_v-24f49718&file=Tab.vue!./../~/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue */ 259)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-24f49718&file=Tab.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-24f49718&file=Tab.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 256 */
/*!************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-24f49718&file=Tab.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Tab.vue ***!
  \************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-24f49718&file=Tab.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue */ 257);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-24f49718&file=Tab.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-24f49718&file=Tab.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 257 */
/*!*******************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-24f49718&file=Tab.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Tab.vue ***!
  \*******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".fade-enter-active[_v-24f49718], .fade-leave-active[_v-24f49718] {\n    -webkit-transition: opacity .2s ease;\n    transition: opacity .2s ease;\n  }\n  .fade-enter[_v-24f49718], .fade-leave-active[_v-24f49718] {\n    opacity: 0;\n  }\n  .tab-content > .tab-pane[_v-24f49718] {\n    display: block;\n  }", ""]);
	
	// exports


/***/ },
/* 258 */
/*!*****************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Tab.vue ***!
  \*****************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <transition :name="$parent.effect">
	//     <div role="tabpanel" class="tab-pane" :class="{hide:!show, active:show}" v-show="show" :transition="$parent.effect">
	//       <slot></slot>
	//     </div>
	//   </transition>
	// </template>
	
	// <script>
	exports.default = {
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
	  data: function data() {
	    return {
	      index: 0
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.active == this.index;
	    }
	  },
	  created: function created() {
	    this.$parent.registerTab(this);
	  }
	};
	// </script>
	
	// <style scoped>
	//   .fade-enter-active, .fade-leave-active {
	//     transition: opacity .2s ease;
	//   }
	//   .fade-enter, .fade-leave-active {
	//     opacity: 0;
	//   }
	//   .tab-content > .tab-pane {
	//     display: block;
	//   }
	// </style>

/***/ },
/* 259 */
/*!******************************************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/template-rewriter.js?id=_v-24f49718&file=Tab.vue!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Tab.vue ***!
  \******************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<transition :name=\"$parent.effect\" _v-24f49718=\"\">\n    <div role=\"tabpanel\" class=\"tab-pane\" :class=\"{hide:!show, active:show}\" v-show=\"show\" :transition=\"$parent.effect\" _v-24f49718=\"\">\n      <slot _v-24f49718=\"\"></slot>\n    </div>\n  </transition>";

/***/ },
/* 260 */
/*!**********************!*\
  !*** ./src/Tabs.vue ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-724709a2&file=Tabs.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Tabs.vue */ 261)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Tabs.vue */ 263)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/template-rewriter.js?id=_v-724709a2&file=Tabs.vue!./../~/vue-loader/lib/selector.js?type=template&index=0!./Tabs.vue */ 264)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabs.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-724709a2&file=Tabs.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabs.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-724709a2&file=Tabs.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 261 */
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-724709a2&file=Tabs.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Tabs.vue ***!
  \**************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-724709a2&file=Tabs.vue&scoped=true!./../~/vue-loader/lib/selector.js?type=style&index=0!./Tabs.vue */ 262);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-724709a2&file=Tabs.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabs.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-724709a2&file=Tabs.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 262 */
/*!*********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-724709a2&file=Tabs.vue&scoped=true!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Tabs.vue ***!
  \*********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, "ul[_v-724709a2] {\n    position: relative;\n  }\n\n  .nav-tabs[_v-724709a2] {\n    position: relative;\n    margin-bottom: 15px;\n  }", ""]);
	
	// exports


/***/ },
/* 263 */
/*!******************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Tabs.vue ***!
  \******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 80);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _DropdownLi = __webpack_require__(/*! ./DropdownLi.vue */ 212);
	
	var _DropdownLi2 = _interopRequireDefault(_DropdownLi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    DropdownLi: _DropdownLi2.default
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
	  data: function data() {
	    return {
	      overflowIndex: 0,
	      resizeTimer: false,
	      tabs: []
	    };
	  },
	  created: function created() {
	    window.addEventListener('resize', this.timedReflow);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('resize', this.timedReflow);
	  },
	  mounted: function mounted() {
	    this.$nextTick(this.initTabs);
	  },
	
	  watch: {
	    active: function active() {
	      var child = this.getActiveChild();
	      if (child) {
	        this.$emit('change', child);
	        child.$emit('activated');
	      }
	    }
	  },
	  methods: {
	    isRegularTab: function isRegularTab(tab, index) {
	      return tab.$el.getAttribute('role') == 'tabpanel' && (!this.overflowIndex || index < this.overflowIndex);
	    },
	    isDropdownTab: function isDropdownTab(tab, index) {
	      return tab.$el.getAttribute('role') == 'tabpanel' && this.overflowIndex && index >= this.overflowIndex;
	    },
	    tabclick: function tabclick(tab, index) {
	      if (!tab.disabled) {
	        this.active = index;
	      }
	    },
	    getActiveChild: function getActiveChild() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.$children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var child = _step.value;
	
	          if (child.$el.getAttribute('role') == 'tabpanel' && child.index == this.active) {
	            return child;
	          }
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
	
	      return false;
	    },
	    timedReflow: function timedReflow() {
	      clearTimeout(this.resizeTimer);
	      this.resizeTimer = setTimeout(this.reflow, 100);
	    },
	    findFirstOverflow: function findFirstOverflow(verify) {
	      var tabs = [].slice.call(this.$refs.tabsContainer.children);
	      var i = 0;
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(tabs), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var tab = _step2.value;
	
	          if (tab.nodeName != 'LI' || tab == this.$refs.dropdown.$el) {
	            continue;
	          }
	          if (tab.offsetTop > 0) {
	            this.overflowIndex = i;
	            break;
	          }
	          i++;
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
	
	      if (!verify) {
	        this.$nextTick(function () {
	          this.findFirstOverflow(true);
	        }.bind(this));
	      }
	    },
	    reflow: function reflow() {
	      this.overflowIndex = 0;
	      this.$nextTick(this.findFirstOverflow);
	    },
	    registerTab: function registerTab(tab) {
	      if (!this.$refs.tabContent) {
	        return;
	      }
	      this.initTabs();
	    },
	    initTabs: function initTabs() {
	      this.sortTabs();
	      this.timedReflow();
	    },
	    sortTabs: function sortTabs() {
	      var index = 0;
	      var children = [].slice.call(this.$refs.tabContent.children);
	      this.tabs = [];
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(children), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var pane = _step3.value;
	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;
	
	          try {
	            for (var _iterator4 = (0, _getIterator3.default)(this.$children), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var tab = _step4.value;
	
	              if (tab.$el == pane) {
	                tab.index = index++;
	                this.tabs.push(tab);
	                break;
	              }
	            }
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    }
	  }
	};
	// </script>
	
	// <style scoped>
	//   ul {
	//     position: relative;
	//   }
	
	//   .nav-tabs {
	//     position: relative;
	//     margin-bottom: 15px;
	//   }
	// </style>
	// <template>
	//   <div>
	//     <!-- Nav tabs -->
	//     <ul ref="tabsContainer" class="nav" :class="['nav-' + navStyle]" role="tablist">
	//       <dropdown-li v-show="overflowIndex" ref="dropdown" class="pull-right tabdrop" :class="{'active': active >= overflowIndex}">
	//         <ul slot="dropdown-menu" class="dropdown-menu">
	//           <li v-for="(tab, index) in tabs" v-if="isDropdownTab(tab, index)" @click.prevent="tabclick(tab, index)" :disabled="tab.disabled">
	//             <a href="#">
	//               <span v-if="tab.icon" :class="[iconset, iconset + '-' + tab.icon]"></span>
	//               <span v-html="tab.header"></span>
	//             </a>
	//           </li>
	//         </ul>
	//       </dropdown-li>
	
	//       <li v-for="(tab, index) in tabs" :class="{
	//         'active': (index === active),
	//         'disabled': tab.disabled
	//       }" @click.prevent="tabclick(tab, index)" :disabled="tab.disabled" v-if="isRegularTab(tab, index)">
	//         <a class="tab" href="#">
	//           <span v-if="tab.icon"  :class="[iconset, iconset + '-' + tab.icon]"></span>
	//           <span v-html="tab.header"></span>
	//         </a>
	//       </li>
	//     </ul>
	
	//     <!-- Tab panes -->
	//     <div ref="tabContent" class="tab-content">
	//       <slot></slot>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 264 */
/*!********************************************************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/template-rewriter.js?id=_v-724709a2&file=Tabs.vue!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Tabs.vue ***!
  \********************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div _v-724709a2=\"\">\n    <!-- Nav tabs -->\n    <ul ref=\"tabsContainer\" class=\"nav\" :class=\"['nav-' + navStyle]\" role=\"tablist\" _v-724709a2=\"\">\n      <dropdown-li v-show=\"overflowIndex\" ref=\"dropdown\" class=\"pull-right tabdrop\" :class=\"{'active': active >= overflowIndex}\" _v-724709a2=\"\">\n        <ul slot=\"dropdown-menu\" class=\"dropdown-menu\" _v-724709a2=\"\">\n          <li v-for=\"(tab, index) in tabs\" v-if=\"isDropdownTab(tab, index)\" @click.prevent=\"tabclick(tab, index)\" :disabled=\"tab.disabled\" _v-724709a2=\"\">\n            <a href=\"#\" _v-724709a2=\"\">\n              <span v-if=\"tab.icon\" :class=\"[iconset, iconset + '-' + tab.icon]\" _v-724709a2=\"\"></span>\n              <span v-html=\"tab.header\" _v-724709a2=\"\"></span>\n            </a>\n          </li>\n        </ul>\n      </dropdown-li>\n\n      <li v-for=\"(tab, index) in tabs\" :class=\"{\n        'active': (index === active),\n        'disabled': tab.disabled\n      }\" @click.prevent=\"tabclick(tab, index)\" :disabled=\"tab.disabled\" v-if=\"isRegularTab(tab, index)\" _v-724709a2=\"\">\n        <a class=\"tab\" href=\"#\" _v-724709a2=\"\">\n          <span v-if=\"tab.icon\" :class=\"[iconset, iconset + '-' + tab.icon]\" _v-724709a2=\"\"></span>\n          <span v-html=\"tab.header\" _v-724709a2=\"\"></span>\n        </a>\n      </li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div ref=\"tabContent\" class=\"tab-content\" _v-724709a2=\"\">\n      <slot _v-724709a2=\"\"></slot>\n    </div>\n  </div>";

/***/ },
/* 265 */
/*!*************************!*\
  !*** ./src/Tooltip.vue ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-20602262&file=Tooltip.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue */ 266)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue */ 268)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue */ 269)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 266 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-20602262&file=Tooltip.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Tooltip.vue ***!
  \********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-20602262&file=Tooltip.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue */ 267);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-20602262&file=Tooltip.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-20602262&file=Tooltip.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 267 */
/*!***************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-20602262&file=Tooltip.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Tooltip.vue ***!
  \***************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".tooltip {\n    opacity: .9\n  }", ""]);
	
	// exports


/***/ },
/* 268 */
/*!*********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Tooltip.vue ***!
  \*********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(/*! ./Popover.vue */ 234);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  extends: _Popover2.default,
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
	};
	// </script>
	
	// <style>
	//   .tooltip {
	//     opacity: .9
	//   }
	// </style>
	// <template>
	//   <div>
	//     <span ref="trigger">
	//       <slot></slot>
	//     </span>
	//     <transition :name="effect">
	//       <div ref="popover" class="tooltip" :class="{
	//         'top':    placement === 'top',
	//         'left':   placement === 'left',
	//         'right':  placement === 'right',
	//         'bottom': placement === 'bottom',
	//       }" v-show="show" role="tooltip">
	//         <div class="tooltip-arrow"></div>
	//         <div class="tooltip-inner">
	//           <slot name="content">
	//             <span v-html="content"></span>
	//           </slot>
	//         </div>
	//       </div>
	//     </transition>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 269 */
/*!**************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Tooltip.vue ***!
  \**************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div>\n    <span ref=\"trigger\">\n      <slot></slot>\n    </span>\n    <transition :name=\"effect\">\n      <div ref=\"popover\" class=\"tooltip\" :class=\"{\n        'top':    placement === 'top',\n        'left':   placement === 'left',\n        'right':  placement === 'right',\n        'bottom': placement === 'bottom',\n      }\" v-show=\"show\" role=\"tooltip\">\n        <div class=\"tooltip-arrow\"></div>\n        <div class=\"tooltip-inner\">\n          <slot name=\"content\">\n            <span v-html=\"content\"></span>\n          </slot>\n        </div>\n      </div>\n    </transition>\n  </div>";

/***/ },
/* 270 */
/*!***************************!*\
  !*** ./src/Typeahead.vue ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style-loader!css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-63c3b566&file=Typeahead.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue */ 271)
	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue */ 273)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue */ 275)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 271 */
/*!************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-63c3b566&file=Typeahead.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Typeahead.vue ***!
  \************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/vue-loader/lib/style-rewriter.js?id=_v-63c3b566&file=Typeahead.vue!./../~/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue */ 272);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-63c3b566&file=Typeahead.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-63c3b566&file=Typeahead.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 272 */
/*!*******************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=_v-63c3b566&file=Typeahead.vue!./~/vue-loader/lib/selector.js?type=style&index=0!./src/Typeahead.vue ***!
  \*******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, ".dropdown-menu> li> a {\n    cursor: pointer;\n  }", ""]);
	
	// exports


/***/ },
/* 273 */
/*!***********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Typeahead.vue ***!
  \***********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callAjax = __webpack_require__(/*! ./utils/callAjax.js */ 274);
	
	var _callAjax2 = _interopRequireDefault(_callAjax);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
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
	      default: function _default(items) {
	        this.reset();
	        this.query = items;
	      }
	    },
	    placeholder: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      query: '',
	      showDropdown: false,
	      noResults: true,
	      current: 0,
	      items: []
	    };
	  },
	
	  computed: {
	    primitiveData: function primitiveData() {
	      var _this = this;
	
	      if (this.data) {
	        return this.data.filter(function (value) {
	          value = _this.matchCase ? value : value.toLowerCase();
	          var query = _this.matchCase ? _this.query : _this.query.toLowerCase();
	          return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
	        }).slice(0, this.limit);
	      }
	    }
	  },
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	  mounted: function mounted() {
	    // register a partial:
	    if (this.templateName && this.templateName !== 'default') {
	      Vue.partial(this.templateName, this.template);
	    }
	  },
	
	  methods: {
	    update: function update() {
	      var _this2 = this;
	
	      if (!this.query) {
	        this.reset();
	        return false;
	      }
	      if (this.data) {
	        this.items = this.primitiveData;
	        this.showDropdown = this.items.length ? true : false;
	      }
	      if (this.async) {
	        (0, _callAjax2.default)(this.async + this.query, function (data) {
	          _this2.items = (_this2.key ? data[_this2.key] : data).slice(0, _this2.limit);
	          _this2.showDropdown = _this2.items.length ? true : false;
	        });
	      }
	    },
	    reset: function reset() {
	      this.items = [];
	      this.query = '';
	      this.loading = false;
	      this.showDropdown = false;
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      return this.current === index;
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      this.onHit(this.items[this.current], this);
	    },
	    up: function up() {
	      if (this.current > 0) this.current--;
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) this.current++;
	    },
	    highlight: function highlight(value, phrase) {
	      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
	    }
	  }
	};
	// </script>
	
	// <style>
	//   .dropdown-menu> li> a {
	//     cursor: pointer;
	//   }
	// </style>
	// <template>
	//   <div style="position: relative" v-bind:class="{'open':showDropdown}">
	//     <input type="text" class="form-control" :placeholder="placeholder" autocomplete="off" v-model="query" @input="update" @keydown.up="up" @keydown.down="down" @keydown.enter="hit" @keydown.esc="reset" @blur="showDropdown = false" />
	//     <ul class="dropdown-menu" ref="dropdown">
	//       <li v-for="(item, index) in items" v-bind:class="{'active': isActive(index)}">
	//         <a @mousedown.prevent="hit" @mousemove="setActive(index)">
	//           <partial :name="templateName"></partial>
	//         </a>
	//       </li>
	//     </ul>
	//   </div>
	
	// </template>
	
	// <script>

/***/ },
/* 274 */
/*!*******************************!*\
  !*** ./src/utils/callAjax.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
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

/***/ },
/* 275 */
/*!****************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Typeahead.vue ***!
  \****************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\" v-bind:class=\"{'open':showDropdown}\">\n    <input type=\"text\" class=\"form-control\" :placeholder=\"placeholder\" autocomplete=\"off\" v-model=\"query\" @input=\"update\" @keydown.up=\"up\" @keydown.down=\"down\" @keydown.enter=\"hit\" @keydown.esc=\"reset\" @blur=\"showDropdown = false\" />\n    <ul class=\"dropdown-menu\" ref=\"dropdown\">\n      <li v-for=\"(item, index) in items\" v-bind:class=\"{'active': isActive(index)}\">\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive(index)\">\n          <partial :name=\"templateName\"></partial>\n        </a>\n      </li>\n    </ul>\n  </div>";

/***/ },
/* 276 */
/*!************************!*\
  !*** ./src/Navbar.vue ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue */ 277)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue */ 278)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 277 */
/*!********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Navbar.vue ***!
  \********************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="container-fluid">
	//     <div class="navbar-header">
	//       <slot></slot>
	//     </div>
	//     <slot name="dropdown-menu"></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  methods: {
	    toggleCollapse: function toggleCollapse(e) {
	      e.preventDefault();
	
	      // collapse data-target
	      var tmp = this.$el.querySelector('[data-target]');
	      var id = tmp.getAttribute('data-target');
	      var o = document.getElementById(id.substring(1));
	      o.classList.toggle('collapse');
	    },
	    outerClick: function outerClick(e) {
	      if (!this.$el.contains(e.target)) {
	        this.$el.classList.remove('open');
	      }
	    }
	  },
	  mounted: function mounted() {
	    var toggle = this.$el.querySelector('[data-toggle="collapse"]');
	    if (toggle) {
	      toggle.style.borderRadius = '4px';
	      toggle.addEventListener('click', this.toggleCollapse);
	    }
	    window.addEventListener('click', this.outerClick);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('click', this.outerClick);
	  }
	};
	// </script>

/***/ },
/* 278 */
/*!*************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Navbar.vue ***!
  \*************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <slot></slot>\n    </div>\n    <slot name=\"dropdown-menu\"></slot>\n  </div>";

/***/ },
/* 279 */
/*!*************************!*\
  !*** ./src/Spinner.vue ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! -!babel!./../~/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue */ 280)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(/*! -!vue-html-loader!./../~/vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue */ 283)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 280 */
/*!*********************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Spinner.vue ***!
  \*********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(/*! ./spinner.scss */ 281);
	
	var MIN_WAIT = 500; // in ms
	
	// <template>
	//   <div class="spinner spinner-gritcode" :class="[spinnerSize, {'spinner-fixed': fixed}]" v-show="active">
	//     <div class="spinner-wrapper">
	//       <div class="spinner-circle"></div>
	//       <div class="spinner-text">{{text}}</div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	// import styling
	exports.default = {
	  data: function data() {
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
	    spinnerSize: function spinnerSize() {
	      return this.size ? 'spinner-' + this.size : 'spinner-sm';
	    }
	  },
	  methods: {
	    getMinWait: function getMinWait() {
	      var delay = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	      return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay;
	    },
	    show: function show(options) {
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
	    hide: function hide() {
	      var _this = this;
	
	      var delay = 0;
	      this._spinnerAnimation = setTimeout(function () {
	        _this.active = false;
	        document.body.style.overflowY = _this._bodyOverflow;
	      }, this.getMinWait(delay));
	    }
	  },
	  destroyed: function destroyed() {
	    clearTimeout(this._spinnerAnimation);
	    document.body.style.overflowY = this._bodyOverflow;
	  },
	  mounted: function mounted() {
	    this._bodyOverflow = document.body.style.overflowY || '';
	  }
	};
	// </script>

/***/ },
/* 281 */
/*!**************************!*\
  !*** ./src/spinner.scss ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/sass-loader!./spinner.scss */ 282);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./spinner.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./spinner.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 282 */
/*!*********************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/spinner.scss ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n *\n * Spinner\n * With fallback to IE9\n *\n */\n@keyframes spin {\n  100% {\n    transform: rotate(360deg); } }\n\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9); }\n  .spinner-gritcode.spinner-fixed {\n    position: fixed; }\n  .spinner-gritcode .spinner-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n  .spinner-gritcode .spinner-circle {\n    position: relative;\n    border: 4px solid #ccc;\n    border-right-color: #337ab7;\n    border-radius: 50%;\n    display: inline-block;\n    animation: spin 0.6s linear;\n    animation-iteration-count: infinite;\n    width: 3em;\n    height: 3em;\n    z-index: 2; }\n  .spinner-gritcode .spinner-text {\n    position: relative;\n    text-align: center;\n    margin-top: 0.5em;\n    z-index: 2;\n    width: 100%;\n    font-size: 95%;\n    color: #337ab7; }\n\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em; }\n\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em; }\n\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em; }\n\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em; }\n\n.ie9 .spinner-gritcode .spinner-circle,\n.lt-ie10 .spinner-gritcode .spinner-circle,\n.no-csstransforms3d .spinner-gritcode .spinner-circle,\n.no-csstransitions .spinner-gritcode .spinner-circle,\n.oldie .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px; }\n", ""]);
	
	// exports


/***/ },
/* 283 */
/*!**************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Spinner.vue ***!
  \**************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"spinner spinner-gritcode\" :class=\"[spinnerSize, {'spinner-fixed': fixed}]\" v-show=\"active\">\n    <div class=\"spinner-wrapper\">\n      <div class=\"spinner-circle\"></div>\n      <div class=\"spinner-text\">{{text}}</div>\n    </div>\n  </div>";

/***/ },
/* 284 */
/*!******************************!*\
  !*** ./docs/assets/docs.css ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader?root=./docs!./docs.css */ 285);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?root=./docs!./docs.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?root=./docs!./docs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 285 */
/*!*********************************************************!*\
  !*** ./~/css-loader?root=./docs!./docs/assets/docs.css ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap Docs (http://getbootstrap.com)\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see http://creativecommons.org/licenses/by/3.0/.\n */\n\n\n/*\n * Bootstrap Documentation\n * Special styles for presenting Bootstrap's documentation and code examples.\n *\n * Table of contents:\n *\n * Scaffolding\n * Main navigation\n * Footer\n * Social buttons\n * Homepage\n * Page headers\n * Old docs callout\n * Ads\n * Side navigation\n * Docs sections\n * Callouts\n * Grid styles\n * Examples\n * Code snippets (highlight)\n * Responsive tests\n * Glyphicons\n * Customizer\n * MenuItem\n * Miscellaneous\n */\n\n\n/*\n * Scaffolding\n *\n * Update the basics of our documents to prep for docs content.\n */\n\nbody {\n  position: relative; /* For scrollspy */\n}\n\n/* Keep code small in tables on account of limited space */\n.table code {\n  font-size: 13px;\n  font-weight: normal;\n}\n\n/* Outline button for use within the docs */\n.btn-outline {\n  color: #563d7c;\n  background-color: transparent;\n  border-color: #563d7c;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n/* Inverted outline button (white on dark) */\n.btn-outline-inverse {\n  color: #fff;\n  background-color: transparent;\n  border-color: #cdbfe3;\n}\n.btn-outline-inverse:hover,\n.btn-outline-inverse:focus,\n.btn-outline-inverse:active {\n  color: #563d7c;\n  text-shadow: none;\n  background-color: #fff;\n  border-color: #fff;\n}\n\n/* Bootstrap \"B\" icon */\n.bs-docs-booticon {\n  display: block;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  cursor: default;\n  background-color: #563d7c;\n  border-radius: 15%;\n}\n.bs-docs-booticon-sm {\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  line-height: 28px;\n}\n.bs-docs-booticon-lg {\n  width: 144px;\n  height: 144px;\n  font-size: 108px;\n  line-height: 140px;\n}\n.bs-docs-booticon-inverse {\n  color: #563d7c;\n  background-color: #fff;\n}\n.bs-docs-booticon-outline {\n  background-color: transparent;\n  border: 1px solid #cdbfe3;\n}\n\n\n/*\n * Main navigation\n *\n * Turn the `.navbar` at the top of the docs purple.\n */\n\n.bs-docs-nav {\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 0;\n}\n.bs-home-nav .bs-nav-b {\n  display: none;\n}\n.bs-docs-nav .navbar-brand,\n.bs-docs-nav .navbar-nav > li > a {\n  font-weight: 500;\n  color: #563d7c;\n}\n.bs-docs-nav .navbar-nav > li > a:hover,\n.bs-docs-nav .navbar-nav > .active > a,\n.bs-docs-nav .navbar-nav > .active > a:hover {\n  color: #463265;\n  background-color: #f9f9f9;\n}\n.bs-docs-nav .navbar-toggle .icon-bar {\n  background-color: #563d7c;\n}\n.bs-docs-nav .navbar-header .navbar-toggle {\n  border-color: #fff;\n}\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\n  background-color: #f9f9f9;\n  border-color: #f9f9f9;\n}\n\n\n/*\n * Footer\n *\n * Separated section of content at the bottom of all pages, save the homepage.\n */\n\n.bs-docs-footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 100px;\n  color: #777;\n  text-align: center;\n  border-top: 1px solid #e5e5e5;\n}\n.bs-docs-footer-links {\n  padding-left: 0;\n  margin-top: 20px;\n  color: #999;\n}\n.bs-docs-footer-links li {\n  display: inline;\n  padding: 0 2px;\n}\n.bs-docs-footer-links li:first-child {\n  padding-left: 0;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-footer p {\n    margin-bottom: 0;\n  }\n}\n\n\n/*\n * Social buttons\n *\n * Twitter and GitHub social action buttons (for homepage and footer).\n */\n\n.bs-docs-social {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.bs-docs-social-buttons {\n  display: inline-block;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.bs-docs-social-buttons li {\n  display: inline-block;\n  padding: 5px 8px;\n  line-height: 1;\n}\n.bs-docs-social-buttons .twitter-follow-button {\n  width: 225px !important;\n}\n.bs-docs-social-buttons .twitter-share-button {\n  width: 98px !important;\n}\n/* Style the GitHub buttons via CSS instead of inline attributes */\n.github-btn {\n  overflow: hidden;\n  border: 0;\n}\n\n\n/*\n * Homepage\n *\n * Tweaks to the custom homepage and the masthead (main jumbotron).\n */\n\n/* Share masthead with page headers */\n.bs-docs-masthead,\n.bs-docs-header {\n  position: relative;\n  padding: 30px 15px;\n  color: #cdbfe3;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,.1);\n  background-color: #6f5499;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:      -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:         linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\n  background-repeat: repeat-x;\n}\n\n/* Masthead (headings and download button) */\n.bs-docs-masthead .bs-docs-booticon {\n  margin: 0 auto 30px;\n}\n.bs-docs-masthead h1 {\n  font-weight: 300;\n  line-height: 1;\n  color: #fff;\n}\n.bs-docs-masthead .lead {\n  margin: 0 auto 30px;\n  font-size: 20px;\n  color: #fff;\n}\n.bs-docs-masthead .version {\n  margin-top: -15px;\n  margin-bottom: 30px;\n  color: #9783b9;\n}\n.bs-docs-masthead .btn {\n  width: 100%;\n  padding: 15px 30px;\n  font-size: 20px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-masthead .btn {\n    width: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .bs-docs-masthead h1 {\n    font-size: 60px;\n  }\n  .bs-docs-masthead .lead {\n    font-size: 24px;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-masthead .lead {\n    width: 80%;\n    font-size: 30px;\n  }\n}\n\n\n/*\n * Page headers\n *\n * Jumbotron-esque headers at the top of every page that's not the homepage.\n */\n\n/* Page headers */\n.bs-docs-header {\n  margin-bottom: 40px;\n  font-size: 20px;\n}\n.bs-docs-header h1 {\n  margin-top: 0;\n  color: #fff;\n}\n.bs-docs-header p {\n  margin-bottom: 0;\n  font-weight: 300;\n  line-height: 1.4;\n}\n.bs-docs-header .container {\n  position: relative;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-header {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    font-size: 24px;\n    text-align: left;\n  }\n  .bs-docs-header h1 {\n    font-size: 60px;\n    line-height: 1;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-header h1,\n  .bs-docs-header p {\n    margin-right: 380px;\n  }\n}\n\n\n/*\n * Carbon ads\n *\n * Single display ad that shows on all pages (except homepage) in page headers.\n * The hella `!important` is required for any pre-set property.\n */\n\n.carbonad {\n  width: auto !important;\n  height: auto !important;\n  padding: 20px !important;\n  margin: 30px -30px -31px !important;\n  overflow: hidden; /* clearfix */\n  font-size: 13px !important;\n  line-height: 16px !important;\n  text-align: left;\n  background: transparent !important;\n  border: solid #866ab3 !important;\n  border-width: 1px 0 !important;\n}\n.carbonad-img {\n  margin: 0 !important;\n}\n.carbonad-text,\n.carbonad-tag {\n  display: block !important;\n  float: none !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: 145px !important;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n}\n.carbonad-text {\n  padding-top: 0 !important;\n}\n.carbonad-tag {\n  color: inherit !important;\n  text-align: left !important;\n}\n.carbonad-text a,\n.carbonad-tag a {\n  color: #fff !important;\n}\n.carbonad #azcarbon > img {\n  display: none; /* hide what I assume are tracking images */\n}\n\n@media (min-width: 480px) {\n  .carbonad {\n    width: 330px !important;\n    margin: 20px auto !important;\n    border-width: 1px !important;\n    border-radius: 4px;\n  }\n  .bs-docs-masthead .carbonad {\n    margin: 50px auto 0 !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .carbonad {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .carbonad {\n    position: absolute;\n    top: 0;\n    right: 15px; /* 15px instead of 0 since box-sizing */\n    width: 330px !important;\n    padding: 15px !important;\n    margin: 0 !important;\n  }\n  .bs-docs-masthead .carbonad {\n    position: static;\n  }\n}\n\n\n/*\n * Homepage featurettes\n *\n * Reasons to use Bootstrap, entries from the Expo, and more.\n */\n\n.bs-docs-featurette {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #555;\n  text-align: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e5e5e5;\n}\n.bs-docs-featurette + .bs-docs-footer {\n  margin-top: 0;\n  border-top: 0;\n}\n\n.bs-docs-featurette-title {\n  margin-bottom: 5px;\n  font-size: 30px;\n  font-weight: normal;\n  color: #333;\n}\n.half-rule {\n  width: 100px;\n  margin: 40px auto;\n}\n.bs-docs-featurette h3 {\n  margin-bottom: 5px;\n  font-weight: normal;\n  color: #333;\n}\n.bs-docs-featurette-img {\n  display: block;\n  margin-bottom: 20px;\n  color: #333;\n}\n.bs-docs-featurette-img:hover {\n  color: #428bca;\n  text-decoration: none;\n}\n.bs-docs-featurette-img img {\n  display: block;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-featurette .img-responsive {\n    margin-top: 30px;\n  }\n}\n@media (min-width: 768px) {\n  .bs-docs-featurette {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n  .bs-docs-featurette-title {\n    font-size: 40px;\n  }\n  .bs-docs-featurette .lead {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .bs-docs-featured-sites .col-sm-3:first-child img {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  .bs-docs-featured-sites .col-sm-3:last-child img {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n\n  .bs-docs-featurette .img-responsive {\n    margin-top: 0;\n  }\n}\n\n/* Featured sites */\n.bs-docs-featured-sites {\n  margin-right: -1px;\n  margin-left: -1px;\n}\n.bs-docs-featured-sites .col-sm-3 {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n.bs-docs-featured-sites .img-responsive {\n  margin-bottom: 15px;\n}\n@media (min-width: 480px) {\n  .bs-docs-featured-sites .img-responsive {\n    margin-bottom: 0;\n  }\n}\n\n/* Example thumbnails */\n@media (max-width: 480px) {\n  .bs-examples {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n  .bs-examples > [class^=\"col-\"] {\n    padding-right: 10px;\n    padding-left: 10px;\n  }\n}\n\n\n/*\n * Side navigation\n *\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\n * sections of docs content.\n */\n\n/* By default it's not affixed in mobile views, so undo that */\n.bs-docs-sidebar.affix {\n  position: static;\n}\n@media (min-width: 768px) {\n  .bs-docs-sidebar {\n    padding-left: 20px;\n  }\n}\n\n/* First level of nav */\n.bs-docs-sidenav {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n/* All levels of nav */\n.bs-docs-sidebar .nav > li > a {\n  display: block;\n  padding: 4px 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #999;\n}\n.bs-docs-sidebar .nav > li > a:hover,\n.bs-docs-sidebar .nav > li > a:focus {\n  padding-left: 19px;\n  color: #1D976C;\n  text-decoration: none;\n  background-color: transparent;\n  border-left: 1px solid #1D976C;\n}\n.bs-docs-sidebar .nav > .active > a,\n.bs-docs-sidebar .nav > .active:hover > a,\n.bs-docs-sidebar .nav > .active:focus > a {\n  padding-left: 18px;\n  font-weight: bold;\n  color: #1D976C;\n  background-color: transparent;\n  border-left: 2px solid #1D976C;\n}\n\n/* Nav: second level (shown on .active) */\n.bs-docs-sidebar .nav .nav {\n  display: none; /* Hide by default, but at >768px, show it */\n  padding-bottom: 10px;\n}\n.bs-docs-sidebar .nav .nav > li > a {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 30px;\n  font-size: 12px;\n  font-weight: normal;\n}\n.bs-docs-sidebar .nav .nav > li > a:hover,\n.bs-docs-sidebar .nav .nav > li > a:focus {\n  padding-left: 29px;\n}\n.bs-docs-sidebar .nav .nav > .active > a,\n.bs-docs-sidebar .nav .nav > .active:hover > a,\n.bs-docs-sidebar .nav .nav > .active:focus > a {\n  padding-left: 28px;\n  font-weight: 500;\n}\n\n/* Back to top (hidden on mobile) */\n.back-to-top,\n.bs-docs-theme-toggle {\n  display: none;\n  padding: 4px 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #999;\n}\n.back-to-top:hover,\n.bs-docs-theme-toggle:hover {\n  color: #563d7c;\n  text-decoration: none;\n}\n.bs-docs-theme-toggle {\n  margin-top: 0;\n}\n\n@media (min-width: 768px) {\n  .back-to-top,\n  .bs-docs-theme-toggle {\n    display: block;\n  }\n}\n\n/* Show and affix the side nav when space allows it */\n@media (min-width: 992px) {\n  .bs-docs-sidebar .nav > .active > ul {\n    display: block;\n  }\n  /* Widen the fixed sidebar */\n  .bs-docs-sidebar.affix,\n  .bs-docs-sidebar.affix-bottom {\n    width: 213px;\n  }\n  .bs-docs-sidebar.affix {\n    position: fixed; /* Undo the static from mobile first approach */\n    top: 20px;\n  }\n  .bs-docs-sidebar.affix-bottom {\n    position: absolute; /* Undo the static from mobile first approach */\n  }\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1200px) {\n  /* Widen the fixed sidebar again */\n  .bs-docs-sidebar.affix-bottom,\n  .bs-docs-sidebar.affix {\n    width: 263px;\n  }\n}\n\n\n/*\n * Docs sections\n *\n * Content blocks for each component or feature.\n */\n\n/* Space things out */\n.bs-docs-section {\n  margin-bottom: 60px;\n}\n.bs-docs-section:last-child {\n  margin-bottom: 0;\n}\n\nh1[id] {\n  padding-top: 20px;\n  margin-top: 0;\n}\n\n\n/*\n * Callouts\n *\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\n * Requires a base and modifier class.\n */\n\n/* Common styles for all types */\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px;\n}\n.bs-callout h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n  margin-bottom: 0;\n}\n.bs-callout code {\n  border-radius: 3px;\n}\n\n/* Tighten up space between multiple callouts */\n.bs-callout + .bs-callout {\n  margin-top: -5px;\n}\n\n/* Variations */\n.bs-callout-danger {\n  border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n  color: #d9534f;\n}\n.bs-callout-warning {\n  border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n  color: #f0ad4e;\n}\n.bs-callout-info {\n  border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n  color: #5bc0de;\n}\n\n\n/*\n * Color swatches\n *\n * Color swatches and associated values for our grayscale and brand colors.\n */\n\n.color-swatches {\n  margin: 0 -5px;\n  overflow: hidden; /* clearfix */\n}\n.color-swatch {\n  float: left;\n  width: 60px;\n  height: 60px;\n  margin: 0 5px;\n  border-radius: 3px;\n}\n\n@media (min-width: 768px) {\n  .color-swatch {\n    width: 100px;\n    height: 100px;\n  }\n}\n\n/* Framework colors */\n.color-swatches .gray-darker {\n  background-color: #222;\n}\n.color-swatches .gray-dark {\n  background-color: #333;\n}\n.color-swatches .gray {\n  background-color: #555;\n}\n.color-swatches .gray-light {\n  background-color: #999;\n}\n.color-swatches .gray-lighter {\n  background-color: #eee;\n}\n.color-swatches .brand-primary {\n  background-color: #428bca;\n}\n.color-swatches .brand-success {\n  background-color: #5cb85c;\n}\n.color-swatches .brand-warning {\n  background-color: #f0ad4e;\n}\n.color-swatches .brand-danger {\n  background-color: #d9534f;\n}\n.color-swatches .brand-info {\n  background-color: #5bc0de;\n}\n\n/* Docs colors */\n.color-swatches .bs-purple {\n  background-color: #563d7c;\n}\n.color-swatches .bs-purple-light {\n  background-color: #c7bfd3;\n}\n.color-swatches .bs-purple-lighter {\n  background-color: #e5e1ea;\n}\n.color-swatches .bs-gray {\n  background-color: #f9f9f9;\n}\n\n\n/*\n * Team members\n *\n * Avatars, names, and usernames for core team.\n */\n\n.bs-team .team-member {\n  line-height: 32px;\n  color: #555;\n}\n.bs-team .team-member:hover {\n  color: #333;\n  text-decoration: none;\n}\n.bs-team .github-btn {\n  float: right;\n  width: 180px;\n  height: 20px;\n  margin-top: 6px;\n}\n.bs-team img {\n  float: left;\n  width: 32px;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n\n\n/*\n * Grid examples\n *\n * Highlight the grid columns within the docs so folks can see their padding,\n * alignment, sizing, etc.\n */\n\n.show-grid {\n  margin-bottom: 15px;\n}\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: #eee;\n  background-color: rgba(86,61,124,.15);\n  border: 1px solid #ddd;\n  border: 1px solid rgba(86,61,124,.2);\n}\n\n\n/*\n * Examples\n *\n * Isolated sections of example content for each component or feature. Usually\n * followed by a code snippet.\n */\n\n.bs-example {\n  position: relative;\n  padding: 45px 15px 15px;\n  margin: 0 -15px 15px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n          box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n}\n/* Echo out a label for the example */\n.bs-example:after {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #959595;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  content: \"Example\";\n}\n\n/* Tweak display of the code snippets when following an example */\n.bs-example + .highlight {\n  margin: -15px -15px 15px;\n  border-width: 0 0 1px;\n  border-radius: 0;\n}\n\n/* Make the examples and snippets not full-width */\n@media (min-width: 768px) {\n  .bs-example {\n    margin-right: 0;\n    margin-left: 0;\n    background-color: #fff;\n    border-color: #ddd;\n    border-width: 1px;\n    border-radius: 4px 4px 0 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .bs-example + .highlight {\n    margin-top: -16px;\n    margin-right: 0;\n    margin-left: 0;\n    border-width: 1px;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n}\n\n/* Undo width of container */\n.bs-example .container {\n  width: auto;\n}\n\n/* Tweak content of examples for optimum awesome */\n.bs-example > p:last-child,\n.bs-example > ul:last-child,\n.bs-example > ol:last-child,\n.bs-example > blockquote:last-child,\n.bs-example > .form-control:last-child,\n.bs-example > .table:last-child,\n.bs-example > .navbar:last-child,\n.bs-example > .jumbotron:last-child,\n.bs-example > .alert:last-child,\n.bs-example > .panel:last-child,\n.bs-example > .list-group:last-child,\n.bs-example > .well:last-child,\n.bs-example > .progress:last-child,\n.bs-example > .table-responsive:last-child > .table {\n  margin-bottom: 0;\n}\n.bs-example > p > .close {\n  float: none;\n}\n\n/* Typography */\n.bs-example-type .table .type-info {\n  color: #999;\n  vertical-align: middle;\n}\n.bs-example-type .table td {\n  padding: 15px 0;\n  border-color: #eee;\n}\n.bs-example-type .table tr:first-child td {\n  border-top: 0;\n}\n.bs-example-type h1,\n.bs-example-type h2,\n.bs-example-type h3,\n.bs-example-type h4,\n.bs-example-type h5,\n.bs-example-type h6 {\n  margin: 0;\n}\n\n/* Contextual background colors */\n.bs-example-bg-classes p {\n  padding: 15px;\n}\n\n/* Images */\n.bs-example > .img-circle,\n.bs-example > .img-rounded,\n.bs-example > .img-thumbnail {\n  margin: 5px;\n}\n\n/* Tables */\n.bs-example > .table-responsive > .table {\n  background-color: #fff;\n}\n\n/* Buttons */\n.bs-example > .btn,\n.bs-example > .btn-group {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.bs-example > .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n/* Forms */\n.bs-example-control-sizing select,\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\n  margin-top: 10px;\n}\n.bs-example-form .input-group {\n  margin-bottom: 10px;\n}\n.bs-example > textarea.form-control {\n  resize: vertical;\n}\n\n/* List groups */\n.bs-example > .list-group {\n  max-width: 400px;\n}\n\n/* Navbars */\n.bs-example .navbar:last-child {\n  margin-bottom: 0;\n}\n.bs-navbar-top-example,\n.bs-navbar-bottom-example {\n  z-index: 1;\n  padding: 0;\n  overflow: hidden; /* cut the drop shadows off */\n}\n.bs-navbar-top-example .navbar-header,\n.bs-navbar-bottom-example .navbar-header {\n  margin-left: 0;\n}\n.bs-navbar-top-example .navbar-fixed-top,\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  position: relative;\n  margin-right: 0;\n  margin-left: 0;\n}\n.bs-navbar-top-example {\n  padding-bottom: 45px;\n}\n.bs-navbar-top-example:after {\n  top: auto;\n  bottom: 15px;\n}\n.bs-navbar-top-example .navbar-fixed-top {\n  top: -1px;\n}\n.bs-navbar-bottom-example {\n  padding-top: 45px;\n}\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  bottom: -1px;\n}\n.bs-navbar-bottom-example .navbar {\n  margin-bottom: 0;\n}\n@media (min-width: 768px) {\n  .bs-navbar-top-example .navbar-fixed-top,\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\n    position: absolute;\n  }\n}\n\n/* Pagination */\n.bs-example .pagination {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n/* Pager */\n.bs-example > .pager {\n  margin-top: 0;\n}\n\n/* Example modals */\n.bs-example-modal {\n  background-color: #f5f5f5;\n}\n.bs-example-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  z-index: 1;\n  display: block;\n}\n.bs-example-modal .modal-dialog {\n  left: auto;\n  margin-right: auto;\n  margin-left: auto;\n}\n.custom-modal {\n  width: 90%;\n}\n\n/* Example dropdowns */\n.bs-example > .dropdown > .dropdown-toggle {\n  float: left;\n}\n.bs-example > .dropdown > .dropdown-menu {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n/* Example tabbable tabs */\n.bs-example-tabs .nav-tabs {\n  margin-bottom: 15px;\n}\n\n/* Tooltips */\n.bs-example-tooltips {\n  text-align: center;\n}\n.bs-example-tooltips > .btn {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n/* Popovers */\n.bs-example-popover {\n  padding-bottom: 24px;\n  background-color: #f9f9f9;\n}\n.bs-example-popover .popover {\n  position: relative;\n  display: block;\n  float: left;\n  width: 260px;\n  margin: 20px;\n}\n\n/* Scrollspy demo on fixed height div */\n.scrollspy-example {\n  position: relative;\n  height: 200px;\n  margin-top: 10px;\n  overflow: auto;\n}\n\n/* MenuItem */\n.bs-example .dropdown-menu.open {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n\n/*\n * Code snippets\n *\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\n */\n\n.highlight {\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px;\n}\n.highlight pre {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  word-break: normal;\n  word-wrap: nowrap;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.highlight pre code {\n  font-size: inherit;\n  color: #333; /* Effectively the base text color */\n}\n.highlight pre code:first-child {\n  display: inline-block;\n  padding-right: 45px;\n}\n\n\n/*\n * Responsive tests\n *\n * Generate a set of tests to show the responsive utilities in action.\n */\n\n/* Responsive (scrollable) doc tables */\n.table-responsive .highlight pre {\n  white-space: normal;\n}\n\n/* Utility classes table  */\n.bs-table th small,\n.responsive-utilities th small {\n  display: block;\n  font-weight: normal;\n  color: #999;\n}\n.responsive-utilities tbody th {\n  font-weight: normal;\n}\n.responsive-utilities td {\n  text-align: center;\n}\n.responsive-utilities td.is-visible {\n  color: #468847;\n  background-color: #dff0d8 !important;\n}\n.responsive-utilities td.is-hidden {\n  color: #ccc;\n  background-color: #f9f9f9 !important;\n}\n\n/* Responsive tests */\n.responsive-utilities-test {\n  margin-top: 5px;\n}\n.responsive-utilities-test .col-xs-6 {\n  margin-bottom: 10px;\n}\n.responsive-utilities-test span {\n  display: block;\n  padding: 15px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.1;\n  text-align: center;\n  border-radius: 4px;\n}\n.visible-on .col-xs-6 .hidden-xs,\n.visible-on .col-xs-6 .hidden-sm,\n.visible-on .col-xs-6 .hidden-md,\n.visible-on .col-xs-6 .hidden-lg,\n.hidden-on .col-xs-6 .hidden-xs,\n.hidden-on .col-xs-6 .hidden-sm,\n.hidden-on .col-xs-6 .hidden-md,\n.hidden-on .col-xs-6 .hidden-lg {\n  color: #999;\n  border: 1px solid #ddd;\n}\n.visible-on .col-xs-6 .visible-xs-block,\n.visible-on .col-xs-6 .visible-sm-block,\n.visible-on .col-xs-6 .visible-md-block,\n.visible-on .col-xs-6 .visible-lg-block,\n.hidden-on .col-xs-6 .visible-xs-block,\n.hidden-on .col-xs-6 .visible-sm-block,\n.hidden-on .col-xs-6 .visible-md-block,\n.hidden-on .col-xs-6 .visible-lg-block {\n  color: #468847;\n  background-color: #dff0d8;\n  border: 1px solid #d6e9c6;\n}\n\n\n/*\n * Glyphicons\n *\n * Special styles for displaying the icons and their classes in the docs.\n */\n\n.bs-glyphicons {\n  margin: 0 -10px 20px;\n  overflow: hidden;\n}\n.bs-glyphicons-list {\n  padding-left: 0;\n  list-style: none;\n}\n.bs-glyphicons li {\n  float: left;\n  width: 25%;\n  height: 115px;\n  padding: 10px;\n  font-size: 10px;\n  line-height: 1.4;\n  text-align: center;\n  background-color: #f9f9f9;\n  border: 1px solid #fff;\n}\n.bs-glyphicons .glyphicon {\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n.bs-glyphicons .glyphicon-class {\n  display: block;\n  text-align: center;\n  word-wrap: break-word; /* Help out IE10+ with class names */\n}\n.bs-glyphicons li:hover {\n  color: #fff;\n  background-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .bs-glyphicons {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .bs-glyphicons li {\n    width: 12.5%;\n    font-size: 12px;\n  }\n}\n\n\n/*\n * Customizer\n *\n * Since this is so form control heavy, we have quite a few styles to customize\n * the display of inputs, headings, and more. Also included are all the download\n * buttons and actions.\n */\n\n.bs-customizer .toggle {\n  float: right;\n  margin-top: 25px;\n}\n\n/* Headings and form contrls */\n.bs-customizer label {\n  margin-top: 10px;\n  font-weight: 500;\n  color: #555;\n}\n.bs-customizer h2 {\n  padding-top: 30px;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-customizer h3 {\n  margin-bottom: 0;\n}\n.bs-customizer h4 {\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n.bs-customizer .bs-callout h4 {\n  margin-top: 0; /* lame, but due to specificity we have to duplicate */\n  margin-bottom: 5px;\n}\n.bs-customizer input[type=\"text\"] {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  background-color: #fafafa;\n}\n.bs-customizer .help-block {\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n/* For the variables, use regular weight */\n#less-section label {\n  font-weight: normal;\n}\n\n.bs-customizer-input {\n  float: left;\n  width: 33.333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n/* Downloads */\n.bs-customize-download .btn-outline {\n  padding: 20px;\n}\n\n/* Error handling */\n.bs-customizer-alert {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  padding: 15px 0;\n  color: #fff;\n  background-color: #d9534f;\n  border-bottom: 1px solid #b94441;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n          box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n}\n.bs-customizer-alert .close {\n  margin-top: -4px;\n  font-size: 24px;\n}\n.bs-customizer-alert p {\n  margin-bottom: 0;\n}\n.bs-customizer-alert .glyphicon {\n  margin-right: 5px;\n}\n.bs-customizer-alert pre {\n  margin: 10px 0 0;\n  color: #fff;\n  background-color: #a83c3a;\n  border-color: #973634;\n  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n          box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n}\n\n\n/*\n * Brand guidelines\n *\n * Extra styles for displaying wordmarks, logos, etc.\n */\n\n/* Logo series wrapper */\n.bs-brand-logos {\n  display: table;\n  width: 100%;\n  margin-bottom: 15px;\n  overflow: hidden;\n  color: #563d7c;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\n\n/* Individual items */\n.bs-brand-item {\n  padding: 60px 0;\n  text-align: center;\n}\n.bs-brand-item + .bs-brand-item {\n  border-top: 1px solid #fff;\n}\n.bs-brand-logos .inverse {\n  color: #fff;\n  background-color: #563d7c;\n}\n.bs-brand-item .svg {\n  width: 144px;\n  height: 144px;\n}\n\n/* Heading content within */\n.bs-brand-item h1,\n.bs-brand-item h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.bs-brand-item .bs-docs-booticon {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/* Make the icons stand out on what is/isn't okay */\n.bs-brand-item .glyphicon {\n  width: 30px;\n  height: 30px;\n  margin: 10px auto -10px;\n  line-height: 30px;\n  color: #fff;\n  border-radius: 50%;\n}\n.bs-brand-item .glyphicon-ok {\n  background-color: #5cb85c;\n}\n.bs-brand-item .glyphicon-remove {\n  background-color: #d9534f;\n}\n\n@media (min-width: 768px) {\n  .bs-brand-item {\n    display: table-cell;\n    width: 1%;\n  }\n  .bs-brand-item + .bs-brand-item {\n    border-top: 0;\n    border-left: 1px solid #fff;\n  }\n  .bs-brand-item h1 {\n    font-size: 60px;\n  }\n}\n\n\n/*\n * Miscellaneous\n *\n * Odds and ends for optimum docs display.\n */\n\n/* Examples gallery: space out content better */\n.bs-examples .thumbnail {\n  margin-bottom: 10px;\n}\n.bs-examples h4 {\n  margin-bottom: 5px;\n}\n.bs-examples p {\n  margin-bottom: 20px;\n}\n\n/* Pseudo :focus state for showing how it looks in the docs */\n#focusedInput {\n  border-color: rgb(204,204,204); /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\n  border-color: rgba(82,168,236,.8);\n  outline: 0;\n  outline: thin dotted \\9; /* IE6-9 */\n  -webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);\n          box-shadow: 0 0 8px rgba(82,168,236,.6);\n}\n\n\n/*\n * ZeroClipboard styles\n */\n\n.zero-clipboard {\n  position: relative;\n  display: none;\n}\n.btn-clipboard {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  display: block;\n  padding: 5px 8px;\n  font-size: 12px;\n  color: #777;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #e1e1e8;\n  border-radius: 0 4px 0 4px;\n}\n.btn-clipboard-hover {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .zero-clipboard {\n    display: block;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 286 */
/*!*******************************!*\
  !*** ./docs/assets/style.css ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader?root=./docs!./style.css */ 287);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 120)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?root=./docs!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?root=./docs!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 287 */
/*!**********************************************************!*\
  !*** ./~/css-loader?root=./docs!./docs/assets/style.css ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 119)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * React-Bootstrap Documentation\n * Special styles for presenting react-bootstrap's documentation and code examples.\n * Based on the Bootstrap Documentation styles and overridden as necessary.\n */\n\nbody {\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif;\n}\n\npre[class*=\"language-\"] {\n  border-radius: 0;\n  padding: 0;\n}\n\n.bs-docs-section h1 {\n  font-size: 42px\n}\n\n.bs-docs-nav .navbar-nav > li > a {\n  color: #333;\n}\n.bs-docs-footer {\n  padding-top: 20px;\n  text-align: left;\n}\n.bs-docs-nav .navbar-collapse {\n  overflow: hidden;\n}\n.bs-docs-nav {\n    box-shadow: 0 3px 3px rgba(0,0,0,0.175);\n}\n\n.bs-docs-header p {\n  font-weight: lighter;\n}\n\n\n.bs-docs-header a {\n  color: white;\n  font-weight: normal;\n}\n.btn-outline-inverse {\n  border-color: white;\n  transition: color .15s ease;\n}\n.bs-docs-header a:hover,\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\n.bs-docs-nav .navbar-brand {\n  color: #1D976C;\n}\n\n.bs-docs-masthead, .bs-docs-header {\n  background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */\n\n  filter: none;\n  color: #e9e9e9;\n}\n\n.bs-docs-masthead {\n  margin-bottom: 20px;\n}\n\n.bs-docs-header h1 {\n  color: #ffffff;\n}\n\n.bs-docs-header p {\n  color: #ffffff;\n}\n\na.back-to-top {\n  font-size: 13px;\n  margin-top: 0;\n}\n\n.bs-docs-sidebar .nav>li>a {\n  color: #767676;\n  font-size: 14px;\n}\n\n.bs-docs-sidebar .nav>li>a:hover, .bs-docs-sidebar .nav>li>a:focus {\n  color: #42b983;\n  border-left: 1px solid #42b983;\n}\n\n.back-to-top:hover {\n  color: #42b983;\n}\n\n\n.CodeMirror, .CodeMirror-scroll {\n  height: auto;\n}\n\n.bs-example .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n.bs-example .static-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  left: auto;\n  bottom: auto;\n  z-index: 1;\n  display: block;\n}\n\n.bs-docs-booticon {\n  background-size: contain;\n  border: 0;\n  width: 200px;\n  height: 200px;\n}\n\n.bs-example-popover-contained {\n  height: 200px;\n}\n\n.bs-example-popover-contained > div {\n  position: relative;\n}\n\n.bs-example-popover-scroll {\n  overflow: scroll;\n  height: 200px;\n}\n\n.bs-example-popover-scroll > div {\n  position: relative;\n  padding: 100px 0;\n}\n\n.playground {\n  margin-bottom: 36px;\n}\n\n.bs-example {\n  margin-bottom: 0;\n}\n\n.bs-example + .highlight {\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top: none;\n  border-bottom-right-radius: 0;\n}\n\n.code-toggle {\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: -1px;\n  background: #fafafa;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: 1px solid #e1e1e8;\n  border-top: none;\n  padding: 4px 8px;\n}\n\n@media (min-width: 768px) {\n  .code-toggle {\n    background: #fff;\n  }\n}\n\n.code-toggle.open {\n  background: #f8f5ec;\n}\n\n/* Minimal CSS Needed for contained modals */\n.modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n\n.prop-table {\n  background-color: white;\n}\n\n.bs-example.tooltip-static .tooltip {\n  position: relative;\n  display: inline-block;\n  margin: 5px 10px;\n\n}\n\n.bs-example .super-colors {\n  background: -moz-linear-gradient( top ,\n      rgba(255, 0, 0, 1) 0%,\n      rgba(255, 255, 0, 1) 15%,\n      rgba(0, 255, 0, 1) 30%,\n      rgba(0, 255, 255, 1) 50%,\n      rgba(0, 0, 255, 1) 65%,\n      rgba(255, 0, 255, 1) 80%,\n      rgba(255, 0, 0, 1) 100%);\n  background: -webkit-gradient(linear,  left top,  left bottom,\n      color-stop(0%, rgba(255, 0, 0, 1)),\n      color-stop(15%, rgba(255, 255, 0, 1)),\n      color-stop(30%, rgba(0, 255, 0, 1)),\n      color-stop(50%, rgba(0, 255, 255, 1)),\n      color-stop(65%, rgba(0, 0, 255, 1)),\n      color-stop(80%, rgba(255, 0, 255, 1)),\n      color-stop(100%, rgba(255, 0, 0, 1)));\n}\n\n/*.bs-example .custom-menu > ul > li {\n    padding: 0 20px;\n}*/\n\n.anchor,\n.anchor:hover,\n.anchor:active,\n.anchor:focus {\n  color: black;\n  text-decoration: none;\n  position: relative;\n}\n.anchor-icon {\n  font-size: 90%;\n  padding-top: 0.1em;\n  position: absolute;\n  left: -0.8em;\n  opacity: 0;\n}\n\nh1:hover .anchor-icon,\nh1 a:focus .anchor-icon,\nh2:hover .anchor-icon,\nh2 a:focus .anchor-icon,\nh3:hover .anchor-icon,\nh3 a:focus .anchor-icon,\nh4:hover .anchor-icon,\nh4 a:focus .anchor-icon {\n  opacity: 0.5;\n}\n\n.prop-desc pre {\n  border-radius: 0;\n  border-width: 0;\n  border-left-width: 3px;\n}\n\n.prop-desc-heading {\n  margin-bottom: 10px;\n}\n\n.bs-callout {\n    padding: 20px;\n    margin: 20px 0;\n    border: 1px solid #eee;\n    border-left-width: 5px;\n    border-radius: 3px;\n}\n.bs-callout h4 {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n    margin-bottom: 0;\n}\n.bs-callout code {\n    border-radius: 3px;\n}\n.bs-callout+.bs-callout {\n    margin-top: -5px;\n}\n.bs-callout-default {\n    border-left-color: #777;\n}\n.bs-callout-default h4 {\n    color: #777;\n}\n.bs-callout-primary {\n    border-left-color: #428bca;\n}\n.bs-callout-primary h4 {\n    color: #428bca;\n}\n.bs-callout-success {\n    border-left-color: #42b983;\n}\n.bs-callout-success h4 {\n    color: #42b983;\n}\n.bs-callout-danger {\n    border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n    color: #d9534f;\n}\n.bs-callout-warning {\n    border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n    color: #f0ad4e;\n}\n.bs-callout-info {\n    border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n    color: #5bc0de;\n}\n", ""]);
	
	// exports


/***/ },
/* 288 */
/*!****************************!*\
  !*** ./~/prismjs/prism.js ***!
  \****************************/
/***/ function(module, exports) {

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
	
					pattern = pattern.pattern || pattern;
	
					for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop
	
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
							// Reconstruct the original text using the next two tokens
							var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
							    combStr = str + nextToken;
	
							if (i < strarr.length - 2) {
								combStr += strarr[i + 2].matchedStr || strarr[i + 2];
							}
	
							// Try the pattern again on the reconstructed text
							pattern.lastIndex = 0;
							match = pattern.exec(combStr);
							if (!match) {
								continue;
							}
	
							var from = match.index + (lookbehind ? match[1].length : 0);
							// To be a valid candidate, the new match has to start inside of str
							if (from >= str.length) {
								continue;
							}
							var to = match.index + match[0].length,
							    len = str.length + nextToken.length;
	
							// Number of tokens to delete and replace with the new match
							delNum = 3;
	
							if (to <= len) {
								if (strarr[i + 1].greedy) {
									continue;
								}
								delNum = 2;
								combStr = combStr.slice(0, len);
							}
							str = combStr;
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
		this.matchedStr = matchedStr || null;
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
	
		var attributes = '';
	
		for (var name in env.attributes) {
			attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
		}
	
		return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
	
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
				requestAnimationFrame(_.highlightAll, 0);
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
		'doctype': /<!DOCTYPE[\w\W]+?>/,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
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
		'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
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
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 289 */
/*!*********************************!*\
  !*** ./docs/js/showLanguage.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=build-docs.js.map