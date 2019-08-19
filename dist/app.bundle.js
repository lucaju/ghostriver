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

module.exports = JSON.parse("{\"map\":{\"default\":{\"styleID\":\"cjxzbs7nf0a4b1cowp80tsndy\",\"center\":[-73.56,45.465],\"zoom\":12,\"pitch\":0,\"minZoom\":12,\"maxZoom\":17,\"maxBounds\":[[-73.68,45.415],[-73.44,45.535]]},\"dataset\":\"cjxdpkggs01gi2os0srxdx837\"},\"mapbox\":{\"user\":\"saintpierremapping\",\"token\":\"pk.eyJ1Ijoic2FpbnRwaWVycmVtYXBwaW5nIiwiYSI6ImNqdDBpOXo4aDBkYmk0Nm5wMTU0MzhxcWcifQ.tH1TZXEMh4KOnahRKRl_BA\"},\"wordpress\":{\"local\":{\"endpoint\":\"http://localhost:8888/ghost-river/wp-json/\"},\"remote\":{\"endpoint\":\"http://labs.fluxo.art.br/ghost-river/wp-json/\"}}}");

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
  endpoint: _config_config_json__WEBPACK_IMPORTED_MODULE_4__.wordpress.remote.endpoint
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
            if (slug !== 'about') updateMap(theme); // map.pitchMap();

            if (!(id == 0)) {
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
            currentNode = null;
            _map__WEBPACK_IMPORTED_MODULE_1__["default"].flyToOrigin(); //panel

            activePanel = slug === 'about' ? 'full-panel' : 'right-panel';
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
    var id, slug, postData, postCategories, postTags, postTheme, themePost, coordinates;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _ref6.id, slug = _ref6.slug;

            if (!(currentNode && currentNode.id == id)) {
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
            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showSpinner(); //postData - load by ID or by Slug

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
            currentNode = postData;
            postCategories = postData._embedded['wp:term'][0];
            postTags = postData._embedded['wp:term'][1];
            if (theme) postTheme = postCategories.find(function (cat) {
              return cat.slug == theme.slug;
            });

            if (!postTheme) {
              if (postCategories.length > 1) {
                themePost = Math.floor(Math.random() * postCategories.length);
                postTheme = postCategories[themePost];
              } else {
                postTheme = postCategories[0];
              }
            }

            if (postTheme.slug == 'uncategorized') console.log('Problem with category "uncategorized": ', postData);
            setTheme(postTheme.slug);

            if (!theme.isNew) {
              _context3.next = 22;
              break;
            }

            _context3.next = 22;
            return updateMap(theme);

          case 22:
            //fly to local
            _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentNode(postData);
            _context3.next = 25;
            return _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].getNodeCoordinates(postData);

          case 25:
            coordinates = _context3.sent;
            _map__WEBPACK_IMPORTED_MODULE_1__["default"].flyTo(coordinates);
            activePanel = 'right-panel';
            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].updatePost(postData, postTags, theme);
            _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideSpinner(); //show Panel

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

          case 33:
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
            currentNode = null;
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

var getThemeBySlug = function getThemeBySlug(slug) {
  return _config_themes_json__WEBPACK_IMPORTED_MODULE_5__.find(function (theme) {
    return theme.slug === slug;
  });
};

var getCurrentTheme = function getCurrentTheme() {
  return theme;
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
  duration: {
    "in": 3000,
    out: 2000
  }
};
var mainMenu = false;
var topMenu = false;
Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('body').append('div').attr('id', 'map-bg');

var initHome = function initHome() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#home-text').style('opacity', 0).style('display', 'block').transition().delay(0) //3000
  // .duration(0)
  .duration(animation.duration["in"]).style('opacity', 1);
  var delay = 0; //8000

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _config_themes_json__WEBPACK_IMPORTED_MODULE_2__[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var theme = _step.value;
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#main-".concat(theme.slug, "-bt")).style('opacity', 0).style('display', 'block').transition().delay(delay).duration(animation.duration["in"]).style('opacity', 1);
      delay += 1000;
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

  configMainMenu();
};

var configMainMenu = function configMainMenu() {
  if (mainMenu == false) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop = function _loop() {
        var theme = _step2.value;
        Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#main-".concat(theme.slug, "-bt")).on('click', function () {
          return Object(_content__WEBPACK_IMPORTED_MODULE_1__["showPage"])(theme);
        });
      };

      for (var _iterator2 = _config_themes_json__WEBPACK_IMPORTED_MODULE_2__[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        _loop();
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

    mainMenu = true;
  }
};

var configTopMenu = function configTopMenu() {
  if (topMenu == false) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      var _loop2 = function _loop2() {
        var theme = _step3.value;
        Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#top-".concat(theme.slug, "-bt")).style('cursor', 'pointer').on('click', function () {
          return Object(_content__WEBPACK_IMPORTED_MODULE_1__["showPage"])(theme);
        });
      };

      for (var _iterator3 = _config_themes_json__WEBPACK_IMPORTED_MODULE_2__[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        _loop2();
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

    topMenu = true;
  }
};

var showHome = function showHome() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#header-col').style('display', 'block').transition().delay(1000).duration(animation.duration["in"]).style('opacity', 1).style('margin-top', '0px');
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('.col-main-menu').style('opacity', 0).style('display', 'block').transition().delay(1000).duration(3000).style('opacity', 1).style('margin-top', '0px');
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#home-text').style('display', 'block').style('opacity', 1);
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = _config_themes_json__WEBPACK_IMPORTED_MODULE_2__[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var theme = _step4.value;
      Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])("#main-".concat(theme.slug, "-bt")).style('display', 'block').style('opacity', 1);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  configMainMenu();
  showHomeBG();
  hideHeading();
};

var hideHome = function hideHome() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#header-col').transition().duration(3000).style('opacity', 0).style('margin-top', '-500px').on('end', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
  });
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('.col-main-menu').transition().duration(3000).style('opacity', 0).style('margin-top', '-200px').on('end', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
  });
  hideHomeBG();
  showHeading();
};

var showHomeBG = function showHomeBG() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-bg').style('display', 'block').transition().delay(1000).duration(3000).style('opacity', 1);
};

var hideHomeBG = function hideHomeBG() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-bg').transition().duration(2000).style('opacity', 0).on('end', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
  });
};

var showTopMenu = function showTopMenu() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#top-menu').style('opacity', 0).style('top', -200).style('display', 'block').transition().delay(3000).duration(2000).style('opacity', 1).style('top', 0);
  configTopMenu();
};

var hideTopMenu = function hideTopMenu() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#top-menu').transition().delay(0).duration(2000).style('opacity', 0).style('top', -200).on('end', function () {
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

  if (direction == 'none') {
    direction = '0px';
  } else if (direction == 'up') {
    direction = '-2000px';
  } else if (direction == 'down') {
    direction = '2000px';
  }

  if (activePanel === 'full-panel') {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#full-panel').style('opacity', 0).style('margin-top', direction).style('display', 'block').transition().delay(delay).duration(animation.duration["in"]).style('opacity', 1).style('margin-top', '0px');
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#full-panel').select('.fl-col-content').property('scrollTop', 0);
    showHomeBG();
  } else {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#left-panel').style('opacity', 0).style('margin-top', direction).style('display', 'block').transition().delay(delay).duration(animation.duration["in"]).style('opacity', 0).style('margin-top', '0px');
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#middle-panel').style('opacity', 0).style('margin-top', direction).style('display', 'block').transition().delay(delay).duration(animation.duration["in"]).style('opacity', 0).style('margin-top', '0px');
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').style('opacity', 0).style('margin-top', direction).style('display', 'block').transition().delay(delay).duration(animation.duration["in"]).style('opacity', 1).style('margin-top', '0px');
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
              if (direction == 'none') {
                direction = '0px';
              } else if (direction == 'up') {
                direction = '-2000px';
              } else if (direction == 'down') {
                direction = '2000px';
              }

              if (activePanel === 'full-panel') {
                Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#full-panel').transition().delay(0).duration(animation.duration.out).style('opacity', 0).style('margin-top', direction).on('end', function () {
                  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
                  resolve();
                });
                hideHomeBG();
              } else {
                Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#left-panel').transition().delay(0).duration(animation.duration.out).style('opacity', 0).style('margin-top', direction).on('end', function () {
                  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
                });
                Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#middle-panel').transition().delay(0).duration(animation.duration.out).style('opacity', 0).style('margin-top', direction).on('end', function () {
                  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
                });
                Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').transition().delay(0).duration(animation.duration.out).style('opacity', 0).style('margin-top', direction).on('end', function () {
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

  heading.style('display', 'block').style('opacity', 0).transition().duration(animation.duration["in"]).style('opacity', 1);
  return heading;
};

var hideHeading = function hideHeading() {
  var heading = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-heading');

  if (!heading.empty()) {
    heading.transition().duration(animation.duration["in"]).style('opacity', 0).on('end', function () {
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
  panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
  panel.select('#article-content').select('.fl-rich-text').html(content.rendered);
  panel.select('.tagline').select('.fl-heading-text').html('');
  panel.select('#article-tags').select('.fl-html').html('');
  panel.select('#close-panel').style('cursor', 'pointer').on('click', _content__WEBPACK_IMPORTED_MODULE_1__["closePanel"]);
  captureLinks();
  updateHeading(title.rendered);
};

var updatePost = function updatePost(_ref5, tags, theme) {
  var title = _ref5.title,
      content = _ref5.content;
  //DOM manipulation
  var panel = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel');
  panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
  panel.select('#article-content').select('.fl-rich-text').html(content.rendered);
  panel.select('#close-panel').style('cursor', 'pointer').on('click', _content__WEBPACK_IMPORTED_MODULE_1__["closePanel"]);
  panel.select('.tagline').select('.fl-heading-text').html(theme.slug); //tags

  panel.select('#article-tags').select('.fl-html').html('');
  var tagsDIV = panel.select('#article-tags').select('.fl-html').append('div').attr('id', 'tag-container');
  var tagsHTML = tagsDIV.selectAll('.circle').data(tags);
  tagsHTML.exit().attr('id', 'exit').attr('class', 'exit').remove();
  tagsHTML.enter().append('div').attr('id', function (tag) {
    return "tag-".concat(tag.slug);
  }).attr('class', 'tag-pill').html(function (tag) {
    var icon = Object(_tags__WEBPACK_IMPORTED_MODULE_3__["getIcon"])(tag);
    return "".concat(icon, " ").concat(tag.name);
  }).on('click', function (d) {
    Object(_content__WEBPACK_IMPORTED_MODULE_1__["tagSearch"])(d);
  }).on('mouseover', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('color', 'steelblue');
  }).on('mouseout', function () {
    Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('color', '#535354');
  }); //resize tag icons

  tagsDIV.selectAll('svg').attr('width', '15px').attr('height', '15px');
  captureLinks();
};

var captureLinks = function captureLinks() {
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('a').on('click', function () {
    //get url // domain
    var link = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).attr('href');
    var domain = link.split('/')[2]; //Test if it is a local link (localhost -> remote)

    var host = window.location.hostname == 'localhost' ? 'labs.fluxo.art.br' : window.location.hostname; //if extrrnal, navigate

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
  Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#spinner').remove();
}; // select(window).on('resize', () => {
// 	checkScreenSize();
// });
// const checkScreenSize = () => {
// 	if (window.innerWidth <= 880) {
// 		showSmallScreenMsg();
// 	} else {
// 		hideSmallScreenMsg();
// 	}
// };
// const showSmallScreenMsg = () => {
// 	let smallScreen = select('#small-screen');
// 	if (smallScreen.empty()) {
// 		smallScreen = select('body').append('div')
// 			.attr('id','small-screen');
// 	}
// 	smallScreen.style('display', 'block');
// 	return smallScreen;
// };
// const hideSmallScreenMsg = () => {
// 	const smallScreen = select('#small-screen');
// 	if (!smallScreen.empty()) smallScreen.style('display', 'none');
// };
// checkScreenSize();


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

// import * as d3 from 'd3';




 // import river1834 from './data/speculative-river.json';

 // const internalOption = {
// 	passThrough: true,
// };

var historicalRiverScale = chroma_js__WEBPACK_IMPORTED_MODULE_1___default.a.scale(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']).domain([0, 8]); // const historicalRiverScale = chroma.scale(['dodgerblue','darkslategray']).domain([0,8]);

var D3geoPath;
var svg; // let riverLines;

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
            svg.append('g').attr('id', 'points-container'); // drawRiver(river1834.features, 500, 2);

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
            return _context3.abrupt("return", {
              points: points,
              lines: lines,
              polygons: polygons
            });

          case 12:
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
            return _context4.abrupt("return", {
              points: points,
              lines: lines,
              polygons: polygons
            });

          case 9:
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
            if (!(item.geometry.type == 'Point')) {
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

var drawPoints = function drawPoints(_ref9) {
  var data = _ref9.data,
      _ref9$transitionTime = _ref9.transitionTime,
      transitionTime = _ref9$transitionTime === void 0 ? 5000 : _ref9$transitionTime,
      _ref9$delayTime = _ref9.delayTime,
      delayTime = _ref9$delayTime === void 0 ? 200 : _ref9$delayTime;
  var colours = getColours();
  nodesPoint = svg.select('#points-container').selectAll('.circle').data(data);
  nodesPoint.exit().attr('id', 'exit').attr('class', 'exit').transition().duration(500).style('fill', '#000000').attr('r', 0).remove();
  nodesPoint.enter().append('circle').attr('class', 'circle');
  nodesPoint = svg.selectAll('.circle').attr('id', function (d) {
    return "index-".concat(d.properties.id);
  }).style('cursor', 'pointer').style('stroke-width', 2).style('stroke', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.stroke).hex();
  }).style('fill', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.fill).alpha(0.7).hex();
  }).attr('cx', function (d) {
    return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).x;
  }).attr('cy', function (d) {
    return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).y;
  }).attr('r', 0).style('opacity', 0.1).on('click', function (d) {
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_3__["default"].showPost(d.properties);
  }).on('mouseover', function (d) {
    nodesOver(d);
  }).on('mouseout', function () {
    nodesOut();
  });
  nodesPoint.transition().duration(transitionTime).delay(function (d, i) {
    return delayTime * i;
  }).attr('r', 8).style('opacity', 1);
};

var drawLines = function drawLines(_ref10) {
  var data = _ref10.data,
      _ref10$transitionTime = _ref10.transitionTime,
      transitionTime = _ref10$transitionTime === void 0 ? 5000 : _ref10$transitionTime,
      _ref10$delayTime = _ref10.delayTime,
      delayTime = _ref10$delayTime === void 0 ? 200 : _ref10$delayTime;
  var colours = getColours();
  nodesLine = svg.select('#lines-container').selectAll('.line').data(data);
  nodesLine.exit().attr('id', 'exit').attr('class', 'exit').transition().duration(500).attr('stroke-width', 0).remove();
  nodesLine.enter().append('path').attr('class', 'line');
  nodesLine = svg.selectAll('.line').attr('id', function (d) {
    return d.properties.id;
  }).attr('d', D3geoPath).style('cursor', 'pointer').style('stroke-width', 0).style('stroke', function (d) {
    if (d.properties.name === 'Saint-Pierre Speculative River') return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()('#0071bc').hex();

    if (d.properties.type === 'historical') {
      return historicalRiverScale(d.properties.index).alpha(.8).hex();
    }

    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.stroke).hex();
  }).style('fill', 'none').style('opacity', 0.1).on('click', function (d) {
    var theme = _content__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTheme();
    if (d.properties.name === 'Saint-Pierre Speculative River' && theme.slug !== 'steps') return;
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_3__["default"].showPost(d.properties);
  }).on('mouseover', function (d) {
    nodesOver(d);
  }).on('mouseout', function () {
    nodesOut();
  });
  nodesLine.transition().duration(transitionTime).delay(function (d, i) {
    return delayTime * i;
  }).style('stroke-width', 2).style('opacity', 1);
};

var drawPolygins = function drawPolygins(_ref11) {
  var data = _ref11.data,
      _ref11$transitionTime = _ref11.transitionTime,
      transitionTime = _ref11$transitionTime === void 0 ? 5000 : _ref11$transitionTime,
      _ref11$delayTime = _ref11.delayTime,
      delayTime = _ref11$delayTime === void 0 ? 200 : _ref11$delayTime;
  var colours = getColours();
  nodesPoygon = svg.select('#polygons-container').selectAll('.polygons').data(data);
  nodesPoygon.exit().attr('id', 'exit').attr('class', 'exit').transition().duration(500).style('fill', '#000000').attr('stroke-width', 0).remove();
  nodesPoygon.enter().append('path').attr('class', 'polygons');
  nodesPoygon = svg.selectAll('.polygons').attr('id', function (d) {
    return d.properties.id;
  }).attr('d', D3geoPath).style('cursor', 'pointer').style('stroke-width', 0).style('stroke', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.stroke).hex();
  }).style('fill', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.fill).alpha(0.7).hex();
  }).style('opacity', 0.1).on('click', function (d) {
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_3__["default"].showPost(d.properties);
  }).on('mouseover', function (d) {
    nodesOver(d);
  }).on('mouseout', function () {
    nodesOut();
  });
  nodesPoygon.transition().duration(transitionTime).delay(function (d, i) {
    return delayTime * i;
  }).style('stroke-width', 2).style('opacity', 1);
}; // const drawRiver = data => {
// 	riverLines = svg.selectAll('#river')
// 		.data(data)
// 		.enter()
// 		.append('path')
// 		.attr('id', 'river')
// 		.attr('d', D3geoPath)
// 		.style('fill','none')
// 		.style('stroke-width', 1)
// 		.style('stroke', '#0071bc')
// 		.style('opacity', 0.8);
// 	// riverLines.transition()
// 	// 	.duration(1000)
// 	// 	.style('stroke-width', 4)
// 	// 	.style('opacity', 0.8);
// 	//graph animation
// 	let lineLength = riverLines.node().getTotalLength();
// 	riverLines
// 		.attr('stroke-dasharray', lineLength + ' ' + lineLength)
// 		.attr('stroke-dashoffset', +lineLength)
// 		.transition()
// 		.duration(8000)
// 		.ease(easeLinear)
// 		.attr('stroke-dashoffset', 0)
// 		.style('stroke-width', 3)
// 		.on('end', () => {
// 			if(!internalOption.passThrough) map.pitchMap({finalPitch:40, duration:2000});
// 		});
// };


var mapUpdate = function mapUpdate() {
  // riverUpdate();
  nodeUpdate();
}; // const riverUpdate = () => {
// 	if (riverLines) {
// 		riverLines
// 			.attr('d', D3geoPath)
// 			.attr('stroke-dasharray', 'none')
// 			.attr('stroke-dashoffset', 'none');
// 	}
// };


var nodeUpdate = function nodeUpdate() {
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

var getColours = function getColours() {
  var theme = _content__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTheme();

  if (theme.slug === 'environment') {
    return {
      active: {
        fill: '#FFDE17',
        stroke: '#8B5E3C'
      },
      selected: {
        stroke: '#ffffff'
      }
    };
  }

  if (theme.slug === 'water') {
    return {
      active: {
        fill: '#fefefe',
        stroke: '#652e00'
      },
      selected: {
        stroke: '#ffffff'
      }
    };
  }

  if (theme.slug === 'steps') {
    return {
      active: {
        fill: '#F15A29',
        stroke: '#F15A29'
      },
      selected: {
        stroke: '#58595B'
      }
    };
  }
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
      if (d.properties.name !== current.properties.name) return 0.5;
    }).style('stroke-width', function (d) {
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

var resetNodesState = function resetNodesState() {
  if (nodesPoint) {
    nodesPoint.transition().duration(2000).delay(1000).attr('r', 8);
  }

  if (nodesLine) {
    nodesLine.transition().duration(2000).delay(1000).style('stroke-width', 4);
  }

  if (nodesPoygon) {
    nodesPoygon.transition().duration(2000).delay(1000).style('stroke-width', 2);
  }
};

var setCurrentNode = function setCurrentNode(_ref12) {
  var id = _ref12.id;

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
  mapUpdate: mapUpdate,
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


 // import 'mapbox-gl/dist/mapbox-gl.css'



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
var pitchAnimation;

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
                // pitchMap();
                _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].init(mapbox.getCanvasContainer());
                if (location === '404') flyFromUnknowLocation();
                mapbox.on('viewreset', update);
                mapbox.on('move', update);
                mapbox.on('moveend', update);
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
}();

var setUnknowLocation =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
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
    return _ref3.apply(this, arguments);
  };
}();

var flyFromUnknowLocation =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
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
              // pitch: 60,
              // maxDuration: 5000,
              easing: function easing(t) {
                return t;
              }
            });
            mapbox.on('moveend', function () {
              if (mapbox.getMaxBounds() == null) mapbox.setMaxBounds(_config_config_json__WEBPACK_IMPORTED_MODULE_3__.map["default"].maxBounds);
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function flyFromUnknowLocation() {
    return _ref4.apply(this, arguments);
  };
}();

var update = function update() {
  _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].mapUpdate();
}; //check if map is loaded


var isMapboxLoaded = function isMapboxLoaded() {
  if (mapbox) return mapbox.isStyleLoaded();
  return false;
}; //change map style


var changeMap = function changeMap(_ref5) {
  var mapID = _ref5.mapID;
  mapbox.setStyle("mapbox://styles/".concat(_config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.user, "/").concat(mapID));
  pitchMap({
    finalPitch: 0,
    duration: 1
  });
};

var flyTo = function flyTo(coordinates) {
  mapbox.flyTo({
    center: coordinates,
    zoom: 17,
    speed: 1,
    curve: 1,
    // minZoom: 3,
    // pitch: 60,
    // maxDuration: 5000,
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
}; //pitch map animation


var pitchMap = function pitchMap(_ref6) {
  var _ref6$finalPitch = _ref6.finalPitch,
      finalPitch = _ref6$finalPitch === void 0 ? 0 : _ref6$finalPitch,
      _ref6$duration = _ref6.duration,
      duration = _ref6$duration === void 0 ? 1000 : _ref6$duration;
  if (pitchAnimation) clearInterval(pitchAnimation);
  var tick = 10;
  var elapse = 0;
  var scalePitch = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"])().domain([0, duration]).range([mapbox.getPitch(), finalPitch]);
  pitchAnimation = setInterval(function () {
    mapbox.setPitch(scalePitch(elapse)); // mapbox.setZoom(scaleZoom(elapse));

    elapse += tick;

    if (elapse > duration) {
      clearInterval(pitchAnimation);
      pitchAnimation = null;
    }
  }, tick);
}; // Project GeoJSON coordinate to the map's current state


var project = function project(d) {
  return mapbox.project(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.LngLat(+d[0], +d[1]));
}; // Project GeoJSON coordinate to the map's current state


var projectPoint = function projectPoint(lon, lat) {
  var point = mapbox.project(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.LngLat(lon, lat));
  this.stream.point(point.x, point.y);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  update: update,
  isMapboxLoaded: isMapboxLoaded,
  changeMap: changeMap,
  pitchMap: pitchMap,
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
  if (slug.toLowerCase() == 'ghosts') return _assets_snapchat_svg__WEBPACK_IMPORTED_MODULE_0___default.a;
  if (slug.toLowerCase() == 'unrullywaters') return _assets_tsunami_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
  if (slug.toLowerCase() == 'imaginaries') return _assets_thought_bubble_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
  if (slug.toLowerCase() == 'infrastructure') return _assets_cone_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
  if (slug.toLowerCase() == 'contamination') return _assets_biohazard_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
  if (slug.toLowerCase() == 'speculation') return _assets_help_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
  if (slug.toLowerCase() == 'beyond-humans') return _assets_snake_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
  if (slug.toLowerCase() == 'disreappearingwaters') return _assets_sea_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getIcon: getIcon
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jpb2hhemFyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb25lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2hlbHAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VhLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYWtlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYXBjaGF0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rob3VnaHQtYnViYmxlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RzdW5hbWkuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50SFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90YWdzLmpzIl0sIm5hbWVzIjpbImhvc3QiLCJyb290UGF0aCIsImxvYWREZWVwTGluayIsInNsdWciLCJjb250ZW50IiwiY2hhbmdlQnJvd3Nlckhpc3RvcnkiLCJ0aGVtZSIsImdldFRoZW1lQnlTbHVnIiwic2hvd1BhZ2UiLCJzaG93UG9zdCIsInBvc3QiLCJnb0hvbWUiLCJsb2NhdGlvbiIsImRhdGEiLCJpbml0SG9tZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwYXRobmFtZSIsImRlZXBMaW5rIiwic3BsaXQiLCJzZWFyY2giLCJ1cmwiLCJVUkwiLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwid3AiLCJXUEFQSSIsImVuZHBvaW50IiwiY29uZmlnIiwid29yZHByZXNzIiwicmVtb3RlIiwiY3VycmVudE5vZGUiLCJhY3RpdmVQYW5lbCIsImNvbnRlbnRIVE1MIiwidXBkYXRlTWFwIiwiaWQiLCJzZXRUaGVtZSIsImxvYWRQYWdlIiwicGFnZURhdGEiLCJtYXAiLCJmbHlUb09yaWdpbiIsInVwZGF0ZVBhZ2UiLCJzaG93UGFuZWwiLCJkaXJlY3Rpb24iLCJkZWxheSIsInRpdGxlIiwicmVuZGVyZWQiLCJwYWdlcyIsImVtYmVkIiwiaGlkZVBhbmVsIiwic2hvd1NwaW5uZXIiLCJsb2FkUG9zdCIsInBvc3REYXRhIiwiaGlkZVNwaW5uZXIiLCJwb3N0Q2F0ZWdvcmllcyIsIl9lbWJlZGRlZCIsInBvc3RUYWdzIiwicG9zdFRoZW1lIiwiZmluZCIsImNhdCIsImxlbmd0aCIsInRoZW1lUG9zdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJpc05ldyIsImdlb2RhdGEiLCJzZXRDdXJyZW50Tm9kZSIsImdldE5vZGVDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzIiwiZmx5VG8iLCJ1cGRhdGVQb3N0IiwicG9zdHMiLCJjbG9zZVBhbmVsIiwicmVzZXROb2Rlc1N0YXRlIiwicmVxdWVzdGVkVGhlbWVTbHVnIiwicmVxdWVzdGVkVGhlbWUiLCJjaGFuZ2VTdGF0ZSIsInN0YXRlIiwidGhlbWVzIiwiZ2V0Q3VycmVudFRoZW1lIiwibmV3U3RhdGUiLCJoaWRlVG9wTWVudSIsInNob3dIb21lIiwiaGlkZUhvbWUiLCJzaG93VG9wTWVudSIsImlzTWFwYm94TG9hZGVkIiwiaW5pdCIsImNoYW5nZU1hcCIsImRyYXdOb2RlcyIsInRhZ1NlYXJjaCIsInRhZyIsImRyYXdOb2RlQnlUYWciLCJ1cGRhdGVIZWFkaW5nIiwibmFtZSIsInBhZ2VUaXRsZSIsImRvY3VtZW50IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwib3V0IiwibWFpbk1lbnUiLCJ0b3BNZW51Iiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwidHJhbnNpdGlvbiIsImNvbmZpZ01haW5NZW51Iiwib24iLCJjb25maWdUb3BNZW51Iiwic2VsZWN0QWxsIiwic2hvd0hvbWVCRyIsImhpZGVIZWFkaW5nIiwiaGlkZUhvbWVCRyIsInNob3dIZWFkaW5nIiwicHJvcGVydHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRpbmciLCJlbXB0eSIsInRvTG93ZXJDYXNlIiwiaHRtbCIsInBhbmVsIiwiY2FwdHVyZUxpbmtzIiwidGFncyIsInRhZ3NESVYiLCJ0YWdzSFRNTCIsImV4aXQiLCJyZW1vdmUiLCJlbnRlciIsImljb24iLCJnZXRJY29uIiwiZCIsImxpbmsiLCJkb21haW4iLCJob3N0bmFtZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoaXN0b3JpY2FsUml2ZXJTY2FsZSIsImNocm9tYSIsInNjYWxlIiwiRDNnZW9QYXRoIiwic3ZnIiwiZGF0YXNldCIsIm5vZGVzUG9pbnQiLCJub2Rlc0xpbmUiLCJub2Rlc1BveWdvbiIsImNhbnZhcyIsIkQzZ2VvVHJhbnNmb3JtIiwiZ2VvVHJhbnNmb3JtIiwicG9pbnQiLCJwcm9qZWN0UG9pbnQiLCJnZW9QYXRoIiwicHJvamVjdGlvbiIsImxvYWREYXRhIiwiZGF0YVVSTCIsIm1hcGJveCIsInVzZXIiLCJ0b2tlbiIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZmVhdHVyZXMiLCJjb25jYXQiLCJoaXN0b3JpY2FsUml2ZWwiLCJ0aGVtZU5vZGVzIiwiZ2V0VGhlbWVOb2RlcyIsInBvaW50cyIsImZpbHRlciIsIm4iLCJnZW9tZXRyeSIsInR5cGUiLCJsaW5lcyIsInBvbHlnb25zIiwiZHJhd1BvbHlnaW5zIiwiZHJhd0xpbmVzIiwiZHJhd1BvaW50cyIsInRhZ05vZGVzIiwiZ2V0VGFnTm9kZXMiLCJzZWxlY3RlZE5vZGVzIiwibm9kZSIsInByb3BlcnRpZXMiLCJub2RldGhlbWVzIiwidGhlbWVOb2RlIiwidCIsIm5vZGVUYWdzIiwidGFnTm9kZSIsIml0ZW0iLCJjZW50ZXIiLCJ0cmFuc2l0aW9uVGltZSIsImRlbGF5VGltZSIsImNvbG91cnMiLCJnZXRDb2xvdXJzIiwiYWN0aXZlIiwic3Ryb2tlIiwiaGV4IiwiZmlsbCIsImFscGhhIiwicHJvamVjdCIsIngiLCJ5Iiwibm9kZXNPdmVyIiwibm9kZXNPdXQiLCJpIiwiaW5kZXgiLCJtYXBVcGRhdGUiLCJub2RlVXBkYXRlIiwic2VsZWN0ZWQiLCJjdXJyZW50IiwibWFwQm94Q29uZmlnIiwiY29udGFpbmVyIiwic3R5bGVJRCIsInpvb20iLCJwaXRjaCIsIm1pblpvb20iLCJtYXhab29tIiwibWF4Qm91bmRzIiwiaW50ZXJhY3RpdmUiLCJwaXRjaEFuaW1hdGlvbiIsIm1hcElEIiwic2V0VW5rbm93TG9jYXRpb24iLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwiTWFwIiwiZ2V0Q2FudmFzQ29udGFpbmVyIiwiZmx5RnJvbVVua25vd0xvY2F0aW9uIiwidXBkYXRlIiwibGF0IiwibG9uIiwic3BlZWQiLCJjdXJ2ZSIsImVhc2luZyIsImdldE1heEJvdW5kcyIsInNldE1heEJvdW5kcyIsImlzU3R5bGVMb2FkZWQiLCJzZXRTdHlsZSIsInBpdGNoTWFwIiwiZmluYWxQaXRjaCIsImNsZWFySW50ZXJ2YWwiLCJ0aWNrIiwiZWxhcHNlIiwic2NhbGVQaXRjaCIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJnZXRQaXRjaCIsInNldEludGVydmFsIiwic2V0UGl0Y2giLCJMbmdMYXQiLCJzdHJlYW0iLCJnaG9zdCIsInVucnVseVdhdGVycyIsImltYWdpbmFyaWVzIiwiaW5mcmFzdHJ1Y3R1cmVzIiwiY29udGFtaW5hdGlvbiIsInNwZWN1bGF0aXZlIiwiYmV5b25kSHVtYW5zIiwiZGlzcmVhcHBlYXJpbmdXYXRlcnMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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SSxpRUFBUDtBQUN6QyxNQUFJN1AsSUFBSSxDQUFDMEgsV0FBTCxNQUFzQixnQkFBMUIsRUFBNEMsT0FBT29JLHVEQUFQO0FBQzVDLE1BQUk5UCxJQUFJLENBQUMwSCxXQUFMLE1BQXNCLGVBQTFCLEVBQTJDLE9BQU9xSSw0REFBUDtBQUMzQyxNQUFJL1AsSUFBSSxDQUFDMEgsV0FBTCxNQUFzQixhQUExQixFQUF5QyxPQUFPc0ksdURBQVA7QUFDekMsTUFBSWhRLElBQUksQ0FBQzBILFdBQUwsTUFBc0IsZUFBMUIsRUFBMkMsT0FBT3VJLHdEQUFQO0FBQzNDLE1BQUlqUSxJQUFJLENBQUMwSCxXQUFMLE1BQXNCLHNCQUExQixFQUFrRCxPQUFPd0ksc0RBQVA7QUFDbEQsQ0FUTTtBQVdRO0FBQ2Q3SCxTQUFPLEVBQVBBO0FBRGMsQ0FBZixFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzL2Rpc3QvZDMubWluJztcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9jb250ZW50JztcblxuY29uc3QgaG9zdCA9ICdodHRwOi8vbG9jYWxob3N0Ojg4ODgnOyAvLydodHRwOi8vbG9jYWxob3N0Ojg4ODgnOyAvLyBodHRwOi8vbGFicy5mbHV4by5hcnQuYnJcbmNvbnN0IHJvb3RQYXRoID0gJy9naG9zdC1yaXZlci8nO1xuXG5jb25zdCBsb2FkRGVlcExpbmsgPSBhc3luYyBzbHVnID0+IHtcblxuXHRjb250ZW50LmNoYW5nZUJyb3dzZXJIaXN0b3J5KHtzbHVnfSk7XHRcdFx0XHRcdC8vY2hhbmdlIFVSTCBCYXJcblxuXHRsZXQgdGhlbWUgPSBjb250ZW50LmdldFRoZW1lQnlTbHVnKHNsdWcpO1x0XHRcdFx0Ly9nZXQgdGhlbWUgYmFzZWQgb24gdGhlIHNlYXJjaCBwYXJhbWV0ZXJzXG5cblx0Ly9pZiBzZWFyY2ggbWF0Y2ggdG8gdGhlbWUgKHBhZ2UpXG5cdGlmICh0aGVtZSkge1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRhd2FpdCBjb250ZW50LnNob3dQYWdlKHRoZW1lKTtcdFx0XHRcdFx0XHQvL2xvYWQgdGhlIHRoZW1lIHBhZ2Vcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvL3RyeSB0byBsb2FkIGEgcG9zdCBiYXNlZCBvbiBzZWFyY2ggcGFyYW1ldGVyc1xuXHRjb25zdCBwb3N0ID0gYXdhaXQgY29udGVudC5zaG93UG9zdCh7c2x1Z30pO1x0XHRcdFxuXG5cdC8vaWYgbm8gcGFnZS9wb3N0IGZvdW5kOiBsb2FkIGhvbWUgd2l0aCA0MDRcblx0aWYgKCFwb3N0KSBnb0hvbWUoe2xvY2F0aW9uOiAnNDA0J30pO1xuXG59O1xuXG5jb25zdCBnb0hvbWUgPSBhc3luYyBkYXRhID0+IHtcblx0Y29udGVudC5jaGFuZ2VCcm93c2VySGlzdG9yeSh7c2x1Zzogcm9vdFBhdGh9KTtcblx0Y29udGVudC5pbml0SG9tZShkYXRhKTtcbn07XG4gXG4oIGFzeW5jICgpID0+IHtcdFx0XG5cblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDg4MCkgZ29Ib21lKHtsb2NhdGlvbjogJ2hvbWUnfSk7XG5cblx0Ly90ZXN0IGlmIHVybCBpcyB0cnlpbmcgdG8gcmVhY2ggYSBkZWVwbGlua1x0XHRcblx0aWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gcm9vdFBhdGgpIHtcdFx0XHRcdFx0XHRcdFx0XG5cdFx0Y29uc3QgZGVlcExpbmsgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTsgXHQvL2dldCBwYXRoIGFmdGVyIHRoZSAnLycgYXMgZGVlcGxpbmtcblx0XHRsb2NhdGlvbiA9IGAke2hvc3R9JHtyb290UGF0aH0/bm9kZT0ke2RlZXBMaW5rfWA7XHRcdFx0Ly9uYXZpYXRlIHRvIHJvb3Qgd2l0aCBkZWVwbGluayBhcyBhIHNlYXJjaCBwYXJhbWV0ZXJzXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly90ZXN0IGlmIHVybCBpcyBzZWFyY2hpbmcgZm9yIGRlZXBsaW5rXG5cdGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1x0XHRcdFx0XHQvL2dldCB1dGxcdFx0XG5cdFx0Y29uc3Qgc2x1ZyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdub2RlJyk7XHRcdFx0XHRcdC8vZ2V0IHRoZSBwYXJhbXMgZm9yIHNlYXJjaCAoYSBzbHVnIGZvciBhIHBhZ2Ugb3IgcG9zdClcblx0XHRsb2FkRGVlcExpbmsoc2x1Zyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly9HbyBIb21lXG5cdGdvSG9tZSh7bG9jYXRpb246ICdob21lJ30pO1xuXG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMi4wNTEgMzIuMDUxXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMi4wNTEgMzIuMDUxO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PHBhdGggZD1cXFwiTTI1LjI2NywxMy4yNDdjLTAuNDI1LTAuMTIyLTAuODc4LTAuMTI5LTEuMzIxLTAuMTQ2YzAuMTIxLTAuMzExLDMuMzI2LTguMjU4LTUuMTM2LTExLjQwOCBjLTAuMDA0LDAuMDcxLTAuMDEsMC4xNDMtMC4wMjEsMC4yMTFjNS40MzgsMy4yNjgsMi45MjIsOC41MDIsMi43MTcsOC43MzFjLTEuNDk5LTEuMTU0LTMuMzcxLTEuODQtNS40MDMtMS44NCBjLTIuMDY4LDAtMy45NzIsMC43MTEtNS40ODMsMS45MDRjLTAuMzcyLTAuNjE1LTAuNjYyLTEuMzE1LTAuODQ3LTIuMDg3Yy0wLjE1LTEuMzUxLTAuMDU2LTIuNTY1LDAuNTMzLTMuODIxIGMwLjU4My0xLjE0NCwxLjUyMi0yLjExMSwyLjY0LTIuNzQ0Yy0wLjAxMy0wLjA2Mi0wLjAyMy0wLjEyNS0wLjAzMS0wLjE5Yy0xLjI0LDAuNTAxLTIuMzY5LDEuMzQtMy4zODEsMi40MjIgYy0wLjQ0LDAuNjE1LTMuMDczLDMuNzgyLTEuNDA4LDguNjE3Yy0wLjQ0OSwwLjAxNi0wLjg5NSwwLjA2My0xLjMzNSwwLjE0NmMtMS43NTEsMC4zNzItNC41MzQsMS44NzgtNS44NDUsNC40NjcgYy0wLjQzOSwwLjc0LTAuNjEyLDEuNDk2LTAuODE5LDIuMjI2Yy0wLjIxMiwxLjQ2NC0wLjE2NiwyLjg3LDAuMjE1LDQuMTUzYzAuMDU2LTAuMDM0LDAuMTExLTAuMDY2LDAuMTY4LTAuMDk2IGMtMC4yMDEtMS4yNjktMC4wMzItMi42MDgsMC41LTMuNzc0YzAuNjE0LTEuMjQ2LDEuNTA0LTIuMDc1LDIuNjU0LTIuNzk4YzEuOTM3LTAuOTA4LDMuNTY0LTAuNjU2LDMuNjMxLTAuNjQ1IGMtMC4wNDMsMC4zNTgtMC4wNjgsMC43MjMtMC4wNjgsMS4wOTZjMCwzLjU0OSwyLjA5NSw2LjYxNSw1LjExMyw4LjAzNWMtMC4wMTYsMC4wNDMtMC4wMzEsMC4wODYtMC4wNDUsMC4xMjUgYy0wLjA1NiwwLjEwMy0yLjg1LDQuNjUxLTguMjUyLDIuNjE5Yy0wLjA0OCwwLjA1MS0wLjA5OSwwLjEtMC4xNTEsMC4xNDdjMC42NjMsMC41MSw2LjMwMyw0LjI5LDExLjQ5Ny0yLjA4NiBjMC4yMzUsMC4wMjEsMC40NzMsMC4wMzQsMC43MTQsMC4wMzRjMC4xNDUsMCwwLjI4OS0wLjAwNiwwLjQzMy0wLjAxMmMxLjA5NywxLjUyNSw1LjMsNi4yNDQsMTEuNjMzLDIuMjY4IGMtMC4wNTQtMC4wNDktMC4xMDQtMC4wOTgtMC4xNS0wLjE0OWMtNS42NTIsMi4xMS04LjMxMi0yLjc3Ni04LjM0Mi0yLjg2YzMuMzYxLTEuNTI4LDUuMzAyLTQuNSw1LjMwMi04LjEyMSBjMC0wLjMxMi0wLjAxNy0wLjYxNy0wLjA0Ny0wLjkyMmMwLjAxMi0wLjAwMiwwLjAyMS0wLjAwNCwwLjAzNS0wLjAwOGMxLjA5OS0wLjA3NCwyLjI3NSwwLjEzOSwzLjQyOSwwLjY4IGMxLjE1LDAuNzI2LDIuMDQsMS41NTYsMi42NTQsMi44MDFjMC41MywxLjE2NywwLjcsMi41MDQsMC40OTksMy43NzNjMC4wNTgsMC4wMjksMC4xMTIsMC4wNiwwLjE2OCwwLjA5NiBDMzIuMTc4LDIyLjY0LDMzLjMzMywxNS41NjIsMjUuMjY3LDEzLjI0N3ogTTExLjU5MywxOS4xOTJjLTAuMDA0LTAuMDA0LTAuMDEtMC4wMTItMC4wMTUtMC4wMThsMC4wMTIsMC4wMTRMMTEuNTkzLDE5LjE5MnogTTEzLjgwMywxNy42NzFjMC0wLjgzOCwwLjQ0OC0xLjU2NSwxLjExOC0xLjk3MWMwLjM0NS0wLjIwNywwLjc0OC0wLjMyOSwxLjE4LTAuMzI5YzAuNDUsMCwwLjg3LDAuMTMzLDEuMjI0LDAuMzU0IGMwLjY0NiwwLjQwOCwxLjA3NSwxLjEyNSwxLjA3NSwxLjk0NWMwLDAuOTQ5LTAuNTc5LDEuNzctMS40MDQsMi4xMTljLTAuMjc1LDAuMTE1LTAuNTc4LDAuMTgtMC44OTUsMC4xOCBDMTQuODMxLDE5Ljk3MSwxMy44MDMsMTguOTQsMTMuODAzLDE3LjY3MXogTTE2LjEwMSwxMS4yMDljMS4zNzMsMCwyLjY0NiwwLjQzNCwzLjY5NCwxLjE2N2MtMS4xNjUsMC44MjUtNC43NDMsMi4xMjMtNy40OTYsMC4wNzggQzEzLjM2NywxMS42NzIsMTQuNjgxLDExLjIwOSwxNi4xMDEsMTEuMjA5eiBNOS42NDIsMTcuNjcxYzAtMC4wOTIsMC4wMDQtMC4xODUsMC4wMDYtMC4yNzdjMC4xMDcsMC4wNjEsMi45OTksMS42MjEsMy4yMjEsNS44NjUgQzEwLjk0MiwyMi4xMzksOS42NDIsMjAuMDU1LDkuNjQyLDE3LjY3MXogTTE5LjE4OCwyMy4zNDNjMC4wMDItMC4xMDgsMC4yMzktNC4wMTYsMy4zNjktNS44MjQgYzAuMDAxLDAuMDUsMC4wMDQsMC4xMDIsMC4wMDQsMC4xNTJDMjIuNTYyLDIwLjExNCwyMS4xOTYsMjIuMjQ1LDE5LjE4OCwyMy4zNDN6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgaWQ9XFxcIkxheWVyXFxcIiBlbmFibGUtYmFja2dyb3VuZD1cXFwibmV3IDAgMCA2NCA2NFxcXCIgdmlld0JveD1cXFwiMCAwIDY0IDY0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIm0xMy41IDU2aDM3YzMuMDMzIDAgNS41LTIuNDY4IDUuNS01LjVzLTIuNDY3LTUuNS01LjUtNS41aC0xLjA0NmwtMy43ODctMTEuNjc1Yy0uMDA0LS4wMTUtLjAxLS4wMy0uMDE0LS4wNDVsLTMuMzczLTEwLjR2LS4wMDFsLTMuNDgtMTAuNzI5Yy0uODA1LTIuNDgzLTMuMDk4LTQuMTUtNS43MDgtNC4xNWgtMi4xODVjLTIuNjA5IDAtNC45MDMgMS42NjctNS43MDcgNC4xNDlsLTYuODU0IDIxLjEzM2MtLjAwNC4wMTQtLjAxLjAyOC0uMDE0LjA0M2wtMy43ODYgMTEuNjc1aC0xLjA0NmMtMy4wMzMgMC01LjUgMi40NjgtNS41IDUuNXMyLjQ2NyA1LjUgNS41IDUuNXptMTEuMzgxLTI5Ljg5OWMyLjE4LjU4OSA0LjYwMS44OTkgNy4xMTkuODk5czQuOTM4LS4zMSA3LjExOS0uODk5bDIuMjI4IDYuODY5Yy0yLjMxOCAxLjI2Ni01Ljc0MiAyLjAzLTkuMzQ3IDIuMDNzLTcuMDI5LS43NjQtOS4zNDctMi4wM3ptNC4xMjQtMTIuNzE4Yy4yNjgtLjgyNyAxLjAzMy0xLjM4MyAxLjkwMy0xLjM4M2gyLjE4NWMuODcgMCAxLjYzNC41NTYgMS45MDIgMS4zODNsMi44ODggOC45MDVjLTEuNzk0LjQ2MS0zLjgyLjcxMi01Ljg4My43MTJzLTQuMDg5LS4yNTEtNS44ODMtLjcxMnptLTcuNjAyIDIzLjQzOWMyLjg2NSAxLjM4MyA2LjYyNyAyLjE3OCAxMC41OTcgMi4xNzhzNy43MzItLjc5NSAxMC41OTctMi4xNzhsMi42NTIgOC4xNzhoLTI2LjQ5OHptLTcuOTAzIDEyLjE3OGgzNC40OTNjLjAwMiAwIC4wMDQuMDAxLjAwNi4wMDFzLjAwNC0uMDAxLjAwNi0uMDAxaDIuNDk1Yy44MjcgMCAxLjUuNjczIDEuNSAxLjVzLS42NzMgMS41LTEuNSAxLjVoLTM3Yy0uODI3IDAtMS41LS42NzMtMS41LTEuNXMuNjczLTEuNSAxLjUtMS41elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDUxMiA1MTJcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48Zz48Zz48cGF0aCBkPVxcXCJNMjQ4LjE1OCwzNDMuMjJjLTE0LjYzOSwwLTI2LjQ5MSwxMi4yLTI2LjQ5MSwyNi44NGMwLDE0LjI5MSwxMS41MDMsMjYuODQsMjYuNDkxLDI2Ljg0IGMxNC45ODgsMCwyNi44NC0xMi41NDgsMjYuODQtMjYuODRDMjc0Ljk5OCwzNTUuNDIsMjYyLjc5OSwzNDMuMjIsMjQ4LjE1OCwzNDMuMjJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI1Mi42OSwxNDAuMDAyYy00Ny4wNTcsMC02OC42NjgsMjcuODg1LTY4LjY2OCw0Ni43MDhjMCwxMy41OTUsMTEuNTAyLDE5Ljg2OSwyMC45MTQsMTkuODY5IGMxOC44MjIsMCwxMS4xNTQtMjYuODQsNDYuNzA4LTI2Ljg0YzE3LjQyOSwwLDMxLjM3Miw3LjY2OSwzMS4zNzIsMjMuNzAzYzAsMTguODI0LTE5LjUyLDI5LjYyOS0zMS4wMjMsMzkuMzg5IGMtMTAuMTA4LDguNzE0LTIzLjM1NCwyMy4wMDYtMjMuMzU0LDUyLjk4M2MwLDE4LjEyNSw0Ljg3OSwyMy4zNTQsMTkuMTcxLDIzLjM1NGMxNy4wOCwwLDIwLjU2NS03LjY2OCwyMC41NjUtMTQuMjkxIGMwLTE4LjEyNiwwLjM1LTI4LjU4MywxOS41MjEtNDMuNTcxYzkuNDExLTcuMzIsMzkuMDQtMzEuMDIzLDM5LjA0LTYzLjc4OVMyOTcuMzA3LDE0MC4wMDIsMjUyLjY5LDE0MC4wMDJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI1NiwwQzExNC41MTYsMCwwLDExNC40OTcsMCwyNTZ2MjM2YzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDIzNmMxNDEuNDgzLDAsMjU2LTExNC40OTcsMjU2LTI1NiBDNTEyLDExNC41MTYsMzk3LjUwMywwLDI1NiwweiBNMjU2LDQ3Mkg0MFYyNTZjMC0xMTkuMzc3LDk2LjYwNy0yMTYsMjE2LTIxNmMxMTkuMzc3LDAsMjE2LDk2LjYwNywyMTYsMjE2IEM0NzIsMzc1LjM3NywzNzUuMzkzLDQ3MiwyNTYsNDcyelxcXCI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIuMDA0IDUxMi4wMDRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDQgNTEyLjAwNDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxnPjxwYXRoIGQ9XFxcIk01MDMuMzI1LDE0MC45MzFjLTE0LjI5LDAtMjAuOTg5LTYuMTQyLTI5LjQ2OS0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODItNDEuMTk4LTE4LjQ4MiBzLTMxLjc1MSw5LjgxOS00MS4xOTksMTguNDgyYy04LjQ3OSw3Ljc3Ni0xNS4xNzcsMTMuOTE4LTI5LjQ2NywxMy45MThzLTIwLjk4OC02LjE0Mi0yOS40NjctMTMuOTE4IGMtOS40NDgtOC42NjMtMjAuMTU1LTE4LjQ4Mi00MS4xOTgtMTguNDgycy0zMS43NSw5LjgxOS00MS4xOTgsMTguNDgzYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE3LTI5LjQ2NSwxMy45MTcgYy0xNC4yODgsMC0yMC45ODUtNi4xNDItMjkuNDY0LTEzLjkxN2MtOS40NDctOC42NjMtMjAuMTU0LTE4LjQ4My00MS4xOTYtMTguNDgzYy0yMS4wNDIsMC0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MiBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTgtMjkuNDY1LDEzLjkxOHMtMjAuOTg3LTYuMTQyLTI5LjQ2Ni0xMy45MThjLTkuNDQ4LTguNjYyLTIwLjE1NS0xOC40ODItNDEuMTk3LTE4LjQ4MiBjLTQuNzk0LDAtOC42NzgsMy44ODYtOC42NzgsOC42NzhzMy44ODQsOC42NzgsOC42NzgsOC42NzhjMTQuMjg5LDAsMjAuOTg3LDYuMTQyLDI5LjQ2NSwxMy45MTcgYzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODMsNDEuMTk4LDE4LjQ4M2MyMS4wNDIsMCwzMS43NDktOS44MTksNDEuMTk3LTE4LjQ4MWM4LjQ3OC03Ljc3NiwxNS4xNzYtMTMuOTE4LDI5LjQ2NS0xMy45MTggYzE0LjI4OCwwLDIwLjk4NSw2LjE0MiwyOS40NjQsMTMuOTE3YzkuNDQ3LDguNjYzLDIwLjE1NCwxOC40ODMsNDEuMTk2LDE4LjQ4M3MzMS43NDktOS44MTgsNDEuMTk3LTE4LjQ4MSBjOC40NzktNy43NzYsMTUuMTc3LTEzLjkxOCwyOS40NjYtMTMuOTE4czIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE3YzkuNDQ4LDguNjYzLDIwLjE1NiwxOC40ODMsNDEuMTk4LDE4LjQ4MyBzMzEuNzUtOS44MTgsNDEuMTk4LTE4LjQ4MWM4LjQ4MS03Ljc3NiwxNS4xNzgtMTMuOTE4LDI5LjQ2OS0xMy45MThjMTQuMjksMCwyMC45ODksNi4xNDIsMjkuNDY5LDEzLjkxOCBjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4MSw0MS4xOTgsMTguNDgxYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzhDNTEyLjAwNCwxNDQuODE3LDUwOC4xMTksMTQwLjkzMSw1MDMuMzI1LDE0MC45MzF6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNNTAzLjMyMywyMjIuNjU5Yy0xNC4yOSwwLTIwLjk4OS02LjE0Mi0yOS40NjktMTMuOTE4Yy05LjQ0Ny04LjY2My0yMC4xNTUtMTguNDgyLTQxLjE5OC0xOC40ODIgcy0zMS43NTEsOS44MTktNDEuMTk5LDE4LjQ4MmMtOC40NzksNy43NzYtMTUuMTc3LDEzLjkxOC0yOS40NjcsMTMuOTE4cy0yMC45ODgtNi4xNDItMjkuNDY4LTEzLjkxOCBjLTkuNDQ3LTguNjYzLTIwLjE1My0xOC40ODItNDEuMTk3LTE4LjQ4MnMtMzEuNzUsOS44MTktNDEuMTk4LDE4LjQ4M2MtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxNy0yOS40NjUsMTMuOTE3IGMtMTQuMjg4LDAtMjAuOTg0LTYuMTQyLTI5LjQ2NC0xMy45MTdjLTEuMDgzLTAuOTkzLTIuMTY1LTEuOTg2LTMuMjYzLTIuOTY1Yy0zLjU3OC0zLjE5LTkuMDY0LTIuODczLTEyLjI1MywwLjcwMyBjLTMuMTg5LDMuNTc4LTIuODczLDkuMDY0LDAuNzA0LDEyLjI1M2MxLjAzNywwLjkyNCwyLjA1OSwxLjg2MiwzLjA4MSwyLjc5OWM5LjQ0Nyw4LjY2MiwyMC4xNTQsMTguNDgxLDQxLjE5NSwxOC40ODEgYzIxLjA0MiwwLDMxLjc0OS05LjgxOCw0MS4xOTctMTguNDgxYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOHMyMC45ODcsNi4xNDIsMjkuNDY2LDEzLjkxNyBjOS40NDgsOC42NjMsMjAuMTU2LDE4LjQ4Myw0MS4xOTgsMTguNDgzczMxLjc1LTkuODE4LDQxLjE5OC0xOC40ODFjOC40OC03Ljc3NiwxNS4xNzgtMTMuOTE4LDI5LjQ2OS0xMy45MTggYzE0LjI5LDAsMjAuOTg5LDYuMTQyLDI5LjQ2OSwxMy45MThjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4MSw0MS4xOTgsMTguNDgxYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzggQzUxMi4wMDEsMjI2LjU0NCw1MDguMTE2LDIyMi42NTksNTAzLjMyMywyMjIuNjU5elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTE2Mi4zNzYsMTkxLjU2MWMtMy44NjQtMC44NjMtOC4wMjctMS4zMDItMTIuMzcyLTEuMzAyYy0yMS4wNDIsMC0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MSBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTgtMjkuNDY1LDEzLjkxOHMtMjAuOTg3LTYuMTQyLTI5LjQ2Ni0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODEtNDEuMTk3LTE4LjQ4MSBjLTQuNzk0LDAtOC42NzgsMy44ODYtOC42NzgsOC42NzhzMy44ODQsOC42OCw4LjY3OCw4LjY4YzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjUsMTMuOTE3IGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgzLDQxLjE5OCwxOC40ODNjMjEuMDQyLDAsMzEuNzQ5LTkuODE5LDQxLjE5Ny0xOC40ODJjOC40NzgtNy43NzYsMTUuMTc2LTEzLjkxOCwyOS40NjUtMTMuOTE4IGMzLjExOCwwLDUuOTI3LDAuMjg5LDguNTg3LDAuODgzYzQuNjc0LDEuMDQ0LDkuMzE3LTEuODk5LDEwLjM2Mi02LjU3N1MxNjcuMDUzLDE5Mi42MDYsMTYyLjM3NiwxOTEuNTYxelxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTUwMy4zMjMsMzg2LjExNWMtMTQuMjksMC0yMC45ODktNi4xNDItMjkuNDY5LTEzLjkxOGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4MS00MS4xOTgtMTguNDgxIHMtMzEuNzUxLDkuODE5LTQxLjE5OSwxOC40ODFjLTguNDc5LDcuNzc2LTE1LjE3NywxMy45MTgtMjkuNDY3LDEzLjkxOHMtMjAuOTg4LTYuMTQyLTI5LjQ2OC0xMy45MTggYy05LjQ0Ny04LjY2My0yMC4xNTMtMTguNDgxLTQxLjE5Ny0xOC40ODFzLTMxLjc1LDkuODE5LTQxLjE5OCwxOC40ODNjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTctMjkuNDY1LDEzLjkxNyBjLTE0LjI4OCwwLTIwLjk4NS02LjE0Mi0yOS40NjQtMTMuOTE3Yy05LjQ0Ny04LjY2My0yMC4xNTQtMTguNDgzLTQxLjE5Ni0xOC40ODNzLTMxLjc0OSw5LjgxOS00MS4xOTcsMTguNDgxIGMtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxOC0yOS40NjUsMTMuOTE4Yy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4YzAsNC43OTMsMy44ODQsOC42NzgsOC42NzgsOC42NzggYzIxLjA0MiwwLDMxLjc0OS05LjgxOSw0MS4xOTctMTguNDgxYzguNDc4LTcuNzc2LDE1LjE3Ni0xMy45MTgsMjkuNDY1LTEzLjkxOGMxNC4yODgsMCwyMC45ODUsNi4xNDIsMjkuNDY0LDEzLjkxNyBjOS40NDcsOC42NjMsMjAuMTU0LDE4LjQ4Myw0MS4xOTYsMTguNDgzczMxLjc0OS05LjgxOCw0MS4xOTctMTguNDgxYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOCBzMjAuOTg3LDYuMTQyLDI5LjQ2NiwxMy45MThjOS40NDgsOC42NjIsMjAuMTU2LDE4LjQ4MSw0MS4xOTgsMTguNDgxczMxLjc1LTkuODE4LDQxLjE5OC0xOC40ODEgYzguNDgxLTcuNzc2LDE1LjE3OC0xMy45MTgsMjkuNDY5LTEzLjkxOGMxNC4yOSwwLDIwLjk4OSw2LjE0MiwyOS40NjksMTMuOTE4YzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODEsNDEuMTk4LDE4LjQ4MSBjNC43OTQsMCw4LjY3OC0zLjg4Niw4LjY3OC04LjY3OEM1MTIuMDAxLDM5MC4wMDEsNTA4LjExNiwzODYuMTE1LDUwMy4zMjMsMzg2LjExNXpcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk01OS4wMjgsMzc5LjkxN2MtMy4xNjItMi4yMjctNi4wNzEtNC44OTUtOS4xNTItNy43MTljLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODMtNDEuMTk3LTE4LjQ4MyBjLTQuNzk0LDAtOC42NzgsMy44ODYtOC42NzgsOC42NzhzMy44ODQsOC42NzgsOC42NzgsOC42NzhjMTQuMjg5LDAsMjAuOTg3LDYuMTQyLDI5LjQ2NiwxMy45MTggYzMuMzUsMy4wNzEsNi44MTIsNi4yNDYsMTAuODg4LDkuMTE3YzEuNTE5LDEuMDcsMy4yNjIsMS41ODQsNC45OSwxLjU4NGMyLjcyNywwLDUuNDE0LTEuMjgyLDcuMTA0LTMuNjgyIEM2My44ODYsMzg4LjA5LDYyLjk0NiwzODIuNjc3LDU5LjAyOCwzNzkuOTE3elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTUwMy4zMjMsMzA0LjM4N2MtMTQuMjksMC0yMC45ODktNi4xNDItMjkuNDY5LTEzLjkxOGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4MS00MS4xOTgtMTguNDgxIGMtMjEuMDQyLDAtMzEuNzQ5LDkuODE4LTQxLjE5OCwxOC40OGMtMy41MzMsMy4yMzktMy43NzEsOC43MjgtMC41MzEsMTIuMjYyYzMuMjM4LDMuNTMzLDguNzI3LDMuNzcsMTIuMjYyLDAuNTMxIGM4LjQ3OS03Ljc3NSwxNS4xNzgtMTMuOTE3LDI5LjQ2Ny0xMy45MTdjMTQuMjksMCwyMC45ODksNi4xNDIsMjkuNDY5LDEzLjkxOGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgxLDQxLjE5OCwxOC40ODEgYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzhDNTEyLjAwMSwzMDguMjcyLDUwOC4xMTYsMzA0LjM4Nyw1MDMuMzIzLDMwNC4zODd6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNMzgyLjEyOCwzMDkuNTE2Yy0xLjE5MS00LjY0Mi01LjkxNS03LjQzOS0xMC41NjUtNi4yNDhjLTIuOTM0LDAuNzUzLTYuMDY2LDEuMTItOS41NzMsMS4xMiBjLTE0LjI5LDAtMjAuOTg4LTYuMTQyLTI5LjQ2OC0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NC0xOC40ODItNDEuMTk3LTE4LjQ4MnMtMzEuNzUsOS44MTktNDEuMTk4LDE4LjQ4MyBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTctMjkuNDY1LDEzLjkxN2MtMTQuMjg4LDAtMjAuOTg1LTYuMTQyLTI5LjQ2NC0xMy45MThjLTkuNDQ3LTguNjYyLTIwLjE1NC0xOC40ODItNDEuMTk2LTE4LjQ4MiBjLTIxLjA0MiwwLTMxLjc0OSw5LjgxOS00MS4xOTcsMTguNDgyYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE4LTI5LjQ2NSwxMy45MThzLTIwLjk4Ny02LjE0Mi0yOS40NjYtMTMuOTE4IGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4Mi00MS4xOTctMTguNDgyYy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4czMuODg2LDguNjc3LDguNjgsOC42NzcgYzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjUsMTMuOTE3YzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODMsNDEuMTk4LDE4LjQ4M2MyMS4wNDIsMCwzMS43NDktOS44MTksNDEuMTk3LTE4LjQ4MiBjOC40NzgtNy43NzYsMTUuMTc2LTEzLjkxOCwyOS40NjUtMTMuOTE4YzE0LjI4OCwwLDIwLjk4NSw2LjE0MiwyOS40NjQsMTMuOTE4YzkuNDQ3LDguNjYyLDIwLjE1NCwxOC40ODEsNDEuMTk2LDE4LjQ4MSBzMzEuNzQ5LTkuODE4LDQxLjE5Ny0xOC40ODFjOC40NzktNy43NzYsMTUuMTc3LTEzLjkxOCwyOS40NjYtMTMuOTE4czIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE4IGM5LjQ0OCw4LjY2MiwyMC4xNTYsMTguNDgxLDQxLjE5OCwxOC40ODFjNC45MTMsMCw5LjU4Ny0wLjU2LDEzLjg5LTEuNjY0QzM4MC41MjMsMzE4Ljg4OCwzODMuMzE5LDMxNC4xNTcsMzgyLjEyOCwzMDkuNTE2elxcXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCItNiAwIDUxMiA1MTJcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwibTQwMS43NDIxODggMTUyLjYzNjcxOWMyMC40ODA0NjggMS4wMTU2MjUgNDIuMTM2NzE4LTcuNjQ0NTMxIDU4LjE0NDUzMS0yMy42NTYyNSAyMi43NDYwOTMtMjIuNzQyMTg4IDE3LjA5Mzc1LTYzLjI4OTA2MyAxMy4wMTk1MzEtODEuNTg5ODQ0bDI2LjIzMDQ2OS0yNi4yMzA0NjktMjEuMTY0MDYzLTIxLjE2MDE1Ni0yNi4yMjY1NjIgMjYuMjI2NTYyYy0xOC4zMDQ2ODgtNC4wNzQyMTgtNTguODUxNTYzLTkuNzI2NTYyLTgxLjU5Mzc1IDEzLjAxOTUzMi0xNC42MTMyODIgMTQuNjA5Mzc1LTIzLjE5MTQwNiAzMy45NzY1NjItMjMuNzIyNjU2IDUyLjk1NzAzMWwtMjIuNzY5NTMyIDI0LjM1MTU2M2MtMTcuNzY5NTMxIDE5LTI3LjMxNjQwNiA0My43OTI5NjgtMjYuODgyODEyIDY5LjgwNDY4Ny40Mzc1IDI2LjAxMTcxOSAxMC44MDg1OTQgNTAuNDcyNjU2IDI5LjIwMzEyNSA2OC44NjcxODdsNTEuNjY0MDYyIDUxLjY2NDA2M2M1Ljc5Mjk2OSA1Ljc5Mjk2OSA1Ljc5Mjk2OSAxNS4yMTQ4NDQgMCAyMS4wMTE3MTlsLTEuMTg3NSAxLjE4NzVjLTUuNzkyOTY5IDUuNzkyOTY4LTE1LjIxODc1IDUuNzkyOTY4LTIxLjAxMTcxOSAwbC0xNzYuNzAzMTI0LTE3Ni43MDcwMzJjLTE3LjY3OTY4OC0xNy42Nzk2ODctNDEuMTc1NzgyLTI3LjY0MDYyNC02Ni4xNjAxNTctMjguMDUwNzgxLTI1LjIyMjY1Ni0uNDE0MDYyLTQ4LjkxNDA2MiA4LjkzNzUtNjYuODMyMDMxIDI2LjMzNTkzOC0xOC4xNDA2MjUgMTcuNjA5Mzc1LTI4LjI3MzQzOCA0MS4yODUxNTYtMjguNTI3MzQ0IDY2LjY2NDA2Mi0uMjU3ODEyIDI1LjM4NjcxOSA5LjM4NjcxOSA0OS4yNjU2MjUgMjcuMTI4OTA2IDY3LjIwMzEyNWwxMjEuMDgyMDMyIDEyMy4wMzkwNjNjMi44MzIwMzEgMi44NjMyODEgNC4zNDc2NTYgNi42Nzk2ODcgNC4yNjU2MjUgMTAuNzUzOTA2LS4wODIwMzEgNC4wNjI1LTEuNzUzOTA3IDcuODE2NDA2LTQuNzA3MDMxIDEwLjU3MDMxMy01Ljc3NzM0NCA1LjM5MDYyNC0xNS4yMzgyODIgNS4wMTk1MzEtMjEuMDg1OTM4LS44MjgxMjZsLTQyLjIyNjU2Mi00Mi4yMzA0NjhjLTI1LjExNzE4OC0yNS4xMTMyODItNjUuOTg0Mzc2LTI1LjExMzI4Mi05MS4xMDE1NjMgMGwtMTAuNTc4MTI1IDEwLjU4MjAzMSA4Ny41MTE3MTkgODcuNTExNzE5YzE3LjY3OTY4NyAxNy42Nzk2ODcgNDEuMTc1NzgxIDI3LjY0NDUzMSA2Ni4xNjAxNTYgMjguMDU0Njg3LjUzNTE1Ni4wMDc4MTMgMS4wNjI1LjAxMTcxOSAxLjU5NzY1Ni4wMTE3MTkgMjQuNTgyMDMxIDAgNDcuNjk1MzEzLTkuMzI0MjE5IDY1LjIzNDM3NS0yNi4zNTE1NjIgMTguMTM2NzE5LTE3LjYwOTM3NiAyOC4yNjk1MzItNDEuMjgxMjUgMjguNTI3MzQ0LTY2LjY2MDE1Ny4yNTc4MTItMjUuMzkwNjI1LTkuMzg2NzE5LTQ5LjI2NTYyNS0yNy4xMzI4MTItNjcuMjA3MDMxbC0xMjEuMDgyMDMyLTEyMy4wMzkwNjJjLTIuODMyMDMxLTIuODYzMjgyLTQuMzQzNzUtNi42Nzk2ODgtNC4yNjE3MTgtMTAuNzUzOTA3LjA4MjAzMS00LjA2MjUgMS43NTM5MDYtNy44MTY0MDYgNC43MDMxMjQtMTAuNTcwMzEyIDUuNzc3MzQ0LTUuMzkwNjI1IDE1LjIzODI4Mi01LjAxOTUzMSAyMS4wODU5MzguODI4MTI1bDE3Ni45NzI2NTYgMTc2Ljk3MjY1NmMxNy43OTY4NzUgMTcuNzk2ODc1IDQxLjQ2MDkzOCAyNy42MDE1NjIgNjYuNjMyODEzIDI3LjYwMTU2MnM0OC44Mzk4NDMtOS44MDQ2ODcgNjYuNjM2NzE5LTI3LjYwMTU2MmwxLjE5MTQwNi0xLjE5MTQwNmMzNi43NDIxODctMzYuNzQyMTg4IDM2Ljc0MjE4Ny05Ni41MjczNDQgMC0xMzMuMjY5NTMybC01MC43OTI5NjktNTAuNzkyOTY4Yy0zLjgxNjQwNi0zLjgxNjQwNi01LjkxNzk2OS04Ljg5MDYyNS01LjkxNzk2OS0xNC4yODUxNTYgMC01LjM5ODQzOCAyLjEwMTU2My0xMC40Njg3NSA1LjkxNzk2OS0xNC4yODUxNTd6bTAgMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAtNCA1MTIuMDAxNjQgNTEyXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIm00OTYuOTE0MDYyIDM1NC4zNjcxODgtNzQuMTc5Njg3LTc2LjY3OTY4OCAyOC44NzUtMTEuOTYwOTM4YzEyLjI2NTYyNS01LjA4MjAzMSAyMS44MTY0MDYtMTQuNjM2NzE4IDI2Ljg5ODQzNy0yNi45MDIzNDMgNS4wODIwMzItMTIuMjY1NjI1IDUuMDgyMDMyLTI1Ljc3NzM0NCAwLTM4LjA0Mjk2OS03LjcyMjY1Ni0xOC42NDQ1MzEtMjUuNzUzOTA2LTMwLjY5MTQwNi00NS45MzM1OTMtMzAuNjkxNDA2LTYuNTM1MTU3IDAtMTIuOTMzNTk0IDEuMjc3MzQ0LTE5LjAwNzgxMyAzLjc5Mjk2OGwtMS45NDE0MDYuODA4NTk0di0xOS4wNjY0MDZjMC04NS44MTI1LTY5LjgxMjUtMTU1LjYyNS0xNTUuNjI1LTE1NS42MjVzLTE1NS42MjUgNjkuODEyNS0xNTUuNjI1IDE1NS42MjV2MTkuMDYyNWwtMS45Mzc1LS44MDA3ODFjLTYuMDc4MTI1LTIuNTE5NTMxLTEyLjQ3NjU2Mi0zLjc5Njg3NS0xOS4wMTE3MTktMy43OTY4NzUtMjAuMTgzNTkzIDAtMzguMjE0ODQzIDEyLjA1MDc4MS00NS45MzM1OTMgMzAuNjkxNDA2LTUuMDgyMDMyIDEyLjI2NTYyNS01LjA4MjAzMiAyNS43NzczNDQtLjAwMzkwNyAzOC4wNDI5NjkgNS4wODIwMzEgMTIuMjY1NjI1IDE0LjYzNjcxOSAyMS44MjAzMTIgMjYuODk4NDM4IDI2LjkwMjM0M2wyOC44NzUgMTEuOTYwOTM4LTc0LjE3NTc4MSA3Ni42Nzk2ODhjLTE3Ljg1MTU2MyAxOC40NDkyMTgtMTYuMDcwMzEzIDMzLjQ3NjU2Mi0xMy40MjE4NzYgNDAuNzk2ODc0IDMuOTYwOTM4IDEwLjkzMzU5NCAxNC40MTc5NjkgMTguMDg1OTM4IDI4LjY5MTQwNyAxOS42MTcxODggNS43NDYwOTMuNjE3MTg4IDEwLjg5ODQzNyAzLjQzMzU5NCAxNC41MTU2MjUgNy45Mjk2ODggMy40OTIxODcgNC4zNDc2NTYgNS4wODk4NDQgOS43MzA0NjggNC40ODgyODEgMTUuMTY0MDYyLTEuNTQ2ODc1IDE0LjA1ODU5NCAzLjI3NzM0NCAyMi43NTM5MDYgNy41OTc2NTYgMjcuNTc0MjE5IDUuNjY3OTY5IDYuMzI4MTI1IDEzLjk1NzAzMSA5LjgxNjQwNiAyMy4zMzk4NDQgOS44MTY0MDYgNy45NTcwMzEgMCAxNi40OTYwOTQtMi4zOTg0MzcgMjUuMzc4OTA2LTcuMTIxMDk0bDUuMTAxNTYzLTIuNzE0ODQzYzcuMjk2ODc1LTMuODc4OTA3IDE3LjI0MjE4Ny02LjAxNTYyNiAyOC02LjAxNTYyNiAxMi40NTMxMjUgMCAyNC4yNjU2MjUgMi44NjMyODIgMzIuNDE3OTY4IDcuODU1NDY5bDM5Ljk3NjU2MyAyNC40OTYwOTRjMTEuOTAyMzQ0IDcuMjkyOTY5IDI3LjY0MDYyNSAxMS42MjUgNDQuMzEyNSAxMi4xOTkyMTkuMTcxODc1LjAwNzgxMi4zNDM3NS4wMTE3MTguNTE1NjI1LjAxMTcxOHMuMzQ3NjU2LS4wMDM5MDYuNTE5NTMxLS4wMTE3MThjMTYuNjY3OTY5LS41NzQyMTkgMzIuNDAyMzQ0LTQuOTA2MjUgNDQuMzA4NTk0LTEyLjE5OTIxOWwzOS45NzI2NTYtMjQuNDk2MDk0YzguMTUyMzQ0LTQuOTkyMTg3IDE5Ljk2ODc1LTcuODU1NDY5IDMyLjQxNzk2OS03Ljg1NTQ2OSAxMC43NjU2MjUgMCAyMC43MDcwMzEgMi4xMzY3MTkgMjggNi4wMTU2MjZsNS4xMDU0NjkgMi43MTQ4NDNjOC44ODI4MTIgNC43MjI2NTcgMTcuNDIxODc1IDcuMTE3MTg4IDI1LjM3NSA3LjEyMTA5NGguMDAzOTA2YzkuMzgyODEzIDAgMTcuNjcxODc1LTMuNDg4MjgxIDIzLjM0Mzc1LTkuODE2NDA2IDQuMzE2NDA2LTQuODIwMzEzIDkuMTQwNjI1LTEzLjUxNTYyNSA3LjU5Mzc1LTI3LjU3ODEyNS0uNTk3NjU2LTUuNDI5Njg4Ljk5NjA5NC0xMC44MTI1IDQuNDkyMTg3LTE1LjE2MDE1NiAzLjYwOTM3Ni00LjQ5NjA5NCA4Ljc2NTYyNi03LjMxMjUgMTQuNTE1NjI2LTcuOTI5Njg4IDE0LjI3MzQzNy0xLjUzMTI1IDI0LjczMDQ2OC04LjY4MzU5NCAyOC42ODc1LTE5LjYxNzE4OCAyLjY0ODQzNy03LjMyMDMxMiA0LjQyOTY4Ny0yMi4zNDc2NTYtMTMuNDIxODc2LTQwLjc5Njg3NHptMCAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzQ0LjU3IDM0NC41N1xcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ0LjU3IDM0NC41NztcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk0zMzUuMjA2LDE0NC41NTJjLTQuMTQyLDAtNy41LDMuMzU3LTcuNSw3LjVjMCwxOS4xODMtMTUuNjA2LDM0Ljc4OS0zNC43OSwzNC43ODljLTMuNjQ1LDAtNy4yNzYtMC41ODItMTAuNzkzLTEuNzMgYy0yLjI0OS0wLjczMy00LjcxNC0wLjM2NC02LjY0OCwwLjk5OWMtMS45MzQsMS4zNjMtMy4xMTIsMy41Ni0zLjE3Niw1LjkyNmMtMC41MiwxOC45NjgtMTUuNzc2LDMzLjgyNi0zNC43MzMsMzMuODI2IGMtMTAuMTA1LDAtMTkuNzA2LTQuNDE1LTI2LjM0MS0xMi4xMTRjLTEuNDI1LTEuNjUzLTMuNDk5LTIuNjA0LTUuNjgxLTIuNjA0Yy0yLjE4MiwwLTQuMjU2LDAuOTUtNS42ODEsMi42MDQgYy02LjYzNSw3LjY5OS0xNi4yMzYsMTIuMTE0LTI2LjM0MSwxMi4xMTRjLTEwLjcyNSwwLTIwLjY5Ni00Ljg2OC0yNy4zNTgtMTMuMzU2Yy0xLjQyMi0xLjgxMi0zLjU5Ny0yLjg2OS01LjktMi44NjkgYy0yLjMwMywwLTQuNDc4LDEuMDU4LTUuOSwyLjg2OWMtNi42NjIsOC40ODgtMTYuNjM0LDEzLjM1Ni0yNy4zNTgsMTMuMzU2Yy02Ljk5OSwwLTEzLjc0MS0yLjA2OS0xOS40OTktNS45ODUgYy0zLjQyNS0yLjMzMS04LjA5LTEuNDQyLTEwLjQxOSwxLjk4M2MtMi4zMywzLjQyNS0xLjQ0MSw4LjA5LDEuOTg0LDEwLjQxOWM4LjI1NSw1LjYxNSwxNy45MTUsOC41ODMsMjcuOTM0LDguNTgzIGMxMi40NTEsMCwyNC4xODctNC41NzIsMzMuMjU4LTEyLjc2OGM5LjA3MSw4LjE5NSwyMC44MDcsMTIuNzY4LDMzLjI1OCwxMi43NjhjMTEuNzk1LDAsMjMuMTA1LTQuMTkzLDMyLjAyMi0xMS43MDMgYzguOTE3LDcuNTEsMjAuMjI3LDExLjcwMywzMi4wMjIsMTEuNzAzYzEzLjA1NywwLDI1LjM5MS01LjAyMSwzNC43MzEtMTQuMTRjNy4xNDEtNi45NzMsMTEuOTM4LTE1Ljc1MywxMy45NDgtMjUuMzM0IGMyLjIxMSwwLjMwMiw0LjQzOSwwLjQ1Myw2LjY3MiwwLjQ1M2MyNy40NTQsMCw0OS43OS0yMi4zMzUsNDkuNzktNDkuNzg5QzM0Mi43MDYsMTQ3LjkwOSwzMzkuMzQ4LDE0NC41NTIsMzM1LjIwNiwxNDQuNTUyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk02Ny4xMDIsMTk5LjM3YzMuOTM4LTEuMjg2LDYuMDg3LTUuNTIsNC44MDItOS40NThjLTEuMjg2LTMuOTM3LTUuNTIxLTYuMDg2LTkuNDU3LTQuODAyIGMtMy41MTcsMS4xNDgtNy4xNDgsMS43My0xMC43OTMsMS43M2MtMTkuMTgzLDAtMzQuNzktMTUuNjA2LTM0Ljc5LTM0Ljc4OWMwLTkuOTA4LDQuMjgzLTE5LjM4OCwxMS43NTItMjYuMDA5IGMxLjYwNS0xLjQyNCwyLjUyNC0zLjQ2NywyLjUyNC01LjYxMnMtMC45MTktNC4xODgtMi41MjQtNS42MTFjLTcuNDY4LTYuNjIzLTExLjc1Mi0xNi4xMDMtMTEuNzUyLTI2LjAxIGMwLTE5LjE4NCwxNS42MDYtMzQuNzksMzQuNzktMzQuNzljMy42NDMsMCw3LjI3NCwwLjU4MiwxMC43OTQsMS43M2MyLjI1LDAuNzM0LDQuNzEzLDAuMzYzLDYuNjQ3LTFzMy4xMTEtMy41NiwzLjE3Ni01LjkyNSBDNzIuNzkyLDI5Ljg1OCw4OC4wNDgsMTUsMTA3LjAwNSwxNWMxMC43MjUsMCwyMC42OTcsNC44NjgsMjcuMzU4LDEzLjM1NWMxLjQyMiwxLjgxMywzLjU5NywyLjg3LDUuOSwyLjg3IGMyLjMwMywwLDQuNDc5LTEuMDU5LDUuOS0yLjg3QzE1Mi44MjQsMTkuODY4LDE2Mi43OTUsMTUsMTczLjUyMSwxNWM0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNSBjLTEyLjQ1MiwwLTI0LjE4Nyw0LjU3Mi0zMy4yNTgsMTIuNzY3QzEzMS4xOTEsNC41NzIsMTE5LjQ1NywwLDEwNy4wMDUsMGMtMTMuMDU3LDAtMjUuMzkxLDUuMDIxLTM0LjczLDE0LjE0IGMtNy4xNDEsNi45NzItMTEuOTM4LDE1Ljc1My0xMy45NDgsMjUuMzMzYy0yLjIxMS0wLjMwMi00LjQzOS0wLjQ1My02LjY3Mi0wLjQ1M2MtMjcuNDU0LDAtNDkuNzksMjIuMzM2LTQ5Ljc5LDQ5Ljc5IGMwLDExLjU4Nyw0LjA4LDIyLjc1OCwxMS4zODcsMzEuNjIxYy03LjMwNyw4Ljg2Mi0xMS4zODcsMjAuMDMzLTExLjM4NywzMS42MjFjMCwyNy40NTQsMjIuMzM1LDQ5Ljc4OSw0OS43OSw0OS43ODkgQzU2Ljg4MiwyMDEuODQxLDYyLjA4LDIwMS4wMSw2Ny4xMDIsMTk5LjM3elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMDAuNjQ3LDI3Ljg5OWMzLjEzOCwyLjcwNCw3Ljg3NCwyLjM1MiwxMC41NzgtMC43ODVDMjE3Ljg1OSwxOS40MTUsMjI3LjQ2LDE1LDIzNy41NjUsMTUgYzE4Ljk1OCwwLDM0LjIxNCwxNC44NTcsMzQuNzMzLDMzLjgyNWMwLjA2NCwyLjM2NSwxLjI0Miw0LjU2MiwzLjE3Niw1LjkyNXM0LjM5NywxLjczNCw2LjY0NywxIGMzLjUyLTEuMTQ4LDcuMTUyLTEuNzMsMTAuNzk0LTEuNzNjMTkuMTgzLDAsMzQuNzksMTUuNjA2LDM0Ljc5LDM0Ljc5YzAsOS45MDctNC4yODQsMTkuMzg3LTExLjc1MiwyNi4wMSBjLTMuMSwyLjc0OC0zLjM4NCw3LjQ4OC0wLjYzNiwxMC41ODdjMS40ODIsMS42NzIsMy41NDMsMi41MjQsNS42MTUsMi41MjRjMS43NjksMCwzLjU0NS0wLjYyMiw0Ljk3My0xLjg4OSBjMTAuNjc3LTkuNDY3LDE2LjgwMS0yMy4wMzcsMTYuODAxLTM3LjIzMmMwLTI3LjQ1NC0yMi4zMzUtNDkuNzktNDkuNzktNDkuNzljLTIuMjMzLDAtNC40NiwwLjE1MS02LjY3MiwwLjQ1MyBjLTIuMDEtOS41OC02LjgwNy0xOC4zNjEtMTMuOTQ4LTI1LjMzM0MyNjIuOTU3LDUuMDIxLDI1MC42MjIsMCwyMzcuNTY1LDBjLTE0LjQ3NSwwLTI4LjIxNyw2LjMxMy0zNy43MDQsMTcuMzIxIEMxOTcuMTU4LDIwLjQ2LDE5Ny41MSwyNS4xOTUsMjAwLjY0NywyNy44OTl6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEyOS4zMTksMjUxLjg5OWMtMjAuNTQxLDAtMzYuNjMsMTAuODAxLTM2LjYzLDI0LjU5czE2LjA5LDI0LjU5LDM2LjYzLDI0LjU5YzIwLjU0LDAsMzYuNjMtMTAuODAxLDM2LjYzLTI0LjU5IFMxNDkuODU5LDI1MS44OTksMTI5LjMxOSwyNTEuODk5eiBNMTI5LjMxOSwyODYuMDc5Yy0xMy4wMDMsMC0yMS42My01Ljc3Mi0yMS42My05LjU5czguNjI3LTkuNTksMjEuNjMtOS41OSBjMTMuMDAzLDAsMjEuNjMsNS43NzIsMjEuNjMsOS41OVMxNDIuMzIyLDI4Ni4wNzksMTI5LjMxOSwyODYuMDc5elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk05NS41MjgsMzEyLjgxOGMtNC4xNDIsMC03LjUsMy4zNTctNy41LDcuNWMwLDQuMzY3LTcuNDIzLDkuMjUyLTE3LjM1OCw5LjI1MnMtMTcuMzU4LTQuODg1LTE3LjM1OC05LjI1MiBjMC00LjM2OCw3LjQyMy05LjI1MywxNy4zNTgtOS4yNTNjNC4xNDIsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjVjLTE4LjE0NSwwLTMyLjM1OCwxMC42NTMtMzIuMzU4LDI0LjI1MyBTNTIuNTI2LDM0NC41Nyw3MC42NywzNDQuNTdzMzIuMzU4LTEwLjY1MiwzMi4zNTgtMjQuMjUyQzEwMy4wMjgsMzE2LjE3Niw5OS42NywzMTIuODE4LDk1LjUyOCwzMTIuODE4elxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCA1MTEgNTExLjk5OVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtMTE0LjQ0OTIxOSA0MTAuMjY5NTMxIDM0LjYyMTA5MyAyNS4wNjY0MDdjMTAuNTkzNzUgNy42Njc5NjggMjUuOTY4NzUgNy42Njc5NjggMzYuNTYyNSAwbDM0LjYyMTA5NC0yNS4wNjY0MDdjMjEuMTA1NDY5LTE1LjI4MTI1IDUwLjU4OTg0NC0xNS4yODEyNSA3MS42OTUzMTMgMGwzNC42MjUgMjUuMDY2NDA3YzEwLjU4OTg0MyA3LjY2Nzk2OCAyNS45Njg3NSA3LjY2Nzk2OCAzNi41NjI1IDBsMzQuNjIxMDkzLTI1LjA2NjQwN2MyMS4xMDkzNzYtMTUuMjgxMjUgNTAuNTg5ODQ0LTE1LjI4MTI1IDcxLjY5OTIxOSAwbDQyLjI1IDMwLjU4NTkzOHYtNjMuMTk1MzEzbC01OS44MjAzMTItNDMuMzA0Njg3Yy0xMC41ODk4NDQtNy42Njc5NjktMjUuOTY0ODQ0LTcuNjY3OTY5LTM2LjU1ODU5NCAwbC0zNC42MjUgMjUuMDYyNWMtMjEuMTA1NDY5IDE1LjI4MTI1LTUwLjU4OTg0NCAxNS4yODEyNS03MS42OTUzMTMgMGwtMzQuNjI1LTI1LjA2MjVjLTEwLjU4OTg0My03LjY3MTg3NS0yNS45Njg3NS03LjY2Nzk2OS0zNi41NTg1OTMgMGwtMzQuNjI1IDI1LjA2MjVjLTIxLjEwNTQ2OSAxNS4yODEyNS01MC41ODk4NDQgMTUuMjgxMjUtNzEuNjk1MzEzIDBsLTM0LjYyNS0yNS4wNjI1Yy0xMC41ODk4NDQtNy42Njc5NjktMjUuOTY4NzUtNy42Njc5NjktMzYuNTU4NTk0IDBsLTU5LjgyMDMxMiA0My4zMDQ2ODd2NjMuMTk1MzEzbDQyLjI1LTMwLjU4NTkzOGMyMS4xMDkzNzUtMTUuMjgxMjUgNTAuNTg5ODQ0LTE1LjI4MTI1IDcxLjY5OTIxOSAwem0wIDBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJtMTE0LjQ0OTIxOSAzMTAuMDg1OTM4IDM0LjYyMTA5MyAyNS4wNjY0MDZjMTAuNTkzNzUgNy42Njc5NjggMjUuOTY4NzUgNy42Njc5NjggMzYuNTYyNSAwbDM0LjYyMTA5NC0yNS4wNjY0MDZjMjEuMTA5Mzc1LTE1LjI3NzM0NCA1MC41OTM3NS0xNS4yNzczNDQgNzEuNjk1MzEzIDBsMzQuNjI1IDI1LjA2NjQwNmMxMC41ODk4NDMgNy42Njc5NjggMjUuOTY4NzUgNy42Njc5NjggMzYuNTYyNSAwbDM0LjYyMTA5My0yNS4wNjY0MDZjMjEuMTA5Mzc2LTE1LjI3NzM0NCA1MC41ODk4NDQtMTUuMjc3MzQ0IDcxLjY5OTIxOSAwbDQyLjI1IDMwLjU4OTg0M3YtOTUuNTAzOTA2aC0xMzkuNjQ4NDM3Yy00NS4xNDg0MzgtMS44NjMyODEtODEuOTA2MjUtNDAuMDc4MTI1LTgxLjk5NjA5NC04NS4zMjAzMTMtLjA0Mjk2OS0yMi44OTQ1MzEgOC44MzU5MzgtNDQuNDIxODc0IDI1LjAwMzkwNi02MC42MjEwOTMgMTUuOTIxODc1LTE1Ljk1NzAzMSAzNy4wMjczNDQtMjQuODUxNTYzIDU5LjUyMzQzOC0yNS4xMTcxODhsOC42NDA2MjUgMS4yNTc4MTMgMTEuNTg1OTM3LTE4LjgyODEyNS04Ljk0OTIxOC04LjM2MzI4MWMtNTkuMjMwNDY5LTU1LjM1NTQ2OS0xNDguNTQyOTY5LTYzLjk0OTIxOS0yMTcuMTgzNTk0LTIwLjkwMjM0NC0yMS42MDkzNzUgMTMuNTU0Njg3LTQwLjU5NzY1NiAzMi41ODU5MzctNTQuOTE3OTY5IDU1LjA1NDY4N2wtMTEzLjI2NTYyNSAxNzguMTcxODc1djgwLjE3MTg3NWw0Mi4yNS0zMC41ODk4NDNjMjEuMTA5Mzc1LTE1LjI3NzM0NCA1MC41ODk4NDQtMTUuMjc3MzQ0IDcxLjY5OTIxOSAwem0wIDBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJtNDE1LjMyNDIxOSA0MzQuNTM1MTU2LTM0LjYyMTA5NCAyNS4wNjY0MDZjLTIxLjEwNTQ2OSAxNS4yNzczNDQtNTAuNTg5ODQ0IDE1LjI3NzM0NC03MS42OTUzMTMgMGwtMzQuNjI1LTI1LjA2NjQwNmMtMTAuNTkzNzUtNy42Njc5NjgtMjUuOTY4NzUtNy42Njc5NjgtMzYuNTYyNSAwbC0zNC42MjEwOTMgMjUuMDY2NDA2Yy0yMS4xMDU0NjkgMTUuMjc3MzQ0LTUwLjU4OTg0NCAxNS4yNzczNDQtNzEuNjk1MzEzIDBsLTM0LjYyNS0yNS4wNjY0MDZjLTEwLjU4OTg0NC03LjY2Nzk2OC0yNS45Njg3NS03LjY2Nzk2OC0zNi41NTg1OTQgMGwtNTkuODIwMzEyIDQzLjMwNDY4OHYzNC4xNjAxNTZoNTExLjIwNzAzMXYtMzQuMTYwMTU2bC01OS44MjAzMTItNDMuMzA0Njg4Yy0xMC41ODk4NDQtNy42Njc5NjgtMjUuOTY0ODQ0LTcuNjY3OTY4LTM2LjU2MjUgMHptMCAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgV1BBUEkgZnJvbSAnd3BhcGknO1xuXG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBnZW9kYXRhIGZyb20gJy4vZ2VvZGF0YSc7XG5pbXBvcnQgY29udGVudEhUTUwgZnJvbSAnLi9jb250ZW50SFRNTCc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvY29uZmlnLmpzb24nO1xuaW1wb3J0IHRoZW1lcyBmcm9tICcuL2NvbmZpZy90aGVtZXMuanNvbic7XG5cblxuY29uc3Qgd3AgPSBuZXcgV1BBUEkoe2VuZHBvaW50OiBjb25maWcud29yZHByZXNzLnJlbW90ZS5lbmRwb2ludH0pO1xuXG5sZXQgdGhlbWU7XG5sZXQgY3VycmVudE5vZGU7XG5sZXQgYWN0aXZlUGFuZWw7XG5cbmNvbnN0IGluaXRIb21lID0gKHtsb2NhdGlvbn0pID0+IHtcblx0Y29udGVudEhUTUwuaW5pdEhvbWUoKTtcblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gODgwKSB1cGRhdGVNYXAoe2xvY2F0aW9ufSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd1BhZ2UgPSBhc3luYyAoe2lkLCBzbHVnfSkgPT4ge1xuXG5cdGF3YWl0IHNldFRoZW1lKHNsdWcpO1xuXG5cdC8vIGlmICh0aGVtZS5pc05ldykgXG5cdGlmIChzbHVnICE9PSAnYWJvdXQnKSB1cGRhdGVNYXAodGhlbWUpO1xuXG5cdC8vIG1hcC5waXRjaE1hcCgpO1xuXG5cdGlmIChpZCA9PSAwKSB7XG5cdFx0Y2hhbmdlQnJvd3Nlckhpc3Rvcnkoe3NsdWc6ICcvZ2hvc3Qtcml2ZXIvJ30pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgbG9hZFBhZ2Uoe2lkLCBzbHVnfSk7XG5cdC8vIGNvbnNvbGUubG9nKHBhZ2VEYXRhKTtcblxuXHRjdXJyZW50Tm9kZSA9IG51bGw7XG5cblx0bWFwLmZseVRvT3JpZ2luKCk7XG5cblx0Ly9wYW5lbFxuXHRhY3RpdmVQYW5lbCA9IChzbHVnID09PSAnYWJvdXQnKSA/ICdmdWxsLXBhbmVsJyA6ICdyaWdodC1wYW5lbCc7XG5cdFxuXHRjb250ZW50SFRNTC51cGRhdGVQYWdlKGFjdGl2ZVBhbmVsLCBwYWdlRGF0YSk7XG5cdFxuXHQvL3Nob3cgcGFuZWxcblx0Y29udGVudEhUTUwuc2hvd1BhbmVsKHtcblx0XHRhY3RpdmVQYW5lbCxcblx0XHRkaXJlY3Rpb246ICdkb3duJyxcblx0XHRkZWxheTogMFxuXHR9KTtcblxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7XG5cdFx0dGl0bGU6IHBhZ2VEYXRhLnRpdGxlLnJlbmRlcmVkLFxuXHRcdHNsdWc6IHBhZ2VEYXRhLnNsdWdcblx0fSk7XG5cblx0cmV0dXJuIHBhZ2VEYXRhO1xuXHRcbn07XG5cbmNvbnN0IGxvYWRQYWdlID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblx0bGV0IHBhZ2VEYXRhO1xuXG5cdGlmIChpZCkge1xuXHRcdHBhZ2VEYXRhID0gYXdhaXQgd3AucGFnZXMoKS5pZChpZCkuZW1iZWQoKTtcblx0fSBlbHNlIGlmIChzbHVnKSB7XG5cdFx0cGFnZURhdGEgPSBhd2FpdCB3cC5wYWdlcygpLnNsdWcoc2x1ZykuZW1iZWQoKTtcblx0XHRwYWdlRGF0YSA9IHBhZ2VEYXRhWzBdO1xuXHR9XG5cblx0cmV0dXJuIHBhZ2VEYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dQb3N0ID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRpZiAoY3VycmVudE5vZGUgJiYgY3VycmVudE5vZGUuaWQgPT0gaWQpIHJldHVybjtcblxuXHRhd2FpdCBjb250ZW50SFRNTC5oaWRlUGFuZWwoe1xuXHRcdGFjdGl2ZVBhbmVsLFxuXHRcdGRpcmVjdGlvbjogJ3VwJ1xuXHR9KTtcblxuXHRjb250ZW50SFRNTC5zaG93U3Bpbm5lcigpO1xuXG5cdC8vcG9zdERhdGEgLSBsb2FkIGJ5IElEIG9yIGJ5IFNsdWdcblx0Y29uc3QgcG9zdERhdGEgPSBhd2FpdCBsb2FkUG9zdCh7aWQsc2x1Z30pO1xuXHQvLyBjb25zb2xlLmxvZyhwb3N0RGF0YSk7XG5cdGlmICghcG9zdERhdGEpIHtcblx0XHRjb250ZW50SFRNTC5oaWRlU3Bpbm5lcigpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGN1cnJlbnROb2RlID0gcG9zdERhdGE7XG5cblx0Y29uc3QgcG9zdENhdGVnb3JpZXMgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVswXTtcblx0Y29uc3QgcG9zdFRhZ3MgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVsxXTtcblxuXHRsZXQgcG9zdFRoZW1lO1xuXHRpZiAodGhlbWUpIHBvc3RUaGVtZSA9IHBvc3RDYXRlZ29yaWVzLmZpbmQoY2F0ID0+IGNhdC5zbHVnID09IHRoZW1lLnNsdWcpO1xuXG5cdGlmICghcG9zdFRoZW1lKSB7XG5cdFx0aWYgKHBvc3RDYXRlZ29yaWVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGNvbnN0IHRoZW1lUG9zdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3RDYXRlZ29yaWVzLmxlbmd0aCk7XG5cdFx0XHRwb3N0VGhlbWUgPSBwb3N0Q2F0ZWdvcmllc1t0aGVtZVBvc3RdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3N0VGhlbWUgPSBwb3N0Q2F0ZWdvcmllc1swXTtcblx0XHR9XG5cdH1cblx0XG5cdGlmIChwb3N0VGhlbWUuc2x1ZyA9PSAndW5jYXRlZ29yaXplZCcpIGNvbnNvbGUubG9nKCdQcm9ibGVtIHdpdGggY2F0ZWdvcnkgXCJ1bmNhdGVnb3JpemVkXCI6ICcsIHBvc3REYXRhKTtcblxuXHRzZXRUaGVtZShwb3N0VGhlbWUuc2x1Zyk7XG5cdGlmICh0aGVtZS5pc05ldykgYXdhaXQgdXBkYXRlTWFwKHRoZW1lKTtcblxuXHQvL2ZseSB0byBsb2NhbFxuXHRnZW9kYXRhLnNldEN1cnJlbnROb2RlKHBvc3REYXRhKTtcblx0Y29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZW9kYXRhLmdldE5vZGVDb29yZGluYXRlcyhwb3N0RGF0YSk7XG5cdG1hcC5mbHlUbyhjb29yZGluYXRlcyk7XG5cblx0YWN0aXZlUGFuZWwgPSAncmlnaHQtcGFuZWwnO1xuXHRcblx0Y29udGVudEhUTUwudXBkYXRlUG9zdChwb3N0RGF0YSxwb3N0VGFncyx0aGVtZSk7XG5cblx0Y29udGVudEhUTUwuaGlkZVNwaW5uZXIoKTtcblxuXHQvL3Nob3cgUGFuZWxcblx0Y29udGVudEhUTUwuc2hvd1BhbmVsKHtcblx0XHRhY3RpdmVQYW5lbCxcblx0XHRkaXJlY3Rpb246ICdkb3duJyxcblx0XHRkZWxheTogMFxuXHR9KTtcblxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7XG5cdFx0dGl0bGU6IHBvc3REYXRhLnRpdGxlLnJlbmRlcmVkLFxuXHRcdHNsdWc6IHBvc3REYXRhLnNsdWdcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRwb3N0OiBwb3N0RGF0YSxcblx0XHR0aGVtZTogcG9zdFRoZW1lXG5cdH07XG5cbn07XG5cbmNvbnN0IGxvYWRQb3N0ID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRsZXQgcG9zdERhdGE7XG5cblx0aWYgKGlkKSB7XG5cdFx0cG9zdERhdGEgPSBhd2FpdCB3cC5wb3N0cygpLmlkKGlkKS5lbWJlZCgpO1xuXHR9IGVsc2UgaWYgKHNsdWcpIHtcblx0XHRwb3N0RGF0YSA9IGF3YWl0IHdwLnBvc3RzKCkuc2x1ZyhzbHVnKS5lbWJlZCgpO1xuXHRcdHBvc3REYXRhID0gcG9zdERhdGFbMF07XG5cdH1cblxuXHRyZXR1cm4gcG9zdERhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VQYW5lbCA9IGFzeW5jICgpID0+IHtcblx0YXdhaXQgY29udGVudEhUTUwuaGlkZVBhbmVsKHtcblx0XHRhY3RpdmVQYW5lbCxcblx0XHRkaXJlY3Rpb246ICd1cCdcblx0fSk7XG5cdGN1cnJlbnROb2RlID0gbnVsbDtcblx0Z2VvZGF0YS5yZXNldE5vZGVzU3RhdGUoKTtcblx0cmV0dXJuIGN1cnJlbnROb2RlO1xufTtcblxuXG5jb25zdCBzZXRUaGVtZSA9IGFzeW5jIHJlcXVlc3RlZFRoZW1lU2x1ZyA9PiB7XG5cblx0aWYgKCF0aGVtZSkgdGhlbWUgPSB7fTtcblxuXHR0aGVtZS5pc05ldyA9IGZhbHNlO1xuXHRcblx0aWYodGhlbWUuc2x1ZyAhPSByZXF1ZXN0ZWRUaGVtZVNsdWcpIHtcblx0XHRjb25zdCByZXF1ZXN0ZWRUaGVtZSA9IGdldFRoZW1lQnlTbHVnKHJlcXVlc3RlZFRoZW1lU2x1Zyk7XG5cdFx0Y2hhbmdlU3RhdGUocmVxdWVzdGVkVGhlbWUuc3RhdGUpO1xuXHRcdHRoZW1lID0gcmVxdWVzdGVkVGhlbWU7XG5cdFx0dGhlbWUuaXNOZXcgPSB0cnVlO1xuXHR9XG5cblx0aWYgKHRoZW1lLnNsdWcgIT0gJ2hvbWUnKSB7XG5cdFx0YXdhaXQgY29udGVudEhUTUwuaGlkZVBhbmVsKHtcblx0XHRcdGFjdGl2ZVBhbmVsLFxuXHRcdFx0ZGlyZWN0aW9uOiAndXAnXG5cdFx0fSk7XG5cdH1cblx0XG5cdHJldHVybiB0aGVtZTtcbn07XG5cbmNvbnN0IGdldFRoZW1lQnlTbHVnID0gc2x1ZyA9PiB0aGVtZXMuZmluZCggdGhlbWUgPT4gdGhlbWUuc2x1ZyA9PT0gc2x1ZyApO1xuY29uc3QgZ2V0Q3VycmVudFRoZW1lID0gKCkgPT4gdGhlbWU7XG5cbmNvbnN0IGNoYW5nZVN0YXRlID0gYXN5bmMgbmV3U3RhdGUgPT4ge1xuXG5cdGlmIChuZXdTdGF0ZSAhPSB0aGVtZS5zdGF0ZSkge1xuXHRcdGlmIChuZXdTdGF0ZSA9PT0gJ2hvbWUnKSB7XG5cdFx0XHRjb250ZW50SFRNTC5oaWRlVG9wTWVudSgpO1xuXHRcdFx0YXdhaXQgY29udGVudEhUTUwuaGlkZVBhbmVsKHtcblx0XHRcdFx0YWN0aXZlUGFuZWwsXG5cdFx0XHRcdGRpcmVjdGlvbjogJ3VwJ1xuXHRcdFx0fSk7XG5cdFx0XHRjb250ZW50SFRNTC5zaG93SG9tZSgpO1xuXHRcdH0gZWxzZSBpZiAobmV3U3RhdGUgPT09ICdwYWdlJykge1xuXHRcdFx0Y29udGVudEhUTUwuaGlkZUhvbWUoKTtcblx0XHRcdGNvbnRlbnRIVE1MLnNob3dUb3BNZW51KCk7XG5cdFx0fVxuXHR9XG5cdFxufTtcblxuY29uc3QgdXBkYXRlTWFwID0gYXN5bmMgKHtsb2NhdGlvbn0pID0+IHtcblx0aWYgKCF0aGVtZSkgdGhlbWUgPSB0aGVtZXNbMF07XG5cblx0aWYoIW1hcC5pc01hcGJveExvYWRlZCgpKSB7XG5cdFx0aWYgKGxvY2F0aW9uID09PSAnNDA0Jykge1xuXHRcdFx0YXdhaXQgbWFwLmluaXQoe2xvY2F0aW9ufSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF3YWl0IG1hcC5pbml0KHRoZW1lKTtcblx0XHR9XG5cdFx0XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgbWFwLmNoYW5nZU1hcCh0aGVtZSk7XG5cdH1cblxuXHRhd2FpdCBnZW9kYXRhLmRyYXdOb2Rlcyh0aGVtZSk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCB0YWdTZWFyY2ggPSB0YWcgPT4ge1xuXHRnZW9kYXRhLmRyYXdOb2RlQnlUYWcodGFnKTtcblx0bWFwLmZseVRvT3JpZ2luKCk7XG5cdGNvbnRlbnRIVE1MLnVwZGF0ZUhlYWRpbmcodGFnLm5hbWUpO1xufTtcblxuXG5jb25zdCBjaGFuZ2VCcm93c2VySGlzdG9yeSA9ICh7dGl0bGUsc2x1Z30pID0+IHtcblx0bGV0IHBhZ2VUaXRsZSA9ICdHaG9zdCBSaXZlcic7XG5cdGlmICh0aXRsZSkgcGFnZVRpdGxlICs9IGAgLSAke3RpdGxlfWA7XG5cblx0ZG9jdW1lbnQudGl0bGUgPSBwYWdlVGl0bGU7XG5cdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcblx0XHR7cGFnZVRpdGxlfSxcblx0XHQnJyxcblx0XHRzbHVnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdEhvbWUsXG5cdHNob3dQYWdlLFxuXHRzaG93UG9zdCxcblx0Y2xvc2VQYW5lbCxcblx0Z2V0Q3VycmVudFRoZW1lLFxuXHRnZXRUaGVtZUJ5U2x1Zyxcblx0dGFnU2VhcmNoLFxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSxcbn07IiwiaW1wb3J0IHtzZWxlY3QsIHNlbGVjdEFsbCwgZXZlbnR9IGZyb20gJ2QzL2Rpc3QvZDMubWluJztcbmltcG9ydCB7c2hvd1BhZ2UsIHNob3dQb3N0LCBjbG9zZVBhbmVsLCB0YWdTZWFyY2h9IGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQgdGhlbWVzIGZyb20gJy4vY29uZmlnL3RoZW1lcy5qc29uJztcbmltcG9ydCB7Z2V0SWNvbn0gZnJvbSAnLi90YWdzJztcblxuXG5jb25zdCBhbmltYXRpb24gPSB7XG5cdGR1cmF0aW9uOiB7XG5cdFx0aW46IDMwMDAsXG5cdFx0b3V0OiAyMDAwXG5cdH1cbn07XG5cbmxldCBtYWluTWVudSA9IGZhbHNlO1xubGV0IHRvcE1lbnUgPSBmYWxzZTtcblxuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ21hcC1iZycpO1xuXG5jb25zdCBpbml0SG9tZSA9ICgpID0+IHtcblxuXHRzZWxlY3QoJyNob21lLXRleHQnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KDApIC8vMzAwMFxuXHRcdC8vIC5kdXJhdGlvbigwKVxuXHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb24uaW4pXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cblx0bGV0IGRlbGF5ID0gMDsgLy84MDAwXG5cdFxuXHRmb3IgKGNvbnN0IHRoZW1lIG9mIHRoZW1lcykge1xuXHRcdHNlbGVjdChgI21haW4tJHt0aGVtZS5zbHVnfS1idGApXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kZWxheShkZWxheSlcblx0XHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb24uaW4pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0XHRkZWxheSArPSAxMDAwO1xuXHR9XG5cblx0Y29uZmlnTWFpbk1lbnUoKTtcblxufTtcblxuY29uc3QgY29uZmlnTWFpbk1lbnUgPSAoKSA9PiB7XG5cdGlmIChtYWluTWVudSA9PSBmYWxzZSkge1xuXHRcdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0XHRzZWxlY3QoYCNtYWluLSR7dGhlbWUuc2x1Z30tYnRgKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0XHR9XG5cdFx0bWFpbk1lbnUgPSB0cnVlO1xuXHR9XG59O1xuXG5jb25zdCBjb25maWdUb3BNZW51ID0gKCkgPT4ge1xuXHRpZiAodG9wTWVudSA9PSBmYWxzZSkge1xuXHRcdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0XHRzZWxlY3QoYCN0b3AtJHt0aGVtZS5zbHVnfS1idGApXG5cdFx0XHRcdC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0XHRcdFx0XG5cdFx0fVxuXHRcdHRvcE1lbnUgPSB0cnVlO1xuXHR9XG59O1xuXG5jb25zdCBzaG93SG9tZSA9ICgpID0+IHtcblx0c2VsZWN0KCcjaGVhZGVyLWNvbCcpXG5cdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KDEwMDApXG5cdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbi5pbilcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKVxuXHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsICcwcHgnKTtcblxuXHRzZWxlY3RBbGwoJy5jb2wtbWFpbi1tZW51Jylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheSgxMDAwKVxuXHRcdC5kdXJhdGlvbigzMDAwKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJzBweCcpO1xuXG5cdHNlbGVjdCgnI2hvbWUtdGV4dCcpXG5cdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuXHRmb3IgKGNvbnN0IHRoZW1lIG9mIHRoZW1lcykge1xuXHRcdHNlbGVjdChgI21haW4tJHt0aGVtZS5zbHVnfS1idGApXG5cdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cdH1cblxuXHRjb25maWdNYWluTWVudSgpO1xuXHRzaG93SG9tZUJHKCk7XG5cdGhpZGVIZWFkaW5nKCk7XG5cbn07XG5cbmNvbnN0IGhpZGVIb21lID0gKCkgPT4ge1xuXHRzZWxlY3QoJyNoZWFkZXItY29sJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnLTUwMHB4Jylcblx0XHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0fSk7XG5cblx0c2VsZWN0QWxsKCcuY29sLW1haW4tbWVudScpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbigzMDAwKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJy0yMDBweCcpXG5cdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0pO1xuXG5cdGhpZGVIb21lQkcoKTtcblx0c2hvd0hlYWRpbmcoKTtcbn07XG5cbmNvbnN0IHNob3dIb21lQkcgPSAoKSA9PiB7XG5cdHNlbGVjdCgnI21hcC1iZycpXG5cdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KDEwMDApXG5cdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG59O1xuXG5jb25zdCBoaWRlSG9tZUJHID0gKCkgPT4ge1xuXHRzZWxlY3QoJyNtYXAtYmcnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oMjAwMClcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9KTtcbn07XG5cbmNvbnN0IHNob3dUb3BNZW51ID0gKCkgPT4ge1xuXHRzZWxlY3QoJyN0b3AtbWVudScpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ3RvcCcsIC0yMDApXG5cdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KDMwMDApXG5cdFx0LmR1cmF0aW9uKDIwMDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHQuc3R5bGUoJ3RvcCcsIDApO1xuXG5cdGNvbmZpZ1RvcE1lbnUoKTtcbn07XG5cbmNvbnN0IGhpZGVUb3BNZW51ID0gKCkgPT4ge1xuXHRzZWxlY3QoJyN0b3AtbWVudScpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheSgwKVxuXHRcdC5kdXJhdGlvbigyMDAwKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCd0b3AnLCAtMjAwKVxuXHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9KTtcbn07XG5cbmNvbnN0IHNob3dQYW5lbCA9ICh7YWN0aXZlUGFuZWwgPSAnbGVmdC1wYW5lbCcsIGRpcmVjdGlvbiA9ICdub25lJywgZGVsYXkgPSAwfSkgPT4ge1xuXG5cdGlmIChkaXJlY3Rpb24gPT0gJ25vbmUnKSB7XG5cdFx0ZGlyZWN0aW9uID0gJzBweCc7XG5cdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICd1cCcpIHtcblx0XHRkaXJlY3Rpb24gPSAnLTIwMDBweCc7XG5cdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICdkb3duJykge1xuXHRcdGRpcmVjdGlvbiA9ICcyMDAwcHgnO1xuXHR9XG5cblx0aWYgKGFjdGl2ZVBhbmVsID09PSAnZnVsbC1wYW5lbCcpIHtcblx0XHRzZWxlY3QoJyNmdWxsLXBhbmVsJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmRlbGF5KGRlbGF5KVxuXHRcdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbi5pbilcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnMHB4Jyk7XG5cblx0XHRzZWxlY3QoJyNmdWxsLXBhbmVsJykuc2VsZWN0KCcuZmwtY29sLWNvbnRlbnQnKS5wcm9wZXJ0eSgnc2Nyb2xsVG9wJywgMCk7XG5cdFx0c2hvd0hvbWVCRygpO1xuXG5cdH0gZWxzZSB7XG5cblx0XHRzZWxlY3QoJyNsZWZ0LXBhbmVsJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmRlbGF5KGRlbGF5KVxuXHRcdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbi5pbilcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnMHB4Jyk7XG5cblx0XHRzZWxlY3QoJyNtaWRkbGUtcGFuZWwnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsIGRpcmVjdGlvbilcblx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZGVsYXkoZGVsYXkpXG5cdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsICcwcHgnKTtcblxuXHRcdHNlbGVjdCgnI3JpZ2h0LXBhbmVsJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmRlbGF5KGRlbGF5KVxuXHRcdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbi5pbilcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnMHB4Jyk7XG5cblx0XHRzZWxlY3QoJyNyaWdodC1wYW5lbCcpLnNlbGVjdCgnLmZsLWNvbC1jb250ZW50JykucHJvcGVydHkoJ3Njcm9sbFRvcCcsIDApO1xuXG5cdH1cblxufTtcblxuY29uc3QgaGlkZVBhbmVsID0gYXN5bmMgKHthY3RpdmVQYW5lbCA9ICdyaWdodC1wYW5lbCcsIGRpcmVjdGlvbiA9ICdub25lJ30pID0+IHtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cblx0XHRpZiAoZGlyZWN0aW9uID09ICdub25lJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJzBweCc7XG5cdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3VwJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJy0yMDAwcHgnO1xuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICdkb3duJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJzIwMDBweCc7XG5cdFx0fVxuXG5cdFx0aWYgKGFjdGl2ZVBhbmVsID09PSAnZnVsbC1wYW5lbCcpIHtcblx0XHRcdHNlbGVjdCgnI2Z1bGwtcGFuZWwnKVxuXHRcdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHRcdC5kZWxheSgwKVxuXHRcdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLm91dClcblx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgZGlyZWN0aW9uKVxuXHRcdFx0XHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdGhpZGVIb21lQkcoKTtcblxuXHRcdH0gZWxzZSB7XG5cdFxuXHRcdFx0c2VsZWN0KCcjbGVmdC1wYW5lbCcpXG5cdFx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdFx0LmRlbGF5KDApXG5cdFx0XHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb24ub3V0KVxuXHRcdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0XHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRzZWxlY3QoJyNtaWRkbGUtcGFuZWwnKVxuXHRcdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHRcdC5kZWxheSgwKVxuXHRcdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLm91dClcblx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgZGlyZWN0aW9uKVxuXHRcdFx0XHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0c2VsZWN0KCcjcmlnaHQtcGFuZWwnKVxuXHRcdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHRcdC5kZWxheSgwKVxuXHRcdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLm91dClcblx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgZGlyZWN0aW9uKVxuXHRcdFx0XHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fSk7XG5cblx0XHR9XG5cdFx0XG5cdH0pO1xufTtcblxuY29uc3Qgc2hvd0hlYWRpbmcgPSAoKSA9PiB7XG5cdGxldCBoZWFkaW5nID0gc2VsZWN0KCcjbWFwLWhlYWRpbmcnKTtcblxuXHRpZiAoaGVhZGluZy5lbXB0eSgpKSB7XG5cdFx0aGVhZGluZyA9IHNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2Jylcblx0XHRcdC5hdHRyKCdpZCcsJ21hcC1oZWFkaW5nJyk7XG5cdFx0aGVhZGluZy5hcHBlbmQoJ2gzJyk7XG5cdH1cblxuXHRoZWFkaW5nLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdHJldHVybiBoZWFkaW5nO1xufTtcblxuY29uc3QgaGlkZUhlYWRpbmcgPSAoKSA9PiB7XG5cdGNvbnN0IGhlYWRpbmcgPSBzZWxlY3QoJyNtYXAtaGVhZGluZycpO1xuXHRpZiAoIWhlYWRpbmcuZW1wdHkoKSkge1xuXHRcdGhlYWRpbmcudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0fSk7XG5cblx0fVxufTtcblxuY29uc3QgdXBkYXRlSGVhZGluZyA9IHRpdGxlID0+IHtcblx0aWYgKHRpdGxlLnRvTG93ZXJDYXNlKCkgPT09ICdhYm91dCcpIHRpdGxlID0gJyc7XG5cdGxldCBoZWFkaW5nID0gc2VsZWN0KCcjbWFwLWhlYWRpbmcnKTtcblx0aWYgKGhlYWRpbmcuZW1wdHkoKSkgaGVhZGluZyA9IHNob3dIZWFkaW5nKCk7XG5cdGhlYWRpbmcuc2VsZWN0KCdoMycpLmh0bWwodGl0bGUpO1xufTtcblxuY29uc3QgdXBkYXRlUGFnZSA9IChhY3RpdmVQYW5lbCwge3RpdGxlLCBjb250ZW50fSkgPT4ge1xuXHQvL2RvbSBtYW5pcHVsYXRpb25cblx0Y29uc3QgcGFuZWwgPSBzZWxlY3QoYCMke2FjdGl2ZVBhbmVsfWApO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLXRpdGxlJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCh0aXRsZS5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtY29udGVudCcpLnNlbGVjdCgnLmZsLXJpY2gtdGV4dCcpLmh0bWwoY29udGVudC5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnLnRhZ2xpbmUnKS5zZWxlY3QoJy5mbC1oZWFkaW5nLXRleHQnKS5odG1sKCcnKTtcblx0cGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10YWdzJykuc2VsZWN0KCcuZmwtaHRtbCcpLmh0bWwoJycpO1xuXHRwYW5lbC5zZWxlY3QoJyNjbG9zZS1wYW5lbCcpLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpLm9uKCdjbGljaycsIGNsb3NlUGFuZWwpO1xuXHRjYXB0dXJlTGlua3MoKTtcblxuXHR1cGRhdGVIZWFkaW5nKHRpdGxlLnJlbmRlcmVkKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVBvc3QgPSAoe3RpdGxlLCBjb250ZW50fSwgdGFncywgdGhlbWUpID0+IHtcblx0Ly9ET00gbWFuaXB1bGF0aW9uXG5cdGNvbnN0IHBhbmVsID0gc2VsZWN0KCcjcmlnaHQtcGFuZWwnKTtcblxuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLXRpdGxlJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCh0aXRsZS5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtY29udGVudCcpLnNlbGVjdCgnLmZsLXJpY2gtdGV4dCcpLmh0bWwoY29udGVudC5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnI2Nsb3NlLXBhbmVsJykuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJykub24oJ2NsaWNrJywgY2xvc2VQYW5lbCk7XG5cdHBhbmVsLnNlbGVjdCgnLnRhZ2xpbmUnKS5zZWxlY3QoJy5mbC1oZWFkaW5nLXRleHQnKS5odG1sKHRoZW1lLnNsdWcpO1xuXHRcblxuXHQvL3RhZ3Ncblx0cGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10YWdzJykuc2VsZWN0KCcuZmwtaHRtbCcpLmh0bWwoJycpO1xuXHRjb25zdCB0YWdzRElWID0gcGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10YWdzJykuc2VsZWN0KCcuZmwtaHRtbCcpXG5cdFx0LmFwcGVuZCgnZGl2Jylcblx0XHQuYXR0cignaWQnLCd0YWctY29udGFpbmVyJyk7XG5cblx0Y29uc3QgdGFnc0hUTUwgPSB0YWdzRElWLnNlbGVjdEFsbCgnLmNpcmNsZScpXG5cdFx0LmRhdGEodGFncyk7XG5cblx0dGFnc0hUTUwuZXhpdCgpXG5cdFx0LmF0dHIoJ2lkJywgJ2V4aXQnKVxuXHRcdC5hdHRyKCdjbGFzcycsICdleGl0Jylcblx0XHQucmVtb3ZlKCk7XG5cblx0dGFnc0hUTUwuZW50ZXIoKS5hcHBlbmQoJ2RpdicpXG5cdFx0LmF0dHIoJ2lkJywgIHRhZyA9PiBgdGFnLSR7dGFnLnNsdWd9YClcblx0XHQuYXR0cignY2xhc3MnLCAndGFnLXBpbGwnKVxuXHRcdC5odG1sKCB0YWcgPT4ge1xuXHRcdFx0Y29uc3QgaWNvbiA9IGdldEljb24odGFnKTtcblx0XHRcdHJldHVybiBgJHtpY29ufSAke3RhZy5uYW1lfWA7XG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgZCA9PiB7XG5cdFx0XHR0YWdTZWFyY2goZCk7XG5cdFx0fSlcblx0XHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnY29sb3InLCAnc3RlZWxibHVlJyk7XG5cdFx0fSlcblx0XHQub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2NvbG9yJywgJyM1MzUzNTQnKTtcblx0XHR9KTtcblxuXHRcblx0Ly9yZXNpemUgdGFnIGljb25zXG5cdHRhZ3NESVYuc2VsZWN0QWxsKCdzdmcnKS5hdHRyKCd3aWR0aCcsJzE1cHgnKS5hdHRyKCdoZWlnaHQnLCcxNXB4Jyk7XG5cblx0Y2FwdHVyZUxpbmtzKCk7XG5cblxufTtcblxuY29uc3QgY2FwdHVyZUxpbmtzID0gKCkgPT4ge1xuXHRzZWxlY3RBbGwoJ2EnKVxuXHRcdC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdC8vZ2V0IHVybCAvLyBkb21haW5cblx0XHRcdGNvbnN0IGxpbmsgPSBzZWxlY3QodGhpcykuYXR0cignaHJlZicpO1xuXHRcdFx0Y29uc3QgZG9tYWluID0gbGluay5zcGxpdCgnLycpWzJdO1xuXG5cdFx0XHQvL1Rlc3QgaWYgaXQgaXMgYSBsb2NhbCBsaW5rIChsb2NhbGhvc3QgLT4gcmVtb3RlKVxuXHRcdFx0Y29uc3QgaG9zdCA9ICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT0gJ2xvY2FsaG9zdCcpID8gJ2xhYnMuZmx1eG8uYXJ0LmJyJyA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcblxuXHRcdFx0Ly9pZiBleHRycm5hbCwgbmF2aWdhdGVcblx0XHRcdGlmIChkb21haW4gIT0gaG9zdCkgcmV0dXJuOyAvL3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxuXG5cdFx0XHQvL2lmIGxvY2FsLCBwcmV2ZW50IHBhZ2UgdXBkYXRlXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvL2xvYWQgcG9zdCBiYXNlZCBvbiBzbHVnIG9uIHRoZSB1cmxcblx0XHRcdGNvbnN0IHNsdWcgPSBsaW5rLnNwbGl0KCcvJylbNF07XG5cblx0XHRcdHNob3dQb3N0KHtzbHVnfSk7XG5cdFx0fSk7XG5cbn07XG5cbmNvbnN0IHNob3dTcGlubmVyID0gKCkgPT4ge1xuXHRzZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG5cdFx0LmF0dHIoJ2lkJywgJ3NwaW5uZXInKVxuXHRcdC5odG1sKCc8ZGl2IGNsYXNzPVwibGRzLXJpcHBsZVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcbn07XG5cbmNvbnN0IGhpZGVTcGlubmVyID0gKCkgPT4ge1xuXHRzZWxlY3QoJyNzcGlubmVyJykucmVtb3ZlKCk7XG59O1xuXG4vLyBzZWxlY3Qod2luZG93KS5vbigncmVzaXplJywgKCkgPT4ge1xuLy8gXHRjaGVja1NjcmVlblNpemUoKTtcbi8vIH0pO1xuXG4vLyBjb25zdCBjaGVja1NjcmVlblNpemUgPSAoKSA9PiB7XG4vLyBcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA4ODApIHtcbi8vIFx0XHRzaG93U21hbGxTY3JlZW5Nc2coKTtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRoaWRlU21hbGxTY3JlZW5Nc2coKTtcbi8vIFx0fVxuLy8gfTtcblxuLy8gY29uc3Qgc2hvd1NtYWxsU2NyZWVuTXNnID0gKCkgPT4ge1xuLy8gXHRsZXQgc21hbGxTY3JlZW4gPSBzZWxlY3QoJyNzbWFsbC1zY3JlZW4nKTtcblxuLy8gXHRpZiAoc21hbGxTY3JlZW4uZW1wdHkoKSkge1xuLy8gXHRcdHNtYWxsU2NyZWVuID0gc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuLy8gXHRcdFx0LmF0dHIoJ2lkJywnc21hbGwtc2NyZWVuJyk7XG4vLyBcdH1cblxuLy8gXHRzbWFsbFNjcmVlbi5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4vLyBcdHJldHVybiBzbWFsbFNjcmVlbjtcbi8vIH07XG5cbi8vIGNvbnN0IGhpZGVTbWFsbFNjcmVlbk1zZyA9ICgpID0+IHtcbi8vIFx0Y29uc3Qgc21hbGxTY3JlZW4gPSBzZWxlY3QoJyNzbWFsbC1zY3JlZW4nKTtcbi8vIFx0aWYgKCFzbWFsbFNjcmVlbi5lbXB0eSgpKSBzbWFsbFNjcmVlbi5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4vLyB9O1xuXG4vLyBjaGVja1NjcmVlblNpemUoKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXRIb21lLFxuXHRjb25maWdNYWluTWVudSxcblx0Y29uZmlnVG9wTWVudSxcblx0c2hvd0hvbWUsXG5cdGhpZGVIb21lLFxuXHRzaG93VG9wTWVudSxcblx0aGlkZVRvcE1lbnUsXG5cdHNob3dIZWFkaW5nLFxuXHRoaWRlSGVhZGluZyxcblx0dXBkYXRlSGVhZGluZyxcblx0c2hvd1BhbmVsLFxuXHRoaWRlUGFuZWwsXG5cdHVwZGF0ZVBhZ2UsXG5cdHVwZGF0ZVBvc3QsXG5cdHNob3dTcGlubmVyLFxuXHRoaWRlU3Bpbm5lclxufTsiLCIvLyBpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQge3NlbGVjdCxnZW9UcmFuc2Zvcm0sZ2VvUGF0aCxlYXNlTGluZWFyfSBmcm9tICdkMy9kaXN0L2QzLm1pbic7XG5pbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5cbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9jb250ZW50JztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcuanNvbic7XG4vLyBpbXBvcnQgcml2ZXIxODM0IGZyb20gJy4vZGF0YS9zcGVjdWxhdGl2ZS1yaXZlci5qc29uJztcbmltcG9ydCBoaXN0b3JpY2FsUml2ZWwgZnJvbSAnLi9kYXRhL2hpc3RvcmljYWwuanNvbic7XG5cblxuLy8gY29uc3QgaW50ZXJuYWxPcHRpb24gPSB7XG4vLyBcdHBhc3NUaHJvdWdoOiB0cnVlLFxuLy8gfTtcblxuY29uc3QgaGlzdG9yaWNhbFJpdmVyU2NhbGUgPSBjaHJvbWEuc2NhbGUoWydyZWQnLCdvcmFuZ2UnLCd5ZWxsb3cnLCdncmVlbicsJ2JsdWUnLCdpbmRpZ28nLCd2aW9sZXQnXSkuZG9tYWluKFswLDhdKTtcbi8vIGNvbnN0IGhpc3RvcmljYWxSaXZlclNjYWxlID0gY2hyb21hLnNjYWxlKFsnZG9kZ2VyYmx1ZScsJ2RhcmtzbGF0ZWdyYXknXSkuZG9tYWluKFswLDhdKTtcblxubGV0IEQzZ2VvUGF0aDtcbmxldCBzdmc7XG4vLyBsZXQgcml2ZXJMaW5lcztcbmxldCBkYXRhc2V0O1xubGV0IG5vZGVzUG9pbnQ7XG5sZXQgbm9kZXNMaW5lO1xubGV0IG5vZGVzUG95Z29uO1xuXG5cblxuY29uc3QgaW5pdCA9IGFzeW5jIGNhbnZhcyA9PiB7XG5cblx0Y29uc3QgRDNnZW9UcmFuc2Zvcm0gPSBnZW9UcmFuc2Zvcm0oe3BvaW50Om1hcC5wcm9qZWN0UG9pbnR9KTtcblx0RDNnZW9QYXRoID0gZ2VvUGF0aCgpLnByb2plY3Rpb24oRDNnZW9UcmFuc2Zvcm0pO1xuXG5cdC8vIE92ZXJsYXkgZDMgb24gdGhlIG1hcGJveCBjYW52YXNcblx0c3ZnID0gc2VsZWN0KGNhbnZhcykuYXBwZW5kKCdzdmcnKVxuXHRcdC5hdHRyKCdpZCcsICdtYXAtYm94LXZpcycpXG5cdFx0LmF0dHIoJ2hlaWdodCcsICcxMDAlJyk7XG5cblxuXHRzdmcuYXBwZW5kKCdnJykuYXR0cignaWQnLCAncG9seWdvbnMtY29udGFpbmVyJyk7XG5cdHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdsaW5lcy1jb250YWluZXInKTtcblx0c3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ3BvaW50cy1jb250YWluZXInKTtcblxuXHQvLyBkcmF3Uml2ZXIocml2ZXIxODM0LmZlYXR1cmVzLCA1MDAsIDIpO1xuXG59O1xuXG5jb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgZGF0YVVSTCA9IGBodHRwczovL2FwaS5tYXBib3guY29tL2RhdGFzZXRzL3YxLyR7Y29uZmlnLm1hcGJveC51c2VyfS8ke2NvbmZpZy5tYXAuZGF0YXNldH0vZmVhdHVyZXM/YWNjZXNzX3Rva2VuPSR7Y29uZmlnLm1hcGJveC50b2tlbn1gO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFVUkwpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRkYXRhc2V0ID0gZGF0YS5mZWF0dXJlcztcblxuXHRkYXRhc2V0ID0gZGF0YXNldC5jb25jYXQoaGlzdG9yaWNhbFJpdmVsLmZlYXR1cmVzKTtcblx0XG5cdHJldHVybiBkYXRhc2V0O1xufTtcblxuXG5jb25zdCBkcmF3Tm9kZXMgPSBhc3luYyAoe3NsdWc6IHRoZW1lfSkgPT4ge1xuXG5cdGlmICghZGF0YXNldCkgYXdhaXQgbG9hZERhdGEoKTtcblxuXHRjb25zdCB0aGVtZU5vZGVzID0gZ2V0VGhlbWVOb2Rlcyh0aGVtZSk7XG5cblx0Y29uc3QgcG9pbnRzID0gdGhlbWVOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpO1xuXHRjb25zdCBsaW5lcyA9IHRoZW1lTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnTGluZVN0cmluZycpO1xuXHRjb25zdCBwb2x5Z29ucyA9IHRoZW1lTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnUG9seWdvbicpO1xuXG5cdGRyYXdQb2x5Z2lucyh7ZGF0YTpwb2x5Z29uc30pO1xuXHRkcmF3TGluZXMoe2RhdGE6bGluZXN9KTtcblx0ZHJhd1BvaW50cyh7ZGF0YTpwb2ludHN9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHBvaW50cyxcblx0XHRsaW5lcyxcblx0XHRwb2x5Z29uc1xuXHR9O1xuXG59O1xuXG5jb25zdCBkcmF3Tm9kZUJ5VGFnID0gYXN5bmMgKHtuYW1lOiB0YWd9KSA9PiB7XG5cblx0Y29uc3QgdGFnTm9kZXMgPSBnZXRUYWdOb2Rlcyh0YWcpO1xuXG5cdGNvbnN0IHBvaW50cyA9IHRhZ05vZGVzLmZpbHRlcihuID0+IG4uZ2VvbWV0cnkudHlwZSA9PT0gJ1BvaW50Jyk7XG5cdGNvbnN0IGxpbmVzID0gdGFnTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnTGluZVN0cmluZycpO1xuXHRjb25zdCBwb2x5Z29ucyA9IHRhZ05vZGVzLmZpbHRlcihuID0+IG4uZ2VvbWV0cnkudHlwZSA9PT0gJ1BvbHlnb24nKTtcblxuXHRkcmF3UG9seWdpbnMoe2RhdGE6cG9seWdvbnN9KTtcblx0ZHJhd0xpbmVzKHtkYXRhOmxpbmVzfSk7XG5cdGRyYXdQb2ludHMoe2RhdGE6cG9pbnRzfSk7XG5cblx0cmV0dXJuIHtcblx0XHRwb2ludHMsXG5cdFx0bGluZXMsXG5cdFx0cG9seWdvbnNcblx0fTtcblxufTtcblxuY29uc3QgZ2V0VGhlbWVOb2RlcyA9IHRoZW1lID0+IHtcblxuXHRjb25zdCBzZWxlY3RlZE5vZGVzID0gZGF0YXNldC5maWx0ZXIoIG5vZGUgPT4ge1xuXHRcdGlmKG5vZGUucHJvcGVydGllcy50aGVtZSkge1xuXHRcdFx0Y29uc3Qgbm9kZXRoZW1lcyA9IG5vZGUucHJvcGVydGllcy50aGVtZS5zcGxpdCgnLCAnKTtcblx0XHRcdGNvbnN0IHRoZW1lTm9kZSA9IG5vZGV0aGVtZXMuZmlsdGVyKHQgPT4gdC50b0xvd2VyQ2FzZSgpID09PSB0aGVtZSk7XG5cdFx0XHRpZiAodGhlbWVOb2RlLmxlbmd0aCA+IDApIHJldHVybiBub2RlO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHNlbGVjdGVkTm9kZXM7XG59O1xuXG5jb25zdCBnZXRUYWdOb2RlcyA9IHRhZyA9PiB7XG5cblx0Y29uc3Qgc2VsZWN0ZWROb2RlcyA9IGRhdGFzZXQuZmlsdGVyKCBub2RlID0+IHtcblx0XHRpZiAobm9kZS5wcm9wZXJ0aWVzLnRhZykge1xuXHRcdFx0Y29uc3Qgbm9kZVRhZ3MgPSBub2RlLnByb3BlcnRpZXMudGFnLnNwbGl0KCcsICcpO1xuXHRcdFx0Y29uc3QgdGFnTm9kZSA9IG5vZGVUYWdzLmZpbHRlcih0ID0+IHQudG9Mb3dlckNhc2UoKSA9PT0gdGFnLnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0aWYgKHRhZ05vZGUubGVuZ3RoID4gMCkgcmV0dXJuIG5vZGU7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gc2VsZWN0ZWROb2Rlcztcbn07XG5cbmNvbnN0IGdldE5vZGVDb29yZGluYXRlcyA9IGFzeW5jICh7aWR9KSA9PiB7XG5cdGlmICghZGF0YXNldCkgYXdhaXQgbG9hZERhdGEoKTtcblx0Y29uc3QgaXRlbSA9IGRhdGFzZXQuZmluZCggaXRlbSA9PiBpdGVtLnByb3BlcnRpZXMuaWQgPT09IGlkICk7XG5cdGlmICghaXRlbSkgcmV0dXJuIGNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXI7IC8vIHJldHVybiBjZW50ZXIgb2YgbWFwXG5cblx0aWYgKGl0ZW0uZ2VvbWV0cnkudHlwZSA9PSAnUG9pbnQnKSByZXR1cm4gaXRlbS5nZW9tZXRyeS5jb29yZGluYXRlcztcblx0Y29uc3QgY29vcmRpbmF0ZXMgPSBpdGVtLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdO1xuXHRyZXR1cm4gY29vcmRpbmF0ZXM7XG59O1xuXG5jb25zdCBkcmF3UG9pbnRzID0gICh7ZGF0YSwgdHJhbnNpdGlvblRpbWUgPSA1MDAwLCBkZWxheVRpbWUgPSAyMDB9KSA9PiB7XG5cblx0Y29uc3QgY29sb3VycyA9IGdldENvbG91cnMoKTtcblx0XG5cdG5vZGVzUG9pbnQgPSBzdmcuc2VsZWN0KCcjcG9pbnRzLWNvbnRhaW5lcicpLnNlbGVjdEFsbCgnLmNpcmNsZScpXG5cdFx0LmRhdGEoZGF0YSk7XG5cblx0bm9kZXNQb2ludC5leGl0KClcblx0XHQuYXR0cignaWQnLCAnZXhpdCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5zdHlsZSgnZmlsbCcsICcjMDAwMDAwJylcblx0XHQuYXR0cigncicsIDApXG5cdFx0LnJlbW92ZSgpO1xuXG5cdG5vZGVzUG9pbnQuZW50ZXIoKS5hcHBlbmQoJ2NpcmNsZScpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2NpcmNsZScpO1xuXG5cdG5vZGVzUG9pbnQgPSBzdmcuc2VsZWN0QWxsKCcuY2lyY2xlJylcblx0XHQuYXR0cignaWQnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmV0dXJuIGBpbmRleC0ke2QucHJvcGVydGllcy5pZH1gO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLmFjdGl2ZS5zdHJva2UpLmhleCgpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdmaWxsJywgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLmFjdGl2ZS5maWxsKS5hbHBoYSgwLjcpLmhleCgpO1xuXHRcdH0pXG5cdFx0LmF0dHIoJ2N4JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJldHVybiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS54O1xuXHRcdH0pXG5cdFx0LmF0dHIoJ2N5JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJldHVybiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS55O1xuXHRcdH0pXG5cdFx0LmF0dHIoJ3InLCAwKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuMSlcblx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJlc2V0Tm9kZXNTdGF0ZShkKTtcblx0XHRcdGNvbnRlbnQuc2hvd1Bvc3QoZC5wcm9wZXJ0aWVzKTtcblx0XHR9KVxuXHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdG5vZGVzT3ZlcihkKTtcblx0XHR9KVxuXHRcdC5vbignbW91c2VvdXQnLCAoKSA9PiB7XG5cdFx0XHRub2Rlc091dCgpO1xuXHRcdH0pO1xuXHRcblx0bm9kZXNQb2ludC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0LmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG5cdFx0XHRyZXR1cm4gZGVsYXlUaW1lICogaTtcblx0XHR9KVxuXHRcdC5hdHRyKCdyJywgOClcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcbn07XG5cbmNvbnN0IGRyYXdMaW5lcyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gNTAwMCwgZGVsYXlUaW1lID0gMjAwfSkgPT4ge1xuXG5cdGNvbnN0IGNvbG91cnMgPSBnZXRDb2xvdXJzKCk7XG5cblx0bm9kZXNMaW5lID0gc3ZnLnNlbGVjdCgnI2xpbmVzLWNvbnRhaW5lcicpLnNlbGVjdEFsbCgnLmxpbmUnKVxuXHRcdC5kYXRhKGRhdGEpO1xuXG5cdG5vZGVzTGluZS5leGl0KClcblx0XHQuYXR0cignaWQnLCAnZXhpdCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5yZW1vdmUoKTtcblxuXHRub2Rlc0xpbmUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuXHRcdC5hdHRyKCdjbGFzcycsICdsaW5lJyk7XG5cblx0bm9kZXNMaW5lID0gc3ZnLnNlbGVjdEFsbCgnLmxpbmUnKVxuXHRcdC5hdHRyKCdpZCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZC5wcm9wZXJ0aWVzLmlkO1xuXHRcdH0pXG5cdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdGlmIChkLnByb3BlcnRpZXMubmFtZSA9PT0gJ1NhaW50LVBpZXJyZSBTcGVjdWxhdGl2ZSBSaXZlcicpIHJldHVybiBjaHJvbWEoJyMwMDcxYmMnKS5oZXgoKTtcblx0XHRcdGlmIChkLnByb3BlcnRpZXMudHlwZSA9PT0gJ2hpc3RvcmljYWwnKSB7XG5cdFx0XHRcdHJldHVybiBoaXN0b3JpY2FsUml2ZXJTY2FsZShkLnByb3BlcnRpZXMuaW5kZXgpLmFscGhhKC44KS5oZXgoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjaHJvbWEoY29sb3Vycy5hY3RpdmUuc3Ryb2tlKS5oZXgoKTtcblx0XHR9KVxuXHRcdC5zdHlsZSgnZmlsbCcsICdub25lJylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwLjEpXG5cdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRjb25zdCB0aGVtZSA9IGNvbnRlbnQuZ2V0Q3VycmVudFRoZW1lKCk7XG5cdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLm5hbWUgPT09ICdTYWludC1QaWVycmUgU3BlY3VsYXRpdmUgUml2ZXInICYmIHRoZW1lLnNsdWcgIT09ICdzdGVwcycpIHJldHVybjtcblx0XHRcdHJlc2V0Tm9kZXNTdGF0ZShkKTtcblx0XHRcdGNvbnRlbnQuc2hvd1Bvc3QoZC5wcm9wZXJ0aWVzKTtcblx0XHR9KVxuXHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdG5vZGVzT3ZlcihkKTtcblx0XHR9KVxuXHRcdC5vbignbW91c2VvdXQnLCAoKSA9PiB7XG5cdFx0XHRub2Rlc091dCgpO1xuXHRcdH0pO1xuXG5cblx0bm9kZXNMaW5lLnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHQuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHtcblx0XHRcdHJldHVybiBkZWxheVRpbWUgKiBpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cbn07XG5cbmNvbnN0IGRyYXdQb2x5Z2lucyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gNTAwMCwgZGVsYXlUaW1lID0gMjAwfSkgPT4ge1xuXG5cdGNvbnN0IGNvbG91cnMgPSBnZXRDb2xvdXJzKCk7XG5cblx0bm9kZXNQb3lnb24gPSBzdmcuc2VsZWN0KCcjcG9seWdvbnMtY29udGFpbmVyJykuc2VsZWN0QWxsKCcucG9seWdvbnMnKVxuXHRcdC5kYXRhKGRhdGEpO1xuXG5cdG5vZGVzUG95Z29uLmV4aXQoKVxuXHRcdC5hdHRyKCdpZCcsICdleGl0Jylcblx0XHQuYXR0cignY2xhc3MnLCAnZXhpdCcpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbig1MDApXG5cdFx0LnN0eWxlKCdmaWxsJywgJyMwMDAwMDAnKVxuXHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5yZW1vdmUoKTtcblxuXHRub2Rlc1BveWdvbi5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ3BvbHlnb25zJyk7XG5cblx0bm9kZXNQb3lnb24gPSBzdmcuc2VsZWN0QWxsKCcucG9seWdvbnMnKVxuXHRcdC5hdHRyKCdpZCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZC5wcm9wZXJ0aWVzLmlkO1xuXHRcdH0pXG5cdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLmFjdGl2ZS5zdHJva2UpLmhleCgpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdmaWxsJywgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLmFjdGl2ZS5maWxsKS5hbHBoYSgwLjcpLmhleCgpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMC4xKVxuXHRcdC5vbignY2xpY2snLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmVzZXROb2Rlc1N0YXRlKGQpO1xuXHRcdFx0Y29udGVudC5zaG93UG9zdChkLnByb3BlcnRpZXMpO1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0bm9kZXNPdmVyKGQpO1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW91dCcsICgpID0+IHtcblx0XHRcdG5vZGVzT3V0KCk7XG5cdFx0fSk7XG5cblxuXHRub2Rlc1BveWdvbi50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0LmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG5cdFx0XHRyZXR1cm4gZGVsYXlUaW1lICogaTtcblx0XHR9KVxuXHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMilcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxufTtcblxuLy8gY29uc3QgZHJhd1JpdmVyID0gZGF0YSA9PiB7XG5cbi8vIFx0cml2ZXJMaW5lcyA9IHN2Zy5zZWxlY3RBbGwoJyNyaXZlcicpXG4vLyBcdFx0LmRhdGEoZGF0YSlcbi8vIFx0XHQuZW50ZXIoKVxuLy8gXHRcdC5hcHBlbmQoJ3BhdGgnKVxuLy8gXHRcdC5hdHRyKCdpZCcsICdyaXZlcicpXG4vLyBcdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG4vLyBcdFx0LnN0eWxlKCdmaWxsJywnbm9uZScpXG4vLyBcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuLy8gXHRcdC5zdHlsZSgnc3Ryb2tlJywgJyMwMDcxYmMnKVxuLy8gXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuOCk7XG5cbi8vIFx0Ly8gcml2ZXJMaW5lcy50cmFuc2l0aW9uKClcbi8vIFx0Ly8gXHQuZHVyYXRpb24oMTAwMClcbi8vIFx0Ly8gXHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDQpXG4vLyBcdC8vIFx0LnN0eWxlKCdvcGFjaXR5JywgMC44KTtcblxuLy8gXHQvL2dyYXBoIGFuaW1hdGlvblxuLy8gXHRsZXQgbGluZUxlbmd0aCA9IHJpdmVyTGluZXMubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cbi8vIFx0cml2ZXJMaW5lc1xuLy8gXHRcdC5hdHRyKCdzdHJva2UtZGFzaGFycmF5JywgbGluZUxlbmd0aCArICcgJyArIGxpbmVMZW5ndGgpXG4vLyBcdFx0LmF0dHIoJ3N0cm9rZS1kYXNob2Zmc2V0JywgK2xpbmVMZW5ndGgpXG4vLyBcdFx0LnRyYW5zaXRpb24oKVxuLy8gXHRcdC5kdXJhdGlvbig4MDAwKVxuLy8gXHRcdC5lYXNlKGVhc2VMaW5lYXIpXG4vLyBcdFx0LmF0dHIoJ3N0cm9rZS1kYXNob2Zmc2V0JywgMClcbi8vIFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpXG4vLyBcdFx0Lm9uKCdlbmQnLCAoKSA9PiB7XG4vLyBcdFx0XHRpZighaW50ZXJuYWxPcHRpb24ucGFzc1Rocm91Z2gpIG1hcC5waXRjaE1hcCh7ZmluYWxQaXRjaDo0MCwgZHVyYXRpb246MjAwMH0pO1xuLy8gXHRcdH0pO1xuLy8gfTtcblxuY29uc3QgbWFwVXBkYXRlID0gICgpID0+IHtcblx0Ly8gcml2ZXJVcGRhdGUoKTtcblx0bm9kZVVwZGF0ZSgpO1xufTtcblxuLy8gY29uc3Qgcml2ZXJVcGRhdGUgPSAoKSA9PiB7XG4vLyBcdGlmIChyaXZlckxpbmVzKSB7XG4vLyBcdFx0cml2ZXJMaW5lc1xuLy8gXHRcdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG4vLyBcdFx0XHQuYXR0cignc3Ryb2tlLWRhc2hhcnJheScsICdub25lJylcbi8vIFx0XHRcdC5hdHRyKCdzdHJva2UtZGFzaG9mZnNldCcsICdub25lJyk7XG4vLyBcdH1cbi8vIH07XG5cbmNvbnN0IG5vZGVVcGRhdGUgPSAoKSA9PiB7XG5cdFxuXHRpZiAobm9kZXNQb2ludCkge1xuXHRcdG5vZGVzUG9pbnRcblx0XHRcdC5hdHRyKCdjeCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS54O1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdjeScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS55O1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSBub2Rlc0xpbmUuYXR0cignZCcsIEQzZ2VvUGF0aCk7XG5cdGlmIChub2Rlc1BveWdvbikgbm9kZXNQb3lnb24uYXR0cignZCcsIEQzZ2VvUGF0aCk7XG5cdFxufTtcblxuY29uc3QgZ2V0Q29sb3VycyA9ICgpID0+IHtcblxuXHRjb25zdCB0aGVtZSA9IGNvbnRlbnQuZ2V0Q3VycmVudFRoZW1lKCk7XG5cblx0aWYgKHRoZW1lLnNsdWcgPT09ICdlbnZpcm9ubWVudCcpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aXZlOiB7XG5cdFx0XHRcdGZpbGw6ICcjRkZERTE3Jyxcblx0XHRcdFx0c3Ryb2tlOiAnIzhCNUUzQydcblx0XHRcdH0sXG5cdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHRzdHJva2U6ICcjZmZmZmZmJ1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRpZiAodGhlbWUuc2x1ZyA9PT0gJ3dhdGVyJykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmU6IHtcblx0XHRcdFx0ZmlsbDogJyNmZWZlZmUnLFxuXHRcdFx0XHRzdHJva2U6ICcjNjUyZTAwJ1xuXHRcdFx0fSxcblx0XHRcdHNlbGVjdGVkOiB7XG5cdFx0XHRcdHN0cm9rZTogJyNmZmZmZmYnXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGlmICh0aGVtZS5zbHVnID09PSAnc3RlcHMnKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGl2ZToge1xuXHRcdFx0XHRmaWxsOiAnI0YxNUEyOScsXG5cdFx0XHRcdHN0cm9rZTogJyNGMTVBMjknXG5cdFx0XHR9LFxuXHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0c3Ryb2tlOiAnIzU4NTk1Qidcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5jb25zdCBub2Rlc092ZXIgPSBjdXJyZW50ID0+IHtcblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50XG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRpZiAoZCAhPT0gY3VycmVudCkgcmV0dXJuIDAuNTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdGlmIChkID09PSBjdXJyZW50KSByZXR1cm4gMztcblx0XHRcdH0pO1xuXG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSB7XG5cdFx0bm9kZXNMaW5lXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLm5hbWUgIT09IGN1cnJlbnQucHJvcGVydGllcy5uYW1lKSByZXR1cm4gMC41O1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0aWYgKGQucHJvcGVydGllcy5uYW1lID09PSBjdXJyZW50LnByb3BlcnRpZXMubmFtZSkgcmV0dXJuIDM7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlmIChub2Rlc1BveWdvbikge1xuXHRcdG5vZGVzUG95Z29uXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRpZiAoZCAhPT0gY3VycmVudCkgcmV0dXJuIDAuNTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdGlmIChkID09PSBjdXJyZW50KSByZXR1cm4gMztcblx0XHRcdH0pO1xuXHR9XG59OyBcblxuY29uc3Qgbm9kZXNPdXQgPSAoKSA9PiB7XG5cdGlmIChub2Rlc1BvaW50KSB7XG5cdFx0bm9kZXNQb2ludFxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMik7XG5cdH1cblx0aWYgKG5vZGVzTGluZSkge1xuXHRcdG5vZGVzTGluZVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMik7XG5cdH1cblx0aWYgKG5vZGVzUG95Z29uKSB7XG5cdFx0bm9kZXNQb3lnb25cblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXROb2Rlc1N0YXRlID0gKCkgPT4ge1xuXHRpZiAobm9kZXNQb2ludCkge1xuXHRcdG5vZGVzUG9pbnQudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oMjAwMClcblx0XHRcdC5kZWxheSgxMDAwKVxuXHRcdFx0LmF0dHIoJ3InLCA4KTtcblx0fVxuXG5cdGlmIChub2Rlc0xpbmUpIHtcblx0XHRub2Rlc0xpbmUudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oMjAwMClcblx0XHRcdC5kZWxheSgxMDAwKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCA0KTtcblx0fVxuXG5cdGlmIChub2Rlc1BveWdvbikge1xuXHRcdG5vZGVzUG95Z29uLnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDIwMDApXG5cdFx0XHQuZGVsYXkoMTAwMClcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMik7XG5cdH1cbn07XG5cbmNvbnN0IHNldEN1cnJlbnROb2RlID0gKHtpZH0pID0+IHtcblxuXHRpZiAobm9kZXNQb2ludCkge1xuXHRcdG5vZGVzUG9pbnQudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oMzAwMClcblx0XHRcdC5hdHRyKCdyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLmlkID09PSBpZCkgcmV0dXJuIDE2O1xuXHRcdFx0XHRyZXR1cm4gODtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0fVxuXG5cdGlmIChub2Rlc0xpbmUpIHtcblx0XHRub2Rlc0xpbmUudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oMzAwMClcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLmlkID09PSBpZCkgcmV0dXJuIDg7XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXHR9XG5cblx0aWYgKG5vZGVzUG95Z29uKSB7XG5cdFx0bm9kZXNQb3lnb24udHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oMzAwMClcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLmlkID09PSBpZCkgcmV0dXJuIDg7XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXHR9XG5cdFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXQsXG5cdGRyYXdOb2Rlcyxcblx0ZHJhd05vZGVCeVRhZyxcblx0bWFwVXBkYXRlLFxuXHRnZXROb2RlQ29vcmRpbmF0ZXMsXG5cdHNldEN1cnJlbnROb2RlLFxuXHRyZXNldE5vZGVzU3RhdGVcbn07IiwiaW1wb3J0IHtzZWxlY3Qsc2NhbGVMaW5lYXJ9IGZyb20gJ2QzL2Rpc3QvZDMubWluJztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xuLy8gaW1wb3J0ICdtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuY3NzJ1xuaW1wb3J0IGdlb2RhdGEgZnJvbSAnLi9nZW9kYXRhJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcuanNvbic7XG5cblxuY29uc3QgbWFwQm94Q29uZmlnID0ge1xuXHRjb250YWluZXI6ICdtYXAnLFxuXHRzdHlsZTogYG1hcGJveDovL3N0eWxlcy8ke2NvbmZpZy5tYXBib3gudXNlcn0vJHtjb25maWcubWFwLmRlZmF1bHQuc3R5bGVJRH1gLFxuXHRjZW50ZXI6IGNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXIsIC8vY2VudGVyIGluIE1vbnRyZWFsXG5cdHpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC56b29tLFxuXHRwaXRjaDogY29uZmlnLm1hcC5kZWZhdWx0LnBpdGNoLFxuXHRtaW5ab29tOiBjb25maWcubWFwLmRlZmF1bHQubWluWm9vbSxcblx0bWF4Wm9vbTogY29uZmlnLm1hcC5kZWZhdWx0Lm1heFpvb20sXG5cdG1heEJvdW5kczogY29uZmlnLm1hcC5kZWZhdWx0Lm1heEJvdW5kcyxcblx0aW50ZXJhY3RpdmU6IHRydWUsXG59O1xuXG5sZXQgbWFwYm94O1xubGV0IHBpdGNoQW5pbWF0aW9uO1xuXG5cbmNvbnN0IGluaXQgPSBhc3luYyAoe21hcElELCBsb2NhdGlvbn0pID0+IHtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cblx0XHQvL21hcCBjb250YWluZXIgc2V0IG9uIFdQID4gQmVhdmVyXG5cdFx0c2VsZWN0KCcjYXBwJykuc2VsZWN0KCc6Zmlyc3QtY2hpbGQnKVxuXHRcdFx0LmFwcGVuZCgnZGl2Jylcblx0XHRcdC5hdHRyKCdpZCcsICdtYXAnKTtcblxuXG5cdFx0aWYgKGxvY2F0aW9uID09PSAnNDA0Jykgc2V0VW5rbm93TG9jYXRpb24oKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly80MDQ6IGNlbnRlciB0aGUgbWFwIGFueXdoZXJlIGluIHRoZSBnbG9iZVxuXG5cdFx0aWYgKG1hcElEKSBtYXBCb3hDb25maWcuc3R5bGUgPSBgbWFwYm94Oi8vc3R5bGVzLyR7Y29uZmlnLm1hcGJveC51c2VyfS8ke21hcElEfWA7XHRcdC8vaWYgZGVlcGxpbms6IHNldCBtYXAgc3R5bGVcblxuXHRcdG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gY29uZmlnLm1hcGJveC50b2tlbjtcblx0XHRtYXBib3ggPSBuZXcgbWFwYm94Z2wuTWFwKG1hcEJveENvbmZpZyk7XG5cblx0XHRtYXBib3gub24oJ2xvYWQnLCAoKSA9PiB7XG5cdFx0XHQvLyBwaXRjaE1hcCgpO1xuXG5cdFx0XHRnZW9kYXRhLmluaXQobWFwYm94LmdldENhbnZhc0NvbnRhaW5lcigpKTtcblx0XHRcdFxuXHRcdFx0aWYgKGxvY2F0aW9uID09PSAnNDA0JykgZmx5RnJvbVVua25vd0xvY2F0aW9uKCk7XG5cblx0XHRcdG1hcGJveC5vbigndmlld3Jlc2V0JywgdXBkYXRlKTtcblx0XHRcdG1hcGJveC5vbignbW92ZScsIHVwZGF0ZSk7XG5cdFx0XHRtYXBib3gub24oJ21vdmVlbmQnLCB1cGRhdGUpO1xuXHRcdFx0XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSk7XG5cdH0pO1xuXG59O1xuXG5jb25zdCBzZXRVbmtub3dMb2NhdGlvbiA9IGFzeW5jICgpID0+IHtcblx0Ly9hbnl3aGVyZSBpbiB0aGUgZ2xvYmVcblx0Y29uc3QgbGF0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTgwKSAtIDkwO1xuXHRjb25zdCBsb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjApIC0gMTgwO1xuXG5cdG1hcEJveENvbmZpZy56b29tID0gNTtcblx0bWFwQm94Q29uZmlnLmNlbnRlciA9IFtsb24sbGF0XTtcblx0bWFwQm94Q29uZmlnLm1heEJvdW5kcyA9IG51bGw7XG59O1xuXG5jb25zdCBmbHlGcm9tVW5rbm93TG9jYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cdG1hcGJveC5mbHlUbyh7XG5cdFx0Y2VudGVyOiBjb25maWcubWFwLmRlZmF1bHQuY2VudGVyLFxuXHRcdHpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC56b29tLFxuXHRcdHNwZWVkOiAxLFxuXHRcdGN1cnZlOiAxLFxuXHRcdG1pblpvb206IDMsXG5cdFx0Ly8gcGl0Y2g6IDYwLFxuXHRcdC8vIG1heER1cmF0aW9uOiA1MDAwLFxuXHRcdGVhc2luZzogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH1cblx0fSk7XG5cblx0bWFwYm94Lm9uKCdtb3ZlZW5kJywgKCkgPT4ge1xuXHRcdGlmIChtYXBib3guZ2V0TWF4Qm91bmRzKCkgPT0gbnVsbCkgbWFwYm94LnNldE1heEJvdW5kcyhjb25maWcubWFwLmRlZmF1bHQubWF4Qm91bmRzKTtcblx0fSk7XG59O1xuXG5jb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdGdlb2RhdGEubWFwVXBkYXRlKCk7XG59O1xuXG4vL2NoZWNrIGlmIG1hcCBpcyBsb2FkZWRcbmNvbnN0IGlzTWFwYm94TG9hZGVkID0gKCkgPT4gIHtcblx0aWYgKG1hcGJveCkgcmV0dXJuIG1hcGJveC5pc1N0eWxlTG9hZGVkKCk7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbi8vY2hhbmdlIG1hcCBzdHlsZVxuY29uc3QgY2hhbmdlTWFwID0gKHttYXBJRH0pID0+IHtcblx0bWFwYm94LnNldFN0eWxlKGBtYXBib3g6Ly9zdHlsZXMvJHtjb25maWcubWFwYm94LnVzZXJ9LyR7bWFwSUR9YCk7XG5cdHBpdGNoTWFwKHtmaW5hbFBpdGNoOjAsIGR1cmF0aW9uOjF9KTtcbn07XG5cbmNvbnN0IGZseVRvID0gY29vcmRpbmF0ZXMgPT4ge1xuXHRtYXBib3guZmx5VG8oe1xuXHRcdGNlbnRlcjpjb29yZGluYXRlcyxcblx0XHR6b29tOiAxNyxcblx0XHRzcGVlZDogMSxcblx0XHRjdXJ2ZTogMSxcblx0XHQvLyBtaW5ab29tOiAzLFxuXHRcdC8vIHBpdGNoOiA2MCxcblx0XHQvLyBtYXhEdXJhdGlvbjogNTAwMCxcblx0XHRlYXNpbmc6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9XG5cdH0pO1xufTtcblxuY29uc3QgZmx5VG9PcmlnaW4gPSAoKSA9PiB7XG5cdG1hcGJveC5mbHlUbyh7XG5cdFx0Y2VudGVyOmNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXIsXG5cdFx0em9vbTogY29uZmlnLm1hcC5kZWZhdWx0Lnpvb20gKyAwLjIsXG5cdFx0c3BlZWQ6IDEuMixcblx0XHRjdXJ2ZTogMSxcblx0XHRlYXNpbmc6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9XG5cdH0pO1xufTtcblxuLy9waXRjaCBtYXAgYW5pbWF0aW9uXG5jb25zdCBwaXRjaE1hcCA9ICh7ZmluYWxQaXRjaCA9IDAsIGR1cmF0aW9uID0gMTAwMH0pID0+IHtcblxuXHRpZiAocGl0Y2hBbmltYXRpb24pIGNsZWFySW50ZXJ2YWwocGl0Y2hBbmltYXRpb24pO1xuXG5cdGNvbnN0IHRpY2sgPSAxMDtcblx0bGV0IGVsYXBzZSA9IDA7XG5cblx0Y29uc3Qgc2NhbGVQaXRjaCA9IHNjYWxlTGluZWFyKClcblx0XHQuZG9tYWluKFswLCBkdXJhdGlvbl0pXG5cdFx0LnJhbmdlKFttYXBib3guZ2V0UGl0Y2goKSwgZmluYWxQaXRjaF0pO1xuXG5cdHBpdGNoQW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHRtYXBib3guc2V0UGl0Y2goc2NhbGVQaXRjaChlbGFwc2UpKTtcblx0XHQvLyBtYXBib3guc2V0Wm9vbShzY2FsZVpvb20oZWxhcHNlKSk7XG5cdFx0ZWxhcHNlICs9IHRpY2s7XG5cdFx0aWYgKGVsYXBzZSA+IGR1cmF0aW9uKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHBpdGNoQW5pbWF0aW9uKTtcblx0XHRcdHBpdGNoQW5pbWF0aW9uID0gbnVsbDtcblx0XHR9XG5cdH0sIHRpY2spO1xuXG59O1xuXG4vLyBQcm9qZWN0IEdlb0pTT04gY29vcmRpbmF0ZSB0byB0aGUgbWFwJ3MgY3VycmVudCBzdGF0ZVxuY29uc3QgcHJvamVjdCA9IGQgPT4gbWFwYm94LnByb2plY3QobmV3IG1hcGJveGdsLkxuZ0xhdCgrZFswXSwgK2RbMV0pKTtcblxuLy8gUHJvamVjdCBHZW9KU09OIGNvb3JkaW5hdGUgdG8gdGhlIG1hcCdzIGN1cnJlbnQgc3RhdGVcbmNvbnN0IHByb2plY3RQb2ludCA9IGZ1bmN0aW9uIChsb24sIGxhdCkge1xuXHRsZXQgcG9pbnQgPSBtYXBib3gucHJvamVjdChuZXcgbWFwYm94Z2wuTG5nTGF0KGxvbiwgbGF0KSk7XG5cdHRoaXMuc3RyZWFtLnBvaW50KHBvaW50LngsIHBvaW50LnkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpbml0LFxuXHR1cGRhdGUsXG5cdGlzTWFwYm94TG9hZGVkLFxuXHRjaGFuZ2VNYXAsXG5cdHBpdGNoTWFwLFxuXHRwcm9qZWN0LFxuXHRwcm9qZWN0UG9pbnQsXG5cdGZseVRvLFxuXHRmbHlUb09yaWdpblxufTtcbiIsImltcG9ydCBnaG9zdCBmcm9tICcuL2Fzc2V0cy9zbmFwY2hhdC5zdmcnO1xuaW1wb3J0IHVucnVseVdhdGVycyBmcm9tICcuL2Fzc2V0cy90c3VuYW1pLnN2Zyc7XG5pbXBvcnQgaW1hZ2luYXJpZXMgZnJvbSAnLi9hc3NldHMvdGhvdWdodC1idWJibGUuc3ZnJztcbmltcG9ydCBpbmZyYXN0cnVjdHVyZXMgZnJvbSAnLi9hc3NldHMvY29uZS5zdmcnO1xuaW1wb3J0IGNvbnRhbWluYXRpb24gZnJvbSAnLi9hc3NldHMvYmlvaGF6YXJkLnN2Zyc7XG5pbXBvcnQgc3BlY3VsYXRpdmUgZnJvbSAnLi9hc3NldHMvaGVscC5zdmcnO1xuaW1wb3J0IGJleW9uZEh1bWFucyBmcm9tICcuL2Fzc2V0cy9zbmFrZS5zdmcnO1xuaW1wb3J0IGRpc3JlYXBwZWFyaW5nV2F0ZXJzIGZyb20gJy4vYXNzZXRzL3NlYS5zdmcnO1xuXG5leHBvcnQgY29uc3QgZ2V0SWNvbiA9ICh7c2x1Z30pID0+IHtcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PSAnZ2hvc3RzJykgcmV0dXJuIGdob3N0O1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09ICd1bnJ1bGx5d2F0ZXJzJykgcmV0dXJuIHVucnVseVdhdGVycztcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PSAnaW1hZ2luYXJpZXMnKSByZXR1cm4gaW1hZ2luYXJpZXM7XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT0gJ2luZnJhc3RydWN0dXJlJykgcmV0dXJuIGluZnJhc3RydWN0dXJlcztcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PSAnY29udGFtaW5hdGlvbicpIHJldHVybiBjb250YW1pbmF0aW9uO1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09ICdzcGVjdWxhdGlvbicpIHJldHVybiBzcGVjdWxhdGl2ZTtcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PSAnYmV5b25kLWh1bWFucycpIHJldHVybiBiZXlvbmRIdW1hbnM7XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT0gJ2Rpc3JlYXBwZWFyaW5nd2F0ZXJzJykgcmV0dXJuIGRpc3JlYXBwZWFyaW5nV2F0ZXJzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRJY29uXG59OyJdLCJzb3VyY2VSb290IjoiIn0=