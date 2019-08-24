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

// import {select} from 'd3/dist/d3.min';



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

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32.051 32.051\" style=\"enable-background:new 0 0 32.051 32.051;\" xml:space=\"preserve\"><g><path d=\"M25.267,13.247c-0.425-0.122-0.878-0.129-1.321-0.146c0.121-0.311,3.326-8.258-5.136-11.408 c-0.004,0.071-0.01,0.143-0.021,0.211c5.438,3.268,2.922,8.502,2.717,8.731c-1.499-1.154-3.371-1.84-5.403-1.84 c-2.068,0-3.972,0.711-5.483,1.904c-0.372-0.615-0.662-1.315-0.847-2.087c-0.15-1.351-0.056-2.565,0.533-3.821 c0.583-1.144,1.522-2.111,2.64-2.744c-0.013-0.062-0.023-0.125-0.031-0.19c-1.24,0.501-2.369,1.34-3.381,2.422 c-0.44,0.615-3.073,3.782-1.408,8.617c-0.449,0.016-0.895,0.063-1.335,0.146c-1.751,0.372-4.534,1.878-5.845,4.467 c-0.439,0.74-0.612,1.496-0.819,2.226c-0.212,1.464-0.166,2.87,0.215,4.153c0.056-0.034,0.111-0.066,0.168-0.096 c-0.201-1.269-0.032-2.608,0.5-3.774c0.614-1.246,1.504-2.075,2.654-2.798c1.937-0.908,3.564-0.656,3.631-0.645 c-0.043,0.358-0.068,0.723-0.068,1.096c0,3.549,2.095,6.615,5.113,8.035c-0.016,0.043-0.031,0.086-0.045,0.125 c-0.056,0.103-2.85,4.651-8.252,2.619c-0.048,0.051-0.099,0.1-0.151,0.147c0.663,0.51,6.303,4.29,11.497-2.086 c0.235,0.021,0.473,0.034,0.714,0.034c0.145,0,0.289-0.006,0.433-0.012c1.097,1.525,5.3,6.244,11.633,2.268 c-0.054-0.049-0.104-0.098-0.15-0.149c-5.652,2.11-8.312-2.776-8.342-2.86c3.361-1.528,5.302-4.5,5.302-8.121 c0-0.312-0.017-0.617-0.047-0.922c0.012-0.002,0.021-0.004,0.035-0.008c1.099-0.074,2.275,0.139,3.429,0.68 c1.15,0.726,2.04,1.556,2.654,2.801c0.53,1.167,0.7,2.504,0.499,3.773c0.058,0.029,0.112,0.06,0.168,0.096 C32.178,22.64,33.333,15.562,25.267,13.247z M11.593,19.192c-0.004-0.004-0.01-0.012-0.015-0.018l0.012,0.014L11.593,19.192z M13.803,17.671c0-0.838,0.448-1.565,1.118-1.971c0.345-0.207,0.748-0.329,1.18-0.329c0.45,0,0.87,0.133,1.224,0.354 c0.646,0.408,1.075,1.125,1.075,1.945c0,0.949-0.579,1.77-1.404,2.119c-0.275,0.115-0.578,0.18-0.895,0.18 C14.831,19.971,13.803,18.94,13.803,17.671z M16.101,11.209c1.373,0,2.646,0.434,3.694,1.167c-1.165,0.825-4.743,2.123-7.496,0.078 C13.367,11.672,14.681,11.209,16.101,11.209z M9.642,17.671c0-0.092,0.004-0.185,0.006-0.277c0.107,0.061,2.999,1.621,3.221,5.865 C10.942,22.139,9.642,20.055,9.642,17.671z M19.188,23.343c0.002-0.108,0.239-4.016,3.369-5.824 c0.001,0.05,0.004,0.102,0.004,0.152C22.562,20.114,21.196,22.245,19.188,23.343z\"></path></g></svg>"

/***/ }),

/***/ "./src/assets/cone.svg":
/*!*****************************!*\
  !*** ./src/assets/cone.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg id=\"Layer\" enable-background=\"new 0 0 64 64\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m13.5 56h37c3.033 0 5.5-2.468 5.5-5.5s-2.467-5.5-5.5-5.5h-1.046l-3.787-11.675c-.004-.015-.01-.03-.014-.045l-3.373-10.4v-.001l-3.48-10.729c-.805-2.483-3.098-4.15-5.708-4.15h-2.185c-2.609 0-4.903 1.667-5.707 4.149l-6.854 21.133c-.004.014-.01.028-.014.043l-3.786 11.675h-1.046c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5zm11.381-29.899c2.18.589 4.601.899 7.119.899s4.938-.31 7.119-.899l2.228 6.869c-2.318 1.266-5.742 2.03-9.347 2.03s-7.029-.764-9.347-2.03zm4.124-12.718c.268-.827 1.033-1.383 1.903-1.383h2.185c.87 0 1.634.556 1.902 1.383l2.888 8.905c-1.794.461-3.82.712-5.883.712s-4.089-.251-5.883-.712zm-7.602 23.439c2.865 1.383 6.627 2.178 10.597 2.178s7.732-.795 10.597-2.178l2.652 8.178h-26.498zm-7.903 12.178h34.493c.002 0 .004.001.006.001s.004-.001.006-.001h2.495c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-37c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5z\"></path></svg>"

/***/ }),

/***/ "./src/assets/help.svg":
/*!*****************************!*\
  !*** ./src/assets/help.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\"><g><g><g><path d=\"M248.158,343.22c-14.639,0-26.491,12.2-26.491,26.84c0,14.291,11.503,26.84,26.491,26.84 c14.988,0,26.84-12.548,26.84-26.84C274.998,355.42,262.799,343.22,248.158,343.22z\"></path><path d=\"M252.69,140.002c-47.057,0-68.668,27.885-68.668,46.708c0,13.595,11.502,19.869,20.914,19.869 c18.822,0,11.154-26.84,46.708-26.84c17.429,0,31.372,7.669,31.372,23.703c0,18.824-19.52,29.629-31.023,39.389 c-10.108,8.714-23.354,23.006-23.354,52.983c0,18.125,4.879,23.354,19.171,23.354c17.08,0,20.565-7.668,20.565-14.291 c0-18.126,0.35-28.583,19.521-43.571c9.411-7.32,39.04-31.023,39.04-63.789S297.307,140.002,252.69,140.002z\"></path><path d=\"M256,0C114.516,0,0,114.497,0,256v236c0,11.046,8.954,20,20,20h236c141.483,0,256-114.497,256-256 C512,114.516,397.503,0,256,0z M256,472H40V256c0-119.377,96.607-216,216-216c119.377,0,216,96.607,216,216 C472,375.377,375.393,472,256,472z\"></path></g></g></g></svg>"

/***/ }),

/***/ "./src/assets/sea.svg":
/*!****************************!*\
  !*** ./src/assets/sea.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512.004 512.004\" style=\"enable-background:new 0 0 512.004 512.004;\" xml:space=\"preserve\"><g><g><path d=\"M503.325,140.931c-14.29,0-20.989-6.142-29.469-13.918c-9.447-8.663-20.155-18.482-41.198-18.482 s-31.751,9.819-41.199,18.482c-8.479,7.776-15.177,13.918-29.467,13.918s-20.988-6.142-29.467-13.918 c-9.448-8.663-20.155-18.482-41.198-18.482s-31.75,9.819-41.198,18.483c-8.478,7.776-15.176,13.917-29.465,13.917 c-14.288,0-20.985-6.142-29.464-13.917c-9.447-8.663-20.154-18.483-41.196-18.483c-21.042,0-31.749,9.819-41.197,18.482 c-8.478,7.776-15.176,13.918-29.465,13.918s-20.987-6.142-29.466-13.918c-9.448-8.662-20.155-18.482-41.197-18.482 c-4.794,0-8.678,3.886-8.678,8.678s3.884,8.678,8.678,8.678c14.289,0,20.987,6.142,29.465,13.917 c9.447,8.663,20.155,18.483,41.198,18.483c21.042,0,31.749-9.819,41.197-18.481c8.478-7.776,15.176-13.918,29.465-13.918 c14.288,0,20.985,6.142,29.464,13.917c9.447,8.663,20.154,18.483,41.196,18.483s31.749-9.818,41.197-18.481 c8.479-7.776,15.177-13.918,29.466-13.918s20.987,6.142,29.466,13.917c9.448,8.663,20.156,18.483,41.198,18.483 s31.75-9.818,41.198-18.481c8.481-7.776,15.178-13.918,29.469-13.918c14.29,0,20.989,6.142,29.469,13.918 c9.447,8.663,20.155,18.481,41.198,18.481c4.794,0,8.678-3.886,8.678-8.678C512.004,144.817,508.119,140.931,503.325,140.931z\"></path></g></g><g><g><path d=\"M503.323,222.659c-14.29,0-20.989-6.142-29.469-13.918c-9.447-8.663-20.155-18.482-41.198-18.482 s-31.751,9.819-41.199,18.482c-8.479,7.776-15.177,13.918-29.467,13.918s-20.988-6.142-29.468-13.918 c-9.447-8.663-20.153-18.482-41.197-18.482s-31.75,9.819-41.198,18.483c-8.478,7.776-15.176,13.917-29.465,13.917 c-14.288,0-20.984-6.142-29.464-13.917c-1.083-0.993-2.165-1.986-3.263-2.965c-3.578-3.19-9.064-2.873-12.253,0.703 c-3.189,3.578-2.873,9.064,0.704,12.253c1.037,0.924,2.059,1.862,3.081,2.799c9.447,8.662,20.154,18.481,41.195,18.481 c21.042,0,31.749-9.818,41.197-18.481c8.479-7.776,15.177-13.918,29.466-13.918s20.987,6.142,29.466,13.917 c9.448,8.663,20.156,18.483,41.198,18.483s31.75-9.818,41.198-18.481c8.48-7.776,15.178-13.918,29.469-13.918 c14.29,0,20.989,6.142,29.469,13.918c9.447,8.663,20.155,18.481,41.198,18.481c4.794,0,8.678-3.886,8.678-8.678 C512.001,226.544,508.116,222.659,503.323,222.659z\"></path></g></g><g><g><path d=\"M162.376,191.561c-3.864-0.863-8.027-1.302-12.372-1.302c-21.042,0-31.749,9.819-41.197,18.481 c-8.478,7.776-15.176,13.918-29.465,13.918s-20.987-6.142-29.466-13.918c-9.447-8.663-20.155-18.481-41.197-18.481 c-4.794,0-8.678,3.886-8.678,8.678s3.884,8.68,8.678,8.68c14.289,0,20.987,6.142,29.465,13.917 c9.447,8.663,20.155,18.483,41.198,18.483c21.042,0,31.749-9.819,41.197-18.482c8.478-7.776,15.176-13.918,29.465-13.918 c3.118,0,5.927,0.289,8.587,0.883c4.674,1.044,9.317-1.899,10.362-6.577S167.053,192.606,162.376,191.561z\"></path></g></g><g><g><path d=\"M503.323,386.115c-14.29,0-20.989-6.142-29.469-13.918c-9.447-8.663-20.155-18.481-41.198-18.481 s-31.751,9.819-41.199,18.481c-8.479,7.776-15.177,13.918-29.467,13.918s-20.988-6.142-29.468-13.918 c-9.447-8.663-20.153-18.481-41.197-18.481s-31.75,9.819-41.198,18.483c-8.478,7.776-15.176,13.917-29.465,13.917 c-14.288,0-20.985-6.142-29.464-13.917c-9.447-8.663-20.154-18.483-41.196-18.483s-31.749,9.819-41.197,18.481 c-8.478,7.776-15.176,13.918-29.465,13.918c-4.794,0-8.678,3.886-8.678,8.678c0,4.793,3.884,8.678,8.678,8.678 c21.042,0,31.749-9.819,41.197-18.481c8.478-7.776,15.176-13.918,29.465-13.918c14.288,0,20.985,6.142,29.464,13.917 c9.447,8.663,20.154,18.483,41.196,18.483s31.749-9.818,41.197-18.481c8.479-7.776,15.177-13.918,29.466-13.918 s20.987,6.142,29.466,13.918c9.448,8.662,20.156,18.481,41.198,18.481s31.75-9.818,41.198-18.481 c8.481-7.776,15.178-13.918,29.469-13.918c14.29,0,20.989,6.142,29.469,13.918c9.447,8.663,20.155,18.481,41.198,18.481 c4.794,0,8.678-3.886,8.678-8.678C512.001,390.001,508.116,386.115,503.323,386.115z\"></path></g></g><g><g><path d=\"M59.028,379.917c-3.162-2.227-6.071-4.895-9.152-7.719c-9.447-8.663-20.155-18.483-41.197-18.483 c-4.794,0-8.678,3.886-8.678,8.678s3.884,8.678,8.678,8.678c14.289,0,20.987,6.142,29.466,13.918 c3.35,3.071,6.812,6.246,10.888,9.117c1.519,1.07,3.262,1.584,4.99,1.584c2.727,0,5.414-1.282,7.104-3.682 C63.886,388.09,62.946,382.677,59.028,379.917z\"></path></g></g><g><g><path d=\"M503.323,304.387c-14.29,0-20.989-6.142-29.469-13.918c-9.447-8.663-20.155-18.481-41.198-18.481 c-21.042,0-31.749,9.818-41.198,18.48c-3.533,3.239-3.771,8.728-0.531,12.262c3.238,3.533,8.727,3.77,12.262,0.531 c8.479-7.775,15.178-13.917,29.467-13.917c14.29,0,20.989,6.142,29.469,13.918c9.447,8.663,20.155,18.481,41.198,18.481 c4.794,0,8.678-3.886,8.678-8.678C512.001,308.272,508.116,304.387,503.323,304.387z\"></path></g></g><g><g><path d=\"M382.128,309.516c-1.191-4.642-5.915-7.439-10.565-6.248c-2.934,0.753-6.066,1.12-9.573,1.12 c-14.29,0-20.988-6.142-29.468-13.918c-9.447-8.663-20.154-18.482-41.197-18.482s-31.75,9.819-41.198,18.483 c-8.478,7.776-15.176,13.917-29.465,13.917c-14.288,0-20.985-6.142-29.464-13.918c-9.447-8.662-20.154-18.482-41.196-18.482 c-21.042,0-31.749,9.819-41.197,18.482c-8.478,7.776-15.176,13.918-29.465,13.918s-20.987-6.142-29.466-13.918 c-9.447-8.663-20.155-18.482-41.197-18.482c-4.794,0-8.678,3.886-8.678,8.678s3.886,8.677,8.68,8.677 c14.289,0,20.987,6.142,29.465,13.917c9.447,8.663,20.155,18.483,41.198,18.483c21.042,0,31.749-9.819,41.197-18.482 c8.478-7.776,15.176-13.918,29.465-13.918c14.288,0,20.985,6.142,29.464,13.918c9.447,8.662,20.154,18.481,41.196,18.481 s31.749-9.818,41.197-18.481c8.479-7.776,15.177-13.918,29.466-13.918s20.987,6.142,29.466,13.918 c9.448,8.662,20.156,18.481,41.198,18.481c4.913,0,9.587-0.56,13.89-1.664C380.523,318.888,383.319,314.157,382.128,309.516z\"></path></g></g></svg>"

/***/ }),

/***/ "./src/assets/snake.svg":
/*!******************************!*\
  !*** ./src/assets/snake.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"-6 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m401.742188 152.636719c20.480468 1.015625 42.136718-7.644531 58.144531-23.65625 22.746093-22.742188 17.09375-63.289063 13.019531-81.589844l26.230469-26.230469-21.164063-21.160156-26.226562 26.226562c-18.304688-4.074218-58.851563-9.726562-81.59375 13.019532-14.613282 14.609375-23.191406 33.976562-23.722656 52.957031l-22.769532 24.351563c-17.769531 19-27.316406 43.792968-26.882812 69.804687.4375 26.011719 10.808594 50.472656 29.203125 68.867187l51.664062 51.664063c5.792969 5.792969 5.792969 15.214844 0 21.011719l-1.1875 1.1875c-5.792969 5.792968-15.21875 5.792968-21.011719 0l-176.703124-176.707032c-17.679688-17.679687-41.175782-27.640624-66.160157-28.050781-25.222656-.414062-48.914062 8.9375-66.832031 26.335938-18.140625 17.609375-28.273438 41.285156-28.527344 66.664062-.257812 25.386719 9.386719 49.265625 27.128906 67.203125l121.082032 123.039063c2.832031 2.863281 4.347656 6.679687 4.265625 10.753906-.082031 4.0625-1.753907 7.816406-4.707031 10.570313-5.777344 5.390624-15.238282 5.019531-21.085938-.828126l-42.226562-42.230468c-25.117188-25.113282-65.984376-25.113282-91.101563 0l-10.578125 10.582031 87.511719 87.511719c17.679687 17.679687 41.175781 27.644531 66.160156 28.054687.535156.007813 1.0625.011719 1.597656.011719 24.582031 0 47.695313-9.324219 65.234375-26.351562 18.136719-17.609376 28.269532-41.28125 28.527344-66.660157.257812-25.390625-9.386719-49.265625-27.132812-67.207031l-121.082032-123.039062c-2.832031-2.863282-4.34375-6.679688-4.261718-10.753907.082031-4.0625 1.753906-7.816406 4.703124-10.570312 5.777344-5.390625 15.238282-5.019531 21.085938.828125l176.972656 176.972656c17.796875 17.796875 41.460938 27.601562 66.632813 27.601562s48.839843-9.804687 66.636719-27.601562l1.191406-1.191406c36.742187-36.742188 36.742187-96.527344 0-133.269532l-50.792969-50.792968c-3.816406-3.816406-5.917969-8.890625-5.917969-14.285156 0-5.398438 2.101563-10.46875 5.917969-14.285157zm0 0\"></path></svg>"

/***/ }),

/***/ "./src/assets/snapchat.svg":
/*!*********************************!*\
  !*** ./src/assets/snapchat.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 -4 512.00164 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m496.914062 354.367188-74.179687-76.679688 28.875-11.960938c12.265625-5.082031 21.816406-14.636718 26.898437-26.902343 5.082032-12.265625 5.082032-25.777344 0-38.042969-7.722656-18.644531-25.753906-30.691406-45.933593-30.691406-6.535157 0-12.933594 1.277344-19.007813 3.792968l-1.941406.808594v-19.066406c0-85.8125-69.8125-155.625-155.625-155.625s-155.625 69.8125-155.625 155.625v19.0625l-1.9375-.800781c-6.078125-2.519531-12.476562-3.796875-19.011719-3.796875-20.183593 0-38.214843 12.050781-45.933593 30.691406-5.082032 12.265625-5.082032 25.777344-.003907 38.042969 5.082031 12.265625 14.636719 21.820312 26.898438 26.902343l28.875 11.960938-74.175781 76.679688c-17.851563 18.449218-16.070313 33.476562-13.421876 40.796874 3.960938 10.933594 14.417969 18.085938 28.691407 19.617188 5.746093.617188 10.898437 3.433594 14.515625 7.929688 3.492187 4.347656 5.089844 9.730468 4.488281 15.164062-1.546875 14.058594 3.277344 22.753906 7.597656 27.574219 5.667969 6.328125 13.957031 9.816406 23.339844 9.816406 7.957031 0 16.496094-2.398437 25.378906-7.121094l5.101563-2.714843c7.296875-3.878907 17.242187-6.015626 28-6.015626 12.453125 0 24.265625 2.863282 32.417968 7.855469l39.976563 24.496094c11.902344 7.292969 27.640625 11.625 44.3125 12.199219.171875.007812.34375.011718.515625.011718s.347656-.003906.519531-.011718c16.667969-.574219 32.402344-4.90625 44.308594-12.199219l39.972656-24.496094c8.152344-4.992187 19.96875-7.855469 32.417969-7.855469 10.765625 0 20.707031 2.136719 28 6.015626l5.105469 2.714843c8.882812 4.722657 17.421875 7.117188 25.375 7.121094h.003906c9.382813 0 17.671875-3.488281 23.34375-9.816406 4.316406-4.820313 9.140625-13.515625 7.59375-27.578125-.597656-5.429688.996094-10.8125 4.492187-15.160156 3.609376-4.496094 8.765626-7.3125 14.515626-7.929688 14.273437-1.53125 24.730468-8.683594 28.6875-19.617188 2.648437-7.320312 4.429687-22.347656-13.421876-40.796874zm0 0\"></path></svg>"

/***/ }),

/***/ "./src/assets/thought-bubble.svg":
/*!***************************************!*\
  !*** ./src/assets/thought-bubble.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 344.57 344.57\" style=\"enable-background:new 0 0 344.57 344.57;\" xml:space=\"preserve\"><g><path d=\"M335.206,144.552c-4.142,0-7.5,3.357-7.5,7.5c0,19.183-15.606,34.789-34.79,34.789c-3.645,0-7.276-0.582-10.793-1.73 c-2.249-0.733-4.714-0.364-6.648,0.999c-1.934,1.363-3.112,3.56-3.176,5.926c-0.52,18.968-15.776,33.826-34.733,33.826 c-10.105,0-19.706-4.415-26.341-12.114c-1.425-1.653-3.499-2.604-5.681-2.604c-2.182,0-4.256,0.95-5.681,2.604 c-6.635,7.699-16.236,12.114-26.341,12.114c-10.725,0-20.696-4.868-27.358-13.356c-1.422-1.812-3.597-2.869-5.9-2.869 c-2.303,0-4.478,1.058-5.9,2.869c-6.662,8.488-16.634,13.356-27.358,13.356c-6.999,0-13.741-2.069-19.499-5.985 c-3.425-2.331-8.09-1.442-10.419,1.983c-2.33,3.425-1.441,8.09,1.984,10.419c8.255,5.615,17.915,8.583,27.934,8.583 c12.451,0,24.187-4.572,33.258-12.768c9.071,8.195,20.807,12.768,33.258,12.768c11.795,0,23.105-4.193,32.022-11.703 c8.917,7.51,20.227,11.703,32.022,11.703c13.057,0,25.391-5.021,34.731-14.14c7.141-6.973,11.938-15.753,13.948-25.334 c2.211,0.302,4.439,0.453,6.672,0.453c27.454,0,49.79-22.335,49.79-49.789C342.706,147.909,339.348,144.552,335.206,144.552z\"></path><path d=\"M67.102,199.37c3.938-1.286,6.087-5.52,4.802-9.458c-1.286-3.937-5.521-6.086-9.457-4.802 c-3.517,1.148-7.148,1.73-10.793,1.73c-19.183,0-34.79-15.606-34.79-34.789c0-9.908,4.283-19.388,11.752-26.009 c1.605-1.424,2.524-3.467,2.524-5.612s-0.919-4.188-2.524-5.611c-7.468-6.623-11.752-16.103-11.752-26.01 c0-19.184,15.606-34.79,34.79-34.79c3.643,0,7.274,0.582,10.794,1.73c2.25,0.734,4.713,0.363,6.647-1s3.111-3.56,3.176-5.925 C72.792,29.858,88.048,15,107.005,15c10.725,0,20.697,4.868,27.358,13.355c1.422,1.813,3.597,2.87,5.9,2.87 c2.303,0,4.479-1.059,5.9-2.87C152.824,19.868,162.795,15,173.521,15c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5 c-12.452,0-24.187,4.572-33.258,12.767C131.191,4.572,119.457,0,107.005,0c-13.057,0-25.391,5.021-34.73,14.14 c-7.141,6.972-11.938,15.753-13.948,25.333c-2.211-0.302-4.439-0.453-6.672-0.453c-27.454,0-49.79,22.336-49.79,49.79 c0,11.587,4.08,22.758,11.387,31.621c-7.307,8.862-11.387,20.033-11.387,31.621c0,27.454,22.335,49.789,49.79,49.789 C56.882,201.841,62.08,201.01,67.102,199.37z\"></path><path d=\"M200.647,27.899c3.138,2.704,7.874,2.352,10.578-0.785C217.859,19.415,227.46,15,237.565,15 c18.958,0,34.214,14.857,34.733,33.825c0.064,2.365,1.242,4.562,3.176,5.925s4.397,1.734,6.647,1 c3.52-1.148,7.152-1.73,10.794-1.73c19.183,0,34.79,15.606,34.79,34.79c0,9.907-4.284,19.387-11.752,26.01 c-3.1,2.748-3.384,7.488-0.636,10.587c1.482,1.672,3.543,2.524,5.615,2.524c1.769,0,3.545-0.622,4.973-1.889 c10.677-9.467,16.801-23.037,16.801-37.232c0-27.454-22.335-49.79-49.79-49.79c-2.233,0-4.46,0.151-6.672,0.453 c-2.01-9.58-6.807-18.361-13.948-25.333C262.957,5.021,250.622,0,237.565,0c-14.475,0-28.217,6.313-37.704,17.321 C197.158,20.46,197.51,25.195,200.647,27.899z\"></path><path d=\"M129.319,251.899c-20.541,0-36.63,10.801-36.63,24.59s16.09,24.59,36.63,24.59c20.54,0,36.63-10.801,36.63-24.59 S149.859,251.899,129.319,251.899z M129.319,286.079c-13.003,0-21.63-5.772-21.63-9.59s8.627-9.59,21.63-9.59 c13.003,0,21.63,5.772,21.63,9.59S142.322,286.079,129.319,286.079z\"></path><path d=\"M95.528,312.818c-4.142,0-7.5,3.357-7.5,7.5c0,4.367-7.423,9.252-17.358,9.252s-17.358-4.885-17.358-9.252 c0-4.368,7.423-9.253,17.358-9.253c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5c-18.145,0-32.358,10.653-32.358,24.253 S52.526,344.57,70.67,344.57s32.358-10.652,32.358-24.252C103.028,316.176,99.67,312.818,95.528,312.818z\"></path></g></svg>"

/***/ }),

/***/ "./src/assets/tsunami.svg":
/*!********************************!*\
  !*** ./src/assets/tsunami.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 511 511.999\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m114.449219 410.269531 34.621093 25.066407c10.59375 7.667968 25.96875 7.667968 36.5625 0l34.621094-25.066407c21.105469-15.28125 50.589844-15.28125 71.695313 0l34.625 25.066407c10.589843 7.667968 25.96875 7.667968 36.5625 0l34.621093-25.066407c21.109376-15.28125 50.589844-15.28125 71.699219 0l42.25 30.585938v-63.195313l-59.820312-43.304687c-10.589844-7.667969-25.964844-7.667969-36.558594 0l-34.625 25.0625c-21.105469 15.28125-50.589844 15.28125-71.695313 0l-34.625-25.0625c-10.589843-7.671875-25.96875-7.667969-36.558593 0l-34.625 25.0625c-21.105469 15.28125-50.589844 15.28125-71.695313 0l-34.625-25.0625c-10.589844-7.667969-25.96875-7.667969-36.558594 0l-59.820312 43.304687v63.195313l42.25-30.585938c21.109375-15.28125 50.589844-15.28125 71.699219 0zm0 0\"></path><path d=\"m114.449219 310.085938 34.621093 25.066406c10.59375 7.667968 25.96875 7.667968 36.5625 0l34.621094-25.066406c21.109375-15.277344 50.59375-15.277344 71.695313 0l34.625 25.066406c10.589843 7.667968 25.96875 7.667968 36.5625 0l34.621093-25.066406c21.109376-15.277344 50.589844-15.277344 71.699219 0l42.25 30.589843v-95.503906h-139.648437c-45.148438-1.863281-81.90625-40.078125-81.996094-85.320313-.042969-22.894531 8.835938-44.421874 25.003906-60.621093 15.921875-15.957031 37.027344-24.851563 59.523438-25.117188l8.640625 1.257813 11.585937-18.828125-8.949218-8.363281c-59.230469-55.355469-148.542969-63.949219-217.183594-20.902344-21.609375 13.554687-40.597656 32.585937-54.917969 55.054687l-113.265625 178.171875v80.171875l42.25-30.589843c21.109375-15.277344 50.589844-15.277344 71.699219 0zm0 0\"></path><path d=\"m415.324219 434.535156-34.621094 25.066406c-21.105469 15.277344-50.589844 15.277344-71.695313 0l-34.625-25.066406c-10.59375-7.667968-25.96875-7.667968-36.5625 0l-34.621093 25.066406c-21.105469 15.277344-50.589844 15.277344-71.695313 0l-34.625-25.066406c-10.589844-7.667968-25.96875-7.667968-36.558594 0l-59.820312 43.304688v34.160156h511.207031v-34.160156l-59.820312-43.304688c-10.589844-7.667968-25.964844-7.667968-36.5625 0zm0 0\"></path></svg>"

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
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _geodata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geodata */ "./src/geodata.js");
/* harmony import */ var _contentHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contentHTML */ "./src/contentHTML.js");
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
  _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].initHome();
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
            if (slug !== 'about') _map__WEBPACK_IMPORTED_MODULE_1__["default"].flyToOrigin(); //panel

            setActivePanel(slug === 'about' ? 'full-panel' : 'right-panel');
            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].updatePage(activePanel, pageData); //show panel

            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showPanel({
              activePanel: activePanel,
              direction: 'down',
              delay: 0
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
            return _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({
              activePanel: activePanel,
              direction: 'up'
            });

          case 5:
            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showSpinner();
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

            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideSpinner();
            return _context3.abrupt("return");

          case 12:
            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideSpinner();
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
            _map__WEBPACK_IMPORTED_MODULE_1__["default"].flyTo(coordinates);
            setActivePanel('right-panel');
            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].updatePost(postData, postTags, theme); //show Panel

            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showPanel({
              activePanel: activePanel,
              direction: 'down',
              delay: 0
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
            return _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({
              activePanel: activePanel,
              direction: 'up'
            });

          case 2:
            setCurrentNode(null);
            _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].resetNodesState();
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
            return _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({
              activePanel: activePanel,
              direction: 'up'
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

            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideTopMenu();
            _context7.next = 5;
            return _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({
              activePanel: activePanel,
              direction: 'up'
            });

          case 5:
            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showHome();
            _context7.next = 9;
            break;

          case 8:
            if (newState === 'page') {
              _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideHome();
              _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showTopMenu();
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

            if (_map__WEBPACK_IMPORTED_MODULE_1__["default"].isMapboxLoaded()) {
              _context8.next = 12;
              break;
            }

            if (!(location === '404')) {
              _context8.next = 8;
              break;
            }

            _context8.next = 6;
            return _map__WEBPACK_IMPORTED_MODULE_1__["default"].init({
              location: location
            });

          case 6:
            _context8.next = 10;
            break;

          case 8:
            _context8.next = 10;
            return _map__WEBPACK_IMPORTED_MODULE_1__["default"].init(theme);

          case 10:
            _context8.next = 14;
            break;

          case 12:
            _context8.next = 14;
            return _map__WEBPACK_IMPORTED_MODULE_1__["default"].changeMap(theme);

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
  _map__WEBPACK_IMPORTED_MODULE_1__["default"].flyToOrigin();
  _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].updateHeading(tag.name);
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
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _config_themes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/themes.json */ "./src/config/themes.json");
var _config_themes_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/themes.json */ "./src/config/themes.json", 1);
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags */ "./src/tags.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var animation = {
  durationIn: 3000,
  durationOut: 2000,
  delayIn: 1000,
  delayOut: 0
};
var mainMenu = false;
var topMenu = false;
Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('body').append('div').attr('id', 'map-bg');

var initHome = function initHome() {
  // select('#home-text')
  // 	.style('opacity', 0)
  // 	.style('display', 'block')
  // 	.transition()
  // 	.duration(animation.durationIn)
  // 	.style('opacity', 1);
  // let delay = 0;
  // for (const theme of themes) {
  // 	select(`#main-${theme.slug}-bt`)
  // 		.style('opacity', 0)
  // 		.style('display', 'block')
  // 		.transition()
  // 		.delay(delay)
  // 		.duration(animation.durationIn)
  // 		.style('opacity', 1);
  // 	delay += 1000;
  // }
  configMainMenu();
};

var configMainMenu = function configMainMenu() {
  if (mainMenu === false) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var theme = _step.value;
        Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#main-".concat(theme.slug, "-bt")).on('click', function () {
          return Object(_content__WEBPACK_IMPORTED_MODULE_1__["showPage"])(theme);
        });
      };

      for (var _iterator = _config_themes_json__WEBPACK_IMPORTED_MODULE_2__[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

    mainMenu = true;
  }
};

var configTopMenu = function configTopMenu() {
  if (topMenu === false) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop2 = function _loop2() {
        var theme = _step2.value;
        Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#top-".concat(theme.slug, "-bt")).style('cursor', 'pointer').on('click', function () {
          return Object(_content__WEBPACK_IMPORTED_MODULE_1__["showPage"])(theme);
        });
      };

      for (var _iterator2 = _config_themes_json__WEBPACK_IMPORTED_MODULE_2__[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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

    topMenu = true;
  }
};

var showHome = function showHome() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#header-col').style('display', 'block').transition().delay(animation.delayIin).duration(animation.durationIn).style('opacity', 1).style('margin-top', '0px');
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('.col-main-menu').style('opacity', 0).style('display', 'block').transition().delay(animation.delayIn).duration(animation.durationIn).style('opacity', 1).style('margin-top', '0px');
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#home-text').style('display', 'block').style('opacity', 1);
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _config_themes_json__WEBPACK_IMPORTED_MODULE_2__[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var theme = _step3.value;
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#main-".concat(theme.slug, "-bt")).style('display', 'block').style('opacity', 1);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  configMainMenu();
  showHomeBG();
  hideHeading();
};

var hideHome = function hideHome() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#header-col').transition().duration(animation.durationOut).style('opacity', 0).style('margin-top', '-500px').on('end', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
  });
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('.col-main-menu').transition().duration(animation.durationOut).style('opacity', 0).style('margin-top', '-200px').on('end', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
  });
  hideHomeBG();
  showHeading();
};

var showHomeBG = function showHomeBG() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-bg').style('display', 'block').transition().delay(animation.delayIn).duration(animation.durationIn).style('opacity', 1);
};

var hideHomeBG = function hideHomeBG() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-bg').transition().duration(animation.durationOut).style('opacity', 0).on('end', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
  });
};

var showTopMenu = function showTopMenu() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#top-menu').style('opacity', 0).style('top', -200).style('display', 'block').transition().delay(animation.delayIn).duration(animation.durationIn).style('opacity', 1).style('top', 0);
  configTopMenu();
};

var hideTopMenu = function hideTopMenu() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#top-menu').transition().delay(0).duration(animation.durationOut).style('opacity', 0).style('top', -200).on('end', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
  });
};

var showPanel = function showPanel(_ref) {
  var _ref$activePanel = _ref.activePanel,
      activePanel = _ref$activePanel === void 0 ? 'left-panel' : _ref$activePanel,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'none' : _ref$direction,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay;

  if (direction === 'none') {
    direction = '0px';
  } else if (direction === 'up') {
    direction = '-2000px';
  } else if (direction === 'down') {
    direction = '2000px';
  }

  if (activePanel === 'full-panel') {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#full-panel').style('opacity', 0).style('margin-top', direction).style('display', 'block').transition().delay(delay).duration(animation.durationIn).style('opacity', 1).style('margin-top', '0px');
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#full-panel').select('.fl-col-content').property('scrollTop', 0);
    showHomeBG();
  } else {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#left-panel').style('opacity', 0).style('margin-top', direction).style('display', 'block').transition().delay(delay).duration(animation.durationIn).style('opacity', 0).style('margin-top', '0px');
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#middle-panel').style('opacity', 0).style('margin-top', direction).style('display', 'block').transition().delay(delay).duration(animation.durationIn).style('opacity', 0).style('margin-top', '0px');
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').style('opacity', 0).style('margin-top', direction).style('display', 'block').transition().delay(delay).duration(animation.durationIn).style('opacity', 1).style('margin-top', '0px');
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').select('.fl-col-content').property('scrollTop', 0);
  }
};

var hidePanel =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref2) {
    var _ref2$activePanel, activePanel, _ref2$direction, direction;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2$activePanel = _ref2.activePanel, activePanel = _ref2$activePanel === void 0 ? 'right-panel' : _ref2$activePanel, _ref2$direction = _ref2.direction, direction = _ref2$direction === void 0 ? 'none' : _ref2$direction;
            return _context.abrupt("return", new Promise(function (resolve) {
              if (direction === 'none') {
                direction = '0px';
              } else if (direction === 'up') {
                direction = '-2000px';
              } else if (direction === 'down') {
                direction = '2000px';
              }

              if (activePanel === 'full-panel') {
                Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#full-panel').transition().delay(0).duration(animation.durationOut).style('opacity', 0).style('margin-top', direction).on('end', function () {
                  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
                  resolve();
                });
                hideHomeBG();
              } else {
                Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#left-panel').transition().delay(0).duration(animation.durationOut).style('opacity', 0).style('margin-top', direction).on('end', function () {
                  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
                });
                Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#middle-panel').transition().delay(0).duration(animation.durationOut).style('opacity', 0).style('margin-top', direction).on('end', function () {
                  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
                });
                Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').transition().delay(0).duration(animation.durationOut).style('opacity', 0).style('margin-top', direction).on('end', function () {
                  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
                  resolve();
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

  heading.style('display', 'block').style('opacity', 0).transition().duration(animation.durationIn).style('opacity', 1);
  return heading;
};

var hideHeading = function hideHeading() {
  var heading = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-heading');

  if (!heading.empty()) {
    heading.transition().duration(animation.durationIn).style('opacity', 0).on('end', function () {
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
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
  panel.select('#close-panel').style('cursor', 'pointer').on('click', _content__WEBPACK_IMPORTED_MODULE_1__["closePanel"]);
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
  panel.select('#close-panel').style('cursor', 'pointer').on('click', _content__WEBPACK_IMPORTED_MODULE_1__["closePanel"]);
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
    return Object(_content__WEBPACK_IMPORTED_MODULE_1__["tagSearch"])(d);
  }); //resize tag icons

  tagsDIV.selectAll('svg').attr('width', '15px').attr('height', '15px');
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
    Object(_content__WEBPACK_IMPORTED_MODULE_1__["showPost"])({
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
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3/dist/d3.min */ "./node_modules/d3/dist/d3.min.js");
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
/* harmony import */ var _data_historical_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/historical.json */ "./src/data/historical.json");
var _data_historical_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/historical.json */ "./src/data/historical.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var historicalRiverScale = chroma_js__WEBPACK_IMPORTED_MODULE_1___default.a.scale(['violet', 'indigo', 'blue', 'green']).domain([1, 7]);
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
            D3geoTransform = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["geoTransform"])({
              point: _map__WEBPACK_IMPORTED_MODULE_2__["default"].projectPoint
            });
            D3geoPath = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["geoPath"])().projection(D3geoTransform); // Overlay d3 on the mapbox canvas

            svg = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(canvas).append('svg').attr('id', 'map-box-vis').attr('height', '100%');
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
  var theme = _content__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTheme();
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
    return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).x;
  }).attr('cy', function (d) {
    return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).y;
  }).attr('r', 0).style('cursor', 'pointer').style('stroke-width', 2).style('stroke', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.stroke).hex();
  }).style('fill', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.fill).alpha(0.7).hex();
  }).style('opacity', 0.1).on('mouseover', function (d) {
    return nodesOver(d);
  }).on('mouseout', function () {
    return nodesOut();
  }).on('click', function (d) {
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_3__["default"].showPost(d.properties);
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
    if (d.properties.name === 'Saint-Pierre Speculative River') return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.river).hex();
    if (d.properties.type === 'historical') return historicalRiverScale(d.properties.color).alpha(.8).hex();
    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.stroke).hex();
  }).style('fill', 'none').style('opacity', 0.1).on('mouseover', function (d) {
    return nodesOver(d);
  }).on('mouseout', function () {
    return nodesOut();
  }).on('click', function (d) {
    var theme = _content__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTheme();
    if (d.properties.name === 'Saint-Pierre Speculative River' && theme.slug !== 'steps') return;
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_3__["default"].showPost(d.properties);
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
    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.stroke).hex();
  }).style('fill', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.fill).alpha(0.7).hex();
  }).style('opacity', 0.1).on('mouseover', function (d) {
    return nodesOver(d);
  }).on('mouseout', function () {
    return nodesOut();
  }).on('click', function (d) {
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_3__["default"].showPost(d.properties);
  });
  nodesPoygon.transition().duration(transitionTime).delay(function (d, i) {
    return delayTime * i;
  }).style('stroke-width', 2).style('opacity', 1);
};

var nodesUpdate = function nodesUpdate() {
  if (nodesPoint) {
    nodesPoint.attr('cx', function (d) {
      return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).x;
    }).attr('cy', function (d) {
      return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).y;
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
/* harmony import */ var _assets_snapchat_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/snapchat.svg */ "./src/assets/snapchat.svg");
/* harmony import */ var _assets_snapchat_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_snapchat_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_tsunami_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/tsunami.svg */ "./src/assets/tsunami.svg");
/* harmony import */ var _assets_tsunami_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_tsunami_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_thought_bubble_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/thought-bubble.svg */ "./src/assets/thought-bubble.svg");
/* harmony import */ var _assets_thought_bubble_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_thought_bubble_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_cone_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/cone.svg */ "./src/assets/cone.svg");
/* harmony import */ var _assets_cone_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_cone_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_biohazard_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/biohazard.svg */ "./src/assets/biohazard.svg");
/* harmony import */ var _assets_biohazard_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_biohazard_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_help_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/help.svg */ "./src/assets/help.svg");
/* harmony import */ var _assets_help_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_help_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_snake_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/snake.svg */ "./src/assets/snake.svg");
/* harmony import */ var _assets_snake_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_snake_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_sea_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sea.svg */ "./src/assets/sea.svg");
/* harmony import */ var _assets_sea_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_sea_svg__WEBPACK_IMPORTED_MODULE_7__);








var getIcon = function getIcon(_ref) {
  var slug = _ref.slug;
  if (slug.toLowerCase() === 'ghosts') return _assets_snapchat_svg__WEBPACK_IMPORTED_MODULE_0___default.a;
  if (slug.toLowerCase() === 'unrullywaters') return _assets_tsunami_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
  if (slug.toLowerCase() === 'imaginaries') return _assets_thought_bubble_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
  if (slug.toLowerCase() === 'infrastructure') return _assets_cone_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
  if (slug.toLowerCase() === 'contamination') return _assets_biohazard_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
  if (slug.toLowerCase() === 'speculation') return _assets_help_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
  if (slug.toLowerCase() === 'beyond-humans') return _assets_snake_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
  if (slug.toLowerCase() === 'disreappearingwaters') return _assets_sea_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getIcon: getIcon
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jpb2hhemFyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb25lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2hlbHAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VhLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYWtlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYXBjaGF0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rob3VnaHQtYnViYmxlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RzdW5hbWkuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50SFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90YWdzLmpzIl0sIm5hbWVzIjpbImhvc3QiLCJyb290UGF0aCIsImxvYWREZWVwTGluayIsInNsdWciLCJjb250ZW50IiwiY2hhbmdlQnJvd3Nlckhpc3RvcnkiLCJ0aGVtZSIsImdldFRoZW1lQnlTbHVnIiwic2hvd1BhZ2UiLCJzaG93UG9zdCIsInBvc3QiLCJnb0hvbWUiLCJsb2NhdGlvbiIsImRhdGEiLCJpbml0SG9tZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwYXRobmFtZSIsImRlZXBMaW5rIiwic3BsaXQiLCJzZWFyY2giLCJ1cmwiLCJVUkwiLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwid3AiLCJXUEFQSSIsImVuZHBvaW50IiwiY29uZmlnIiwid29yZHByZXNzIiwiY3VycmVudE5vZGUiLCJhY3RpdmVQYW5lbCIsImNvbnRlbnRIVE1MIiwidXBkYXRlTWFwIiwic2V0Q3VycmVudE5vZGUiLCJzZXRBY3RpdmVQYW5lbCIsInBhbmVsIiwiaWQiLCJzZXRUaGVtZSIsImxvYWRQYWdlIiwicGFnZURhdGEiLCJtYXAiLCJmbHlUb09yaWdpbiIsInVwZGF0ZVBhZ2UiLCJzaG93UGFuZWwiLCJkaXJlY3Rpb24iLCJkZWxheSIsInRpdGxlIiwicmVuZGVyZWQiLCJwYWdlcyIsImVtYmVkIiwiaGlkZVBhbmVsIiwic2hvd1NwaW5uZXIiLCJsb2FkUG9zdCIsInBvc3REYXRhIiwiaGlkZVNwaW5uZXIiLCJwb3N0Q2F0ZWdvcmllcyIsIl9lbWJlZGRlZCIsInBvc3RUYWdzIiwicG9zdFRoZW1lIiwiZ2V0UG9zdFRoZW1lIiwiY29uc29sZSIsImxvZyIsImlzTmV3IiwiZ2VvZGF0YSIsImdldE5vZGVDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzIiwiZmx5VG8iLCJ1cGRhdGVQb3N0IiwiZmluZCIsImNhdCIsImxlbmd0aCIsInRoZW1lUG9zdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBvc3RzIiwiY2xvc2VQYW5lbCIsInJlc2V0Tm9kZXNTdGF0ZSIsInJlcXVlc3RlZFRoZW1lU2x1ZyIsInJlcXVlc3RlZFRoZW1lIiwiY2hhbmdlU3RhdGUiLCJzdGF0ZSIsImdldEN1cnJlbnRUaGVtZSIsInRoZW1lcyIsIm5ld1N0YXRlIiwiaGlkZVRvcE1lbnUiLCJzaG93SG9tZSIsImhpZGVIb21lIiwic2hvd1RvcE1lbnUiLCJpc01hcGJveExvYWRlZCIsImluaXQiLCJjaGFuZ2VNYXAiLCJkcmF3Tm9kZXMiLCJ0YWdTZWFyY2giLCJ0YWciLCJkcmF3Tm9kZUJ5VGFnIiwidXBkYXRlSGVhZGluZyIsIm5hbWUiLCJwYWdlVGl0bGUiLCJkb2N1bWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJhbmltYXRpb24iLCJkdXJhdGlvbkluIiwiZHVyYXRpb25PdXQiLCJkZWxheUluIiwiZGVsYXlPdXQiLCJtYWluTWVudSIsInRvcE1lbnUiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiY29uZmlnTWFpbk1lbnUiLCJvbiIsImNvbmZpZ1RvcE1lbnUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJkZWxheUlpbiIsImR1cmF0aW9uIiwic2VsZWN0QWxsIiwic2hvd0hvbWVCRyIsImhpZGVIZWFkaW5nIiwiaGlkZUhvbWVCRyIsInNob3dIZWFkaW5nIiwicHJvcGVydHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRpbmciLCJlbXB0eSIsInRvTG93ZXJDYXNlIiwiaHRtbCIsImNhcHR1cmVMaW5rcyIsInRhZ3MiLCJ0YWdzRElWIiwidGFnc0hUTUwiLCJleGl0IiwicmVtb3ZlIiwiZW50ZXIiLCJpY29uIiwiZ2V0SWNvbiIsImQiLCJsaW5rIiwiZG9tYWluIiwiaG9zdG5hbWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGlzdG9yaWNhbFJpdmVyU2NhbGUiLCJjaHJvbWEiLCJzY2FsZSIsIkQzZ2VvUGF0aCIsInN2ZyIsImRhdGFzZXQiLCJub2Rlc1BvaW50Iiwibm9kZXNMaW5lIiwibm9kZXNQb3lnb24iLCJjYW52YXMiLCJEM2dlb1RyYW5zZm9ybSIsImdlb1RyYW5zZm9ybSIsInBvaW50IiwicHJvamVjdFBvaW50IiwiZ2VvUGF0aCIsInByb2plY3Rpb24iLCJsb2FkRGF0YSIsImRhdGFVUkwiLCJtYXBib3giLCJ1c2VyIiwidG9rZW4iLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImZlYXR1cmVzIiwiY29uY2F0IiwiaGlzdG9yaWNhbFJpdmVsIiwidGhlbWVOb2RlcyIsImdldFRoZW1lTm9kZXMiLCJwb2ludHMiLCJmaWx0ZXIiLCJuIiwiZ2VvbWV0cnkiLCJ0eXBlIiwibGluZXMiLCJwb2x5Z29ucyIsImRyYXdQb2x5Z2lucyIsImRyYXdMaW5lcyIsImRyYXdQb2ludHMiLCJ0YWdOb2RlcyIsImdldFRhZ05vZGVzIiwic2VsZWN0ZWROb2RlcyIsIm5vZGUiLCJwcm9wZXJ0aWVzIiwibm9kZXRoZW1lcyIsInRoZW1lTm9kZSIsInQiLCJub2RlVGFncyIsInRhZ05vZGUiLCJpdGVtIiwiY2VudGVyIiwiZ2V0Q29sb3VycyIsImNvbG9ycyIsInJpdmVyIiwiZmlsbCIsInN0cm9rZSIsInRyYW5zaXRpb25UaW1lIiwiZGVsYXlUaW1lIiwiY29sb3VycyIsInByb2plY3QiLCJ4IiwieSIsImhleCIsImFscGhhIiwibm9kZXNPdmVyIiwibm9kZXNPdXQiLCJpIiwiY29sb3IiLCJub2Rlc1VwZGF0ZSIsImN1cnJlbnQiLCJtYXBCb3hDb25maWciLCJjb250YWluZXIiLCJzdHlsZUlEIiwiem9vbSIsInBpdGNoIiwibWluWm9vbSIsIm1heFpvb20iLCJtYXhCb3VuZHMiLCJpbnRlcmFjdGl2ZSIsIm1hcElEIiwic2V0VW5rbm93TG9jYXRpb24iLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwiTWFwIiwiZ2V0Q2FudmFzQ29udGFpbmVyIiwidXBkYXRlIiwiZmx5RnJvbVVua25vd0xvY2F0aW9uIiwiaXNTdHlsZUxvYWRlZCIsInNldFN0eWxlIiwiTG5nTGF0IiwibG9uIiwibGF0Iiwic3RyZWFtIiwic3BlZWQiLCJjdXJ2ZSIsImVhc2luZyIsImdldE1heEJvdW5kcyIsInNldE1heEJvdW5kcyIsImdob3N0IiwidW5ydWx5V2F0ZXJzIiwiaW1hZ2luYXJpZXMiLCJpbmZyYXN0cnVjdHVyZXMiLCJjb250YW1pbmF0aW9uIiwic3BlY3VsYXRpdmUiLCJiZXlvbmRIdW1hbnMiLCJkaXNyZWFwcGVhcmluZ1dhdGVycyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FB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RUFBcUMsT0FBT21ILDJEQUFQO0FBQ3JDLE1BQUluUCxJQUFJLENBQUNnSSxXQUFMLE9BQXVCLGVBQTNCLEVBQTRDLE9BQU9vSCwwREFBUDtBQUM1QyxNQUFJcFAsSUFBSSxDQUFDZ0ksV0FBTCxPQUF1QixhQUEzQixFQUEwQyxPQUFPcUgsaUVBQVA7QUFDMUMsTUFBSXJQLElBQUksQ0FBQ2dJLFdBQUwsT0FBdUIsZ0JBQTNCLEVBQTZDLE9BQU9zSCx1REFBUDtBQUM3QyxNQUFJdFAsSUFBSSxDQUFDZ0ksV0FBTCxPQUF1QixlQUEzQixFQUE0QyxPQUFPdUgsNERBQVA7QUFDNUMsTUFBSXZQLElBQUksQ0FBQ2dJLFdBQUwsT0FBdUIsYUFBM0IsRUFBMEMsT0FBT3dILHVEQUFQO0FBQzFDLE1BQUl4UCxJQUFJLENBQUNnSSxXQUFMLE9BQXVCLGVBQTNCLEVBQTRDLE9BQU95SCx3REFBUDtBQUM1QyxNQUFJelAsSUFBSSxDQUFDZ0ksV0FBTCxPQUF1QixzQkFBM0IsRUFBbUQsT0FBTzBILHNEQUFQO0FBQ25ELENBVE07QUFZUTtBQUNkaEgsU0FBTyxFQUFQQTtBQURjLENBQWYsRSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9hcHAuanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIGltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy9kaXN0L2QzLm1pbic7XG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcbmltcG9ydCBjb250ZW50IGZyb20gJy4vY29udGVudCc7XG5cbmNvbnN0IGhvc3QgPSAnaHR0cDovL2xvY2FsaG9zdDo4ODg4JzsgLy8naHR0cDovL2xvY2FsaG9zdDo4ODg4JzsgLy8gaHR0cDovL2xhYnMuZmx1eG8uYXJ0LmJyXG5jb25zdCByb290UGF0aCA9ICcvZ2hvc3Qtcml2ZXIvJztcblxuY29uc3QgbG9hZERlZXBMaW5rID0gYXN5bmMgc2x1ZyA9PiB7XG5cblx0Y29udGVudC5jaGFuZ2VCcm93c2VySGlzdG9yeSh7c2x1Z30pO1x0XHRcdFx0XHQvL2NoYW5nZSBVUkwgQmFyXG5cblx0bGV0IHRoZW1lID0gY29udGVudC5nZXRUaGVtZUJ5U2x1ZyhzbHVnKTtcdFx0XHRcdC8vZ2V0IHRoZW1lIGJhc2VkIG9uIHRoZSBzZWFyY2ggcGFyYW1ldGVyc1xuXG5cdC8vaWYgc2VhcmNoIG1hdGNoIHRvIHRoZW1lIChwYWdlKVxuXHRpZiAodGhlbWUpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0YXdhaXQgY29udGVudC5zaG93UGFnZSh0aGVtZSk7XHRcdFx0XHRcdFx0Ly9sb2FkIHRoZSB0aGVtZSBwYWdlXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly90cnkgdG8gbG9hZCBhIHBvc3QgYmFzZWQgb24gc2VhcmNoIHBhcmFtZXRlcnNcblx0Y29uc3QgcG9zdCA9IGF3YWl0IGNvbnRlbnQuc2hvd1Bvc3Qoe3NsdWd9KTtcdFx0XHRcblxuXHQvL2lmIG5vIHBhZ2UvcG9zdCBmb3VuZDogbG9hZCBob21lIHdpdGggNDA0XG5cdGlmICghcG9zdCkgZ29Ib21lKHtsb2NhdGlvbjogJzQwNCd9KTtcblxufTtcblxuY29uc3QgZ29Ib21lID0gYXN5bmMgZGF0YSA9PiB7XG5cdGNvbnRlbnQuY2hhbmdlQnJvd3Nlckhpc3Rvcnkoe3NsdWc6IHJvb3RQYXRofSk7XG5cdGNvbnRlbnQuaW5pdEhvbWUoZGF0YSk7XG59O1xuIFxuKCBhc3luYyAoKSA9PiB7XHRcdFxuXG5cdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA4ODApIGdvSG9tZSh7bG9jYXRpb246ICdob21lJ30pO1xuXG5cdC8vdGVzdCBpZiB1cmwgaXMgdHJ5aW5nIHRvIHJlYWNoIGEgZGVlcGxpbmtcdFx0XG5cdGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IHJvb3RQYXRoKSB7XHRcdFx0XHRcdFx0XHRcdFxuXHRcdGNvbnN0IGRlZXBMaW5rID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMl07IFx0Ly9nZXQgcGF0aCBhZnRlciB0aGUgJy8nIGFzIGRlZXBsaW5rXG5cdFx0bG9jYXRpb24gPSBgJHtob3N0fSR7cm9vdFBhdGh9P25vZGU9JHtkZWVwTGlua31gO1x0XHRcdC8vbmF2aWF0ZSB0byByb290IHdpdGggZGVlcGxpbmsgYXMgYSBzZWFyY2ggcGFyYW1ldGVyc1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vdGVzdCBpZiB1cmwgaXMgc2VhcmNoaW5nIGZvciBkZWVwbGlua1xuXHRpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaCkge1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcdFx0XHRcdFx0Ly9nZXQgdXRsXHRcdFxuXHRcdGNvbnN0IHNsdWcgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnbm9kZScpO1x0XHRcdFx0XHQvL2dldCB0aGUgcGFyYW1zIGZvciBzZWFyY2ggKGEgc2x1ZyBmb3IgYSBwYWdlIG9yIHBvc3QpXG5cdFx0bG9hZERlZXBMaW5rKHNsdWcpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vR28gSG9tZVxuXHRnb0hvbWUoe2xvY2F0aW9uOiAnaG9tZSd9KTtcblxufSkoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzIuMDUxIDMyLjA1MVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIuMDUxIDMyLjA1MTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk0yNS4yNjcsMTMuMjQ3Yy0wLjQyNS0wLjEyMi0wLjg3OC0wLjEyOS0xLjMyMS0wLjE0NmMwLjEyMS0wLjMxMSwzLjMyNi04LjI1OC01LjEzNi0xMS40MDggYy0wLjAwNCwwLjA3MS0wLjAxLDAuMTQzLTAuMDIxLDAuMjExYzUuNDM4LDMuMjY4LDIuOTIyLDguNTAyLDIuNzE3LDguNzMxYy0xLjQ5OS0xLjE1NC0zLjM3MS0xLjg0LTUuNDAzLTEuODQgYy0yLjA2OCwwLTMuOTcyLDAuNzExLTUuNDgzLDEuOTA0Yy0wLjM3Mi0wLjYxNS0wLjY2Mi0xLjMxNS0wLjg0Ny0yLjA4N2MtMC4xNS0xLjM1MS0wLjA1Ni0yLjU2NSwwLjUzMy0zLjgyMSBjMC41ODMtMS4xNDQsMS41MjItMi4xMTEsMi42NC0yLjc0NGMtMC4wMTMtMC4wNjItMC4wMjMtMC4xMjUtMC4wMzEtMC4xOWMtMS4yNCwwLjUwMS0yLjM2OSwxLjM0LTMuMzgxLDIuNDIyIGMtMC40NCwwLjYxNS0zLjA3MywzLjc4Mi0xLjQwOCw4LjYxN2MtMC40NDksMC4wMTYtMC44OTUsMC4wNjMtMS4zMzUsMC4xNDZjLTEuNzUxLDAuMzcyLTQuNTM0LDEuODc4LTUuODQ1LDQuNDY3IGMtMC40MzksMC43NC0wLjYxMiwxLjQ5Ni0wLjgxOSwyLjIyNmMtMC4yMTIsMS40NjQtMC4xNjYsMi44NywwLjIxNSw0LjE1M2MwLjA1Ni0wLjAzNCwwLjExMS0wLjA2NiwwLjE2OC0wLjA5NiBjLTAuMjAxLTEuMjY5LTAuMDMyLTIuNjA4LDAuNS0zLjc3NGMwLjYxNC0xLjI0NiwxLjUwNC0yLjA3NSwyLjY1NC0yLjc5OGMxLjkzNy0wLjkwOCwzLjU2NC0wLjY1NiwzLjYzMS0wLjY0NSBjLTAuMDQzLDAuMzU4LTAuMDY4LDAuNzIzLTAuMDY4LDEuMDk2YzAsMy41NDksMi4wOTUsNi42MTUsNS4xMTMsOC4wMzVjLTAuMDE2LDAuMDQzLTAuMDMxLDAuMDg2LTAuMDQ1LDAuMTI1IGMtMC4wNTYsMC4xMDMtMi44NSw0LjY1MS04LjI1MiwyLjYxOWMtMC4wNDgsMC4wNTEtMC4wOTksMC4xLTAuMTUxLDAuMTQ3YzAuNjYzLDAuNTEsNi4zMDMsNC4yOSwxMS40OTctMi4wODYgYzAuMjM1LDAuMDIxLDAuNDczLDAuMDM0LDAuNzE0LDAuMDM0YzAuMTQ1LDAsMC4yODktMC4wMDYsMC40MzMtMC4wMTJjMS4wOTcsMS41MjUsNS4zLDYuMjQ0LDExLjYzMywyLjI2OCBjLTAuMDU0LTAuMDQ5LTAuMTA0LTAuMDk4LTAuMTUtMC4xNDljLTUuNjUyLDIuMTEtOC4zMTItMi43NzYtOC4zNDItMi44NmMzLjM2MS0xLjUyOCw1LjMwMi00LjUsNS4zMDItOC4xMjEgYzAtMC4zMTItMC4wMTctMC42MTctMC4wNDctMC45MjJjMC4wMTItMC4wMDIsMC4wMjEtMC4wMDQsMC4wMzUtMC4wMDhjMS4wOTktMC4wNzQsMi4yNzUsMC4xMzksMy40MjksMC42OCBjMS4xNSwwLjcyNiwyLjA0LDEuNTU2LDIuNjU0LDIuODAxYzAuNTMsMS4xNjcsMC43LDIuNTA0LDAuNDk5LDMuNzczYzAuMDU4LDAuMDI5LDAuMTEyLDAuMDYsMC4xNjgsMC4wOTYgQzMyLjE3OCwyMi42NCwzMy4zMzMsMTUuNTYyLDI1LjI2NywxMy4yNDd6IE0xMS41OTMsMTkuMTkyYy0wLjAwNC0wLjAwNC0wLjAxLTAuMDEyLTAuMDE1LTAuMDE4bDAuMDEyLDAuMDE0TDExLjU5MywxOS4xOTJ6IE0xMy44MDMsMTcuNjcxYzAtMC44MzgsMC40NDgtMS41NjUsMS4xMTgtMS45NzFjMC4zNDUtMC4yMDcsMC43NDgtMC4zMjksMS4xOC0wLjMyOWMwLjQ1LDAsMC44NywwLjEzMywxLjIyNCwwLjM1NCBjMC42NDYsMC40MDgsMS4wNzUsMS4xMjUsMS4wNzUsMS45NDVjMCwwLjk0OS0wLjU3OSwxLjc3LTEuNDA0LDIuMTE5Yy0wLjI3NSwwLjExNS0wLjU3OCwwLjE4LTAuODk1LDAuMTggQzE0LjgzMSwxOS45NzEsMTMuODAzLDE4Ljk0LDEzLjgwMywxNy42NzF6IE0xNi4xMDEsMTEuMjA5YzEuMzczLDAsMi42NDYsMC40MzQsMy42OTQsMS4xNjdjLTEuMTY1LDAuODI1LTQuNzQzLDIuMTIzLTcuNDk2LDAuMDc4IEMxMy4zNjcsMTEuNjcyLDE0LjY4MSwxMS4yMDksMTYuMTAxLDExLjIwOXogTTkuNjQyLDE3LjY3MWMwLTAuMDkyLDAuMDA0LTAuMTg1LDAuMDA2LTAuMjc3YzAuMTA3LDAuMDYxLDIuOTk5LDEuNjIxLDMuMjIxLDUuODY1IEMxMC45NDIsMjIuMTM5LDkuNjQyLDIwLjA1NSw5LjY0MiwxNy42NzF6IE0xOS4xODgsMjMuMzQzYzAuMDAyLTAuMTA4LDAuMjM5LTQuMDE2LDMuMzY5LTUuODI0IGMwLjAwMSwwLjA1LDAuMDA0LDAuMTAyLDAuMDA0LDAuMTUyQzIyLjU2MiwyMC4xMTQsMjEuMTk2LDIyLjI0NSwxOS4xODgsMjMuMzQzelxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGlkPVxcXCJMYXllclxcXCIgZW5hYmxlLWJhY2tncm91bmQ9XFxcIm5ldyAwIDAgNjQgNjRcXFwiIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtMTMuNSA1NmgzN2MzLjAzMyAwIDUuNS0yLjQ2OCA1LjUtNS41cy0yLjQ2Ny01LjUtNS41LTUuNWgtMS4wNDZsLTMuNzg3LTExLjY3NWMtLjAwNC0uMDE1LS4wMS0uMDMtLjAxNC0uMDQ1bC0zLjM3My0xMC40di0uMDAxbC0zLjQ4LTEwLjcyOWMtLjgwNS0yLjQ4My0zLjA5OC00LjE1LTUuNzA4LTQuMTVoLTIuMTg1Yy0yLjYwOSAwLTQuOTAzIDEuNjY3LTUuNzA3IDQuMTQ5bC02Ljg1NCAyMS4xMzNjLS4wMDQuMDE0LS4wMS4wMjgtLjAxNC4wNDNsLTMuNzg2IDExLjY3NWgtMS4wNDZjLTMuMDMzIDAtNS41IDIuNDY4LTUuNSA1LjVzMi40NjcgNS41IDUuNSA1LjV6bTExLjM4MS0yOS44OTljMi4xOC41ODkgNC42MDEuODk5IDcuMTE5Ljg5OXM0LjkzOC0uMzEgNy4xMTktLjg5OWwyLjIyOCA2Ljg2OWMtMi4zMTggMS4yNjYtNS43NDIgMi4wMy05LjM0NyAyLjAzcy03LjAyOS0uNzY0LTkuMzQ3LTIuMDN6bTQuMTI0LTEyLjcxOGMuMjY4LS44MjcgMS4wMzMtMS4zODMgMS45MDMtMS4zODNoMi4xODVjLjg3IDAgMS42MzQuNTU2IDEuOTAyIDEuMzgzbDIuODg4IDguOTA1Yy0xLjc5NC40NjEtMy44Mi43MTItNS44ODMuNzEycy00LjA4OS0uMjUxLTUuODgzLS43MTJ6bS03LjYwMiAyMy40MzljMi44NjUgMS4zODMgNi42MjcgMi4xNzggMTAuNTk3IDIuMTc4czcuNzMyLS43OTUgMTAuNTk3LTIuMTc4bDIuNjUyIDguMTc4aC0yNi40OTh6bS03LjkwMyAxMi4xNzhoMzQuNDkzYy4wMDIgMCAuMDA0LjAwMS4wMDYuMDAxcy4wMDQtLjAwMS4wMDYtLjAwMWgyLjQ5NWMuODI3IDAgMS41LjY3MyAxLjUgMS41cy0uNjczIDEuNS0xLjUgMS41aC0zN2MtLjgyNyAwLTEuNS0uNjczLTEuNS0xLjVzLjY3My0xLjUgMS41LTEuNXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PGc+PGc+PHBhdGggZD1cXFwiTTI0OC4xNTgsMzQzLjIyYy0xNC42MzksMC0yNi40OTEsMTIuMi0yNi40OTEsMjYuODRjMCwxNC4yOTEsMTEuNTAzLDI2Ljg0LDI2LjQ5MSwyNi44NCBjMTQuOTg4LDAsMjYuODQtMTIuNTQ4LDI2Ljg0LTI2Ljg0QzI3NC45OTgsMzU1LjQyLDI2Mi43OTksMzQzLjIyLDI0OC4xNTgsMzQzLjIyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNTIuNjksMTQwLjAwMmMtNDcuMDU3LDAtNjguNjY4LDI3Ljg4NS02OC42NjgsNDYuNzA4YzAsMTMuNTk1LDExLjUwMiwxOS44NjksMjAuOTE0LDE5Ljg2OSBjMTguODIyLDAsMTEuMTU0LTI2Ljg0LDQ2LjcwOC0yNi44NGMxNy40MjksMCwzMS4zNzIsNy42NjksMzEuMzcyLDIzLjcwM2MwLDE4LjgyNC0xOS41MiwyOS42MjktMzEuMDIzLDM5LjM4OSBjLTEwLjEwOCw4LjcxNC0yMy4zNTQsMjMuMDA2LTIzLjM1NCw1Mi45ODNjMCwxOC4xMjUsNC44NzksMjMuMzU0LDE5LjE3MSwyMy4zNTRjMTcuMDgsMCwyMC41NjUtNy42NjgsMjAuNTY1LTE0LjI5MSBjMC0xOC4xMjYsMC4zNS0yOC41ODMsMTkuNTIxLTQzLjU3MWM5LjQxMS03LjMyLDM5LjA0LTMxLjAyMywzOS4wNC02My43ODlTMjk3LjMwNywxNDAuMDAyLDI1Mi42OSwxNDAuMDAyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNTYsMEMxMTQuNTE2LDAsMCwxMTQuNDk3LDAsMjU2djIzNmMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGgyMzZjMTQxLjQ4MywwLDI1Ni0xMTQuNDk3LDI1Ni0yNTYgQzUxMiwxMTQuNTE2LDM5Ny41MDMsMCwyNTYsMHogTTI1Niw0NzJINDBWMjU2YzAtMTE5LjM3Nyw5Ni42MDctMjE2LDIxNi0yMTZjMTE5LjM3NywwLDIxNiw5Ni42MDcsMjE2LDIxNiBDNDcyLDM3NS4zNzcsMzc1LjM5Myw0NzIsMjU2LDQ3MnpcXFwiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTEyLjAwNCA1MTIuMDA0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDA0IDUxMi4wMDQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48Zz48cGF0aCBkPVxcXCJNNTAzLjMyNSwxNDAuOTMxYy0xNC4yOSwwLTIwLjk4OS02LjE0Mi0yOS40NjktMTMuOTE4Yy05LjQ0Ny04LjY2My0yMC4xNTUtMTguNDgyLTQxLjE5OC0xOC40ODIgcy0zMS43NTEsOS44MTktNDEuMTk5LDE4LjQ4MmMtOC40NzksNy43NzYtMTUuMTc3LDEzLjkxOC0yOS40NjcsMTMuOTE4cy0yMC45ODgtNi4xNDItMjkuNDY3LTEzLjkxOCBjLTkuNDQ4LTguNjYzLTIwLjE1NS0xOC40ODItNDEuMTk4LTE4LjQ4MnMtMzEuNzUsOS44MTktNDEuMTk4LDE4LjQ4M2MtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxNy0yOS40NjUsMTMuOTE3IGMtMTQuMjg4LDAtMjAuOTg1LTYuMTQyLTI5LjQ2NC0xMy45MTdjLTkuNDQ3LTguNjYzLTIwLjE1NC0xOC40ODMtNDEuMTk2LTE4LjQ4M2MtMjEuMDQyLDAtMzEuNzQ5LDkuODE5LTQxLjE5NywxOC40ODIgYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE4LTI5LjQ2NSwxMy45MThzLTIwLjk4Ny02LjE0Mi0yOS40NjYtMTMuOTE4Yy05LjQ0OC04LjY2Mi0yMC4xNTUtMTguNDgyLTQxLjE5Ny0xOC40ODIgYy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4czMuODg0LDguNjc4LDguNjc4LDguNjc4YzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjUsMTMuOTE3IGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgzLDQxLjE5OCwxOC40ODNjMjEuMDQyLDAsMzEuNzQ5LTkuODE5LDQxLjE5Ny0xOC40ODFjOC40NzgtNy43NzYsMTUuMTc2LTEzLjkxOCwyOS40NjUtMTMuOTE4IGMxNC4yODgsMCwyMC45ODUsNi4xNDIsMjkuNDY0LDEzLjkxN2M5LjQ0Nyw4LjY2MywyMC4xNTQsMTguNDgzLDQxLjE5NiwxOC40ODNzMzEuNzQ5LTkuODE4LDQxLjE5Ny0xOC40ODEgYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOHMyMC45ODcsNi4xNDIsMjkuNDY2LDEzLjkxN2M5LjQ0OCw4LjY2MywyMC4xNTYsMTguNDgzLDQxLjE5OCwxOC40ODMgczMxLjc1LTkuODE4LDQxLjE5OC0xOC40ODFjOC40ODEtNy43NzYsMTUuMTc4LTEzLjkxOCwyOS40NjktMTMuOTE4YzE0LjI5LDAsMjAuOTg5LDYuMTQyLDI5LjQ2OSwxMy45MTggYzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODEsNDEuMTk4LDE4LjQ4MWM0Ljc5NCwwLDguNjc4LTMuODg2LDguNjc4LTguNjc4QzUxMi4wMDQsMTQ0LjgxNyw1MDguMTE5LDE0MC45MzEsNTAzLjMyNSwxNDAuOTMxelxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTUwMy4zMjMsMjIyLjY1OWMtMTQuMjksMC0yMC45ODktNi4xNDItMjkuNDY5LTEzLjkxOGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4Mi00MS4xOTgtMTguNDgyIHMtMzEuNzUxLDkuODE5LTQxLjE5OSwxOC40ODJjLTguNDc5LDcuNzc2LTE1LjE3NywxMy45MTgtMjkuNDY3LDEzLjkxOHMtMjAuOTg4LTYuMTQyLTI5LjQ2OC0xMy45MTggYy05LjQ0Ny04LjY2My0yMC4xNTMtMTguNDgyLTQxLjE5Ny0xOC40ODJzLTMxLjc1LDkuODE5LTQxLjE5OCwxOC40ODNjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTctMjkuNDY1LDEzLjkxNyBjLTE0LjI4OCwwLTIwLjk4NC02LjE0Mi0yOS40NjQtMTMuOTE3Yy0xLjA4My0wLjk5My0yLjE2NS0xLjk4Ni0zLjI2My0yLjk2NWMtMy41NzgtMy4xOS05LjA2NC0yLjg3My0xMi4yNTMsMC43MDMgYy0zLjE4OSwzLjU3OC0yLjg3Myw5LjA2NCwwLjcwNCwxMi4yNTNjMS4wMzcsMC45MjQsMi4wNTksMS44NjIsMy4wODEsMi43OTljOS40NDcsOC42NjIsMjAuMTU0LDE4LjQ4MSw0MS4xOTUsMTguNDgxIGMyMS4wNDIsMCwzMS43NDktOS44MTgsNDEuMTk3LTE4LjQ4MWM4LjQ3OS03Ljc3NiwxNS4xNzctMTMuOTE4LDI5LjQ2Ni0xMy45MThzMjAuOTg3LDYuMTQyLDI5LjQ2NiwxMy45MTcgYzkuNDQ4LDguNjYzLDIwLjE1NiwxOC40ODMsNDEuMTk4LDE4LjQ4M3MzMS43NS05LjgxOCw0MS4xOTgtMTguNDgxYzguNDgtNy43NzYsMTUuMTc4LTEzLjkxOCwyOS40NjktMTMuOTE4IGMxNC4yOSwwLDIwLjk4OSw2LjE0MiwyOS40NjksMTMuOTE4YzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODEsNDEuMTk4LDE4LjQ4MWM0Ljc5NCwwLDguNjc4LTMuODg2LDguNjc4LTguNjc4IEM1MTIuMDAxLDIyNi41NDQsNTA4LjExNiwyMjIuNjU5LDUwMy4zMjMsMjIyLjY1OXpcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk0xNjIuMzc2LDE5MS41NjFjLTMuODY0LTAuODYzLTguMDI3LTEuMzAyLTEyLjM3Mi0xLjMwMmMtMjEuMDQyLDAtMzEuNzQ5LDkuODE5LTQxLjE5NywxOC40ODEgYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE4LTI5LjQ2NSwxMy45MThzLTIwLjk4Ny02LjE0Mi0yOS40NjYtMTMuOTE4Yy05LjQ0Ny04LjY2My0yMC4xNTUtMTguNDgxLTQxLjE5Ny0xOC40ODEgYy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4czMuODg0LDguNjgsOC42NzgsOC42OGMxNC4yODksMCwyMC45ODcsNi4xNDIsMjkuNDY1LDEzLjkxNyBjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4Myw0MS4xOTgsMTguNDgzYzIxLjA0MiwwLDMxLjc0OS05LjgxOSw0MS4xOTctMTguNDgyYzguNDc4LTcuNzc2LDE1LjE3Ni0xMy45MTgsMjkuNDY1LTEzLjkxOCBjMy4xMTgsMCw1LjkyNywwLjI4OSw4LjU4NywwLjg4M2M0LjY3NCwxLjA0NCw5LjMxNy0xLjg5OSwxMC4zNjItNi41NzdTMTY3LjA1MywxOTIuNjA2LDE2Mi4zNzYsMTkxLjU2MXpcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk01MDMuMzIzLDM4Ni4xMTVjLTE0LjI5LDAtMjAuOTg5LTYuMTQyLTI5LjQ2OS0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODEtNDEuMTk4LTE4LjQ4MSBzLTMxLjc1MSw5LjgxOS00MS4xOTksMTguNDgxYy04LjQ3OSw3Ljc3Ni0xNS4xNzcsMTMuOTE4LTI5LjQ2NywxMy45MThzLTIwLjk4OC02LjE0Mi0yOS40NjgtMTMuOTE4IGMtOS40NDctOC42NjMtMjAuMTUzLTE4LjQ4MS00MS4xOTctMTguNDgxcy0zMS43NSw5LjgxOS00MS4xOTgsMTguNDgzYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE3LTI5LjQ2NSwxMy45MTcgYy0xNC4yODgsMC0yMC45ODUtNi4xNDItMjkuNDY0LTEzLjkxN2MtOS40NDctOC42NjMtMjAuMTU0LTE4LjQ4My00MS4xOTYtMTguNDgzcy0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MSBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTgtMjkuNDY1LDEzLjkxOGMtNC43OTQsMC04LjY3OCwzLjg4Ni04LjY3OCw4LjY3OGMwLDQuNzkzLDMuODg0LDguNjc4LDguNjc4LDguNjc4IGMyMS4wNDIsMCwzMS43NDktOS44MTksNDEuMTk3LTE4LjQ4MWM4LjQ3OC03Ljc3NiwxNS4xNzYtMTMuOTE4LDI5LjQ2NS0xMy45MThjMTQuMjg4LDAsMjAuOTg1LDYuMTQyLDI5LjQ2NCwxMy45MTcgYzkuNDQ3LDguNjYzLDIwLjE1NCwxOC40ODMsNDEuMTk2LDE4LjQ4M3MzMS43NDktOS44MTgsNDEuMTk3LTE4LjQ4MWM4LjQ3OS03Ljc3NiwxNS4xNzctMTMuOTE4LDI5LjQ2Ni0xMy45MTggczIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE4YzkuNDQ4LDguNjYyLDIwLjE1NiwxOC40ODEsNDEuMTk4LDE4LjQ4MXMzMS43NS05LjgxOCw0MS4xOTgtMTguNDgxIGM4LjQ4MS03Ljc3NiwxNS4xNzgtMTMuOTE4LDI5LjQ2OS0xMy45MThjMTQuMjksMCwyMC45ODksNi4xNDIsMjkuNDY5LDEzLjkxOGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgxLDQxLjE5OCwxOC40ODEgYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzhDNTEyLjAwMSwzOTAuMDAxLDUwOC4xMTYsMzg2LjExNSw1MDMuMzIzLDM4Ni4xMTV6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNNTkuMDI4LDM3OS45MTdjLTMuMTYyLTIuMjI3LTYuMDcxLTQuODk1LTkuMTUyLTcuNzE5Yy05LjQ0Ny04LjY2My0yMC4xNTUtMTguNDgzLTQxLjE5Ny0xOC40ODMgYy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4czMuODg0LDguNjc4LDguNjc4LDguNjc4YzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE4IGMzLjM1LDMuMDcxLDYuODEyLDYuMjQ2LDEwLjg4OCw5LjExN2MxLjUxOSwxLjA3LDMuMjYyLDEuNTg0LDQuOTksMS41ODRjMi43MjcsMCw1LjQxNC0xLjI4Miw3LjEwNC0zLjY4MiBDNjMuODg2LDM4OC4wOSw2Mi45NDYsMzgyLjY3Nyw1OS4wMjgsMzc5LjkxN3pcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk01MDMuMzIzLDMwNC4zODdjLTE0LjI5LDAtMjAuOTg5LTYuMTQyLTI5LjQ2OS0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODEtNDEuMTk4LTE4LjQ4MSBjLTIxLjA0MiwwLTMxLjc0OSw5LjgxOC00MS4xOTgsMTguNDhjLTMuNTMzLDMuMjM5LTMuNzcxLDguNzI4LTAuNTMxLDEyLjI2MmMzLjIzOCwzLjUzMyw4LjcyNywzLjc3LDEyLjI2MiwwLjUzMSBjOC40NzktNy43NzUsMTUuMTc4LTEzLjkxNywyOS40NjctMTMuOTE3YzE0LjI5LDAsMjAuOTg5LDYuMTQyLDI5LjQ2OSwxMy45MThjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4MSw0MS4xOTgsMTguNDgxIGM0Ljc5NCwwLDguNjc4LTMuODg2LDguNjc4LTguNjc4QzUxMi4wMDEsMzA4LjI3Miw1MDguMTE2LDMwNC4zODcsNTAzLjMyMywzMDQuMzg3elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTM4Mi4xMjgsMzA5LjUxNmMtMS4xOTEtNC42NDItNS45MTUtNy40MzktMTAuNTY1LTYuMjQ4Yy0yLjkzNCwwLjc1My02LjA2NiwxLjEyLTkuNTczLDEuMTIgYy0xNC4yOSwwLTIwLjk4OC02LjE0Mi0yOS40NjgtMTMuOTE4Yy05LjQ0Ny04LjY2My0yMC4xNTQtMTguNDgyLTQxLjE5Ny0xOC40ODJzLTMxLjc1LDkuODE5LTQxLjE5OCwxOC40ODMgYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE3LTI5LjQ2NSwxMy45MTdjLTE0LjI4OCwwLTIwLjk4NS02LjE0Mi0yOS40NjQtMTMuOTE4Yy05LjQ0Ny04LjY2Mi0yMC4xNTQtMTguNDgyLTQxLjE5Ni0xOC40ODIgYy0yMS4wNDIsMC0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MmMtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxOC0yOS40NjUsMTMuOTE4cy0yMC45ODctNi4xNDItMjkuNDY2LTEzLjkxOCBjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODItNDEuMTk3LTE4LjQ4MmMtNC43OTQsMC04LjY3OCwzLjg4Ni04LjY3OCw4LjY3OHMzLjg4Niw4LjY3Nyw4LjY4LDguNjc3IGMxNC4yODksMCwyMC45ODcsNi4xNDIsMjkuNDY1LDEzLjkxN2M5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgzLDQxLjE5OCwxOC40ODNjMjEuMDQyLDAsMzEuNzQ5LTkuODE5LDQxLjE5Ny0xOC40ODIgYzguNDc4LTcuNzc2LDE1LjE3Ni0xMy45MTgsMjkuNDY1LTEzLjkxOGMxNC4yODgsMCwyMC45ODUsNi4xNDIsMjkuNDY0LDEzLjkxOGM5LjQ0Nyw4LjY2MiwyMC4xNTQsMTguNDgxLDQxLjE5NiwxOC40ODEgczMxLjc0OS05LjgxOCw0MS4xOTctMTguNDgxYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOHMyMC45ODcsNi4xNDIsMjkuNDY2LDEzLjkxOCBjOS40NDgsOC42NjIsMjAuMTU2LDE4LjQ4MSw0MS4xOTgsMTguNDgxYzQuOTEzLDAsOS41ODctMC41NiwxMy44OS0xLjY2NEMzODAuNTIzLDMxOC44ODgsMzgzLjMxOSwzMTQuMTU3LDM4Mi4xMjgsMzA5LjUxNnpcXFwiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiLTYgMCA1MTIgNTEyXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIm00MDEuNzQyMTg4IDE1Mi42MzY3MTljMjAuNDgwNDY4IDEuMDE1NjI1IDQyLjEzNjcxOC03LjY0NDUzMSA1OC4xNDQ1MzEtMjMuNjU2MjUgMjIuNzQ2MDkzLTIyLjc0MjE4OCAxNy4wOTM3NS02My4yODkwNjMgMTMuMDE5NTMxLTgxLjU4OTg0NGwyNi4yMzA0NjktMjYuMjMwNDY5LTIxLjE2NDA2My0yMS4xNjAxNTYtMjYuMjI2NTYyIDI2LjIyNjU2MmMtMTguMzA0Njg4LTQuMDc0MjE4LTU4Ljg1MTU2My05LjcyNjU2Mi04MS41OTM3NSAxMy4wMTk1MzItMTQuNjEzMjgyIDE0LjYwOTM3NS0yMy4xOTE0MDYgMzMuOTc2NTYyLTIzLjcyMjY1NiA1Mi45NTcwMzFsLTIyLjc2OTUzMiAyNC4zNTE1NjNjLTE3Ljc2OTUzMSAxOS0yNy4zMTY0MDYgNDMuNzkyOTY4LTI2Ljg4MjgxMiA2OS44MDQ2ODcuNDM3NSAyNi4wMTE3MTkgMTAuODA4NTk0IDUwLjQ3MjY1NiAyOS4yMDMxMjUgNjguODY3MTg3bDUxLjY2NDA2MiA1MS42NjQwNjNjNS43OTI5NjkgNS43OTI5NjkgNS43OTI5NjkgMTUuMjE0ODQ0IDAgMjEuMDExNzE5bC0xLjE4NzUgMS4xODc1Yy01Ljc5Mjk2OSA1Ljc5Mjk2OC0xNS4yMTg3NSA1Ljc5Mjk2OC0yMS4wMTE3MTkgMGwtMTc2LjcwMzEyNC0xNzYuNzA3MDMyYy0xNy42Nzk2ODgtMTcuNjc5Njg3LTQxLjE3NTc4Mi0yNy42NDA2MjQtNjYuMTYwMTU3LTI4LjA1MDc4MS0yNS4yMjI2NTYtLjQxNDA2Mi00OC45MTQwNjIgOC45Mzc1LTY2LjgzMjAzMSAyNi4zMzU5MzgtMTguMTQwNjI1IDE3LjYwOTM3NS0yOC4yNzM0MzggNDEuMjg1MTU2LTI4LjUyNzM0NCA2Ni42NjQwNjItLjI1NzgxMiAyNS4zODY3MTkgOS4zODY3MTkgNDkuMjY1NjI1IDI3LjEyODkwNiA2Ny4yMDMxMjVsMTIxLjA4MjAzMiAxMjMuMDM5MDYzYzIuODMyMDMxIDIuODYzMjgxIDQuMzQ3NjU2IDYuNjc5Njg3IDQuMjY1NjI1IDEwLjc1MzkwNi0uMDgyMDMxIDQuMDYyNS0xLjc1MzkwNyA3LjgxNjQwNi00LjcwNzAzMSAxMC41NzAzMTMtNS43NzczNDQgNS4zOTA2MjQtMTUuMjM4MjgyIDUuMDE5NTMxLTIxLjA4NTkzOC0uODI4MTI2bC00Mi4yMjY1NjItNDIuMjMwNDY4Yy0yNS4xMTcxODgtMjUuMTEzMjgyLTY1Ljk4NDM3Ni0yNS4xMTMyODItOTEuMTAxNTYzIDBsLTEwLjU3ODEyNSAxMC41ODIwMzEgODcuNTExNzE5IDg3LjUxMTcxOWMxNy42Nzk2ODcgMTcuNjc5Njg3IDQxLjE3NTc4MSAyNy42NDQ1MzEgNjYuMTYwMTU2IDI4LjA1NDY4Ny41MzUxNTYuMDA3ODEzIDEuMDYyNS4wMTE3MTkgMS41OTc2NTYuMDExNzE5IDI0LjU4MjAzMSAwIDQ3LjY5NTMxMy05LjMyNDIxOSA2NS4yMzQzNzUtMjYuMzUxNTYyIDE4LjEzNjcxOS0xNy42MDkzNzYgMjguMjY5NTMyLTQxLjI4MTI1IDI4LjUyNzM0NC02Ni42NjAxNTcuMjU3ODEyLTI1LjM5MDYyNS05LjM4NjcxOS00OS4yNjU2MjUtMjcuMTMyODEyLTY3LjIwNzAzMWwtMTIxLjA4MjAzMi0xMjMuMDM5MDYyYy0yLjgzMjAzMS0yLjg2MzI4Mi00LjM0Mzc1LTYuNjc5Njg4LTQuMjYxNzE4LTEwLjc1MzkwNy4wODIwMzEtNC4wNjI1IDEuNzUzOTA2LTcuODE2NDA2IDQuNzAzMTI0LTEwLjU3MDMxMiA1Ljc3NzM0NC01LjM5MDYyNSAxNS4yMzgyODItNS4wMTk1MzEgMjEuMDg1OTM4LjgyODEyNWwxNzYuOTcyNjU2IDE3Ni45NzI2NTZjMTcuNzk2ODc1IDE3Ljc5Njg3NSA0MS40NjA5MzggMjcuNjAxNTYyIDY2LjYzMjgxMyAyNy42MDE1NjJzNDguODM5ODQzLTkuODA0Njg3IDY2LjYzNjcxOS0yNy42MDE1NjJsMS4xOTE0MDYtMS4xOTE0MDZjMzYuNzQyMTg3LTM2Ljc0MjE4OCAzNi43NDIxODctOTYuNTI3MzQ0IDAtMTMzLjI2OTUzMmwtNTAuNzkyOTY5LTUwLjc5Mjk2OGMtMy44MTY0MDYtMy44MTY0MDYtNS45MTc5NjktOC44OTA2MjUtNS45MTc5NjktMTQuMjg1MTU2IDAtNS4zOTg0MzggMi4xMDE1NjMtMTAuNDY4NzUgNS45MTc5NjktMTQuMjg1MTU3em0wIDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgLTQgNTEyLjAwMTY0IDUxMlxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtNDk2LjkxNDA2MiAzNTQuMzY3MTg4LTc0LjE3OTY4Ny03Ni42Nzk2ODggMjguODc1LTExLjk2MDkzOGMxMi4yNjU2MjUtNS4wODIwMzEgMjEuODE2NDA2LTE0LjYzNjcxOCAyNi44OTg0MzctMjYuOTAyMzQzIDUuMDgyMDMyLTEyLjI2NTYyNSA1LjA4MjAzMi0yNS43NzczNDQgMC0zOC4wNDI5NjktNy43MjI2NTYtMTguNjQ0NTMxLTI1Ljc1MzkwNi0zMC42OTE0MDYtNDUuOTMzNTkzLTMwLjY5MTQwNi02LjUzNTE1NyAwLTEyLjkzMzU5NCAxLjI3NzM0NC0xOS4wMDc4MTMgMy43OTI5NjhsLTEuOTQxNDA2LjgwODU5NHYtMTkuMDY2NDA2YzAtODUuODEyNS02OS44MTI1LTE1NS42MjUtMTU1LjYyNS0xNTUuNjI1cy0xNTUuNjI1IDY5LjgxMjUtMTU1LjYyNSAxNTUuNjI1djE5LjA2MjVsLTEuOTM3NS0uODAwNzgxYy02LjA3ODEyNS0yLjUxOTUzMS0xMi40NzY1NjItMy43OTY4NzUtMTkuMDExNzE5LTMuNzk2ODc1LTIwLjE4MzU5MyAwLTM4LjIxNDg0MyAxMi4wNTA3ODEtNDUuOTMzNTkzIDMwLjY5MTQwNi01LjA4MjAzMiAxMi4yNjU2MjUtNS4wODIwMzIgMjUuNzc3MzQ0LS4wMDM5MDcgMzguMDQyOTY5IDUuMDgyMDMxIDEyLjI2NTYyNSAxNC42MzY3MTkgMjEuODIwMzEyIDI2Ljg5ODQzOCAyNi45MDIzNDNsMjguODc1IDExLjk2MDkzOC03NC4xNzU3ODEgNzYuNjc5Njg4Yy0xNy44NTE1NjMgMTguNDQ5MjE4LTE2LjA3MDMxMyAzMy40NzY1NjItMTMuNDIxODc2IDQwLjc5Njg3NCAzLjk2MDkzOCAxMC45MzM1OTQgMTQuNDE3OTY5IDE4LjA4NTkzOCAyOC42OTE0MDcgMTkuNjE3MTg4IDUuNzQ2MDkzLjYxNzE4OCAxMC44OTg0MzcgMy40MzM1OTQgMTQuNTE1NjI1IDcuOTI5Njg4IDMuNDkyMTg3IDQuMzQ3NjU2IDUuMDg5ODQ0IDkuNzMwNDY4IDQuNDg4MjgxIDE1LjE2NDA2Mi0xLjU0Njg3NSAxNC4wNTg1OTQgMy4yNzczNDQgMjIuNzUzOTA2IDcuNTk3NjU2IDI3LjU3NDIxOSA1LjY2Nzk2OSA2LjMyODEyNSAxMy45NTcwMzEgOS44MTY0MDYgMjMuMzM5ODQ0IDkuODE2NDA2IDcuOTU3MDMxIDAgMTYuNDk2MDk0LTIuMzk4NDM3IDI1LjM3ODkwNi03LjEyMTA5NGw1LjEwMTU2My0yLjcxNDg0M2M3LjI5Njg3NS0zLjg3ODkwNyAxNy4yNDIxODctNi4wMTU2MjYgMjgtNi4wMTU2MjYgMTIuNDUzMTI1IDAgMjQuMjY1NjI1IDIuODYzMjgyIDMyLjQxNzk2OCA3Ljg1NTQ2OWwzOS45NzY1NjMgMjQuNDk2MDk0YzExLjkwMjM0NCA3LjI5Mjk2OSAyNy42NDA2MjUgMTEuNjI1IDQ0LjMxMjUgMTIuMTk5MjE5LjE3MTg3NS4wMDc4MTIuMzQzNzUuMDExNzE4LjUxNTYyNS4wMTE3MThzLjM0NzY1Ni0uMDAzOTA2LjUxOTUzMS0uMDExNzE4YzE2LjY2Nzk2OS0uNTc0MjE5IDMyLjQwMjM0NC00LjkwNjI1IDQ0LjMwODU5NC0xMi4xOTkyMTlsMzkuOTcyNjU2LTI0LjQ5NjA5NGM4LjE1MjM0NC00Ljk5MjE4NyAxOS45Njg3NS03Ljg1NTQ2OSAzMi40MTc5NjktNy44NTU0NjkgMTAuNzY1NjI1IDAgMjAuNzA3MDMxIDIuMTM2NzE5IDI4IDYuMDE1NjI2bDUuMTA1NDY5IDIuNzE0ODQzYzguODgyODEyIDQuNzIyNjU3IDE3LjQyMTg3NSA3LjExNzE4OCAyNS4zNzUgNy4xMjEwOTRoLjAwMzkwNmM5LjM4MjgxMyAwIDE3LjY3MTg3NS0zLjQ4ODI4MSAyMy4zNDM3NS05LjgxNjQwNiA0LjMxNjQwNi00LjgyMDMxMyA5LjE0MDYyNS0xMy41MTU2MjUgNy41OTM3NS0yNy41NzgxMjUtLjU5NzY1Ni01LjQyOTY4OC45OTYwOTQtMTAuODEyNSA0LjQ5MjE4Ny0xNS4xNjAxNTYgMy42MDkzNzYtNC40OTYwOTQgOC43NjU2MjYtNy4zMTI1IDE0LjUxNTYyNi03LjkyOTY4OCAxNC4yNzM0MzctMS41MzEyNSAyNC43MzA0NjgtOC42ODM1OTQgMjguNjg3NS0xOS42MTcxODggMi42NDg0MzctNy4zMjAzMTIgNC40Mjk2ODctMjIuMzQ3NjU2LTEzLjQyMTg3Ni00MC43OTY4NzR6bTAgMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDM0NC41NyAzNDQuNTdcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0NC41NyAzNDQuNTc7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBkPVxcXCJNMzM1LjIwNiwxNDQuNTUyYy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41YzAsMTkuMTgzLTE1LjYwNiwzNC43ODktMzQuNzksMzQuNzg5Yy0zLjY0NSwwLTcuMjc2LTAuNTgyLTEwLjc5My0xLjczIGMtMi4yNDktMC43MzMtNC43MTQtMC4zNjQtNi42NDgsMC45OTljLTEuOTM0LDEuMzYzLTMuMTEyLDMuNTYtMy4xNzYsNS45MjZjLTAuNTIsMTguOTY4LTE1Ljc3NiwzMy44MjYtMzQuNzMzLDMzLjgyNiBjLTEwLjEwNSwwLTE5LjcwNi00LjQxNS0yNi4zNDEtMTIuMTE0Yy0xLjQyNS0xLjY1My0zLjQ5OS0yLjYwNC01LjY4MS0yLjYwNGMtMi4xODIsMC00LjI1NiwwLjk1LTUuNjgxLDIuNjA0IGMtNi42MzUsNy42OTktMTYuMjM2LDEyLjExNC0yNi4zNDEsMTIuMTE0Yy0xMC43MjUsMC0yMC42OTYtNC44NjgtMjcuMzU4LTEzLjM1NmMtMS40MjItMS44MTItMy41OTctMi44NjktNS45LTIuODY5IGMtMi4zMDMsMC00LjQ3OCwxLjA1OC01LjksMi44NjljLTYuNjYyLDguNDg4LTE2LjYzNCwxMy4zNTYtMjcuMzU4LDEzLjM1NmMtNi45OTksMC0xMy43NDEtMi4wNjktMTkuNDk5LTUuOTg1IGMtMy40MjUtMi4zMzEtOC4wOS0xLjQ0Mi0xMC40MTksMS45ODNjLTIuMzMsMy40MjUtMS40NDEsOC4wOSwxLjk4NCwxMC40MTljOC4yNTUsNS42MTUsMTcuOTE1LDguNTgzLDI3LjkzNCw4LjU4MyBjMTIuNDUxLDAsMjQuMTg3LTQuNTcyLDMzLjI1OC0xMi43NjhjOS4wNzEsOC4xOTUsMjAuODA3LDEyLjc2OCwzMy4yNTgsMTIuNzY4YzExLjc5NSwwLDIzLjEwNS00LjE5MywzMi4wMjItMTEuNzAzIGM4LjkxNyw3LjUxLDIwLjIyNywxMS43MDMsMzIuMDIyLDExLjcwM2MxMy4wNTcsMCwyNS4zOTEtNS4wMjEsMzQuNzMxLTE0LjE0YzcuMTQxLTYuOTczLDExLjkzOC0xNS43NTMsMTMuOTQ4LTI1LjMzNCBjMi4yMTEsMC4zMDIsNC40MzksMC40NTMsNi42NzIsMC40NTNjMjcuNDU0LDAsNDkuNzktMjIuMzM1LDQ5Ljc5LTQ5Ljc4OUMzNDIuNzA2LDE0Ny45MDksMzM5LjM0OCwxNDQuNTUyLDMzNS4yMDYsMTQ0LjU1MnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNjcuMTAyLDE5OS4zN2MzLjkzOC0xLjI4Niw2LjA4Ny01LjUyLDQuODAyLTkuNDU4Yy0xLjI4Ni0zLjkzNy01LjUyMS02LjA4Ni05LjQ1Ny00LjgwMiBjLTMuNTE3LDEuMTQ4LTcuMTQ4LDEuNzMtMTAuNzkzLDEuNzNjLTE5LjE4MywwLTM0Ljc5LTE1LjYwNi0zNC43OS0zNC43ODljMC05LjkwOCw0LjI4My0xOS4zODgsMTEuNzUyLTI2LjAwOSBjMS42MDUtMS40MjQsMi41MjQtMy40NjcsMi41MjQtNS42MTJzLTAuOTE5LTQuMTg4LTIuNTI0LTUuNjExYy03LjQ2OC02LjYyMy0xMS43NTItMTYuMTAzLTExLjc1Mi0yNi4wMSBjMC0xOS4xODQsMTUuNjA2LTM0Ljc5LDM0Ljc5LTM0Ljc5YzMuNjQzLDAsNy4yNzQsMC41ODIsMTAuNzk0LDEuNzNjMi4yNSwwLjczNCw0LjcxMywwLjM2Myw2LjY0Ny0xczMuMTExLTMuNTYsMy4xNzYtNS45MjUgQzcyLjc5MiwyOS44NTgsODguMDQ4LDE1LDEwNy4wMDUsMTVjMTAuNzI1LDAsMjAuNjk3LDQuODY4LDI3LjM1OCwxMy4zNTVjMS40MjIsMS44MTMsMy41OTcsMi44Nyw1LjksMi44NyBjMi4zMDMsMCw0LjQ3OS0xLjA1OSw1LjktMi44N0MxNTIuODI0LDE5Ljg2OCwxNjIuNzk1LDE1LDE3My41MjEsMTVjNC4xNDIsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjUgYy0xMi40NTIsMC0yNC4xODcsNC41NzItMzMuMjU4LDEyLjc2N0MxMzEuMTkxLDQuNTcyLDExOS40NTcsMCwxMDcuMDA1LDBjLTEzLjA1NywwLTI1LjM5MSw1LjAyMS0zNC43MywxNC4xNCBjLTcuMTQxLDYuOTcyLTExLjkzOCwxNS43NTMtMTMuOTQ4LDI1LjMzM2MtMi4yMTEtMC4zMDItNC40MzktMC40NTMtNi42NzItMC40NTNjLTI3LjQ1NCwwLTQ5Ljc5LDIyLjMzNi00OS43OSw0OS43OSBjMCwxMS41ODcsNC4wOCwyMi43NTgsMTEuMzg3LDMxLjYyMWMtNy4zMDcsOC44NjItMTEuMzg3LDIwLjAzMy0xMS4zODcsMzEuNjIxYzAsMjcuNDU0LDIyLjMzNSw0OS43ODksNDkuNzksNDkuNzg5IEM1Ni44ODIsMjAxLjg0MSw2Mi4wOCwyMDEuMDEsNjcuMTAyLDE5OS4zN3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjAwLjY0NywyNy44OTljMy4xMzgsMi43MDQsNy44NzQsMi4zNTIsMTAuNTc4LTAuNzg1QzIxNy44NTksMTkuNDE1LDIyNy40NiwxNSwyMzcuNTY1LDE1IGMxOC45NTgsMCwzNC4yMTQsMTQuODU3LDM0LjczMywzMy44MjVjMC4wNjQsMi4zNjUsMS4yNDIsNC41NjIsMy4xNzYsNS45MjVzNC4zOTcsMS43MzQsNi42NDcsMSBjMy41Mi0xLjE0OCw3LjE1Mi0xLjczLDEwLjc5NC0xLjczYzE5LjE4MywwLDM0Ljc5LDE1LjYwNiwzNC43OSwzNC43OWMwLDkuOTA3LTQuMjg0LDE5LjM4Ny0xMS43NTIsMjYuMDEgYy0zLjEsMi43NDgtMy4zODQsNy40ODgtMC42MzYsMTAuNTg3YzEuNDgyLDEuNjcyLDMuNTQzLDIuNTI0LDUuNjE1LDIuNTI0YzEuNzY5LDAsMy41NDUtMC42MjIsNC45NzMtMS44ODkgYzEwLjY3Ny05LjQ2NywxNi44MDEtMjMuMDM3LDE2LjgwMS0zNy4yMzJjMC0yNy40NTQtMjIuMzM1LTQ5Ljc5LTQ5Ljc5LTQ5Ljc5Yy0yLjIzMywwLTQuNDYsMC4xNTEtNi42NzIsMC40NTMgYy0yLjAxLTkuNTgtNi44MDctMTguMzYxLTEzLjk0OC0yNS4zMzNDMjYyLjk1Nyw1LjAyMSwyNTAuNjIyLDAsMjM3LjU2NSwwYy0xNC40NzUsMC0yOC4yMTcsNi4zMTMtMzcuNzA0LDE3LjMyMSBDMTk3LjE1OCwyMC40NiwxOTcuNTEsMjUuMTk1LDIwMC42NDcsMjcuODk5elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMjkuMzE5LDI1MS44OTljLTIwLjU0MSwwLTM2LjYzLDEwLjgwMS0zNi42MywyNC41OXMxNi4wOSwyNC41OSwzNi42MywyNC41OWMyMC41NCwwLDM2LjYzLTEwLjgwMSwzNi42My0yNC41OSBTMTQ5Ljg1OSwyNTEuODk5LDEyOS4zMTksMjUxLjg5OXogTTEyOS4zMTksMjg2LjA3OWMtMTMuMDAzLDAtMjEuNjMtNS43NzItMjEuNjMtOS41OXM4LjYyNy05LjU5LDIxLjYzLTkuNTkgYzEzLjAwMywwLDIxLjYzLDUuNzcyLDIxLjYzLDkuNTlTMTQyLjMyMiwyODYuMDc5LDEyOS4zMTksMjg2LjA3OXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOTUuNTI4LDMxMi44MThjLTQuMTQyLDAtNy41LDMuMzU3LTcuNSw3LjVjMCw0LjM2Ny03LjQyMyw5LjI1Mi0xNy4zNTgsOS4yNTJzLTE3LjM1OC00Ljg4NS0xNy4zNTgtOS4yNTIgYzAtNC4zNjgsNy40MjMtOS4yNTMsMTcuMzU4LTkuMjUzYzQuMTQyLDAsNy41LTMuMzU3LDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41Yy0xOC4xNDUsMC0zMi4zNTgsMTAuNjUzLTMyLjM1OCwyNC4yNTMgUzUyLjUyNiwzNDQuNTcsNzAuNjcsMzQ0LjU3czMyLjM1OC0xMC42NTIsMzIuMzU4LTI0LjI1MkMxMDMuMDI4LDMxNi4xNzYsOTkuNjcsMzEyLjgxOCw5NS41MjgsMzEyLjgxOHpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNTExIDUxMS45OTlcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwibTExNC40NDkyMTkgNDEwLjI2OTUzMSAzNC42MjEwOTMgMjUuMDY2NDA3YzEwLjU5Mzc1IDcuNjY3OTY4IDI1Ljk2ODc1IDcuNjY3OTY4IDM2LjU2MjUgMGwzNC42MjEwOTQtMjUuMDY2NDA3YzIxLjEwNTQ2OS0xNS4yODEyNSA1MC41ODk4NDQtMTUuMjgxMjUgNzEuNjk1MzEzIDBsMzQuNjI1IDI1LjA2NjQwN2MxMC41ODk4NDMgNy42Njc5NjggMjUuOTY4NzUgNy42Njc5NjggMzYuNTYyNSAwbDM0LjYyMTA5My0yNS4wNjY0MDdjMjEuMTA5Mzc2LTE1LjI4MTI1IDUwLjU4OTg0NC0xNS4yODEyNSA3MS42OTkyMTkgMGw0Mi4yNSAzMC41ODU5Mzh2LTYzLjE5NTMxM2wtNTkuODIwMzEyLTQzLjMwNDY4N2MtMTAuNTg5ODQ0LTcuNjY3OTY5LTI1Ljk2NDg0NC03LjY2Nzk2OS0zNi41NTg1OTQgMGwtMzQuNjI1IDI1LjA2MjVjLTIxLjEwNTQ2OSAxNS4yODEyNS01MC41ODk4NDQgMTUuMjgxMjUtNzEuNjk1MzEzIDBsLTM0LjYyNS0yNS4wNjI1Yy0xMC41ODk4NDMtNy42NzE4NzUtMjUuOTY4NzUtNy42Njc5NjktMzYuNTU4NTkzIDBsLTM0LjYyNSAyNS4wNjI1Yy0yMS4xMDU0NjkgMTUuMjgxMjUtNTAuNTg5ODQ0IDE1LjI4MTI1LTcxLjY5NTMxMyAwbC0zNC42MjUtMjUuMDYyNWMtMTAuNTg5ODQ0LTcuNjY3OTY5LTI1Ljk2ODc1LTcuNjY3OTY5LTM2LjU1ODU5NCAwbC01OS44MjAzMTIgNDMuMzA0Njg3djYzLjE5NTMxM2w0Mi4yNS0zMC41ODU5MzhjMjEuMTA5Mzc1LTE1LjI4MTI1IDUwLjU4OTg0NC0xNS4yODEyNSA3MS42OTkyMTkgMHptMCAwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwibTExNC40NDkyMTkgMzEwLjA4NTkzOCAzNC42MjEwOTMgMjUuMDY2NDA2YzEwLjU5Mzc1IDcuNjY3OTY4IDI1Ljk2ODc1IDcuNjY3OTY4IDM2LjU2MjUgMGwzNC42MjEwOTQtMjUuMDY2NDA2YzIxLjEwOTM3NS0xNS4yNzczNDQgNTAuNTkzNzUtMTUuMjc3MzQ0IDcxLjY5NTMxMyAwbDM0LjYyNSAyNS4wNjY0MDZjMTAuNTg5ODQzIDcuNjY3OTY4IDI1Ljk2ODc1IDcuNjY3OTY4IDM2LjU2MjUgMGwzNC42MjEwOTMtMjUuMDY2NDA2YzIxLjEwOTM3Ni0xNS4yNzczNDQgNTAuNTg5ODQ0LTE1LjI3NzM0NCA3MS42OTkyMTkgMGw0Mi4yNSAzMC41ODk4NDN2LTk1LjUwMzkwNmgtMTM5LjY0ODQzN2MtNDUuMTQ4NDM4LTEuODYzMjgxLTgxLjkwNjI1LTQwLjA3ODEyNS04MS45OTYwOTQtODUuMzIwMzEzLS4wNDI5NjktMjIuODk0NTMxIDguODM1OTM4LTQ0LjQyMTg3NCAyNS4wMDM5MDYtNjAuNjIxMDkzIDE1LjkyMTg3NS0xNS45NTcwMzEgMzcuMDI3MzQ0LTI0Ljg1MTU2MyA1OS41MjM0MzgtMjUuMTE3MTg4bDguNjQwNjI1IDEuMjU3ODEzIDExLjU4NTkzNy0xOC44MjgxMjUtOC45NDkyMTgtOC4zNjMyODFjLTU5LjIzMDQ2OS01NS4zNTU0NjktMTQ4LjU0Mjk2OS02My45NDkyMTktMjE3LjE4MzU5NC0yMC45MDIzNDQtMjEuNjA5Mzc1IDEzLjU1NDY4Ny00MC41OTc2NTYgMzIuNTg1OTM3LTU0LjkxNzk2OSA1NS4wNTQ2ODdsLTExMy4yNjU2MjUgMTc4LjE3MTg3NXY4MC4xNzE4NzVsNDIuMjUtMzAuNTg5ODQzYzIxLjEwOTM3NS0xNS4yNzczNDQgNTAuNTg5ODQ0LTE1LjI3NzM0NCA3MS42OTkyMTkgMHptMCAwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwibTQxNS4zMjQyMTkgNDM0LjUzNTE1Ni0zNC42MjEwOTQgMjUuMDY2NDA2Yy0yMS4xMDU0NjkgMTUuMjc3MzQ0LTUwLjU4OTg0NCAxNS4yNzczNDQtNzEuNjk1MzEzIDBsLTM0LjYyNS0yNS4wNjY0MDZjLTEwLjU5Mzc1LTcuNjY3OTY4LTI1Ljk2ODc1LTcuNjY3OTY4LTM2LjU2MjUgMGwtMzQuNjIxMDkzIDI1LjA2NjQwNmMtMjEuMTA1NDY5IDE1LjI3NzM0NC01MC41ODk4NDQgMTUuMjc3MzQ0LTcxLjY5NTMxMyAwbC0zNC42MjUtMjUuMDY2NDA2Yy0xMC41ODk4NDQtNy42Njc5NjgtMjUuOTY4NzUtNy42Njc5NjgtMzYuNTU4NTk0IDBsLTU5LjgyMDMxMiA0My4zMDQ2ODh2MzQuMTYwMTU2aDUxMS4yMDcwMzF2LTM0LjE2MDE1NmwtNTkuODIwMzEyLTQzLjMwNDY4OGMtMTAuNTg5ODQ0LTcuNjY3OTY4LTI1Ljk2NDg0NC03LjY2Nzk2OC0zNi41NjI1IDB6bTAgMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IFdQQVBJIGZyb20gJ3dwYXBpJztcblxuaW1wb3J0IG1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgZ2VvZGF0YSBmcm9tICcuL2dlb2RhdGEnO1xuaW1wb3J0IGNvbnRlbnRIVE1MIGZyb20gJy4vY29udGVudEhUTUwnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZy5qc29uJztcbmltcG9ydCB0aGVtZXMgZnJvbSAnLi9jb25maWcvdGhlbWVzLmpzb24nO1xuXG5cbmNvbnN0IHdwID0gbmV3IFdQQVBJKHtlbmRwb2ludDogY29uZmlnLndvcmRwcmVzcy5lbmRwb2ludH0pO1xuXG5sZXQgdGhlbWU7XG5sZXQgY3VycmVudE5vZGU7XG5sZXQgYWN0aXZlUGFuZWw7XG5cblxuY29uc3QgaW5pdEhvbWUgPSAoe2xvY2F0aW9ufSkgPT4ge1xuXHRjb250ZW50SFRNTC5pbml0SG9tZSgpO1xuXHRpZiAod2luZG93LmlubmVyV2lkdGggPiA4ODApIHVwZGF0ZU1hcCh7bG9jYXRpb259KTtcbn07XG5cbmNvbnN0IHNldEN1cnJlbnROb2RlID0gZGF0YSA9PiBjdXJyZW50Tm9kZSA9IGRhdGE7XG5cbmNvbnN0IHNldEFjdGl2ZVBhbmVsID0gcGFuZWwgPT4gYWN0aXZlUGFuZWwgPSBwYW5lbDtcblxuZXhwb3J0IGNvbnN0IHNob3dQYWdlID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRhd2FpdCBzZXRUaGVtZShzbHVnKTtcblxuXHQvLyBpZiAodGhlbWUuaXNOZXcpIFxuXHRpZiAoc2x1ZyAhPT0gJ2Fib3V0JykgdXBkYXRlTWFwKHRoZW1lKTtcblxuXHRpZiAoaWQgPT09IDApIHtcblx0XHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7c2x1ZzogJy9naG9zdC1yaXZlci8nfSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGFnZURhdGEgPSBhd2FpdCBsb2FkUGFnZSh7aWQsIHNsdWd9KTtcblx0Ly8gY29uc29sZS5sb2cocGFnZURhdGEpO1xuXG5cdHNldEN1cnJlbnROb2RlKG51bGwpO1xuXG5cdGlmIChzbHVnICE9PSAnYWJvdXQnKSBtYXAuZmx5VG9PcmlnaW4oKTtcblxuXHQvL3BhbmVsXG5cdHNldEFjdGl2ZVBhbmVsKChzbHVnID09PSAnYWJvdXQnKSA/ICdmdWxsLXBhbmVsJyA6ICdyaWdodC1wYW5lbCcpO1xuXHRcblx0Y29udGVudEhUTUwudXBkYXRlUGFnZShhY3RpdmVQYW5lbCwgcGFnZURhdGEpO1xuXHRcblx0Ly9zaG93IHBhbmVsXG5cdGNvbnRlbnRIVE1MLnNob3dQYW5lbCh7XG5cdFx0YWN0aXZlUGFuZWwsXG5cdFx0ZGlyZWN0aW9uOiAnZG93bicsXG5cdFx0ZGVsYXk6IDBcblx0fSk7XG5cblx0Y2hhbmdlQnJvd3Nlckhpc3Rvcnkoe1xuXHRcdHRpdGxlOiBwYWdlRGF0YS50aXRsZS5yZW5kZXJlZCxcblx0XHRzbHVnOiBwYWdlRGF0YS5zbHVnXG5cdH0pO1xuXG5cdHJldHVybiBwYWdlRGF0YTtcbn07XG5cbmNvbnN0IGxvYWRQYWdlID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRsZXQgcGFnZURhdGE7XG5cblx0aWYgKGlkKSB7XG5cdFx0cGFnZURhdGEgPSBhd2FpdCB3cC5wYWdlcygpLmlkKGlkKS5lbWJlZCgpO1xuXHR9IGVsc2UgaWYgKHNsdWcpIHtcblx0XHRwYWdlRGF0YSA9IGF3YWl0IHdwLnBhZ2VzKCkuc2x1ZyhzbHVnKS5lbWJlZCgpO1xuXHRcdHBhZ2VEYXRhID0gcGFnZURhdGFbMF07XG5cdH1cblxuXHRyZXR1cm4gcGFnZURhdGE7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd1Bvc3QgPSBhc3luYyAoe2lkLCBzbHVnfSkgPT4ge1xuXG5cdGlmIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS5pZCA9PT0gaWQpIHJldHVybjtcblxuXHRhd2FpdCBjb250ZW50SFRNTC5oaWRlUGFuZWwoe1xuXHRcdGFjdGl2ZVBhbmVsLFxuXHRcdGRpcmVjdGlvbjogJ3VwJ1xuXHR9KTtcblxuXHRjb250ZW50SFRNTC5zaG93U3Bpbm5lcigpO1xuXG5cdGNvbnN0IHBvc3REYXRhID0gYXdhaXQgbG9hZFBvc3Qoe2lkLHNsdWd9KTtcblx0Ly8gY29uc29sZS5sb2cocG9zdERhdGEpO1xuXHRpZiAoIXBvc3REYXRhKSB7XG5cdFx0Y29udGVudEhUTUwuaGlkZVNwaW5uZXIoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb250ZW50SFRNTC5oaWRlU3Bpbm5lcigpO1xuXHRzZXRDdXJyZW50Tm9kZShwb3N0RGF0YSk7XG5cblx0Y29uc3QgcG9zdENhdGVnb3JpZXMgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVswXTtcblx0Y29uc3QgcG9zdFRhZ3MgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVsxXTtcblxuXHRjb25zdCBwb3N0VGhlbWUgPSBnZXRQb3N0VGhlbWUocG9zdENhdGVnb3JpZXMpO1xuXHRpZiAocG9zdFRoZW1lLnNsdWcgPT09ICd1bmNhdGVnb3JpemVkJykgY29uc29sZS5sb2coJ1Byb2JsZW0gd2l0aCBjYXRlZ29yeSBcInVuY2F0ZWdvcml6ZWRcIjogJywgcG9zdERhdGEpO1xuXG5cdHNldFRoZW1lKHBvc3RUaGVtZS5zbHVnKTtcblx0aWYgKHRoZW1lLmlzTmV3KSBhd2FpdCB1cGRhdGVNYXAodGhlbWUpO1xuXG5cdC8vZmx5IHRvIGxvY2FsXG5cdGdlb2RhdGEuc2V0Q3VycmVudE5vZGUoY3VycmVudE5vZGUpO1xuXHRjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdlb2RhdGEuZ2V0Tm9kZUNvb3JkaW5hdGVzKGN1cnJlbnROb2RlKTtcblx0bWFwLmZseVRvKGNvb3JkaW5hdGVzKTtcblxuXHRzZXRBY3RpdmVQYW5lbCgncmlnaHQtcGFuZWwnKTtcblx0XG5cdGNvbnRlbnRIVE1MLnVwZGF0ZVBvc3QocG9zdERhdGEscG9zdFRhZ3MsdGhlbWUpO1xuXG5cdC8vc2hvdyBQYW5lbFxuXHRjb250ZW50SFRNTC5zaG93UGFuZWwoe1xuXHRcdGFjdGl2ZVBhbmVsLFxuXHRcdGRpcmVjdGlvbjogJ2Rvd24nLFxuXHRcdGRlbGF5OiAwXG5cdH0pO1xuXG5cdGNoYW5nZUJyb3dzZXJIaXN0b3J5KHtcblx0XHR0aXRsZTogcG9zdERhdGEudGl0bGUucmVuZGVyZWQsXG5cdFx0c2x1ZzogcG9zdERhdGEuc2x1Z1xuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHBvc3Q6IHBvc3REYXRhLFxuXHRcdHRoZW1lOiBwb3N0VGhlbWVcblx0fTtcbn07XG5cbmNvbnN0IGdldFBvc3RUaGVtZSA9IChwb3N0Q2F0ZWdvcmllcykgPT4ge1xuXG5cdGxldCBwb3N0VGhlbWU7XG5cdGlmICh0aGVtZSkgcG9zdFRoZW1lID0gcG9zdENhdGVnb3JpZXMuZmluZChjYXQgPT4gY2F0LnNsdWcgPT09IHRoZW1lLnNsdWcpO1xuXG5cdGlmICghcG9zdFRoZW1lKSB7XG5cdFx0aWYgKHBvc3RDYXRlZ29yaWVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGNvbnN0IHRoZW1lUG9zdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3RDYXRlZ29yaWVzLmxlbmd0aCk7XG5cdFx0XHRwb3N0VGhlbWUgPSBwb3N0Q2F0ZWdvcmllc1t0aGVtZVBvc3RdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3N0VGhlbWUgPSBwb3N0Q2F0ZWdvcmllc1swXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcG9zdFRoZW1lO1xufTtcblxuY29uc3QgbG9hZFBvc3QgPSBhc3luYyAoe2lkLCBzbHVnfSkgPT4ge1xuXG5cdGxldCBwb3N0RGF0YTtcblxuXHRpZiAoaWQpIHtcblx0XHRwb3N0RGF0YSA9IGF3YWl0IHdwLnBvc3RzKCkuaWQoaWQpLmVtYmVkKCk7XG5cdH0gZWxzZSBpZiAoc2x1Zykge1xuXHRcdHBvc3REYXRhID0gYXdhaXQgd3AucG9zdHMoKS5zbHVnKHNsdWcpLmVtYmVkKCk7XG5cdFx0cG9zdERhdGEgPSBwb3N0RGF0YVswXTtcblx0fVxuXG5cdHJldHVybiBwb3N0RGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbG9zZVBhbmVsID0gYXN5bmMgKCkgPT4ge1xuXG5cdGF3YWl0IGNvbnRlbnRIVE1MLmhpZGVQYW5lbCh7XG5cdFx0YWN0aXZlUGFuZWwsXG5cdFx0ZGlyZWN0aW9uOiAndXAnXG5cdH0pO1xuXG5cdHNldEN1cnJlbnROb2RlKG51bGwpO1xuXHRnZW9kYXRhLnJlc2V0Tm9kZXNTdGF0ZSgpO1xuXG5cdHJldHVybiBjdXJyZW50Tm9kZTtcbn07XG5cblxuY29uc3Qgc2V0VGhlbWUgPSBhc3luYyByZXF1ZXN0ZWRUaGVtZVNsdWcgPT4ge1xuXG5cdGlmICghdGhlbWUpIHRoZW1lID0ge307XG5cblx0dGhlbWUuaXNOZXcgPSBmYWxzZTtcblx0XG5cdGlmKHRoZW1lLnNsdWcgIT0gcmVxdWVzdGVkVGhlbWVTbHVnKSB7XG5cdFx0Y29uc3QgcmVxdWVzdGVkVGhlbWUgPSBnZXRUaGVtZUJ5U2x1ZyhyZXF1ZXN0ZWRUaGVtZVNsdWcpO1xuXHRcdGNoYW5nZVN0YXRlKHJlcXVlc3RlZFRoZW1lLnN0YXRlKTtcblx0XHR0aGVtZSA9IHJlcXVlc3RlZFRoZW1lO1xuXHRcdHRoZW1lLmlzTmV3ID0gdHJ1ZTtcblx0fVxuXG5cdGlmICh0aGVtZS5zbHVnICE9ICdob21lJykge1xuXHRcdGF3YWl0IGNvbnRlbnRIVE1MLmhpZGVQYW5lbCh7XG5cdFx0XHRhY3RpdmVQYW5lbCxcblx0XHRcdGRpcmVjdGlvbjogJ3VwJ1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRyZXR1cm4gdGhlbWU7XG59O1xuXG5jb25zdCBnZXRDdXJyZW50VGhlbWUgPSAoKSA9PiB0aGVtZTtcbmNvbnN0IGdldFRoZW1lQnlTbHVnID0gc2x1ZyA9PiB0aGVtZXMuZmluZCggdGhlbWUgPT4gdGhlbWUuc2x1ZyA9PT0gc2x1ZyApO1xuXG5jb25zdCBjaGFuZ2VTdGF0ZSA9IGFzeW5jIG5ld1N0YXRlID0+IHtcblxuXHRpZiAobmV3U3RhdGUgIT0gdGhlbWUuc3RhdGUpIHtcblx0XHRpZiAobmV3U3RhdGUgPT09ICdob21lJykge1xuXHRcdFx0Y29udGVudEhUTUwuaGlkZVRvcE1lbnUoKTtcblx0XHRcdGF3YWl0IGNvbnRlbnRIVE1MLmhpZGVQYW5lbCh7XG5cdFx0XHRcdGFjdGl2ZVBhbmVsLFxuXHRcdFx0XHRkaXJlY3Rpb246ICd1cCdcblx0XHRcdH0pO1xuXHRcdFx0Y29udGVudEhUTUwuc2hvd0hvbWUoKTtcblx0XHR9IGVsc2UgaWYgKG5ld1N0YXRlID09PSAncGFnZScpIHtcblx0XHRcdGNvbnRlbnRIVE1MLmhpZGVIb21lKCk7XG5cdFx0XHRjb250ZW50SFRNTC5zaG93VG9wTWVudSgpO1xuXHRcdH1cblx0fVxuXHRcbn07XG5cbmNvbnN0IHVwZGF0ZU1hcCA9IGFzeW5jICh7bG9jYXRpb259KSA9PiB7XG5cblx0aWYgKCF0aGVtZSkgdGhlbWUgPSB0aGVtZXNbMF07XG5cblx0aWYoIW1hcC5pc01hcGJveExvYWRlZCgpKSB7XG5cdFx0aWYgKGxvY2F0aW9uID09PSAnNDA0Jykge1xuXHRcdFx0YXdhaXQgbWFwLmluaXQoe2xvY2F0aW9ufSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF3YWl0IG1hcC5pbml0KHRoZW1lKTtcblx0XHR9XG5cdFx0XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgbWFwLmNoYW5nZU1hcCh0aGVtZSk7XG5cdH1cblxuXHRhd2FpdCBnZW9kYXRhLmRyYXdOb2Rlcyh0aGVtZSk7XG5cbn07XG5cbmV4cG9ydCBjb25zdCB0YWdTZWFyY2ggPSB0YWcgPT4ge1xuXG5cdGdlb2RhdGEuZHJhd05vZGVCeVRhZyh0YWcpO1xuXHRtYXAuZmx5VG9PcmlnaW4oKTtcblx0Y29udGVudEhUTUwudXBkYXRlSGVhZGluZyh0YWcubmFtZSk7XG5cbn07XG5cbmNvbnN0IGNoYW5nZUJyb3dzZXJIaXN0b3J5ID0gKHt0aXRsZSxzbHVnfSkgPT4ge1xuXHRsZXQgcGFnZVRpdGxlID0gJ0dob3N0IFJpdmVyJztcblx0aWYgKHRpdGxlKSBwYWdlVGl0bGUgKz0gYCAtICR7dGl0bGV9YDtcblxuXHRkb2N1bWVudC50aXRsZSA9IHBhZ2VUaXRsZTtcblx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFxuXHRcdHtwYWdlVGl0bGV9LFxuXHRcdCcnLFxuXHRcdHNsdWcpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXRIb21lLFxuXHRzaG93UGFnZSxcblx0c2hvd1Bvc3QsXG5cdGNsb3NlUGFuZWwsXG5cdGdldEN1cnJlbnRUaGVtZSxcblx0Z2V0VGhlbWVCeVNsdWcsXG5cdHRhZ1NlYXJjaCxcblx0Y2hhbmdlQnJvd3Nlckhpc3RvcnksXG59O1xuIiwiaW1wb3J0IHtzZWxlY3QsIHNlbGVjdEFsbCwgZXZlbnR9IGZyb20gJ2QzL2Rpc3QvZDMubWluJztcbmltcG9ydCB7c2hvd1BhZ2UsIHNob3dQb3N0LCBjbG9zZVBhbmVsLCB0YWdTZWFyY2h9IGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQgdGhlbWVzIGZyb20gJy4vY29uZmlnL3RoZW1lcy5qc29uJztcbmltcG9ydCB7Z2V0SWNvbn0gZnJvbSAnLi90YWdzJztcblxuXG5jb25zdCBhbmltYXRpb24gPSB7XG5cdGR1cmF0aW9uSW46IDMwMDAsXG5cdGR1cmF0aW9uT3V0OiAyMDAwLFxuXHRkZWxheUluOiAxMDAwLFxuXHRkZWxheU91dDogMFxufTtcblxubGV0IG1haW5NZW51ID0gZmFsc2U7XG5sZXQgdG9wTWVudSA9IGZhbHNlO1xuXG5cbnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCdtYXAtYmcnKTtcblxuY29uc3QgaW5pdEhvbWUgPSAoKSA9PiB7XG5cblx0Ly8gc2VsZWN0KCcjaG9tZS10ZXh0Jylcblx0Ly8gXHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHQvLyBcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdC8vIFx0LnRyYW5zaXRpb24oKVxuXHQvLyBcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb25Jbilcblx0Ly8gXHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuXHQvLyBsZXQgZGVsYXkgPSAwO1xuXHRcblx0Ly8gZm9yIChjb25zdCB0aGVtZSBvZiB0aGVtZXMpIHtcblx0Ly8gXHRzZWxlY3QoYCNtYWluLSR7dGhlbWUuc2x1Z30tYnRgKVxuXHQvLyBcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0Ly8gXHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdC8vIFx0XHQudHJhbnNpdGlvbigpXG5cdC8vIFx0XHQuZGVsYXkoZGVsYXkpXG5cdC8vIFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uSW4pXG5cdC8vIFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0Ly8gXHRkZWxheSArPSAxMDAwO1xuXHQvLyB9XG5cblx0Y29uZmlnTWFpbk1lbnUoKTtcblxufTtcblxuY29uc3QgY29uZmlnTWFpbk1lbnUgPSAoKSA9PiB7XG5cblx0aWYgKG1haW5NZW51ID09PSBmYWxzZSkge1xuXHRcdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0XHRzZWxlY3QoYCNtYWluLSR7dGhlbWUuc2x1Z30tYnRgKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0XHR9XG5cdFx0bWFpbk1lbnUgPSB0cnVlO1xuXHR9XG5cbn07XG5cbmNvbnN0IGNvbmZpZ1RvcE1lbnUgPSAoKSA9PiB7XG5cblx0aWYgKHRvcE1lbnUgPT09IGZhbHNlKSB7XG5cdFx0Zm9yIChjb25zdCB0aGVtZSBvZiB0aGVtZXMpIHtcblx0XHRcdHNlbGVjdChgI3RvcC0ke3RoZW1lLnNsdWd9LWJ0YClcblx0XHRcdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiBzaG93UGFnZSh0aGVtZSkpO1xuXHRcdH1cblx0XHR0b3BNZW51ID0gdHJ1ZTtcblx0fVxuXG59O1xuXG5jb25zdCBzaG93SG9tZSA9ICgpID0+IHtcblxuXHRzZWxlY3QoJyNoZWFkZXItY29sJylcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoYW5pbWF0aW9uLmRlbGF5SWluKVxuXHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb25Jbilcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKVxuXHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsICcwcHgnKTtcblxuXHRzZWxlY3RBbGwoJy5jb2wtbWFpbi1tZW51Jylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheShhbmltYXRpb24uZGVsYXlJbilcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uSW4pXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnMHB4Jyk7XG5cblx0c2VsZWN0KCcjaG9tZS10ZXh0Jylcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0c2VsZWN0KGAjbWFpbi0ke3RoZW1lLnNsdWd9LWJ0YClcblx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0fVxuXG5cdGNvbmZpZ01haW5NZW51KCk7XG5cdHNob3dIb21lQkcoKTtcblx0aGlkZUhlYWRpbmcoKTtcblxufTtcblxuY29uc3QgaGlkZUhvbWUgPSAoKSA9PiB7XG5cdHNlbGVjdCgnI2hlYWRlci1jb2wnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uT3V0KVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJy01MDBweCcpXG5cdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0pO1xuXG5cdHNlbGVjdEFsbCgnLmNvbC1tYWluLW1lbnUnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uT3V0KVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJy0yMDBweCcpXG5cdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0pO1xuXG5cdGhpZGVIb21lQkcoKTtcblx0c2hvd0hlYWRpbmcoKTtcblxufTtcblxuY29uc3Qgc2hvd0hvbWVCRyA9ICgpID0+IHtcblxuXHRzZWxlY3QoJyNtYXAtYmcnKVxuXHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheShhbmltYXRpb24uZGVsYXlJbilcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uSW4pXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cbn07XG5cbmNvbnN0IGhpZGVIb21lQkcgPSAoKSA9PiB7XG5cblx0c2VsZWN0KCcjbWFwLWJnJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbk91dClcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9KTtcblxufTtcblxuY29uc3Qgc2hvd1RvcE1lbnUgPSAoKSA9PiB7XG5cblx0c2VsZWN0KCcjdG9wLW1lbnUnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCd0b3AnLCAtMjAwKVxuXHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheShhbmltYXRpb24uZGVsYXlJbilcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uSW4pXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHQuc3R5bGUoJ3RvcCcsIDApO1xuXG5cdGNvbmZpZ1RvcE1lbnUoKTtcblxufTtcblxuY29uc3QgaGlkZVRvcE1lbnUgPSAoKSA9PiB7XG5cblx0c2VsZWN0KCcjdG9wLW1lbnUnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoMClcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uT3V0KVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCd0b3AnLCAtMjAwKVxuXHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9KTtcblx0XHRcbn07XG5cbmNvbnN0IHNob3dQYW5lbCA9ICh7YWN0aXZlUGFuZWwgPSAnbGVmdC1wYW5lbCcsIGRpcmVjdGlvbiA9ICdub25lJywgZGVsYXkgPSAwfSkgPT4ge1xuXG5cdGlmIChkaXJlY3Rpb24gPT09ICdub25lJykge1xuXHRcdGRpcmVjdGlvbiA9ICcwcHgnO1xuXHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuXHRcdGRpcmVjdGlvbiA9ICctMjAwMHB4Jztcblx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuXHRcdGRpcmVjdGlvbiA9ICcyMDAwcHgnO1xuXHR9XG5cblx0aWYgKGFjdGl2ZVBhbmVsID09PSAnZnVsbC1wYW5lbCcpIHtcblx0XHRzZWxlY3QoJyNmdWxsLXBhbmVsJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmRlbGF5KGRlbGF5KVxuXHRcdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbkluKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsICcwcHgnKTtcblxuXHRcdHNlbGVjdCgnI2Z1bGwtcGFuZWwnKS5zZWxlY3QoJy5mbC1jb2wtY29udGVudCcpLnByb3BlcnR5KCdzY3JvbGxUb3AnLCAwKTtcblx0XHRzaG93SG9tZUJHKCk7XG5cblx0fSBlbHNlIHtcblxuXHRcdHNlbGVjdCgnI2xlZnQtcGFuZWwnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsIGRpcmVjdGlvbilcblx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZGVsYXkoZGVsYXkpXG5cdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uSW4pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJzBweCcpO1xuXG5cdFx0c2VsZWN0KCcjbWlkZGxlLXBhbmVsJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmRlbGF5KGRlbGF5KVxuXHRcdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbkluKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsICcwcHgnKTtcblxuXHRcdHNlbGVjdCgnI3JpZ2h0LXBhbmVsJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmRlbGF5KGRlbGF5KVxuXHRcdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbkluKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsICcwcHgnKTtcblxuXHRcdHNlbGVjdCgnI3JpZ2h0LXBhbmVsJykuc2VsZWN0KCcuZmwtY29sLWNvbnRlbnQnKS5wcm9wZXJ0eSgnc2Nyb2xsVG9wJywgMCk7XG5cblx0fVxuXG59O1xuXG5jb25zdCBoaWRlUGFuZWwgPSBhc3luYyAoe2FjdGl2ZVBhbmVsID0gJ3JpZ2h0LXBhbmVsJywgZGlyZWN0aW9uID0gJ25vbmUnfSkgPT4ge1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuXHRcdGlmIChkaXJlY3Rpb24gPT09ICdub25lJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJzBweCc7XG5cdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcblx0XHRcdGRpcmVjdGlvbiA9ICctMjAwMHB4Jztcblx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG5cdFx0XHRkaXJlY3Rpb24gPSAnMjAwMHB4Jztcblx0XHR9XG5cblx0XHRpZiAoYWN0aXZlUGFuZWwgPT09ICdmdWxsLXBhbmVsJykge1xuXHRcdFx0c2VsZWN0KCcjZnVsbC1wYW5lbCcpXG5cdFx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdFx0LmRlbGF5KDApXG5cdFx0XHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb25PdXQpXG5cdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsIGRpcmVjdGlvbilcblx0XHRcdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRoaWRlSG9tZUJHKCk7XG5cblx0XHR9IGVsc2Uge1xuXHRcblx0XHRcdHNlbGVjdCgnI2xlZnQtcGFuZWwnKVxuXHRcdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHRcdC5kZWxheSgwKVxuXHRcdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uT3V0KVxuXHRcdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0XHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRzZWxlY3QoJyNtaWRkbGUtcGFuZWwnKVxuXHRcdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHRcdC5kZWxheSgwKVxuXHRcdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uT3V0KVxuXHRcdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0XHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRzZWxlY3QoJyNyaWdodC1wYW5lbCcpXG5cdFx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdFx0LmRlbGF5KDApXG5cdFx0XHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb25PdXQpXG5cdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsIGRpcmVjdGlvbilcblx0XHRcdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0fVxuXHRcdFxuXHR9KTtcblxufTtcblxuY29uc3Qgc2hvd0hlYWRpbmcgPSAoKSA9PiB7XG5cblx0bGV0IGhlYWRpbmcgPSBzZWxlY3QoJyNtYXAtaGVhZGluZycpO1xuXG5cdGlmIChoZWFkaW5nLmVtcHR5KCkpIHtcblx0XHRoZWFkaW5nID0gc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuXHRcdFx0LmF0dHIoJ2lkJywnbWFwLWhlYWRpbmcnKTtcblx0XHRoZWFkaW5nLmFwcGVuZCgnaDMnKTtcblx0fVxuXG5cdGhlYWRpbmcuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb25Jbilcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuXHRyZXR1cm4gaGVhZGluZztcbn07XG5cbmNvbnN0IGhpZGVIZWFkaW5nID0gKCkgPT4ge1xuXG5cdGNvbnN0IGhlYWRpbmcgPSBzZWxlY3QoJyNtYXAtaGVhZGluZycpO1xuXG5cdGlmICghaGVhZGluZy5lbXB0eSgpKSB7XG5cdFx0aGVhZGluZy50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb25Jbilcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdH0pO1xuXHR9XG5cbn07XG5cbmNvbnN0IHVwZGF0ZUhlYWRpbmcgPSB0aXRsZSA9PiB7XG5cblx0aWYgKHRpdGxlLnRvTG93ZXJDYXNlKCkgPT09ICdhYm91dCcpIHRpdGxlID0gJyc7XG5cblx0bGV0IGhlYWRpbmcgPSBzZWxlY3QoJyNtYXAtaGVhZGluZycpO1xuXHRpZiAoaGVhZGluZy5lbXB0eSgpKSBoZWFkaW5nID0gc2hvd0hlYWRpbmcoKTtcblxuXHRoZWFkaW5nLnNlbGVjdCgnaDMnKS5odG1sKHRpdGxlKTtcblxufTtcblxuY29uc3QgdXBkYXRlUGFnZSA9IChhY3RpdmVQYW5lbCwge3RpdGxlLCBjb250ZW50fSkgPT4ge1xuXG5cdC8vZG9tIG1hbmlwdWxhdGlvblxuXHRjb25zdCBwYW5lbCA9IHNlbGVjdChgIyR7YWN0aXZlUGFuZWx9YCk7XG5cdHBhbmVsLnNlbGVjdCgnLnRhZ2xpbmUnKS5zZWxlY3QoJy5mbC1oZWFkaW5nLXRleHQnKS5odG1sKCcnKTtcblx0cGFuZWwuc2VsZWN0KCcjY2xvc2UtcGFuZWwnKS5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKS5vbignY2xpY2snLCBjbG9zZVBhbmVsKTtcblx0cGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10aXRsZScpLnNlbGVjdCgnLmZsLWhlYWRpbmctdGV4dCcpLmh0bWwodGl0bGUucmVuZGVyZWQpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLWNvbnRlbnQnKS5zZWxlY3QoJy5mbC1yaWNoLXRleHQnKS5odG1sKGNvbnRlbnQucmVuZGVyZWQpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLXRhZ3MnKS5zZWxlY3QoJy5mbC1odG1sJykuaHRtbCgnJyk7XG5cdGNhcHR1cmVMaW5rcygpO1xuXG5cdHVwZGF0ZUhlYWRpbmcodGl0bGUucmVuZGVyZWQpO1xuXG59O1xuXG5jb25zdCB1cGRhdGVQb3N0ID0gKHt0aXRsZSwgY29udGVudH0sIHRhZ3MsIHRoZW1lKSA9PiB7XG5cblx0Ly9ET00gbWFuaXB1bGF0aW9uXG5cdGNvbnN0IHBhbmVsID0gc2VsZWN0KCcjcmlnaHQtcGFuZWwnKTtcblxuXHRwYW5lbC5zZWxlY3QoJy50YWdsaW5lJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCh0aGVtZS5zbHVnKTtcblx0cGFuZWwuc2VsZWN0KCcjY2xvc2UtcGFuZWwnKS5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKS5vbignY2xpY2snLCBjbG9zZVBhbmVsKTtcblx0cGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10aXRsZScpLnNlbGVjdCgnLmZsLWhlYWRpbmctdGV4dCcpLmh0bWwodGl0bGUucmVuZGVyZWQpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLWNvbnRlbnQnKS5zZWxlY3QoJy5mbC1yaWNoLXRleHQnKS5odG1sKGNvbnRlbnQucmVuZGVyZWQpO1xuXG5cdC8vdGFnc1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLXRhZ3MnKS5zZWxlY3QoJy5mbC1odG1sJykuaHRtbCgnJyk7XG5cblx0Y29uc3QgdGFnc0RJViA9IHBhbmVsLnNlbGVjdCgnI2FydGljbGUtdGFncycpLnNlbGVjdCgnLmZsLWh0bWwnKVxuXHRcdC5hcHBlbmQoJ2RpdicpXG5cdFx0LmF0dHIoJ2lkJywndGFnLWNvbnRhaW5lcicpO1xuXG5cdGNvbnN0IHRhZ3NIVE1MID0gdGFnc0RJVi5zZWxlY3RBbGwoJy5jaXJjbGUnKVxuXHRcdC5kYXRhKHRhZ3MpO1xuXG5cdHRhZ3NIVE1MLmV4aXQoKVxuXHRcdC5hdHRyKCdjbGFzcycsICdleGl0Jylcblx0XHQucmVtb3ZlKCk7XG5cblx0dGFnc0hUTUwuZW50ZXIoKS5hcHBlbmQoJ2RpdicpXG5cdFx0LmF0dHIoJ2lkJywgIHRhZyA9PiBgdGFnLSR7dGFnLnNsdWd9YClcblx0XHQuYXR0cignY2xhc3MnLCAndGFnLXBpbGwnKVxuXHRcdC5odG1sKCB0YWcgPT4ge1xuXHRcdFx0Y29uc3QgaWNvbiA9IGdldEljb24odGFnKTtcblx0XHRcdHJldHVybiBgJHtpY29ufSAke3RhZy5uYW1lfWA7XG5cdFx0fSlcblx0XHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnY29sb3InLCAnc3RlZWxibHVlJyk7XG5cdFx0fSlcblx0XHQub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2NvbG9yJywgJyM1MzUzNTQnKTtcblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCBkID0+IHRhZ1NlYXJjaChkKSk7XG5cdFx0XG5cdC8vcmVzaXplIHRhZyBpY29uc1xuXHR0YWdzRElWLnNlbGVjdEFsbCgnc3ZnJykuYXR0cignd2lkdGgnLCcxNXB4JykuYXR0cignaGVpZ2h0JywnMTVweCcpO1xuXG5cdGNhcHR1cmVMaW5rcygpO1xuXG59O1xuXG5jb25zdCBjYXB0dXJlTGlua3MgPSAoKSA9PiB7XG5cblx0c2VsZWN0QWxsKCdhJylcblx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHQvL2dldCB1cmwgLy8gZG9tYWluXG5cdFx0XHRjb25zdCBsaW5rID0gc2VsZWN0KHRoaXMpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdGNvbnN0IGRvbWFpbiA9IGxpbmsuc3BsaXQoJy8nKVsyXTtcblxuXHRcdFx0Ly9UZXN0IGlmIGl0IGlzIGEgbG9jYWwgbGluayAobG9jYWxob3N0IC0+IHJlbW90ZSlcblx0XHRcdGNvbnN0IGhvc3QgPSAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JykgPyAnbGFicy5mbHV4by5hcnQuYnInIDogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuXG5cdFx0XHQvL2lmIGV4dHJybmFsLCBuYXZpZ2F0ZVxuXHRcdFx0aWYgKGRvbWFpbiAhPSBob3N0KSByZXR1cm47IC8vd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lXG5cblx0XHRcdC8vaWYgbG9jYWwsIHByZXZlbnQgcGFnZSB1cGRhdGVcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdC8vbG9hZCBwb3N0IGJhc2VkIG9uIHNsdWcgb24gdGhlIHVybFxuXHRcdFx0Y29uc3Qgc2x1ZyA9IGxpbmsuc3BsaXQoJy8nKVs0XTtcblxuXHRcdFx0c2hvd1Bvc3Qoe3NsdWd9KTtcblx0XHR9KTtcblxufTtcblxuY29uc3Qgc2hvd1NwaW5uZXIgPSAoKSA9PiB7XG5cblx0c2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuXHRcdC5hdHRyKCdpZCcsICdzcGlubmVyJylcblx0XHQuaHRtbCgnPGRpdiBjbGFzcz1cImxkcy1yaXBwbGVcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+Jyk7XG5cbn07XG5cbmNvbnN0IGhpZGVTcGlubmVyID0gKCkgPT4gc2VsZWN0KCcjc3Bpbm5lcicpLnJlbW92ZSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdEhvbWUsXG5cdGNvbmZpZ01haW5NZW51LFxuXHRjb25maWdUb3BNZW51LFxuXHRzaG93SG9tZSxcblx0aGlkZUhvbWUsXG5cdHNob3dUb3BNZW51LFxuXHRoaWRlVG9wTWVudSxcblx0c2hvd0hlYWRpbmcsXG5cdGhpZGVIZWFkaW5nLFxuXHR1cGRhdGVIZWFkaW5nLFxuXHRzaG93UGFuZWwsXG5cdGhpZGVQYW5lbCxcblx0dXBkYXRlUGFnZSxcblx0dXBkYXRlUG9zdCxcblx0c2hvd1NwaW5uZXIsXG5cdGhpZGVTcGlubmVyXG59OyIsImltcG9ydCB7c2VsZWN0LCBnZW9UcmFuc2Zvcm0sIGdlb1BhdGh9IGZyb20gJ2QzL2Rpc3QvZDMubWluJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcblxuaW1wb3J0IG1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgY29udGVudCBmcm9tICcuL2NvbnRlbnQnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZy5qc29uJztcbmltcG9ydCBoaXN0b3JpY2FsUml2ZWwgZnJvbSAnLi9kYXRhL2hpc3RvcmljYWwuanNvbic7XG5cblxuY29uc3QgaGlzdG9yaWNhbFJpdmVyU2NhbGUgPSBjaHJvbWEuc2NhbGUoWyd2aW9sZXQnLCdpbmRpZ28nLCdibHVlJywnZ3JlZW4nXSkuZG9tYWluKFsxLDddKTtcblxubGV0IEQzZ2VvUGF0aDtcbmxldCBzdmc7XG5sZXQgZGF0YXNldDtcbmxldCBub2Rlc1BvaW50O1xubGV0IG5vZGVzTGluZTtcbmxldCBub2Rlc1BveWdvbjtcblxuXG5jb25zdCBpbml0ID0gYXN5bmMgY2FudmFzID0+IHtcblxuXHRjb25zdCBEM2dlb1RyYW5zZm9ybSA9IGdlb1RyYW5zZm9ybSh7cG9pbnQ6bWFwLnByb2plY3RQb2ludH0pO1xuXHREM2dlb1BhdGggPSBnZW9QYXRoKCkucHJvamVjdGlvbihEM2dlb1RyYW5zZm9ybSk7XG5cblx0Ly8gT3ZlcmxheSBkMyBvbiB0aGUgbWFwYm94IGNhbnZhc1xuXHRzdmcgPSBzZWxlY3QoY2FudmFzKS5hcHBlbmQoJ3N2ZycpXG5cdFx0LmF0dHIoJ2lkJywgJ21hcC1ib3gtdmlzJylcblx0XHQuYXR0cignaGVpZ2h0JywgJzEwMCUnKTtcblxuXG5cdHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdwb2x5Z29ucy1jb250YWluZXInKTtcblx0c3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ2xpbmVzLWNvbnRhaW5lcicpO1xuXHRzdmcuYXBwZW5kKCdnJykuYXR0cignaWQnLCAncG9pbnRzLWNvbnRhaW5lcicpO1xuXG59O1xuXG5jb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBkYXRhVVJMID0gYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vZGF0YXNldHMvdjEvJHtjb25maWcubWFwYm94LnVzZXJ9LyR7Y29uZmlnLm1hcC5kYXRhc2V0fS9mZWF0dXJlcz9hY2Nlc3NfdG9rZW49JHtjb25maWcubWFwYm94LnRva2VufWA7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVVSTCk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdGRhdGFzZXQgPSBkYXRhLmZlYXR1cmVzO1xuXG5cdGRhdGFzZXQgPSBkYXRhc2V0LmNvbmNhdChoaXN0b3JpY2FsUml2ZWwuZmVhdHVyZXMpO1xuXHRcblx0cmV0dXJuIGRhdGFzZXQ7XG59O1xuXG5jb25zdCBkcmF3Tm9kZXMgPSBhc3luYyAoe3NsdWc6IHRoZW1lfSkgPT4ge1xuXG5cdGlmICghZGF0YXNldCkgYXdhaXQgbG9hZERhdGEoKTtcblxuXHRjb25zdCB0aGVtZU5vZGVzID0gZ2V0VGhlbWVOb2Rlcyh0aGVtZSk7XG5cblx0Y29uc3QgcG9pbnRzID0gdGhlbWVOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpO1xuXHRjb25zdCBsaW5lcyA9IHRoZW1lTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnTGluZVN0cmluZycpO1xuXHRjb25zdCBwb2x5Z29ucyA9IHRoZW1lTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnUG9seWdvbicpO1xuXG5cdGRyYXdQb2x5Z2lucyh7ZGF0YTpwb2x5Z29uc30pO1xuXHRkcmF3TGluZXMoe2RhdGE6bGluZXN9KTtcblx0ZHJhd1BvaW50cyh7ZGF0YTpwb2ludHN9KTtcblxufTtcblxuY29uc3QgZHJhd05vZGVCeVRhZyA9IGFzeW5jICh7bmFtZTogdGFnfSkgPT4ge1xuXG5cdGNvbnN0IHRhZ05vZGVzID0gZ2V0VGFnTm9kZXModGFnKTtcblxuXHRjb25zdCBwb2ludHMgPSB0YWdOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpO1xuXHRjb25zdCBsaW5lcyA9IHRhZ05vZGVzLmZpbHRlcihuID0+IG4uZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmVTdHJpbmcnKTtcblx0Y29uc3QgcG9seWdvbnMgPSB0YWdOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdQb2x5Z29uJyk7XG5cblx0ZHJhd1BvbHlnaW5zKHtkYXRhOnBvbHlnb25zfSk7XG5cdGRyYXdMaW5lcyh7ZGF0YTpsaW5lc30pO1xuXHRkcmF3UG9pbnRzKHtkYXRhOnBvaW50c30pO1xuXG59O1xuXG5jb25zdCBnZXRUaGVtZU5vZGVzID0gdGhlbWUgPT4ge1xuXG5cdGNvbnN0IHNlbGVjdGVkTm9kZXMgPSBkYXRhc2V0LmZpbHRlciggbm9kZSA9PiB7XG5cdFx0aWYobm9kZS5wcm9wZXJ0aWVzLnRoZW1lKSB7XG5cdFx0XHRjb25zdCBub2RldGhlbWVzID0gbm9kZS5wcm9wZXJ0aWVzLnRoZW1lLnNwbGl0KCcsICcpO1xuXHRcdFx0Y29uc3QgdGhlbWVOb2RlID0gbm9kZXRoZW1lcy5maWx0ZXIodCA9PiB0LnRvTG93ZXJDYXNlKCkgPT09IHRoZW1lKTtcblx0XHRcdGlmICh0aGVtZU5vZGUubGVuZ3RoID4gMCkgcmV0dXJuIG5vZGU7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gc2VsZWN0ZWROb2Rlcztcbn07XG5cbmNvbnN0IGdldFRhZ05vZGVzID0gdGFnID0+IHtcblxuXHRjb25zdCBzZWxlY3RlZE5vZGVzID0gZGF0YXNldC5maWx0ZXIoIG5vZGUgPT4ge1xuXHRcdGlmIChub2RlLnByb3BlcnRpZXMudGFnKSB7XG5cdFx0XHRjb25zdCBub2RlVGFncyA9IG5vZGUucHJvcGVydGllcy50YWcuc3BsaXQoJywgJyk7XG5cdFx0XHRjb25zdCB0YWdOb2RlID0gbm9kZVRhZ3MuZmlsdGVyKHQgPT4gdC50b0xvd2VyQ2FzZSgpID09PSB0YWcudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRpZiAodGFnTm9kZS5sZW5ndGggPiAwKSByZXR1cm4gbm9kZTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBzZWxlY3RlZE5vZGVzO1xufTtcblxuY29uc3QgZ2V0Tm9kZUNvb3JkaW5hdGVzID0gYXN5bmMgKHtpZH0pID0+IHtcblxuXHRpZiAoIWRhdGFzZXQpIGF3YWl0IGxvYWREYXRhKCk7XG5cdGNvbnN0IGl0ZW0gPSBkYXRhc2V0LmZpbmQoIGl0ZW0gPT4gaXRlbS5wcm9wZXJ0aWVzLmlkID09PSBpZCApO1xuXG5cdGlmICghaXRlbSkgcmV0dXJuIGNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXI7IC8vIHJldHVybiBjZW50ZXIgb2YgbWFwXG5cblx0aWYgKGl0ZW0uZ2VvbWV0cnkudHlwZSA9PT0gJ1BvaW50JykgcmV0dXJuIGl0ZW0uZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG5cdGNvbnN0IGNvb3JkaW5hdGVzID0gaXRlbS5nZW9tZXRyeS5jb29yZGluYXRlc1swXTtcblxuXHRyZXR1cm4gY29vcmRpbmF0ZXM7XG59O1xuXG5jb25zdCBnZXRDb2xvdXJzID0gKCkgPT4ge1xuXG5cdGNvbnN0IHRoZW1lID0gY29udGVudC5nZXRDdXJyZW50VGhlbWUoKTtcblxuXHRjb25zdCBjb2xvcnMgPSB7XG5cdFx0cml2ZXI6ICcjMDA3MWJjJ1xuXHR9O1xuXG5cdGlmICh0aGVtZS5zbHVnID09PSAnZW52aXJvbm1lbnQnKSB7XG5cdFx0Y29sb3JzLmZpbGwgPSAnI0ZGREUxNyc7XG5cdFx0Y29sb3JzLnN0cm9rZSA9ICcjOEI1RTNDJztcblx0fSBlbHNlIGlmICh0aGVtZS5zbHVnID09PSAnd2F0ZXInKSB7XG5cdFx0Y29sb3JzLmZpbGwgPSAnI2ZlZmVmZSc7XG5cdFx0Y29sb3JzLnN0cm9rZSA9ICcjNjUyZTAwJztcblx0fSBlbHNlIGlmICh0aGVtZS5zbHVnID09PSAnc3RlcHMnKSB7XG5cdFx0Y29sb3JzLmZpbGwgPSAnI0YxNUEyOSc7XG5cdFx0Y29sb3JzLnN0cm9rZSA9ICcjRjE1QTI5Jztcblx0fVxuXG5cdHJldHVybiBjb2xvcnM7XG59O1xuXG5jb25zdCBkcmF3UG9pbnRzID0gICh7ZGF0YSwgdHJhbnNpdGlvblRpbWUgPSAxMDAwLCBkZWxheVRpbWUgPSAyMDB9KSA9PiB7XG5cblx0Y29uc3QgY29sb3VycyA9IGdldENvbG91cnMoKTtcblx0XG5cdG5vZGVzUG9pbnQgPSBzdmcuc2VsZWN0KCcjcG9pbnRzLWNvbnRhaW5lcicpLnNlbGVjdEFsbCgnLmNpcmNsZScpXG5cdFx0LmRhdGEoZGF0YSk7XG5cblx0bm9kZXNQb2ludC5leGl0KClcblx0XHQuYXR0cignY2xhc3MnLCAnZXhpdCcpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbig1MDApXG5cdFx0LmF0dHIoJ3InLCAwKVxuXHRcdC5yZW1vdmUoKTtcblxuXHRub2Rlc1BvaW50LmVudGVyKCkuYXBwZW5kKCdjaXJjbGUnKVxuXHRcdC5hdHRyKCdjbGFzcycsICdjaXJjbGUnKTtcblxuXHRub2Rlc1BvaW50ID0gc3ZnLnNlbGVjdEFsbCgnLmNpcmNsZScpXG5cdFx0LmF0dHIoJ2lkJywgZCA9PiBgaW5kZXgtJHtkLnByb3BlcnRpZXMuaWR9YClcblx0XHQuYXR0cignY3gnLCBkID0+IG1hcC5wcm9qZWN0KGQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpLngpXG5cdFx0LmF0dHIoJ2N5JywgZCA9PiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS55KVxuXHRcdC5hdHRyKCdyJywgMClcblx0XHQuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcblx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIpXG5cdFx0LnN0eWxlKCdzdHJva2UnLCAoKSA9PiBjaHJvbWEoY29sb3Vycy5zdHJva2UpLmhleCgpKVxuXHRcdC5zdHlsZSgnZmlsbCcsICgpID0+IGNocm9tYShjb2xvdXJzLmZpbGwpLmFscGhhKDAuNykuaGV4KCkpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMC4xKVxuXHRcdC5vbignbW91c2VvdmVyJywgZCA9PiBub2Rlc092ZXIoZCkpXG5cdFx0Lm9uKCdtb3VzZW91dCcsICgpID0+IG5vZGVzT3V0KCkpXG5cdFx0Lm9uKCdjbGljaycsIGQgPT4ge1xuXHRcdFx0cmVzZXROb2Rlc1N0YXRlKGQpO1xuXHRcdFx0Y29udGVudC5zaG93UG9zdChkLnByb3BlcnRpZXMpO1xuXHRcdH0pO1xuXHRcdFxuXHRcblx0bm9kZXNQb2ludC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0LmRlbGF5KChkLCBpKSA9PiBkZWxheVRpbWUgKiBpKVxuXHRcdC5hdHRyKCdyJywgOClcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxufTtcblxuY29uc3QgZHJhd0xpbmVzID0gICh7ZGF0YSwgdHJhbnNpdGlvblRpbWUgPSAxMDAwLCBkZWxheVRpbWUgPSAyMDB9KSA9PiB7XG5cblx0Y29uc3QgY29sb3VycyA9IGdldENvbG91cnMoKTtcblxuXHRub2Rlc0xpbmUgPSBzdmcuc2VsZWN0KCcjbGluZXMtY29udGFpbmVyJykuc2VsZWN0QWxsKCcubGluZScpXG5cdFx0LmRhdGEoZGF0YSk7XG5cblx0bm9kZXNMaW5lLmV4aXQoKVxuXHRcdC5hdHRyKCdjbGFzcycsICdleGl0Jylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKDUwMClcblx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgMClcblx0XHQucmVtb3ZlKCk7XG5cblx0bm9kZXNMaW5lLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcblx0XHQuYXR0cignY2xhc3MnLCAnbGluZScpO1xuXG5cdG5vZGVzTGluZSA9IHN2Zy5zZWxlY3RBbGwoJy5saW5lJylcblx0XHQuYXR0cignaWQnLCBkID0+IGQucHJvcGVydGllcy5pZClcblx0XHQuYXR0cignZCcsIEQzZ2VvUGF0aClcblx0XHQuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcblx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDApXG5cdFx0LnN0eWxlKCdzdHJva2UnLCBkID0+IHtcblx0XHRcdGlmIChkLnByb3BlcnRpZXMubmFtZSA9PT0gJ1NhaW50LVBpZXJyZSBTcGVjdWxhdGl2ZSBSaXZlcicpIHJldHVybiBjaHJvbWEoY29sb3Vycy5yaXZlcikuaGV4KCk7XG5cdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLnR5cGUgPT09ICdoaXN0b3JpY2FsJykgcmV0dXJuIGhpc3RvcmljYWxSaXZlclNjYWxlKGQucHJvcGVydGllcy5jb2xvcikuYWxwaGEoLjgpLmhleCgpO1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLnN0cm9rZSkuaGV4KCk7XG5cdFx0fSlcblx0XHQuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMC4xKVxuXHRcdC5vbignbW91c2VvdmVyJywgZCA9PiBub2Rlc092ZXIoZCkpXG5cdFx0Lm9uKCdtb3VzZW91dCcsICgpID0+IG5vZGVzT3V0KCkpXG5cdFx0Lm9uKCdjbGljaycsIGQgPT4ge1xuXHRcdFx0Y29uc3QgdGhlbWUgPSBjb250ZW50LmdldEN1cnJlbnRUaGVtZSgpO1xuXHRcdFx0aWYgKGQucHJvcGVydGllcy5uYW1lID09PSAnU2FpbnQtUGllcnJlIFNwZWN1bGF0aXZlIFJpdmVyJyAmJiB0aGVtZS5zbHVnICE9PSAnc3RlcHMnKSByZXR1cm47XG5cdFx0XHRyZXNldE5vZGVzU3RhdGUoZCk7XG5cdFx0XHRjb250ZW50LnNob3dQb3N0KGQucHJvcGVydGllcyk7XG5cdFx0fSk7XG5cblx0bm9kZXNMaW5lLnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHQuZGVsYXkoKGQsIGkpID0+IGRlbGF5VGltZSAqIGkpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG59O1xuXG5jb25zdCBkcmF3UG9seWdpbnMgPSAgKHtkYXRhLCB0cmFuc2l0aW9uVGltZSA9IDEwMDAsIGRlbGF5VGltZSA9IDIwMH0pID0+IHtcblxuXHRjb25zdCBjb2xvdXJzID0gZ2V0Q29sb3VycygpO1xuXG5cdG5vZGVzUG95Z29uID0gc3ZnLnNlbGVjdCgnI3BvbHlnb25zLWNvbnRhaW5lcicpLnNlbGVjdEFsbCgnLnBvbHlnb25zJylcblx0XHQuZGF0YShkYXRhKTtcblxuXHRub2Rlc1BveWdvbi5leGl0KClcblx0XHQuYXR0cignY2xhc3MnLCAnZXhpdCcpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbig1MDApXG5cdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsIDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQucmVtb3ZlKCk7XG5cblx0bm9kZXNQb3lnb24uZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuXHRcdC5hdHRyKCdjbGFzcycsICdwb2x5Z29ucycpO1xuXG5cdG5vZGVzUG95Z29uID0gc3ZnLnNlbGVjdEFsbCgnLnBvbHlnb25zJylcblx0XHQuYXR0cignaWQnLCBkID0+IGQucHJvcGVydGllcy5pZClcblx0XHQuYXR0cignZCcsIEQzZ2VvUGF0aClcblx0XHQuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcblx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDApXG5cdFx0LnN0eWxlKCdzdHJva2UnLCAoKSA9PiBjaHJvbWEoY29sb3Vycy5zdHJva2UpLmhleCgpKVxuXHRcdC5zdHlsZSgnZmlsbCcsICgpID0+IGNocm9tYShjb2xvdXJzLmZpbGwpLmFscGhhKDAuNykuaGV4KCkpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMC4xKVxuXHRcdC5vbignbW91c2VvdmVyJywgZCA9PiBub2Rlc092ZXIoZCkpXG5cdFx0Lm9uKCdtb3VzZW91dCcsICgpID0+IG5vZGVzT3V0KCkpXG5cdFx0Lm9uKCdjbGljaycsIGQgPT4ge1xuXHRcdFx0cmVzZXROb2Rlc1N0YXRlKGQpO1xuXHRcdFx0Y29udGVudC5zaG93UG9zdChkLnByb3BlcnRpZXMpO1xuXHRcdH0pO1xuXG5cdG5vZGVzUG95Z29uLnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHQuZGVsYXkoKGQsIGkpID0+IGRlbGF5VGltZSAqIGkpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG59O1xuXG5jb25zdCBub2Rlc1VwZGF0ZSA9ICgpID0+IHtcblx0XG5cdGlmIChub2Rlc1BvaW50KSB7XG5cdFx0bm9kZXNQb2ludC5hdHRyKCdjeCcsIGQgPT4gbWFwLnByb2plY3QoZC5nZW9tZXRyeS5jb29yZGluYXRlcykueClcblx0XHRcdC5hdHRyKCdjeScsIGQgPT4gbWFwLnByb2plY3QoZC5nZW9tZXRyeS5jb29yZGluYXRlcykueSk7XG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSBub2Rlc0xpbmUuYXR0cignZCcsIEQzZ2VvUGF0aCk7XG5cdGlmIChub2Rlc1BveWdvbikgbm9kZXNQb3lnb24uYXR0cignZCcsIEQzZ2VvUGF0aCk7XG5cdFxufTtcblxuY29uc3Qgbm9kZXNPdmVyID0gY3VycmVudCA9PiB7XG5cblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50XG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCBkID0+IHtcblx0XHRcdFx0aWYgKGQgIT09IGN1cnJlbnQpIHJldHVybiAwLjU7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCBkID0+IHtcblx0XHRcdFx0aWYgKGQgPT09IGN1cnJlbnQpIHJldHVybiAzO1xuXHRcdFx0fSk7XG5cblx0fVxuXG5cdGlmIChub2Rlc0xpbmUpIHtcblx0XHRub2Rlc0xpbmVcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIGQgPT4ge1xuXHRcdFx0XHRpZiAoY3VycmVudC5wcm9wZXJ0aWVzLmNvbG9yICYmIGQucHJvcGVydGllcy5jb2xvciA9PT0gY3VycmVudC5wcm9wZXJ0aWVzLmNvbG9yKSByZXR1cm47XG5cdFx0XHRcdGlmIChkLnByb3BlcnRpZXMubmFtZSAhPT0gY3VycmVudC5wcm9wZXJ0aWVzLm5hbWUpIHJldHVybiAwLjU7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCBkID0+IHtcblx0XHRcdFx0aWYgKGN1cnJlbnQucHJvcGVydGllcy5jb2xvciAmJiBkLnByb3BlcnRpZXMuY29sb3IgPT09IGN1cnJlbnQucHJvcGVydGllcy5jb2xvcikgcmV0dXJuIDM7XG5cdFx0XHRcdGlmIChkLnByb3BlcnRpZXMubmFtZSA9PT0gY3VycmVudC5wcm9wZXJ0aWVzLm5hbWUpIHJldHVybiAzO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpZiAobm9kZXNQb3lnb24pIHtcblx0XHRub2Rlc1BveWdvblxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgZCA9PiB7XG5cdFx0XHRcdGlmIChkICE9PSBjdXJyZW50KSByZXR1cm4gMC41O1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZCA9PiB7XG5cdFx0XHRcdGlmIChkID09PSBjdXJyZW50KSByZXR1cm4gMztcblx0XHRcdH0pO1xuXHR9XG5cbn07IFxuXG5jb25zdCBub2Rlc091dCA9ICgpID0+IHtcblxuXHRpZiAobm9kZXNQb2ludCkge1xuXHRcdG5vZGVzUG9pbnQuc3R5bGUoJ29wYWNpdHknLCAxKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKTtcblx0fVxuXHRpZiAobm9kZXNMaW5lKSB7XG5cdFx0bm9kZXNMaW5lLnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMik7XG5cdH1cblx0aWYgKG5vZGVzUG95Z29uKSB7XG5cdFx0bm9kZXNQb3lnb24uc3R5bGUoJ29wYWNpdHknLCAxKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKTtcblx0fVxuXG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXROb2Rlc1N0YXRlID0gKHt0cmFuc2l0aW9uVGltZSA9IDIwMDAsIGRlbGF5VGltZSA9IDEwMH0pID0+IHtcblxuXHRpZiAobm9kZXNQb2ludCkge1xuXHRcdG5vZGVzUG9pbnQudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0XHQuZGVsYXkoZGVsYXlUaW1lKVxuXHRcdFx0LmF0dHIoJ3InLCA4KTtcblx0fVxuXG5cdGlmIChub2Rlc0xpbmUpIHtcblx0XHRub2Rlc0xpbmUudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0XHQuZGVsYXkoZGVsYXlUaW1lKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCA0KTtcblx0fVxuXG5cdGlmIChub2Rlc1BveWdvbikge1xuXHRcdG5vZGVzUG95Z29uLnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKVxuXHRcdFx0LmRlbGF5KGRlbGF5VGltZSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMik7XG5cdH1cblxufTtcblxuY29uc3Qgc2V0Q3VycmVudE5vZGUgPSAoe2lkfSkgPT4ge1xuXG5cdGlmIChub2Rlc1BvaW50KSB7XG5cdFx0bm9kZXNQb2ludC50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbigzMDAwKVxuXHRcdFx0LmF0dHIoJ3InLCBkID0+IHtcblx0XHRcdFx0aWYgKGQucHJvcGVydGllcy5pZCA9PT0gaWQpIHJldHVybiAxNjtcblx0XHRcdFx0cmV0dXJuIDg7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSB7XG5cdFx0bm9kZXNMaW5lLnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGQgPT4ge1xuXHRcdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLmlkID09PSBpZCkgcmV0dXJuIDg7XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXHR9XG5cblx0aWYgKG5vZGVzUG95Z29uKSB7XG5cdFx0bm9kZXNQb3lnb24udHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oMzAwMClcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZCA9PiB7XG5cdFx0XHRcdGlmIChkLnByb3BlcnRpZXMuaWQgPT09IGlkKSByZXR1cm4gODtcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cdH1cblx0XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdCxcblx0ZHJhd05vZGVzLFxuXHRkcmF3Tm9kZUJ5VGFnLFxuXHRub2Rlc1VwZGF0ZSxcblx0Z2V0Tm9kZUNvb3JkaW5hdGVzLFxuXHRzZXRDdXJyZW50Tm9kZSxcblx0cmVzZXROb2Rlc1N0YXRlXG59OyIsImltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy9kaXN0L2QzLm1pbic7XG5pbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsJztcblxuaW1wb3J0IGdlb2RhdGEgZnJvbSAnLi9nZW9kYXRhJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcuanNvbic7XG5cblxuY29uc3QgbWFwQm94Q29uZmlnID0ge1xuXHRjb250YWluZXI6ICdtYXAnLFxuXHRzdHlsZTogYG1hcGJveDovL3N0eWxlcy8ke2NvbmZpZy5tYXBib3gudXNlcn0vJHtjb25maWcubWFwLmRlZmF1bHQuc3R5bGVJRH1gLFxuXHRjZW50ZXI6IGNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXIsIC8vY2VudGVyIGluIE1vbnRyZWFsXG5cdHpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC56b29tLFxuXHRwaXRjaDogY29uZmlnLm1hcC5kZWZhdWx0LnBpdGNoLFxuXHRtaW5ab29tOiBjb25maWcubWFwLmRlZmF1bHQubWluWm9vbSxcblx0bWF4Wm9vbTogY29uZmlnLm1hcC5kZWZhdWx0Lm1heFpvb20sXG5cdG1heEJvdW5kczogY29uZmlnLm1hcC5kZWZhdWx0Lm1heEJvdW5kcyxcblx0aW50ZXJhY3RpdmU6IHRydWUsXG59O1xuXG5sZXQgbWFwYm94O1xuXG5cbmNvbnN0IGluaXQgPSBhc3luYyAoe21hcElELCBsb2NhdGlvbn0pID0+IHtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cblx0XHQvL21hcCBjb250YWluZXIgc2V0IG9uIFdQID4gQmVhdmVyXG5cdFx0c2VsZWN0KCcjYXBwJykuc2VsZWN0KCc6Zmlyc3QtY2hpbGQnKVxuXHRcdFx0LmFwcGVuZCgnZGl2Jylcblx0XHRcdC5hdHRyKCdpZCcsICdtYXAnKTtcblxuXHRcdGlmIChsb2NhdGlvbiA9PT0gJzQwNCcpIHNldFVua25vd0xvY2F0aW9uKCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vNDA0OiBjZW50ZXIgdGhlIG1hcCBhbnl3aGVyZSBpbiB0aGUgZ2xvYmVcblxuXHRcdGlmIChtYXBJRCkgbWFwQm94Q29uZmlnLnN0eWxlID0gYG1hcGJveDovL3N0eWxlcy8ke2NvbmZpZy5tYXBib3gudXNlcn0vJHttYXBJRH1gO1x0XHQvL2lmIGRlZXBsaW5rOiBzZXQgbWFwIHN0eWxlXG5cblx0XHRtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IGNvbmZpZy5tYXBib3gudG9rZW47XG5cdFx0bWFwYm94ID0gbmV3IG1hcGJveGdsLk1hcChtYXBCb3hDb25maWcpO1xuXG5cdFx0bWFwYm94Lm9uKCdsb2FkJywgKCkgPT4ge1xuXG5cdFx0XHRnZW9kYXRhLmluaXQobWFwYm94LmdldENhbnZhc0NvbnRhaW5lcigpKTtcblxuXHRcdFx0bWFwYm94Lm9uKCd2aWV3cmVzZXQnLCB1cGRhdGUpO1xuXHRcdFx0bWFwYm94Lm9uKCdtb3ZlJywgdXBkYXRlKTtcblx0XHRcdG1hcGJveC5vbignbW92ZWVuZCcsIHVwZGF0ZSk7XG5cblx0XHRcdGlmIChsb2NhdGlvbiA9PT0gJzQwNCcpIGZseUZyb21Vbmtub3dMb2NhdGlvbigpO1xuXHRcdFx0XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSk7XG5cdFx0XG5cdH0pO1xuXG59O1xuXG4vL2NoZWNrIGlmIG1hcCBpcyBsb2FkZWRcbmNvbnN0IGlzTWFwYm94TG9hZGVkID0gKCkgPT4gIHtcblx0aWYgKG1hcGJveCkgcmV0dXJuIG1hcGJveC5pc1N0eWxlTG9hZGVkKCk7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbi8vY2hhbmdlIG1hcCBzdHlsZVxuY29uc3QgY2hhbmdlTWFwID0gKHttYXBJRH0pID0+IG1hcGJveC5zZXRTdHlsZShgbWFwYm94Oi8vc3R5bGVzLyR7Y29uZmlnLm1hcGJveC51c2VyfS8ke21hcElEfWApO1xuXG4vLyBQcm9qZWN0IEdlb0pTT04gY29vcmRpbmF0ZSB0byB0aGUgbWFwJ3MgY3VycmVudCBzdGF0ZVxuY29uc3QgcHJvamVjdCA9IGQgPT4gbWFwYm94LnByb2plY3QobmV3IG1hcGJveGdsLkxuZ0xhdCgrZFswXSwgK2RbMV0pKTtcblxuLy8gUHJvamVjdCBHZW9KU09OIGNvb3JkaW5hdGUgdG8gdGhlIG1hcCdzIGN1cnJlbnQgc3RhdGVcbmNvbnN0IHByb2plY3RQb2ludCA9IGZ1bmN0aW9uIChsb24sIGxhdCkge1xuXHRsZXQgcG9pbnQgPSBtYXBib3gucHJvamVjdChuZXcgbWFwYm94Z2wuTG5nTGF0KGxvbiwgbGF0KSk7XG5cdHRoaXMuc3RyZWFtLnBvaW50KHBvaW50LngsIHBvaW50LnkpO1xufTtcblxuLy91cGRhdGVcbmNvbnN0IHVwZGF0ZSA9ICgpID0+IGdlb2RhdGEubm9kZXNVcGRhdGUoKTtcblxuY29uc3Qgc2V0VW5rbm93TG9jYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cblx0Ly9hbnl3aGVyZSBpbiB0aGUgZ2xvYmVcblx0Y29uc3QgbGF0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTgwKSAtIDkwO1xuXHRjb25zdCBsb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjApIC0gMTgwO1xuXG5cdG1hcEJveENvbmZpZy56b29tID0gNTtcblx0bWFwQm94Q29uZmlnLmNlbnRlciA9IFtsb24sbGF0XTtcblx0bWFwQm94Q29uZmlnLm1heEJvdW5kcyA9IG51bGw7XG5cbn07XG5cbmNvbnN0IGZseUZyb21Vbmtub3dMb2NhdGlvbiA9IGFzeW5jICgpID0+IHtcblxuXHRtYXBib3guZmx5VG8oe1xuXHRcdGNlbnRlcjogY29uZmlnLm1hcC5kZWZhdWx0LmNlbnRlcixcblx0XHR6b29tOiBjb25maWcubWFwLmRlZmF1bHQuem9vbSxcblx0XHRzcGVlZDogMSxcblx0XHRjdXJ2ZTogMSxcblx0XHRtaW5ab29tOiAzLFxuXHRcdGVhc2luZzogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH1cblx0fSk7XG5cblx0bWFwYm94Lm9uKCdtb3ZlZW5kJywgKCkgPT4ge1xuXHRcdGlmIChtYXBib3guZ2V0TWF4Qm91bmRzKCkgPT09IG51bGwpIG1hcGJveC5zZXRNYXhCb3VuZHMoY29uZmlnLm1hcC5kZWZhdWx0Lm1heEJvdW5kcyk7XG5cdH0pO1xuXG59O1xuXG5jb25zdCBmbHlUbyA9IGNvb3JkaW5hdGVzID0+IHtcblxuXHRtYXBib3guZmx5VG8oe1xuXHRcdGNlbnRlcjpjb29yZGluYXRlcyxcblx0XHR6b29tOiAxNyxcblx0XHRzcGVlZDogMSxcblx0XHRjdXJ2ZTogMSxcblx0XHRlYXNpbmc6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9XG5cdH0pO1xuXG59O1xuXG5jb25zdCBmbHlUb09yaWdpbiA9ICgpID0+IHtcblxuXHRtYXBib3guZmx5VG8oe1xuXHRcdGNlbnRlcjpjb25maWcubWFwLmRlZmF1bHQuY2VudGVyLFxuXHRcdHpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC56b29tICsgMC4yLFxuXHRcdHNwZWVkOiAxLjIsXG5cdFx0Y3VydmU6IDEsXG5cdFx0ZWFzaW5nOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfVxuXHR9KTtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXQsXG5cdHVwZGF0ZSxcblx0aXNNYXBib3hMb2FkZWQsXG5cdGNoYW5nZU1hcCxcblx0cHJvamVjdCxcblx0cHJvamVjdFBvaW50LFxuXHRmbHlUbyxcblx0Zmx5VG9PcmlnaW5cbn07XG4iLCJpbXBvcnQgZ2hvc3QgZnJvbSAnLi9hc3NldHMvc25hcGNoYXQuc3ZnJztcbmltcG9ydCB1bnJ1bHlXYXRlcnMgZnJvbSAnLi9hc3NldHMvdHN1bmFtaS5zdmcnO1xuaW1wb3J0IGltYWdpbmFyaWVzIGZyb20gJy4vYXNzZXRzL3Rob3VnaHQtYnViYmxlLnN2Zyc7XG5pbXBvcnQgaW5mcmFzdHJ1Y3R1cmVzIGZyb20gJy4vYXNzZXRzL2NvbmUuc3ZnJztcbmltcG9ydCBjb250YW1pbmF0aW9uIGZyb20gJy4vYXNzZXRzL2Jpb2hhemFyZC5zdmcnO1xuaW1wb3J0IHNwZWN1bGF0aXZlIGZyb20gJy4vYXNzZXRzL2hlbHAuc3ZnJztcbmltcG9ydCBiZXlvbmRIdW1hbnMgZnJvbSAnLi9hc3NldHMvc25ha2Uuc3ZnJztcbmltcG9ydCBkaXNyZWFwcGVhcmluZ1dhdGVycyBmcm9tICcuL2Fzc2V0cy9zZWEuc3ZnJztcblxuXG5leHBvcnQgY29uc3QgZ2V0SWNvbiA9ICh7c2x1Z30pID0+IHtcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PT0gJ2dob3N0cycpIHJldHVybiBnaG9zdDtcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PT0gJ3VucnVsbHl3YXRlcnMnKSByZXR1cm4gdW5ydWx5V2F0ZXJzO1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09PSAnaW1hZ2luYXJpZXMnKSByZXR1cm4gaW1hZ2luYXJpZXM7XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT09ICdpbmZyYXN0cnVjdHVyZScpIHJldHVybiBpbmZyYXN0cnVjdHVyZXM7XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT09ICdjb250YW1pbmF0aW9uJykgcmV0dXJuIGNvbnRhbWluYXRpb247XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT09ICdzcGVjdWxhdGlvbicpIHJldHVybiBzcGVjdWxhdGl2ZTtcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PT0gJ2JleW9uZC1odW1hbnMnKSByZXR1cm4gYmV5b25kSHVtYW5zO1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09PSAnZGlzcmVhcHBlYXJpbmd3YXRlcnMnKSByZXR1cm4gZGlzcmVhcHBlYXJpbmdXYXRlcnM7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0SWNvblxufTsiXSwic291cmNlUm9vdCI6IiJ9