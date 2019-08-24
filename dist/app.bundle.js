/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var host = 'http://localhost:8888'; //'http://localhost:8888'; // http://labs.fluxo.art.br

var rootPath = '/ghost-river/';

var loadDeepLink =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(slug) {
    var theme, post;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _content__WEBPACK_IMPORTED_MODULE_2__["default"].changeBrowserHistory({
              slug: slug
            }); //change URL Bar

            theme = _content__WEBPACK_IMPORTED_MODULE_2__["default"].getThemeBySlug(slug); //get theme based on the search parameters
            //if search match to theme (page)

            if (!theme) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return _content__WEBPACK_IMPORTED_MODULE_2__["default"].showPage(theme);

          case 5:
            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return _content__WEBPACK_IMPORTED_MODULE_2__["default"].showPost({
              slug: slug
            });

          case 8:
            post = _context.sent;
            //if no page/post found: load home with 404
            if (!post) goHome({
              location: '404'
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadDeepLink(_x) {
    return _ref.apply(this, arguments);
  };
}();

var goHome =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _content__WEBPACK_IMPORTED_MODULE_2__["default"].changeBrowserHistory({
              slug: rootPath
            });
            _content__WEBPACK_IMPORTED_MODULE_2__["default"].initHome(data);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function goHome(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee3() {
  var deepLink, url, slug;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (window.innerWidth <= 880) goHome({
            location: 'home'
          }); //test if url is trying to reach a deeplink		

          if (!(window.location.pathname !== rootPath)) {
            _context3.next = 5;
            break;
          }

          deepLink = window.location.pathname.split('/')[2]; //get path after the '/' as deeplink

          location = "".concat(host).concat(rootPath, "?node=").concat(deepLink); //naviate to root with deeplink as a search parameters

          return _context3.abrupt("return");

        case 5:
          if (!window.location.search) {
            _context3.next = 10;
            break;
          }

          url = new URL(window.location.href); //get utl		

          slug = url.searchParams.get('node'); //get the params for search (a slug for a page or post)

          loadDeepLink(slug);
          return _context3.abrupt("return");

        case 10:
          //Go Home
          goHome({
            location: 'home'
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}))();

/***/ }),

/***/ "./src/assets/biohazard.svg":
/*!**********************************!*\
  !*** ./src/assets/biohazard.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\" id=\"biohazard\" class=\"tag-icon\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32.051 32.051\"><g><path d=\"M25.267,13.247c-0.425-0.122-0.878-0.129-1.321-0.146c0.121-0.311,3.326-8.258-5.136-11.408 c-0.004,0.071-0.01,0.143-0.021,0.211c5.438,3.268,2.922,8.502,2.717,8.731c-1.499-1.154-3.371-1.84-5.403-1.84 c-2.068,0-3.972,0.711-5.483,1.904c-0.372-0.615-0.662-1.315-0.847-2.087c-0.15-1.351-0.056-2.565,0.533-3.821 c0.583-1.144,1.522-2.111,2.64-2.744c-0.013-0.062-0.023-0.125-0.031-0.19c-1.24,0.501-2.369,1.34-3.381,2.422 c-0.44,0.615-3.073,3.782-1.408,8.617c-0.449,0.016-0.895,0.063-1.335,0.146c-1.751,0.372-4.534,1.878-5.845,4.467 c-0.439,0.74-0.612,1.496-0.819,2.226c-0.212,1.464-0.166,2.87,0.215,4.153c0.056-0.034,0.111-0.066,0.168-0.096 c-0.201-1.269-0.032-2.608,0.5-3.774c0.614-1.246,1.504-2.075,2.654-2.798c1.937-0.908,3.564-0.656,3.631-0.645 c-0.043,0.358-0.068,0.723-0.068,1.096c0,3.549,2.095,6.615,5.113,8.035c-0.016,0.043-0.031,0.086-0.045,0.125 c-0.056,0.103-2.85,4.651-8.252,2.619c-0.048,0.051-0.099,0.1-0.151,0.147c0.663,0.51,6.303,4.29,11.497-2.086 c0.235,0.021,0.473,0.034,0.714,0.034c0.145,0,0.289-0.006,0.433-0.012c1.097,1.525,5.3,6.244,11.633,2.268 c-0.054-0.049-0.104-0.098-0.15-0.149c-5.652,2.11-8.312-2.776-8.342-2.86c3.361-1.528,5.302-4.5,5.302-8.121 c0-0.312-0.017-0.617-0.047-0.922c0.012-0.002,0.021-0.004,0.035-0.008c1.099-0.074,2.275,0.139,3.429,0.68 c1.15,0.726,2.04,1.556,2.654,2.801c0.53,1.167,0.7,2.504,0.499,3.773c0.058,0.029,0.112,0.06,0.168,0.096 C32.178,22.64,33.333,15.562,25.267,13.247z M11.593,19.192c-0.004-0.004-0.01-0.012-0.015-0.018l0.012,0.014L11.593,19.192z M13.803,17.671c0-0.838,0.448-1.565,1.118-1.971c0.345-0.207,0.748-0.329,1.18-0.329c0.45,0,0.87,0.133,1.224,0.354 c0.646,0.408,1.075,1.125,1.075,1.945c0,0.949-0.579,1.77-1.404,2.119c-0.275,0.115-0.578,0.18-0.895,0.18 C14.831,19.971,13.803,18.94,13.803,17.671z M16.101,11.209c1.373,0,2.646,0.434,3.694,1.167c-1.165,0.825-4.743,2.123-7.496,0.078 C13.367,11.672,14.681,11.209,16.101,11.209z M9.642,17.671c0-0.092,0.004-0.185,0.006-0.277c0.107,0.061,2.999,1.621,3.221,5.865 C10.942,22.139,9.642,20.055,9.642,17.671z M19.188,23.343c0.002-0.108,0.239-4.016,3.369-5.824 c0.001,0.05,0.004,0.102,0.004,0.152C22.562,20.114,21.196,22.245,19.188,23.343z\"></path></g></svg>"

/***/ }),

/***/ "./src/assets/cone.svg":
/*!*****************************!*\
  !*** ./src/assets/cone.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\" id=\"cone\" class=\"tag-icon\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\"><path d=\"m13.5 56h37c3.033 0 5.5-2.468 5.5-5.5s-2.467-5.5-5.5-5.5h-1.046l-3.787-11.675c-.004-.015-.01-.03-.014-.045l-3.373-10.4v-.001l-3.48-10.729c-.805-2.483-3.098-4.15-5.708-4.15h-2.185c-2.609 0-4.903 1.667-5.707 4.149l-6.854 21.133c-.004.014-.01.028-.014.043l-3.786 11.675h-1.046c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5zm11.381-29.899c2.18.589 4.601.899 7.119.899s4.938-.31 7.119-.899l2.228 6.869c-2.318 1.266-5.742 2.03-9.347 2.03s-7.029-.764-9.347-2.03zm4.124-12.718c.268-.827 1.033-1.383 1.903-1.383h2.185c.87 0 1.634.556 1.902 1.383l2.888 8.905c-1.794.461-3.82.712-5.883.712s-4.089-.251-5.883-.712zm-7.602 23.439c2.865 1.383 6.627 2.178 10.597 2.178s7.732-.795 10.597-2.178l2.652 8.178h-26.498zm-7.903 12.178h34.493c.002 0 .004.001.006.001s.004-.001.006-.001h2.495c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-37c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5z\"></path></svg>"

/***/ }),

/***/ "./src/assets/help.svg":
/*!*****************************!*\
  !*** ./src/assets/help.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\" id=\"help\" class=\"tag-icon\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"><g><g><g><path d=\"M248.158,343.22c-14.639,0-26.491,12.2-26.491,26.84c0,14.291,11.503,26.84,26.491,26.84 c14.988,0,26.84-12.548,26.84-26.84C274.998,355.42,262.799,343.22,248.158,343.22z\"></path><path d=\"M252.69,140.002c-47.057,0-68.668,27.885-68.668,46.708c0,13.595,11.502,19.869,20.914,19.869 c18.822,0,11.154-26.84,46.708-26.84c17.429,0,31.372,7.669,31.372,23.703c0,18.824-19.52,29.629-31.023,39.389 c-10.108,8.714-23.354,23.006-23.354,52.983c0,18.125,4.879,23.354,19.171,23.354c17.08,0,20.565-7.668,20.565-14.291 c0-18.126,0.35-28.583,19.521-43.571c9.411-7.32,39.04-31.023,39.04-63.789S297.307,140.002,252.69,140.002z\"></path><path d=\"M256,0C114.516,0,0,114.497,0,256v236c0,11.046,8.954,20,20,20h236c141.483,0,256-114.497,256-256 C512,114.516,397.503,0,256,0z M256,472H40V256c0-119.377,96.607-216,216-216c119.377,0,216,96.607,216,216 C472,375.377,375.393,472,256,472z\"></path></g></g></g></svg>"

/***/ }),

/***/ "./src/assets/sea.svg":
/*!****************************!*\
  !*** ./src/assets/sea.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\" id=\"sea\" class=\"tag-icon\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512.004 512.004\"><g><g><path d=\"M503.325,140.931c-14.29,0-20.989-6.142-29.469-13.918c-9.447-8.663-20.155-18.482-41.198-18.482 s-31.751,9.819-41.199,18.482c-8.479,7.776-15.177,13.918-29.467,13.918s-20.988-6.142-29.467-13.918 c-9.448-8.663-20.155-18.482-41.198-18.482s-31.75,9.819-41.198,18.483c-8.478,7.776-15.176,13.917-29.465,13.917 c-14.288,0-20.985-6.142-29.464-13.917c-9.447-8.663-20.154-18.483-41.196-18.483c-21.042,0-31.749,9.819-41.197,18.482 c-8.478,7.776-15.176,13.918-29.465,13.918s-20.987-6.142-29.466-13.918c-9.448-8.662-20.155-18.482-41.197-18.482 c-4.794,0-8.678,3.886-8.678,8.678s3.884,8.678,8.678,8.678c14.289,0,20.987,6.142,29.465,13.917 c9.447,8.663,20.155,18.483,41.198,18.483c21.042,0,31.749-9.819,41.197-18.481c8.478-7.776,15.176-13.918,29.465-13.918 c14.288,0,20.985,6.142,29.464,13.917c9.447,8.663,20.154,18.483,41.196,18.483s31.749-9.818,41.197-18.481 c8.479-7.776,15.177-13.918,29.466-13.918s20.987,6.142,29.466,13.917c9.448,8.663,20.156,18.483,41.198,18.483 s31.75-9.818,41.198-18.481c8.481-7.776,15.178-13.918,29.469-13.918c14.29,0,20.989,6.142,29.469,13.918 c9.447,8.663,20.155,18.481,41.198,18.481c4.794,0,8.678-3.886,8.678-8.678C512.004,144.817,508.119,140.931,503.325,140.931z\"></path></g></g><g><g><path d=\"M503.323,222.659c-14.29,0-20.989-6.142-29.469-13.918c-9.447-8.663-20.155-18.482-41.198-18.482 s-31.751,9.819-41.199,18.482c-8.479,7.776-15.177,13.918-29.467,13.918s-20.988-6.142-29.468-13.918 c-9.447-8.663-20.153-18.482-41.197-18.482s-31.75,9.819-41.198,18.483c-8.478,7.776-15.176,13.917-29.465,13.917 c-14.288,0-20.984-6.142-29.464-13.917c-1.083-0.993-2.165-1.986-3.263-2.965c-3.578-3.19-9.064-2.873-12.253,0.703 c-3.189,3.578-2.873,9.064,0.704,12.253c1.037,0.924,2.059,1.862,3.081,2.799c9.447,8.662,20.154,18.481,41.195,18.481 c21.042,0,31.749-9.818,41.197-18.481c8.479-7.776,15.177-13.918,29.466-13.918s20.987,6.142,29.466,13.917 c9.448,8.663,20.156,18.483,41.198,18.483s31.75-9.818,41.198-18.481c8.48-7.776,15.178-13.918,29.469-13.918 c14.29,0,20.989,6.142,29.469,13.918c9.447,8.663,20.155,18.481,41.198,18.481c4.794,0,8.678-3.886,8.678-8.678 C512.001,226.544,508.116,222.659,503.323,222.659z\"></path></g></g><g><g><path d=\"M162.376,191.561c-3.864-0.863-8.027-1.302-12.372-1.302c-21.042,0-31.749,9.819-41.197,18.481 c-8.478,7.776-15.176,13.918-29.465,13.918s-20.987-6.142-29.466-13.918c-9.447-8.663-20.155-18.481-41.197-18.481 c-4.794,0-8.678,3.886-8.678,8.678s3.884,8.68,8.678,8.68c14.289,0,20.987,6.142,29.465,13.917 c9.447,8.663,20.155,18.483,41.198,18.483c21.042,0,31.749-9.819,41.197-18.482c8.478-7.776,15.176-13.918,29.465-13.918 c3.118,0,5.927,0.289,8.587,0.883c4.674,1.044,9.317-1.899,10.362-6.577S167.053,192.606,162.376,191.561z\"></path></g></g><g><g><path d=\"M503.323,386.115c-14.29,0-20.989-6.142-29.469-13.918c-9.447-8.663-20.155-18.481-41.198-18.481 s-31.751,9.819-41.199,18.481c-8.479,7.776-15.177,13.918-29.467,13.918s-20.988-6.142-29.468-13.918 c-9.447-8.663-20.153-18.481-41.197-18.481s-31.75,9.819-41.198,18.483c-8.478,7.776-15.176,13.917-29.465,13.917 c-14.288,0-20.985-6.142-29.464-13.917c-9.447-8.663-20.154-18.483-41.196-18.483s-31.749,9.819-41.197,18.481 c-8.478,7.776-15.176,13.918-29.465,13.918c-4.794,0-8.678,3.886-8.678,8.678c0,4.793,3.884,8.678,8.678,8.678 c21.042,0,31.749-9.819,41.197-18.481c8.478-7.776,15.176-13.918,29.465-13.918c14.288,0,20.985,6.142,29.464,13.917 c9.447,8.663,20.154,18.483,41.196,18.483s31.749-9.818,41.197-18.481c8.479-7.776,15.177-13.918,29.466-13.918 s20.987,6.142,29.466,13.918c9.448,8.662,20.156,18.481,41.198,18.481s31.75-9.818,41.198-18.481 c8.481-7.776,15.178-13.918,29.469-13.918c14.29,0,20.989,6.142,29.469,13.918c9.447,8.663,20.155,18.481,41.198,18.481 c4.794,0,8.678-3.886,8.678-8.678C512.001,390.001,508.116,386.115,503.323,386.115z\"></path></g></g><g><g><path d=\"M59.028,379.917c-3.162-2.227-6.071-4.895-9.152-7.719c-9.447-8.663-20.155-18.483-41.197-18.483 c-4.794,0-8.678,3.886-8.678,8.678s3.884,8.678,8.678,8.678c14.289,0,20.987,6.142,29.466,13.918 c3.35,3.071,6.812,6.246,10.888,9.117c1.519,1.07,3.262,1.584,4.99,1.584c2.727,0,5.414-1.282,7.104-3.682 C63.886,388.09,62.946,382.677,59.028,379.917z\"></path></g></g><g><g><path d=\"M503.323,304.387c-14.29,0-20.989-6.142-29.469-13.918c-9.447-8.663-20.155-18.481-41.198-18.481 c-21.042,0-31.749,9.818-41.198,18.48c-3.533,3.239-3.771,8.728-0.531,12.262c3.238,3.533,8.727,3.77,12.262,0.531 c8.479-7.775,15.178-13.917,29.467-13.917c14.29,0,20.989,6.142,29.469,13.918c9.447,8.663,20.155,18.481,41.198,18.481 c4.794,0,8.678-3.886,8.678-8.678C512.001,308.272,508.116,304.387,503.323,304.387z\"></path></g></g><g><g><path d=\"M382.128,309.516c-1.191-4.642-5.915-7.439-10.565-6.248c-2.934,0.753-6.066,1.12-9.573,1.12 c-14.29,0-20.988-6.142-29.468-13.918c-9.447-8.663-20.154-18.482-41.197-18.482s-31.75,9.819-41.198,18.483 c-8.478,7.776-15.176,13.917-29.465,13.917c-14.288,0-20.985-6.142-29.464-13.918c-9.447-8.662-20.154-18.482-41.196-18.482 c-21.042,0-31.749,9.819-41.197,18.482c-8.478,7.776-15.176,13.918-29.465,13.918s-20.987-6.142-29.466-13.918 c-9.447-8.663-20.155-18.482-41.197-18.482c-4.794,0-8.678,3.886-8.678,8.678s3.886,8.677,8.68,8.677 c14.289,0,20.987,6.142,29.465,13.917c9.447,8.663,20.155,18.483,41.198,18.483c21.042,0,31.749-9.819,41.197-18.482 c8.478-7.776,15.176-13.918,29.465-13.918c14.288,0,20.985,6.142,29.464,13.918c9.447,8.662,20.154,18.481,41.196,18.481 s31.749-9.818,41.197-18.481c8.479-7.776,15.177-13.918,29.466-13.918s20.987,6.142,29.466,13.918 c9.448,8.662,20.156,18.481,41.198,18.481c4.913,0,9.587-0.56,13.89-1.664C380.523,318.888,383.319,314.157,382.128,309.516z\"></path></g></g></svg>"

/***/ }),

/***/ "./src/assets/snake.svg":
/*!******************************!*\
  !*** ./src/assets/snake.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\" id=\"snake\" class=\"tag-icon\" x=\"0px\" y=\"0px\"><path d=\"m401.742188 152.636719c20.480468 1.015625 42.136718-7.644531 58.144531-23.65625 22.746093-22.742188 17.09375-63.289063 13.019531-81.589844l26.230469-26.230469-21.164063-21.160156-26.226562 26.226562c-18.304688-4.074218-58.851563-9.726562-81.59375 13.019532-14.613282 14.609375-23.191406 33.976562-23.722656 52.957031l-22.769532 24.351563c-17.769531 19-27.316406 43.792968-26.882812 69.804687.4375 26.011719 10.808594 50.472656 29.203125 68.867187l51.664062 51.664063c5.792969 5.792969 5.792969 15.214844 0 21.011719l-1.1875 1.1875c-5.792969 5.792968-15.21875 5.792968-21.011719 0l-176.703124-176.707032c-17.679688-17.679687-41.175782-27.640624-66.160157-28.050781-25.222656-.414062-48.914062 8.9375-66.832031 26.335938-18.140625 17.609375-28.273438 41.285156-28.527344 66.664062-.257812 25.386719 9.386719 49.265625 27.128906 67.203125l121.082032 123.039063c2.832031 2.863281 4.347656 6.679687 4.265625 10.753906-.082031 4.0625-1.753907 7.816406-4.707031 10.570313-5.777344 5.390624-15.238282 5.019531-21.085938-.828126l-42.226562-42.230468c-25.117188-25.113282-65.984376-25.113282-91.101563 0l-10.578125 10.582031 87.511719 87.511719c17.679687 17.679687 41.175781 27.644531 66.160156 28.054687.535156.007813 1.0625.011719 1.597656.011719 24.582031 0 47.695313-9.324219 65.234375-26.351562 18.136719-17.609376 28.269532-41.28125 28.527344-66.660157.257812-25.390625-9.386719-49.265625-27.132812-67.207031l-121.082032-123.039062c-2.832031-2.863282-4.34375-6.679688-4.261718-10.753907.082031-4.0625 1.753906-7.816406 4.703124-10.570312 5.777344-5.390625 15.238282-5.019531 21.085938.828125l176.972656 176.972656c17.796875 17.796875 41.460938 27.601562 66.632813 27.601562s48.839843-9.804687 66.636719-27.601562l1.191406-1.191406c36.742187-36.742188 36.742187-96.527344 0-133.269532l-50.792969-50.792968c-3.816406-3.816406-5.917969-8.890625-5.917969-14.285156 0-5.398438 2.101563-10.46875 5.917969-14.285157zm0 0\"></path></svg>"

/***/ }),

/***/ "./src/assets/snapchat.svg":
/*!*********************************!*\
  !*** ./src/assets/snapchat.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\" id=\"snapchat\" class=\"tag-icon\" x=\"0px\" y=\"0px\" viewBox=\"0 -4 512.00164 512\"><path d=\"m496.914062 354.367188-74.179687-76.679688 28.875-11.960938c12.265625-5.082031 21.816406-14.636718 26.898437-26.902343 5.082032-12.265625 5.082032-25.777344 0-38.042969-7.722656-18.644531-25.753906-30.691406-45.933593-30.691406-6.535157 0-12.933594 1.277344-19.007813 3.792968l-1.941406.808594v-19.066406c0-85.8125-69.8125-155.625-155.625-155.625s-155.625 69.8125-155.625 155.625v19.0625l-1.9375-.800781c-6.078125-2.519531-12.476562-3.796875-19.011719-3.796875-20.183593 0-38.214843 12.050781-45.933593 30.691406-5.082032 12.265625-5.082032 25.777344-.003907 38.042969 5.082031 12.265625 14.636719 21.820312 26.898438 26.902343l28.875 11.960938-74.175781 76.679688c-17.851563 18.449218-16.070313 33.476562-13.421876 40.796874 3.960938 10.933594 14.417969 18.085938 28.691407 19.617188 5.746093.617188 10.898437 3.433594 14.515625 7.929688 3.492187 4.347656 5.089844 9.730468 4.488281 15.164062-1.546875 14.058594 3.277344 22.753906 7.597656 27.574219 5.667969 6.328125 13.957031 9.816406 23.339844 9.816406 7.957031 0 16.496094-2.398437 25.378906-7.121094l5.101563-2.714843c7.296875-3.878907 17.242187-6.015626 28-6.015626 12.453125 0 24.265625 2.863282 32.417968 7.855469l39.976563 24.496094c11.902344 7.292969 27.640625 11.625 44.3125 12.199219.171875.007812.34375.011718.515625.011718s.347656-.003906.519531-.011718c16.667969-.574219 32.402344-4.90625 44.308594-12.199219l39.972656-24.496094c8.152344-4.992187 19.96875-7.855469 32.417969-7.855469 10.765625 0 20.707031 2.136719 28 6.015626l5.105469 2.714843c8.882812 4.722657 17.421875 7.117188 25.375 7.121094h.003906c9.382813 0 17.671875-3.488281 23.34375-9.816406 4.316406-4.820313 9.140625-13.515625 7.59375-27.578125-.597656-5.429688.996094-10.8125 4.492187-15.160156 3.609376-4.496094 8.765626-7.3125 14.515626-7.929688 14.273437-1.53125 24.730468-8.683594 28.6875-19.617188 2.648437-7.320312 4.429687-22.347656-13.421876-40.796874zm0 0\"></path></svg>"

/***/ }),

/***/ "./src/assets/thought-bubble.svg":
/*!***************************************!*\
  !*** ./src/assets/thought-bubble.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\" id=\"thought-bubble\" class=\"tag-icon\" x=\"0px\" y=\"0px\" viewBox=\"0 0 344.57 344.57\"><g><path d=\"M335.206,144.552c-4.142,0-7.5,3.357-7.5,7.5c0,19.183-15.606,34.789-34.79,34.789c-3.645,0-7.276-0.582-10.793-1.73 c-2.249-0.733-4.714-0.364-6.648,0.999c-1.934,1.363-3.112,3.56-3.176,5.926c-0.52,18.968-15.776,33.826-34.733,33.826 c-10.105,0-19.706-4.415-26.341-12.114c-1.425-1.653-3.499-2.604-5.681-2.604c-2.182,0-4.256,0.95-5.681,2.604 c-6.635,7.699-16.236,12.114-26.341,12.114c-10.725,0-20.696-4.868-27.358-13.356c-1.422-1.812-3.597-2.869-5.9-2.869 c-2.303,0-4.478,1.058-5.9,2.869c-6.662,8.488-16.634,13.356-27.358,13.356c-6.999,0-13.741-2.069-19.499-5.985 c-3.425-2.331-8.09-1.442-10.419,1.983c-2.33,3.425-1.441,8.09,1.984,10.419c8.255,5.615,17.915,8.583,27.934,8.583 c12.451,0,24.187-4.572,33.258-12.768c9.071,8.195,20.807,12.768,33.258,12.768c11.795,0,23.105-4.193,32.022-11.703 c8.917,7.51,20.227,11.703,32.022,11.703c13.057,0,25.391-5.021,34.731-14.14c7.141-6.973,11.938-15.753,13.948-25.334 c2.211,0.302,4.439,0.453,6.672,0.453c27.454,0,49.79-22.335,49.79-49.789C342.706,147.909,339.348,144.552,335.206,144.552z\"></path><path d=\"M67.102,199.37c3.938-1.286,6.087-5.52,4.802-9.458c-1.286-3.937-5.521-6.086-9.457-4.802 c-3.517,1.148-7.148,1.73-10.793,1.73c-19.183,0-34.79-15.606-34.79-34.789c0-9.908,4.283-19.388,11.752-26.009 c1.605-1.424,2.524-3.467,2.524-5.612s-0.919-4.188-2.524-5.611c-7.468-6.623-11.752-16.103-11.752-26.01 c0-19.184,15.606-34.79,34.79-34.79c3.643,0,7.274,0.582,10.794,1.73c2.25,0.734,4.713,0.363,6.647-1s3.111-3.56,3.176-5.925 C72.792,29.858,88.048,15,107.005,15c10.725,0,20.697,4.868,27.358,13.355c1.422,1.813,3.597,2.87,5.9,2.87 c2.303,0,4.479-1.059,5.9-2.87C152.824,19.868,162.795,15,173.521,15c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5 c-12.452,0-24.187,4.572-33.258,12.767C131.191,4.572,119.457,0,107.005,0c-13.057,0-25.391,5.021-34.73,14.14 c-7.141,6.972-11.938,15.753-13.948,25.333c-2.211-0.302-4.439-0.453-6.672-0.453c-27.454,0-49.79,22.336-49.79,49.79 c0,11.587,4.08,22.758,11.387,31.621c-7.307,8.862-11.387,20.033-11.387,31.621c0,27.454,22.335,49.789,49.79,49.789 C56.882,201.841,62.08,201.01,67.102,199.37z\"></path><path d=\"M200.647,27.899c3.138,2.704,7.874,2.352,10.578-0.785C217.859,19.415,227.46,15,237.565,15 c18.958,0,34.214,14.857,34.733,33.825c0.064,2.365,1.242,4.562,3.176,5.925s4.397,1.734,6.647,1 c3.52-1.148,7.152-1.73,10.794-1.73c19.183,0,34.79,15.606,34.79,34.79c0,9.907-4.284,19.387-11.752,26.01 c-3.1,2.748-3.384,7.488-0.636,10.587c1.482,1.672,3.543,2.524,5.615,2.524c1.769,0,3.545-0.622,4.973-1.889 c10.677-9.467,16.801-23.037,16.801-37.232c0-27.454-22.335-49.79-49.79-49.79c-2.233,0-4.46,0.151-6.672,0.453 c-2.01-9.58-6.807-18.361-13.948-25.333C262.957,5.021,250.622,0,237.565,0c-14.475,0-28.217,6.313-37.704,17.321 C197.158,20.46,197.51,25.195,200.647,27.899z\"></path><path d=\"M129.319,251.899c-20.541,0-36.63,10.801-36.63,24.59s16.09,24.59,36.63,24.59c20.54,0,36.63-10.801,36.63-24.59 S149.859,251.899,129.319,251.899z M129.319,286.079c-13.003,0-21.63-5.772-21.63-9.59s8.627-9.59,21.63-9.59 c13.003,0,21.63,5.772,21.63,9.59S142.322,286.079,129.319,286.079z\"></path><path d=\"M95.528,312.818c-4.142,0-7.5,3.357-7.5,7.5c0,4.367-7.423,9.252-17.358,9.252s-17.358-4.885-17.358-9.252 c0-4.368,7.423-9.253,17.358-9.253c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5c-18.145,0-32.358,10.653-32.358,24.253 S52.526,344.57,70.67,344.57s32.358-10.652,32.358-24.252C103.028,316.176,99.67,312.818,95.528,312.818z\"></path></g></svg>"

/***/ }),

/***/ "./src/assets/tsunami.svg":
/*!********************************!*\
  !*** ./src/assets/tsunami.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\" id=\"thoughts\" class=\"tag-icon\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511 511.999\"><path d=\"m114.449219 410.269531 34.621093 25.066407c10.59375 7.667968 25.96875 7.667968 36.5625 0l34.621094-25.066407c21.105469-15.28125 50.589844-15.28125 71.695313 0l34.625 25.066407c10.589843 7.667968 25.96875 7.667968 36.5625 0l34.621093-25.066407c21.109376-15.28125 50.589844-15.28125 71.699219 0l42.25 30.585938v-63.195313l-59.820312-43.304687c-10.589844-7.667969-25.964844-7.667969-36.558594 0l-34.625 25.0625c-21.105469 15.28125-50.589844 15.28125-71.695313 0l-34.625-25.0625c-10.589843-7.671875-25.96875-7.667969-36.558593 0l-34.625 25.0625c-21.105469 15.28125-50.589844 15.28125-71.695313 0l-34.625-25.0625c-10.589844-7.667969-25.96875-7.667969-36.558594 0l-59.820312 43.304687v63.195313l42.25-30.585938c21.109375-15.28125 50.589844-15.28125 71.699219 0zm0 0\"></path><path d=\"m114.449219 310.085938 34.621093 25.066406c10.59375 7.667968 25.96875 7.667968 36.5625 0l34.621094-25.066406c21.109375-15.277344 50.59375-15.277344 71.695313 0l34.625 25.066406c10.589843 7.667968 25.96875 7.667968 36.5625 0l34.621093-25.066406c21.109376-15.277344 50.589844-15.277344 71.699219 0l42.25 30.589843v-95.503906h-139.648437c-45.148438-1.863281-81.90625-40.078125-81.996094-85.320313-.042969-22.894531 8.835938-44.421874 25.003906-60.621093 15.921875-15.957031 37.027344-24.851563 59.523438-25.117188l8.640625 1.257813 11.585937-18.828125-8.949218-8.363281c-59.230469-55.355469-148.542969-63.949219-217.183594-20.902344-21.609375 13.554687-40.597656 32.585937-54.917969 55.054687l-113.265625 178.171875v80.171875l42.25-30.589843c21.109375-15.277344 50.589844-15.277344 71.699219 0zm0 0\"></path><path d=\"m415.324219 434.535156-34.621094 25.066406c-21.105469 15.277344-50.589844 15.277344-71.695313 0l-34.625-25.066406c-10.59375-7.667968-25.96875-7.667968-36.5625 0l-34.621093 25.066406c-21.105469 15.277344-50.589844 15.277344-71.695313 0l-34.625-25.066406c-10.589844-7.667968-25.96875-7.667968-36.558594 0l-59.820312 43.304688v34.160156h511.207031v-34.160156l-59.820312-43.304688c-10.589844-7.667968-25.964844-7.667968-36.5625 0zm0 0\"></path></svg>"

/***/ }),

/***/ "./src/config/config.json":
/*!********************************!*\
  !*** ./src/config/config.json ***!
  \********************************/
/*! exports provided: map, mapbox, wordpress, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"map\":{\"default\":{\"styleID\":\"cjxzbs7nf0a4b1cowp80tsndy\",\"center\":[-73.56,45.465],\"zoom\":12,\"pitch\":0,\"minZoom\":12,\"maxZoom\":17,\"maxBounds\":[[-73.68,45.415],[-73.44,45.535]]},\"dataset\":\"cjxdpkggs01gi2os0srxdx837\"},\"mapbox\":{\"user\":\"saintpierremapping\",\"token\":\"pk.eyJ1Ijoic2FpbnRwaWVycmVtYXBwaW5nIiwiYSI6ImNqdDBpOXo4aDBkYmk0Nm5wMTU0MzhxcWcifQ.tH1TZXEMh4KOnahRKRl_BA\"},\"wordpress\":{\"endpoint\":\"http://labs.fluxo.art.br/ghost-river/wp-json/\"}}");

/***/ }),

/***/ "./src/config/themes.json":
/*!********************************!*\
  !*** ./src/config/themes.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"Home\",\"slug\":\"home\",\"mapID\":\"cjtf3qpso03kh1fkvzo8dd4xk\",\"state\":\"home\"},{\"id\":56,\"name\":\"About\",\"slug\":\"about\",\"mapID\":\"cjzeju3nh0cg51crt3lyatfw4\",\"state\":\"page\"},{\"id\":114,\"name\":\"Environment\",\"slug\":\"environment\",\"mapID\":\"cjtf3qpso03kh1fkvzo8dd4xk\",\"state\":\"page\"},{\"id\":118,\"name\":\"Steps\",\"slug\":\"steps\",\"mapID\":\"cjtg0c42v0w5x1fqlf1rmfs76\",\"state\":\"page\"},{\"id\":116,\"name\":\"Water\",\"slug\":\"water\",\"mapID\":\"cjuee51b92imr1fpof8u119ws\",\"state\":\"page\"}]");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: showPage, showPost, closePanel, tagSearch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPage", function() { return showPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPost", function() { return showPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePanel", function() { return closePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagSearch", function() { return tagSearch; });
/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wpapi */ "./node_modules/wpapi/wpapi.js");
/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wpapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentHTML */ "./src/contentHTML.js");
/* harmony import */ var _geodata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geodata */ "./src/geodata.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
/* harmony import */ var _config_themes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/themes.json */ "./src/config/themes.json");
var _config_themes_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/themes.json */ "./src/config/themes.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var wp = new wpapi__WEBPACK_IMPORTED_MODULE_0___default.a({
  endpoint: _config_config_json__WEBPACK_IMPORTED_MODULE_4__.wordpress.endpoint
});
var theme;
var currentNode;
var activePanel;

var initHome = function initHome(_ref) {
  var location = _ref.location;
  _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].initHome();
  if (window.innerWidth > 880) updateMap({
    location: location
  });
};

var setCurrentNode = function setCurrentNode(data) {
  return currentNode = data;
};

var setActivePanel = function setActivePanel(panel) {
  return activePanel = panel;
};

var showPage =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref2) {
    var id, slug, pageData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref2.id, slug = _ref2.slug;
            _context.next = 3;
            return setTheme(slug);

          case 3:
            // if (theme.isNew) 
            if (slug !== 'about') updateMap(theme);

            if (!(id === 0)) {
              _context.next = 7;
              break;
            }

            changeBrowserHistory({
              slug: '/ghost-river/'
            });
            return _context.abrupt("return");

          case 7:
            _context.next = 9;
            return loadPage({
              id: id,
              slug: slug
            });

          case 9:
            pageData = _context.sent;
            // console.log(pageData);
            setCurrentNode(null);
            if (slug !== 'about') _map__WEBPACK_IMPORTED_MODULE_3__["default"].flyToOrigin(); //panel

            setActivePanel(slug === 'about' ? 'full-panel' : 'right-panel');
            _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].updatePage(activePanel, pageData); //show panel

            _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].showPanel({
              activePanel: activePanel
            });
            changeBrowserHistory({
              title: pageData.title.rendered,
              slug: pageData.slug
            });
            return _context.abrupt("return", pageData);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function showPage(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var loadPage =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref4) {
    var id, slug, pageData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = _ref4.id, slug = _ref4.slug;

            if (!id) {
              _context2.next = 7;
              break;
            }

            _context2.next = 4;
            return wp.pages().id(id).embed();

          case 4:
            pageData = _context2.sent;
            _context2.next = 12;
            break;

          case 7:
            if (!slug) {
              _context2.next = 12;
              break;
            }

            _context2.next = 10;
            return wp.pages().slug(slug).embed();

          case 10:
            pageData = _context2.sent;
            pageData = pageData[0];

          case 12:
            return _context2.abrupt("return", pageData);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadPage(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

var showPost =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref6) {
    var id, slug, postData, postCategories, postTags, postTheme, coordinates;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _ref6.id, slug = _ref6.slug;

            if (!(currentNode && currentNode.id === id)) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return");

          case 3:
            _context3.next = 5;
            return _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].hidePanel({
              activePanel: activePanel
            });

          case 5:
            _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].showSpinner();
            _context3.next = 8;
            return loadPost({
              id: id,
              slug: slug
            });

          case 8:
            postData = _context3.sent;

            if (postData) {
              _context3.next = 12;
              break;
            }

            _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].hideSpinner();
            return _context3.abrupt("return");

          case 12:
            _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].hideSpinner();
            setCurrentNode(postData);
            postCategories = postData._embedded['wp:term'][0];
            postTags = postData._embedded['wp:term'][1];
            postTheme = getPostTheme(postCategories);
            if (postTheme.slug === 'uncategorized') console.log('Problem with category "uncategorized": ', postData);
            setTheme(postTheme.slug);

            if (!theme.isNew) {
              _context3.next = 22;
              break;
            }

            _context3.next = 22;
            return updateMap(theme);

          case 22:
            //fly to local
            _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentNode(currentNode);
            _context3.next = 25;
            return _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].getNodeCoordinates(currentNode);

          case 25:
            coordinates = _context3.sent;
            _map__WEBPACK_IMPORTED_MODULE_3__["default"].flyTo(coordinates);
            setActivePanel('right-panel');
            _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].updatePost(postData, postTags, theme); //show Panel

            _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].showPanel({
              activePanel: activePanel
            });
            changeBrowserHistory({
              title: postData.title.rendered,
              slug: postData.slug
            });
            return _context3.abrupt("return", {
              post: postData,
              theme: postTheme
            });

          case 32:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function showPost(_x3) {
    return _ref7.apply(this, arguments);
  };
}();

var getPostTheme = function getPostTheme(postCategories) {
  var postTheme;
  if (theme) postTheme = postCategories.find(function (cat) {
    return cat.slug === theme.slug;
  });

  if (!postTheme) {
    if (postCategories.length > 1) {
      var themePost = Math.floor(Math.random() * postCategories.length);
      postTheme = postCategories[themePost];
    } else {
      postTheme = postCategories[0];
    }
  }

  return postTheme;
};

var loadPost =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref8) {
    var id, slug, postData;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = _ref8.id, slug = _ref8.slug;

            if (!id) {
              _context4.next = 7;
              break;
            }

            _context4.next = 4;
            return wp.posts().id(id).embed();

          case 4:
            postData = _context4.sent;
            _context4.next = 12;
            break;

          case 7:
            if (!slug) {
              _context4.next = 12;
              break;
            }

            _context4.next = 10;
            return wp.posts().slug(slug).embed();

          case 10:
            postData = _context4.sent;
            postData = postData[0];

          case 12:
            return _context4.abrupt("return", postData);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function loadPost(_x4) {
    return _ref9.apply(this, arguments);
  };
}();

var closePanel =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].hidePanel({
              activePanel: activePanel
            });

          case 2:
            setCurrentNode(null);
            _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].resetNodesState({});
            return _context5.abrupt("return", currentNode);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function closePanel() {
    return _ref10.apply(this, arguments);
  };
}();

var setTheme =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(requestedThemeSlug) {
    var requestedTheme;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!theme) theme = {};
            theme.isNew = false;

            if (theme.slug != requestedThemeSlug) {
              requestedTheme = getThemeBySlug(requestedThemeSlug);
              changeState(requestedTheme.state);
              theme = requestedTheme;
              theme.isNew = true;
            }

            if (!(theme.slug != 'home')) {
              _context6.next = 6;
              break;
            }

            _context6.next = 6;
            return _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].hidePanel({
              activePanel: activePanel
            });

          case 6:
            return _context6.abrupt("return", theme);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function setTheme(_x5) {
    return _ref11.apply(this, arguments);
  };
}();

var getCurrentTheme = function getCurrentTheme() {
  return theme;
};

var getThemeBySlug = function getThemeBySlug(slug) {
  return _config_themes_json__WEBPACK_IMPORTED_MODULE_5__.find(function (theme) {
    return theme.slug === slug;
  });
};

var changeState =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(newState) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!(newState != theme.state)) {
              _context7.next = 9;
              break;
            }

            if (!(newState === 'home')) {
              _context7.next = 8;
              break;
            }

            _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].hideTopMenu();
            _context7.next = 5;
            return _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].hidePanel({
              activePanel: activePanel
            });

          case 5:
            _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].showHome();
            _context7.next = 9;
            break;

          case 8:
            if (newState === 'page') {
              _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].hideHome();
              _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].showTopMenu();
            }

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function changeState(_x6) {
    return _ref12.apply(this, arguments);
  };
}();

var updateMap =
/*#__PURE__*/
function () {
  var _ref14 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(_ref13) {
    var location;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            location = _ref13.location;
            if (!theme) theme = _config_themes_json__WEBPACK_IMPORTED_MODULE_5__[0];

            if (_map__WEBPACK_IMPORTED_MODULE_3__["default"].isMapboxLoaded()) {
              _context8.next = 12;
              break;
            }

            if (!(location === '404')) {
              _context8.next = 8;
              break;
            }

            _context8.next = 6;
            return _map__WEBPACK_IMPORTED_MODULE_3__["default"].init({
              location: location
            });

          case 6:
            _context8.next = 10;
            break;

          case 8:
            _context8.next = 10;
            return _map__WEBPACK_IMPORTED_MODULE_3__["default"].init(theme);

          case 10:
            _context8.next = 14;
            break;

          case 12:
            _context8.next = 14;
            return _map__WEBPACK_IMPORTED_MODULE_3__["default"].changeMap(theme);

          case 14:
            _context8.next = 16;
            return _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].drawNodes(theme);

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function updateMap(_x7) {
    return _ref14.apply(this, arguments);
  };
}();

var tagSearch = function tagSearch(tag) {
  _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].drawNodeByTag(tag);
  _map__WEBPACK_IMPORTED_MODULE_3__["default"].flyToOrigin();
  _contentHTML__WEBPACK_IMPORTED_MODULE_1__["default"].updateHeading(tag.name);
};

var changeBrowserHistory = function changeBrowserHistory(_ref15) {
  var title = _ref15.title,
      slug = _ref15.slug;
  var pageTitle = 'Ghost River';
  if (title) pageTitle += " - ".concat(title);
  document.title = pageTitle;
  window.history.pushState({
    pageTitle: pageTitle
  }, '', slug);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  initHome: initHome,
  showPage: showPage,
  showPost: showPost,
  closePanel: closePanel,
  getCurrentTheme: getCurrentTheme,
  getThemeBySlug: getThemeBySlug,
  tagSearch: tagSearch,
  changeBrowserHistory: changeBrowserHistory
});

/***/ }),

/***/ "./src/contentHTML.js":
/*!****************************!*\
  !*** ./src/contentHTML.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3/dist/d3.min */ "./node_modules/d3/dist/d3.min.js");
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags */ "./src/tags.js");
/* harmony import */ var _config_themes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/themes.json */ "./src/config/themes.json");
var _config_themes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/themes.json */ "./src/config/themes.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('body').append('div').attr('id', 'map-bg');

var initHome = function initHome() {
  return configMainMenu();
};

var configMainMenu = function configMainMenu() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var theme = _step.value;
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#main-".concat(theme.slug, "-bt")).select('a').on('click', function () {
        return Object(_content__WEBPACK_IMPORTED_MODULE_2__["showPage"])(theme);
      });
    };

    for (var _iterator = _config_themes_json__WEBPACK_IMPORTED_MODULE_4__[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var configTopMenu = function configTopMenu() {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop2 = function _loop2() {
      var theme = _step2.value;
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#top-".concat(theme.slug, "-bt")).style('cursor', 'pointer').on('click', function () {
        return Object(_content__WEBPACK_IMPORTED_MODULE_2__["showPage"])(theme);
      });
    };

    for (var _iterator2 = _config_themes_json__WEBPACK_IMPORTED_MODULE_4__[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

var showHome = function showHome() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#header-col', 2, {
    y: 0,
    onStart: function onStart() {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'block');
    }
  });
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('.col-main-menu', 2, {
    y: 0,
    onStart: function onStart() {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'block');
    }
  });
  configMainMenu();
  showHomeBG();
  hideHeading();
};

var hideHome = function hideHome() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#header-col', 2, {
    y: -500,
    onComplete: function onComplete() {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'none');
    }
  });
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('.col-main-menu', 2, {
    y: -800,
    onComplete: function onComplete() {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'none');
    }
  });
  hideHomeBG();
  showHeading();
};

var showHomeBG = function showHomeBG() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#map-bg', 2, {
    alpha: 1,
    onStart: function onStart() {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'block');
    }
  });
};

var hideHomeBG = function hideHomeBG() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#map-bg', 2, {
    alpha: 0,
    onComplete: function onComplete() {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'none');
    }
  });
};

var showTopMenu = function showTopMenu() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].fromTo('#top-menu', 2, {
    y: -200
  }, {
    y: 0,
    onStart: function onStart() {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'block');
    }
  });
  configTopMenu();
};

var hideTopMenu = function hideTopMenu() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#top-menu', 2, {
    y: -200,
    onComplete: function onComplete() {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'none');
    }
  });
};

var showPanel = function showPanel(_ref) {
  var _ref$activePanel = _ref.activePanel,
      activePanel = _ref$activePanel === void 0 ? 'left-panel' : _ref$activePanel;

  if (activePanel === 'full-panel') {
    //Full Panel
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].fromTo('#full-panel', 2, {
      y: window.outerHeight
    }, {
      y: 0,
      onStart: function onStart() {
        Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'block');
      }
    });
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#full-panel').select('.fl-col-content').property('scrollTop', 0);
    showHomeBG();
  } else {
    //Left Panel
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#left-panel', 2, {
      x: 0,
      onStart: function onStart() {
        Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'block').style('opacity', 0);
      }
    }); //Right Panel

    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#right-panel', 2, {
      x: 0,
      onStart: function onStart() {
        Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'block');
      }
    });
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').select('.fl-col-content').property('scrollTop', 0);
  }
};

var hidePanel =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref2) {
    var _ref2$activePanel, activePanel;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2$activePanel = _ref2.activePanel, activePanel = _ref2$activePanel === void 0 ? 'right-panel' : _ref2$activePanel;
            return _context.abrupt("return", new Promise(function (resolve) {
              if (activePanel === 'full-panel') {
                gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#full-panel', 2, {
                  y: window.outerHeight,
                  onComplete: function onComplete() {
                    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'none');
                    resolve();
                  }
                });
                hideHomeBG();
              } else {
                //Left Panel
                gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#left-panel', 2, {
                  x: window.outerWidth
                }); //Right Panel

                gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#right-panel', 2, {
                  x: window.outerWidth,
                  onComplete: function onComplete() {
                    resolve();
                  }
                });
              }
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hidePanel(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var showHeading = function showHeading() {
  var heading = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-heading');

  if (heading.empty()) {
    heading = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('body').append('div').attr('id', 'map-heading');
    heading.append('h3');
  }

  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].fromTo('#map-heading', 2, {
    alpha: 0
  }, {
    alpha: 1,
    onStart: function onStart() {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'block');
    }
  });
  return heading;
};

var hideHeading = function hideHeading() {
  var heading = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-heading');

  if (!heading.empty()) {
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#map-heading', 1, {
      alpha: 0,
      onComplete: function onComplete() {
        Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'none');
      }
    });
  }
};

var updateHeading = function updateHeading(title) {
  if (title.toLowerCase() === 'about') title = '';
  var heading = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-heading');
  if (heading.empty()) heading = showHeading();
  heading.select('h3').html(title);
};

var updatePage = function updatePage(activePanel, _ref4) {
  var title = _ref4.title,
      content = _ref4.content;
  //dom manipulation
  var panel = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#".concat(activePanel));
  panel.select('.tagline').select('.fl-heading-text').html('');
  panel.select('#close-panel').style('cursor', 'pointer').on('click', _content__WEBPACK_IMPORTED_MODULE_2__["closePanel"]);
  panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
  panel.select('#article-content').select('.fl-rich-text').html(content.rendered);
  panel.select('#article-tags').select('.fl-html').html('');
  captureLinks();
  updateHeading(title.rendered);
};

var updatePost = function updatePost(_ref5, tags, theme) {
  var title = _ref5.title,
      content = _ref5.content;
  //DOM manipulation
  var panel = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel');
  panel.select('.tagline').select('.fl-heading-text').html(theme.slug);
  panel.select('#close-panel').style('cursor', 'pointer').on('click', _content__WEBPACK_IMPORTED_MODULE_2__["closePanel"]);
  panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
  panel.select('#article-content').select('.fl-rich-text').html(content.rendered); //tags

  panel.select('#article-tags').select('.fl-html').html('');
  var tagsDIV = panel.select('#article-tags').select('.fl-html').append('div').attr('id', 'tag-container');
  var tagsHTML = tagsDIV.selectAll('.circle').data(tags);
  tagsHTML.exit().attr('class', 'exit').remove();
  tagsHTML.enter().append('div').attr('id', function (tag) {
    return "tag-".concat(tag.slug);
  }).attr('class', 'tag-pill').html(function (tag) {
    var icon = Object(_tags__WEBPACK_IMPORTED_MODULE_3__["getIcon"])(tag);
    return "".concat(icon, " ").concat(tag.name);
  }).on('mouseover', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('color', 'steelblue');
  }).on('mouseout', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('color', '#535354');
  }).on('click', function (d) {
    return Object(_content__WEBPACK_IMPORTED_MODULE_2__["tagSearch"])(d);
  }); //resize tag icons

  tagsDIV.selectAll('.tag-icon').attr('width', '15px').attr('height', '15px');
  captureLinks();
};

var captureLinks = function captureLinks() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('a').on('click', function () {
    //get url // domain
    var link = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).attr('href');
    var domain = link.split('/')[2]; //Test if it is a local link (localhost -> remote)

    var host = window.location.hostname === 'localhost' ? 'labs.fluxo.art.br' : window.location.hostname; //if extrrnal, navigate

    if (domain != host) return; //window.location.hostname
    //if local, prevent page update

    d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["event"].preventDefault(); //load post based on slug on the url

    var slug = link.split('/')[4];
    Object(_content__WEBPACK_IMPORTED_MODULE_2__["showPost"])({
      slug: slug
    });
  });
};

var showSpinner = function showSpinner() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('body').append('div').attr('id', 'spinner').html('<div class="lds-ripple"><div></div><div></div></div>');
};

var hideSpinner = function hideSpinner() {
  return Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#spinner').remove();
};

/* harmony default export */ __webpack_exports__["default"] = ({
  initHome: initHome,
  configMainMenu: configMainMenu,
  configTopMenu: configTopMenu,
  showHome: showHome,
  hideHome: hideHome,
  showTopMenu: showTopMenu,
  hideTopMenu: hideTopMenu,
  showHeading: showHeading,
  hideHeading: hideHeading,
  updateHeading: updateHeading,
  showPanel: showPanel,
  hidePanel: hidePanel,
  updatePage: updatePage,
  updatePost: updatePost,
  showSpinner: showSpinner,
  hideSpinner: hideSpinner
});

/***/ }),

/***/ "./src/data/historical.json":
/*!**********************************!*\
  !*** ./src/data/historical.json ***!
  \**********************************/
/*! exports provided: features, type, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"features\":[{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1825-2-08/19\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"index\":2},\"geometry\":{\"coordinates\":[[-73.577041,45.483796,0],[-73.576975,45.483865,0],[-73.576909,45.483934,0],[-73.57687,45.484006,0],[-73.576804,45.484076,0],[-73.576767,45.484148,0],[-73.576702,45.484217,0],[-73.576664,45.484289,0],[-73.576625,45.484362,0],[-73.576532,45.484428,0],[-73.57652,45.484523,0],[-73.576454,45.484592,0],[-73.576389,45.484662,0],[-73.576328,45.484731,0],[-73.576293,45.484804,0],[-73.576225,45.484874,0],[-73.576186,45.484947,0],[-73.576121,45.485017,0],[-73.576084,45.48509,0],[-73.57602,45.48516,0],[-73.575985,45.485215,0],[-73.575919,45.485285,0],[-73.575881,45.485359,0],[-73.57587,45.485435,0],[-73.575886,45.485515,0],[-73.575902,45.485595,0],[-73.575893,45.485672,0],[-73.57594,45.485754,0],[-73.575987,45.485837,0],[-73.576034,45.485921,0],[-73.57605,45.486001,0],[-73.576034,45.486097,0],[-73.576021,45.486194,0],[-73.575954,45.486266,0],[-73.575915,45.48634,0],[-73.575848,45.486412,0],[-73.575781,45.486483,0],[-73.575713,45.486555,0],[-73.575646,45.486627,0],[-73.575577,45.486699,0],[-73.575567,45.486757,0],[-73.575522,45.486851,0],[-73.575484,45.486926,0],[-73.575417,45.486999,0],[-73.575351,45.487071,0],[-73.575314,45.487146,0],[-73.575249,45.487219,0],[-73.57521,45.487315,0],[-73.575144,45.487387,0],[-73.575133,45.487466,0],[-73.57504,45.487536,0],[-73.574973,45.487609,0],[-73.574875,45.487679,0],[-73.574781,45.487729,0],[-73.574683,45.487798,0],[-73.574617,45.487852,0],[-73.574521,45.487922,0],[-73.574454,45.487995,0],[-73.574361,45.488046,0],[-73.574293,45.488119,0],[-73.574225,45.488193,0],[-73.574157,45.488266,0],[-73.574095,45.4883,0],[-73.573995,45.488391,0],[-73.573898,45.488461,0],[-73.57383,45.488535,0],[-73.573761,45.488609,0],[-73.573664,45.48868,0],[-73.573597,45.488734,0],[-73.573473,45.488781,0],[-73.573377,45.488832,0],[-73.573279,45.488903,0],[-73.573185,45.488975,0],[-73.573116,45.48905,0],[-73.573046,45.489124,0],[-73.57298,45.489179,0],[-73.572882,45.489251,0],[-73.572783,45.489322,0],[-73.572663,45.48935,0],[-73.572567,45.489401,0],[-73.572474,45.489432,0],[-73.572348,45.489479,0],[-73.572252,45.489531,0],[-73.572133,45.489559,0],[-73.572067,45.489615,0],[-73.57197,45.489687,0],[-73.571849,45.489737,0],[-73.571755,45.48979,0],[-73.571661,45.489843,0],[-73.571563,45.489916,0],[-73.571469,45.489969,0],[-73.571374,45.490022,0],[-73.571276,45.490073,0],[-73.571177,45.490146,0],[-73.571058,45.490153,0],[-73.570935,45.490182,0],[-73.570813,45.49021,0],[-73.570691,45.490238,0],[-73.570566,45.490287,0],[-73.570494,45.490363,0],[-73.570371,45.490392,0],[-73.570274,45.490444,0],[-73.570202,45.49052,0],[-73.570105,45.490572,0],[-73.570009,45.490626,0],[-73.569937,45.490703,0],[-73.56984,45.490756,0],[-73.569717,45.490784,0],[-73.569623,45.490816,0],[-73.569525,45.490869,0],[-73.569399,45.490918,0],[-73.569272,45.490968,0],[-73.569174,45.49102,0],[-73.569075,45.491073,0],[-73.568973,45.491146,0],[-73.56885,45.491175,0],[-73.568751,45.491228,0],[-73.568624,45.491278,0],[-73.568497,45.491328,0],[-73.568399,45.491382,0],[-73.568326,45.49146,0],[-73.56831,45.491544,0],[-73.568262,45.491645,0],[-73.568188,45.491722,0],[-73.568173,45.491807,0],[-73.568099,45.491885,0],[-73.568054,45.491966,0],[-73.568001,45.492088,0],[-73.567927,45.492167,0],[-73.567882,45.492248,0],[-73.567808,45.492326,0],[-73.567763,45.492407,0],[-73.567747,45.492492,0],[-73.567697,45.492595,0],[-73.567623,45.492674,0],[-73.567549,45.492753,0],[-73.567504,45.492835,0],[-73.567404,45.492891,0],[-73.56733,45.492971,0],[-73.56723,45.493024,0],[-73.567124,45.493098,0],[-73.567053,45.493155,0],[-73.566948,45.49323,0],[-73.566851,45.493263,0],[-73.566747,45.493339,0],[-73.566617,45.49339,0],[-73.566546,45.493449,0],[-73.566441,45.493526,0],[-73.566335,45.493601,0],[-73.566205,45.493653,0],[-73.566104,45.493708,0],[-73.566003,45.493763,0],[-73.565931,45.493821,0],[-73.565825,45.493898,0],[-73.565719,45.493975,0],[-73.565647,45.494033,0],[-73.565516,45.494086,0],[-73.565444,45.494144,0],[-73.565342,45.4942,0],[-73.56524,45.494255,0],[-73.565134,45.494333,0],[-73.565062,45.494392,0],[-73.56498,45.494494,0],[-73.564874,45.494572,0],[-73.564771,45.494628,0],[-73.564669,45.494684,0],[-73.564591,45.494765,0],[-73.564514,45.494846,0],[-73.564436,45.494928,0],[-73.564359,45.495009,0],[-73.564251,45.495087,0],[-73.564148,45.495144,0],[-73.564045,45.4952,0],[-73.563942,45.495256,0],[-73.563843,45.49529,0],[-73.56374,45.495347,0],[-73.563692,45.495431,0],[-73.563673,45.495519,0],[-73.56365,45.49563,0],[-73.563631,45.495717,0],[-73.563608,45.495827,0],[-73.563559,45.495913,0],[-73.563455,45.495971,0],[-73.563351,45.496029,0],[-73.563277,45.49609,0],[-73.563143,45.496145,0],[-73.563043,45.496182,0],[-73.562913,45.496214,0],[-73.562789,45.496221,0],[-73.562664,45.49623,0],[-73.562544,45.496217,0],[-73.562424,45.496204,0],[-73.562309,45.496169,0],[-73.562233,45.496092,0],[-73.562123,45.496035,0],[-73.562018,45.495955,0],[-73.561907,45.495898,0],[-73.561827,45.495844,0],[-73.561717,45.495787,0],[-73.561607,45.49573,0],[-73.561492,45.495695,0],[-73.561373,45.495682,0]],\"type\":\"LineString\"},\"id\":\"0df56beab7a324647392ed26e515df79\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1825-main-08/19\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"index\":1},\"geometry\":{\"coordinates\":[[-73.560204,45.484274,0],[-73.560256,45.484385,0],[-73.560308,45.484496,0],[-73.560316,45.484628,0],[-73.56033,45.484735,0],[-73.560301,45.484863,0],[-73.560272,45.484992,0],[-73.560248,45.485095,0],[-73.560219,45.485224,0],[-73.560189,45.485354,0],[-73.560128,45.485453,0],[-73.560029,45.485548,0],[-73.559892,45.485639,0],[-73.559831,45.485739,0],[-73.559732,45.485834,0],[-73.55967,45.485934,0],[-73.559571,45.486029,0],[-73.559509,45.486129,0],[-73.559448,45.486229,0],[-73.559386,45.48633,0],[-73.559325,45.48643,0],[-73.559301,45.486534,0],[-73.559239,45.486635,0],[-73.559209,45.486765,0],[-73.559185,45.486869,0],[-73.559161,45.486973,0],[-73.559131,45.487104,0],[-73.559183,45.487218,0],[-73.559279,45.487309,0],[-73.559331,45.487421,0],[-73.559427,45.487512,0],[-73.559529,45.487577,0],[-73.559625,45.487668,0],[-73.559765,45.487738,0],[-73.559905,45.487808,0],[-73.560045,45.487877,0],[-73.560104,45.487964,0],[-73.560238,45.48806,0],[-73.560334,45.488151,0],[-73.560387,45.488263,0],[-73.560489,45.488327,0],[-73.56058,45.488444,0],[-73.56067,45.488562,0],[-73.560723,45.488676,0],[-73.560781,45.488765,0],[-73.560872,45.488884,0],[-73.560969,45.488974,0],[-73.561072,45.489039,0],[-73.561157,45.489184,0],[-73.561254,45.489276,0],[-73.561313,45.489364,0],[-73.561404,45.489482,0],[-73.561501,45.489575,0],[-73.561554,45.48969,0],[-73.561568,45.4898,0],[-73.561621,45.489916,0],[-73.561674,45.490031,0],[-73.561721,45.490172,0],[-73.56173,45.490309,0],[-73.561745,45.49042,0],[-73.561799,45.490535,0],[-73.561814,45.490646,0],[-73.561797,45.490726,0],[-73.561806,45.490864,0],[-73.561853,45.491006,0],[-73.561869,45.491117,0],[-73.561884,45.491228,0],[-73.56186,45.491335,0],[-73.561876,45.491447,0],[-73.561885,45.491585,0],[-73.5619,45.491697,0],[-73.561915,45.491809,0],[-73.561963,45.491952,0],[-73.562016,45.492068,0],[-73.56207,45.492184,0],[-73.562129,45.492274,0],[-73.562177,45.492417,0],[-73.562192,45.492529,0],[-73.562246,45.492645,0],[-73.562338,45.492766,0],[-73.562392,45.492883,0],[-73.562446,45.493,0],[-73.5625,45.493117,0],[-73.56256,45.493206,0],[-73.562652,45.493328,0],[-73.562751,45.493422,0],[-73.562695,45.493499,0],[-73.562633,45.493603,0],[-73.562571,45.493708,0],[-73.562509,45.493813,0],[-73.562447,45.493917,0],[-73.562346,45.494018,0],[-73.562284,45.494123,0],[-73.562261,45.494232,0],[-73.56216,45.494333,0],[-73.562098,45.494438,0],[-73.562036,45.494543,0],[-73.561973,45.494649,0],[-73.561911,45.494754,0],[-73.561849,45.49486,0],[-73.561786,45.494966,0],[-73.561724,45.495071,0],[-73.5617,45.495181,0],[-73.561638,45.495286,0],[-73.561536,45.495388,0],[-73.561473,45.495493,0],[-73.561449,45.495603,0],[-73.561309,45.4957,0],[-73.561174,45.49577,0],[-73.561072,45.495872,0],[-73.560976,45.495946,0],[-73.560913,45.496052,0],[-73.560811,45.496154,0],[-73.560709,45.496256,0],[-73.560574,45.496327,0],[-73.560433,45.496425,0],[-73.560298,45.496495,0],[-73.560202,45.49657,0],[-73.56006,45.496668,0],[-73.559925,45.496739,0],[-73.559756,45.496778,0],[-73.55966,45.496853,0],[-73.559518,45.496951,0],[-73.559415,45.497054,0],[-73.559273,45.497152,0],[-73.55917,45.497255,0],[-73.559073,45.497331,0],[-73.558931,45.49743,0],[-73.558867,45.497537,0],[-73.558803,45.497644,0],[-73.558699,45.497747,0],[-73.558596,45.49785,0],[-73.558493,45.497953,0],[-73.558317,45.49802,0],[-73.558213,45.498124,0],[-73.55807,45.498223,0],[-73.557967,45.498326,0],[-73.55783,45.498397,0],[-73.557726,45.498501,0],[-73.557622,45.498604,0],[-73.557518,45.498708,0],[-73.557415,45.498811,0],[-73.557311,45.498914,0],[-73.557207,45.499017,0],[-73.557103,45.499121,0],[-73.556999,45.499224,0],[-73.556934,45.499332,0],[-73.55683,45.499435,0],[-73.556732,45.499511,0],[-73.556628,45.499615,0],[-73.556524,45.499718,0],[-73.556459,45.499826,0],[-73.556355,45.499929,0],[-73.556328,45.500043,0],[-73.556296,45.500185,0],[-73.55623,45.500295,0],[-73.556164,45.500406,0],[-73.556058,45.500512,0],[-73.555952,45.500618,0],[-73.555854,45.500695,0],[-73.555709,45.500795,0],[-73.555571,45.500867,0],[-73.555505,45.500976,0],[-73.55544,45.501085,0],[-73.555374,45.501194,0],[-73.555308,45.501303,0],[-73.555242,45.501413,0],[-73.555176,45.501523,0],[-73.55511,45.501633,0],[-73.555044,45.501743,0],[-73.554978,45.501854,0],[-73.554911,45.501965,0],[-73.554805,45.502071,0],[-73.554738,45.502182,0],[-73.554672,45.502293,0],[-73.554605,45.502403,0],[-73.554498,45.50251,0],[-73.554391,45.502618,0],[-73.554325,45.502729,0],[-73.554178,45.502831,0],[-73.554071,45.502938,0],[-73.554004,45.50305,0],[-73.553951,45.503103,0]],\"type\":\"LineString\"},\"id\":\"4b32ff74b3e326476d1da6df6d512e0b\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1834 - 2\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1834,\"index\":6},\"geometry\":{\"coordinates\":[[-73.570081,45.473629,0],[-73.570074,45.474086,0],[-73.570066,45.474657,0],[-73.570057,45.475229,0],[-73.569888,45.475688,0],[-73.569718,45.476147,0],[-73.569386,45.476607,0],[-73.569217,45.477066,0],[-73.56921,45.477525,0],[-73.568878,45.477986,0],[-73.568708,45.478446,0],[-73.568539,45.478906,0],[-73.568534,45.479365,0],[-73.568365,45.479825,0],[-73.568359,45.480284,0],[-73.568354,45.480744,0],[-73.568348,45.481204,0],[-73.568341,45.481779,0],[-73.568172,45.48224,0],[-73.567997,45.482704,0],[-73.567985,45.483282,0],[-73.567975,45.483745,0],[-73.567962,45.484324,0],[-73.567953,45.484787,0],[-73.567945,45.48525,0],[-73.567774,45.485714,0],[-73.567603,45.486177,0],[-73.567433,45.486641,0],[-73.567098,45.487106,0],[-73.566927,45.487571,0],[-73.56692,45.488035,0],[-73.566912,45.488614,0],[-73.567065,45.489079,0],[-73.567219,45.489544,0],[-73.567213,45.490008,0],[-73.56737,45.490471,0],[-73.567362,45.490937,0],[-73.567351,45.49152,0],[-73.56734,45.492103,0],[-73.567329,45.492687,0],[-73.567317,45.493271,0],[-73.566981,45.49374,0],[-73.566808,45.494209,0],[-73.566635,45.494677,0],[-73.566463,45.495146,0],[-73.56646,45.495495,0]],\"type\":\"LineString\"},\"id\":\"6b4a0cb1f197b0380830c5963c3ca7a3\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1834 - main\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1834,\"index\":5},\"geometry\":{\"coordinates\":[[-73.628611,45.493214,0],[-73.628602,45.492638,0],[-73.628595,45.492177,0],[-73.628425,45.491716,0],[-73.628416,45.49114,0],[-73.628572,45.490677,0],[-73.628891,45.490216,0],[-73.629046,45.489754,0],[-73.629366,45.489293,0],[-73.629851,45.488949,0],[-73.6305,45.488719,0],[-73.630983,45.488371,0],[-73.631137,45.487909,0],[-73.631292,45.487447,0],[-73.631447,45.486986,0],[-73.631765,45.486525,0],[-73.632083,45.486064,0],[-73.632564,45.485604,0],[-73.633045,45.485143,0],[-73.633363,45.484684,0],[-73.633353,45.48411,0],[-73.633343,45.483536,0],[-73.633334,45.483076,0],[-73.633651,45.482616,0],[-73.633804,45.482155,0],[-73.633957,45.481695,0],[-73.634273,45.481235,0],[-73.634752,45.480774,0],[-73.635068,45.480314,0],[-73.635383,45.479854,0],[-73.635536,45.479395,0],[-73.635524,45.478823,0],[-73.636001,45.478363,0],[-73.63681,45.478244,0],[-73.637454,45.478012,0],[-73.637771,45.477667,0],[-73.638085,45.477208,0],[-73.638399,45.476749,0],[-73.63904,45.476403,0],[-73.639518,45.476058,0],[-73.639831,45.4756,0],[-73.640309,45.475255,0],[-73.640787,45.47491,0],[-73.6411,45.474452,0],[-73.641415,45.474108,0],[-73.641728,45.473651,0],[-73.642367,45.473306,0],[-73.643008,45.473074,0],[-73.643486,45.47273,0],[-73.643967,45.472501,0],[-73.644606,45.472269,0],[-73.645081,45.471925,0],[-73.645719,45.47158,0],[-73.64603,45.471124,0],[-73.646506,45.470781,0],[-73.646981,45.470437,0],[-73.647291,45.469981,0],[-73.647769,45.469751,0],[-73.648242,45.469295,0],[-73.648714,45.468839,0],[-73.649025,45.468384,0],[-73.649498,45.467929,0],[-73.650138,45.467699,0],[-73.650613,45.467356,0],[-73.650921,45.466902,0],[-73.65156,45.466672,0],[-73.65204,45.466556,0],[-73.652843,45.466438,0],[-73.65332,45.466209,0],[-73.653962,45.466092,0],[-73.654601,45.465863,0],[-73.654911,45.465522,0],[-73.65538,45.465067,0],[-73.655852,45.464726,0],[-73.656323,45.464384,0],[-73.65697,45.464381,0],[-73.657611,45.464264,0],[-73.658086,45.464036,0],[-73.658553,45.463582,0],[-73.65886,45.463129,0],[-73.659171,45.462789,0],[-73.659477,45.462337,0],[-73.659784,45.461884,0],[-73.660255,45.461544,0],[-73.660887,45.461203,0],[-73.661523,45.460974,0],[-73.66216,45.460745,0],[-73.662631,45.460405,0],[-73.663102,45.460065,0],[-73.663738,45.459836,0],[-73.664373,45.459608,0],[-73.664847,45.45938,0],[-73.665157,45.459042,0],[-73.665623,45.45859,0],[-73.665768,45.45814,0],[-73.666071,45.45769,0],[-73.666213,45.457241,0],[-73.666519,45.456791,0],[-73.666991,45.456452,0],[-73.667458,45.456001,0],[-73.667932,45.455774,0],[-73.668563,45.455434,0],[-73.669195,45.455206,0],[-73.669823,45.454867,0],[-73.670295,45.454641,0],[-73.670923,45.454302,0],[-73.670904,45.453743,0],[-73.670889,45.453296,0],[-73.671033,45.452848,0],[-73.671018,45.452401,0],[-73.671322,45.451953,0],[-73.671467,45.451506,0],[-73.671451,45.45106,0],[-73.671595,45.450613,0],[-73.671903,45.450277,0],[-73.672363,45.44983,0],[-73.672823,45.449382,0],[-73.673123,45.448936,0],[-73.673428,45.448601,0],[-73.673735,45.448153,0],[-73.674053,45.447702,0],[-73.67435,45.447258,0],[-73.674329,45.446815,0],[-73.674313,45.446371,0],[-73.674133,45.445817,0],[-73.67412,45.445372,0],[-73.67379,45.444928,0],[-73.674089,45.444484,0],[-73.674392,45.444039,0],[-73.674383,45.443593,0],[-73.674363,45.443039,0],[-73.674341,45.442486,0],[-73.674324,45.442044,0],[-73.674147,45.441603,0],[-73.673659,45.441385,0],[-73.673016,45.44128,0],[-73.67237,45.441063,0],[-73.672193,45.440622,0],[-73.672017,45.440182,0],[-73.671999,45.439741,0],[-73.67198,45.439301,0],[-73.67164,45.438865,0],[-73.671301,45.438428,0],[-73.670965,45.43799,0],[-73.670475,45.437664,0],[-73.669829,45.437448,0],[-73.669179,45.437123,0],[-73.668534,45.436908,0],[-73.6679,45.436911,0],[-73.66727,45.437024,0],[-73.666635,45.437028,0],[-73.665996,45.436922,0],[-73.66566,45.436485,0],[-73.665164,45.436051,0],[-73.664671,45.435728,0],[-73.664025,45.435402,0],[-73.66354,45.435074,0],[-73.662903,45.435079,0],[-73.662106,45.435086,0],[-73.661313,45.435091,0],[-73.661003,45.435536,0],[-73.660533,45.435759,0],[-73.659906,45.435982,0],[-73.659274,45.436096,0],[-73.658973,45.436535,0],[-73.658673,45.436975,0],[-73.658208,45.437306,0],[-73.65758,45.43753,0],[-73.656948,45.437643,0],[-73.656156,45.437647,0],[-73.655511,45.437433,0],[-73.654875,45.437325,0],[-73.654418,45.437763,0],[-73.654434,45.438201,0],[-73.654134,45.43864,0],[-73.653663,45.438863,0],[-73.653034,45.438975,0],[-73.652394,45.438981,0],[-73.651603,45.438983,0],[-73.651131,45.439206,0],[-73.650666,45.43965,0],[-73.650044,45.43998,0],[-73.649413,45.440205,0],[-73.648784,45.440428,0],[-73.648477,45.440872,0],[-73.648003,45.441209,0],[-73.647204,45.441216,0],[-73.646727,45.441218,0],[-73.646095,45.441331,0],[-73.645464,45.441555,0],[-73.644834,45.441778,0],[-73.644206,45.442112,0],[-73.643735,45.442335,0],[-73.643269,45.44278,0],[-73.643121,45.443222,0],[-73.642814,45.443666,0],[-73.642182,45.44389,0],[-73.641548,45.444004,0],[-73.64091,45.444007,0],[-73.640279,45.444343,0],[-73.639646,45.444568,0],[-73.639013,45.444793,0],[-73.63838,45.445018,0],[-73.637906,45.445242,0],[-73.63727,45.445357,0],[-73.636797,45.445693,0],[-73.636487,45.446139,0],[-73.636012,45.446364,0],[-73.635379,45.446588,0],[-73.634907,45.446923,0],[-73.634597,45.447369,0],[-73.634124,45.447705,0],[-73.633652,45.44804,0],[-73.633339,45.448375,0],[-73.632868,45.448823,0],[-73.632233,45.449049,0],[-73.631432,45.449054,0],[-73.630958,45.449391,0],[-73.630646,45.449837,0],[-73.630334,45.450286,0],[-73.62986,45.450622,0],[-73.629222,45.450736,0],[-73.628582,45.450967,0],[-73.628591,45.451525,0],[-73.628599,45.451971,0],[-73.628446,45.452418,0],[-73.628134,45.452866,0],[-73.627496,45.45298,0],[-73.627022,45.45343,0],[-73.626709,45.453878,0],[-73.626233,45.454216,0],[-73.625594,45.454331,0],[-73.625118,45.45467,0],[-73.624481,45.455009,0],[-73.623842,45.455236,0],[-73.623203,45.455464,0],[-73.622726,45.455803,0],[-73.622411,45.456253,0],[-73.622095,45.456704,0],[-73.621618,45.457044,0],[-73.620976,45.45716,0],[-73.620335,45.457276,0],[-73.619857,45.457616,0],[-73.619702,45.458065,0],[-73.619386,45.458516,0],[-73.618745,45.458745,0],[-73.618104,45.458974,0],[-73.617464,45.459202,0],[-73.61747,45.459764,0],[-73.617475,45.460214,0],[-73.616835,45.460555,0],[-73.616192,45.460672,0],[-73.615549,45.460788,0],[-73.614907,45.461017,0],[-73.614427,45.461357,0],[-73.614432,45.461921,0],[-73.613951,45.462149,0],[-73.613308,45.462379,0],[-73.612665,45.462608,0],[-73.612345,45.462948,0],[-73.611865,45.46329,0],[-73.611382,45.463518,0],[-73.610901,45.463747,0],[-73.61042,45.464202,0],[-73.609938,45.464544,0],[-73.609458,45.464999,0],[-73.608977,45.465341,0],[-73.608497,45.465682,0],[-73.608017,45.466024,0],[-73.607373,45.466367,0],[-73.607059,45.46682,0],[-73.606573,45.46705,0],[-73.605924,45.467396,0],[-73.605439,45.467739,0],[-73.605118,45.468081,0],[-73.604636,45.468537,0],[-73.604152,45.468881,0],[-73.603667,45.469111,0],[-73.60302,45.469456,0],[-73.602372,45.469687,0],[-73.601723,45.469919,0],[-73.601074,45.470151,0],[-73.600264,45.47027,0],[-73.599616,45.470273,0],[-73.598968,45.470277,0],[-73.598321,45.470281,0],[-73.597674,45.470511,0],[-73.597189,45.470856,0],[-73.596702,45.471086,0],[-73.596215,45.471431,0],[-73.595567,45.471776,0],[-73.594919,45.472008,0],[-73.594271,45.472125,0],[-73.593623,45.472357,0],[-73.592976,45.472587,0],[-73.592651,45.472931,0],[-73.591998,45.473279,0],[-73.59151,45.473738,0],[-73.590861,45.47397,0],[-73.590373,45.474315,0],[-73.589724,45.474433,0],[-73.589075,45.47455,0],[-73.588587,45.474896,0],[-73.587935,45.475243,0],[-73.587283,45.475247,0],[-73.58647,45.475367,0],[-73.58582,45.47537,0],[-73.58517,45.475374,0],[-73.584684,45.475376,0],[-73.583872,45.475495,0],[-73.583223,45.475498,0],[-73.582576,45.475272,0],[-73.581927,45.47539,0],[-73.581276,45.475508,0],[-73.580627,45.475625,0],[-73.580141,45.475285,0],[-73.579819,45.47483,0],[-73.579172,45.474605,0],[-73.578525,45.47438,0],[-73.578041,45.47404,0],[-73.577557,45.4737,0],[-73.577072,45.473474,0],[-73.576421,45.473592,0],[-73.575773,45.473823,0],[-73.574966,45.473826,0],[-73.574483,45.473487,0],[-73.573825,45.473378,0],[-73.573175,45.473268,0],[-73.572526,45.473158,0],[-73.571875,45.473162,0],[-73.571225,45.473165,0],[-73.570413,45.47317,0],[-73.569763,45.473174,0],[-73.569114,45.473177,0],[-73.568465,45.473294,0],[-73.567655,45.473298,0],[-73.567337,45.472957,0],[-73.566859,45.472503,0],[-73.566377,45.472164,0],[-73.565734,45.471825,0],[-73.565743,45.471255,0],[-73.566235,45.470911,0],[-73.566405,45.470455,0],[-73.56625,45.47,0],[-73.565769,45.469662,0],[-73.565289,45.469323,0],[-73.564974,45.46887,0],[-73.564979,45.468642,0]],\"type\":\"LineString\"},\"id\":\"6b4e1fc5684da3f1116129cea2fc9f61\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1825-3-08/19\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"index\":3},\"geometry\":{\"coordinates\":[[-73.57417,45.485485,0],[-73.574077,45.485533,0],[-73.57401,45.485604,0],[-73.573943,45.485675,0],[-73.573875,45.485746,0],[-73.573836,45.48582,0],[-73.573742,45.485888,0],[-73.573675,45.485959,0],[-73.573608,45.48603,0],[-73.573573,45.486085,0],[-73.573477,45.486153,0],[-73.57341,45.486225,0],[-73.573344,45.486297,0],[-73.573249,45.486365,0],[-73.573152,45.486434,0],[-73.573059,45.486483,0],[-73.572966,45.486532,0],[-73.572849,45.486559,0],[-73.572757,45.486609,0],[-73.572639,45.486636,0],[-73.572571,45.486708,0],[-73.572476,45.486757,0],[-73.572379,45.486826,0],[-73.572313,45.486879,0],[-73.572244,45.486951,0],[-73.57215,45.487021,0],[-73.572082,45.487093,0],[-73.57204,45.487169,0],[-73.571999,45.487245,0],[-73.571957,45.48732,0],[-73.571916,45.487396,0],[-73.571875,45.487472,0],[-73.571833,45.487548,0],[-73.571787,45.487644,0],[-73.571745,45.48772,0],[-73.571703,45.487796,0],[-73.571662,45.487872,0],[-73.571622,45.487949,0],[-73.571582,45.488026,0],[-73.571541,45.488103,0],[-73.571471,45.488177,0],[-73.5714,45.48825,0],[-73.571358,45.488327,0],[-73.571318,45.488405,0],[-73.571247,45.488478,0],[-73.571205,45.488555,0],[-73.571134,45.488629,0],[-73.571063,45.488703,0],[-73.57094,45.488752,0],[-73.570871,45.488826,0],[-73.5708,45.488901,0],[-73.570701,45.488972,0],[-73.570604,45.489023,0],[-73.570508,45.489074,0],[-73.570412,45.489126,0],[-73.570341,45.489201,0],[-73.570241,45.489273,0],[-73.57017,45.489348,0],[-73.570099,45.489423,0],[-73.569999,45.489495,0],[-73.569903,45.489547,0],[-73.569832,45.489622,0],[-73.569733,45.489695,0],[-73.56966,45.48977,0],[-73.569559,45.489842,0],[-73.569461,45.489893,0],[-73.569392,45.489948,0],[-73.569287,45.490041,0],[-73.569165,45.490069,0],[-73.569093,45.490146,0],[-73.569021,45.490222,0],[-73.56892,45.490295,0],[-73.568822,45.490347,0],[-73.568753,45.490402,0],[-73.56868,45.490479,0],[-73.568612,45.490534,0],[-73.568511,45.490608,0],[-73.568468,45.490689,0],[-73.568394,45.490765,0],[-73.568321,45.490841,0],[-73.568247,45.490917,0],[-73.568202,45.490997,0],[-73.568158,45.491077,0],[-73.568201,45.491168,0],[-73.568277,45.49124,0],[-73.568356,45.491292,0],[-73.568385,45.491295,0]],\"type\":\"LineString\"},\"id\":\"8a490193a390cd6eab612839e361a522\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1860 August 2019\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1860,\"index\":8},\"geometry\":{\"coordinates\":[[-73.577099,45.475696,0],[-73.576968,45.475758,0],[-73.576831,45.475795,0],[-73.5767,45.475857,0],[-73.576569,45.475918,0],[-73.576481,45.476001,0],[-73.576351,45.476062,0],[-73.576255,45.476121,0],[-73.576118,45.476158,0],[-73.575982,45.476195,0],[-73.575851,45.476257,0],[-73.57572,45.476319,0],[-73.57559,45.47638,0],[-73.575494,45.476439,0],[-73.575358,45.476476,0],[-73.575215,45.476489,0],[-73.575078,45.476526,0],[-73.574925,45.47649,0],[-73.574795,45.476402,0],[-73.574701,45.476311,0],[-73.574583,45.476272,0],[-73.574425,45.476211,0],[-73.574303,45.476147,0],[-73.574152,45.47611,0],[-73.574028,45.476046,0],[-73.573904,45.475983,0],[-73.573751,45.475947,0],[-73.573598,45.475912,0],[-73.573445,45.475876,0],[-73.573292,45.47584,0],[-73.573114,45.475857,0],[-73.572982,45.475919,0],[-73.57289,45.476002,0],[-73.572758,45.476063,0],[-73.572626,45.476126,0],[-73.572535,45.476208,0],[-73.572393,45.476221,0],[-73.57225,45.476234,0],[-73.572108,45.476247,0],[-73.571955,45.476211,0],[-73.571803,45.476175,0],[-73.571681,45.476112,0],[-73.571529,45.476076,0],[-73.571412,45.476036,0],[-73.571261,45.476,0],[-73.57114,45.475936,0],[-73.571018,45.475872,0],[-73.570927,45.475781,0],[-73.570826,45.475814,0],[-73.57069,45.475851,0],[-73.570548,45.475864,0],[-73.570406,45.475877,0],[-73.570259,45.475865,0],[-73.570107,45.475829,0],[-73.569975,45.475891,0],[-73.569841,45.475954,0],[-73.569704,45.475991,0],[-73.569573,45.476052,0],[-73.569441,45.476113,0],[-73.569308,45.476175,0],[-73.56918,45.476262,0],[-73.569048,45.476324,0],[-73.56895,45.476383,0],[-73.568813,45.47642,0],[-73.568676,45.476457,0],[-73.568543,45.476519,0],[-73.568405,45.476556,0],[-73.568273,45.476618,0],[-73.568135,45.476655,0],[-73.568003,45.476717,0],[-73.56787,45.476778,0],[-73.567737,45.47684,0],[-73.567604,45.476902,0],[-73.567471,45.476963,0],[-73.567343,45.47705,0],[-73.567209,45.477112,0],[-73.567076,45.477174,0],[-73.566943,45.477236,0],[-73.566809,45.477298,0],[-73.566711,45.477357,0],[-73.566614,45.477416,0],[-73.566485,45.477503,0],[-73.566351,45.477565,0],[-73.566213,45.477603,0],[-73.566079,45.477666,0],[-73.565945,45.477728,0],[-73.565811,45.477791,0],[-73.565682,45.477878,0],[-73.565548,45.47794,0],[-73.565414,45.478003,0],[-73.56528,45.478065,0],[-73.565181,45.478125,0],[-73.565047,45.478187,0],[-73.564913,45.47825,0],[-73.564814,45.478309,0],[-73.56468,45.478372,0],[-73.564541,45.47841,0],[-73.564407,45.478472,0],[-73.564269,45.478511,0],[-73.564135,45.478574,0],[-73.56408,45.47868,0],[-73.563982,45.478739,0],[-73.563851,45.478826,0],[-73.563712,45.478864,0],[-73.563577,45.478927,0],[-73.563442,45.47899,0],[-73.563307,45.479053,0],[-73.563171,45.479116,0],[-73.563036,45.479178,0],[-73.562937,45.479238,0],[-73.562803,45.479301,0],[-73.562707,45.479386,0],[-73.562651,45.479493,0],[-73.562552,45.479552,0],[-73.562416,45.479616,0],[-73.562281,45.479679,0],[-73.562185,45.479764,0],[-73.562164,45.479868,0],[-73.562145,45.479971,0],[-73.562126,45.480075,0],[-73.562147,45.480201,0],[-73.562168,45.480327,0],[-73.562189,45.480454,0],[-73.56217,45.480558,0],[-73.56215,45.480663,0],[-73.562131,45.480767,0],[-73.562111,45.480872,0],[-73.562092,45.480976,0],[-73.562073,45.481081,0],[-73.562053,45.481186,0],[-73.562033,45.481291,0],[-73.562056,45.481418,0],[-73.562036,45.481523,0],[-73.562017,45.481628,0],[-73.561961,45.481737,0],[-73.561905,45.481846,0],[-73.561886,45.481951,0],[-73.56183,45.48206,0],[-73.561775,45.482169,0],[-73.561719,45.482278,0],[-73.561698,45.482384,0],[-73.561605,45.482497,0],[-73.561509,45.482584,0],[-73.561453,45.482693,0],[-73.561361,45.482805,0],[-73.561268,45.482918,0],[-73.561212,45.483028,0],[-73.56112,45.48314,0],[-73.561064,45.48325,0],[-73.561007,45.48336,0],[-73.56091,45.483448,0],[-73.560849,45.483532,0],[-73.560792,45.483642,0],[-73.560731,45.483727,0],[-73.560675,45.483837,0],[-73.560654,45.483944,0],[-73.560634,45.484051,0],[-73.560615,45.484158,0],[-73.560595,45.484265,0],[-73.560574,45.484373,0],[-73.560553,45.484481,0],[-73.560532,45.484589,0],[-73.560548,45.484694,0],[-73.560527,45.484803,0],[-73.560544,45.484907,0],[-73.56056,45.485011,0],[-73.560581,45.485143,0],[-73.560597,45.485247,0],[-73.560618,45.485379,0],[-73.560561,45.485491,0],[-73.560462,45.48558,0],[-73.56036,45.485642,0],[-73.560262,45.485732,0],[-73.560167,45.485847,0],[-73.560069,45.485936,0],[-73.559929,45.486003,0],[-73.559827,45.486065,0],[-73.559687,45.486132,0],[-73.559584,45.486195,0],[-73.55949,45.48631,0],[-73.559469,45.486419,0],[-73.559449,45.486528,0],[-73.559429,45.486637,0],[-73.559408,45.486746,0],[-73.559424,45.486852,0],[-73.559403,45.486962,0],[-73.559423,45.487095,0],[-73.559476,45.487198,0],[-73.55953,45.487301,0],[-73.55962,45.487401,0],[-73.55971,45.487501,0],[-73.559801,45.487601,0],[-73.559925,45.48767,0],[-73.560045,45.487713,0],[-73.560206,45.48778,0],[-73.56033,45.48785,0],[-73.560487,45.487889,0],[-73.560649,45.487956,0],[-73.560806,45.488028,0],[-73.560895,45.488133,0],[-73.560982,45.488207,0],[-73.561074,45.488307,0],[-73.561166,45.488408,0],[-73.56122,45.488511,0],[-73.561276,45.488614,0],[-73.561368,45.488713,0],[-73.561423,45.488817,0],[-73.561478,45.488921,0],[-73.561532,45.489027,0],[-73.561623,45.489129,0],[-73.561715,45.489231,0],[-73.561807,45.489332,0],[-73.561933,45.489402,0],[-73.562063,45.489499,0],[-73.562152,45.489571,0],[-73.562245,45.489673,0],[-73.562296,45.48975,0]],\"type\":\"LineString\"},\"id\":\"8d9212402ebb5f9e848ed8cd61ffad78\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1825-4-08/19\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"index\":4},\"geometry\":{\"coordinates\":[[-73.575635,45.493999,0],[-73.575516,45.494031,0],[-73.575374,45.494017,0],[-73.575294,45.493966,0],[-73.575182,45.493932,0],[-73.575073,45.493878,0],[-73.574964,45.493824,0],[-73.574855,45.493769,0],[-73.574743,45.493736,0],[-73.574634,45.493705,0],[-73.574496,45.493671,0],[-73.574356,45.493658,0],[-73.574212,45.493643,0],[-73.574093,45.493651,0],[-73.573972,45.493682,0],[-73.573877,45.493737,0],[-73.573779,45.493814,0],[-73.573683,45.493869,0],[-73.573588,45.493924,0],[-73.573469,45.493933,0],[-73.573347,45.493964,0],[-73.573228,45.493973,0],[-73.57311,45.493982,0],[-73.572968,45.49397,0],[-73.572824,45.493979,0],[-73.572708,45.493991,0],[-73.572588,45.494024,0],[-73.572474,45.494014,0],[-73.572329,45.494023,0],[-73.572213,45.494035,0],[-73.5721,45.494027,0],[-73.571971,45.494051,0],[-73.571818,45.494028,0],[-73.57174,45.493953,0],[-73.571691,45.493882,0],[-73.571619,45.493789,0],[-73.571515,45.493739,0],[-73.571415,45.493694,0],[-73.571312,45.493645,0],[-73.571203,45.493615,0],[-73.571092,45.493584,0],[-73.570985,45.493531,0],[-73.570874,45.493474,0],[-73.570757,45.493461,0],[-73.570615,45.493424,0],[-73.570537,45.493374,0],[-73.57043,45.493322,0],[-73.570323,45.49327,0],[-73.570215,45.493217,0],[-73.570112,45.493143,0],[-73.570008,45.493068,0],[-73.569906,45.492996,0],[-73.56983,45.492923,0],[-73.569758,45.49283,0],[-73.569687,45.492738,0],[-73.569613,45.492666,0],[-73.5696,45.49258,0],[-73.569587,45.492494,0],[-73.569513,45.492423,0],[-73.569405,45.49237,0],[-73.569297,45.492316,0],[-73.569218,45.492266,0],[-73.569109,45.49221,0],[-73.568997,45.492151,0],[-73.568891,45.492074,0],[-73.568814,45.492001,0],[-73.568738,45.491928,0],[-73.568634,45.491852,0],[-73.568555,45.491802,0],[-73.568452,45.491728,0],[-73.568313,45.491694,0],[-73.568262,45.491645,0]],\"type\":\"LineString\"},\"id\":\"c48e510b97eb880b041d89a87f7d2d73\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1834 - 3\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1834,\"index\":7},\"geometry\":{\"coordinates\":[[-73.592069,45.48122,0],[-73.592064,45.480422,0],[-73.592061,45.479782,0],[-73.592278,45.47915,0],[-73.592266,45.478522,0],[-73.592483,45.477889,0],[-73.592479,45.477089,0],[-73.593164,45.476596,0],[-73.594078,45.47626,0],[-73.594981,45.475937,0],[-73.595655,45.475457,0],[-73.596329,45.474977,0],[-73.597002,45.474338,0],[-73.597676,45.473698,0],[-73.598125,45.473057,0],[-73.5988,45.472415,0],[-73.599477,45.47193,0],[-73.600154,45.471445,0],[-73.60037,45.470816,0],[-73.600592,45.470338,0]],\"type\":\"LineString\"},\"id\":\"d628e904d740b7ad5ae3258581b95272\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Martin 1825-08/19\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"index\":0},\"geometry\":{\"coordinates\":[[-73.550391,45.522103,0],[-73.550397,45.522046,0],[-73.550403,45.521989,0],[-73.550411,45.521922,0],[-73.550415,45.521876,0],[-73.550421,45.521832,0],[-73.550442,45.521788,0],[-73.550447,45.521744,0],[-73.550469,45.5217,0],[-73.550488,45.521654,0],[-73.550493,45.521609,0],[-73.550515,45.521553,0],[-73.550489,45.521507,0],[-73.550462,45.521461,0],[-73.550401,45.521436,0],[-73.550357,45.5214,0],[-73.550295,45.521386,0],[-73.550234,45.52136,0],[-73.550172,45.521346,0],[-73.55011,45.521333,0],[-73.550049,45.521307,0],[-73.549986,45.521293,0],[-73.54991,45.521255,0],[-73.549847,45.52124,0],[-73.549785,45.521214,0],[-73.549723,45.521199,0],[-73.549661,45.521173,0],[-73.5496,45.521136,0],[-73.549557,45.521088,0],[-73.54953,45.521041,0],[-73.549503,45.520994,0],[-73.549458,45.520969,0],[-73.549381,45.520931,0],[-73.54937,45.520885,0],[-73.549375,45.52084,0],[-73.549412,45.520796,0],[-73.549479,45.520778,0],[-73.549546,45.520759,0],[-73.549598,45.520728,0],[-73.549587,45.520682,0],[-73.549559,45.520647,0],[-73.549516,45.520599,0],[-73.549471,45.520563,0],[-73.54946,45.520517,0],[-73.549449,45.520471,0],[-73.549454,45.520426,0],[-73.549461,45.52037,0],[-73.549467,45.520314,0],[-73.549503,45.520282,0],[-73.549556,45.520239,0],[-73.549592,45.520207,0],[-73.549629,45.520164,0],[-73.549682,45.520121,0],[-73.549719,45.520078,0],[-73.549756,45.520035,0],[-73.549793,45.519992,0],[-73.549814,45.519948,0],[-73.549836,45.519904,0],[-73.549889,45.519862,0],[-73.549954,45.519854,0],[-73.55002,45.519847,0],[-73.550085,45.519839,0],[-73.550152,45.51982,0],[-73.550204,45.519789,0],[-73.550194,45.519744,0],[-73.550199,45.519699,0],[-73.550203,45.519642,0],[-73.550208,45.519597,0],[-73.550214,45.51954,0],[-73.550235,45.519496,0],[-73.550272,45.519453,0],[-73.550323,45.519433,0],[-73.550375,45.519402,0],[-73.550426,45.519371,0],[-73.550463,45.519328,0],[-73.550469,45.519283,0],[-73.550442,45.519237,0],[-73.550447,45.519192,0],[-73.550452,45.519147,0],[-73.550489,45.519104,0],[-73.550557,45.519074,0],[-73.550609,45.519043,0],[-73.550646,45.519,0],[-73.550651,45.518955,0],[-73.550657,45.518899,0],[-73.550663,45.518854,0],[-73.550684,45.51881,0],[-73.55069,45.518754,0],[-73.550711,45.51871,0],[-73.550749,45.518667,0],[-73.55077,45.518623,0],[-73.550807,45.51858,0],[-73.55086,45.518537,0],[-73.550912,45.518506,0],[-73.550934,45.518462,0],[-73.550939,45.518417,0],[-73.550896,45.51837,0],[-73.550852,45.518333,0],[-73.550807,45.518297,0],[-73.550763,45.518261,0],[-73.550752,45.518215,0],[-73.550725,45.518168,0],[-73.550713,45.518134,0],[-73.550702,45.518088,0],[-73.550724,45.518044,0],[-73.550746,45.517989,0],[-73.550783,45.517945,0],[-73.55082,45.517902,0],[-73.550858,45.517859,0],[-73.550863,45.517814,0],[-73.550852,45.517768,0],[-73.550792,45.517731,0],[-73.550746,45.517706,0],[-73.550703,45.517658,0],[-73.550708,45.517613,0],[-73.550715,45.517557,0],[-73.550736,45.517513,0],[-73.550788,45.517482,0],[-73.550855,45.517452,0],[-73.550907,45.517421,0],[-73.550944,45.517378,0],[-73.550996,45.517347,0],[-73.551033,45.517304,0],[-73.551055,45.51726,0],[-73.551061,45.517204,0],[-73.551034,45.517157,0],[-73.550989,45.517121,0],[-73.550945,45.517084,0],[-73.550885,45.517047,0],[-73.550856,45.517012,0],[-73.550813,45.516964,0],[-73.550786,45.516918,0],[-73.550761,45.51686,0],[-73.550779,45.516838,0],[-73.5508,45.516794,0],[-73.550822,45.51675,0],[-73.550875,45.516708,0],[-73.550927,45.516677,0],[-73.550948,45.516632,0],[-73.55097,45.516588,0],[-73.550992,45.516543,0],[-73.551014,45.516499,0],[-73.55102,45.516453,0],[-73.551026,45.516407,0],[-73.551048,45.516363,0],[-73.551057,45.516304,0],[-73.551066,45.516246,0],[-73.551108,45.516179,0],[-73.551116,45.516121,0],[-73.551138,45.516076,0],[-73.551175,45.516033,0],[-73.551196,45.515989,0],[-73.551199,45.515946,0],[-73.551199,45.515894,0],[-73.551219,45.515851,0],[-73.55124,45.515808,0],[-73.551245,45.515752,0],[-73.551266,45.515708,0],[-73.55127,45.515664,0],[-73.551291,45.51562,0],[-73.551313,45.515576,0],[-73.551351,45.515532,0],[-73.551372,45.515487,0],[-73.55141,45.515444,0],[-73.551446,45.515412,0],[-73.551483,45.515369,0],[-73.551537,45.515326,0],[-73.551589,45.515305,0],[-73.551643,45.515272,0],[-73.551696,45.51524,0],[-73.55175,45.515197,0],[-73.551803,45.515165,0],[-73.551856,45.515133,0],[-73.551926,45.515112,0],[-73.551978,45.51509,0],[-73.552049,45.515058,0],[-73.552119,45.515026,0],[-73.552171,45.514995,0],[-73.552209,45.514951,0],[-73.552231,45.514906,0],[-73.552237,45.51486,0],[-73.552223,45.514817,0],[-73.552207,45.514775,0],[-73.552211,45.514721,0],[-73.552213,45.514669,0],[-73.552249,45.514627,0],[-73.552383,45.514599,0],[-73.55245,45.514583,0],[-73.552517,45.514567,0],[-73.552582,45.514556,0],[-73.552649,45.514535,0],[-73.552716,45.514514,0],[-73.552784,45.514481,0],[-73.552821,45.514438,0],[-73.552873,45.514404,0],[-73.55291,45.514358,0],[-73.55293,45.514313,0],[-73.552967,45.514268,0],[-73.552973,45.51421,0],[-73.552978,45.514164,0],[-73.552951,45.514117,0],[-73.552923,45.514083,0],[-73.552912,45.514038,0],[-73.552903,45.513981,0],[-73.552909,45.513925,0],[-73.552914,45.513879,0],[-73.552935,45.513835,0],[-73.552972,45.513791,0],[-73.553009,45.513748,0],[-73.553046,45.513705,0],[-73.553083,45.513661,0],[-73.55312,45.513617,0],[-73.553157,45.513574,0],[-73.553165,45.513506,0],[-73.553201,45.513474,0],[-73.553222,45.513431,0],[-73.553243,45.513387,0],[-73.553265,45.513344,0],[-73.55327,45.513299,0],[-73.553275,45.513255,0],[-73.55328,45.513211,0],[-73.553302,45.513167,0],[-73.553308,45.513112,0],[-73.553344,45.51308,0],[-73.553366,45.513036,0],[-73.553403,45.512993,0],[-73.553424,45.512948,0],[-73.553477,45.512905,0],[-73.553544,45.512874,0],[-73.553596,45.512843,0],[-73.553633,45.512799,0],[-73.55367,45.512756,0],[-73.553723,45.512714,0],[-73.55376,45.512671,0],[-73.553797,45.512628,0],[-73.553834,45.512585,0],[-73.553856,45.512541,0],[-73.553894,45.512486,0],[-73.553915,45.512442,0],[-73.553936,45.512398,0],[-73.553957,45.512354,0],[-73.553978,45.51231,0],[-73.554016,45.512267,0],[-73.554053,45.512224,0],[-73.55409,45.512181,0],[-73.554127,45.512138,0],[-73.554164,45.512095,0],[-73.554201,45.512051,0],[-73.554236,45.512019,0],[-73.554273,45.511976,0],[-73.554296,45.511921,0],[-73.554317,45.511877,0],[-73.554338,45.511833,0],[-73.554391,45.51179,0],[-73.554427,45.511747,0],[-73.554464,45.511704,0],[-73.554501,45.511661,0],[-73.554538,45.511617,0],[-73.554591,45.511575,0],[-73.554642,45.511544,0],[-73.554662,45.5115,0],[-73.5547,45.511445,0],[-73.554722,45.511401,0],[-73.554759,45.511358,0],[-73.554781,45.511315,0],[-73.55482,45.511272,0],[-73.554858,45.511229,0],[-73.55491,45.511198,0],[-73.554963,45.511156,0],[-73.554984,45.511112,0],[-73.555004,45.511079,0],[-73.555011,45.511023,0],[-73.555032,45.510979,0],[-73.555052,45.510946,0],[-73.555059,45.510879,0],[-73.555065,45.510834,0],[-73.555086,45.51079,0],[-73.555093,45.510734,0],[-73.555114,45.51069,0],[-73.555119,45.510645,0],[-73.555125,45.510589,0],[-73.555131,45.510544,0],[-73.555137,45.510488,0],[-73.555143,45.510443,0],[-73.555149,45.510386,0],[-73.555171,45.510342,0],[-73.555176,45.510297,0],[-73.555197,45.510253,0],[-73.555203,45.510208,0],[-73.55521,45.510141,0],[-73.555232,45.510097,0],[-73.555239,45.51004,0],[-73.555261,45.509996,0],[-73.555265,45.509962,0],[-73.555257,45.509905,0],[-73.555246,45.509859,0],[-73.555253,45.509802,0],[-73.555259,45.509746,0],[-73.555296,45.509703,0],[-73.555316,45.50967,0],[-73.555338,45.509615,0],[-73.555374,45.509572,0],[-73.555394,45.509528,0],[-73.555431,45.509485,0],[-73.555453,45.50943,0],[-73.55549,45.509387,0],[-73.555528,45.509344,0],[-73.555565,45.5093,0],[-73.555602,45.509257,0],[-73.555623,45.509213,0],[-73.55566,45.50917,0],[-73.555697,45.509127,0],[-73.555735,45.509073,0],[-73.555772,45.509029,0],[-73.555809,45.508986,0],[-73.555845,45.508955,0],[-73.555883,45.5089,0],[-73.55592,45.508857,0],[-73.555942,45.508813,0],[-73.555963,45.508768,0],[-73.555985,45.508724,0],[-73.556007,45.508669,0],[-73.556026,45.508647,0],[-73.556064,45.508593,0],[-73.556084,45.508549,0],[-73.556121,45.508506,0],[-73.55614,45.508463,0],[-73.556176,45.508421,0],[-73.556213,45.508378,0],[-73.556249,45.508336,0],[-73.556287,45.508282,0],[-73.556308,45.508238,0],[-73.556345,45.508184,0],[-73.556365,45.508141,0],[-73.556402,45.508098,0],[-73.556439,45.508055,0],[-73.556479,45.507989,0],[-73.556517,45.507935,0],[-73.556556,45.50788,0],[-73.556595,45.507825,0],[-73.556633,45.507782,0],[-73.556654,45.507738,0],[-73.556692,45.507694,0],[-73.55673,45.50764,0],[-73.556768,45.507596,0],[-73.556789,45.507552,0],[-73.556811,45.507508,0],[-73.556849,45.507453,0],[-73.556871,45.507409,0],[-73.556909,45.507365,0],[-73.556948,45.507321,0],[-73.556985,45.507288,0],[-73.557025,45.507233,0],[-73.557065,45.507177,0],[-73.557103,45.507133,0],[-73.557125,45.507088,0],[-73.557164,45.507044,0],[-73.557186,45.506999,0],[-73.557191,45.506964,0],[-73.557226,45.506834,0],[-73.557278,45.506802,0],[-73.557331,45.506759,0],[-73.557384,45.506715,0],[-73.557421,45.506672,0],[-73.557442,45.506627,0],[-73.557479,45.506584,0],[-73.557516,45.50654,0],[-73.557552,45.506509,0],[-73.557589,45.506465,0],[-73.557626,45.506422,0],[-73.557663,45.506379,0],[-73.5577,45.506335,0],[-73.557738,45.506292,0],[-73.557759,45.506248,0],[-73.557796,45.506205,0],[-73.557834,45.50615,0],[-73.55787,45.506118,0],[-73.557924,45.506065,0],[-73.557961,45.506021,0],[-73.557998,45.505978,0],[-73.558035,45.505935,0],[-73.558073,45.505892,0],[-73.55811,45.505848,0],[-73.558147,45.505805,0],[-73.558183,45.505761,0],[-73.558204,45.505717,0],[-73.558258,45.505663,0],[-73.558278,45.50563,0],[-73.558315,45.505575,0],[-73.558336,45.505531,0],[-73.558373,45.505487,0],[-73.558393,45.505443,0],[-73.558446,45.5054,0],[-73.558499,45.505358,0],[-73.558536,45.505314,0],[-73.558572,45.505271,0],[-73.558593,45.505227,0],[-73.55863,45.505184,0],[-73.558683,45.505141,0],[-73.55872,45.505098,0],[-73.558758,45.505044,0],[-73.558794,45.505,0],[-73.558815,45.504956,0],[-73.558852,45.504913,0],[-73.558887,45.504881,0],[-73.558924,45.504838,0],[-73.558977,45.504796,0],[-73.559015,45.504742,0],[-73.559052,45.504698,0],[-73.559088,45.504667,0],[-73.559127,45.504612,0],[-73.559164,45.504569,0],[-73.559201,45.504526,0],[-73.559254,45.504484,0],[-73.559275,45.50444,0],[-73.559313,45.504386,0],[-73.559351,45.504343,0],[-73.559388,45.5043,0],[-73.559425,45.504257,0],[-73.559462,45.504214,0],[-73.559515,45.504172,0],[-73.559535,45.504139,0],[-73.559589,45.504086,0],[-73.559626,45.504043,0],[-73.559663,45.504,0],[-73.5597,45.503957,0],[-73.559738,45.503914,0],[-73.559776,45.503859,0],[-73.559815,45.503805,0],[-73.559836,45.503761,0],[-73.559873,45.503718,0],[-73.55991,45.503675,0],[-73.559931,45.503631,0],[-73.559967,45.503599,0],[-73.560005,45.503545,0],[-73.560043,45.503502,0],[-73.56008,45.503459,0],[-73.560117,45.503416,0],[-73.560156,45.503362,0],[-73.560191,45.50333,0],[-73.560246,45.503276,0],[-73.560283,45.503233,0],[-73.560305,45.503189,0],[-73.560359,45.503136,0],[-73.560414,45.503083,0],[-73.560451,45.503039,0],[-73.560488,45.502996,0],[-73.560526,45.502953,0],[-73.560563,45.50291,0],[-73.560585,45.502866,0],[-73.560622,45.502823,0],[-73.560659,45.50278,0],[-73.560681,45.502736,0],[-73.560734,45.502694,0],[-73.560773,45.502639,0],[-73.56081,45.502596,0],[-73.560848,45.502553,0],[-73.560887,45.502498,0],[-73.560924,45.502455,0],[-73.560962,45.502412,0],[-73.560999,45.502369,0],[-73.561037,45.502326,0],[-73.561109,45.502262,0],[-73.561131,45.502218,0],[-73.561168,45.502174,0],[-73.56119,45.50213,0],[-73.561245,45.502077,0],[-73.561283,45.502033,0],[-73.561337,45.501991,0],[-73.561375,45.501947,0],[-73.561429,45.501905,0],[-73.561466,45.501873,0],[-73.561506,45.501818,0],[-73.56156,45.501775,0],[-73.561582,45.501731,0],[-73.561605,45.501686,0],[-73.561643,45.501643,0],[-73.561665,45.501598,0],[-73.561703,45.501555,0],[-73.561725,45.50151,0],[-73.561745,45.501478,0],[-73.561798,45.501424,0],[-73.561803,45.50138,0],[-73.561839,45.501337,0],[-73.561892,45.501283,0],[-73.561944,45.501253,0],[-73.56198,45.50121,0],[-73.562017,45.501166,0],[-73.562038,45.501122,0],[-73.562075,45.501079,0],[-73.562111,45.501036,0],[-73.562147,45.501005,0],[-73.562185,45.50095,0],[-73.562222,45.500907,0],[-73.56226,45.500853,0],[-73.562295,45.500821,0],[-73.562332,45.500778,0],[-73.562368,45.500735,0],[-73.562405,45.500692,0],[-73.562442,45.500649,0],[-73.562478,45.500606,0],[-73.562515,45.500563,0],[-73.562553,45.500509,0],[-73.56259,45.500466,0],[-73.562628,45.500423,0],[-73.562663,45.500391,0],[-73.562701,45.500348,0],[-73.562755,45.500294,0],[-73.562793,45.500251,0],[-73.562814,45.500206,0],[-73.562851,45.500163,0],[-73.562873,45.500119,0],[-73.562895,45.500075,0],[-73.5629,45.500029,0],[-73.562922,45.499985,0],[-73.562895,45.499938,0],[-73.562852,45.499901,0],[-73.562841,45.499855,0],[-73.562831,45.499809,0],[-73.562837,45.499763,0],[-73.562828,45.499717,0],[-73.562834,45.499671,0],[-73.562859,45.49957,0],[-73.562897,45.499527,0],[-73.562936,45.499484,0],[-73.562974,45.499441,0],[-73.563029,45.499399,0],[-73.563068,45.499356,0],[-73.563105,45.499313,0],[-73.56306,45.499288,0],[-73.563016,45.499251,0],[-73.562955,45.499225,0],[-73.562911,45.499189,0],[-73.562849,45.499163,0],[-73.562788,45.499137,0],[-73.562742,45.499111,0],[-73.562682,45.499074,0],[-73.562621,45.499048,0],[-73.562577,45.499012,0],[-73.562514,45.498997,0],[-73.562453,45.498971,0],[-73.562407,45.498946,0],[-73.562347,45.498908,0],[-73.562285,45.498882,0],[-73.562222,45.498856,0],[-73.562177,45.498819,0],[-73.562116,45.498782,0],[-73.562069,45.498768,0],[-73.562005,45.498753,0],[-73.561962,45.498705,0],[-73.56195,45.49867,0],[-73.561971,45.498626,0],[-73.562008,45.498583,0],[-73.561998,45.498537,0],[-73.561971,45.49849,0],[-73.561908,45.498475,0],[-73.561845,45.49846,0],[-73.561802,45.498413,0],[-73.561775,45.498366,0],[-73.561796,45.498322,0],[-73.561832,45.498278,0],[-73.561838,45.498222,0],[-73.561858,45.498178,0],[-73.561895,45.498134,0],[-73.561932,45.498091,0],[-73.561951,45.498047,0],[-73.561972,45.498003,0],[-73.561993,45.497959,0],[-73.562032,45.497904,0],[-73.562054,45.49786,0],[-73.562061,45.497804,0],[-73.562099,45.49776,0],[-73.562121,45.497716,0],[-73.562158,45.497673,0],[-73.56218,45.497629,0],[-73.562217,45.497585,0],[-73.562239,45.497541,0],[-73.562277,45.497498,0],[-73.562298,45.497453,0],[-73.56232,45.497409,0],[-73.562341,45.497365,0],[-73.562363,45.497321,0],[-73.562399,45.497278,0],[-73.562435,45.497246,0],[-73.562422,45.497211,0],[-73.562378,45.497163,0],[-73.562333,45.497116,0],[-73.562322,45.49707,0],[-73.562328,45.497025,0],[-73.562333,45.49698,0],[-73.562325,45.496911,0],[-73.562298,45.496864,0],[-73.56227,45.496829,0],[-73.562244,45.496771,0],[-73.562232,45.496725,0],[-73.562238,45.496668,0],[-73.562259,45.496624,0],[-73.56228,45.49658,0],[-73.562302,45.496525,0],[-73.562307,45.49648,0],[-73.562314,45.496424,0],[-73.562319,45.496378,0],[-73.562341,45.496323,0],[-73.562362,45.496279,0],[-73.562399,45.496236,0],[-73.56245,45.496205,0],[-73.562466,45.496206,0]],\"type\":\"LineString\"},\"id\":\"ed3de43825081bc84d7b7ef248dfbfe5\"}],\"type\":\"FeatureCollection\"}");

/***/ }),

/***/ "./src/geodata.js":
/*!************************!*\
  !*** ./src/geodata.js ***!
  \************************/
/*! exports provided: resetNodesState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetNodesState", function() { return resetNodesState; });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3/dist/d3.min */ "./node_modules/d3/dist/d3.min.js");
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
/* harmony import */ var _data_historical_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/historical.json */ "./src/data/historical.json");
var _data_historical_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/historical.json */ "./src/data/historical.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var historicalRiverScale = chroma_js__WEBPACK_IMPORTED_MODULE_0___default.a.scale(['violet', 'indigo', 'blue', 'green']).domain([1, 7]);
var D3geoPath;
var svg;
var dataset;
var nodesPoint;
var nodesLine;
var nodesPoygon;

var init =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(canvas) {
    var D3geoTransform;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            D3geoTransform = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_1__["geoTransform"])({
              point: _map__WEBPACK_IMPORTED_MODULE_3__["default"].projectPoint
            });
            D3geoPath = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_1__["geoPath"])().projection(D3geoTransform); // Overlay d3 on the mapbox canvas

            svg = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_1__["select"])(canvas).append('svg').attr('id', 'map-box-vis').attr('height', '100%');
            svg.append('g').attr('id', 'polygons-container');
            svg.append('g').attr('id', 'lines-container');
            svg.append('g').attr('id', 'points-container');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

var loadData =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var dataURL, response, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dataURL = "https://api.mapbox.com/datasets/v1/".concat(_config_config_json__WEBPACK_IMPORTED_MODULE_4__.mapbox.user, "/").concat(_config_config_json__WEBPACK_IMPORTED_MODULE_4__.map.dataset, "/features?access_token=").concat(_config_config_json__WEBPACK_IMPORTED_MODULE_4__.mapbox.token);
            _context2.next = 3;
            return fetch(dataURL);

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();

          case 6:
            data = _context2.sent;
            dataset = data.features;
            dataset = dataset.concat(_data_historical_json__WEBPACK_IMPORTED_MODULE_5__.features);
            return _context2.abrupt("return", dataset);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadData() {
    return _ref2.apply(this, arguments);
  };
}();

var drawNodes =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref3) {
    var theme, themeNodes, points, lines, polygons;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            theme = _ref3.slug;

            if (dataset) {
              _context3.next = 4;
              break;
            }

            _context3.next = 4;
            return loadData();

          case 4:
            themeNodes = getThemeNodes(theme);
            points = themeNodes.filter(function (n) {
              return n.geometry.type === 'Point';
            });
            lines = themeNodes.filter(function (n) {
              return n.geometry.type === 'LineString';
            });
            polygons = themeNodes.filter(function (n) {
              return n.geometry.type === 'Polygon';
            });
            drawPolygins({
              data: polygons
            });
            drawLines({
              data: lines
            });
            drawPoints({
              data: points
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function drawNodes(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

var drawNodeByTag =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref5) {
    var tag, tagNodes, points, lines, polygons;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            tag = _ref5.name;
            tagNodes = getTagNodes(tag);
            points = tagNodes.filter(function (n) {
              return n.geometry.type === 'Point';
            });
            lines = tagNodes.filter(function (n) {
              return n.geometry.type === 'LineString';
            });
            polygons = tagNodes.filter(function (n) {
              return n.geometry.type === 'Polygon';
            });
            drawPolygins({
              data: polygons
            });
            drawLines({
              data: lines
            });
            drawPoints({
              data: points
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function drawNodeByTag(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

var getThemeNodes = function getThemeNodes(theme) {
  var selectedNodes = dataset.filter(function (node) {
    if (node.properties.theme) {
      var nodethemes = node.properties.theme.split(', ');
      var themeNode = nodethemes.filter(function (t) {
        return t.toLowerCase() === theme;
      });
      if (themeNode.length > 0) return node;
    }
  });
  return selectedNodes;
};

var getTagNodes = function getTagNodes(tag) {
  var selectedNodes = dataset.filter(function (node) {
    if (node.properties.tag) {
      var nodeTags = node.properties.tag.split(', ');
      var tagNode = nodeTags.filter(function (t) {
        return t.toLowerCase() === tag.toLowerCase();
      });
      if (tagNode.length > 0) return node;
    }
  });
  return selectedNodes;
};

var getNodeCoordinates =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_ref7) {
    var id, item, coordinates;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = _ref7.id;

            if (dataset) {
              _context5.next = 4;
              break;
            }

            _context5.next = 4;
            return loadData();

          case 4:
            item = dataset.find(function (item) {
              return item.properties.id === id;
            });

            if (item) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", _config_config_json__WEBPACK_IMPORTED_MODULE_4__.map["default"].center);

          case 7:
            if (!(item.geometry.type === 'Point')) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", item.geometry.coordinates);

          case 9:
            coordinates = item.geometry.coordinates[0];
            return _context5.abrupt("return", coordinates);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getNodeCoordinates(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

var getColours = function getColours() {
  var theme = _content__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentTheme();
  var colors = {
    river: '#0071bc'
  };

  if (theme.slug === 'environment') {
    colors.fill = '#FFDE17';
    colors.stroke = '#8B5E3C';
  } else if (theme.slug === 'water') {
    colors.fill = '#fefefe';
    colors.stroke = '#652e00';
  } else if (theme.slug === 'steps') {
    colors.fill = '#F15A29';
    colors.stroke = '#F15A29';
  }

  return colors;
};

var drawPoints = function drawPoints(_ref9) {
  var data = _ref9.data,
      _ref9$transitionTime = _ref9.transitionTime,
      transitionTime = _ref9$transitionTime === void 0 ? 1000 : _ref9$transitionTime,
      _ref9$delayTime = _ref9.delayTime,
      delayTime = _ref9$delayTime === void 0 ? 200 : _ref9$delayTime;
  var colours = getColours();
  nodesPoint = svg.select('#points-container').selectAll('.circle').data(data);
  nodesPoint.exit().attr('class', 'exit').transition().duration(500).attr('r', 0).remove();
  nodesPoint.enter().append('circle').attr('class', 'circle');
  nodesPoint = svg.selectAll('.circle').attr('id', function (d) {
    return "index-".concat(d.properties.id);
  }).attr('cx', function (d) {
    return _map__WEBPACK_IMPORTED_MODULE_3__["default"].project(d.geometry.coordinates).x;
  }).attr('cy', function (d) {
    return _map__WEBPACK_IMPORTED_MODULE_3__["default"].project(d.geometry.coordinates).y;
  }).attr('r', 0).style('cursor', 'pointer').style('stroke-width', 2).style('stroke', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.stroke).hex();
  }).style('fill', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.fill).alpha(0.7).hex();
  }).style('opacity', 0.1).on('mouseover', function (d) {
    return nodesOver(d);
  }).on('mouseout', function () {
    return nodesOut();
  }).on('click', function (d) {
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_2__["default"].showPost(d.properties);
  });
  nodesPoint.transition().duration(transitionTime).delay(function (d, i) {
    return delayTime * i;
  }).attr('r', 8).style('opacity', 1);
};

var drawLines = function drawLines(_ref10) {
  var data = _ref10.data,
      _ref10$transitionTime = _ref10.transitionTime,
      transitionTime = _ref10$transitionTime === void 0 ? 1000 : _ref10$transitionTime,
      _ref10$delayTime = _ref10.delayTime,
      delayTime = _ref10$delayTime === void 0 ? 200 : _ref10$delayTime;
  var colours = getColours();
  nodesLine = svg.select('#lines-container').selectAll('.line').data(data);
  nodesLine.exit().attr('class', 'exit').transition().duration(500).attr('stroke-width', 0).remove();
  nodesLine.enter().append('path').attr('class', 'line');
  nodesLine = svg.selectAll('.line').attr('id', function (d) {
    return d.properties.id;
  }).attr('d', D3geoPath).style('cursor', 'pointer').style('stroke-width', 0).style('stroke', function (d) {
    if (d.properties.name === 'Saint-Pierre Speculative River') return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.river).hex();
    if (d.properties.type === 'historical') return historicalRiverScale(d.properties.color).alpha(.8).hex();
    return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.stroke).hex();
  }).style('fill', 'none').style('opacity', 0.1).on('mouseover', function (d) {
    return nodesOver(d);
  }).on('mouseout', function () {
    return nodesOut();
  }).on('click', function (d) {
    var theme = _content__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentTheme();
    if (d.properties.name === 'Saint-Pierre Speculative River' && theme.slug !== 'steps') return;
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_2__["default"].showPost(d.properties);
  });
  nodesLine.transition().duration(transitionTime).delay(function (d, i) {
    return delayTime * i;
  }).style('stroke-width', 2).style('opacity', 1);
};

var drawPolygins = function drawPolygins(_ref11) {
  var data = _ref11.data,
      _ref11$transitionTime = _ref11.transitionTime,
      transitionTime = _ref11$transitionTime === void 0 ? 1000 : _ref11$transitionTime,
      _ref11$delayTime = _ref11.delayTime,
      delayTime = _ref11$delayTime === void 0 ? 200 : _ref11$delayTime;
  var colours = getColours();
  nodesPoygon = svg.select('#polygons-container').selectAll('.polygons').data(data);
  nodesPoygon.exit().attr('class', 'exit').transition().duration(500).attr('stroke-width', 0).style('opacity', 0).remove();
  nodesPoygon.enter().append('path').attr('class', 'polygons');
  nodesPoygon = svg.selectAll('.polygons').attr('id', function (d) {
    return d.properties.id;
  }).attr('d', D3geoPath).style('cursor', 'pointer').style('stroke-width', 0).style('stroke', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.stroke).hex();
  }).style('fill', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.fill).alpha(0.7).hex();
  }).style('opacity', 0.1).on('mouseover', function (d) {
    return nodesOver(d);
  }).on('mouseout', function () {
    return nodesOut();
  }).on('click', function (d) {
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_2__["default"].showPost(d.properties);
  });
  nodesPoygon.transition().duration(transitionTime).delay(function (d, i) {
    return delayTime * i;
  }).style('stroke-width', 2).style('opacity', 1);
};

var nodesUpdate = function nodesUpdate() {
  if (nodesPoint) {
    nodesPoint.attr('cx', function (d) {
      return _map__WEBPACK_IMPORTED_MODULE_3__["default"].project(d.geometry.coordinates).x;
    }).attr('cy', function (d) {
      return _map__WEBPACK_IMPORTED_MODULE_3__["default"].project(d.geometry.coordinates).y;
    });
  }

  if (nodesLine) nodesLine.attr('d', D3geoPath);
  if (nodesPoygon) nodesPoygon.attr('d', D3geoPath);
};

var nodesOver = function nodesOver(current) {
  if (nodesPoint) {
    nodesPoint.style('opacity', function (d) {
      if (d !== current) return 0.5;
    }).style('stroke-width', function (d) {
      if (d === current) return 3;
    });
  }

  if (nodesLine) {
    nodesLine.style('opacity', function (d) {
      if (current.properties.color && d.properties.color === current.properties.color) return;
      if (d.properties.name !== current.properties.name) return 0.5;
    }).style('stroke-width', function (d) {
      if (current.properties.color && d.properties.color === current.properties.color) return 3;
      if (d.properties.name === current.properties.name) return 3;
    });
  }

  if (nodesPoygon) {
    nodesPoygon.style('opacity', function (d) {
      if (d !== current) return 0.5;
    }).style('stroke-width', function (d) {
      if (d === current) return 3;
    });
  }
};

var nodesOut = function nodesOut() {
  if (nodesPoint) {
    nodesPoint.style('opacity', 1).style('stroke-width', 2);
  }

  if (nodesLine) {
    nodesLine.style('opacity', 1).style('stroke-width', 2);
  }

  if (nodesPoygon) {
    nodesPoygon.style('opacity', 1).style('stroke-width', 2);
  }
};

var resetNodesState = function resetNodesState(_ref12) {
  var _ref12$transitionTime = _ref12.transitionTime,
      transitionTime = _ref12$transitionTime === void 0 ? 2000 : _ref12$transitionTime,
      _ref12$delayTime = _ref12.delayTime,
      delayTime = _ref12$delayTime === void 0 ? 100 : _ref12$delayTime;

  if (nodesPoint) {
    nodesPoint.transition().duration(transitionTime).delay(delayTime).attr('r', 8);
  }

  if (nodesLine) {
    nodesLine.transition().duration(transitionTime).delay(delayTime).style('stroke-width', 4);
  }

  if (nodesPoygon) {
    nodesPoygon.transition().duration(transitionTime).delay(delayTime).style('stroke-width', 2);
  }
};

var setCurrentNode = function setCurrentNode(_ref13) {
  var id = _ref13.id;

  if (nodesPoint) {
    nodesPoint.transition().duration(3000).attr('r', function (d) {
      if (d.properties.id === id) return 16;
      return 8;
    }).style('opacity', 1);
  }

  if (nodesLine) {
    nodesLine.transition().duration(3000).style('stroke-width', function (d) {
      if (d.properties.id === id) return 8;
      return 2;
    }).style('opacity', 1);
  }

  if (nodesPoygon) {
    nodesPoygon.transition().duration(3000).style('stroke-width', function (d) {
      if (d.properties.id === id) return 8;
      return 2;
    }).style('opacity', 1);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  drawNodes: drawNodes,
  drawNodeByTag: drawNodeByTag,
  nodesUpdate: nodesUpdate,
  getNodeCoordinates: getNodeCoordinates,
  setCurrentNode: setCurrentNode,
  resetNodesState: resetNodesState
});

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3/dist/d3.min */ "./node_modules/d3/dist/d3.min.js");
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _geodata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geodata */ "./src/geodata.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var mapBoxConfig = {
  container: 'map',
  style: "mapbox://styles/".concat(_config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.user, "/").concat(_config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].styleID),
  center: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].center,
  //center in Montreal
  zoom: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].zoom,
  pitch: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].pitch,
  minZoom: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].minZoom,
  maxZoom: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].maxZoom,
  maxBounds: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].maxBounds,
  interactive: true
};
var mapbox;

var init =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var mapID, location;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mapID = _ref.mapID, location = _ref.location;
            return _context.abrupt("return", new Promise(function (resolve) {
              //map container set on WP > Beaver
              Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#app').select(':first-child').append('div').attr('id', 'map');
              if (location === '404') setUnknowLocation(); //404: center the map anywhere in the globe

              if (mapID) mapBoxConfig.style = "mapbox://styles/".concat(_config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.user, "/").concat(mapID); //if deeplink: set map style

              mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.accessToken = _config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.token;
              mapbox = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Map(mapBoxConfig);
              mapbox.on('load', function () {
                _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].init(mapbox.getCanvasContainer());
                mapbox.on('viewreset', update);
                mapbox.on('move', update);
                mapbox.on('moveend', update);
                if (location === '404') flyFromUnknowLocation();
                resolve();
              });
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x) {
    return _ref2.apply(this, arguments);
  };
}(); //check if map is loaded


var isMapboxLoaded = function isMapboxLoaded() {
  if (mapbox) return mapbox.isStyleLoaded();
  return false;
}; //change map style


var changeMap = function changeMap(_ref3) {
  var mapID = _ref3.mapID;
  return mapbox.setStyle("mapbox://styles/".concat(_config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.user, "/").concat(mapID));
}; // Project GeoJSON coordinate to the map's current state


var project = function project(d) {
  return mapbox.project(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.LngLat(+d[0], +d[1]));
}; // Project GeoJSON coordinate to the map's current state


var projectPoint = function projectPoint(lon, lat) {
  var point = mapbox.project(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.LngLat(lon, lat));
  this.stream.point(point.x, point.y);
}; //update


var update = function update() {
  return _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].nodesUpdate();
};

var setUnknowLocation =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var lat, lon;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //anywhere in the globe
            lat = Math.floor(Math.random() * 180) - 90;
            lon = Math.floor(Math.random() * 360) - 180;
            mapBoxConfig.zoom = 5;
            mapBoxConfig.center = [lon, lat];
            mapBoxConfig.maxBounds = null;

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function setUnknowLocation() {
    return _ref4.apply(this, arguments);
  };
}();

var flyFromUnknowLocation =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mapbox.flyTo({
              center: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].center,
              zoom: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].zoom,
              speed: 1,
              curve: 1,
              minZoom: 3,
              easing: function easing(t) {
                return t;
              }
            });
            mapbox.on('moveend', function () {
              if (mapbox.getMaxBounds() === null) mapbox.setMaxBounds(_config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].maxBounds);
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function flyFromUnknowLocation() {
    return _ref5.apply(this, arguments);
  };
}();

var flyTo = function flyTo(coordinates) {
  mapbox.flyTo({
    center: coordinates,
    zoom: 17,
    speed: 1,
    curve: 1,
    easing: function easing(t) {
      return t;
    }
  });
};

var flyToOrigin = function flyToOrigin() {
  mapbox.flyTo({
    center: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].center,
    zoom: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].zoom + 0.2,
    speed: 1.2,
    curve: 1,
    easing: function easing(t) {
      return t;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  update: update,
  isMapboxLoaded: isMapboxLoaded,
  changeMap: changeMap,
  project: project,
  projectPoint: projectPoint,
  flyTo: flyTo,
  flyToOrigin: flyToOrigin
});

/***/ }),

/***/ "./src/tags.js":
/*!*********************!*\
  !*** ./src/tags.js ***!
  \*********************/
/*! exports provided: getIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return getIcon; });
/* harmony import */ var _assets_biohazard_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/biohazard.svg */ "./src/assets/biohazard.svg");
/* harmony import */ var _assets_biohazard_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_biohazard_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_cone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/cone.svg */ "./src/assets/cone.svg");
/* harmony import */ var _assets_cone_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_cone_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_help_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/help.svg */ "./src/assets/help.svg");
/* harmony import */ var _assets_help_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_help_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_sea_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/sea.svg */ "./src/assets/sea.svg");
/* harmony import */ var _assets_sea_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_sea_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_snapchat_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/snapchat.svg */ "./src/assets/snapchat.svg");
/* harmony import */ var _assets_snapchat_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_snapchat_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_snake_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/snake.svg */ "./src/assets/snake.svg");
/* harmony import */ var _assets_snake_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_snake_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_thought_bubble_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/thought-bubble.svg */ "./src/assets/thought-bubble.svg");
/* harmony import */ var _assets_thought_bubble_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_thought_bubble_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_tsunami_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/tsunami.svg */ "./src/assets/tsunami.svg");
/* harmony import */ var _assets_tsunami_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_tsunami_svg__WEBPACK_IMPORTED_MODULE_7__);








var getIcon = function getIcon(_ref) {
  var slug = _ref.slug;
  if (slug.toLowerCase() === 'ghosts') return _assets_snapchat_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
  if (slug.toLowerCase() === 'beyond-humans') return _assets_snake_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
  if (slug.toLowerCase() === 'contamination') return _assets_biohazard_svg__WEBPACK_IMPORTED_MODULE_0___default.a;
  if (slug.toLowerCase() === 'disreappearingwaters') return _assets_sea_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
  if (slug.toLowerCase() === 'infrastructure') return _assets_cone_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
  if (slug.toLowerCase() === 'imaginaries') return _assets_thought_bubble_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
  if (slug.toLowerCase() === 'speculation') return _assets_help_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
  if (slug.toLowerCase() === 'unrullywaters') return _assets_tsunami_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getIcon: getIcon
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jpb2hhemFyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb25lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2hlbHAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VhLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYWtlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYXBjaGF0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rob3VnaHQtYnViYmxlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RzdW5hbWkuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50SFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90YWdzLmpzIl0sIm5hbWVzIjpbImhvc3QiLCJyb290UGF0aCIsImxvYWREZWVwTGluayIsInNsdWciLCJjb250ZW50IiwiY2hhbmdlQnJvd3Nlckhpc3RvcnkiLCJ0aGVtZSIsImdldFRoZW1lQnlTbHVnIiwic2hvd1BhZ2UiLCJzaG93UG9zdCIsInBvc3QiLCJnb0hvbWUiLCJsb2NhdGlvbiIsImRhdGEiLCJpbml0SG9tZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwYXRobmFtZSIsImRlZXBMaW5rIiwic3BsaXQiLCJzZWFyY2giLCJ1cmwiLCJVUkwiLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwid3AiLCJXUEFQSSIsImVuZHBvaW50IiwiY29uZmlnIiwid29yZHByZXNzIiwiY3VycmVudE5vZGUiLCJhY3RpdmVQYW5lbCIsImNvbnRlbnRIVE1MIiwidXBkYXRlTWFwIiwic2V0Q3VycmVudE5vZGUiLCJzZXRBY3RpdmVQYW5lbCIsInBhbmVsIiwiaWQiLCJzZXRUaGVtZSIsImxvYWRQYWdlIiwicGFnZURhdGEiLCJtYXAiLCJmbHlUb09yaWdpbiIsInVwZGF0ZVBhZ2UiLCJzaG93UGFuZWwiLCJ0aXRsZSIsInJlbmRlcmVkIiwicGFnZXMiLCJlbWJlZCIsImhpZGVQYW5lbCIsInNob3dTcGlubmVyIiwibG9hZFBvc3QiLCJwb3N0RGF0YSIsImhpZGVTcGlubmVyIiwicG9zdENhdGVnb3JpZXMiLCJfZW1iZWRkZWQiLCJwb3N0VGFncyIsInBvc3RUaGVtZSIsImdldFBvc3RUaGVtZSIsImNvbnNvbGUiLCJsb2ciLCJpc05ldyIsImdlb2RhdGEiLCJnZXROb2RlQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlcyIsImZseVRvIiwidXBkYXRlUG9zdCIsImZpbmQiLCJjYXQiLCJsZW5ndGgiLCJ0aGVtZVBvc3QiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwb3N0cyIsImNsb3NlUGFuZWwiLCJyZXNldE5vZGVzU3RhdGUiLCJyZXF1ZXN0ZWRUaGVtZVNsdWciLCJyZXF1ZXN0ZWRUaGVtZSIsImNoYW5nZVN0YXRlIiwic3RhdGUiLCJnZXRDdXJyZW50VGhlbWUiLCJ0aGVtZXMiLCJuZXdTdGF0ZSIsImhpZGVUb3BNZW51Iiwic2hvd0hvbWUiLCJoaWRlSG9tZSIsInNob3dUb3BNZW51IiwiaXNNYXBib3hMb2FkZWQiLCJpbml0IiwiY2hhbmdlTWFwIiwiZHJhd05vZGVzIiwidGFnU2VhcmNoIiwidGFnIiwiZHJhd05vZGVCeVRhZyIsInVwZGF0ZUhlYWRpbmciLCJuYW1lIiwicGFnZVRpdGxlIiwiZG9jdW1lbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImNvbmZpZ01haW5NZW51Iiwib24iLCJjb25maWdUb3BNZW51Iiwic3R5bGUiLCJUd2Vlbk1heCIsInRvIiwieSIsIm9uU3RhcnQiLCJ0YXJnZXQiLCJzZWxlY3RvciIsInNlbGVjdEFsbCIsInNob3dIb21lQkciLCJoaWRlSGVhZGluZyIsIm9uQ29tcGxldGUiLCJoaWRlSG9tZUJHIiwic2hvd0hlYWRpbmciLCJhbHBoYSIsImZyb21UbyIsIm91dGVySGVpZ2h0IiwicHJvcGVydHkiLCJ4IiwiUHJvbWlzZSIsInJlc29sdmUiLCJvdXRlcldpZHRoIiwiaGVhZGluZyIsImVtcHR5IiwidG9Mb3dlckNhc2UiLCJodG1sIiwiY2FwdHVyZUxpbmtzIiwidGFncyIsInRhZ3NESVYiLCJ0YWdzSFRNTCIsImV4aXQiLCJyZW1vdmUiLCJlbnRlciIsImljb24iLCJnZXRJY29uIiwiZCIsImxpbmsiLCJkb21haW4iLCJob3N0bmFtZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoaXN0b3JpY2FsUml2ZXJTY2FsZSIsImNocm9tYSIsInNjYWxlIiwiRDNnZW9QYXRoIiwic3ZnIiwiZGF0YXNldCIsIm5vZGVzUG9pbnQiLCJub2Rlc0xpbmUiLCJub2Rlc1BveWdvbiIsImNhbnZhcyIsIkQzZ2VvVHJhbnNmb3JtIiwiZ2VvVHJhbnNmb3JtIiwicG9pbnQiLCJwcm9qZWN0UG9pbnQiLCJnZW9QYXRoIiwicHJvamVjdGlvbiIsImxvYWREYXRhIiwiZGF0YVVSTCIsIm1hcGJveCIsInVzZXIiLCJ0b2tlbiIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZmVhdHVyZXMiLCJjb25jYXQiLCJoaXN0b3JpY2FsUml2ZWwiLCJ0aGVtZU5vZGVzIiwiZ2V0VGhlbWVOb2RlcyIsInBvaW50cyIsImZpbHRlciIsIm4iLCJnZW9tZXRyeSIsInR5cGUiLCJsaW5lcyIsInBvbHlnb25zIiwiZHJhd1BvbHlnaW5zIiwiZHJhd0xpbmVzIiwiZHJhd1BvaW50cyIsInRhZ05vZGVzIiwiZ2V0VGFnTm9kZXMiLCJzZWxlY3RlZE5vZGVzIiwibm9kZSIsInByb3BlcnRpZXMiLCJub2RldGhlbWVzIiwidGhlbWVOb2RlIiwidCIsIm5vZGVUYWdzIiwidGFnTm9kZSIsIml0ZW0iLCJjZW50ZXIiLCJnZXRDb2xvdXJzIiwiY29sb3JzIiwicml2ZXIiLCJmaWxsIiwic3Ryb2tlIiwidHJhbnNpdGlvblRpbWUiLCJkZWxheVRpbWUiLCJjb2xvdXJzIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicHJvamVjdCIsImhleCIsIm5vZGVzT3ZlciIsIm5vZGVzT3V0IiwiZGVsYXkiLCJpIiwiY29sb3IiLCJub2Rlc1VwZGF0ZSIsImN1cnJlbnQiLCJtYXBCb3hDb25maWciLCJjb250YWluZXIiLCJzdHlsZUlEIiwiem9vbSIsInBpdGNoIiwibWluWm9vbSIsIm1heFpvb20iLCJtYXhCb3VuZHMiLCJpbnRlcmFjdGl2ZSIsIm1hcElEIiwic2V0VW5rbm93TG9jYXRpb24iLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwiTWFwIiwiZ2V0Q2FudmFzQ29udGFpbmVyIiwidXBkYXRlIiwiZmx5RnJvbVVua25vd0xvY2F0aW9uIiwiaXNTdHlsZUxvYWRlZCIsInNldFN0eWxlIiwiTG5nTGF0IiwibG9uIiwibGF0Iiwic3RyZWFtIiwic3BlZWQiLCJjdXJ2ZSIsImVhc2luZyIsImdldE1heEJvdW5kcyIsInNldE1heEJvdW5kcyIsImdob3N0IiwiYmV5b25kSHVtYW5zIiwiY29udGFtaW5hdGlvbiIsImRpc3JlYXBwZWFyaW5nV2F0ZXJzIiwiaW5mcmFzdHJ1Y3R1cmVzIiwiaW1hZ2luYXJpZXMiLCJzcGVjdWxhdGl2ZSIsInVucnVseVdhdGVycyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QixFQUFxQyxPQUFPbUgsMkRBQVA7QUFDckMsTUFBSW5QLElBQUksQ0FBQ2dJLFdBQUwsT0FBdUIsZUFBM0IsRUFBNEMsT0FBT29ILHdEQUFQO0FBQzVDLE1BQUlwUCxJQUFJLENBQUNnSSxXQUFMLE9BQXVCLGVBQTNCLEVBQTRDLE9BQU9xSCw0REFBUDtBQUM1QyxNQUFJclAsSUFBSSxDQUFDZ0ksV0FBTCxPQUF1QixzQkFBM0IsRUFBbUQsT0FBT3NILHNEQUFQO0FBQ25ELE1BQUl0UCxJQUFJLENBQUNnSSxXQUFMLE9BQXVCLGdCQUEzQixFQUE2QyxPQUFPdUgsdURBQVA7QUFDN0MsTUFBSXZQLElBQUksQ0FBQ2dJLFdBQUwsT0FBdUIsYUFBM0IsRUFBMEMsT0FBT3dILGlFQUFQO0FBQzFDLE1BQUl4UCxJQUFJLENBQUNnSSxXQUFMLE9BQXVCLGFBQTNCLEVBQTBDLE9BQU95SCx1REFBUDtBQUMxQyxNQUFJelAsSUFBSSxDQUFDZ0ksV0FBTCxPQUF1QixlQUEzQixFQUE0QyxPQUFPMEgsMERBQVA7QUFFNUMsQ0FYTTtBQWNRO0FBQ2RoSCxTQUFPLEVBQVBBO0FBRGMsQ0FBZixFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbmltcG9ydCBjb250ZW50IGZyb20gJy4vY29udGVudCc7XG5cblxuY29uc3QgaG9zdCA9ICdodHRwOi8vbG9jYWxob3N0Ojg4ODgnOyAvLydodHRwOi8vbG9jYWxob3N0Ojg4ODgnOyAvLyBodHRwOi8vbGFicy5mbHV4by5hcnQuYnJcbmNvbnN0IHJvb3RQYXRoID0gJy9naG9zdC1yaXZlci8nO1xuXG5cbmNvbnN0IGxvYWREZWVwTGluayA9IGFzeW5jIHNsdWcgPT4ge1xuXG5cdGNvbnRlbnQuY2hhbmdlQnJvd3Nlckhpc3Rvcnkoe3NsdWd9KTtcdFx0XHRcdFx0Ly9jaGFuZ2UgVVJMIEJhclxuXG5cdGxldCB0aGVtZSA9IGNvbnRlbnQuZ2V0VGhlbWVCeVNsdWcoc2x1Zyk7XHRcdFx0XHQvL2dldCB0aGVtZSBiYXNlZCBvbiB0aGUgc2VhcmNoIHBhcmFtZXRlcnNcblxuXHQvL2lmIHNlYXJjaCBtYXRjaCB0byB0aGVtZSAocGFnZSlcblx0aWYgKHRoZW1lKSB7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdGF3YWl0IGNvbnRlbnQuc2hvd1BhZ2UodGhlbWUpO1x0XHRcdFx0XHRcdC8vbG9hZCB0aGUgdGhlbWUgcGFnZVxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vdHJ5IHRvIGxvYWQgYSBwb3N0IGJhc2VkIG9uIHNlYXJjaCBwYXJhbWV0ZXJzXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBjb250ZW50LnNob3dQb3N0KHtzbHVnfSk7XHRcdFx0XG5cblx0Ly9pZiBubyBwYWdlL3Bvc3QgZm91bmQ6IGxvYWQgaG9tZSB3aXRoIDQwNFxuXHRpZiAoIXBvc3QpIGdvSG9tZSh7bG9jYXRpb246ICc0MDQnfSk7XG5cbn07XG5cbmNvbnN0IGdvSG9tZSA9IGFzeW5jIGRhdGEgPT4ge1xuXG5cdGNvbnRlbnQuY2hhbmdlQnJvd3Nlckhpc3Rvcnkoe3NsdWc6IHJvb3RQYXRofSk7XG5cdGNvbnRlbnQuaW5pdEhvbWUoZGF0YSk7XG5cbn07XG4gXG4oIGFzeW5jICgpID0+IHtcdFx0XG5cblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDg4MCkgZ29Ib21lKHtsb2NhdGlvbjogJ2hvbWUnfSk7XG5cblx0Ly90ZXN0IGlmIHVybCBpcyB0cnlpbmcgdG8gcmVhY2ggYSBkZWVwbGlua1x0XHRcblx0aWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gcm9vdFBhdGgpIHtcdFx0XHRcdFx0XHRcdFx0XG5cdFx0Y29uc3QgZGVlcExpbmsgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTsgXHQvL2dldCBwYXRoIGFmdGVyIHRoZSAnLycgYXMgZGVlcGxpbmtcblx0XHRsb2NhdGlvbiA9IGAke2hvc3R9JHtyb290UGF0aH0/bm9kZT0ke2RlZXBMaW5rfWA7XHRcdFx0Ly9uYXZpYXRlIHRvIHJvb3Qgd2l0aCBkZWVwbGluayBhcyBhIHNlYXJjaCBwYXJhbWV0ZXJzXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly90ZXN0IGlmIHVybCBpcyBzZWFyY2hpbmcgZm9yIGRlZXBsaW5rXG5cdGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1x0XHRcdFx0XHQvL2dldCB1dGxcdFx0XG5cdFx0Y29uc3Qgc2x1ZyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdub2RlJyk7XHRcdFx0XHRcdC8vZ2V0IHRoZSBwYXJhbXMgZm9yIHNlYXJjaCAoYSBzbHVnIGZvciBhIHBhZ2Ugb3IgcG9zdClcblx0XHRsb2FkRGVlcExpbmsoc2x1Zyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly9HbyBIb21lXG5cdGdvSG9tZSh7bG9jYXRpb246ICdob21lJ30pO1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJiaW9oYXphcmRcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMi4wNTEgMzIuMDUxXFxcIj48Zz48cGF0aCBkPVxcXCJNMjUuMjY3LDEzLjI0N2MtMC40MjUtMC4xMjItMC44NzgtMC4xMjktMS4zMjEtMC4xNDZjMC4xMjEtMC4zMTEsMy4zMjYtOC4yNTgtNS4xMzYtMTEuNDA4IGMtMC4wMDQsMC4wNzEtMC4wMSwwLjE0My0wLjAyMSwwLjIxMWM1LjQzOCwzLjI2OCwyLjkyMiw4LjUwMiwyLjcxNyw4LjczMWMtMS40OTktMS4xNTQtMy4zNzEtMS44NC01LjQwMy0xLjg0IGMtMi4wNjgsMC0zLjk3MiwwLjcxMS01LjQ4MywxLjkwNGMtMC4zNzItMC42MTUtMC42NjItMS4zMTUtMC44NDctMi4wODdjLTAuMTUtMS4zNTEtMC4wNTYtMi41NjUsMC41MzMtMy44MjEgYzAuNTgzLTEuMTQ0LDEuNTIyLTIuMTExLDIuNjQtMi43NDRjLTAuMDEzLTAuMDYyLTAuMDIzLTAuMTI1LTAuMDMxLTAuMTljLTEuMjQsMC41MDEtMi4zNjksMS4zNC0zLjM4MSwyLjQyMiBjLTAuNDQsMC42MTUtMy4wNzMsMy43ODItMS40MDgsOC42MTdjLTAuNDQ5LDAuMDE2LTAuODk1LDAuMDYzLTEuMzM1LDAuMTQ2Yy0xLjc1MSwwLjM3Mi00LjUzNCwxLjg3OC01Ljg0NSw0LjQ2NyBjLTAuNDM5LDAuNzQtMC42MTIsMS40OTYtMC44MTksMi4yMjZjLTAuMjEyLDEuNDY0LTAuMTY2LDIuODcsMC4yMTUsNC4xNTNjMC4wNTYtMC4wMzQsMC4xMTEtMC4wNjYsMC4xNjgtMC4wOTYgYy0wLjIwMS0xLjI2OS0wLjAzMi0yLjYwOCwwLjUtMy43NzRjMC42MTQtMS4yNDYsMS41MDQtMi4wNzUsMi42NTQtMi43OThjMS45MzctMC45MDgsMy41NjQtMC42NTYsMy42MzEtMC42NDUgYy0wLjA0MywwLjM1OC0wLjA2OCwwLjcyMy0wLjA2OCwxLjA5NmMwLDMuNTQ5LDIuMDk1LDYuNjE1LDUuMTEzLDguMDM1Yy0wLjAxNiwwLjA0My0wLjAzMSwwLjA4Ni0wLjA0NSwwLjEyNSBjLTAuMDU2LDAuMTAzLTIuODUsNC42NTEtOC4yNTIsMi42MTljLTAuMDQ4LDAuMDUxLTAuMDk5LDAuMS0wLjE1MSwwLjE0N2MwLjY2MywwLjUxLDYuMzAzLDQuMjksMTEuNDk3LTIuMDg2IGMwLjIzNSwwLjAyMSwwLjQ3MywwLjAzNCwwLjcxNCwwLjAzNGMwLjE0NSwwLDAuMjg5LTAuMDA2LDAuNDMzLTAuMDEyYzEuMDk3LDEuNTI1LDUuMyw2LjI0NCwxMS42MzMsMi4yNjggYy0wLjA1NC0wLjA0OS0wLjEwNC0wLjA5OC0wLjE1LTAuMTQ5Yy01LjY1MiwyLjExLTguMzEyLTIuNzc2LTguMzQyLTIuODZjMy4zNjEtMS41MjgsNS4zMDItNC41LDUuMzAyLTguMTIxIGMwLTAuMzEyLTAuMDE3LTAuNjE3LTAuMDQ3LTAuOTIyYzAuMDEyLTAuMDAyLDAuMDIxLTAuMDA0LDAuMDM1LTAuMDA4YzEuMDk5LTAuMDc0LDIuMjc1LDAuMTM5LDMuNDI5LDAuNjggYzEuMTUsMC43MjYsMi4wNCwxLjU1NiwyLjY1NCwyLjgwMWMwLjUzLDEuMTY3LDAuNywyLjUwNCwwLjQ5OSwzLjc3M2MwLjA1OCwwLjAyOSwwLjExMiwwLjA2LDAuMTY4LDAuMDk2IEMzMi4xNzgsMjIuNjQsMzMuMzMzLDE1LjU2MiwyNS4yNjcsMTMuMjQ3eiBNMTEuNTkzLDE5LjE5MmMtMC4wMDQtMC4wMDQtMC4wMS0wLjAxMi0wLjAxNS0wLjAxOGwwLjAxMiwwLjAxNEwxMS41OTMsMTkuMTkyeiBNMTMuODAzLDE3LjY3MWMwLTAuODM4LDAuNDQ4LTEuNTY1LDEuMTE4LTEuOTcxYzAuMzQ1LTAuMjA3LDAuNzQ4LTAuMzI5LDEuMTgtMC4zMjljMC40NSwwLDAuODcsMC4xMzMsMS4yMjQsMC4zNTQgYzAuNjQ2LDAuNDA4LDEuMDc1LDEuMTI1LDEuMDc1LDEuOTQ1YzAsMC45NDktMC41NzksMS43Ny0xLjQwNCwyLjExOWMtMC4yNzUsMC4xMTUtMC41NzgsMC4xOC0wLjg5NSwwLjE4IEMxNC44MzEsMTkuOTcxLDEzLjgwMywxOC45NCwxMy44MDMsMTcuNjcxeiBNMTYuMTAxLDExLjIwOWMxLjM3MywwLDIuNjQ2LDAuNDM0LDMuNjk0LDEuMTY3Yy0xLjE2NSwwLjgyNS00Ljc0MywyLjEyMy03LjQ5NiwwLjA3OCBDMTMuMzY3LDExLjY3MiwxNC42ODEsMTEuMjA5LDE2LjEwMSwxMS4yMDl6IE05LjY0MiwxNy42NzFjMC0wLjA5MiwwLjAwNC0wLjE4NSwwLjAwNi0wLjI3N2MwLjEwNywwLjA2MSwyLjk5OSwxLjYyMSwzLjIyMSw1Ljg2NSBDMTAuOTQyLDIyLjEzOSw5LjY0MiwyMC4wNTUsOS42NDIsMTcuNjcxeiBNMTkuMTg4LDIzLjM0M2MwLjAwMi0wLjEwOCwwLjIzOS00LjAxNiwzLjM2OS01LjgyNCBjMC4wMDEsMC4wNSwwLjAwNCwwLjEwMiwwLjAwNCwwLjE1MkMyMi41NjIsMjAuMTE0LDIxLjE5NiwyMi4yNDUsMTkuMTg4LDIzLjM0M3pcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcImNvbmVcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCI+PHBhdGggZD1cXFwibTEzLjUgNTZoMzdjMy4wMzMgMCA1LjUtMi40NjggNS41LTUuNXMtMi40NjctNS41LTUuNS01LjVoLTEuMDQ2bC0zLjc4Ny0xMS42NzVjLS4wMDQtLjAxNS0uMDEtLjAzLS4wMTQtLjA0NWwtMy4zNzMtMTAuNHYtLjAwMWwtMy40OC0xMC43MjljLS44MDUtMi40ODMtMy4wOTgtNC4xNS01LjcwOC00LjE1aC0yLjE4NWMtMi42MDkgMC00LjkwMyAxLjY2Ny01LjcwNyA0LjE0OWwtNi44NTQgMjEuMTMzYy0uMDA0LjAxNC0uMDEuMDI4LS4wMTQuMDQzbC0zLjc4NiAxMS42NzVoLTEuMDQ2Yy0zLjAzMyAwLTUuNSAyLjQ2OC01LjUgNS41czIuNDY3IDUuNSA1LjUgNS41em0xMS4zODEtMjkuODk5YzIuMTguNTg5IDQuNjAxLjg5OSA3LjExOS44OTlzNC45MzgtLjMxIDcuMTE5LS44OTlsMi4yMjggNi44NjljLTIuMzE4IDEuMjY2LTUuNzQyIDIuMDMtOS4zNDcgMi4wM3MtNy4wMjktLjc2NC05LjM0Ny0yLjAzem00LjEyNC0xMi43MThjLjI2OC0uODI3IDEuMDMzLTEuMzgzIDEuOTAzLTEuMzgzaDIuMTg1Yy44NyAwIDEuNjM0LjU1NiAxLjkwMiAxLjM4M2wyLjg4OCA4LjkwNWMtMS43OTQuNDYxLTMuODIuNzEyLTUuODgzLjcxMnMtNC4wODktLjI1MS01Ljg4My0uNzEyem0tNy42MDIgMjMuNDM5YzIuODY1IDEuMzgzIDYuNjI3IDIuMTc4IDEwLjU5NyAyLjE3OHM3LjczMi0uNzk1IDEwLjU5Ny0yLjE3OGwyLjY1MiA4LjE3OGgtMjYuNDk4em0tNy45MDMgMTIuMTc4aDM0LjQ5M2MuMDAyIDAgLjAwNC4wMDEuMDA2LjAwMXMuMDA0LS4wMDEuMDA2LS4wMDFoMi40OTVjLjgyNyAwIDEuNS42NzMgMS41IDEuNXMtLjY3MyAxLjUtMS41IDEuNWgtMzdjLS44MjcgMC0xLjUtLjY3My0xLjUtMS41cy42NzMtMS41IDEuNS0xLjV6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcImhlbHBcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIj48Zz48Zz48Zz48cGF0aCBkPVxcXCJNMjQ4LjE1OCwzNDMuMjJjLTE0LjYzOSwwLTI2LjQ5MSwxMi4yLTI2LjQ5MSwyNi44NGMwLDE0LjI5MSwxMS41MDMsMjYuODQsMjYuNDkxLDI2Ljg0IGMxNC45ODgsMCwyNi44NC0xMi41NDgsMjYuODQtMjYuODRDMjc0Ljk5OCwzNTUuNDIsMjYyLjc5OSwzNDMuMjIsMjQ4LjE1OCwzNDMuMjJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI1Mi42OSwxNDAuMDAyYy00Ny4wNTcsMC02OC42NjgsMjcuODg1LTY4LjY2OCw0Ni43MDhjMCwxMy41OTUsMTEuNTAyLDE5Ljg2OSwyMC45MTQsMTkuODY5IGMxOC44MjIsMCwxMS4xNTQtMjYuODQsNDYuNzA4LTI2Ljg0YzE3LjQyOSwwLDMxLjM3Miw3LjY2OSwzMS4zNzIsMjMuNzAzYzAsMTguODI0LTE5LjUyLDI5LjYyOS0zMS4wMjMsMzkuMzg5IGMtMTAuMTA4LDguNzE0LTIzLjM1NCwyMy4wMDYtMjMuMzU0LDUyLjk4M2MwLDE4LjEyNSw0Ljg3OSwyMy4zNTQsMTkuMTcxLDIzLjM1NGMxNy4wOCwwLDIwLjU2NS03LjY2OCwyMC41NjUtMTQuMjkxIGMwLTE4LjEyNiwwLjM1LTI4LjU4MywxOS41MjEtNDMuNTcxYzkuNDExLTcuMzIsMzkuMDQtMzEuMDIzLDM5LjA0LTYzLjc4OVMyOTcuMzA3LDE0MC4wMDIsMjUyLjY5LDE0MC4wMDJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI1NiwwQzExNC41MTYsMCwwLDExNC40OTcsMCwyNTZ2MjM2YzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDIzNmMxNDEuNDgzLDAsMjU2LTExNC40OTcsMjU2LTI1NiBDNTEyLDExNC41MTYsMzk3LjUwMywwLDI1NiwweiBNMjU2LDQ3Mkg0MFYyNTZjMC0xMTkuMzc3LDk2LjYwNy0yMTYsMjE2LTIxNmMxMTkuMzc3LDAsMjE2LDk2LjYwNywyMTYsMjE2IEM0NzIsMzc1LjM3NywzNzUuMzkzLDQ3MiwyNTYsNDcyelxcXCI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJzZWFcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIuMDA0IDUxMi4wMDRcXFwiPjxnPjxnPjxwYXRoIGQ9XFxcIk01MDMuMzI1LDE0MC45MzFjLTE0LjI5LDAtMjAuOTg5LTYuMTQyLTI5LjQ2OS0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODItNDEuMTk4LTE4LjQ4MiBzLTMxLjc1MSw5LjgxOS00MS4xOTksMTguNDgyYy04LjQ3OSw3Ljc3Ni0xNS4xNzcsMTMuOTE4LTI5LjQ2NywxMy45MThzLTIwLjk4OC02LjE0Mi0yOS40NjctMTMuOTE4IGMtOS40NDgtOC42NjMtMjAuMTU1LTE4LjQ4Mi00MS4xOTgtMTguNDgycy0zMS43NSw5LjgxOS00MS4xOTgsMTguNDgzYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE3LTI5LjQ2NSwxMy45MTcgYy0xNC4yODgsMC0yMC45ODUtNi4xNDItMjkuNDY0LTEzLjkxN2MtOS40NDctOC42NjMtMjAuMTU0LTE4LjQ4My00MS4xOTYtMTguNDgzYy0yMS4wNDIsMC0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MiBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTgtMjkuNDY1LDEzLjkxOHMtMjAuOTg3LTYuMTQyLTI5LjQ2Ni0xMy45MThjLTkuNDQ4LTguNjYyLTIwLjE1NS0xOC40ODItNDEuMTk3LTE4LjQ4MiBjLTQuNzk0LDAtOC42NzgsMy44ODYtOC42NzgsOC42NzhzMy44ODQsOC42NzgsOC42NzgsOC42NzhjMTQuMjg5LDAsMjAuOTg3LDYuMTQyLDI5LjQ2NSwxMy45MTcgYzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODMsNDEuMTk4LDE4LjQ4M2MyMS4wNDIsMCwzMS43NDktOS44MTksNDEuMTk3LTE4LjQ4MWM4LjQ3OC03Ljc3NiwxNS4xNzYtMTMuOTE4LDI5LjQ2NS0xMy45MTggYzE0LjI4OCwwLDIwLjk4NSw2LjE0MiwyOS40NjQsMTMuOTE3YzkuNDQ3LDguNjYzLDIwLjE1NCwxOC40ODMsNDEuMTk2LDE4LjQ4M3MzMS43NDktOS44MTgsNDEuMTk3LTE4LjQ4MSBjOC40NzktNy43NzYsMTUuMTc3LTEzLjkxOCwyOS40NjYtMTMuOTE4czIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE3YzkuNDQ4LDguNjYzLDIwLjE1NiwxOC40ODMsNDEuMTk4LDE4LjQ4MyBzMzEuNzUtOS44MTgsNDEuMTk4LTE4LjQ4MWM4LjQ4MS03Ljc3NiwxNS4xNzgtMTMuOTE4LDI5LjQ2OS0xMy45MThjMTQuMjksMCwyMC45ODksNi4xNDIsMjkuNDY5LDEzLjkxOCBjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4MSw0MS4xOTgsMTguNDgxYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzhDNTEyLjAwNCwxNDQuODE3LDUwOC4xMTksMTQwLjkzMSw1MDMuMzI1LDE0MC45MzF6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNNTAzLjMyMywyMjIuNjU5Yy0xNC4yOSwwLTIwLjk4OS02LjE0Mi0yOS40NjktMTMuOTE4Yy05LjQ0Ny04LjY2My0yMC4xNTUtMTguNDgyLTQxLjE5OC0xOC40ODIgcy0zMS43NTEsOS44MTktNDEuMTk5LDE4LjQ4MmMtOC40NzksNy43NzYtMTUuMTc3LDEzLjkxOC0yOS40NjcsMTMuOTE4cy0yMC45ODgtNi4xNDItMjkuNDY4LTEzLjkxOCBjLTkuNDQ3LTguNjYzLTIwLjE1My0xOC40ODItNDEuMTk3LTE4LjQ4MnMtMzEuNzUsOS44MTktNDEuMTk4LDE4LjQ4M2MtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxNy0yOS40NjUsMTMuOTE3IGMtMTQuMjg4LDAtMjAuOTg0LTYuMTQyLTI5LjQ2NC0xMy45MTdjLTEuMDgzLTAuOTkzLTIuMTY1LTEuOTg2LTMuMjYzLTIuOTY1Yy0zLjU3OC0zLjE5LTkuMDY0LTIuODczLTEyLjI1MywwLjcwMyBjLTMuMTg5LDMuNTc4LTIuODczLDkuMDY0LDAuNzA0LDEyLjI1M2MxLjAzNywwLjkyNCwyLjA1OSwxLjg2MiwzLjA4MSwyLjc5OWM5LjQ0Nyw4LjY2MiwyMC4xNTQsMTguNDgxLDQxLjE5NSwxOC40ODEgYzIxLjA0MiwwLDMxLjc0OS05LjgxOCw0MS4xOTctMTguNDgxYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOHMyMC45ODcsNi4xNDIsMjkuNDY2LDEzLjkxNyBjOS40NDgsOC42NjMsMjAuMTU2LDE4LjQ4Myw0MS4xOTgsMTguNDgzczMxLjc1LTkuODE4LDQxLjE5OC0xOC40ODFjOC40OC03Ljc3NiwxNS4xNzgtMTMuOTE4LDI5LjQ2OS0xMy45MTggYzE0LjI5LDAsMjAuOTg5LDYuMTQyLDI5LjQ2OSwxMy45MThjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4MSw0MS4xOTgsMTguNDgxYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzggQzUxMi4wMDEsMjI2LjU0NCw1MDguMTE2LDIyMi42NTksNTAzLjMyMywyMjIuNjU5elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTE2Mi4zNzYsMTkxLjU2MWMtMy44NjQtMC44NjMtOC4wMjctMS4zMDItMTIuMzcyLTEuMzAyYy0yMS4wNDIsMC0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MSBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTgtMjkuNDY1LDEzLjkxOHMtMjAuOTg3LTYuMTQyLTI5LjQ2Ni0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODEtNDEuMTk3LTE4LjQ4MSBjLTQuNzk0LDAtOC42NzgsMy44ODYtOC42NzgsOC42NzhzMy44ODQsOC42OCw4LjY3OCw4LjY4YzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjUsMTMuOTE3IGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgzLDQxLjE5OCwxOC40ODNjMjEuMDQyLDAsMzEuNzQ5LTkuODE5LDQxLjE5Ny0xOC40ODJjOC40NzgtNy43NzYsMTUuMTc2LTEzLjkxOCwyOS40NjUtMTMuOTE4IGMzLjExOCwwLDUuOTI3LDAuMjg5LDguNTg3LDAuODgzYzQuNjc0LDEuMDQ0LDkuMzE3LTEuODk5LDEwLjM2Mi02LjU3N1MxNjcuMDUzLDE5Mi42MDYsMTYyLjM3NiwxOTEuNTYxelxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTUwMy4zMjMsMzg2LjExNWMtMTQuMjksMC0yMC45ODktNi4xNDItMjkuNDY5LTEzLjkxOGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4MS00MS4xOTgtMTguNDgxIHMtMzEuNzUxLDkuODE5LTQxLjE5OSwxOC40ODFjLTguNDc5LDcuNzc2LTE1LjE3NywxMy45MTgtMjkuNDY3LDEzLjkxOHMtMjAuOTg4LTYuMTQyLTI5LjQ2OC0xMy45MTggYy05LjQ0Ny04LjY2My0yMC4xNTMtMTguNDgxLTQxLjE5Ny0xOC40ODFzLTMxLjc1LDkuODE5LTQxLjE5OCwxOC40ODNjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTctMjkuNDY1LDEzLjkxNyBjLTE0LjI4OCwwLTIwLjk4NS02LjE0Mi0yOS40NjQtMTMuOTE3Yy05LjQ0Ny04LjY2My0yMC4xNTQtMTguNDgzLTQxLjE5Ni0xOC40ODNzLTMxLjc0OSw5LjgxOS00MS4xOTcsMTguNDgxIGMtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxOC0yOS40NjUsMTMuOTE4Yy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4YzAsNC43OTMsMy44ODQsOC42NzgsOC42NzgsOC42NzggYzIxLjA0MiwwLDMxLjc0OS05LjgxOSw0MS4xOTctMTguNDgxYzguNDc4LTcuNzc2LDE1LjE3Ni0xMy45MTgsMjkuNDY1LTEzLjkxOGMxNC4yODgsMCwyMC45ODUsNi4xNDIsMjkuNDY0LDEzLjkxNyBjOS40NDcsOC42NjMsMjAuMTU0LDE4LjQ4Myw0MS4xOTYsMTguNDgzczMxLjc0OS05LjgxOCw0MS4xOTctMTguNDgxYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOCBzMjAuOTg3LDYuMTQyLDI5LjQ2NiwxMy45MThjOS40NDgsOC42NjIsMjAuMTU2LDE4LjQ4MSw0MS4xOTgsMTguNDgxczMxLjc1LTkuODE4LDQxLjE5OC0xOC40ODEgYzguNDgxLTcuNzc2LDE1LjE3OC0xMy45MTgsMjkuNDY5LTEzLjkxOGMxNC4yOSwwLDIwLjk4OSw2LjE0MiwyOS40NjksMTMuOTE4YzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODEsNDEuMTk4LDE4LjQ4MSBjNC43OTQsMCw4LjY3OC0zLjg4Niw4LjY3OC04LjY3OEM1MTIuMDAxLDM5MC4wMDEsNTA4LjExNiwzODYuMTE1LDUwMy4zMjMsMzg2LjExNXpcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk01OS4wMjgsMzc5LjkxN2MtMy4xNjItMi4yMjctNi4wNzEtNC44OTUtOS4xNTItNy43MTljLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODMtNDEuMTk3LTE4LjQ4MyBjLTQuNzk0LDAtOC42NzgsMy44ODYtOC42NzgsOC42NzhzMy44ODQsOC42NzgsOC42NzgsOC42NzhjMTQuMjg5LDAsMjAuOTg3LDYuMTQyLDI5LjQ2NiwxMy45MTggYzMuMzUsMy4wNzEsNi44MTIsNi4yNDYsMTAuODg4LDkuMTE3YzEuNTE5LDEuMDcsMy4yNjIsMS41ODQsNC45OSwxLjU4NGMyLjcyNywwLDUuNDE0LTEuMjgyLDcuMTA0LTMuNjgyIEM2My44ODYsMzg4LjA5LDYyLjk0NiwzODIuNjc3LDU5LjAyOCwzNzkuOTE3elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTUwMy4zMjMsMzA0LjM4N2MtMTQuMjksMC0yMC45ODktNi4xNDItMjkuNDY5LTEzLjkxOGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4MS00MS4xOTgtMTguNDgxIGMtMjEuMDQyLDAtMzEuNzQ5LDkuODE4LTQxLjE5OCwxOC40OGMtMy41MzMsMy4yMzktMy43NzEsOC43MjgtMC41MzEsMTIuMjYyYzMuMjM4LDMuNTMzLDguNzI3LDMuNzcsMTIuMjYyLDAuNTMxIGM4LjQ3OS03Ljc3NSwxNS4xNzgtMTMuOTE3LDI5LjQ2Ny0xMy45MTdjMTQuMjksMCwyMC45ODksNi4xNDIsMjkuNDY5LDEzLjkxOGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgxLDQxLjE5OCwxOC40ODEgYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzhDNTEyLjAwMSwzMDguMjcyLDUwOC4xMTYsMzA0LjM4Nyw1MDMuMzIzLDMwNC4zODd6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNMzgyLjEyOCwzMDkuNTE2Yy0xLjE5MS00LjY0Mi01LjkxNS03LjQzOS0xMC41NjUtNi4yNDhjLTIuOTM0LDAuNzUzLTYuMDY2LDEuMTItOS41NzMsMS4xMiBjLTE0LjI5LDAtMjAuOTg4LTYuMTQyLTI5LjQ2OC0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NC0xOC40ODItNDEuMTk3LTE4LjQ4MnMtMzEuNzUsOS44MTktNDEuMTk4LDE4LjQ4MyBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTctMjkuNDY1LDEzLjkxN2MtMTQuMjg4LDAtMjAuOTg1LTYuMTQyLTI5LjQ2NC0xMy45MThjLTkuNDQ3LTguNjYyLTIwLjE1NC0xOC40ODItNDEuMTk2LTE4LjQ4MiBjLTIxLjA0MiwwLTMxLjc0OSw5LjgxOS00MS4xOTcsMTguNDgyYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE4LTI5LjQ2NSwxMy45MThzLTIwLjk4Ny02LjE0Mi0yOS40NjYtMTMuOTE4IGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4Mi00MS4xOTctMTguNDgyYy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4czMuODg2LDguNjc3LDguNjgsOC42NzcgYzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjUsMTMuOTE3YzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODMsNDEuMTk4LDE4LjQ4M2MyMS4wNDIsMCwzMS43NDktOS44MTksNDEuMTk3LTE4LjQ4MiBjOC40NzgtNy43NzYsMTUuMTc2LTEzLjkxOCwyOS40NjUtMTMuOTE4YzE0LjI4OCwwLDIwLjk4NSw2LjE0MiwyOS40NjQsMTMuOTE4YzkuNDQ3LDguNjYyLDIwLjE1NCwxOC40ODEsNDEuMTk2LDE4LjQ4MSBzMzEuNzQ5LTkuODE4LDQxLjE5Ny0xOC40ODFjOC40NzktNy43NzYsMTUuMTc3LTEzLjkxOCwyOS40NjYtMTMuOTE4czIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE4IGM5LjQ0OCw4LjY2MiwyMC4xNTYsMTguNDgxLDQxLjE5OCwxOC40ODFjNC45MTMsMCw5LjU4Ny0wLjU2LDEzLjg5LTEuNjY0QzM4MC41MjMsMzE4Ljg4OCwzODMuMzE5LDMxNC4xNTcsMzgyLjEyOCwzMDkuNTE2elxcXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcInNuYWtlXFxcIiBjbGFzcz1cXFwidGFnLWljb25cXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIj48cGF0aCBkPVxcXCJtNDAxLjc0MjE4OCAxNTIuNjM2NzE5YzIwLjQ4MDQ2OCAxLjAxNTYyNSA0Mi4xMzY3MTgtNy42NDQ1MzEgNTguMTQ0NTMxLTIzLjY1NjI1IDIyLjc0NjA5My0yMi43NDIxODggMTcuMDkzNzUtNjMuMjg5MDYzIDEzLjAxOTUzMS04MS41ODk4NDRsMjYuMjMwNDY5LTI2LjIzMDQ2OS0yMS4xNjQwNjMtMjEuMTYwMTU2LTI2LjIyNjU2MiAyNi4yMjY1NjJjLTE4LjMwNDY4OC00LjA3NDIxOC01OC44NTE1NjMtOS43MjY1NjItODEuNTkzNzUgMTMuMDE5NTMyLTE0LjYxMzI4MiAxNC42MDkzNzUtMjMuMTkxNDA2IDMzLjk3NjU2Mi0yMy43MjI2NTYgNTIuOTU3MDMxbC0yMi43Njk1MzIgMjQuMzUxNTYzYy0xNy43Njk1MzEgMTktMjcuMzE2NDA2IDQzLjc5Mjk2OC0yNi44ODI4MTIgNjkuODA0Njg3LjQzNzUgMjYuMDExNzE5IDEwLjgwODU5NCA1MC40NzI2NTYgMjkuMjAzMTI1IDY4Ljg2NzE4N2w1MS42NjQwNjIgNTEuNjY0MDYzYzUuNzkyOTY5IDUuNzkyOTY5IDUuNzkyOTY5IDE1LjIxNDg0NCAwIDIxLjAxMTcxOWwtMS4xODc1IDEuMTg3NWMtNS43OTI5NjkgNS43OTI5NjgtMTUuMjE4NzUgNS43OTI5NjgtMjEuMDExNzE5IDBsLTE3Ni43MDMxMjQtMTc2LjcwNzAzMmMtMTcuNjc5Njg4LTE3LjY3OTY4Ny00MS4xNzU3ODItMjcuNjQwNjI0LTY2LjE2MDE1Ny0yOC4wNTA3ODEtMjUuMjIyNjU2LS40MTQwNjItNDguOTE0MDYyIDguOTM3NS02Ni44MzIwMzEgMjYuMzM1OTM4LTE4LjE0MDYyNSAxNy42MDkzNzUtMjguMjczNDM4IDQxLjI4NTE1Ni0yOC41MjczNDQgNjYuNjY0MDYyLS4yNTc4MTIgMjUuMzg2NzE5IDkuMzg2NzE5IDQ5LjI2NTYyNSAyNy4xMjg5MDYgNjcuMjAzMTI1bDEyMS4wODIwMzIgMTIzLjAzOTA2M2MyLjgzMjAzMSAyLjg2MzI4MSA0LjM0NzY1NiA2LjY3OTY4NyA0LjI2NTYyNSAxMC43NTM5MDYtLjA4MjAzMSA0LjA2MjUtMS43NTM5MDcgNy44MTY0MDYtNC43MDcwMzEgMTAuNTcwMzEzLTUuNzc3MzQ0IDUuMzkwNjI0LTE1LjIzODI4MiA1LjAxOTUzMS0yMS4wODU5MzgtLjgyODEyNmwtNDIuMjI2NTYyLTQyLjIzMDQ2OGMtMjUuMTE3MTg4LTI1LjExMzI4Mi02NS45ODQzNzYtMjUuMTEzMjgyLTkxLjEwMTU2MyAwbC0xMC41NzgxMjUgMTAuNTgyMDMxIDg3LjUxMTcxOSA4Ny41MTE3MTljMTcuNjc5Njg3IDE3LjY3OTY4NyA0MS4xNzU3ODEgMjcuNjQ0NTMxIDY2LjE2MDE1NiAyOC4wNTQ2ODcuNTM1MTU2LjAwNzgxMyAxLjA2MjUuMDExNzE5IDEuNTk3NjU2LjAxMTcxOSAyNC41ODIwMzEgMCA0Ny42OTUzMTMtOS4zMjQyMTkgNjUuMjM0Mzc1LTI2LjM1MTU2MiAxOC4xMzY3MTktMTcuNjA5Mzc2IDI4LjI2OTUzMi00MS4yODEyNSAyOC41MjczNDQtNjYuNjYwMTU3LjI1NzgxMi0yNS4zOTA2MjUtOS4zODY3MTktNDkuMjY1NjI1LTI3LjEzMjgxMi02Ny4yMDcwMzFsLTEyMS4wODIwMzItMTIzLjAzOTA2MmMtMi44MzIwMzEtMi44NjMyODItNC4zNDM3NS02LjY3OTY4OC00LjI2MTcxOC0xMC43NTM5MDcuMDgyMDMxLTQuMDYyNSAxLjc1MzkwNi03LjgxNjQwNiA0LjcwMzEyNC0xMC41NzAzMTIgNS43NzczNDQtNS4zOTA2MjUgMTUuMjM4MjgyLTUuMDE5NTMxIDIxLjA4NTkzOC44MjgxMjVsMTc2Ljk3MjY1NiAxNzYuOTcyNjU2YzE3Ljc5Njg3NSAxNy43OTY4NzUgNDEuNDYwOTM4IDI3LjYwMTU2MiA2Ni42MzI4MTMgMjcuNjAxNTYyczQ4LjgzOTg0My05LjgwNDY4NyA2Ni42MzY3MTktMjcuNjAxNTYybDEuMTkxNDA2LTEuMTkxNDA2YzM2Ljc0MjE4Ny0zNi43NDIxODggMzYuNzQyMTg3LTk2LjUyNzM0NCAwLTEzMy4yNjk1MzJsLTUwLjc5Mjk2OS01MC43OTI5NjhjLTMuODE2NDA2LTMuODE2NDA2LTUuOTE3OTY5LTguODkwNjI1LTUuOTE3OTY5LTE0LjI4NTE1NiAwLTUuMzk4NDM4IDIuMTAxNTYzLTEwLjQ2ODc1IDUuOTE3OTY5LTE0LjI4NTE1N3ptMCAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcInNuYXBjaGF0XFxcIiBjbGFzcz1cXFwidGFnLWljb25cXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIC00IDUxMi4wMDE2NCA1MTJcXFwiPjxwYXRoIGQ9XFxcIm00OTYuOTE0MDYyIDM1NC4zNjcxODgtNzQuMTc5Njg3LTc2LjY3OTY4OCAyOC44NzUtMTEuOTYwOTM4YzEyLjI2NTYyNS01LjA4MjAzMSAyMS44MTY0MDYtMTQuNjM2NzE4IDI2Ljg5ODQzNy0yNi45MDIzNDMgNS4wODIwMzItMTIuMjY1NjI1IDUuMDgyMDMyLTI1Ljc3NzM0NCAwLTM4LjA0Mjk2OS03LjcyMjY1Ni0xOC42NDQ1MzEtMjUuNzUzOTA2LTMwLjY5MTQwNi00NS45MzM1OTMtMzAuNjkxNDA2LTYuNTM1MTU3IDAtMTIuOTMzNTk0IDEuMjc3MzQ0LTE5LjAwNzgxMyAzLjc5Mjk2OGwtMS45NDE0MDYuODA4NTk0di0xOS4wNjY0MDZjMC04NS44MTI1LTY5LjgxMjUtMTU1LjYyNS0xNTUuNjI1LTE1NS42MjVzLTE1NS42MjUgNjkuODEyNS0xNTUuNjI1IDE1NS42MjV2MTkuMDYyNWwtMS45Mzc1LS44MDA3ODFjLTYuMDc4MTI1LTIuNTE5NTMxLTEyLjQ3NjU2Mi0zLjc5Njg3NS0xOS4wMTE3MTktMy43OTY4NzUtMjAuMTgzNTkzIDAtMzguMjE0ODQzIDEyLjA1MDc4MS00NS45MzM1OTMgMzAuNjkxNDA2LTUuMDgyMDMyIDEyLjI2NTYyNS01LjA4MjAzMiAyNS43NzczNDQtLjAwMzkwNyAzOC4wNDI5NjkgNS4wODIwMzEgMTIuMjY1NjI1IDE0LjYzNjcxOSAyMS44MjAzMTIgMjYuODk4NDM4IDI2LjkwMjM0M2wyOC44NzUgMTEuOTYwOTM4LTc0LjE3NTc4MSA3Ni42Nzk2ODhjLTE3Ljg1MTU2MyAxOC40NDkyMTgtMTYuMDcwMzEzIDMzLjQ3NjU2Mi0xMy40MjE4NzYgNDAuNzk2ODc0IDMuOTYwOTM4IDEwLjkzMzU5NCAxNC40MTc5NjkgMTguMDg1OTM4IDI4LjY5MTQwNyAxOS42MTcxODggNS43NDYwOTMuNjE3MTg4IDEwLjg5ODQzNyAzLjQzMzU5NCAxNC41MTU2MjUgNy45Mjk2ODggMy40OTIxODcgNC4zNDc2NTYgNS4wODk4NDQgOS43MzA0NjggNC40ODgyODEgMTUuMTY0MDYyLTEuNTQ2ODc1IDE0LjA1ODU5NCAzLjI3NzM0NCAyMi43NTM5MDYgNy41OTc2NTYgMjcuNTc0MjE5IDUuNjY3OTY5IDYuMzI4MTI1IDEzLjk1NzAzMSA5LjgxNjQwNiAyMy4zMzk4NDQgOS44MTY0MDYgNy45NTcwMzEgMCAxNi40OTYwOTQtMi4zOTg0MzcgMjUuMzc4OTA2LTcuMTIxMDk0bDUuMTAxNTYzLTIuNzE0ODQzYzcuMjk2ODc1LTMuODc4OTA3IDE3LjI0MjE4Ny02LjAxNTYyNiAyOC02LjAxNTYyNiAxMi40NTMxMjUgMCAyNC4yNjU2MjUgMi44NjMyODIgMzIuNDE3OTY4IDcuODU1NDY5bDM5Ljk3NjU2MyAyNC40OTYwOTRjMTEuOTAyMzQ0IDcuMjkyOTY5IDI3LjY0MDYyNSAxMS42MjUgNDQuMzEyNSAxMi4xOTkyMTkuMTcxODc1LjAwNzgxMi4zNDM3NS4wMTE3MTguNTE1NjI1LjAxMTcxOHMuMzQ3NjU2LS4wMDM5MDYuNTE5NTMxLS4wMTE3MThjMTYuNjY3OTY5LS41NzQyMTkgMzIuNDAyMzQ0LTQuOTA2MjUgNDQuMzA4NTk0LTEyLjE5OTIxOWwzOS45NzI2NTYtMjQuNDk2MDk0YzguMTUyMzQ0LTQuOTkyMTg3IDE5Ljk2ODc1LTcuODU1NDY5IDMyLjQxNzk2OS03Ljg1NTQ2OSAxMC43NjU2MjUgMCAyMC43MDcwMzEgMi4xMzY3MTkgMjggNi4wMTU2MjZsNS4xMDU0NjkgMi43MTQ4NDNjOC44ODI4MTIgNC43MjI2NTcgMTcuNDIxODc1IDcuMTE3MTg4IDI1LjM3NSA3LjEyMTA5NGguMDAzOTA2YzkuMzgyODEzIDAgMTcuNjcxODc1LTMuNDg4MjgxIDIzLjM0Mzc1LTkuODE2NDA2IDQuMzE2NDA2LTQuODIwMzEzIDkuMTQwNjI1LTEzLjUxNTYyNSA3LjU5Mzc1LTI3LjU3ODEyNS0uNTk3NjU2LTUuNDI5Njg4Ljk5NjA5NC0xMC44MTI1IDQuNDkyMTg3LTE1LjE2MDE1NiAzLjYwOTM3Ni00LjQ5NjA5NCA4Ljc2NTYyNi03LjMxMjUgMTQuNTE1NjI2LTcuOTI5Njg4IDE0LjI3MzQzNy0xLjUzMTI1IDI0LjczMDQ2OC04LjY4MzU5NCAyOC42ODc1LTE5LjYxNzE4OCAyLjY0ODQzNy03LjMyMDMxMiA0LjQyOTY4Ny0yMi4zNDc2NTYtMTMuNDIxODc2LTQwLjc5Njg3NHptMCAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcInRob3VnaHQtYnViYmxlXFxcIiBjbGFzcz1cXFwidGFnLWljb25cXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzQ0LjU3IDM0NC41N1xcXCI+PGc+PHBhdGggZD1cXFwiTTMzNS4yMDYsMTQ0LjU1MmMtNC4xNDIsMC03LjUsMy4zNTctNy41LDcuNWMwLDE5LjE4My0xNS42MDYsMzQuNzg5LTM0Ljc5LDM0Ljc4OWMtMy42NDUsMC03LjI3Ni0wLjU4Mi0xMC43OTMtMS43MyBjLTIuMjQ5LTAuNzMzLTQuNzE0LTAuMzY0LTYuNjQ4LDAuOTk5Yy0xLjkzNCwxLjM2My0zLjExMiwzLjU2LTMuMTc2LDUuOTI2Yy0wLjUyLDE4Ljk2OC0xNS43NzYsMzMuODI2LTM0LjczMywzMy44MjYgYy0xMC4xMDUsMC0xOS43MDYtNC40MTUtMjYuMzQxLTEyLjExNGMtMS40MjUtMS42NTMtMy40OTktMi42MDQtNS42ODEtMi42MDRjLTIuMTgyLDAtNC4yNTYsMC45NS01LjY4MSwyLjYwNCBjLTYuNjM1LDcuNjk5LTE2LjIzNiwxMi4xMTQtMjYuMzQxLDEyLjExNGMtMTAuNzI1LDAtMjAuNjk2LTQuODY4LTI3LjM1OC0xMy4zNTZjLTEuNDIyLTEuODEyLTMuNTk3LTIuODY5LTUuOS0yLjg2OSBjLTIuMzAzLDAtNC40NzgsMS4wNTgtNS45LDIuODY5Yy02LjY2Miw4LjQ4OC0xNi42MzQsMTMuMzU2LTI3LjM1OCwxMy4zNTZjLTYuOTk5LDAtMTMuNzQxLTIuMDY5LTE5LjQ5OS01Ljk4NSBjLTMuNDI1LTIuMzMxLTguMDktMS40NDItMTAuNDE5LDEuOTgzYy0yLjMzLDMuNDI1LTEuNDQxLDguMDksMS45ODQsMTAuNDE5YzguMjU1LDUuNjE1LDE3LjkxNSw4LjU4MywyNy45MzQsOC41ODMgYzEyLjQ1MSwwLDI0LjE4Ny00LjU3MiwzMy4yNTgtMTIuNzY4YzkuMDcxLDguMTk1LDIwLjgwNywxMi43NjgsMzMuMjU4LDEyLjc2OGMxMS43OTUsMCwyMy4xMDUtNC4xOTMsMzIuMDIyLTExLjcwMyBjOC45MTcsNy41MSwyMC4yMjcsMTEuNzAzLDMyLjAyMiwxMS43MDNjMTMuMDU3LDAsMjUuMzkxLTUuMDIxLDM0LjczMS0xNC4xNGM3LjE0MS02Ljk3MywxMS45MzgtMTUuNzUzLDEzLjk0OC0yNS4zMzQgYzIuMjExLDAuMzAyLDQuNDM5LDAuNDUzLDYuNjcyLDAuNDUzYzI3LjQ1NCwwLDQ5Ljc5LTIyLjMzNSw0OS43OS00OS43ODlDMzQyLjcwNiwxNDcuOTA5LDMzOS4zNDgsMTQ0LjU1MiwzMzUuMjA2LDE0NC41NTJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTY3LjEwMiwxOTkuMzdjMy45MzgtMS4yODYsNi4wODctNS41Miw0LjgwMi05LjQ1OGMtMS4yODYtMy45MzctNS41MjEtNi4wODYtOS40NTctNC44MDIgYy0zLjUxNywxLjE0OC03LjE0OCwxLjczLTEwLjc5MywxLjczYy0xOS4xODMsMC0zNC43OS0xNS42MDYtMzQuNzktMzQuNzg5YzAtOS45MDgsNC4yODMtMTkuMzg4LDExLjc1Mi0yNi4wMDkgYzEuNjA1LTEuNDI0LDIuNTI0LTMuNDY3LDIuNTI0LTUuNjEycy0wLjkxOS00LjE4OC0yLjUyNC01LjYxMWMtNy40NjgtNi42MjMtMTEuNzUyLTE2LjEwMy0xMS43NTItMjYuMDEgYzAtMTkuMTg0LDE1LjYwNi0zNC43OSwzNC43OS0zNC43OWMzLjY0MywwLDcuMjc0LDAuNTgyLDEwLjc5NCwxLjczYzIuMjUsMC43MzQsNC43MTMsMC4zNjMsNi42NDctMXMzLjExMS0zLjU2LDMuMTc2LTUuOTI1IEM3Mi43OTIsMjkuODU4LDg4LjA0OCwxNSwxMDcuMDA1LDE1YzEwLjcyNSwwLDIwLjY5Nyw0Ljg2OCwyNy4zNTgsMTMuMzU1YzEuNDIyLDEuODEzLDMuNTk3LDIuODcsNS45LDIuODcgYzIuMzAzLDAsNC40NzktMS4wNTksNS45LTIuODdDMTUyLjgyNCwxOS44NjgsMTYyLjc5NSwxNSwxNzMuNTIxLDE1YzQuMTQyLDAsNy41LTMuMzU3LDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41IGMtMTIuNDUyLDAtMjQuMTg3LDQuNTcyLTMzLjI1OCwxMi43NjdDMTMxLjE5MSw0LjU3MiwxMTkuNDU3LDAsMTA3LjAwNSwwYy0xMy4wNTcsMC0yNS4zOTEsNS4wMjEtMzQuNzMsMTQuMTQgYy03LjE0MSw2Ljk3Mi0xMS45MzgsMTUuNzUzLTEzLjk0OCwyNS4zMzNjLTIuMjExLTAuMzAyLTQuNDM5LTAuNDUzLTYuNjcyLTAuNDUzYy0yNy40NTQsMC00OS43OSwyMi4zMzYtNDkuNzksNDkuNzkgYzAsMTEuNTg3LDQuMDgsMjIuNzU4LDExLjM4NywzMS42MjFjLTcuMzA3LDguODYyLTExLjM4NywyMC4wMzMtMTEuMzg3LDMxLjYyMWMwLDI3LjQ1NCwyMi4zMzUsNDkuNzg5LDQ5Ljc5LDQ5Ljc4OSBDNTYuODgyLDIwMS44NDEsNjIuMDgsMjAxLjAxLDY3LjEwMiwxOTkuMzd6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIwMC42NDcsMjcuODk5YzMuMTM4LDIuNzA0LDcuODc0LDIuMzUyLDEwLjU3OC0wLjc4NUMyMTcuODU5LDE5LjQxNSwyMjcuNDYsMTUsMjM3LjU2NSwxNSBjMTguOTU4LDAsMzQuMjE0LDE0Ljg1NywzNC43MzMsMzMuODI1YzAuMDY0LDIuMzY1LDEuMjQyLDQuNTYyLDMuMTc2LDUuOTI1czQuMzk3LDEuNzM0LDYuNjQ3LDEgYzMuNTItMS4xNDgsNy4xNTItMS43MywxMC43OTQtMS43M2MxOS4xODMsMCwzNC43OSwxNS42MDYsMzQuNzksMzQuNzljMCw5LjkwNy00LjI4NCwxOS4zODctMTEuNzUyLDI2LjAxIGMtMy4xLDIuNzQ4LTMuMzg0LDcuNDg4LTAuNjM2LDEwLjU4N2MxLjQ4MiwxLjY3MiwzLjU0MywyLjUyNCw1LjYxNSwyLjUyNGMxLjc2OSwwLDMuNTQ1LTAuNjIyLDQuOTczLTEuODg5IGMxMC42NzctOS40NjcsMTYuODAxLTIzLjAzNywxNi44MDEtMzcuMjMyYzAtMjcuNDU0LTIyLjMzNS00OS43OS00OS43OS00OS43OWMtMi4yMzMsMC00LjQ2LDAuMTUxLTYuNjcyLDAuNDUzIGMtMi4wMS05LjU4LTYuODA3LTE4LjM2MS0xMy45NDgtMjUuMzMzQzI2Mi45NTcsNS4wMjEsMjUwLjYyMiwwLDIzNy41NjUsMGMtMTQuNDc1LDAtMjguMjE3LDYuMzEzLTM3LjcwNCwxNy4zMjEgQzE5Ny4xNTgsMjAuNDYsMTk3LjUxLDI1LjE5NSwyMDAuNjQ3LDI3Ljg5OXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTI5LjMxOSwyNTEuODk5Yy0yMC41NDEsMC0zNi42MywxMC44MDEtMzYuNjMsMjQuNTlzMTYuMDksMjQuNTksMzYuNjMsMjQuNTljMjAuNTQsMCwzNi42My0xMC44MDEsMzYuNjMtMjQuNTkgUzE0OS44NTksMjUxLjg5OSwxMjkuMzE5LDI1MS44OTl6IE0xMjkuMzE5LDI4Ni4wNzljLTEzLjAwMywwLTIxLjYzLTUuNzcyLTIxLjYzLTkuNTlzOC42MjctOS41OSwyMS42My05LjU5IGMxMy4wMDMsMCwyMS42Myw1Ljc3MiwyMS42Myw5LjU5UzE0Mi4zMjIsMjg2LjA3OSwxMjkuMzE5LDI4Ni4wNzl6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTk1LjUyOCwzMTIuODE4Yy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41YzAsNC4zNjctNy40MjMsOS4yNTItMTcuMzU4LDkuMjUycy0xNy4zNTgtNC44ODUtMTcuMzU4LTkuMjUyIGMwLTQuMzY4LDcuNDIzLTkuMjUzLDE3LjM1OC05LjI1M2M0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNWMtMTguMTQ1LDAtMzIuMzU4LDEwLjY1My0zMi4zNTgsMjQuMjUzIFM1Mi41MjYsMzQ0LjU3LDcwLjY3LDM0NC41N3MzMi4zNTgtMTAuNjUyLDMyLjM1OC0yNC4yNTJDMTAzLjAyOCwzMTYuMTc2LDk5LjY3LDMxMi44MTgsOTUuNTI4LDMxMi44MTh6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJ0aG91Z2h0c1xcXCIgY2xhc3M9XFxcInRhZy1pY29uXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDUxMSA1MTEuOTk5XFxcIj48cGF0aCBkPVxcXCJtMTE0LjQ0OTIxOSA0MTAuMjY5NTMxIDM0LjYyMTA5MyAyNS4wNjY0MDdjMTAuNTkzNzUgNy42Njc5NjggMjUuOTY4NzUgNy42Njc5NjggMzYuNTYyNSAwbDM0LjYyMTA5NC0yNS4wNjY0MDdjMjEuMTA1NDY5LTE1LjI4MTI1IDUwLjU4OTg0NC0xNS4yODEyNSA3MS42OTUzMTMgMGwzNC42MjUgMjUuMDY2NDA3YzEwLjU4OTg0MyA3LjY2Nzk2OCAyNS45Njg3NSA3LjY2Nzk2OCAzNi41NjI1IDBsMzQuNjIxMDkzLTI1LjA2NjQwN2MyMS4xMDkzNzYtMTUuMjgxMjUgNTAuNTg5ODQ0LTE1LjI4MTI1IDcxLjY5OTIxOSAwbDQyLjI1IDMwLjU4NTkzOHYtNjMuMTk1MzEzbC01OS44MjAzMTItNDMuMzA0Njg3Yy0xMC41ODk4NDQtNy42Njc5NjktMjUuOTY0ODQ0LTcuNjY3OTY5LTM2LjU1ODU5NCAwbC0zNC42MjUgMjUuMDYyNWMtMjEuMTA1NDY5IDE1LjI4MTI1LTUwLjU4OTg0NCAxNS4yODEyNS03MS42OTUzMTMgMGwtMzQuNjI1LTI1LjA2MjVjLTEwLjU4OTg0My03LjY3MTg3NS0yNS45Njg3NS03LjY2Nzk2OS0zNi41NTg1OTMgMGwtMzQuNjI1IDI1LjA2MjVjLTIxLjEwNTQ2OSAxNS4yODEyNS01MC41ODk4NDQgMTUuMjgxMjUtNzEuNjk1MzEzIDBsLTM0LjYyNS0yNS4wNjI1Yy0xMC41ODk4NDQtNy42Njc5NjktMjUuOTY4NzUtNy42Njc5NjktMzYuNTU4NTk0IDBsLTU5LjgyMDMxMiA0My4zMDQ2ODd2NjMuMTk1MzEzbDQyLjI1LTMwLjU4NTkzOGMyMS4xMDkzNzUtMTUuMjgxMjUgNTAuNTg5ODQ0LTE1LjI4MTI1IDcxLjY5OTIxOSAwem0wIDBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJtMTE0LjQ0OTIxOSAzMTAuMDg1OTM4IDM0LjYyMTA5MyAyNS4wNjY0MDZjMTAuNTkzNzUgNy42Njc5NjggMjUuOTY4NzUgNy42Njc5NjggMzYuNTYyNSAwbDM0LjYyMTA5NC0yNS4wNjY0MDZjMjEuMTA5Mzc1LTE1LjI3NzM0NCA1MC41OTM3NS0xNS4yNzczNDQgNzEuNjk1MzEzIDBsMzQuNjI1IDI1LjA2NjQwNmMxMC41ODk4NDMgNy42Njc5NjggMjUuOTY4NzUgNy42Njc5NjggMzYuNTYyNSAwbDM0LjYyMTA5My0yNS4wNjY0MDZjMjEuMTA5Mzc2LTE1LjI3NzM0NCA1MC41ODk4NDQtMTUuMjc3MzQ0IDcxLjY5OTIxOSAwbDQyLjI1IDMwLjU4OTg0M3YtOTUuNTAzOTA2aC0xMzkuNjQ4NDM3Yy00NS4xNDg0MzgtMS44NjMyODEtODEuOTA2MjUtNDAuMDc4MTI1LTgxLjk5NjA5NC04NS4zMjAzMTMtLjA0Mjk2OS0yMi44OTQ1MzEgOC44MzU5MzgtNDQuNDIxODc0IDI1LjAwMzkwNi02MC42MjEwOTMgMTUuOTIxODc1LTE1Ljk1NzAzMSAzNy4wMjczNDQtMjQuODUxNTYzIDU5LjUyMzQzOC0yNS4xMTcxODhsOC42NDA2MjUgMS4yNTc4MTMgMTEuNTg1OTM3LTE4LjgyODEyNS04Ljk0OTIxOC04LjM2MzI4MWMtNTkuMjMwNDY5LTU1LjM1NTQ2OS0xNDguNTQyOTY5LTYzLjk0OTIxOS0yMTcuMTgzNTk0LTIwLjkwMjM0NC0yMS42MDkzNzUgMTMuNTU0Njg3LTQwLjU5NzY1NiAzMi41ODU5MzctNTQuOTE3OTY5IDU1LjA1NDY4N2wtMTEzLjI2NTYyNSAxNzguMTcxODc1djgwLjE3MTg3NWw0Mi4yNS0zMC41ODk4NDNjMjEuMTA5Mzc1LTE1LjI3NzM0NCA1MC41ODk4NDQtMTUuMjc3MzQ0IDcxLjY5OTIxOSAwem0wIDBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJtNDE1LjMyNDIxOSA0MzQuNTM1MTU2LTM0LjYyMTA5NCAyNS4wNjY0MDZjLTIxLjEwNTQ2OSAxNS4yNzczNDQtNTAuNTg5ODQ0IDE1LjI3NzM0NC03MS42OTUzMTMgMGwtMzQuNjI1LTI1LjA2NjQwNmMtMTAuNTkzNzUtNy42Njc5NjgtMjUuOTY4NzUtNy42Njc5NjgtMzYuNTYyNSAwbC0zNC42MjEwOTMgMjUuMDY2NDA2Yy0yMS4xMDU0NjkgMTUuMjc3MzQ0LTUwLjU4OTg0NCAxNS4yNzczNDQtNzEuNjk1MzEzIDBsLTM0LjYyNS0yNS4wNjY0MDZjLTEwLjU4OTg0NC03LjY2Nzk2OC0yNS45Njg3NS03LjY2Nzk2OC0zNi41NTg1OTQgMGwtNTkuODIwMzEyIDQzLjMwNDY4OHYzNC4xNjAxNTZoNTExLjIwNzAzMXYtMzQuMTYwMTU2bC01OS44MjAzMTItNDMuMzA0Njg4Yy0xMC41ODk4NDQtNy42Njc5NjgtMjUuOTY0ODQ0LTcuNjY3OTY4LTM2LjU2MjUgMHptMCAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgV1BBUEkgZnJvbSAnd3BhcGknO1xuXG5pbXBvcnQgY29udGVudEhUTUwgZnJvbSAnLi9jb250ZW50SFRNTCc7XG5pbXBvcnQgZ2VvZGF0YSBmcm9tICcuL2dlb2RhdGEnO1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcCc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvY29uZmlnLmpzb24nO1xuaW1wb3J0IHRoZW1lcyBmcm9tICcuL2NvbmZpZy90aGVtZXMuanNvbic7XG5cblxuY29uc3Qgd3AgPSBuZXcgV1BBUEkoe2VuZHBvaW50OiBjb25maWcud29yZHByZXNzLmVuZHBvaW50fSk7XG5cbmxldCB0aGVtZTtcbmxldCBjdXJyZW50Tm9kZTtcbmxldCBhY3RpdmVQYW5lbDtcblxuXG5jb25zdCBpbml0SG9tZSA9ICh7bG9jYXRpb259KSA9PiB7XG5cdGNvbnRlbnRIVE1MLmluaXRIb21lKCk7XG5cdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDg4MCkgdXBkYXRlTWFwKHtsb2NhdGlvbn0pO1xufTtcblxuY29uc3Qgc2V0Q3VycmVudE5vZGUgPSBkYXRhID0+IGN1cnJlbnROb2RlID0gZGF0YTtcblxuY29uc3Qgc2V0QWN0aXZlUGFuZWwgPSBwYW5lbCA9PiBhY3RpdmVQYW5lbCA9IHBhbmVsO1xuXG5leHBvcnQgY29uc3Qgc2hvd1BhZ2UgPSBhc3luYyAoe2lkLCBzbHVnfSkgPT4ge1xuXG5cdGF3YWl0IHNldFRoZW1lKHNsdWcpO1xuXG5cdC8vIGlmICh0aGVtZS5pc05ldykgXG5cdGlmIChzbHVnICE9PSAnYWJvdXQnKSB1cGRhdGVNYXAodGhlbWUpO1xuXG5cdGlmIChpZCA9PT0gMCkge1xuXHRcdGNoYW5nZUJyb3dzZXJIaXN0b3J5KHtzbHVnOiAnL2dob3N0LXJpdmVyLyd9KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGxvYWRQYWdlKHtpZCwgc2x1Z30pO1xuXHQvLyBjb25zb2xlLmxvZyhwYWdlRGF0YSk7XG5cblx0c2V0Q3VycmVudE5vZGUobnVsbCk7XG5cblx0aWYgKHNsdWcgIT09ICdhYm91dCcpIG1hcC5mbHlUb09yaWdpbigpO1xuXG5cdC8vcGFuZWxcblx0c2V0QWN0aXZlUGFuZWwoKHNsdWcgPT09ICdhYm91dCcpID8gJ2Z1bGwtcGFuZWwnIDogJ3JpZ2h0LXBhbmVsJyk7XG5cdFxuXHRjb250ZW50SFRNTC51cGRhdGVQYWdlKGFjdGl2ZVBhbmVsLCBwYWdlRGF0YSk7XG5cdFxuXHQvL3Nob3cgcGFuZWxcblx0Y29udGVudEhUTUwuc2hvd1BhbmVsKHthY3RpdmVQYW5lbH0pO1xuXG5cdGNoYW5nZUJyb3dzZXJIaXN0b3J5KHtcblx0XHR0aXRsZTogcGFnZURhdGEudGl0bGUucmVuZGVyZWQsXG5cdFx0c2x1ZzogcGFnZURhdGEuc2x1Z1xuXHR9KTtcblxuXHRyZXR1cm4gcGFnZURhdGE7XG59O1xuXG5jb25zdCBsb2FkUGFnZSA9IGFzeW5jICh7aWQsIHNsdWd9KSA9PiB7XG5cblx0bGV0IHBhZ2VEYXRhO1xuXG5cdGlmIChpZCkge1xuXHRcdHBhZ2VEYXRhID0gYXdhaXQgd3AucGFnZXMoKS5pZChpZCkuZW1iZWQoKTtcblx0fSBlbHNlIGlmIChzbHVnKSB7XG5cdFx0cGFnZURhdGEgPSBhd2FpdCB3cC5wYWdlcygpLnNsdWcoc2x1ZykuZW1iZWQoKTtcblx0XHRwYWdlRGF0YSA9IHBhZ2VEYXRhWzBdO1xuXHR9XG5cblx0cmV0dXJuIHBhZ2VEYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dQb3N0ID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRpZiAoY3VycmVudE5vZGUgJiYgY3VycmVudE5vZGUuaWQgPT09IGlkKSByZXR1cm47XG5cblx0YXdhaXQgY29udGVudEhUTUwuaGlkZVBhbmVsKHthY3RpdmVQYW5lbH0pO1xuXG5cdGNvbnRlbnRIVE1MLnNob3dTcGlubmVyKCk7XG5cblx0Y29uc3QgcG9zdERhdGEgPSBhd2FpdCBsb2FkUG9zdCh7aWQsc2x1Z30pO1xuXHQvLyBjb25zb2xlLmxvZyhwb3N0RGF0YSk7XG5cdGlmICghcG9zdERhdGEpIHtcblx0XHRjb250ZW50SFRNTC5oaWRlU3Bpbm5lcigpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnRlbnRIVE1MLmhpZGVTcGlubmVyKCk7XG5cdHNldEN1cnJlbnROb2RlKHBvc3REYXRhKTtcblxuXHRjb25zdCBwb3N0Q2F0ZWdvcmllcyA9IHBvc3REYXRhLl9lbWJlZGRlZFsnd3A6dGVybSddWzBdO1xuXHRjb25zdCBwb3N0VGFncyA9IHBvc3REYXRhLl9lbWJlZGRlZFsnd3A6dGVybSddWzFdO1xuXG5cdGNvbnN0IHBvc3RUaGVtZSA9IGdldFBvc3RUaGVtZShwb3N0Q2F0ZWdvcmllcyk7XG5cdGlmIChwb3N0VGhlbWUuc2x1ZyA9PT0gJ3VuY2F0ZWdvcml6ZWQnKSBjb25zb2xlLmxvZygnUHJvYmxlbSB3aXRoIGNhdGVnb3J5IFwidW5jYXRlZ29yaXplZFwiOiAnLCBwb3N0RGF0YSk7XG5cblx0c2V0VGhlbWUocG9zdFRoZW1lLnNsdWcpO1xuXHRpZiAodGhlbWUuaXNOZXcpIGF3YWl0IHVwZGF0ZU1hcCh0aGVtZSk7XG5cblx0Ly9mbHkgdG8gbG9jYWxcblx0Z2VvZGF0YS5zZXRDdXJyZW50Tm9kZShjdXJyZW50Tm9kZSk7XG5cdGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZ2VvZGF0YS5nZXROb2RlQ29vcmRpbmF0ZXMoY3VycmVudE5vZGUpO1xuXHRtYXAuZmx5VG8oY29vcmRpbmF0ZXMpO1xuXG5cdHNldEFjdGl2ZVBhbmVsKCdyaWdodC1wYW5lbCcpO1xuXHRcblx0Y29udGVudEhUTUwudXBkYXRlUG9zdChwb3N0RGF0YSxwb3N0VGFncyx0aGVtZSk7XG5cblx0Ly9zaG93IFBhbmVsXG5cdGNvbnRlbnRIVE1MLnNob3dQYW5lbCh7YWN0aXZlUGFuZWx9KTtcblxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7XG5cdFx0dGl0bGU6IHBvc3REYXRhLnRpdGxlLnJlbmRlcmVkLFxuXHRcdHNsdWc6IHBvc3REYXRhLnNsdWdcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRwb3N0OiBwb3N0RGF0YSxcblx0XHR0aGVtZTogcG9zdFRoZW1lXG5cdH07XG59O1xuXG5jb25zdCBnZXRQb3N0VGhlbWUgPSAocG9zdENhdGVnb3JpZXMpID0+IHtcblxuXHRsZXQgcG9zdFRoZW1lO1xuXHRpZiAodGhlbWUpIHBvc3RUaGVtZSA9IHBvc3RDYXRlZ29yaWVzLmZpbmQoY2F0ID0+IGNhdC5zbHVnID09PSB0aGVtZS5zbHVnKTtcblxuXHRpZiAoIXBvc3RUaGVtZSkge1xuXHRcdGlmIChwb3N0Q2F0ZWdvcmllcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRjb25zdCB0aGVtZVBvc3QgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3N0Q2F0ZWdvcmllcy5sZW5ndGgpO1xuXHRcdFx0cG9zdFRoZW1lID0gcG9zdENhdGVnb3JpZXNbdGhlbWVQb3N0XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9zdFRoZW1lID0gcG9zdENhdGVnb3JpZXNbMF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHBvc3RUaGVtZTtcbn07XG5cbmNvbnN0IGxvYWRQb3N0ID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRsZXQgcG9zdERhdGE7XG5cblx0aWYgKGlkKSB7XG5cdFx0cG9zdERhdGEgPSBhd2FpdCB3cC5wb3N0cygpLmlkKGlkKS5lbWJlZCgpO1xuXHR9IGVsc2UgaWYgKHNsdWcpIHtcblx0XHRwb3N0RGF0YSA9IGF3YWl0IHdwLnBvc3RzKCkuc2x1ZyhzbHVnKS5lbWJlZCgpO1xuXHRcdHBvc3REYXRhID0gcG9zdERhdGFbMF07XG5cdH1cblxuXHRyZXR1cm4gcG9zdERhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VQYW5lbCA9IGFzeW5jICgpID0+IHtcblxuXHRhd2FpdCBjb250ZW50SFRNTC5oaWRlUGFuZWwoe2FjdGl2ZVBhbmVsfSk7XG5cdFxuXHRzZXRDdXJyZW50Tm9kZShudWxsKTtcblx0Z2VvZGF0YS5yZXNldE5vZGVzU3RhdGUoe30pO1xuXG5cdHJldHVybiBjdXJyZW50Tm9kZTtcbn07XG5cblxuY29uc3Qgc2V0VGhlbWUgPSBhc3luYyByZXF1ZXN0ZWRUaGVtZVNsdWcgPT4ge1xuXG5cdGlmICghdGhlbWUpIHRoZW1lID0ge307XG5cblx0dGhlbWUuaXNOZXcgPSBmYWxzZTtcblx0XG5cdGlmKHRoZW1lLnNsdWcgIT0gcmVxdWVzdGVkVGhlbWVTbHVnKSB7XG5cdFx0Y29uc3QgcmVxdWVzdGVkVGhlbWUgPSBnZXRUaGVtZUJ5U2x1ZyhyZXF1ZXN0ZWRUaGVtZVNsdWcpO1xuXHRcdGNoYW5nZVN0YXRlKHJlcXVlc3RlZFRoZW1lLnN0YXRlKTtcblx0XHR0aGVtZSA9IHJlcXVlc3RlZFRoZW1lO1xuXHRcdHRoZW1lLmlzTmV3ID0gdHJ1ZTtcblx0fVxuXG5cdGlmICh0aGVtZS5zbHVnICE9ICdob21lJykge1xuXHRcdGF3YWl0IGNvbnRlbnRIVE1MLmhpZGVQYW5lbCh7YWN0aXZlUGFuZWx9KTtcblx0fVxuXHRcblx0cmV0dXJuIHRoZW1lO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudFRoZW1lID0gKCkgPT4gdGhlbWU7XG5jb25zdCBnZXRUaGVtZUJ5U2x1ZyA9IHNsdWcgPT4gdGhlbWVzLmZpbmQoIHRoZW1lID0+IHRoZW1lLnNsdWcgPT09IHNsdWcgKTtcblxuY29uc3QgY2hhbmdlU3RhdGUgPSBhc3luYyBuZXdTdGF0ZSA9PiB7XG5cblx0aWYgKG5ld1N0YXRlICE9IHRoZW1lLnN0YXRlKSB7XG5cdFx0aWYgKG5ld1N0YXRlID09PSAnaG9tZScpIHtcblx0XHRcdGNvbnRlbnRIVE1MLmhpZGVUb3BNZW51KCk7XG5cdFx0XHRhd2FpdCBjb250ZW50SFRNTC5oaWRlUGFuZWwoe2FjdGl2ZVBhbmVsfSk7XG5cdFx0XHRjb250ZW50SFRNTC5zaG93SG9tZSgpO1xuXHRcdH0gZWxzZSBpZiAobmV3U3RhdGUgPT09ICdwYWdlJykge1xuXHRcdFx0Y29udGVudEhUTUwuaGlkZUhvbWUoKTtcblx0XHRcdGNvbnRlbnRIVE1MLnNob3dUb3BNZW51KCk7XG5cdFx0fVxuXHR9XG5cdFxufTtcblxuY29uc3QgdXBkYXRlTWFwID0gYXN5bmMgKHtsb2NhdGlvbn0pID0+IHtcblxuXHRpZiAoIXRoZW1lKSB0aGVtZSA9IHRoZW1lc1swXTtcblxuXHRpZighbWFwLmlzTWFwYm94TG9hZGVkKCkpIHtcblx0XHRpZiAobG9jYXRpb24gPT09ICc0MDQnKSB7XG5cdFx0XHRhd2FpdCBtYXAuaW5pdCh7bG9jYXRpb259KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgbWFwLmluaXQodGhlbWUpO1xuXHRcdH1cblx0XHRcblx0fSBlbHNlIHtcblx0XHRhd2FpdCBtYXAuY2hhbmdlTWFwKHRoZW1lKTtcblx0fVxuXG5cdGF3YWl0IGdlb2RhdGEuZHJhd05vZGVzKHRoZW1lKTtcblxufTtcblxuZXhwb3J0IGNvbnN0IHRhZ1NlYXJjaCA9IHRhZyA9PiB7XG5cblx0Z2VvZGF0YS5kcmF3Tm9kZUJ5VGFnKHRhZyk7XG5cdG1hcC5mbHlUb09yaWdpbigpO1xuXHRjb250ZW50SFRNTC51cGRhdGVIZWFkaW5nKHRhZy5uYW1lKTtcblxufTtcblxuY29uc3QgY2hhbmdlQnJvd3Nlckhpc3RvcnkgPSAoe3RpdGxlLHNsdWd9KSA9PiB7XG5cdGxldCBwYWdlVGl0bGUgPSAnR2hvc3QgUml2ZXInO1xuXHRpZiAodGl0bGUpIHBhZ2VUaXRsZSArPSBgIC0gJHt0aXRsZX1gO1xuXG5cdGRvY3VtZW50LnRpdGxlID0gcGFnZVRpdGxlO1xuXHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXG5cdFx0e3BhZ2VUaXRsZX0sXG5cdFx0JycsXG5cdFx0c2x1Zyk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdEhvbWUsXG5cdHNob3dQYWdlLFxuXHRzaG93UG9zdCxcblx0Y2xvc2VQYW5lbCxcblx0Z2V0Q3VycmVudFRoZW1lLFxuXHRnZXRUaGVtZUJ5U2x1Zyxcblx0dGFnU2VhcmNoLFxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSxcbn07XG4iLCJpbXBvcnQge3NlbGVjdCwgc2VsZWN0QWxsLCBldmVudH0gZnJvbSAnZDMvZGlzdC9kMy5taW4nO1xuaW1wb3J0IHtUd2Vlbk1heH0gZnJvbSAnZ3NhcC9Ud2Vlbk1heCc7XG5cbmltcG9ydCB7c2hvd1BhZ2UsIHNob3dQb3N0LCBjbG9zZVBhbmVsLCB0YWdTZWFyY2h9IGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQge2dldEljb259IGZyb20gJy4vdGFncyc7XG5cbmltcG9ydCB0aGVtZXMgZnJvbSAnLi9jb25maWcvdGhlbWVzLmpzb24nO1xuXG5cbnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCdtYXAtYmcnKTtcblxuY29uc3QgaW5pdEhvbWUgPSAoKSA9PiBjb25maWdNYWluTWVudSgpO1xuXG5jb25zdCBjb25maWdNYWluTWVudSA9ICgpID0+IHtcblxuXHRmb3IgKGNvbnN0IHRoZW1lIG9mIHRoZW1lcykge1xuXHRcdHNlbGVjdChgI21haW4tJHt0aGVtZS5zbHVnfS1idGApLnNlbGVjdCgnYScpXG5cdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0fVxuXG59O1xuXG5jb25zdCBjb25maWdUb3BNZW51ID0gKCkgPT4ge1xuXG5cdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0c2VsZWN0KGAjdG9wLSR7dGhlbWUuc2x1Z30tYnRgKVxuXHRcdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0fVxuXG59O1xuXG5jb25zdCBzaG93SG9tZSA9ICgpID0+IHtcblxuXHRUd2Vlbk1heC50bygnI2hlYWRlci1jb2wnLCAyLCB7XG5cdFx0eTogMCxcblx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGVjdCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRUd2Vlbk1heC50bygnLmNvbC1tYWluLW1lbnUnLCAyLCB7XG5cdFx0eTogMCxcblx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGVjdEFsbCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRjb25maWdNYWluTWVudSgpO1xuXHRzaG93SG9tZUJHKCk7XG5cdGhpZGVIZWFkaW5nKCk7XG5cbn07XG5cbmNvbnN0IGhpZGVIb21lID0gKCkgPT4ge1xuXG5cdFR3ZWVuTWF4LnRvKCcjaGVhZGVyLWNvbCcsIDIsIHtcblx0XHR5OiAtNTAwLFxuXHRcdG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZWN0KHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0fSk7XG5cblx0VHdlZW5NYXgudG8oJy5jb2wtbWFpbi1tZW51JywgMiwge1xuXHRcdHk6IC04MDAsXG5cdFx0b25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxlY3RBbGwodGhpcy50YXJnZXQuc2VsZWN0b3IpXG5cdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRoaWRlSG9tZUJHKCk7XG5cdHNob3dIZWFkaW5nKCk7XG5cbn07XG5cbmNvbnN0IHNob3dIb21lQkcgPSAoKSA9PiB7XG5cblx0VHdlZW5NYXgudG8oJyNtYXAtYmcnLCAyLCB7XG5cdFx0YWxwaGE6IDEsXG5cdFx0b25TdGFydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxlY3RBbGwodGhpcy50YXJnZXQuc2VsZWN0b3IpXG5cdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH1cblx0fSk7XG5cbn07XG5cbmNvbnN0IGhpZGVIb21lQkcgPSAoKSA9PiB7XG5cdFxuXHRUd2Vlbk1heC50bygnI21hcC1iZycsIDIsIHtcblx0XHRhbHBoYTogMCxcblx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGVjdEFsbCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdH0pO1xuXG59O1xuXG5jb25zdCBzaG93VG9wTWVudSA9ICgpID0+IHtcblxuXHRUd2Vlbk1heC5mcm9tVG8oJyN0b3AtbWVudScsIDIsXG5cdFx0e3k6IC0yMDB9LFxuXHRcdHtcblx0XHRcdHk6IDAsXG5cdFx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0QWxsKHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcblxuXHRjb25maWdUb3BNZW51KCk7XG5cbn07XG5cbmNvbnN0IGhpZGVUb3BNZW51ID0gKCkgPT4ge1xuXG5cdFR3ZWVuTWF4LnRvKCcjdG9wLW1lbnUnLCAyLCB7XG5cdFx0eTogLTIwMCxcblx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGVjdEFsbCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdH0pO1xuXHRcdFxufTtcblxuY29uc3Qgc2hvd1BhbmVsID0gKHthY3RpdmVQYW5lbCA9ICdsZWZ0LXBhbmVsJ30pID0+IHtcblxuXHRpZiAoYWN0aXZlUGFuZWwgPT09ICdmdWxsLXBhbmVsJykge1xuXG5cdFx0Ly9GdWxsIFBhbmVsXG5cdFx0VHdlZW5NYXguZnJvbVRvKCcjZnVsbC1wYW5lbCcsIDIsIFxuXHRcdFx0e3k6IHdpbmRvdy5vdXRlckhlaWdodH0sXG5cdFx0XHR7XG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdG9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHNlbGVjdCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHNlbGVjdCgnI2Z1bGwtcGFuZWwnKS5zZWxlY3QoJy5mbC1jb2wtY29udGVudCcpLnByb3BlcnR5KCdzY3JvbGxUb3AnLCAwKTtcblx0XHRzaG93SG9tZUJHKCk7XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vTGVmdCBQYW5lbFxuXHRcdFR3ZWVuTWF4LnRvKCcjbGVmdC1wYW5lbCcsIDIsIHtcblx0XHRcdHg6IDAsXG5cdFx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0KHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL1JpZ2h0IFBhbmVsXG5cdFx0VHdlZW5NYXgudG8oJyNyaWdodC1wYW5lbCcsIDIsIHtcblx0XHRcdHg6IDAsXG5cdFx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0KHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0c2VsZWN0KCcjcmlnaHQtcGFuZWwnKS5zZWxlY3QoJy5mbC1jb2wtY29udGVudCcpLnByb3BlcnR5KCdzY3JvbGxUb3AnLCAwKTtcblxuXHR9XG5cbn07XG5cbmNvbnN0IGhpZGVQYW5lbCA9IGFzeW5jICh7YWN0aXZlUGFuZWwgPSAncmlnaHQtcGFuZWwnfSkgPT4ge1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuXHRcdGlmIChhY3RpdmVQYW5lbCA9PT0gJ2Z1bGwtcGFuZWwnKSB7XG5cblx0XHRcdFR3ZWVuTWF4LnRvKCcjZnVsbC1wYW5lbCcsIDIsIHtcblx0XHRcdFx0eTogd2luZG93Lm91dGVySGVpZ2h0LFxuXHRcdFx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzZWxlY3QodGhpcy50YXJnZXQuc2VsZWN0b3IpXG5cdFx0XHRcdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGhpZGVIb21lQkcoKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vTGVmdCBQYW5lbFxuXHRcdFx0VHdlZW5NYXgudG8oJyNsZWZ0LXBhbmVsJywgMiwge3g6IHdpbmRvdy5vdXRlcldpZHRofSk7XG5cblx0XHRcdC8vUmlnaHQgUGFuZWxcblx0XHRcdFR3ZWVuTWF4LnRvKCcjcmlnaHQtcGFuZWwnLCAyLCB7XG5cdFx0XHRcdHg6IHdpbmRvdy5vdXRlcldpZHRoLFxuXHRcdFx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fVxuXHRcdFxuXHR9KTtcblxufTtcblxuY29uc3Qgc2hvd0hlYWRpbmcgPSAoKSA9PiB7XG5cblx0bGV0IGhlYWRpbmcgPSBzZWxlY3QoJyNtYXAtaGVhZGluZycpO1xuXG5cdGlmIChoZWFkaW5nLmVtcHR5KCkpIHtcblx0XHRoZWFkaW5nID0gc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuXHRcdFx0LmF0dHIoJ2lkJywnbWFwLWhlYWRpbmcnKTtcblx0XHRoZWFkaW5nLmFwcGVuZCgnaDMnKTtcblx0fVxuXG5cdFR3ZWVuTWF4LmZyb21UbygnI21hcC1oZWFkaW5nJywgMiwgXG5cdFx0e2FscGhhOiAwLH0sXG5cdFx0e1xuXHRcdFx0YWxwaGE6IDEsXG5cdFx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0QWxsKHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcblxuXHRyZXR1cm4gaGVhZGluZztcbn07XG5cbmNvbnN0IGhpZGVIZWFkaW5nID0gKCkgPT4ge1xuXG5cdGNvbnN0IGhlYWRpbmcgPSBzZWxlY3QoJyNtYXAtaGVhZGluZycpO1xuXG5cdGlmICghaGVhZGluZy5lbXB0eSgpKSB7XG5cblx0XHRUd2Vlbk1heC50bygnI21hcC1oZWFkaW5nJywgMSwge1xuXHRcdFx0YWxwaGE6IDAsXG5cdFx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0QWxsKHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufTtcblxuY29uc3QgdXBkYXRlSGVhZGluZyA9IHRpdGxlID0+IHtcblxuXHRpZiAodGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gJ2Fib3V0JykgdGl0bGUgPSAnJztcblxuXHRsZXQgaGVhZGluZyA9IHNlbGVjdCgnI21hcC1oZWFkaW5nJyk7XG5cdGlmIChoZWFkaW5nLmVtcHR5KCkpIGhlYWRpbmcgPSBzaG93SGVhZGluZygpO1xuXG5cdGhlYWRpbmcuc2VsZWN0KCdoMycpLmh0bWwodGl0bGUpO1xuXG59O1xuXG5jb25zdCB1cGRhdGVQYWdlID0gKGFjdGl2ZVBhbmVsLCB7dGl0bGUsIGNvbnRlbnR9KSA9PiB7XG5cblx0Ly9kb20gbWFuaXB1bGF0aW9uXG5cdGNvbnN0IHBhbmVsID0gc2VsZWN0KGAjJHthY3RpdmVQYW5lbH1gKTtcblx0cGFuZWwuc2VsZWN0KCcudGFnbGluZScpLnNlbGVjdCgnLmZsLWhlYWRpbmctdGV4dCcpLmh0bWwoJycpO1xuXHRwYW5lbC5zZWxlY3QoJyNjbG9zZS1wYW5lbCcpLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpLm9uKCdjbGljaycsIGNsb3NlUGFuZWwpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLXRpdGxlJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCh0aXRsZS5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtY29udGVudCcpLnNlbGVjdCgnLmZsLXJpY2gtdGV4dCcpLmh0bWwoY29udGVudC5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtdGFncycpLnNlbGVjdCgnLmZsLWh0bWwnKS5odG1sKCcnKTtcblx0Y2FwdHVyZUxpbmtzKCk7XG5cblx0dXBkYXRlSGVhZGluZyh0aXRsZS5yZW5kZXJlZCk7XG5cbn07XG5cbmNvbnN0IHVwZGF0ZVBvc3QgPSAoe3RpdGxlLCBjb250ZW50fSwgdGFncywgdGhlbWUpID0+IHtcblxuXHQvL0RPTSBtYW5pcHVsYXRpb25cblx0Y29uc3QgcGFuZWwgPSBzZWxlY3QoJyNyaWdodC1wYW5lbCcpO1xuXG5cdHBhbmVsLnNlbGVjdCgnLnRhZ2xpbmUnKS5zZWxlY3QoJy5mbC1oZWFkaW5nLXRleHQnKS5odG1sKHRoZW1lLnNsdWcpO1xuXHRwYW5lbC5zZWxlY3QoJyNjbG9zZS1wYW5lbCcpLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpLm9uKCdjbGljaycsIGNsb3NlUGFuZWwpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLXRpdGxlJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCh0aXRsZS5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtY29udGVudCcpLnNlbGVjdCgnLmZsLXJpY2gtdGV4dCcpLmh0bWwoY29udGVudC5yZW5kZXJlZCk7XG5cblx0Ly90YWdzXG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtdGFncycpLnNlbGVjdCgnLmZsLWh0bWwnKS5odG1sKCcnKTtcblxuXHRjb25zdCB0YWdzRElWID0gcGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10YWdzJykuc2VsZWN0KCcuZmwtaHRtbCcpXG5cdFx0LmFwcGVuZCgnZGl2Jylcblx0XHQuYXR0cignaWQnLCd0YWctY29udGFpbmVyJyk7XG5cblx0Y29uc3QgdGFnc0hUTUwgPSB0YWdzRElWLnNlbGVjdEFsbCgnLmNpcmNsZScpXG5cdFx0LmRhdGEodGFncyk7XG5cblx0dGFnc0hUTUwuZXhpdCgpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC5yZW1vdmUoKTtcblxuXHR0YWdzSFRNTC5lbnRlcigpLmFwcGVuZCgnZGl2Jylcblx0XHQuYXR0cignaWQnLCB0YWcgPT4gYHRhZy0ke3RhZy5zbHVnfWApXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ3RhZy1waWxsJylcblx0XHQuaHRtbCggdGFnID0+IHtcblx0XHRcdGNvbnN0IGljb24gPSBnZXRJY29uKHRhZyk7XG5cdFx0XHRyZXR1cm4gYCR7aWNvbn0gJHt0YWcubmFtZX1gO1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2NvbG9yJywgJ3N0ZWVsYmx1ZScpO1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZWN0KHRoaXMpLnN0eWxlKCdjb2xvcicsICcjNTM1MzU0Jyk7XG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgZCA9PiB0YWdTZWFyY2goZCkpO1xuXHRcdFxuXHQvL3Jlc2l6ZSB0YWcgaWNvbnNcblx0dGFnc0RJVi5zZWxlY3RBbGwoJy50YWctaWNvbicpXG5cdFx0LmF0dHIoJ3dpZHRoJywnMTVweCcpXG5cdFx0LmF0dHIoJ2hlaWdodCcsJzE1cHgnKTtcblxuXHRjYXB0dXJlTGlua3MoKTtcblxufTtcblxuY29uc3QgY2FwdHVyZUxpbmtzID0gKCkgPT4ge1xuXG5cdHNlbGVjdEFsbCgnYScpXG5cdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Ly9nZXQgdXJsIC8vIGRvbWFpblxuXHRcdFx0Y29uc3QgbGluayA9IHNlbGVjdCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRjb25zdCBkb21haW4gPSBsaW5rLnNwbGl0KCcvJylbMl07XG5cblx0XHRcdC8vVGVzdCBpZiBpdCBpcyBhIGxvY2FsIGxpbmsgKGxvY2FsaG9zdCAtPiByZW1vdGUpXG5cdFx0XHRjb25zdCBob3N0ID0gKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcpID8gJ2xhYnMuZmx1eG8uYXJ0LmJyJyA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcblxuXHRcdFx0Ly9pZiBleHRycm5hbCwgbmF2aWdhdGVcblx0XHRcdGlmIChkb21haW4gIT0gaG9zdCkgcmV0dXJuOyAvL3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxuXG5cdFx0XHQvL2lmIGxvY2FsLCBwcmV2ZW50IHBhZ2UgdXBkYXRlXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvL2xvYWQgcG9zdCBiYXNlZCBvbiBzbHVnIG9uIHRoZSB1cmxcblx0XHRcdGNvbnN0IHNsdWcgPSBsaW5rLnNwbGl0KCcvJylbNF07XG5cblx0XHRcdHNob3dQb3N0KHtzbHVnfSk7XG5cdFx0fSk7XG5cbn07XG5cbmNvbnN0IHNob3dTcGlubmVyID0gKCkgPT4ge1xuXG5cdHNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2Jylcblx0XHQuYXR0cignaWQnLCAnc3Bpbm5lcicpXG5cdFx0Lmh0bWwoJzxkaXYgY2xhc3M9XCJsZHMtcmlwcGxlXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PicpO1xuXG59O1xuXG5jb25zdCBoaWRlU3Bpbm5lciA9ICgpID0+IHNlbGVjdCgnI3NwaW5uZXInKS5yZW1vdmUoKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXRIb21lLFxuXHRjb25maWdNYWluTWVudSxcblx0Y29uZmlnVG9wTWVudSxcblx0c2hvd0hvbWUsXG5cdGhpZGVIb21lLFxuXHRzaG93VG9wTWVudSxcblx0aGlkZVRvcE1lbnUsXG5cdHNob3dIZWFkaW5nLFxuXHRoaWRlSGVhZGluZyxcblx0dXBkYXRlSGVhZGluZyxcblx0c2hvd1BhbmVsLFxuXHRoaWRlUGFuZWwsXG5cdHVwZGF0ZVBhZ2UsXG5cdHVwZGF0ZVBvc3QsXG5cdHNob3dTcGlubmVyLFxuXHRoaWRlU3Bpbm5lclxufTsiLCJpbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5pbXBvcnQge3NlbGVjdCwgZ2VvVHJhbnNmb3JtLCBnZW9QYXRofSBmcm9tICdkMy9kaXN0L2QzLm1pbic7XG5cbmltcG9ydCBjb250ZW50IGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcuanNvbic7XG5pbXBvcnQgaGlzdG9yaWNhbFJpdmVsIGZyb20gJy4vZGF0YS9oaXN0b3JpY2FsLmpzb24nO1xuXG5cbmNvbnN0IGhpc3RvcmljYWxSaXZlclNjYWxlID0gY2hyb21hLnNjYWxlKFsndmlvbGV0JywnaW5kaWdvJywnYmx1ZScsJ2dyZWVuJ10pLmRvbWFpbihbMSw3XSk7XG5cbmxldCBEM2dlb1BhdGg7XG5sZXQgc3ZnO1xubGV0IGRhdGFzZXQ7XG5sZXQgbm9kZXNQb2ludDtcbmxldCBub2Rlc0xpbmU7XG5sZXQgbm9kZXNQb3lnb247XG5cblxuY29uc3QgaW5pdCA9IGFzeW5jIGNhbnZhcyA9PiB7XG5cblx0Y29uc3QgRDNnZW9UcmFuc2Zvcm0gPSBnZW9UcmFuc2Zvcm0oe3BvaW50Om1hcC5wcm9qZWN0UG9pbnR9KTtcblx0RDNnZW9QYXRoID0gZ2VvUGF0aCgpLnByb2plY3Rpb24oRDNnZW9UcmFuc2Zvcm0pO1xuXG5cdC8vIE92ZXJsYXkgZDMgb24gdGhlIG1hcGJveCBjYW52YXNcblx0c3ZnID0gc2VsZWN0KGNhbnZhcykuYXBwZW5kKCdzdmcnKVxuXHRcdC5hdHRyKCdpZCcsICdtYXAtYm94LXZpcycpXG5cdFx0LmF0dHIoJ2hlaWdodCcsICcxMDAlJyk7XG5cblxuXHRzdmcuYXBwZW5kKCdnJykuYXR0cignaWQnLCAncG9seWdvbnMtY29udGFpbmVyJyk7XG5cdHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdsaW5lcy1jb250YWluZXInKTtcblx0c3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ3BvaW50cy1jb250YWluZXInKTtcblxufTtcblxuY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgZGF0YVVSTCA9IGBodHRwczovL2FwaS5tYXBib3guY29tL2RhdGFzZXRzL3YxLyR7Y29uZmlnLm1hcGJveC51c2VyfS8ke2NvbmZpZy5tYXAuZGF0YXNldH0vZmVhdHVyZXM/YWNjZXNzX3Rva2VuPSR7Y29uZmlnLm1hcGJveC50b2tlbn1gO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFVUkwpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRkYXRhc2V0ID0gZGF0YS5mZWF0dXJlcztcblxuXHRkYXRhc2V0ID0gZGF0YXNldC5jb25jYXQoaGlzdG9yaWNhbFJpdmVsLmZlYXR1cmVzKTtcblx0XG5cdHJldHVybiBkYXRhc2V0O1xufTtcblxuY29uc3QgZHJhd05vZGVzID0gYXN5bmMgKHtzbHVnOiB0aGVtZX0pID0+IHtcblxuXHRpZiAoIWRhdGFzZXQpIGF3YWl0IGxvYWREYXRhKCk7XG5cblx0Y29uc3QgdGhlbWVOb2RlcyA9IGdldFRoZW1lTm9kZXModGhlbWUpO1xuXG5cdGNvbnN0IHBvaW50cyA9IHRoZW1lTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnUG9pbnQnKTtcblx0Y29uc3QgbGluZXMgPSB0aGVtZU5vZGVzLmZpbHRlcihuID0+IG4uZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmVTdHJpbmcnKTtcblx0Y29uc3QgcG9seWdvbnMgPSB0aGVtZU5vZGVzLmZpbHRlcihuID0+IG4uZ2VvbWV0cnkudHlwZSA9PT0gJ1BvbHlnb24nKTtcblxuXHRkcmF3UG9seWdpbnMoe2RhdGE6cG9seWdvbnN9KTtcblx0ZHJhd0xpbmVzKHtkYXRhOmxpbmVzfSk7XG5cdGRyYXdQb2ludHMoe2RhdGE6cG9pbnRzfSk7XG5cbn07XG5cbmNvbnN0IGRyYXdOb2RlQnlUYWcgPSBhc3luYyAoe25hbWU6IHRhZ30pID0+IHtcblxuXHRjb25zdCB0YWdOb2RlcyA9IGdldFRhZ05vZGVzKHRhZyk7XG5cblx0Y29uc3QgcG9pbnRzID0gdGFnTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnUG9pbnQnKTtcblx0Y29uc3QgbGluZXMgPSB0YWdOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdMaW5lU3RyaW5nJyk7XG5cdGNvbnN0IHBvbHlnb25zID0gdGFnTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnUG9seWdvbicpO1xuXG5cdGRyYXdQb2x5Z2lucyh7ZGF0YTpwb2x5Z29uc30pO1xuXHRkcmF3TGluZXMoe2RhdGE6bGluZXN9KTtcblx0ZHJhd1BvaW50cyh7ZGF0YTpwb2ludHN9KTtcblxufTtcblxuY29uc3QgZ2V0VGhlbWVOb2RlcyA9IHRoZW1lID0+IHtcblxuXHRjb25zdCBzZWxlY3RlZE5vZGVzID0gZGF0YXNldC5maWx0ZXIoIG5vZGUgPT4ge1xuXHRcdGlmKG5vZGUucHJvcGVydGllcy50aGVtZSkge1xuXHRcdFx0Y29uc3Qgbm9kZXRoZW1lcyA9IG5vZGUucHJvcGVydGllcy50aGVtZS5zcGxpdCgnLCAnKTtcblx0XHRcdGNvbnN0IHRoZW1lTm9kZSA9IG5vZGV0aGVtZXMuZmlsdGVyKHQgPT4gdC50b0xvd2VyQ2FzZSgpID09PSB0aGVtZSk7XG5cdFx0XHRpZiAodGhlbWVOb2RlLmxlbmd0aCA+IDApIHJldHVybiBub2RlO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHNlbGVjdGVkTm9kZXM7XG59O1xuXG5jb25zdCBnZXRUYWdOb2RlcyA9IHRhZyA9PiB7XG5cblx0Y29uc3Qgc2VsZWN0ZWROb2RlcyA9IGRhdGFzZXQuZmlsdGVyKCBub2RlID0+IHtcblx0XHRpZiAobm9kZS5wcm9wZXJ0aWVzLnRhZykge1xuXHRcdFx0Y29uc3Qgbm9kZVRhZ3MgPSBub2RlLnByb3BlcnRpZXMudGFnLnNwbGl0KCcsICcpO1xuXHRcdFx0Y29uc3QgdGFnTm9kZSA9IG5vZGVUYWdzLmZpbHRlcih0ID0+IHQudG9Mb3dlckNhc2UoKSA9PT0gdGFnLnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0aWYgKHRhZ05vZGUubGVuZ3RoID4gMCkgcmV0dXJuIG5vZGU7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gc2VsZWN0ZWROb2Rlcztcbn07XG5cbmNvbnN0IGdldE5vZGVDb29yZGluYXRlcyA9IGFzeW5jICh7aWR9KSA9PiB7XG5cblx0aWYgKCFkYXRhc2V0KSBhd2FpdCBsb2FkRGF0YSgpO1xuXHRjb25zdCBpdGVtID0gZGF0YXNldC5maW5kKCBpdGVtID0+IGl0ZW0ucHJvcGVydGllcy5pZCA9PT0gaWQgKTtcblxuXHRpZiAoIWl0ZW0pIHJldHVybiBjb25maWcubWFwLmRlZmF1bHQuY2VudGVyOyAvLyByZXR1cm4gY2VudGVyIG9mIG1hcFxuXG5cdGlmIChpdGVtLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpIHJldHVybiBpdGVtLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuXHRjb25zdCBjb29yZGluYXRlcyA9IGl0ZW0uZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF07XG5cblx0cmV0dXJuIGNvb3JkaW5hdGVzO1xufTtcblxuY29uc3QgZ2V0Q29sb3VycyA9ICgpID0+IHtcblxuXHRjb25zdCB0aGVtZSA9IGNvbnRlbnQuZ2V0Q3VycmVudFRoZW1lKCk7XG5cblx0Y29uc3QgY29sb3JzID0ge1xuXHRcdHJpdmVyOiAnIzAwNzFiYydcblx0fTtcblxuXHRpZiAodGhlbWUuc2x1ZyA9PT0gJ2Vudmlyb25tZW50Jykge1xuXHRcdGNvbG9ycy5maWxsID0gJyNGRkRFMTcnO1xuXHRcdGNvbG9ycy5zdHJva2UgPSAnIzhCNUUzQyc7XG5cdH0gZWxzZSBpZiAodGhlbWUuc2x1ZyA9PT0gJ3dhdGVyJykge1xuXHRcdGNvbG9ycy5maWxsID0gJyNmZWZlZmUnO1xuXHRcdGNvbG9ycy5zdHJva2UgPSAnIzY1MmUwMCc7XG5cdH0gZWxzZSBpZiAodGhlbWUuc2x1ZyA9PT0gJ3N0ZXBzJykge1xuXHRcdGNvbG9ycy5maWxsID0gJyNGMTVBMjknO1xuXHRcdGNvbG9ycy5zdHJva2UgPSAnI0YxNUEyOSc7XG5cdH1cblxuXHRyZXR1cm4gY29sb3JzO1xufTtcblxuY29uc3QgZHJhd1BvaW50cyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gMTAwMCwgZGVsYXlUaW1lID0gMjAwfSkgPT4ge1xuXG5cdGNvbnN0IGNvbG91cnMgPSBnZXRDb2xvdXJzKCk7XG5cdFxuXHRub2Rlc1BvaW50ID0gc3ZnLnNlbGVjdCgnI3BvaW50cy1jb250YWluZXInKS5zZWxlY3RBbGwoJy5jaXJjbGUnKVxuXHRcdC5kYXRhKGRhdGEpO1xuXG5cdG5vZGVzUG9pbnQuZXhpdCgpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5hdHRyKCdyJywgMClcblx0XHQucmVtb3ZlKCk7XG5cblx0bm9kZXNQb2ludC5lbnRlcigpLmFwcGVuZCgnY2lyY2xlJylcblx0XHQuYXR0cignY2xhc3MnLCAnY2lyY2xlJyk7XG5cblx0bm9kZXNQb2ludCA9IHN2Zy5zZWxlY3RBbGwoJy5jaXJjbGUnKVxuXHRcdC5hdHRyKCdpZCcsIGQgPT4gYGluZGV4LSR7ZC5wcm9wZXJ0aWVzLmlkfWApXG5cdFx0LmF0dHIoJ2N4JywgZCA9PiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS54KVxuXHRcdC5hdHRyKCdjeScsIGQgPT4gbWFwLnByb2plY3QoZC5nZW9tZXRyeS5jb29yZGluYXRlcykueSlcblx0XHQuYXR0cigncicsIDApXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4gY2hyb21hKGNvbG91cnMuc3Ryb2tlKS5oZXgoKSlcblx0XHQuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBjaHJvbWEoY29sb3Vycy5maWxsKS5hbHBoYSgwLjcpLmhleCgpKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuMSlcblx0XHQub24oJ21vdXNlb3ZlcicsIGQgPT4gbm9kZXNPdmVyKGQpKVxuXHRcdC5vbignbW91c2VvdXQnLCAoKSA9PiBub2Rlc091dCgpKVxuXHRcdC5vbignY2xpY2snLCBkID0+IHtcblx0XHRcdHJlc2V0Tm9kZXNTdGF0ZShkKTtcblx0XHRcdGNvbnRlbnQuc2hvd1Bvc3QoZC5wcm9wZXJ0aWVzKTtcblx0XHR9KTtcblx0XHRcblx0XG5cdG5vZGVzUG9pbnQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKVxuXHRcdC5kZWxheSgoZCwgaSkgPT4gZGVsYXlUaW1lICogaSlcblx0XHQuYXR0cigncicsIDgpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cbn07XG5cbmNvbnN0IGRyYXdMaW5lcyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gMTAwMCwgZGVsYXlUaW1lID0gMjAwfSkgPT4ge1xuXG5cdGNvbnN0IGNvbG91cnMgPSBnZXRDb2xvdXJzKCk7XG5cblx0bm9kZXNMaW5lID0gc3ZnLnNlbGVjdCgnI2xpbmVzLWNvbnRhaW5lcicpLnNlbGVjdEFsbCgnLmxpbmUnKVxuXHRcdC5kYXRhKGRhdGEpO1xuXG5cdG5vZGVzTGluZS5leGl0KClcblx0XHQuYXR0cignY2xhc3MnLCAnZXhpdCcpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbig1MDApXG5cdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsIDApXG5cdFx0LnJlbW92ZSgpO1xuXG5cdG5vZGVzTGluZS5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2xpbmUnKTtcblxuXHRub2Rlc0xpbmUgPSBzdmcuc2VsZWN0QWxsKCcubGluZScpXG5cdFx0LmF0dHIoJ2lkJywgZCA9PiBkLnByb3BlcnRpZXMuaWQpXG5cdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgZCA9PiB7XG5cdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLm5hbWUgPT09ICdTYWludC1QaWVycmUgU3BlY3VsYXRpdmUgUml2ZXInKSByZXR1cm4gY2hyb21hKGNvbG91cnMucml2ZXIpLmhleCgpO1xuXHRcdFx0aWYgKGQucHJvcGVydGllcy50eXBlID09PSAnaGlzdG9yaWNhbCcpIHJldHVybiBoaXN0b3JpY2FsUml2ZXJTY2FsZShkLnByb3BlcnRpZXMuY29sb3IpLmFscGhhKC44KS5oZXgoKTtcblx0XHRcdHJldHVybiBjaHJvbWEoY29sb3Vycy5zdHJva2UpLmhleCgpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuMSlcblx0XHQub24oJ21vdXNlb3ZlcicsIGQgPT4gbm9kZXNPdmVyKGQpKVxuXHRcdC5vbignbW91c2VvdXQnLCAoKSA9PiBub2Rlc091dCgpKVxuXHRcdC5vbignY2xpY2snLCBkID0+IHtcblx0XHRcdGNvbnN0IHRoZW1lID0gY29udGVudC5nZXRDdXJyZW50VGhlbWUoKTtcblx0XHRcdGlmIChkLnByb3BlcnRpZXMubmFtZSA9PT0gJ1NhaW50LVBpZXJyZSBTcGVjdWxhdGl2ZSBSaXZlcicgJiYgdGhlbWUuc2x1ZyAhPT0gJ3N0ZXBzJykgcmV0dXJuO1xuXHRcdFx0cmVzZXROb2Rlc1N0YXRlKGQpO1xuXHRcdFx0Y29udGVudC5zaG93UG9zdChkLnByb3BlcnRpZXMpO1xuXHRcdH0pO1xuXG5cdG5vZGVzTGluZS50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0LmRlbGF5KChkLCBpKSA9PiBkZWxheVRpbWUgKiBpKVxuXHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMilcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxufTtcblxuY29uc3QgZHJhd1BvbHlnaW5zID0gICh7ZGF0YSwgdHJhbnNpdGlvblRpbWUgPSAxMDAwLCBkZWxheVRpbWUgPSAyMDB9KSA9PiB7XG5cblx0Y29uc3QgY29sb3VycyA9IGdldENvbG91cnMoKTtcblxuXHRub2Rlc1BveWdvbiA9IHN2Zy5zZWxlY3QoJyNwb2x5Z29ucy1jb250YWluZXInKS5zZWxlY3RBbGwoJy5wb2x5Z29ucycpXG5cdFx0LmRhdGEoZGF0YSk7XG5cblx0bm9kZXNQb3lnb24uZXhpdCgpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnJlbW92ZSgpO1xuXG5cdG5vZGVzUG95Z29uLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcblx0XHQuYXR0cignY2xhc3MnLCAncG9seWdvbnMnKTtcblxuXHRub2Rlc1BveWdvbiA9IHN2Zy5zZWxlY3RBbGwoJy5wb2x5Z29ucycpXG5cdFx0LmF0dHIoJ2lkJywgZCA9PiBkLnByb3BlcnRpZXMuaWQpXG5cdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4gY2hyb21hKGNvbG91cnMuc3Ryb2tlKS5oZXgoKSlcblx0XHQuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBjaHJvbWEoY29sb3Vycy5maWxsKS5hbHBoYSgwLjcpLmhleCgpKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuMSlcblx0XHQub24oJ21vdXNlb3ZlcicsIGQgPT4gbm9kZXNPdmVyKGQpKVxuXHRcdC5vbignbW91c2VvdXQnLCAoKSA9PiBub2Rlc091dCgpKVxuXHRcdC5vbignY2xpY2snLCBkID0+IHtcblx0XHRcdHJlc2V0Tm9kZXNTdGF0ZShkKTtcblx0XHRcdGNvbnRlbnQuc2hvd1Bvc3QoZC5wcm9wZXJ0aWVzKTtcblx0XHR9KTtcblxuXHRub2Rlc1BveWdvbi50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0LmRlbGF5KChkLCBpKSA9PiBkZWxheVRpbWUgKiBpKVxuXHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMilcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxufTtcblxuY29uc3Qgbm9kZXNVcGRhdGUgPSAoKSA9PiB7XG5cdFxuXHRpZiAobm9kZXNQb2ludCkge1xuXHRcdG5vZGVzUG9pbnQuYXR0cignY3gnLCBkID0+IG1hcC5wcm9qZWN0KGQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpLngpXG5cdFx0XHQuYXR0cignY3knLCBkID0+IG1hcC5wcm9qZWN0KGQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpLnkpO1xuXHR9XG5cblx0aWYgKG5vZGVzTGluZSkgbm9kZXNMaW5lLmF0dHIoJ2QnLCBEM2dlb1BhdGgpO1xuXHRpZiAobm9kZXNQb3lnb24pIG5vZGVzUG95Z29uLmF0dHIoJ2QnLCBEM2dlb1BhdGgpO1xuXHRcbn07XG5cbmNvbnN0IG5vZGVzT3ZlciA9IGN1cnJlbnQgPT4ge1xuXG5cdGlmIChub2Rlc1BvaW50KSB7XG5cdFx0bm9kZXNQb2ludFxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgZCA9PiB7XG5cdFx0XHRcdGlmIChkICE9PSBjdXJyZW50KSByZXR1cm4gMC41O1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZCA9PiB7XG5cdFx0XHRcdGlmIChkID09PSBjdXJyZW50KSByZXR1cm4gMztcblx0XHRcdH0pO1xuXG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSB7XG5cdFx0bm9kZXNMaW5lXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCBkID0+IHtcblx0XHRcdFx0aWYgKGN1cnJlbnQucHJvcGVydGllcy5jb2xvciAmJiBkLnByb3BlcnRpZXMuY29sb3IgPT09IGN1cnJlbnQucHJvcGVydGllcy5jb2xvcikgcmV0dXJuO1xuXHRcdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLm5hbWUgIT09IGN1cnJlbnQucHJvcGVydGllcy5uYW1lKSByZXR1cm4gMC41O1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZCA9PiB7XG5cdFx0XHRcdGlmIChjdXJyZW50LnByb3BlcnRpZXMuY29sb3IgJiYgZC5wcm9wZXJ0aWVzLmNvbG9yID09PSBjdXJyZW50LnByb3BlcnRpZXMuY29sb3IpIHJldHVybiAzO1xuXHRcdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLm5hbWUgPT09IGN1cnJlbnQucHJvcGVydGllcy5uYW1lKSByZXR1cm4gMztcblx0XHRcdH0pO1xuXHR9XG5cblx0aWYgKG5vZGVzUG95Z29uKSB7XG5cdFx0bm9kZXNQb3lnb25cblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIGQgPT4ge1xuXHRcdFx0XHRpZiAoZCAhPT0gY3VycmVudCkgcmV0dXJuIDAuNTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGQgPT4ge1xuXHRcdFx0XHRpZiAoZCA9PT0gY3VycmVudCkgcmV0dXJuIDM7XG5cdFx0XHR9KTtcblx0fVxuXG59OyBcblxuY29uc3Qgbm9kZXNPdXQgPSAoKSA9PiB7XG5cblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMik7XG5cdH1cblx0aWYgKG5vZGVzTGluZSkge1xuXHRcdG5vZGVzTGluZS5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIpO1xuXHR9XG5cdGlmIChub2Rlc1BveWdvbikge1xuXHRcdG5vZGVzUG95Z29uLnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMik7XG5cdH1cblxufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0Tm9kZXNTdGF0ZSA9ICh7dHJhbnNpdGlvblRpbWUgPSAyMDAwLCBkZWxheVRpbWUgPSAxMDB9KSA9PiB7XG5cblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKVxuXHRcdFx0LmRlbGF5KGRlbGF5VGltZSlcblx0XHRcdC5hdHRyKCdyJywgOCk7XG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSB7XG5cdFx0bm9kZXNMaW5lLnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKVxuXHRcdFx0LmRlbGF5KGRlbGF5VGltZSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNCk7XG5cdH1cblxuXHRpZiAobm9kZXNQb3lnb24pIHtcblx0XHRub2Rlc1BveWdvbi50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHRcdC5kZWxheShkZWxheVRpbWUpXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIpO1xuXHR9XG5cbn07XG5cbmNvbnN0IHNldEN1cnJlbnROb2RlID0gKHtpZH0pID0+IHtcblxuXHRpZiAobm9kZXNQb2ludCkge1xuXHRcdG5vZGVzUG9pbnQudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oMzAwMClcblx0XHRcdC5hdHRyKCdyJywgZCA9PiB7XG5cdFx0XHRcdGlmIChkLnByb3BlcnRpZXMuaWQgPT09IGlkKSByZXR1cm4gMTY7XG5cdFx0XHRcdHJldHVybiA4O1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXHR9XG5cblx0aWYgKG5vZGVzTGluZSkge1xuXHRcdG5vZGVzTGluZS50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbigzMDAwKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCBkID0+IHtcblx0XHRcdFx0aWYgKGQucHJvcGVydGllcy5pZCA9PT0gaWQpIHJldHVybiA4O1xuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0fVxuXG5cdGlmIChub2Rlc1BveWdvbikge1xuXHRcdG5vZGVzUG95Z29uLnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGQgPT4ge1xuXHRcdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLmlkID09PSBpZCkgcmV0dXJuIDg7XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXHR9XG5cdFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXQsXG5cdGRyYXdOb2Rlcyxcblx0ZHJhd05vZGVCeVRhZyxcblx0bm9kZXNVcGRhdGUsXG5cdGdldE5vZGVDb29yZGluYXRlcyxcblx0c2V0Q3VycmVudE5vZGUsXG5cdHJlc2V0Tm9kZXNTdGF0ZVxufTsiLCJpbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMvZGlzdC9kMy5taW4nO1xuaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbCc7XG5cbmltcG9ydCBnZW9kYXRhIGZyb20gJy4vZ2VvZGF0YSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvY29uZmlnLmpzb24nO1xuXG5cbmNvbnN0IG1hcEJveENvbmZpZyA9IHtcblx0Y29udGFpbmVyOiAnbWFwJyxcblx0c3R5bGU6IGBtYXBib3g6Ly9zdHlsZXMvJHtjb25maWcubWFwYm94LnVzZXJ9LyR7Y29uZmlnLm1hcC5kZWZhdWx0LnN0eWxlSUR9YCxcblx0Y2VudGVyOiBjb25maWcubWFwLmRlZmF1bHQuY2VudGVyLCAvL2NlbnRlciBpbiBNb250cmVhbFxuXHR6b29tOiBjb25maWcubWFwLmRlZmF1bHQuem9vbSxcblx0cGl0Y2g6IGNvbmZpZy5tYXAuZGVmYXVsdC5waXRjaCxcblx0bWluWm9vbTogY29uZmlnLm1hcC5kZWZhdWx0Lm1pblpvb20sXG5cdG1heFpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC5tYXhab29tLFxuXHRtYXhCb3VuZHM6IGNvbmZpZy5tYXAuZGVmYXVsdC5tYXhCb3VuZHMsXG5cdGludGVyYWN0aXZlOiB0cnVlLFxufTtcblxubGV0IG1hcGJveDtcblxuXG5jb25zdCBpbml0ID0gYXN5bmMgKHttYXBJRCwgbG9jYXRpb259KSA9PiB7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG5cdFx0Ly9tYXAgY29udGFpbmVyIHNldCBvbiBXUCA+IEJlYXZlclxuXHRcdHNlbGVjdCgnI2FwcCcpLnNlbGVjdCgnOmZpcnN0LWNoaWxkJylcblx0XHRcdC5hcHBlbmQoJ2RpdicpXG5cdFx0XHQuYXR0cignaWQnLCAnbWFwJyk7XG5cblx0XHRpZiAobG9jYXRpb24gPT09ICc0MDQnKSBzZXRVbmtub3dMb2NhdGlvbigpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLzQwNDogY2VudGVyIHRoZSBtYXAgYW55d2hlcmUgaW4gdGhlIGdsb2JlXG5cblx0XHRpZiAobWFwSUQpIG1hcEJveENvbmZpZy5zdHlsZSA9IGBtYXBib3g6Ly9zdHlsZXMvJHtjb25maWcubWFwYm94LnVzZXJ9LyR7bWFwSUR9YDtcdFx0Ly9pZiBkZWVwbGluazogc2V0IG1hcCBzdHlsZVxuXG5cdFx0bWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBjb25maWcubWFwYm94LnRva2VuO1xuXHRcdG1hcGJveCA9IG5ldyBtYXBib3hnbC5NYXAobWFwQm94Q29uZmlnKTtcblxuXHRcdG1hcGJveC5vbignbG9hZCcsICgpID0+IHtcblxuXHRcdFx0Z2VvZGF0YS5pbml0KG1hcGJveC5nZXRDYW52YXNDb250YWluZXIoKSk7XG5cblx0XHRcdG1hcGJveC5vbigndmlld3Jlc2V0JywgdXBkYXRlKTtcblx0XHRcdG1hcGJveC5vbignbW92ZScsIHVwZGF0ZSk7XG5cdFx0XHRtYXBib3gub24oJ21vdmVlbmQnLCB1cGRhdGUpO1xuXG5cdFx0XHRpZiAobG9jYXRpb24gPT09ICc0MDQnKSBmbHlGcm9tVW5rbm93TG9jYXRpb24oKTtcblx0XHRcdFxuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0pO1xuXHRcdFxuXHR9KTtcblxufTtcblxuLy9jaGVjayBpZiBtYXAgaXMgbG9hZGVkXG5jb25zdCBpc01hcGJveExvYWRlZCA9ICgpID0+ICB7XG5cdGlmIChtYXBib3gpIHJldHVybiBtYXBib3guaXNTdHlsZUxvYWRlZCgpO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG4vL2NoYW5nZSBtYXAgc3R5bGVcbmNvbnN0IGNoYW5nZU1hcCA9ICh7bWFwSUR9KSA9PiBtYXBib3guc2V0U3R5bGUoYG1hcGJveDovL3N0eWxlcy8ke2NvbmZpZy5tYXBib3gudXNlcn0vJHttYXBJRH1gKTtcblxuLy8gUHJvamVjdCBHZW9KU09OIGNvb3JkaW5hdGUgdG8gdGhlIG1hcCdzIGN1cnJlbnQgc3RhdGVcbmNvbnN0IHByb2plY3QgPSBkID0+IG1hcGJveC5wcm9qZWN0KG5ldyBtYXBib3hnbC5MbmdMYXQoK2RbMF0sICtkWzFdKSk7XG5cbi8vIFByb2plY3QgR2VvSlNPTiBjb29yZGluYXRlIHRvIHRoZSBtYXAncyBjdXJyZW50IHN0YXRlXG5jb25zdCBwcm9qZWN0UG9pbnQgPSBmdW5jdGlvbiAobG9uLCBsYXQpIHtcblx0bGV0IHBvaW50ID0gbWFwYm94LnByb2plY3QobmV3IG1hcGJveGdsLkxuZ0xhdChsb24sIGxhdCkpO1xuXHR0aGlzLnN0cmVhbS5wb2ludChwb2ludC54LCBwb2ludC55KTtcbn07XG5cbi8vdXBkYXRlXG5jb25zdCB1cGRhdGUgPSAoKSA9PiBnZW9kYXRhLm5vZGVzVXBkYXRlKCk7XG5cbmNvbnN0IHNldFVua25vd0xvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuXG5cdC8vYW55d2hlcmUgaW4gdGhlIGdsb2JlXG5cdGNvbnN0IGxhdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE4MCkgLSA5MDtcblx0Y29uc3QgbG9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKSAtIDE4MDtcblxuXHRtYXBCb3hDb25maWcuem9vbSA9IDU7XG5cdG1hcEJveENvbmZpZy5jZW50ZXIgPSBbbG9uLGxhdF07XG5cdG1hcEJveENvbmZpZy5tYXhCb3VuZHMgPSBudWxsO1xuXG59O1xuXG5jb25zdCBmbHlGcm9tVW5rbm93TG9jYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cblx0bWFwYm94LmZseVRvKHtcblx0XHRjZW50ZXI6IGNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXIsXG5cdFx0em9vbTogY29uZmlnLm1hcC5kZWZhdWx0Lnpvb20sXG5cdFx0c3BlZWQ6IDEsXG5cdFx0Y3VydmU6IDEsXG5cdFx0bWluWm9vbTogMyxcblx0XHRlYXNpbmc6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9XG5cdH0pO1xuXG5cdG1hcGJveC5vbignbW92ZWVuZCcsICgpID0+IHtcblx0XHRpZiAobWFwYm94LmdldE1heEJvdW5kcygpID09PSBudWxsKSBtYXBib3guc2V0TWF4Qm91bmRzKGNvbmZpZy5tYXAuZGVmYXVsdC5tYXhCb3VuZHMpO1xuXHR9KTtcblxufTtcblxuY29uc3QgZmx5VG8gPSBjb29yZGluYXRlcyA9PiB7XG5cblx0bWFwYm94LmZseVRvKHtcblx0XHRjZW50ZXI6Y29vcmRpbmF0ZXMsXG5cdFx0em9vbTogMTcsXG5cdFx0c3BlZWQ6IDEsXG5cdFx0Y3VydmU6IDEsXG5cdFx0ZWFzaW5nOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfVxuXHR9KTtcblxufTtcblxuY29uc3QgZmx5VG9PcmlnaW4gPSAoKSA9PiB7XG5cblx0bWFwYm94LmZseVRvKHtcblx0XHRjZW50ZXI6Y29uZmlnLm1hcC5kZWZhdWx0LmNlbnRlcixcblx0XHR6b29tOiBjb25maWcubWFwLmRlZmF1bHQuem9vbSArIDAuMixcblx0XHRzcGVlZDogMS4yLFxuXHRcdGN1cnZlOiAxLFxuXHRcdGVhc2luZzogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH1cblx0fSk7XG5cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpbml0LFxuXHR1cGRhdGUsXG5cdGlzTWFwYm94TG9hZGVkLFxuXHRjaGFuZ2VNYXAsXG5cdHByb2plY3QsXG5cdHByb2plY3RQb2ludCxcblx0Zmx5VG8sXG5cdGZseVRvT3JpZ2luXG59O1xuIiwiaW1wb3J0IGNvbnRhbWluYXRpb24gZnJvbSAnLi9hc3NldHMvYmlvaGF6YXJkLnN2Zyc7XG5pbXBvcnQgaW5mcmFzdHJ1Y3R1cmVzIGZyb20gJy4vYXNzZXRzL2NvbmUuc3ZnJztcbmltcG9ydCBzcGVjdWxhdGl2ZSBmcm9tICcuL2Fzc2V0cy9oZWxwLnN2Zyc7XG5pbXBvcnQgZGlzcmVhcHBlYXJpbmdXYXRlcnMgZnJvbSAnLi9hc3NldHMvc2VhLnN2Zyc7XG5pbXBvcnQgZ2hvc3QgZnJvbSAnLi9hc3NldHMvc25hcGNoYXQuc3ZnJztcbmltcG9ydCBiZXlvbmRIdW1hbnMgZnJvbSAnLi9hc3NldHMvc25ha2Uuc3ZnJztcbmltcG9ydCBpbWFnaW5hcmllcyBmcm9tICcuL2Fzc2V0cy90aG91Z2h0LWJ1YmJsZS5zdmcnO1xuaW1wb3J0IHVucnVseVdhdGVycyBmcm9tICcuL2Fzc2V0cy90c3VuYW1pLnN2Zyc7XG5cblxuZXhwb3J0IGNvbnN0IGdldEljb24gPSAoe3NsdWd9KSA9PiB7XG5cdFxuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09PSAnZ2hvc3RzJykgcmV0dXJuIGdob3N0O1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09PSAnYmV5b25kLWh1bWFucycpIHJldHVybiBiZXlvbmRIdW1hbnM7XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT09ICdjb250YW1pbmF0aW9uJykgcmV0dXJuIGNvbnRhbWluYXRpb247XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT09ICdkaXNyZWFwcGVhcmluZ3dhdGVycycpIHJldHVybiBkaXNyZWFwcGVhcmluZ1dhdGVycztcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PT0gJ2luZnJhc3RydWN0dXJlJykgcmV0dXJuIGluZnJhc3RydWN0dXJlcztcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PT0gJ2ltYWdpbmFyaWVzJykgcmV0dXJuIGltYWdpbmFyaWVzO1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09PSAnc3BlY3VsYXRpb24nKSByZXR1cm4gc3BlY3VsYXRpdmU7XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT09ICd1bnJ1bGx5d2F0ZXJzJykgcmV0dXJuIHVucnVseVdhdGVycztcblx0XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0SWNvblxufTsiXSwic291cmNlUm9vdCI6IiJ9