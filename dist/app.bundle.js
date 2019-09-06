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
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".app.bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
/* harmony import */ var _browser_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser-request */ "./src/browser-request.js");



_browser_request__WEBPACK_IMPORTED_MODULE_2__["default"].navigation();

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

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\" id=\"snake\" class=\"tag-icon\" x=\"0px\" y=\"0px\" viewBox=\"0 -4 512.00164 512\"><path d=\"m401.742188 152.636719c20.480468 1.015625 42.136718-7.644531 58.144531-23.65625 22.746093-22.742188 17.09375-63.289063 13.019531-81.589844l26.230469-26.230469-21.164063-21.160156-26.226562 26.226562c-18.304688-4.074218-58.851563-9.726562-81.59375 13.019532-14.613282 14.609375-23.191406 33.976562-23.722656 52.957031l-22.769532 24.351563c-17.769531 19-27.316406 43.792968-26.882812 69.804687.4375 26.011719 10.808594 50.472656 29.203125 68.867187l51.664062 51.664063c5.792969 5.792969 5.792969 15.214844 0 21.011719l-1.1875 1.1875c-5.792969 5.792968-15.21875 5.792968-21.011719 0l-176.703124-176.707032c-17.679688-17.679687-41.175782-27.640624-66.160157-28.050781-25.222656-.414062-48.914062 8.9375-66.832031 26.335938-18.140625 17.609375-28.273438 41.285156-28.527344 66.664062-.257812 25.386719 9.386719 49.265625 27.128906 67.203125l121.082032 123.039063c2.832031 2.863281 4.347656 6.679687 4.265625 10.753906-.082031 4.0625-1.753907 7.816406-4.707031 10.570313-5.777344 5.390624-15.238282 5.019531-21.085938-.828126l-42.226562-42.230468c-25.117188-25.113282-65.984376-25.113282-91.101563 0l-10.578125 10.582031 87.511719 87.511719c17.679687 17.679687 41.175781 27.644531 66.160156 28.054687.535156.007813 1.0625.011719 1.597656.011719 24.582031 0 47.695313-9.324219 65.234375-26.351562 18.136719-17.609376 28.269532-41.28125 28.527344-66.660157.257812-25.390625-9.386719-49.265625-27.132812-67.207031l-121.082032-123.039062c-2.832031-2.863282-4.34375-6.679688-4.261718-10.753907.082031-4.0625 1.753906-7.816406 4.703124-10.570312 5.777344-5.390625 15.238282-5.019531 21.085938.828125l176.972656 176.972656c17.796875 17.796875 41.460938 27.601562 66.632813 27.601562s48.839843-9.804687 66.636719-27.601562l1.191406-1.191406c36.742187-36.742188 36.742187-96.527344 0-133.269532l-50.792969-50.792968c-3.816406-3.816406-5.917969-8.890625-5.917969-14.285156 0-5.398438 2.101563-10.46875 5.917969-14.285157zm0 0\"></path></svg>"

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

/***/ "./src/browser-request.js":
/*!********************************!*\
  !*** ./src/browser-request.js ***!
  \********************************/
/*! exports provided: changeBrowserHistory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeBrowserHistory", function() { return changeBrowserHistory; });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var host = window.location.origin;
var rootPath = '/ghost-river/'; // const host = ' https://ghostriver.ethnographylabconcordia.ca'; //'http://localhost:8888'; // http://labs.fluxo.art.br // ghostriver.ethnographylabconcordia.ca
// const rootPath = '/';

var navigation = function navigation() {
  //test if url is trying to reach a deeplink		
  if (window.location.pathname !== rootPath) {
    var deepPath = window.location.pathname.split('/');
    var node = deepPath[deepPath.length - 2]; // const deepLink = window.location.pathname.split('/').length; 	//get path after the '/' as deeplink

    location = "".concat(host).concat(rootPath, "?node=").concat(node); //naviate to root with deeplink as a search parameters

    return;
  } //test if url is searching for deeplink


  if (window.location.search) {
    var url = new URL(window.location.href); //get utl		

    var slug = url.searchParams.get('node'); //get the params for search (a slug for a page or post)

    loadDeepLink(slug);
    return;
  } //Go Home


  goHome();
};

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
            changeBrowserHistory({
              slug: slug
            }); //change URL Bar

            theme = _content__WEBPACK_IMPORTED_MODULE_0__["default"].getThemeBySlug(slug); //get theme based on the search parameters
            //if search match to theme (page)

            if (!theme) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return _content__WEBPACK_IMPORTED_MODULE_0__["default"].showPage(theme);

          case 5:
            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return _content__WEBPACK_IMPORTED_MODULE_0__["default"].showPost({
              slug: slug
            });

          case 8:
            post = _context.sent;
            //if no page/post found: load home with 404
            if (!post) goHome();

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
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            changeBrowserHistory({
              slug: rootPath
            });
            _content__WEBPACK_IMPORTED_MODULE_0__["default"].initHome();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function goHome() {
    return _ref2.apply(this, arguments);
  };
}();

var changeBrowserHistory = function changeBrowserHistory(_ref3) {
  var title = _ref3.title,
      slug = _ref3.slug;
  var pageTitle = 'Ghost River';
  if (title) pageTitle += " - ".concat(title);
  document.title = pageTitle;
  window.history.pushState({
    pageTitle: pageTitle
  }, '', slug);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  navigation: navigation,
  changeBrowserHistory: changeBrowserHistory
});

/***/ }),

/***/ "./src/config/config.json":
/*!********************************!*\
  !*** ./src/config/config.json ***!
  \********************************/
/*! exports provided: map, mapbox, wordpress, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"map\":{\"default\":{\"styleID\":\"cjxzbs7nf0a4b1cowp80tsndy\",\"center\":[-73.56,45.48],\"zoom\":11.7,\"pitch\":0,\"minZoom\":11.7,\"maxZoom\":17,\"maxBounds\":[[-73.76,45.38],[-73.36,45.58]]},\"dataset\":\"cjxdpkggs01gi2os0srxdx837\"},\"mapbox\":{\"user\":\"saintpierremapping\",\"token\":\"pk.eyJ1Ijoic2FpbnRwaWVycmVtYXBwaW5nIiwiYSI6ImNqdDBpOXo4aDBkYmk0Nm5wMTU0MzhxcWcifQ.tH1TZXEMh4KOnahRKRl_BA\"},\"wordpress\":{\"endpoint\":\"https://ghostriver.ethnographylabconcordia.ca/wp-json/\"}}");

/***/ }),

/***/ "./src/config/themes.json":
/*!********************************!*\
  !*** ./src/config/themes.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"Home\",\"slug\":\"home\",\"state\":\"home\"},{\"id\":56,\"name\":\"About\",\"slug\":\"about\",\"state\":\"page\"},{\"id\":114,\"name\":\"Environment\",\"slug\":\"environment\",\"mapID\":\"cjtf3qpso03kh1fkvzo8dd4xk\",\"state\":\"page\"},{\"id\":118,\"name\":\"Steps\",\"slug\":\"steps\",\"mapID\":\"cjtg0c42v0w5x1fqlf1rmfs76\",\"state\":\"page\"},{\"id\":116,\"name\":\"Water\",\"slug\":\"water\",\"mapID\":\"cjuee51b92imr1fpof8u119ws\",\"state\":\"page\"}]");

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
/* harmony import */ var _browser_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-request */ "./src/browser-request.js");
/* harmony import */ var _contentHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentHTML */ "./src/contentHTML.js");
/* harmony import */ var _geodata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geodata */ "./src/geodata.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
/* harmony import */ var _config_themes_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/themes.json */ "./src/config/themes.json");
var _config_themes_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/themes.json */ "./src/config/themes.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var wp = new wpapi__WEBPACK_IMPORTED_MODULE_0___default.a({
  endpoint: _config_config_json__WEBPACK_IMPORTED_MODULE_5__.wordpress.endpoint
});
var theme;
var currentNode;
var activePanel;

var initHome = function initHome() {
  return _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].initHome();
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
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var id, slug, pageData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.id, slug = _ref.slug;
            _context.next = 3;
            return setTheme(slug);

          case 3:
            if (!(id === 0)) {
              _context.next = 6;
              break;
            }

            Object(_browser_request__WEBPACK_IMPORTED_MODULE_1__["changeBrowserHistory"])({
              slug: '/ghost-river/'
            });
            return _context.abrupt("return");

          case 6:
            // if (theme.isNew) 
            if (slug !== 'about') updateMap(theme);
            _context.next = 9;
            return loadPage({
              id: id,
              slug: slug
            });

          case 9:
            pageData = _context.sent;
            // console.log(pageData);
            setCurrentNode(null);
            if (slug !== 'about') _map__WEBPACK_IMPORTED_MODULE_4__["default"].flyToOrigin(); //panel

            setActivePanel(slug === 'about' ? 'full-panel' : 'right-panel');
            _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].updatePage(activePanel, pageData); //show panel

            _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].showPanel({
              activePanel: activePanel
            });
            Object(_browser_request__WEBPACK_IMPORTED_MODULE_1__["changeBrowserHistory"])({
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
    return _ref2.apply(this, arguments);
  };
}();

var loadPage =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var id, slug, pageData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = _ref3.id, slug = _ref3.slug;

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
    return _ref4.apply(this, arguments);
  };
}();

var showPost =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref5) {
    var id, slug, postData, postCategories, postTags, postTheme, coordinates;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _ref5.id, slug = _ref5.slug;

            if (!(currentNode && currentNode.id === id)) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return");

          case 3:
            _context3.next = 5;
            return _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].hidePanel({
              activePanel: activePanel
            });

          case 5:
            _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].showSpinner();
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

            _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].hideSpinner();
            return _context3.abrupt("return");

          case 12:
            _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].hideSpinner();
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
            _geodata__WEBPACK_IMPORTED_MODULE_3__["default"].setCurrentNode(currentNode);
            _context3.next = 25;
            return _geodata__WEBPACK_IMPORTED_MODULE_3__["default"].getNodeCoordinates(currentNode);

          case 25:
            coordinates = _context3.sent;
            _map__WEBPACK_IMPORTED_MODULE_4__["default"].flyTo(coordinates);
            setActivePanel('right-panel');
            _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].updatePost(postData, postTags, theme); //show Panel

            _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].showPanel({
              activePanel: activePanel
            });
            Object(_browser_request__WEBPACK_IMPORTED_MODULE_1__["changeBrowserHistory"])({
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
    return _ref6.apply(this, arguments);
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
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref7) {
    var id, slug, postData;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = _ref7.id, slug = _ref7.slug;

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
    return _ref8.apply(this, arguments);
  };
}();

var closePanel =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].hidePanel({
              activePanel: activePanel
            });

          case 2:
            setCurrentNode(null);
            _geodata__WEBPACK_IMPORTED_MODULE_3__["default"].resetNodesState({});
            return _context5.abrupt("return", currentNode);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function closePanel() {
    return _ref9.apply(this, arguments);
  };
}();

var setTheme =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
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
            return _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].hidePanel({
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
    return _ref10.apply(this, arguments);
  };
}();

var getCurrentTheme = function getCurrentTheme() {
  return theme;
};

var getThemeBySlug = function getThemeBySlug(slug) {
  return _config_themes_json__WEBPACK_IMPORTED_MODULE_6__.find(function (theme) {
    return theme.slug === slug;
  });
};

var changeState =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
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

            _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].hideTopMenu();
            _context7.next = 5;
            return _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].hidePanel({
              activePanel: activePanel
            });

          case 5:
            _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].showHome();
            _context7.next = 9;
            break;

          case 8:
            if (newState === 'page') {
              _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].hideHome();
              _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].showTopMenu();
            }

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function changeState(_x6) {
    return _ref11.apply(this, arguments);
  };
}();

var updateMap =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(_ref12) {
    var location;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            location = _ref12.location;
            if (!theme) theme = _config_themes_json__WEBPACK_IMPORTED_MODULE_6__[0];

            if (_map__WEBPACK_IMPORTED_MODULE_4__["default"].isMapboxLoaded()) {
              _context8.next = 12;
              break;
            }

            if (!(location === '404')) {
              _context8.next = 8;
              break;
            }

            _context8.next = 6;
            return _map__WEBPACK_IMPORTED_MODULE_4__["default"].init({
              location: location
            });

          case 6:
            _context8.next = 10;
            break;

          case 8:
            _context8.next = 10;
            return _map__WEBPACK_IMPORTED_MODULE_4__["default"].init(theme);

          case 10:
            _context8.next = 14;
            break;

          case 12:
            _context8.next = 14;
            return _map__WEBPACK_IMPORTED_MODULE_4__["default"].changeMap(theme);

          case 14:
            _context8.next = 16;
            return _geodata__WEBPACK_IMPORTED_MODULE_3__["default"].drawNodes(theme);

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function updateMap(_x7) {
    return _ref13.apply(this, arguments);
  };
}();

var tagSearch = function tagSearch(tag) {
  _geodata__WEBPACK_IMPORTED_MODULE_3__["default"].drawNodeByTag(tag);
  _map__WEBPACK_IMPORTED_MODULE_4__["default"].flyToOrigin();
  _contentHTML__WEBPACK_IMPORTED_MODULE_2__["default"].updateHeading(tag.name);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  initHome: initHome,
  showPage: showPage,
  showPost: showPost,
  closePanel: closePanel,
  getCurrentTheme: getCurrentTheme,
  getThemeBySlug: getThemeBySlug,
  tagSearch: tagSearch
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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags */ "./src/tags.js");
/* harmony import */ var _config_themes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/themes.json */ "./src/config/themes.json");
var _config_themes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/themes.json */ "./src/config/themes.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('body').append('div').attr('id', 'map-bg');

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
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])("#main-".concat(theme.slug, "-bt")).select('a').on('click', function () {
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
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])("#top-".concat(theme.slug, "-bt")).style('cursor', 'pointer').on('click', function () {
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
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'block');
    }
  });
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('.col-main-menu', 2, {
    y: 0,
    onStart: function onStart() {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'block');
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
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'none');
    }
  });
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('.col-main-menu', 2, {
    y: -800,
    onComplete: function onComplete() {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'none');
    }
  });
  hideHomeBG();
  showHeading();
};

var showHomeBG = function showHomeBG() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#map-bg', 2, {
    alpha: 1,
    onStart: function onStart() {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'block');
    }
  });
};

var hideHomeBG = function hideHomeBG() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#map-bg', 2, {
    alpha: 0,
    onComplete: function onComplete() {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'none');
    }
  });
};

var showTopMenu = function showTopMenu() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].fromTo('#top-menu', 2, {
    y: -200
  }, {
    y: 0,
    onStart: function onStart() {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'block');
    }
  });
  configTopMenu();
};

var hideTopMenu = function hideTopMenu() {
  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#top-menu', 2, {
    y: -200,
    onComplete: function onComplete() {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'none');
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
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'block');
      }
    });
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('#full-panel').select('.fl-col-content').property('scrollTop', 0);
    showHomeBG();
  } else {
    //Left Panel
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#left-panel', 2, {
      x: 0,
      onStart: function onStart() {
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'block').style('opacity', 0);
      }
    }); //Right Panel

    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#right-panel', 2, {
      x: 0,
      onStart: function onStart() {
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'block');
      }
    });
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').select('.fl-col-content').property('scrollTop', 0);
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
                    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target.selector).style('display', 'none');
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
  var heading = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-heading');

  if (heading.empty()) {
    heading = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('body').append('div').attr('id', 'map-heading');
    heading.append('h3');
  }

  gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].fromTo('#map-heading', 2, {
    alpha: 0
  }, {
    alpha: 1,
    onStart: function onStart() {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'block');
    }
  });
  return heading;
};

var hideHeading = function hideHeading() {
  var heading = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-heading');

  if (!heading.empty()) {
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to('#map-heading', 1, {
      alpha: 0,
      onComplete: function onComplete() {
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.target.selector).style('display', 'none');
      }
    });
  }
};

var updateHeading = function updateHeading(title) {
  if (title.toLowerCase() === 'about') title = '';
  var heading = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('#map-heading');
  if (heading.empty()) heading = showHeading();
  heading.select('h3').html(title);
};

var updatePage = function updatePage(activePanel, _ref4) {
  var title = _ref4.title,
      content = _ref4.content;
  //dom manipulation
  var panel = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])("#".concat(activePanel));
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
  var panel = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel');
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
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('color', 'steelblue');
  }).on('mouseout', function () {
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('color', '#535354');
  }).on('click', function (d) {
    return Object(_content__WEBPACK_IMPORTED_MODULE_2__["tagSearch"])(d);
  }); //resize tag icons

  tagsDIV.selectAll('.tag-icon').attr('width', '15px').attr('height', '15px');
  captureLinks();
};

var captureLinks = function captureLinks() {
  Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('a').on('click', function () {
    //get url // domain
    var link = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this).attr('href');
    var domain = link.split('/')[2]; //Test if it is a local link (localhost -> remote)

    var host = window.location.hostname === 'localhost' ? 'labs.fluxo.art.br' : window.location.hostname; //if extrrnal, navigate

    if (domain != host) return; //window.location.hostname
    //if local, prevent page update

    d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].preventDefault(); //load post based on slug on the url

    var slug = link.split('/')[4];
    Object(_content__WEBPACK_IMPORTED_MODULE_2__["showPost"])({
      slug: slug
    });
  });
};

var showSpinner = function showSpinner() {
  Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('body').append('div').attr('id', 'spinner').html('<div class="lds-ripple"><div></div><div></div></div>');
};

var hideSpinner = function hideSpinner() {
  return Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('#spinner').remove();
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

/***/ "./src/data/historical-river.json":
/*!****************************************!*\
  !*** ./src/data/historical-river.json ***!
  \****************************************/
/*! exports provided: features, type, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"features\":[{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1825\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"color\":2,\"id\":539,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.577041,45.483796,0],[-73.576975,45.483865,0],[-73.576909,45.483934,0],[-73.57687,45.484006,0],[-73.576804,45.484076,0],[-73.576767,45.484148,0],[-73.576702,45.484217,0],[-73.576664,45.484289,0],[-73.576625,45.484362,0],[-73.576532,45.484428,0],[-73.57652,45.484523,0],[-73.576454,45.484592,0],[-73.576389,45.484662,0],[-73.576328,45.484731,0],[-73.576293,45.484804,0],[-73.576225,45.484874,0],[-73.576186,45.484947,0],[-73.576121,45.485017,0],[-73.576084,45.48509,0],[-73.57602,45.48516,0],[-73.575985,45.485215,0],[-73.575919,45.485285,0],[-73.575881,45.485359,0],[-73.57587,45.485435,0],[-73.575886,45.485515,0],[-73.575902,45.485595,0],[-73.575893,45.485672,0],[-73.57594,45.485754,0],[-73.575987,45.485837,0],[-73.576034,45.485921,0],[-73.57605,45.486001,0],[-73.576034,45.486097,0],[-73.576021,45.486194,0],[-73.575954,45.486266,0],[-73.575915,45.48634,0],[-73.575848,45.486412,0],[-73.575781,45.486483,0],[-73.575713,45.486555,0],[-73.575646,45.486627,0],[-73.575577,45.486699,0],[-73.575567,45.486757,0],[-73.575522,45.486851,0],[-73.575484,45.486926,0],[-73.575417,45.486999,0],[-73.575351,45.487071,0],[-73.575314,45.487146,0],[-73.575249,45.487219,0],[-73.57521,45.487315,0],[-73.575144,45.487387,0],[-73.575133,45.487466,0],[-73.57504,45.487536,0],[-73.574973,45.487609,0],[-73.574875,45.487679,0],[-73.574781,45.487729,0],[-73.574683,45.487798,0],[-73.574617,45.487852,0],[-73.574521,45.487922,0],[-73.574454,45.487995,0],[-73.574361,45.488046,0],[-73.574293,45.488119,0],[-73.574225,45.488193,0],[-73.574157,45.488266,0],[-73.574095,45.4883,0],[-73.573995,45.488391,0],[-73.573898,45.488461,0],[-73.57383,45.488535,0],[-73.573761,45.488609,0],[-73.573664,45.48868,0],[-73.573597,45.488734,0],[-73.573473,45.488781,0],[-73.573377,45.488832,0],[-73.573279,45.488903,0],[-73.573185,45.488975,0],[-73.573116,45.48905,0],[-73.573046,45.489124,0],[-73.57298,45.489179,0],[-73.572882,45.489251,0],[-73.572783,45.489322,0],[-73.572663,45.48935,0],[-73.572567,45.489401,0],[-73.572474,45.489432,0],[-73.572348,45.489479,0],[-73.572252,45.489531,0],[-73.572133,45.489559,0],[-73.572067,45.489615,0],[-73.57197,45.489687,0],[-73.571849,45.489737,0],[-73.571755,45.48979,0],[-73.571661,45.489843,0],[-73.571563,45.489916,0],[-73.571469,45.489969,0],[-73.571374,45.490022,0],[-73.571276,45.490073,0],[-73.571177,45.490146,0],[-73.571058,45.490153,0],[-73.570935,45.490182,0],[-73.570813,45.49021,0],[-73.570691,45.490238,0],[-73.570566,45.490287,0],[-73.570494,45.490363,0],[-73.570371,45.490392,0],[-73.570274,45.490444,0],[-73.570202,45.49052,0],[-73.570105,45.490572,0],[-73.570009,45.490626,0],[-73.569937,45.490703,0],[-73.56984,45.490756,0],[-73.569717,45.490784,0],[-73.569623,45.490816,0],[-73.569525,45.490869,0],[-73.569399,45.490918,0],[-73.569272,45.490968,0],[-73.569174,45.49102,0],[-73.569075,45.491073,0],[-73.568973,45.491146,0],[-73.56885,45.491175,0],[-73.568751,45.491228,0],[-73.568624,45.491278,0],[-73.568497,45.491328,0],[-73.568399,45.491382,0],[-73.568326,45.49146,0],[-73.56831,45.491544,0],[-73.568262,45.491645,0],[-73.568188,45.491722,0],[-73.568173,45.491807,0],[-73.568099,45.491885,0],[-73.568054,45.491966,0],[-73.568001,45.492088,0],[-73.567927,45.492167,0],[-73.567882,45.492248,0],[-73.567808,45.492326,0],[-73.567763,45.492407,0],[-73.567747,45.492492,0],[-73.567697,45.492595,0],[-73.567623,45.492674,0],[-73.567549,45.492753,0],[-73.567504,45.492835,0],[-73.567404,45.492891,0],[-73.56733,45.492971,0],[-73.56723,45.493024,0],[-73.567124,45.493098,0],[-73.567053,45.493155,0],[-73.566948,45.49323,0],[-73.566851,45.493263,0],[-73.566747,45.493339,0],[-73.566617,45.49339,0],[-73.566546,45.493449,0],[-73.566441,45.493526,0],[-73.566335,45.493601,0],[-73.566205,45.493653,0],[-73.566104,45.493708,0],[-73.566003,45.493763,0],[-73.565931,45.493821,0],[-73.565825,45.493898,0],[-73.565719,45.493975,0],[-73.565647,45.494033,0],[-73.565516,45.494086,0],[-73.565444,45.494144,0],[-73.565342,45.4942,0],[-73.56524,45.494255,0],[-73.565134,45.494333,0],[-73.565062,45.494392,0],[-73.56498,45.494494,0],[-73.564874,45.494572,0],[-73.564771,45.494628,0],[-73.564669,45.494684,0],[-73.564591,45.494765,0],[-73.564514,45.494846,0],[-73.564436,45.494928,0],[-73.564359,45.495009,0],[-73.564251,45.495087,0],[-73.564148,45.495144,0],[-73.564045,45.4952,0],[-73.563942,45.495256,0],[-73.563843,45.49529,0],[-73.56374,45.495347,0],[-73.563692,45.495431,0],[-73.563673,45.495519,0],[-73.56365,45.49563,0],[-73.563631,45.495717,0],[-73.563608,45.495827,0],[-73.563559,45.495913,0],[-73.563455,45.495971,0],[-73.563351,45.496029,0],[-73.563277,45.49609,0],[-73.563143,45.496145,0],[-73.563043,45.496182,0],[-73.562913,45.496214,0],[-73.562789,45.496221,0],[-73.562664,45.49623,0],[-73.562544,45.496217,0],[-73.562424,45.496204,0],[-73.562309,45.496169,0],[-73.562233,45.496092,0],[-73.562123,45.496035,0],[-73.562018,45.495955,0],[-73.561907,45.495898,0],[-73.561827,45.495844,0],[-73.561717,45.495787,0],[-73.561607,45.49573,0],[-73.561492,45.495695,0],[-73.561373,45.495682,0]],\"type\":\"LineString\"},\"id\":\"0df56beab7a324647392ed26e515df79\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre Canalized 1900\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1900,\"color\":5},\"geometry\":{\"coordinates\":[[-73.59566,45.467599,0],[-73.595571,45.46763,0],[-73.595455,45.467659,0],[-73.595338,45.467688,0],[-73.595225,45.467716,0],[-73.595112,45.467725,0],[-73.594998,45.467754,0],[-73.594883,45.467782,0],[-73.594768,45.46781,0],[-73.594655,45.46782,0],[-73.594541,45.46783,0],[-73.594424,45.467859,0],[-73.594338,45.467871,0],[-73.594191,45.467917,0],[-73.594075,45.467946,0],[-73.593986,45.467977,0],[-73.593843,45.468003,0],[-73.59373,45.468012,0],[-73.593615,45.468041,0],[-73.593524,45.468091,0],[-73.593374,45.468156,0],[-73.593258,45.468185,0],[-73.593141,45.468214,0],[-73.593026,45.468242,0],[-73.592914,45.468252,0],[-73.592797,45.468281,0],[-73.59268,45.46831,0],[-73.592534,45.468355,0],[-73.592444,45.468405,0],[-73.59235,45.468456,0],[-73.592228,45.468505,0],[-73.59211,45.468553,0],[-73.591992,45.4686,0],[-73.591873,45.468648,0],[-73.591782,45.468699,0],[-73.591637,45.468725,0],[-73.59152,45.468755,0],[-73.591401,45.468803,0],[-73.591284,45.468832,0],[-73.591166,45.468879,0],[-73.591046,45.468928,0],[-73.590981,45.468981,0],[-73.59086,45.46903,0],[-73.590771,45.469061,0],[-73.590708,45.469114,0],[-73.590589,45.469161,0],[-73.590442,45.469207,0],[-73.590348,45.469259,0],[-73.590228,45.469307,0],[-73.590112,45.469336,0],[-73.589993,45.469384,0],[-73.589877,45.469413,0],[-73.589785,45.469463,0],[-73.589695,45.469495,0],[-73.589603,45.469546,0],[-73.589483,45.469594,0],[-73.589366,45.469623,0],[-73.589245,45.469672,0],[-73.589123,45.469721,0],[-73.589004,45.469769,0],[-73.588884,45.469817,0],[-73.588791,45.469868,0],[-73.588698,45.46992,0],[-73.588605,45.469971,0],[-73.588484,45.470019,0],[-73.588364,45.470068,0],[-73.588274,45.470099,0],[-73.588153,45.470148,0],[-73.588032,45.470197,0],[-73.587914,45.470226,0],[-73.587796,45.470256,0],[-73.587675,45.470304,0],[-73.587554,45.470353,0],[-73.587461,45.470404,0],[-73.587365,45.470475,0],[-73.587244,45.470524,0],[-73.587123,45.470572,0],[-73.586977,45.470599,0],[-73.586856,45.470648,0],[-73.586763,45.470699,0],[-73.586613,45.470746,0],[-73.586522,45.470778,0],[-73.586401,45.470827,0],[-73.586286,45.470837,0],[-73.586168,45.470866,0],[-73.58605,45.470895,0],[-73.585928,45.470944,0],[-73.585806,45.470993,0],[-73.585712,45.471045,0],[-73.585619,45.471096,0],[-73.585498,45.471145,0],[-73.585404,45.471196,0],[-73.585286,45.471226,0],[-73.585168,45.471255,0],[-73.585074,45.471307,0],[-73.584983,45.471339,0],[-73.584864,45.471368,0],[-73.584746,45.471398,0],[-73.584627,45.471427,0],[-73.584533,45.471479,0],[-73.584412,45.471528,0],[-73.584318,45.471579,0],[-73.584196,45.471628,0],[-73.584105,45.47166,0],[-73.583955,45.471707,0],[-73.583805,45.471754,0],[-73.583682,45.471803,0],[-73.583591,45.471835,0],[-73.583469,45.471884,0],[-73.583347,45.471933,0],[-73.583252,45.471985,0],[-73.583158,45.472036,0],[-73.583067,45.472068,0],[-73.582945,45.472118,0],[-73.582851,45.472169,0],[-73.582732,45.472199,0],[-73.58261,45.472248,0],[-73.582515,45.4723,0],[-73.582424,45.472332,0],[-73.582305,45.472362,0],[-73.582211,45.472413,0],[-73.582088,45.472463,0],[-73.581997,45.472495,0],[-73.581903,45.472547,0],[-73.581804,45.472618,0],[-73.581685,45.472648,0],[-73.58158,45.472599,0],[-73.581471,45.47257,0],[-73.581365,45.472521,0],[-73.58126,45.472472,0],[-73.581154,45.472423,0],[-73.581046,45.472394,0],[-73.58094,45.472345,0],[-73.580835,45.472296,0],[-73.580727,45.472266,0],[-73.580619,45.472236,0],[-73.58051,45.472207,0],[-73.580402,45.472178,0],[-73.580307,45.472229,0],[-73.580237,45.472303,0],[-73.580167,45.472377,0],[-73.580096,45.472451,0],[-73.580026,45.472525,0],[-73.579955,45.472599,0],[-73.579857,45.47267,0],[-73.579762,45.472722,0],[-73.579691,45.472797,0],[-73.57962,45.472871,0],[-73.579529,45.472903,0],[-73.57943,45.472975,0],[-73.579359,45.473049,0],[-73.579263,45.473101,0],[-73.579168,45.473153,0],[-73.5791,45.473208,0],[-73.579029,45.473282,0],[-73.57893,45.473354,0],[-73.578858,45.473429,0],[-73.578787,45.473503,0],[-73.578688,45.473576,0],[-73.578617,45.47365,0],[-73.578547,45.473724,0],[-73.578476,45.473799,0],[-73.578376,45.473871,0],[-73.578305,45.473945,0],[-73.578206,45.474017,0],[-73.578135,45.474092,0],[-73.57804,45.474144,0],[-73.577969,45.474219,0],[-73.577872,45.474271,0],[-73.577772,45.474344,0],[-73.577672,45.474417,0],[-73.577575,45.47447,0],[-73.577482,45.474503,0],[-73.57741,45.474578,0],[-73.577391,45.474678,0],[-73.577376,45.474758,0],[-73.577332,45.474835,0],[-73.577314,45.474935,0],[-73.57727,45.475013,0],[-73.577251,45.475113,0],[-73.577236,45.475193,0],[-73.577218,45.475293,0],[-73.577147,45.475368,0],[-73.577105,45.475444,0],[-73.577088,45.475543,0],[-73.577105,45.475606,0],[-73.577084,45.475708,0],[-73.57704,45.475786,0],[-73.576941,45.475858,0],[-73.576842,45.47593,0],[-73.576736,45.476008,0],[-73.576612,45.476041,0],[-73.576515,45.476094,0],[-73.576418,45.476147,0],[-73.576321,45.4762,0],[-73.576222,45.476272,0],[-73.576126,45.476324,0],[-73.576006,45.476355,0],[-73.575909,45.476408,0],[-73.575812,45.476461,0],[-73.575691,45.476491,0],[-73.575594,45.476544,0],[-73.575496,45.476598,0],[-73.575399,45.476652,0],[-73.575298,45.476725,0],[-73.575175,45.476756,0],[-73.575053,45.476787,0],[-73.574931,45.476818,0],[-73.574806,45.476868,0],[-73.574689,45.476878,0],[-73.574583,45.476828,0],[-73.574477,45.476777,0],[-73.574372,45.476726,0],[-73.574266,45.476676,0],[-73.574163,45.476606,0],[-73.574089,45.476539,0],[-73.573983,45.476488,0],[-73.573878,45.476438,0],[-73.573769,45.476407,0],[-73.573661,45.476376,0],[-73.573518,45.476364,0],[-73.573376,45.476352,0],[-73.573254,45.476382,0],[-73.573157,45.476435,0],[-73.573035,45.476466,0],[-73.572938,45.476519,0],[-73.572839,45.476573,0],[-73.572713,45.476624,0],[-73.572616,45.476677,0],[-73.572519,45.47673,0],[-73.572421,45.476783,0],[-73.572294,45.476835,0],[-73.572195,45.476889,0],[-73.572101,45.476922,0],[-73.571973,45.476974,0],[-73.571854,45.476985,0],[-73.571825,45.476983,0]],\"type\":\"LineString\"},\"id\":\"3cc9bd068d4c55ae7c9f4c7360a63b39\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1825\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"color\":2,\"id\":539,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.560204,45.484274,0],[-73.560256,45.484385,0],[-73.560308,45.484496,0],[-73.560316,45.484628,0],[-73.56033,45.484735,0],[-73.560301,45.484863,0],[-73.560272,45.484992,0],[-73.560248,45.485095,0],[-73.560219,45.485224,0],[-73.560189,45.485354,0],[-73.560128,45.485453,0],[-73.560029,45.485548,0],[-73.559892,45.485639,0],[-73.559831,45.485739,0],[-73.559732,45.485834,0],[-73.55967,45.485934,0],[-73.559571,45.486029,0],[-73.559509,45.486129,0],[-73.559448,45.486229,0],[-73.559386,45.48633,0],[-73.559325,45.48643,0],[-73.559301,45.486534,0],[-73.559239,45.486635,0],[-73.559209,45.486765,0],[-73.559185,45.486869,0],[-73.559161,45.486973,0],[-73.559131,45.487104,0],[-73.559183,45.487218,0],[-73.559279,45.487309,0],[-73.559331,45.487421,0],[-73.559427,45.487512,0],[-73.559529,45.487577,0],[-73.559625,45.487668,0],[-73.559765,45.487738,0],[-73.559905,45.487808,0],[-73.560045,45.487877,0],[-73.560104,45.487964,0],[-73.560238,45.48806,0],[-73.560334,45.488151,0],[-73.560387,45.488263,0],[-73.560489,45.488327,0],[-73.56058,45.488444,0],[-73.56067,45.488562,0],[-73.560723,45.488676,0],[-73.560781,45.488765,0],[-73.560872,45.488884,0],[-73.560969,45.488974,0],[-73.561072,45.489039,0],[-73.561157,45.489184,0],[-73.561254,45.489276,0],[-73.561313,45.489364,0],[-73.561404,45.489482,0],[-73.561501,45.489575,0],[-73.561554,45.48969,0],[-73.561568,45.4898,0],[-73.561621,45.489916,0],[-73.561674,45.490031,0],[-73.561721,45.490172,0],[-73.56173,45.490309,0],[-73.561745,45.49042,0],[-73.561799,45.490535,0],[-73.561814,45.490646,0],[-73.561797,45.490726,0],[-73.561806,45.490864,0],[-73.561853,45.491006,0],[-73.561869,45.491117,0],[-73.561884,45.491228,0],[-73.56186,45.491335,0],[-73.561876,45.491447,0],[-73.561885,45.491585,0],[-73.5619,45.491697,0],[-73.561915,45.491809,0],[-73.561963,45.491952,0],[-73.562016,45.492068,0],[-73.56207,45.492184,0],[-73.562129,45.492274,0],[-73.562177,45.492417,0],[-73.562192,45.492529,0],[-73.562246,45.492645,0],[-73.562338,45.492766,0],[-73.562392,45.492883,0],[-73.562446,45.493,0],[-73.5625,45.493117,0],[-73.56256,45.493206,0],[-73.562652,45.493328,0],[-73.562751,45.493422,0],[-73.562695,45.493499,0],[-73.562633,45.493603,0],[-73.562571,45.493708,0],[-73.562509,45.493813,0],[-73.562447,45.493917,0],[-73.562346,45.494018,0],[-73.562284,45.494123,0],[-73.562261,45.494232,0],[-73.56216,45.494333,0],[-73.562098,45.494438,0],[-73.562036,45.494543,0],[-73.561973,45.494649,0],[-73.561911,45.494754,0],[-73.561849,45.49486,0],[-73.561786,45.494966,0],[-73.561724,45.495071,0],[-73.5617,45.495181,0],[-73.561638,45.495286,0],[-73.561536,45.495388,0],[-73.561473,45.495493,0],[-73.561449,45.495603,0],[-73.561309,45.4957,0],[-73.561174,45.49577,0],[-73.561072,45.495872,0],[-73.560976,45.495946,0],[-73.560913,45.496052,0],[-73.560811,45.496154,0],[-73.560709,45.496256,0],[-73.560574,45.496327,0],[-73.560433,45.496425,0],[-73.560298,45.496495,0],[-73.560202,45.49657,0],[-73.56006,45.496668,0],[-73.559925,45.496739,0],[-73.559756,45.496778,0],[-73.55966,45.496853,0],[-73.559518,45.496951,0],[-73.559415,45.497054,0],[-73.559273,45.497152,0],[-73.55917,45.497255,0],[-73.559073,45.497331,0],[-73.558931,45.49743,0],[-73.558867,45.497537,0],[-73.558803,45.497644,0],[-73.558699,45.497747,0],[-73.558596,45.49785,0],[-73.558493,45.497953,0],[-73.558317,45.49802,0],[-73.558213,45.498124,0],[-73.55807,45.498223,0],[-73.557967,45.498326,0],[-73.55783,45.498397,0],[-73.557726,45.498501,0],[-73.557622,45.498604,0],[-73.557518,45.498708,0],[-73.557415,45.498811,0],[-73.557311,45.498914,0],[-73.557207,45.499017,0],[-73.557103,45.499121,0],[-73.556999,45.499224,0],[-73.556934,45.499332,0],[-73.55683,45.499435,0],[-73.556732,45.499511,0],[-73.556628,45.499615,0],[-73.556524,45.499718,0],[-73.556459,45.499826,0],[-73.556355,45.499929,0],[-73.556328,45.500043,0],[-73.556296,45.500185,0],[-73.55623,45.500295,0],[-73.556164,45.500406,0],[-73.556058,45.500512,0],[-73.555952,45.500618,0],[-73.555854,45.500695,0],[-73.555709,45.500795,0],[-73.555571,45.500867,0],[-73.555505,45.500976,0],[-73.55544,45.501085,0],[-73.555374,45.501194,0],[-73.555308,45.501303,0],[-73.555242,45.501413,0],[-73.555176,45.501523,0],[-73.55511,45.501633,0],[-73.555044,45.501743,0],[-73.554978,45.501854,0],[-73.554911,45.501965,0],[-73.554805,45.502071,0],[-73.554738,45.502182,0],[-73.554672,45.502293,0],[-73.554605,45.502403,0],[-73.554498,45.50251,0],[-73.554391,45.502618,0],[-73.554325,45.502729,0],[-73.554178,45.502831,0],[-73.554071,45.502938,0],[-73.554004,45.50305,0],[-73.553951,45.503103,0]],\"type\":\"LineString\"},\"id\":\"4b32ff74b3e326476d1da6df6d512e0b\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1834\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1834,\"color\":3,\"id\":536,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.570081,45.473629,0],[-73.570074,45.474086,0],[-73.570066,45.474657,0],[-73.570057,45.475229,0],[-73.569888,45.475688,0],[-73.569718,45.476147,0],[-73.569386,45.476607,0],[-73.569217,45.477066,0],[-73.56921,45.477525,0],[-73.568878,45.477986,0],[-73.568708,45.478446,0],[-73.568539,45.478906,0],[-73.568534,45.479365,0],[-73.568365,45.479825,0],[-73.568359,45.480284,0],[-73.568354,45.480744,0],[-73.568348,45.481204,0],[-73.568341,45.481779,0],[-73.568172,45.48224,0],[-73.567997,45.482704,0],[-73.567985,45.483282,0],[-73.567975,45.483745,0],[-73.567962,45.484324,0],[-73.567953,45.484787,0],[-73.567945,45.48525,0],[-73.567774,45.485714,0],[-73.567603,45.486177,0],[-73.567433,45.486641,0],[-73.567098,45.487106,0],[-73.566927,45.487571,0],[-73.56692,45.488035,0],[-73.566912,45.488614,0],[-73.567065,45.489079,0],[-73.567219,45.489544,0],[-73.567213,45.490008,0],[-73.56737,45.490471,0],[-73.567362,45.490937,0],[-73.567351,45.49152,0],[-73.56734,45.492103,0],[-73.567329,45.492687,0],[-73.567317,45.493271,0],[-73.566981,45.49374,0],[-73.566808,45.494209,0],[-73.566635,45.494677,0],[-73.566463,45.495146,0],[-73.56646,45.495495,0]],\"type\":\"LineString\"},\"id\":\"6b4a0cb1f197b0380830c5963c3ca7a3\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1834\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1834,\"color\":3,\"id\":536,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.628611,45.493214,0],[-73.628602,45.492638,0],[-73.628595,45.492177,0],[-73.628425,45.491716,0],[-73.628416,45.49114,0],[-73.628572,45.490677,0],[-73.628891,45.490216,0],[-73.629046,45.489754,0],[-73.629366,45.489293,0],[-73.629851,45.488949,0],[-73.6305,45.488719,0],[-73.630983,45.488371,0],[-73.631137,45.487909,0],[-73.631292,45.487447,0],[-73.631447,45.486986,0],[-73.631765,45.486525,0],[-73.632083,45.486064,0],[-73.632564,45.485604,0],[-73.633045,45.485143,0],[-73.633363,45.484684,0],[-73.633353,45.48411,0],[-73.633343,45.483536,0],[-73.633334,45.483076,0],[-73.633651,45.482616,0],[-73.633804,45.482155,0],[-73.633957,45.481695,0],[-73.634273,45.481235,0],[-73.634752,45.480774,0],[-73.635068,45.480314,0],[-73.635383,45.479854,0],[-73.635536,45.479395,0],[-73.635524,45.478823,0],[-73.636001,45.478363,0],[-73.63681,45.478244,0],[-73.637454,45.478012,0],[-73.637771,45.477667,0],[-73.638085,45.477208,0],[-73.638399,45.476749,0],[-73.63904,45.476403,0],[-73.639518,45.476058,0],[-73.639831,45.4756,0],[-73.640309,45.475255,0],[-73.640787,45.47491,0],[-73.6411,45.474452,0],[-73.641415,45.474108,0],[-73.641728,45.473651,0],[-73.642367,45.473306,0],[-73.643008,45.473074,0],[-73.643486,45.47273,0],[-73.643967,45.472501,0],[-73.644606,45.472269,0],[-73.645081,45.471925,0],[-73.645719,45.47158,0],[-73.64603,45.471124,0],[-73.646506,45.470781,0],[-73.646981,45.470437,0],[-73.647291,45.469981,0],[-73.647769,45.469751,0],[-73.648242,45.469295,0],[-73.648714,45.468839,0],[-73.649025,45.468384,0],[-73.649498,45.467929,0],[-73.650138,45.467699,0],[-73.650613,45.467356,0],[-73.650921,45.466902,0],[-73.65156,45.466672,0],[-73.65204,45.466556,0],[-73.652843,45.466438,0],[-73.65332,45.466209,0],[-73.653962,45.466092,0],[-73.654601,45.465863,0],[-73.654911,45.465522,0],[-73.65538,45.465067,0],[-73.655852,45.464726,0],[-73.656323,45.464384,0],[-73.65697,45.464381,0],[-73.657611,45.464264,0],[-73.658086,45.464036,0],[-73.658553,45.463582,0],[-73.65886,45.463129,0],[-73.659171,45.462789,0],[-73.659477,45.462337,0],[-73.659784,45.461884,0],[-73.660255,45.461544,0],[-73.660887,45.461203,0],[-73.661523,45.460974,0],[-73.66216,45.460745,0],[-73.662631,45.460405,0],[-73.663102,45.460065,0],[-73.663738,45.459836,0],[-73.664373,45.459608,0],[-73.664847,45.45938,0],[-73.665157,45.459042,0],[-73.665623,45.45859,0],[-73.665768,45.45814,0],[-73.666071,45.45769,0],[-73.666213,45.457241,0],[-73.666519,45.456791,0],[-73.666991,45.456452,0],[-73.667458,45.456001,0],[-73.667932,45.455774,0],[-73.668563,45.455434,0],[-73.669195,45.455206,0],[-73.669823,45.454867,0],[-73.670295,45.454641,0],[-73.670923,45.454302,0],[-73.670904,45.453743,0],[-73.670889,45.453296,0],[-73.671033,45.452848,0],[-73.671018,45.452401,0],[-73.671322,45.451953,0],[-73.671467,45.451506,0],[-73.671451,45.45106,0],[-73.671595,45.450613,0],[-73.671903,45.450277,0],[-73.672363,45.44983,0],[-73.672823,45.449382,0],[-73.673123,45.448936,0],[-73.673428,45.448601,0],[-73.673735,45.448153,0],[-73.674053,45.447702,0],[-73.67435,45.447258,0],[-73.674329,45.446815,0],[-73.674313,45.446371,0],[-73.674133,45.445817,0],[-73.67412,45.445372,0],[-73.67379,45.444928,0],[-73.674089,45.444484,0],[-73.674392,45.444039,0],[-73.674383,45.443593,0],[-73.674363,45.443039,0],[-73.674341,45.442486,0],[-73.674324,45.442044,0],[-73.674147,45.441603,0],[-73.673659,45.441385,0],[-73.673016,45.44128,0],[-73.67237,45.441063,0],[-73.672193,45.440622,0],[-73.672017,45.440182,0],[-73.671999,45.439741,0],[-73.67198,45.439301,0],[-73.67164,45.438865,0],[-73.671301,45.438428,0],[-73.670965,45.43799,0],[-73.670475,45.437664,0],[-73.669829,45.437448,0],[-73.669179,45.437123,0],[-73.668534,45.436908,0],[-73.6679,45.436911,0],[-73.66727,45.437024,0],[-73.666635,45.437028,0],[-73.665996,45.436922,0],[-73.66566,45.436485,0],[-73.665164,45.436051,0],[-73.664671,45.435728,0],[-73.664025,45.435402,0],[-73.66354,45.435074,0],[-73.662903,45.435079,0],[-73.662106,45.435086,0],[-73.661313,45.435091,0],[-73.661003,45.435536,0],[-73.660533,45.435759,0],[-73.659906,45.435982,0],[-73.659274,45.436096,0],[-73.658973,45.436535,0],[-73.658673,45.436975,0],[-73.658208,45.437306,0],[-73.65758,45.43753,0],[-73.656948,45.437643,0],[-73.656156,45.437647,0],[-73.655511,45.437433,0],[-73.654875,45.437325,0],[-73.654418,45.437763,0],[-73.654434,45.438201,0],[-73.654134,45.43864,0],[-73.653663,45.438863,0],[-73.653034,45.438975,0],[-73.652394,45.438981,0],[-73.651603,45.438983,0],[-73.651131,45.439206,0],[-73.650666,45.43965,0],[-73.650044,45.43998,0],[-73.649413,45.440205,0],[-73.648784,45.440428,0],[-73.648477,45.440872,0],[-73.648003,45.441209,0],[-73.647204,45.441216,0],[-73.646727,45.441218,0],[-73.646095,45.441331,0],[-73.645464,45.441555,0],[-73.644834,45.441778,0],[-73.644206,45.442112,0],[-73.643735,45.442335,0],[-73.643269,45.44278,0],[-73.643121,45.443222,0],[-73.642814,45.443666,0],[-73.642182,45.44389,0],[-73.641548,45.444004,0],[-73.64091,45.444007,0],[-73.640279,45.444343,0],[-73.639646,45.444568,0],[-73.639013,45.444793,0],[-73.63838,45.445018,0],[-73.637906,45.445242,0],[-73.63727,45.445357,0],[-73.636797,45.445693,0],[-73.636487,45.446139,0],[-73.636012,45.446364,0],[-73.635379,45.446588,0],[-73.634907,45.446923,0],[-73.634597,45.447369,0],[-73.634124,45.447705,0],[-73.633652,45.44804,0],[-73.633339,45.448375,0],[-73.632868,45.448823,0],[-73.632233,45.449049,0],[-73.631432,45.449054,0],[-73.630958,45.449391,0],[-73.630646,45.449837,0],[-73.630334,45.450286,0],[-73.62986,45.450622,0],[-73.629222,45.450736,0],[-73.628582,45.450967,0],[-73.628591,45.451525,0],[-73.628599,45.451971,0],[-73.628446,45.452418,0],[-73.628134,45.452866,0],[-73.627496,45.45298,0],[-73.627022,45.45343,0],[-73.626709,45.453878,0],[-73.626233,45.454216,0],[-73.625594,45.454331,0],[-73.625118,45.45467,0],[-73.624481,45.455009,0],[-73.623842,45.455236,0],[-73.623203,45.455464,0],[-73.622726,45.455803,0],[-73.622411,45.456253,0],[-73.622095,45.456704,0],[-73.621618,45.457044,0],[-73.620976,45.45716,0],[-73.620335,45.457276,0],[-73.619857,45.457616,0],[-73.619702,45.458065,0],[-73.619386,45.458516,0],[-73.618745,45.458745,0],[-73.618104,45.458974,0],[-73.617464,45.459202,0],[-73.61747,45.459764,0],[-73.617475,45.460214,0],[-73.616835,45.460555,0],[-73.616192,45.460672,0],[-73.615549,45.460788,0],[-73.614907,45.461017,0],[-73.614427,45.461357,0],[-73.614432,45.461921,0],[-73.613951,45.462149,0],[-73.613308,45.462379,0],[-73.612665,45.462608,0],[-73.612345,45.462948,0],[-73.611865,45.46329,0],[-73.611382,45.463518,0],[-73.610901,45.463747,0],[-73.61042,45.464202,0],[-73.609938,45.464544,0],[-73.609458,45.464999,0],[-73.608977,45.465341,0],[-73.608497,45.465682,0],[-73.608017,45.466024,0],[-73.607373,45.466367,0],[-73.607059,45.46682,0],[-73.606573,45.46705,0],[-73.605924,45.467396,0],[-73.605439,45.467739,0],[-73.605118,45.468081,0],[-73.604636,45.468537,0],[-73.604152,45.468881,0],[-73.603667,45.469111,0],[-73.60302,45.469456,0],[-73.602372,45.469687,0],[-73.601723,45.469919,0],[-73.601074,45.470151,0],[-73.600264,45.47027,0],[-73.599616,45.470273,0],[-73.598968,45.470277,0],[-73.598321,45.470281,0],[-73.597674,45.470511,0],[-73.597189,45.470856,0],[-73.596702,45.471086,0],[-73.596215,45.471431,0],[-73.595567,45.471776,0],[-73.594919,45.472008,0],[-73.594271,45.472125,0],[-73.593623,45.472357,0],[-73.592976,45.472587,0],[-73.592651,45.472931,0],[-73.591998,45.473279,0],[-73.59151,45.473738,0],[-73.590861,45.47397,0],[-73.590373,45.474315,0],[-73.589724,45.474433,0],[-73.589075,45.47455,0],[-73.588587,45.474896,0],[-73.587935,45.475243,0],[-73.587283,45.475247,0],[-73.58647,45.475367,0],[-73.58582,45.47537,0],[-73.58517,45.475374,0],[-73.584684,45.475376,0],[-73.583872,45.475495,0],[-73.583223,45.475498,0],[-73.582576,45.475272,0],[-73.581927,45.47539,0],[-73.581276,45.475508,0],[-73.580627,45.475625,0],[-73.580141,45.475285,0],[-73.579819,45.47483,0],[-73.579172,45.474605,0],[-73.578525,45.47438,0],[-73.578041,45.47404,0],[-73.577557,45.4737,0],[-73.577072,45.473474,0],[-73.576421,45.473592,0],[-73.575773,45.473823,0],[-73.574966,45.473826,0],[-73.574483,45.473487,0],[-73.573825,45.473378,0],[-73.573175,45.473268,0],[-73.572526,45.473158,0],[-73.571875,45.473162,0],[-73.571225,45.473165,0],[-73.570413,45.47317,0],[-73.569763,45.473174,0],[-73.569114,45.473177,0],[-73.568465,45.473294,0],[-73.567655,45.473298,0],[-73.567337,45.472957,0],[-73.566859,45.472503,0],[-73.566377,45.472164,0],[-73.565734,45.471825,0],[-73.565743,45.471255,0],[-73.566235,45.470911,0],[-73.566405,45.470455,0],[-73.56625,45.47,0],[-73.565769,45.469662,0],[-73.565289,45.469323,0],[-73.564974,45.46887,0],[-73.564979,45.468642,0]],\"type\":\"LineString\"},\"id\":\"6b4e1fc5684da3f1116129cea2fc9f61\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1825\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"color\":2,\"id\":539,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.57417,45.485485,0],[-73.574077,45.485533,0],[-73.57401,45.485604,0],[-73.573943,45.485675,0],[-73.573875,45.485746,0],[-73.573836,45.48582,0],[-73.573742,45.485888,0],[-73.573675,45.485959,0],[-73.573608,45.48603,0],[-73.573573,45.486085,0],[-73.573477,45.486153,0],[-73.57341,45.486225,0],[-73.573344,45.486297,0],[-73.573249,45.486365,0],[-73.573152,45.486434,0],[-73.573059,45.486483,0],[-73.572966,45.486532,0],[-73.572849,45.486559,0],[-73.572757,45.486609,0],[-73.572639,45.486636,0],[-73.572571,45.486708,0],[-73.572476,45.486757,0],[-73.572379,45.486826,0],[-73.572313,45.486879,0],[-73.572244,45.486951,0],[-73.57215,45.487021,0],[-73.572082,45.487093,0],[-73.57204,45.487169,0],[-73.571999,45.487245,0],[-73.571957,45.48732,0],[-73.571916,45.487396,0],[-73.571875,45.487472,0],[-73.571833,45.487548,0],[-73.571787,45.487644,0],[-73.571745,45.48772,0],[-73.571703,45.487796,0],[-73.571662,45.487872,0],[-73.571622,45.487949,0],[-73.571582,45.488026,0],[-73.571541,45.488103,0],[-73.571471,45.488177,0],[-73.5714,45.48825,0],[-73.571358,45.488327,0],[-73.571318,45.488405,0],[-73.571247,45.488478,0],[-73.571205,45.488555,0],[-73.571134,45.488629,0],[-73.571063,45.488703,0],[-73.57094,45.488752,0],[-73.570871,45.488826,0],[-73.5708,45.488901,0],[-73.570701,45.488972,0],[-73.570604,45.489023,0],[-73.570508,45.489074,0],[-73.570412,45.489126,0],[-73.570341,45.489201,0],[-73.570241,45.489273,0],[-73.57017,45.489348,0],[-73.570099,45.489423,0],[-73.569999,45.489495,0],[-73.569903,45.489547,0],[-73.569832,45.489622,0],[-73.569733,45.489695,0],[-73.56966,45.48977,0],[-73.569559,45.489842,0],[-73.569461,45.489893,0],[-73.569392,45.489948,0],[-73.569287,45.490041,0],[-73.569165,45.490069,0],[-73.569093,45.490146,0],[-73.569021,45.490222,0],[-73.56892,45.490295,0],[-73.568822,45.490347,0],[-73.568753,45.490402,0],[-73.56868,45.490479,0],[-73.568612,45.490534,0],[-73.568511,45.490608,0],[-73.568468,45.490689,0],[-73.568394,45.490765,0],[-73.568321,45.490841,0],[-73.568247,45.490917,0],[-73.568202,45.490997,0],[-73.568158,45.491077,0],[-73.568201,45.491168,0],[-73.568277,45.49124,0],[-73.568356,45.491292,0],[-73.568385,45.491295,0]],\"type\":\"LineString\"},\"id\":\"8a490193a390cd6eab612839e361a522\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1860\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1860,\"color\":4,\"id\":533,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.577099,45.475696,0],[-73.576968,45.475758,0],[-73.576831,45.475795,0],[-73.5767,45.475857,0],[-73.576569,45.475918,0],[-73.576481,45.476001,0],[-73.576351,45.476062,0],[-73.576255,45.476121,0],[-73.576118,45.476158,0],[-73.575982,45.476195,0],[-73.575851,45.476257,0],[-73.57572,45.476319,0],[-73.57559,45.47638,0],[-73.575494,45.476439,0],[-73.575358,45.476476,0],[-73.575215,45.476489,0],[-73.575078,45.476526,0],[-73.574925,45.47649,0],[-73.574795,45.476402,0],[-73.574701,45.476311,0],[-73.574583,45.476272,0],[-73.574425,45.476211,0],[-73.574303,45.476147,0],[-73.574152,45.47611,0],[-73.574028,45.476046,0],[-73.573904,45.475983,0],[-73.573751,45.475947,0],[-73.573598,45.475912,0],[-73.573445,45.475876,0],[-73.573292,45.47584,0],[-73.573114,45.475857,0],[-73.572982,45.475919,0],[-73.57289,45.476002,0],[-73.572758,45.476063,0],[-73.572626,45.476126,0],[-73.572535,45.476208,0],[-73.572393,45.476221,0],[-73.57225,45.476234,0],[-73.572108,45.476247,0],[-73.571955,45.476211,0],[-73.571803,45.476175,0],[-73.571681,45.476112,0],[-73.571529,45.476076,0],[-73.571412,45.476036,0],[-73.571261,45.476,0],[-73.57114,45.475936,0],[-73.571018,45.475872,0],[-73.570927,45.475781,0],[-73.570826,45.475814,0],[-73.57069,45.475851,0],[-73.570548,45.475864,0],[-73.570406,45.475877,0],[-73.570259,45.475865,0],[-73.570107,45.475829,0],[-73.569975,45.475891,0],[-73.569841,45.475954,0],[-73.569704,45.475991,0],[-73.569573,45.476052,0],[-73.569441,45.476113,0],[-73.569308,45.476175,0],[-73.56918,45.476262,0],[-73.569048,45.476324,0],[-73.56895,45.476383,0],[-73.568813,45.47642,0],[-73.568676,45.476457,0],[-73.568543,45.476519,0],[-73.568405,45.476556,0],[-73.568273,45.476618,0],[-73.568135,45.476655,0],[-73.568003,45.476717,0],[-73.56787,45.476778,0],[-73.567737,45.47684,0],[-73.567604,45.476902,0],[-73.567471,45.476963,0],[-73.567343,45.47705,0],[-73.567209,45.477112,0],[-73.567076,45.477174,0],[-73.566943,45.477236,0],[-73.566809,45.477298,0],[-73.566711,45.477357,0],[-73.566614,45.477416,0],[-73.566485,45.477503,0],[-73.566351,45.477565,0],[-73.566213,45.477603,0],[-73.566079,45.477666,0],[-73.565945,45.477728,0],[-73.565811,45.477791,0],[-73.565682,45.477878,0],[-73.565548,45.47794,0],[-73.565414,45.478003,0],[-73.56528,45.478065,0],[-73.565181,45.478125,0],[-73.565047,45.478187,0],[-73.564913,45.47825,0],[-73.564814,45.478309,0],[-73.56468,45.478372,0],[-73.564541,45.47841,0],[-73.564407,45.478472,0],[-73.564269,45.478511,0],[-73.564135,45.478574,0],[-73.56408,45.47868,0],[-73.563982,45.478739,0],[-73.563851,45.478826,0],[-73.563712,45.478864,0],[-73.563577,45.478927,0],[-73.563442,45.47899,0],[-73.563307,45.479053,0],[-73.563171,45.479116,0],[-73.563036,45.479178,0],[-73.562937,45.479238,0],[-73.562803,45.479301,0],[-73.562707,45.479386,0],[-73.562651,45.479493,0],[-73.562552,45.479552,0],[-73.562416,45.479616,0],[-73.562281,45.479679,0],[-73.562185,45.479764,0],[-73.562164,45.479868,0],[-73.562145,45.479971,0],[-73.562126,45.480075,0],[-73.562147,45.480201,0],[-73.562168,45.480327,0],[-73.562189,45.480454,0],[-73.56217,45.480558,0],[-73.56215,45.480663,0],[-73.562131,45.480767,0],[-73.562111,45.480872,0],[-73.562092,45.480976,0],[-73.562073,45.481081,0],[-73.562053,45.481186,0],[-73.562033,45.481291,0],[-73.562056,45.481418,0],[-73.562036,45.481523,0],[-73.562017,45.481628,0],[-73.561961,45.481737,0],[-73.561905,45.481846,0],[-73.561886,45.481951,0],[-73.56183,45.48206,0],[-73.561775,45.482169,0],[-73.561719,45.482278,0],[-73.561698,45.482384,0],[-73.561605,45.482497,0],[-73.561509,45.482584,0],[-73.561453,45.482693,0],[-73.561361,45.482805,0],[-73.561268,45.482918,0],[-73.561212,45.483028,0],[-73.56112,45.48314,0],[-73.561064,45.48325,0],[-73.561007,45.48336,0],[-73.56091,45.483448,0],[-73.560849,45.483532,0],[-73.560792,45.483642,0],[-73.560731,45.483727,0],[-73.560675,45.483837,0],[-73.560654,45.483944,0],[-73.560634,45.484051,0],[-73.560615,45.484158,0],[-73.560595,45.484265,0],[-73.560574,45.484373,0],[-73.560553,45.484481,0],[-73.560532,45.484589,0],[-73.560548,45.484694,0],[-73.560527,45.484803,0],[-73.560544,45.484907,0],[-73.56056,45.485011,0],[-73.560581,45.485143,0],[-73.560597,45.485247,0],[-73.560618,45.485379,0],[-73.560561,45.485491,0],[-73.560462,45.48558,0],[-73.56036,45.485642,0],[-73.560262,45.485732,0],[-73.560167,45.485847,0],[-73.560069,45.485936,0],[-73.559929,45.486003,0],[-73.559827,45.486065,0],[-73.559687,45.486132,0],[-73.559584,45.486195,0],[-73.55949,45.48631,0],[-73.559469,45.486419,0],[-73.559449,45.486528,0],[-73.559429,45.486637,0],[-73.559408,45.486746,0],[-73.559424,45.486852,0],[-73.559403,45.486962,0],[-73.559423,45.487095,0],[-73.559476,45.487198,0],[-73.55953,45.487301,0],[-73.55962,45.487401,0],[-73.55971,45.487501,0],[-73.559801,45.487601,0],[-73.559925,45.48767,0],[-73.560045,45.487713,0],[-73.560206,45.48778,0],[-73.56033,45.48785,0],[-73.560487,45.487889,0],[-73.560649,45.487956,0],[-73.560806,45.488028,0],[-73.560895,45.488133,0],[-73.560982,45.488207,0],[-73.561074,45.488307,0],[-73.561166,45.488408,0],[-73.56122,45.488511,0],[-73.561276,45.488614,0],[-73.561368,45.488713,0],[-73.561423,45.488817,0],[-73.561478,45.488921,0],[-73.561532,45.489027,0],[-73.561623,45.489129,0],[-73.561715,45.489231,0],[-73.561807,45.489332,0],[-73.561933,45.489402,0],[-73.562063,45.489499,0],[-73.562152,45.489571,0],[-73.562245,45.489673,0],[-73.562296,45.48975,0]],\"type\":\"LineString\"},\"id\":\"8d9212402ebb5f9e848ed8cd61ffad78\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1914\",\"type\":\"historical\",\"year\":1914,\"theme\":\"steps\",\"color\":7,\"id\":466,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.657701,45.44078,0],[-73.657704,45.440645,0],[-73.657747,45.44054,0],[-73.657747,45.440405,0],[-73.657788,45.4403,0],[-73.657868,45.440198,0],[-73.657913,45.440093,0],[-73.658034,45.440046,0],[-73.658194,45.440002,0],[-73.658389,45.440014,0],[-73.658511,45.439941,0],[-73.65867,45.439897,0],[-73.658795,45.439823,0],[-73.658877,45.439748,0],[-73.658962,45.439645,0],[-73.658849,45.439557,0],[-73.658694,45.439521,0],[-73.658501,45.439508,0],[-73.658308,45.439495,0],[-73.658157,45.439405,0],[-73.658003,45.439342,0],[-73.65789,45.439254,0],[-73.657778,45.439167,0],[-73.657626,45.439103,0],[-73.657513,45.439042,0],[-73.657361,45.438979,0],[-73.65721,45.438889,0],[-73.657097,45.438802,0],[-73.656985,45.438715,0],[-73.656872,45.438628,0],[-73.65672,45.438538,0],[-73.656607,45.438452,0],[-73.656452,45.43839,0],[-73.656297,45.438327,0],[-73.656144,45.438265,0],[-73.655991,45.438202,0],[-73.65584,45.438113,0],[-73.655691,45.438024,0],[-73.655538,45.437988,0],[-73.65538,45.438031,0],[-73.655298,45.438131,0],[-73.655216,45.438231,0],[-73.655136,45.438331,0],[-73.655054,45.438432,0],[-73.654929,45.438531,0],[-73.654806,45.438604,0],[-73.654683,45.438676,0],[-73.654522,45.438746,0],[-73.654363,45.43879,0],[-73.65424,45.438863,0],[-73.654081,45.438906,0],[-73.65392,45.438976,0],[-73.653761,45.43902,0],[-73.653604,45.439062,0],[-73.653443,45.439106,0],[-73.653284,45.439097,0],[-73.653086,45.439112,0],[-73.652967,45.439131,0],[-73.652778,45.439118,0],[-73.652621,45.439108,0],[-73.652425,45.439096,0],[-73.652274,45.439032,0],[-73.652162,45.438945,0],[-73.65205,45.438858,0],[-73.651899,45.438795,0],[-73.651744,45.438785,0],[-73.651585,45.438828,0],[-73.651464,45.4389,0],[-73.651341,45.438972,0],[-73.65118,45.439016,0],[-73.651056,45.439089,0],[-73.650892,45.43916,0],[-73.650806,45.439262,0],[-73.650722,45.439337,0],[-73.650713,45.43947,0],[-73.650705,45.439578,0],[-73.650696,45.439685,0],[-73.650727,45.439795,0],[-73.650797,45.439908,0],[-73.650827,45.440018,0],[-73.650858,45.440128,0],[-73.650889,45.440239,0],[-73.65092,45.440349,0],[-73.65095,45.44046,0],[-73.650938,45.440596,0],[-73.650927,45.440732,0],[-73.650879,45.440838,0],[-73.650791,45.440942,0],[-73.650704,45.441046,0],[-73.65058,45.44112,0],[-73.650492,45.441224,0],[-73.650368,45.441298,0],[-73.650206,45.441343,0],[-73.65008,45.441417,0],[-73.649917,45.441462,0],[-73.649791,45.441537,0],[-73.64963,45.441554,0],[-73.649464,45.441599,0],[-73.649374,45.441704,0],[-73.649327,45.441784,0],[-73.6492,45.441886,0],[-73.649076,45.441961,0],[-73.648985,45.442066,0],[-73.648889,45.442171,0],[-73.648761,45.442246,0],[-73.648674,45.442324,0],[-73.648547,45.442399,0],[-73.648421,45.442474,0],[-73.648296,45.442549,0],[-73.648171,45.442625,0],[-73.648047,45.4427,0],[-73.647961,45.442806,0],[-73.647875,45.442912,0],[-73.647788,45.443018,0],[-73.647661,45.443094,0],[-73.647535,45.44317,0],[-73.64737,45.443216,0],[-73.647211,45.443206,0],[-73.647009,45.443221,0],[-73.646849,45.443211,0],[-73.646648,45.443198,0],[-73.64666,45.443087,0],[-73.646631,45.442973,0],[-73.646562,45.442857,0],[-73.646453,45.442766,0],[-73.646342,45.442675,0],[-73.646187,45.442637,0],[-73.646022,45.442683,0],[-73.645857,45.442728,0],[-73.645692,45.442774,0],[-73.645564,45.442849,0],[-73.645396,45.442923,0],[-73.645267,45.442998,0],[-73.645098,45.443072,0],[-73.64497,45.443148,0],[-73.644805,45.443193,0],[-73.644676,45.443269,0],[-73.644547,45.443345,0],[-73.644379,45.443419,0],[-73.64425,45.443495,0],[-73.644121,45.443572,0],[-73.643992,45.443648,0],[-73.643902,45.443727,0],[-73.643733,45.443801,0],[-73.643603,45.443878,0],[-73.643437,45.443924,0],[-73.643267,45.443998,0],[-73.643137,45.444074,0],[-73.643007,45.444151,0],[-73.642877,45.444228,0],[-73.642744,45.444333,0],[-73.642613,45.44441,0],[-73.642446,45.444457,0],[-73.642315,45.444534,0],[-73.642185,45.444611,0],[-73.642054,45.444688,0],[-73.641923,45.444765,0],[-73.641792,45.444843,0],[-73.641657,45.444948,0],[-73.641489,45.444995,0],[-73.641358,45.445072,0],[-73.641226,45.44515,0],[-73.641132,45.445259,0],[-73.641,45.445336,0],[-73.640832,45.445383,0],[-73.6407,45.445461,0],[-73.640568,45.445539,0],[-73.640436,45.445617,0],[-73.6403,45.445724,0],[-73.640167,45.445802,0],[-73.640035,45.44588,0],[-73.639902,45.445958,0],[-73.639729,45.446034,0],[-73.63956,45.446081,0],[-73.639427,45.446159,0],[-73.639334,45.44624,0],[-73.639201,45.446319,0],[-73.639068,45.446397,0],[-73.638895,45.446473,0],[-73.638684,45.446518,0],[-73.63855,45.446597,0],[-73.638417,45.446675,0],[-73.638246,45.446723,0],[-73.638112,45.446802,0],[-73.637978,45.446881,0],[-73.637844,45.44696,0],[-73.63771,45.447039,0],[-73.637617,45.44712,0],[-73.637442,45.447197,0],[-73.637307,45.447276,0],[-73.637209,45.447387,0],[-73.637038,45.447435,0],[-73.636944,45.447517,0],[-73.636736,45.447533,0],[-73.636585,45.447435,0],[-73.63643,45.447367,0],[-73.636276,45.447299,0],[-73.636117,45.44726,0],[-73.635962,45.447191,0],[-73.635848,45.447126,0],[-73.635689,45.447087,0],[-73.635534,45.447019,0],[-73.635376,45.44698,0],[-73.635217,45.446941,0],[-73.635067,45.446844,0],[-73.634896,45.446891,0],[-73.634873,45.447036,0],[-73.634851,45.447181,0],[-73.634919,45.447274,0],[-73.634942,45.447392,0],[-73.635006,45.447514,0],[-73.635074,45.447607,0],[-73.635052,45.447753,0],[-73.634916,45.447832,0],[-73.634817,45.447944,0],[-73.634681,45.448024,0],[-73.634545,45.448104,0],[-73.634367,45.448181,0],[-73.634231,45.448261,0],[-73.634131,45.448373,0],[-73.633953,45.448451,0],[-73.633747,45.448438,0],[-73.633542,45.448425,0],[-73.633378,45.448415,0],[-73.633199,45.448494,0],[-73.63306,45.448575,0],[-73.632923,45.448655,0],[-73.63279,45.448706,0],[-73.632621,45.448725,0],[-73.632448,45.448774,0],[-73.632284,45.448763,0],[-73.632078,45.448749,0],[-73.63191,45.448768,0],[-73.631731,45.448846,0],[-73.631593,45.448927,0],[-73.631536,45.449013,0],[-73.631434,45.449126,0],[-73.631411,45.449273,0],[-73.631392,45.449391,0],[-73.631368,45.449539,0],[-73.631271,45.449622,0],[-73.631096,45.449671,0],[-73.63093,45.449661,0],[-73.630769,45.449621,0],[-73.630562,45.449609,0],[-73.630388,45.449657,0],[-73.63029,45.449741,0],[-73.630225,45.44986,0],[-73.630203,45.44998,0],[-73.630227,45.4501,0],[-73.63025,45.45022,0],[-73.630233,45.450338,0],[-73.630172,45.450454,0],[-73.630025,45.450567,0],[-73.62985,45.450616,0],[-73.629672,45.450666,0],[-73.62949,45.450746,0],[-73.62935,45.450828,0],[-73.62921,45.45091,0],[-73.629064,45.451023,0],[-73.628928,45.451076,0],[-73.628782,45.451188,0],[-73.628678,45.451303,0],[-73.628578,45.451388,0],[-73.628515,45.451507,0],[-73.628487,45.451659,0],[-73.628465,45.45178,0],[-73.628438,45.451932,0],[-73.628374,45.452052,0],[-73.628352,45.452174,0],[-73.628287,45.452293,0],[-73.628181,45.45241,0],[-73.628075,45.452528,0],[-73.628058,45.45262,0],[-73.628078,45.452745,0],[-73.628098,45.45287,0],[-73.628118,45.452995,0],[-73.628138,45.45312,0],[-73.628159,45.453245,0],[-73.628137,45.453394,0],[-73.627954,45.453448,0],[-73.627811,45.453532,0],[-73.627632,45.453583,0],[-73.62749,45.453667,0],[-73.627354,45.453719,0],[-73.62717,45.4538,0],[-73.627107,45.45392,0],[-73.626998,45.45404,0],[-73.626966,45.454198,0],[-73.626938,45.454353,0],[-73.626873,45.454474,0],[-73.626845,45.45463,0],[-73.626822,45.454754,0],[-73.626756,45.454876,0],[-73.626691,45.454998,0],[-73.626686,45.455029,0],[-73.626557,45.455246,0],[-73.626408,45.455287,0],[-73.626257,45.455327,0],[-73.626142,45.455395,0],[-73.625991,45.45546,0],[-73.625876,45.455528,0],[-73.625726,45.455593,0],[-73.625577,45.455633,0],[-73.625463,45.455701,0],[-73.625347,45.455769,0],[-73.625229,45.455837,0],[-73.625152,45.455932,0],[-73.625109,45.456029,0],[-73.625025,45.45615,0],[-73.624978,45.456248,0],[-73.624935,45.456346,0],[-73.624929,45.456446,0],[-73.624881,45.456569,0],[-73.624835,45.456668,0],[-73.624789,45.456767,0],[-73.624669,45.456861,0],[-73.624588,45.456932,0],[-73.624471,45.457027,0],[-73.624356,45.457095,0],[-73.624276,45.457192,0],[-73.624157,45.457287,0],[-73.624074,45.457384,0],[-73.623991,45.457481,0],[-73.623944,45.457581,0],[-73.623898,45.457681,0],[-73.62385,45.457781,0],[-73.623802,45.457881,0],[-73.623718,45.457953,0],[-73.623597,45.458022,0],[-73.623445,45.458064,0],[-73.623293,45.458106,0],[-73.623143,45.458122,0],[-73.623025,45.458192,0],[-73.62291,45.458237,0],[-73.622792,45.458307,0],[-73.622671,45.458403,0],[-73.622623,45.458504,0],[-73.622538,45.458602,0],[-73.62242,45.458672,0],[-73.62227,45.458689,0],[-73.622121,45.458732,0],[-73.621972,45.458749,0],[-73.621818,45.458792,0],[-73.621663,45.458834,0],[-73.621509,45.458876,0],[-73.621424,45.458976,0],[-73.621341,45.459049,0],[-73.621255,45.459148,0],[-73.621205,45.459249,0],[-73.621192,45.459352,0],[-73.621143,45.459454,0],[-73.621132,45.459558,0],[-73.621083,45.459661,0],[-73.620997,45.459761,0],[-73.620914,45.459835,0],[-73.620756,45.459904,0],[-73.620602,45.459947,0],[-73.620448,45.459991,0],[-73.620295,45.460036,0],[-73.620143,45.460054,0],[-73.619987,45.460097,0],[-73.619835,45.460114,0],[-73.619676,45.460184,0],[-73.619554,45.460257,0],[-73.61947,45.460331,0],[-73.619383,45.460432,0],[-73.619295,45.460534,0],[-73.619136,45.460604,0],[-73.61902,45.460623,0],[-73.618829,45.460638,0],[-73.618675,45.460655,0],[-73.618521,45.460672,0],[-73.618368,45.460689,0],[-73.618217,45.460679,0],[-73.61807,45.460643,0],[-73.617923,45.460605,0],[-73.617776,45.460568,0],[-73.617629,45.460531,0],[-73.617479,45.460521,0],[-73.617328,45.460512,0],[-73.617171,45.460555,0],[-73.617018,45.460572,0],[-73.616891,45.460672,0],[-73.616805,45.460747,0],[-73.616716,45.460848,0],[-73.616701,45.460956,0],[-73.616686,45.461066,0],[-73.616672,45.461174,0],[-73.616654,45.461308,0],[-73.616639,45.461416,0],[-73.616515,45.461488,0],[-73.616357,45.461531,0],[-73.616194,45.461604,0],[-73.616035,45.461648,0],[-73.615945,45.461751,0],[-73.615858,45.461828,0],[-73.615767,45.461931,0],[-73.615714,45.462036,0],[-73.615589,45.46211,0],[-73.615467,45.462157,0],[-73.615304,45.462228,0],[-73.615251,45.462334,0],[-73.615198,45.46244,0],[-73.615141,45.462573,0],[-73.615053,45.46265,0],[-73.614889,45.462722,0],[-73.614763,45.462796,0],[-73.614638,45.462869,0],[-73.614473,45.462942,0],[-73.614346,45.463017,0],[-73.61422,45.463092,0],[-73.614097,45.46314,0],[-73.613931,45.463213,0],[-73.613728,45.463283,0],[-73.613567,45.463327,0],[-73.613406,45.463373,0],[-73.613277,45.463449,0],[-73.613154,45.463497,0],[-73.612988,45.46357,0],[-73.61286,45.463646,0],[-73.61273,45.463723,0],[-73.612563,45.463798,0],[-73.612437,45.463871,0],[-73.612269,45.463945,0],[-73.612101,45.464019,0],[-73.611939,45.464064,0],[-73.611777,45.464109,0],[-73.611653,45.464157,0],[-73.611526,45.46423,0],[-73.611393,45.464334,0],[-73.611266,45.464385,0],[-73.611135,45.464463,0],[-73.611005,45.464539,0],[-73.610836,45.464614,0],[-73.61071,45.464664,0],[-73.610584,45.464712,0],[-73.610416,45.464786,0],[-73.610287,45.464862,0],[-73.610116,45.464938,0],[-73.609985,45.465016,0],[-73.609854,45.465117,0],[-73.609726,45.465167,0],[-73.609556,45.465242,0],[-73.609389,45.465291,0],[-73.609219,45.465365,0],[-73.609049,45.46544,0],[-73.608885,45.465485,0],[-73.60872,45.465531,0],[-73.608594,45.46558,0],[-73.608456,45.465687,0],[-73.608293,45.465731,0],[-73.608155,45.465838,0],[-73.608026,45.465889,0],[-73.607853,45.465965,0],[-73.607695,45.466005,0],[-73.607523,45.466081,0],[-73.607378,45.466169,0],[-73.607241,45.466275,0],[-73.607074,45.466322,0],[-73.606942,45.4664,0],[-73.606809,45.466478,0],[-73.60668,45.466528,0],[-73.606546,45.466607,0],[-73.606372,45.466684,0],[-73.606203,45.466732,0],[-73.606029,45.466809,0],[-73.605861,45.466857,0],[-73.605761,45.466762,0],[-73.605628,45.46666,0],[-73.605525,45.466568,0],[-73.605377,45.466503,0],[-73.605235,45.466408,0],[-73.605135,45.466315,0],[-73.605034,45.466222,0],[-73.604934,45.466128,0],[-73.604839,45.466032,0],[-73.604782,45.465939,0],[-73.604641,45.465845,0],[-73.604539,45.465754,0],[-73.604388,45.465691,0],[-73.604287,45.465599,0],[-73.60419,45.465505,0],[-73.604049,45.465436,0],[-73.603951,45.465343,0],[-73.603804,45.465253,0],[-73.60367,45.465156,0],[-73.603571,45.46509,0],[-73.603481,45.464968,0],[-73.60337,45.464882,0],[-73.603315,45.464765,0],[-73.603192,45.464786,0],[-73.603023,45.464833,0],[-73.602889,45.46491,0],[-73.602755,45.464987,0],[-73.602581,45.465062,0],[-73.602453,45.465111,0],[-73.602279,45.465185,0],[-73.602118,45.465203,0],[-73.601982,45.465281,0],[-73.601847,45.465358,0],[-73.60175,45.465439,0],[-73.601575,45.465514,0],[-73.601439,45.465592,0],[-73.601341,45.465673,0],[-73.601204,45.465751,0],[-73.601035,45.465798,0],[-73.600859,45.465874,0],[-73.600684,45.465949,0],[-73.600622,45.46606,0],[-73.600523,45.466141,0],[-73.600386,45.466219,0],[-73.600211,45.466295,0],[-73.600072,45.466374,0],[-73.599943,45.466423,0],[-73.599581,45.466488,0],[-73.599458,45.466534,0],[-73.599291,45.466605,0],[-73.599129,45.466649,0],[-73.598974,45.466666,0],[-73.59882,45.466683,0],[-73.598664,45.4667,0],[-73.598508,45.466717,0],[-73.598352,45.466734,0],[-73.598191,45.466777,0],[-73.59804,45.466768,0],[-73.597883,45.466785,0],[-73.597735,45.4668,0],[-73.597578,45.466842,0],[-73.597422,45.466859,0],[-73.597256,45.466879,0],[-73.597096,45.466923,0],[-73.596943,45.466939,0],[-73.596774,45.46701,0],[-73.596617,45.467027,0],[-73.596461,45.467044,0],[-73.596304,45.467061,0],[-73.596147,45.467078,0],[-73.595985,45.467123,0],[-73.595822,45.467167,0],[-73.595659,45.467211,0],[-73.595501,45.467228,0],[-73.595338,45.467273,0],[-73.595176,45.467317,0],[-73.595013,45.467361,0],[-73.594856,45.467378,0],[-73.594699,45.467395,0],[-73.594541,45.467412,0],[-73.594382,45.46743,0],[-73.594224,45.467447,0],[-73.59406,45.467492,0],[-73.593896,45.467536,0],[-73.593732,45.46758,0],[-73.593569,45.467625,0],[-73.593405,45.467669,0],[-73.593241,45.467713,0],[-73.59311,45.467787,0],[-73.592948,45.467831,0],[-73.592872,45.467826,0]],\"type\":\"LineString\"},\"id\":\"9d979c899d1e33c3368ce5c9cddbdb92\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre Canalized 1907\",\"type\":\"historical\",\"year\":1907,\"theme\":\"steps\",\"color\":6,\"id\":518,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.623044,45.45743,0],[-73.622981,45.457556,0],[-73.622829,45.45764,0],[-73.622677,45.457725,0],[-73.622616,45.45785,0],[-73.622554,45.457976,0],[-73.622493,45.458101,0],[-73.62243,45.458227,0],[-73.622319,45.458349,0],[-73.622166,45.458434,0],[-73.621969,45.458452,0],[-73.621724,45.458434,0],[-73.621536,45.458418,0],[-73.621303,45.458397,0],[-73.621192,45.458519,0],[-73.621127,45.458646,0],[-73.621112,45.458775,0],[-73.621052,45.458901,0],[-73.620993,45.459026,0],[-73.620886,45.459148,0],[-73.620731,45.459266,0],[-73.620531,45.459347,0],[-73.620333,45.459396,0],[-73.620182,45.45945,0],[-73.619987,45.459467,0],[-73.619786,45.459548,0],[-73.619674,45.459671,0],[-73.619563,45.459794,0],[-73.619457,45.459884,0],[-73.619349,45.460006,0],[-73.619289,45.460133,0],[-73.619178,45.460256,0],[-73.619023,45.460342,0],[-73.618834,45.460326,0],[-73.618633,45.460376,0],[-73.61843,45.460458,0],[-73.618279,45.460512,0],[-73.618087,45.460432,0],[-73.617956,45.460321,0],[-73.617771,45.460272,0],[-73.617577,45.460289,0],[-73.617384,45.460305,0],[-73.617199,45.460288,0],[-73.617008,45.460304,0],[-73.616812,45.460353,0],[-73.616784,45.460487,0],[-73.616763,45.460651,0],[-73.616741,45.460815,0],[-73.616725,45.460947,0],[-73.616719,45.461109,0],[-73.616564,45.461195,0],[-73.616313,45.461209,0],[-73.616154,45.461329,0],[-73.616094,45.461456,0],[-73.616029,45.461584,0],[-73.615922,45.461675,0],[-73.61572,45.461758,0],[-73.615527,45.461742,0],[-73.615325,45.461792,0],[-73.615125,45.461842,0],[-73.615207,45.461982,0],[-73.615187,45.462115,0],[-73.615162,45.462281,0],[-73.615143,45.462414,0],[-73.614985,45.462501,0],[-73.614827,45.462589,0],[-73.614717,45.46268,0],[-73.614508,45.462764,0],[-73.61435,45.462851,0],[-73.614145,45.462935,0],[-73.613944,45.462985,0],[-73.613787,45.463073,0],[-73.613627,45.463194,0],[-73.613469,45.463281,0],[-73.613267,45.463332,0],[-73.613111,45.463419,0],[-73.61296,45.463474,0],[-73.612758,45.463557,0],[-73.612556,45.463641,0],[-73.6124,45.463729,0],[-73.612201,45.463779,0],[-73.612042,45.463867,0],[-73.611833,45.463951,0],[-73.61167,45.464039,0],[-73.611511,45.464128,0],[-73.611356,45.464216,0],[-73.61116,45.464267,0],[-73.61096,45.464317,0],[-73.610754,45.464401,0],[-73.610545,45.464486,0],[-73.610386,45.464574,0],[-73.610184,45.464625,0],[-73.610026,45.464713,0],[-73.609823,45.464764,0],[-73.609663,45.464852,0],[-73.609503,45.464941,0],[-73.609295,45.465025,0],[-73.609179,45.465151,0],[-73.608969,45.465236,0],[-73.608761,45.46532,0],[-73.608601,45.465409,0],[-73.608394,45.465494,0],[-73.608236,45.465583,0],[-73.608081,45.465638,0],[-73.607921,45.465727,0],[-73.607706,45.46581,0],[-73.60754,45.465897,0],[-73.607389,45.465988,0],[-73.607189,45.466076,0],[-73.607028,45.466165,0],[-73.60682,45.46625,0],[-73.606659,45.466339,0],[-73.606456,45.46639,0],[-73.606296,45.46648,0],[-73.606135,45.466569,0],[-73.605927,45.466655,0],[-73.605764,45.466743,0],[-73.605569,45.466726,0],[-73.605441,45.466612,0],[-73.605314,45.466498,0],[-73.605133,45.466414,0],[-73.605005,45.4663,0],[-73.604871,45.466219,0],[-73.604695,45.466101,0],[-73.604567,45.465987,0],[-73.604439,45.465873,0],[-73.604312,45.465759,0],[-73.604114,45.465777,0],[-73.603916,45.465794,0],[-73.603711,45.465845,0],[-73.603507,45.465896,0],[-73.603303,45.465947,0],[-73.603104,45.465963,0],[-73.602899,45.466013,0],[-73.602696,45.466065,0],[-73.602493,45.466117,0],[-73.602285,45.466204,0],[-73.60208,45.466255,0],[-73.601876,45.466306,0],[-73.601671,45.466357,0],[-73.601467,45.466408,0],[-73.601262,45.466459,0],[-73.601064,45.466477,0],[-73.600859,45.466528,0],[-73.60066,45.466545,0],[-73.600455,45.466596,0],[-73.60025,45.466647,0],[-73.600046,45.466699,0],[-73.599841,45.466751,0],[-73.599636,45.466803,0],[-73.599437,45.466821,0],[-73.599231,45.466873,0],[-73.599026,45.466924,0],[-73.598821,45.466975,0],[-73.598622,45.466992,0],[-73.598416,45.467043,0],[-73.598217,45.467061,0],[-73.598012,45.467111,0],[-73.5978,45.467197,0],[-73.597595,45.467249,0],[-73.597389,45.4673,0],[-73.597189,45.467319,0],[-73.596983,45.46737,0],[-73.596777,45.467422,0],[-73.596571,45.467474,0],[-73.596365,45.467525,0],[-73.596207,45.467581,0],[-73.596001,45.467633,0],[-73.595739,45.467715,0],[-73.595533,45.467767,0],[-73.595327,45.467819,0],[-73.595126,45.467837,0],[-73.594925,45.467854,0],[-73.594725,45.467872,0],[-73.594525,45.467889,0],[-73.594318,45.467941,0],[-73.594105,45.468027,0],[-73.593899,45.468079,0],[-73.593692,45.46813,0],[-73.593485,45.468182,0],[-73.593278,45.468234,0],[-73.593071,45.468286,0],[-73.592912,45.468342,0],[-73.592747,45.468432,0],[-73.592533,45.468519,0],[-73.592326,45.468571,0],[-73.592118,45.468623,0],[-73.591958,45.46868,0],[-73.591743,45.468766,0],[-73.591529,45.468853,0],[-73.591369,45.46891,0],[-73.591155,45.468996,0],[-73.590946,45.469049,0],[-73.590731,45.469136,0],[-73.590571,45.469192,0],[-73.590356,45.469279,0],[-73.590196,45.469336,0],[-73.58998,45.469423,0],[-73.589765,45.46951,0],[-73.589604,45.469567,0],[-73.589389,45.469653,0],[-73.58923,45.46971,0],[-73.589015,45.469796,0],[-73.588805,45.469849,0],[-73.588595,45.469902,0],[-73.588386,45.469955,0],[-73.588177,45.470007,0],[-73.588052,45.470137,0],[-73.58785,45.470155,0],[-73.587682,45.470246,0],[-73.587522,45.470303,0],[-73.587355,45.470394,0],[-73.587187,45.470486,0],[-73.586971,45.470573,0],[-73.586756,45.470659,0],[-73.58654,45.470746,0],[-73.586338,45.470764,0],[-73.586121,45.470851,0],[-73.585953,45.470943,0],[-73.585787,45.471034,0],[-73.585619,45.471126,0],[-73.585443,45.471253,0],[-73.585239,45.471271,0],[-73.585035,45.471289,0],[-73.584825,45.471342,0],[-73.584607,45.47143,0],[-73.584397,45.471483,0],[-73.584186,45.471536,0],[-73.584017,45.471628,0],[-73.583801,45.471714,0],[-73.583635,45.471805,0],[-73.583418,45.471893,0],[-73.583207,45.471945,0],[-73.58299,45.472033,0],[-73.582779,45.472086,0],[-73.582569,45.472139,0],[-73.5824,45.472231,0],[-73.582223,45.472358,0],[-73.582053,45.472451,0],[-73.58189,45.472508,0],[-73.581694,45.472491,0],[-73.58144,45.472474,0],[-73.581248,45.472423,0],[-73.581059,45.472371,0],[-73.580878,45.472284,0],[-73.580694,45.47223,0],[-73.58051,45.472176,0],[-73.580308,45.472193,0],[-73.580138,45.472285,0],[-73.580106,45.472426,0],[-73.579976,45.472558,0],[-73.579846,45.472691,0],[-73.579635,45.472744,0],[-73.579464,45.472837,0],[-73.5793,45.472894,0],[-73.579171,45.473027,0],[-73.579042,45.473159,0],[-73.578913,45.473291,0],[-73.578784,45.473423,0],[-73.578655,45.473555,0],[-73.578576,45.473692,0],[-73.578441,45.473826,0],[-73.578261,45.473956,0],[-73.578085,45.474051,0],[-73.57796,45.47415,0],[-73.57783,45.474282,0],[-73.577751,45.474419,0],[-73.57762,45.474553,0],[-73.577591,45.474693,0],[-73.577511,45.47483,0],[-73.577475,45.474974,0],[-73.57739,45.475114,0],[-73.577309,45.475252,0],[-73.577231,45.475389,0],[-73.577155,45.475524,0],[-73.576975,45.475654,0],[-73.576843,45.475788,0],[-73.57666,45.475919,0],[-73.576475,45.476051,0],[-73.576263,45.476104,0],[-73.576048,45.476159,0],[-73.575873,45.476254,0],[-73.575697,45.47635,0],[-73.575522,45.476446,0],[-73.575346,45.476541,0],[-73.575139,45.47656,0],[-73.574874,45.476579,0],[-73.574695,45.476488,0],[-73.574524,45.476362,0],[-73.574393,45.476277,0],[-73.574217,45.476153,0],[-73.574027,45.4761,0],[-73.57384,45.476046,0],[-73.573651,45.475992,0],[-73.573462,45.475939,0],[-73.573248,45.475992,0],[-73.573034,45.476046,0],[-73.572821,45.4761,0],[-73.572648,45.476193,0],[-73.572473,45.476288,0],[-73.572299,45.476383,0],[-73.572092,45.476401,0],[-73.571892,45.476385,0],[-73.571692,45.476368,0],[-73.571297,45.476152,0],[-73.571227,45.476002,0],[-73.571306,45.475864,0],[-73.571476,45.475769,0],[-73.571548,45.475667,0],[-73.571677,45.475533,0],[-73.571752,45.475398,0],[-73.571617,45.475316,0],[-73.571409,45.475367,0],[-73.571242,45.475459,0],[-73.570996,45.475438,0],[-73.57087,45.47532,0],[-73.570732,45.475241,0],[-73.570543,45.475158,0],[-73.570347,45.475141,0],[-73.570157,45.475089,0],[-73.569864,45.475062,0],[-73.56967,45.475043,0],[-73.569479,45.474992,0],[-73.569291,45.47494,0],[-73.569104,45.474886,0],[-73.568913,45.474835,0],[-73.568722,45.474784,0],[-73.568538,45.474698,0],[-73.568348,45.474647,0],[-73.56816,45.474594,0],[-73.567979,45.474507,0],[-73.567798,45.474419,0],[-73.56761,45.474367,0],[-73.567429,45.474279,0],[-73.567241,45.474227,0],[-73.567054,45.474174,0],[-73.566858,45.474157,0],[-73.566668,45.474106,0],[-73.566431,45.474049,0],[-73.566382,45.474045,0]],\"type\":\"LineString\"},\"id\":\"bb2651a580a6ad5061147cbb3f999404\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1825\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"color\":2,\"id\":539,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.575635,45.493999,0],[-73.575516,45.494031,0],[-73.575374,45.494017,0],[-73.575294,45.493966,0],[-73.575182,45.493932,0],[-73.575073,45.493878,0],[-73.574964,45.493824,0],[-73.574855,45.493769,0],[-73.574743,45.493736,0],[-73.574634,45.493705,0],[-73.574496,45.493671,0],[-73.574356,45.493658,0],[-73.574212,45.493643,0],[-73.574093,45.493651,0],[-73.573972,45.493682,0],[-73.573877,45.493737,0],[-73.573779,45.493814,0],[-73.573683,45.493869,0],[-73.573588,45.493924,0],[-73.573469,45.493933,0],[-73.573347,45.493964,0],[-73.573228,45.493973,0],[-73.57311,45.493982,0],[-73.572968,45.49397,0],[-73.572824,45.493979,0],[-73.572708,45.493991,0],[-73.572588,45.494024,0],[-73.572474,45.494014,0],[-73.572329,45.494023,0],[-73.572213,45.494035,0],[-73.5721,45.494027,0],[-73.571971,45.494051,0],[-73.571818,45.494028,0],[-73.57174,45.493953,0],[-73.571691,45.493882,0],[-73.571619,45.493789,0],[-73.571515,45.493739,0],[-73.571415,45.493694,0],[-73.571312,45.493645,0],[-73.571203,45.493615,0],[-73.571092,45.493584,0],[-73.570985,45.493531,0],[-73.570874,45.493474,0],[-73.570757,45.493461,0],[-73.570615,45.493424,0],[-73.570537,45.493374,0],[-73.57043,45.493322,0],[-73.570323,45.49327,0],[-73.570215,45.493217,0],[-73.570112,45.493143,0],[-73.570008,45.493068,0],[-73.569906,45.492996,0],[-73.56983,45.492923,0],[-73.569758,45.49283,0],[-73.569687,45.492738,0],[-73.569613,45.492666,0],[-73.5696,45.49258,0],[-73.569587,45.492494,0],[-73.569513,45.492423,0],[-73.569405,45.49237,0],[-73.569297,45.492316,0],[-73.569218,45.492266,0],[-73.569109,45.49221,0],[-73.568997,45.492151,0],[-73.568891,45.492074,0],[-73.568814,45.492001,0],[-73.568738,45.491928,0],[-73.568634,45.491852,0],[-73.568555,45.491802,0],[-73.568452,45.491728,0],[-73.568313,45.491694,0],[-73.568262,45.491645,0]],\"type\":\"LineString\"},\"id\":\"c48e510b97eb880b041d89a87f7d2d73\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Pierre 1834\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1834,\"color\":3,\"id\":536,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.592069,45.48122,0],[-73.592064,45.480422,0],[-73.592061,45.479782,0],[-73.592278,45.47915,0],[-73.592266,45.478522,0],[-73.592483,45.477889,0],[-73.592479,45.477089,0],[-73.593164,45.476596,0],[-73.594078,45.47626,0],[-73.594981,45.475937,0],[-73.595655,45.475457,0],[-73.596329,45.474977,0],[-73.597002,45.474338,0],[-73.597676,45.473698,0],[-73.598125,45.473057,0],[-73.5988,45.472415,0],[-73.599477,45.47193,0],[-73.600154,45.471445,0],[-73.60037,45.470816,0],[-73.600592,45.470338,0]],\"type\":\"LineString\"},\"id\":\"d628e904d740b7ad5ae3258581b95272\"},{\"type\":\"Feature\",\"properties\":{\"name\":\"St-Martin 1825\",\"type\":\"historical\",\"theme\":\"steps\",\"year\":1825,\"color\":1,\"id\":401,\"tag\":\"Dis/re-appearing Waters, Speculation\"},\"geometry\":{\"coordinates\":[[-73.550391,45.522103,0],[-73.550397,45.522046,0],[-73.550403,45.521989,0],[-73.550411,45.521922,0],[-73.550415,45.521876,0],[-73.550421,45.521832,0],[-73.550442,45.521788,0],[-73.550447,45.521744,0],[-73.550469,45.5217,0],[-73.550488,45.521654,0],[-73.550493,45.521609,0],[-73.550515,45.521553,0],[-73.550489,45.521507,0],[-73.550462,45.521461,0],[-73.550401,45.521436,0],[-73.550357,45.5214,0],[-73.550295,45.521386,0],[-73.550234,45.52136,0],[-73.550172,45.521346,0],[-73.55011,45.521333,0],[-73.550049,45.521307,0],[-73.549986,45.521293,0],[-73.54991,45.521255,0],[-73.549847,45.52124,0],[-73.549785,45.521214,0],[-73.549723,45.521199,0],[-73.549661,45.521173,0],[-73.5496,45.521136,0],[-73.549557,45.521088,0],[-73.54953,45.521041,0],[-73.549503,45.520994,0],[-73.549458,45.520969,0],[-73.549381,45.520931,0],[-73.54937,45.520885,0],[-73.549375,45.52084,0],[-73.549412,45.520796,0],[-73.549479,45.520778,0],[-73.549546,45.520759,0],[-73.549598,45.520728,0],[-73.549587,45.520682,0],[-73.549559,45.520647,0],[-73.549516,45.520599,0],[-73.549471,45.520563,0],[-73.54946,45.520517,0],[-73.549449,45.520471,0],[-73.549454,45.520426,0],[-73.549461,45.52037,0],[-73.549467,45.520314,0],[-73.549503,45.520282,0],[-73.549556,45.520239,0],[-73.549592,45.520207,0],[-73.549629,45.520164,0],[-73.549682,45.520121,0],[-73.549719,45.520078,0],[-73.549756,45.520035,0],[-73.549793,45.519992,0],[-73.549814,45.519948,0],[-73.549836,45.519904,0],[-73.549889,45.519862,0],[-73.549954,45.519854,0],[-73.55002,45.519847,0],[-73.550085,45.519839,0],[-73.550152,45.51982,0],[-73.550204,45.519789,0],[-73.550194,45.519744,0],[-73.550199,45.519699,0],[-73.550203,45.519642,0],[-73.550208,45.519597,0],[-73.550214,45.51954,0],[-73.550235,45.519496,0],[-73.550272,45.519453,0],[-73.550323,45.519433,0],[-73.550375,45.519402,0],[-73.550426,45.519371,0],[-73.550463,45.519328,0],[-73.550469,45.519283,0],[-73.550442,45.519237,0],[-73.550447,45.519192,0],[-73.550452,45.519147,0],[-73.550489,45.519104,0],[-73.550557,45.519074,0],[-73.550609,45.519043,0],[-73.550646,45.519,0],[-73.550651,45.518955,0],[-73.550657,45.518899,0],[-73.550663,45.518854,0],[-73.550684,45.51881,0],[-73.55069,45.518754,0],[-73.550711,45.51871,0],[-73.550749,45.518667,0],[-73.55077,45.518623,0],[-73.550807,45.51858,0],[-73.55086,45.518537,0],[-73.550912,45.518506,0],[-73.550934,45.518462,0],[-73.550939,45.518417,0],[-73.550896,45.51837,0],[-73.550852,45.518333,0],[-73.550807,45.518297,0],[-73.550763,45.518261,0],[-73.550752,45.518215,0],[-73.550725,45.518168,0],[-73.550713,45.518134,0],[-73.550702,45.518088,0],[-73.550724,45.518044,0],[-73.550746,45.517989,0],[-73.550783,45.517945,0],[-73.55082,45.517902,0],[-73.550858,45.517859,0],[-73.550863,45.517814,0],[-73.550852,45.517768,0],[-73.550792,45.517731,0],[-73.550746,45.517706,0],[-73.550703,45.517658,0],[-73.550708,45.517613,0],[-73.550715,45.517557,0],[-73.550736,45.517513,0],[-73.550788,45.517482,0],[-73.550855,45.517452,0],[-73.550907,45.517421,0],[-73.550944,45.517378,0],[-73.550996,45.517347,0],[-73.551033,45.517304,0],[-73.551055,45.51726,0],[-73.551061,45.517204,0],[-73.551034,45.517157,0],[-73.550989,45.517121,0],[-73.550945,45.517084,0],[-73.550885,45.517047,0],[-73.550856,45.517012,0],[-73.550813,45.516964,0],[-73.550786,45.516918,0],[-73.550761,45.51686,0],[-73.550779,45.516838,0],[-73.5508,45.516794,0],[-73.550822,45.51675,0],[-73.550875,45.516708,0],[-73.550927,45.516677,0],[-73.550948,45.516632,0],[-73.55097,45.516588,0],[-73.550992,45.516543,0],[-73.551014,45.516499,0],[-73.55102,45.516453,0],[-73.551026,45.516407,0],[-73.551048,45.516363,0],[-73.551057,45.516304,0],[-73.551066,45.516246,0],[-73.551108,45.516179,0],[-73.551116,45.516121,0],[-73.551138,45.516076,0],[-73.551175,45.516033,0],[-73.551196,45.515989,0],[-73.551199,45.515946,0],[-73.551199,45.515894,0],[-73.551219,45.515851,0],[-73.55124,45.515808,0],[-73.551245,45.515752,0],[-73.551266,45.515708,0],[-73.55127,45.515664,0],[-73.551291,45.51562,0],[-73.551313,45.515576,0],[-73.551351,45.515532,0],[-73.551372,45.515487,0],[-73.55141,45.515444,0],[-73.551446,45.515412,0],[-73.551483,45.515369,0],[-73.551537,45.515326,0],[-73.551589,45.515305,0],[-73.551643,45.515272,0],[-73.551696,45.51524,0],[-73.55175,45.515197,0],[-73.551803,45.515165,0],[-73.551856,45.515133,0],[-73.551926,45.515112,0],[-73.551978,45.51509,0],[-73.552049,45.515058,0],[-73.552119,45.515026,0],[-73.552171,45.514995,0],[-73.552209,45.514951,0],[-73.552231,45.514906,0],[-73.552237,45.51486,0],[-73.552223,45.514817,0],[-73.552207,45.514775,0],[-73.552211,45.514721,0],[-73.552213,45.514669,0],[-73.552249,45.514627,0],[-73.552383,45.514599,0],[-73.55245,45.514583,0],[-73.552517,45.514567,0],[-73.552582,45.514556,0],[-73.552649,45.514535,0],[-73.552716,45.514514,0],[-73.552784,45.514481,0],[-73.552821,45.514438,0],[-73.552873,45.514404,0],[-73.55291,45.514358,0],[-73.55293,45.514313,0],[-73.552967,45.514268,0],[-73.552973,45.51421,0],[-73.552978,45.514164,0],[-73.552951,45.514117,0],[-73.552923,45.514083,0],[-73.552912,45.514038,0],[-73.552903,45.513981,0],[-73.552909,45.513925,0],[-73.552914,45.513879,0],[-73.552935,45.513835,0],[-73.552972,45.513791,0],[-73.553009,45.513748,0],[-73.553046,45.513705,0],[-73.553083,45.513661,0],[-73.55312,45.513617,0],[-73.553157,45.513574,0],[-73.553165,45.513506,0],[-73.553201,45.513474,0],[-73.553222,45.513431,0],[-73.553243,45.513387,0],[-73.553265,45.513344,0],[-73.55327,45.513299,0],[-73.553275,45.513255,0],[-73.55328,45.513211,0],[-73.553302,45.513167,0],[-73.553308,45.513112,0],[-73.553344,45.51308,0],[-73.553366,45.513036,0],[-73.553403,45.512993,0],[-73.553424,45.512948,0],[-73.553477,45.512905,0],[-73.553544,45.512874,0],[-73.553596,45.512843,0],[-73.553633,45.512799,0],[-73.55367,45.512756,0],[-73.553723,45.512714,0],[-73.55376,45.512671,0],[-73.553797,45.512628,0],[-73.553834,45.512585,0],[-73.553856,45.512541,0],[-73.553894,45.512486,0],[-73.553915,45.512442,0],[-73.553936,45.512398,0],[-73.553957,45.512354,0],[-73.553978,45.51231,0],[-73.554016,45.512267,0],[-73.554053,45.512224,0],[-73.55409,45.512181,0],[-73.554127,45.512138,0],[-73.554164,45.512095,0],[-73.554201,45.512051,0],[-73.554236,45.512019,0],[-73.554273,45.511976,0],[-73.554296,45.511921,0],[-73.554317,45.511877,0],[-73.554338,45.511833,0],[-73.554391,45.51179,0],[-73.554427,45.511747,0],[-73.554464,45.511704,0],[-73.554501,45.511661,0],[-73.554538,45.511617,0],[-73.554591,45.511575,0],[-73.554642,45.511544,0],[-73.554662,45.5115,0],[-73.5547,45.511445,0],[-73.554722,45.511401,0],[-73.554759,45.511358,0],[-73.554781,45.511315,0],[-73.55482,45.511272,0],[-73.554858,45.511229,0],[-73.55491,45.511198,0],[-73.554963,45.511156,0],[-73.554984,45.511112,0],[-73.555004,45.511079,0],[-73.555011,45.511023,0],[-73.555032,45.510979,0],[-73.555052,45.510946,0],[-73.555059,45.510879,0],[-73.555065,45.510834,0],[-73.555086,45.51079,0],[-73.555093,45.510734,0],[-73.555114,45.51069,0],[-73.555119,45.510645,0],[-73.555125,45.510589,0],[-73.555131,45.510544,0],[-73.555137,45.510488,0],[-73.555143,45.510443,0],[-73.555149,45.510386,0],[-73.555171,45.510342,0],[-73.555176,45.510297,0],[-73.555197,45.510253,0],[-73.555203,45.510208,0],[-73.55521,45.510141,0],[-73.555232,45.510097,0],[-73.555239,45.51004,0],[-73.555261,45.509996,0],[-73.555265,45.509962,0],[-73.555257,45.509905,0],[-73.555246,45.509859,0],[-73.555253,45.509802,0],[-73.555259,45.509746,0],[-73.555296,45.509703,0],[-73.555316,45.50967,0],[-73.555338,45.509615,0],[-73.555374,45.509572,0],[-73.555394,45.509528,0],[-73.555431,45.509485,0],[-73.555453,45.50943,0],[-73.55549,45.509387,0],[-73.555528,45.509344,0],[-73.555565,45.5093,0],[-73.555602,45.509257,0],[-73.555623,45.509213,0],[-73.55566,45.50917,0],[-73.555697,45.509127,0],[-73.555735,45.509073,0],[-73.555772,45.509029,0],[-73.555809,45.508986,0],[-73.555845,45.508955,0],[-73.555883,45.5089,0],[-73.55592,45.508857,0],[-73.555942,45.508813,0],[-73.555963,45.508768,0],[-73.555985,45.508724,0],[-73.556007,45.508669,0],[-73.556026,45.508647,0],[-73.556064,45.508593,0],[-73.556084,45.508549,0],[-73.556121,45.508506,0],[-73.55614,45.508463,0],[-73.556176,45.508421,0],[-73.556213,45.508378,0],[-73.556249,45.508336,0],[-73.556287,45.508282,0],[-73.556308,45.508238,0],[-73.556345,45.508184,0],[-73.556365,45.508141,0],[-73.556402,45.508098,0],[-73.556439,45.508055,0],[-73.556479,45.507989,0],[-73.556517,45.507935,0],[-73.556556,45.50788,0],[-73.556595,45.507825,0],[-73.556633,45.507782,0],[-73.556654,45.507738,0],[-73.556692,45.507694,0],[-73.55673,45.50764,0],[-73.556768,45.507596,0],[-73.556789,45.507552,0],[-73.556811,45.507508,0],[-73.556849,45.507453,0],[-73.556871,45.507409,0],[-73.556909,45.507365,0],[-73.556948,45.507321,0],[-73.556985,45.507288,0],[-73.557025,45.507233,0],[-73.557065,45.507177,0],[-73.557103,45.507133,0],[-73.557125,45.507088,0],[-73.557164,45.507044,0],[-73.557186,45.506999,0],[-73.557191,45.506964,0],[-73.557226,45.506834,0],[-73.557278,45.506802,0],[-73.557331,45.506759,0],[-73.557384,45.506715,0],[-73.557421,45.506672,0],[-73.557442,45.506627,0],[-73.557479,45.506584,0],[-73.557516,45.50654,0],[-73.557552,45.506509,0],[-73.557589,45.506465,0],[-73.557626,45.506422,0],[-73.557663,45.506379,0],[-73.5577,45.506335,0],[-73.557738,45.506292,0],[-73.557759,45.506248,0],[-73.557796,45.506205,0],[-73.557834,45.50615,0],[-73.55787,45.506118,0],[-73.557924,45.506065,0],[-73.557961,45.506021,0],[-73.557998,45.505978,0],[-73.558035,45.505935,0],[-73.558073,45.505892,0],[-73.55811,45.505848,0],[-73.558147,45.505805,0],[-73.558183,45.505761,0],[-73.558204,45.505717,0],[-73.558258,45.505663,0],[-73.558278,45.50563,0],[-73.558315,45.505575,0],[-73.558336,45.505531,0],[-73.558373,45.505487,0],[-73.558393,45.505443,0],[-73.558446,45.5054,0],[-73.558499,45.505358,0],[-73.558536,45.505314,0],[-73.558572,45.505271,0],[-73.558593,45.505227,0],[-73.55863,45.505184,0],[-73.558683,45.505141,0],[-73.55872,45.505098,0],[-73.558758,45.505044,0],[-73.558794,45.505,0],[-73.558815,45.504956,0],[-73.558852,45.504913,0],[-73.558887,45.504881,0],[-73.558924,45.504838,0],[-73.558977,45.504796,0],[-73.559015,45.504742,0],[-73.559052,45.504698,0],[-73.559088,45.504667,0],[-73.559127,45.504612,0],[-73.559164,45.504569,0],[-73.559201,45.504526,0],[-73.559254,45.504484,0],[-73.559275,45.50444,0],[-73.559313,45.504386,0],[-73.559351,45.504343,0],[-73.559388,45.5043,0],[-73.559425,45.504257,0],[-73.559462,45.504214,0],[-73.559515,45.504172,0],[-73.559535,45.504139,0],[-73.559589,45.504086,0],[-73.559626,45.504043,0],[-73.559663,45.504,0],[-73.5597,45.503957,0],[-73.559738,45.503914,0],[-73.559776,45.503859,0],[-73.559815,45.503805,0],[-73.559836,45.503761,0],[-73.559873,45.503718,0],[-73.55991,45.503675,0],[-73.559931,45.503631,0],[-73.559967,45.503599,0],[-73.560005,45.503545,0],[-73.560043,45.503502,0],[-73.56008,45.503459,0],[-73.560117,45.503416,0],[-73.560156,45.503362,0],[-73.560191,45.50333,0],[-73.560246,45.503276,0],[-73.560283,45.503233,0],[-73.560305,45.503189,0],[-73.560359,45.503136,0],[-73.560414,45.503083,0],[-73.560451,45.503039,0],[-73.560488,45.502996,0],[-73.560526,45.502953,0],[-73.560563,45.50291,0],[-73.560585,45.502866,0],[-73.560622,45.502823,0],[-73.560659,45.50278,0],[-73.560681,45.502736,0],[-73.560734,45.502694,0],[-73.560773,45.502639,0],[-73.56081,45.502596,0],[-73.560848,45.502553,0],[-73.560887,45.502498,0],[-73.560924,45.502455,0],[-73.560962,45.502412,0],[-73.560999,45.502369,0],[-73.561037,45.502326,0],[-73.561109,45.502262,0],[-73.561131,45.502218,0],[-73.561168,45.502174,0],[-73.56119,45.50213,0],[-73.561245,45.502077,0],[-73.561283,45.502033,0],[-73.561337,45.501991,0],[-73.561375,45.501947,0],[-73.561429,45.501905,0],[-73.561466,45.501873,0],[-73.561506,45.501818,0],[-73.56156,45.501775,0],[-73.561582,45.501731,0],[-73.561605,45.501686,0],[-73.561643,45.501643,0],[-73.561665,45.501598,0],[-73.561703,45.501555,0],[-73.561725,45.50151,0],[-73.561745,45.501478,0],[-73.561798,45.501424,0],[-73.561803,45.50138,0],[-73.561839,45.501337,0],[-73.561892,45.501283,0],[-73.561944,45.501253,0],[-73.56198,45.50121,0],[-73.562017,45.501166,0],[-73.562038,45.501122,0],[-73.562075,45.501079,0],[-73.562111,45.501036,0],[-73.562147,45.501005,0],[-73.562185,45.50095,0],[-73.562222,45.500907,0],[-73.56226,45.500853,0],[-73.562295,45.500821,0],[-73.562332,45.500778,0],[-73.562368,45.500735,0],[-73.562405,45.500692,0],[-73.562442,45.500649,0],[-73.562478,45.500606,0],[-73.562515,45.500563,0],[-73.562553,45.500509,0],[-73.56259,45.500466,0],[-73.562628,45.500423,0],[-73.562663,45.500391,0],[-73.562701,45.500348,0],[-73.562755,45.500294,0],[-73.562793,45.500251,0],[-73.562814,45.500206,0],[-73.562851,45.500163,0],[-73.562873,45.500119,0],[-73.562895,45.500075,0],[-73.5629,45.500029,0],[-73.562922,45.499985,0],[-73.562895,45.499938,0],[-73.562852,45.499901,0],[-73.562841,45.499855,0],[-73.562831,45.499809,0],[-73.562837,45.499763,0],[-73.562828,45.499717,0],[-73.562834,45.499671,0],[-73.562859,45.49957,0],[-73.562897,45.499527,0],[-73.562936,45.499484,0],[-73.562974,45.499441,0],[-73.563029,45.499399,0],[-73.563068,45.499356,0],[-73.563105,45.499313,0],[-73.56306,45.499288,0],[-73.563016,45.499251,0],[-73.562955,45.499225,0],[-73.562911,45.499189,0],[-73.562849,45.499163,0],[-73.562788,45.499137,0],[-73.562742,45.499111,0],[-73.562682,45.499074,0],[-73.562621,45.499048,0],[-73.562577,45.499012,0],[-73.562514,45.498997,0],[-73.562453,45.498971,0],[-73.562407,45.498946,0],[-73.562347,45.498908,0],[-73.562285,45.498882,0],[-73.562222,45.498856,0],[-73.562177,45.498819,0],[-73.562116,45.498782,0],[-73.562069,45.498768,0],[-73.562005,45.498753,0],[-73.561962,45.498705,0],[-73.56195,45.49867,0],[-73.561971,45.498626,0],[-73.562008,45.498583,0],[-73.561998,45.498537,0],[-73.561971,45.49849,0],[-73.561908,45.498475,0],[-73.561845,45.49846,0],[-73.561802,45.498413,0],[-73.561775,45.498366,0],[-73.561796,45.498322,0],[-73.561832,45.498278,0],[-73.561838,45.498222,0],[-73.561858,45.498178,0],[-73.561895,45.498134,0],[-73.561932,45.498091,0],[-73.561951,45.498047,0],[-73.561972,45.498003,0],[-73.561993,45.497959,0],[-73.562032,45.497904,0],[-73.562054,45.49786,0],[-73.562061,45.497804,0],[-73.562099,45.49776,0],[-73.562121,45.497716,0],[-73.562158,45.497673,0],[-73.56218,45.497629,0],[-73.562217,45.497585,0],[-73.562239,45.497541,0],[-73.562277,45.497498,0],[-73.562298,45.497453,0],[-73.56232,45.497409,0],[-73.562341,45.497365,0],[-73.562363,45.497321,0],[-73.562399,45.497278,0],[-73.562435,45.497246,0],[-73.562422,45.497211,0],[-73.562378,45.497163,0],[-73.562333,45.497116,0],[-73.562322,45.49707,0],[-73.562328,45.497025,0],[-73.562333,45.49698,0],[-73.562325,45.496911,0],[-73.562298,45.496864,0],[-73.56227,45.496829,0],[-73.562244,45.496771,0],[-73.562232,45.496725,0],[-73.562238,45.496668,0],[-73.562259,45.496624,0],[-73.56228,45.49658,0],[-73.562302,45.496525,0],[-73.562307,45.49648,0],[-73.562314,45.496424,0],[-73.562319,45.496378,0],[-73.562341,45.496323,0],[-73.562362,45.496279,0],[-73.562399,45.496236,0],[-73.56245,45.496205,0],[-73.562466,45.496206,0]],\"type\":\"LineString\"},\"id\":\"ed3de43825081bc84d7b7ef248dfbfe5\"}],\"type\":\"FeatureCollection\"}");

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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
/* harmony import */ var _data_historical_river_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/historical-river.json */ "./src/data/historical-river.json");
var _data_historical_river_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/historical-river.json */ "./src/data/historical-river.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




 // import {select, geoTransform, geoPath} from 'd3';





var historicalRiverScale = chroma_js__WEBPACK_IMPORTED_MODULE_0___default.a.scale(['violet', 'indigo', 'blue', 'green']).domain([1, 7]);
var D3geoPath;
var svg;
var dataset;
var nodesPoint;
var nodesLine;
var nodesPoygon;
var currentNodeOver;

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
            D3geoTransform = Object(d3_geo__WEBPACK_IMPORTED_MODULE_2__["geoTransform"])({
              point: _map__WEBPACK_IMPORTED_MODULE_5__["default"].projectPoint
            });
            D3geoPath = Object(d3_geo__WEBPACK_IMPORTED_MODULE_2__["geoPath"])().projection(D3geoTransform); // Overlay d3 on the mapbox canvas

            svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(canvas).append('svg').attr('id', 'map-box-vis').attr('height', '100%');
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
            dataURL = "https://api.mapbox.com/datasets/v1/".concat(_config_config_json__WEBPACK_IMPORTED_MODULE_6__.mapbox.user, "/").concat(_config_config_json__WEBPACK_IMPORTED_MODULE_6__.map.dataset, "/features?access_token=").concat(_config_config_json__WEBPACK_IMPORTED_MODULE_6__.mapbox.token);
            _context2.next = 3;
            return fetch(dataURL);

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();

          case 6:
            data = _context2.sent;
            dataset = data.features;
            dataset = dataset.concat(_data_historical_river_json__WEBPACK_IMPORTED_MODULE_7__.features);
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
    var id, item;
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

            return _context5.abrupt("return", _config_config_json__WEBPACK_IMPORTED_MODULE_6__.map["default"].center);

          case 7:
            if (!(item.geometry.type === 'Point')) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", item.geometry.coordinates);

          case 9:
            if (!(item.geometry.type === 'LineString')) {
              _context5.next = 11;
              break;
            }

            return _context5.abrupt("return", item.geometry.coordinates[0]);

          case 11:
            if (!(item.geometry.type === 'Polygon')) {
              _context5.next = 13;
              break;
            }

            return _context5.abrupt("return", item.geometry.coordinates[0][0]);

          case 13:
            return _context5.abrupt("return", false);

          case 14:
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
  var theme = _content__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrentTheme();
  var colors = {
    river: '#0071bc'
  };

  if (theme.slug === 'environment') {
    colors.fill = '#FFDE17';
    colors.stroke = '#8B5E3C';
    colors.text = '#333';
  } else if (theme.slug === 'water') {
    colors.fill = '#fefefe';
    colors.stroke = '#652e00';
    colors.text = '#333';
  } else if (theme.slug === 'steps') {
    colors.fill = '#F15A29';
    colors.stroke = '#F15A29';
    colors.text = '#FFF';
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
    return _map__WEBPACK_IMPORTED_MODULE_5__["default"].project(d.geometry.coordinates).x;
  }).attr('cy', function (d) {
    return _map__WEBPACK_IMPORTED_MODULE_5__["default"].project(d.geometry.coordinates).y;
  }).attr('r', 0).style('cursor', 'pointer').style('stroke-width', 2).style('stroke', chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.stroke).hex()).style('fill', chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.fill).alpha(0.7).hex()).style('opacity', 0).on('mouseover', function (d) {
    return nodesOver(d);
  }).on('mouseout', function () {
    return nodesOut();
  }).on('click', function (d) {
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_4__["default"].showPost(d.properties);
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
  }).attr('d', D3geoPath).style('cursor', 'pointer').style('stroke-width', 2).style('stroke', function (d) {
    if (d.properties.name === 'Saint-Pierre Speculative River') return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.river).hex();
    if (d.properties.type === 'historical') return historicalRiverScale(d.properties.color).alpha(.8).hex();
    return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.stroke).hex();
  }).style('fill', 'none').style('opacity', 0).on('mouseover', function (d) {
    return nodesOver(d);
  }).on('mouseout', function () {
    return nodesOut();
  }).on('click', function (d) {
    var theme = _content__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrentTheme();
    if (d.properties.name === 'Saint-Pierre Speculative River' && theme.slug !== 'steps') return;
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_4__["default"].showPost(d.properties);
  });
  nodesLine.transition().duration(transitionTime).delay(function (d, i) {
    return delayTime * i;
  }).style('opacity', 1);
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
  }).attr('d', D3geoPath).style('cursor', 'pointer').style('stroke-width', 2).style('stroke', chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.stroke).hex()).style('fill', chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.fill).alpha(0.7).hex()).style('opacity', 0).on('mouseover', function (d) {
    return nodesOver(d);
  }).on('mouseout', function () {
    return nodesOut();
  }).on('click', function (d) {
    resetNodesState(d);
    _content__WEBPACK_IMPORTED_MODULE_4__["default"].showPost(d.properties);
  });
  nodesPoygon.transition().duration(transitionTime).delay(function (d, i) {
    return delayTime * i;
  }).style('opacity', 1);
};

var nodesUpdate = function nodesUpdate() {
  if (nodesPoint) {
    nodesPoint.attr('cx', function (d) {
      return _map__WEBPACK_IMPORTED_MODULE_5__["default"].project(d.geometry.coordinates).x;
    }).attr('cy', function (d) {
      return _map__WEBPACK_IMPORTED_MODULE_5__["default"].project(d.geometry.coordinates).y;
    });
  }

  if (nodesLine) nodesLine.attr('d', D3geoPath);
  if (nodesPoygon) nodesPoygon.attr('d', D3geoPath);
};

var callTooltip = function callTooltip(d) {
  var colours = getColours();
  var position;
  if (d.geometry.type === 'Point') position = d.geometry.coordinates;
  if (d.geometry.type === 'LineString') position = d.geometry.coordinates[0];
  if (d.geometry.type === 'Polygon') position = d.geometry.coordinates[0][0];
  var posX = _map__WEBPACK_IMPORTED_MODULE_5__["default"].project(position).x;
  var posY = _map__WEBPACK_IMPORTED_MODULE_5__["default"].project(position).y;
  var margins = 10;
  var yOffset = 25;
  var tooltip = svg.append('g').attr('class', 'tooltip').attr('transform', "translate(".concat(posX, ",").concat(posY, ")"));
  var rect = tooltip.append('rect').style('stroke', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.stroke).hex();
  }).style('fill', function () {
    return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.fill).alpha(0.7).hex();
  });
  tooltip.append('text').attr('y', -yOffset).style('text-anchor', 'middle').style('fill', chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(colours.text).hex()).text(d.properties.name);
  var tooltipSize = tooltip.node().getBBox();
  var ttPosition = {
    x: -tooltipSize.width / 2 - margins,
    y: -tooltipSize.height - yOffset,
    width: tooltipSize.width + 2 * margins,
    height: tooltipSize.height + margins
  };
  rect.attr('x', ttPosition.x).attr('y', ttPosition.y).attr('width', ttPosition.width).attr('height', ttPosition.height);
};

var nodesOver = function nodesOver(current) {
  callTooltip(current);

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
  svg.select('.tooltip').remove();

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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _geodata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geodata */ "./src/geodata.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // import mapboxgl from 'mapbox-gl';



var mapBoxConfig = {
  container: 'map',
  style: "mapbox://styles/".concat(_config_config_json__WEBPACK_IMPORTED_MODULE_2__.mapbox.user, "/").concat(_config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].styleID),
  center: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].center,
  //center in Montreal
  zoom: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].zoom,
  pitch: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].pitch,
  minZoom: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].minZoom,
  maxZoom: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].maxZoom,
  maxBounds: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].maxBounds,
  interactive: true
};
var mapboxgl;
var mapbox;

var init =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref) {
    var mapID, location;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mapID = _ref.mapID, location = _ref.location;
            return _context2.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(resolve) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        //map container set on WP > Beaver
                        Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])('#app').select(':first-child').append('div').attr('id', 'map');
                        if (location === '404') setUnknowLocation(); //404: center the map anywhere in the globe

                        if (mapID) mapBoxConfig.style = "mapbox://styles/".concat(_config_config_json__WEBPACK_IMPORTED_MODULE_2__.mapbox.user, "/").concat(mapID); //if deeplink: set map style

                        _context.next = 5;
                        return loadMapBoxGL();

                      case 5:
                        // mapboxgl.accessToken = config.mapbox.token;
                        mapboxgl["default"].accessToken = _config_config_json__WEBPACK_IMPORTED_MODULE_2__.mapbox.token;
                        mapbox = new mapboxgl.Map(mapBoxConfig);
                        mapbox.on('load', function () {
                          _geodata__WEBPACK_IMPORTED_MODULE_1__["default"].init(mapbox.getCanvasContainer());
                          mapbox.on('viewreset', update);
                          mapbox.on('move', update);
                          mapbox.on('moveend', update);
                          if (location === '404') flyFromUnknowLocation();
                          resolve();
                        });

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function init(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var loadMapBoxGL =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (mapboxgl) {
              _context3.next = 4;
              break;
            }

            _context3.next = 3;
            return __webpack_require__.e(/*! import() | mapbox-gl */ "vendors~mapbox-gl").then(__webpack_require__.t.bind(null, /*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js", 7));

          case 3:
            mapboxgl = _context3.sent;

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function loadMapBoxGL() {
    return _ref4.apply(this, arguments);
  };
}(); //check if map is loaded


var isMapboxLoaded = function isMapboxLoaded() {
  if (mapbox) return mapbox.isStyleLoaded();
  return false;
}; //change map style


var changeMap = function changeMap(_ref5) {
  var mapID = _ref5.mapID;
  return mapbox.setStyle("mapbox://styles/".concat(_config_config_json__WEBPACK_IMPORTED_MODULE_2__.mapbox.user, "/").concat(mapID));
}; // Project GeoJSON coordinate to the map's current state


var project = function project(d) {
  return mapbox.project(new mapboxgl.LngLat(+d[0], +d[1]));
}; // Project GeoJSON coordinate to the map's current state


var projectPoint = function projectPoint(lon, lat) {
  var point = mapbox.project(new mapboxgl.LngLat(lon, lat));
  this.stream.point(point.x, point.y);
}; //update


var update = function update() {
  return _geodata__WEBPACK_IMPORTED_MODULE_1__["default"].nodesUpdate();
};

var setUnknowLocation =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var lat, lon;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //anywhere in the globe
            lat = Math.floor(Math.random() * 180) - 90;
            lon = Math.floor(Math.random() * 360) - 180;
            mapBoxConfig.zoom = 5;
            mapBoxConfig.center = [lon, lat];
            mapBoxConfig.maxBounds = null;

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function setUnknowLocation() {
    return _ref6.apply(this, arguments);
  };
}();

var flyFromUnknowLocation =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            mapbox.flyTo({
              center: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].center,
              zoom: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].zoom,
              speed: 1,
              curve: 1,
              minZoom: 3,
              easing: function easing(t) {
                return t;
              }
            });
            mapbox.on('moveend', function () {
              if (mapbox.getMaxBounds() === null) mapbox.setMaxBounds(_config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].maxBounds);
            });

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function flyFromUnknowLocation() {
    return _ref7.apply(this, arguments);
  };
}();

var flyTo = function flyTo(coordinates) {
  if (mapbox) {
    mapbox.flyTo({
      center: coordinates,
      zoom: 17,
      speed: 1,
      curve: 1,
      easing: function easing(t) {
        return t;
      }
    });
  }
};

var flyToOrigin = function flyToOrigin() {
  if (mapbox) {
    mapbox.flyTo({
      center: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].center,
      zoom: _config_config_json__WEBPACK_IMPORTED_MODULE_2__.map["default"].zoom + 0.2,
      speed: 1.2,
      curve: 1,
      easing: function easing(t) {
        return t;
      }
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jpb2hhemFyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb25lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2hlbHAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VhLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYWtlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYXBjaGF0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rob3VnaHQtYnViYmxlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RzdW5hbWkuc3ZnIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyLXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhZ3MuanMiXSwibmFtZXMiOlsiYnJvd3NlciIsIm5hdmlnYXRpb24iLCJob3N0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJyb290UGF0aCIsInBhdGhuYW1lIiwiZGVlcFBhdGgiLCJzcGxpdCIsIm5vZGUiLCJsZW5ndGgiLCJzZWFyY2giLCJ1cmwiLCJVUkwiLCJocmVmIiwic2x1ZyIsInNlYXJjaFBhcmFtcyIsImdldCIsImxvYWREZWVwTGluayIsImdvSG9tZSIsImNoYW5nZUJyb3dzZXJIaXN0b3J5IiwidGhlbWUiLCJjb250ZW50IiwiZ2V0VGhlbWVCeVNsdWciLCJzaG93UGFnZSIsInNob3dQb3N0IiwicG9zdCIsImluaXRIb21lIiwidGl0bGUiLCJwYWdlVGl0bGUiLCJkb2N1bWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ3cCIsIldQQVBJIiwiZW5kcG9pbnQiLCJjb25maWciLCJ3b3JkcHJlc3MiLCJjdXJyZW50Tm9kZSIsImFjdGl2ZVBhbmVsIiwiY29udGVudEhUTUwiLCJzZXRDdXJyZW50Tm9kZSIsImRhdGEiLCJzZXRBY3RpdmVQYW5lbCIsInBhbmVsIiwiaWQiLCJzZXRUaGVtZSIsInVwZGF0ZU1hcCIsImxvYWRQYWdlIiwicGFnZURhdGEiLCJtYXAiLCJmbHlUb09yaWdpbiIsInVwZGF0ZVBhZ2UiLCJzaG93UGFuZWwiLCJyZW5kZXJlZCIsInBhZ2VzIiwiZW1iZWQiLCJoaWRlUGFuZWwiLCJzaG93U3Bpbm5lciIsImxvYWRQb3N0IiwicG9zdERhdGEiLCJoaWRlU3Bpbm5lciIsInBvc3RDYXRlZ29yaWVzIiwiX2VtYmVkZGVkIiwicG9zdFRhZ3MiLCJwb3N0VGhlbWUiLCJnZXRQb3N0VGhlbWUiLCJjb25zb2xlIiwibG9nIiwiaXNOZXciLCJnZW9kYXRhIiwiZ2V0Tm9kZUNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZXMiLCJmbHlUbyIsInVwZGF0ZVBvc3QiLCJmaW5kIiwiY2F0IiwidGhlbWVQb3N0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicG9zdHMiLCJjbG9zZVBhbmVsIiwicmVzZXROb2Rlc1N0YXRlIiwicmVxdWVzdGVkVGhlbWVTbHVnIiwicmVxdWVzdGVkVGhlbWUiLCJjaGFuZ2VTdGF0ZSIsInN0YXRlIiwiZ2V0Q3VycmVudFRoZW1lIiwidGhlbWVzIiwibmV3U3RhdGUiLCJoaWRlVG9wTWVudSIsInNob3dIb21lIiwiaGlkZUhvbWUiLCJzaG93VG9wTWVudSIsImlzTWFwYm94TG9hZGVkIiwiaW5pdCIsImNoYW5nZU1hcCIsImRyYXdOb2RlcyIsInRhZ1NlYXJjaCIsInRhZyIsImRyYXdOb2RlQnlUYWciLCJ1cGRhdGVIZWFkaW5nIiwibmFtZSIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJjb25maWdNYWluTWVudSIsIm9uIiwiY29uZmlnVG9wTWVudSIsInN0eWxlIiwiVHdlZW5NYXgiLCJ0byIsInkiLCJvblN0YXJ0IiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJzZWxlY3RBbGwiLCJzaG93SG9tZUJHIiwiaGlkZUhlYWRpbmciLCJvbkNvbXBsZXRlIiwiaGlkZUhvbWVCRyIsInNob3dIZWFkaW5nIiwiYWxwaGEiLCJmcm9tVG8iLCJvdXRlckhlaWdodCIsInByb3BlcnR5IiwieCIsIlByb21pc2UiLCJyZXNvbHZlIiwib3V0ZXJXaWR0aCIsImhlYWRpbmciLCJlbXB0eSIsInRvTG93ZXJDYXNlIiwiaHRtbCIsImNhcHR1cmVMaW5rcyIsInRhZ3MiLCJ0YWdzRElWIiwidGFnc0hUTUwiLCJleGl0IiwicmVtb3ZlIiwiZW50ZXIiLCJpY29uIiwiZ2V0SWNvbiIsImQiLCJsaW5rIiwiZG9tYWluIiwiaG9zdG5hbWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGlzdG9yaWNhbFJpdmVyU2NhbGUiLCJjaHJvbWEiLCJzY2FsZSIsIkQzZ2VvUGF0aCIsInN2ZyIsImRhdGFzZXQiLCJub2Rlc1BvaW50Iiwibm9kZXNMaW5lIiwibm9kZXNQb3lnb24iLCJjdXJyZW50Tm9kZU92ZXIiLCJjYW52YXMiLCJEM2dlb1RyYW5zZm9ybSIsImdlb1RyYW5zZm9ybSIsInBvaW50IiwicHJvamVjdFBvaW50IiwiZ2VvUGF0aCIsInByb2plY3Rpb24iLCJsb2FkRGF0YSIsImRhdGFVUkwiLCJtYXBib3giLCJ1c2VyIiwidG9rZW4iLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImZlYXR1cmVzIiwiY29uY2F0IiwiaGlzdG9yaWNhbFJpdmVyIiwidGhlbWVOb2RlcyIsImdldFRoZW1lTm9kZXMiLCJwb2ludHMiLCJmaWx0ZXIiLCJuIiwiZ2VvbWV0cnkiLCJ0eXBlIiwibGluZXMiLCJwb2x5Z29ucyIsImRyYXdQb2x5Z2lucyIsImRyYXdMaW5lcyIsImRyYXdQb2ludHMiLCJ0YWdOb2RlcyIsImdldFRhZ05vZGVzIiwic2VsZWN0ZWROb2RlcyIsInByb3BlcnRpZXMiLCJub2RldGhlbWVzIiwidGhlbWVOb2RlIiwidCIsIm5vZGVUYWdzIiwidGFnTm9kZSIsIml0ZW0iLCJjZW50ZXIiLCJnZXRDb2xvdXJzIiwiY29sb3JzIiwicml2ZXIiLCJmaWxsIiwic3Ryb2tlIiwidGV4dCIsInRyYW5zaXRpb25UaW1lIiwiZGVsYXlUaW1lIiwiY29sb3VycyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInByb2plY3QiLCJoZXgiLCJub2Rlc092ZXIiLCJub2Rlc091dCIsImRlbGF5IiwiaSIsImNvbG9yIiwibm9kZXNVcGRhdGUiLCJjYWxsVG9vbHRpcCIsInBvc2l0aW9uIiwicG9zWCIsInBvc1kiLCJtYXJnaW5zIiwieU9mZnNldCIsInRvb2x0aXAiLCJyZWN0IiwidG9vbHRpcFNpemUiLCJnZXRCQm94IiwidHRQb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY3VycmVudCIsIm1hcEJveENvbmZpZyIsImNvbnRhaW5lciIsInN0eWxlSUQiLCJ6b29tIiwicGl0Y2giLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1heEJvdW5kcyIsImludGVyYWN0aXZlIiwibWFwYm94Z2wiLCJtYXBJRCIsInNldFVua25vd0xvY2F0aW9uIiwibG9hZE1hcEJveEdMIiwiYWNjZXNzVG9rZW4iLCJNYXAiLCJnZXRDYW52YXNDb250YWluZXIiLCJ1cGRhdGUiLCJmbHlGcm9tVW5rbm93TG9jYXRpb24iLCJpc1N0eWxlTG9hZGVkIiwic2V0U3R5bGUiLCJMbmdMYXQiLCJsb24iLCJsYXQiLCJzdHJlYW0iLCJzcGVlZCIsImN1cnZlIiwiZWFzaW5nIiwiZ2V0TWF4Qm91bmRzIiwic2V0TWF4Qm91bmRzIiwiZ2hvc3QiLCJiZXlvbmRIdW1hbnMiLCJjb250YW1pbmF0aW9uIiwiZGlzcmVhcHBlYXJpbmdXYXRlcnMiLCJpbmZyYXN0cnVjdHVyZXMiLCJpbWFnaW5hcmllcyIsInNwZWN1bGF0aXZlIiwidW5ydWx5V2F0ZXJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7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Ozs7Ozs7Ozs7QUMvSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU00RixPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFZO0FBQUEsTUFBVmhJLElBQVUsUUFBVkEsSUFBVTtBQUVsQyxNQUFJQSxJQUFJLENBQUNzSCxXQUFMLE9BQXVCLFFBQTNCLEVBQXFDLE9BQU9rSSwyREFBUDtBQUNyQyxNQUFJeFAsSUFBSSxDQUFDc0gsV0FBTCxPQUF1QixlQUEzQixFQUE0QyxPQUFPbUksd0RBQVA7QUFDNUMsTUFBSXpQLElBQUksQ0FBQ3NILFdBQUwsT0FBdUIsZUFBM0IsRUFBNEMsT0FBT29JLDREQUFQO0FBQzVDLE1BQUkxUCxJQUFJLENBQUNzSCxXQUFMLE9BQXVCLHNCQUEzQixFQUFtRCxPQUFPcUksc0RBQVA7QUFDbkQsTUFBSTNQLElBQUksQ0FBQ3NILFdBQUwsT0FBdUIsZ0JBQTNCLEVBQTZDLE9BQU9zSSx1REFBUDtBQUM3QyxNQUFJNVAsSUFBSSxDQUFDc0gsV0FBTCxPQUF1QixhQUEzQixFQUEwQyxPQUFPdUksaUVBQVA7QUFDMUMsTUFBSTdQLElBQUksQ0FBQ3NILFdBQUwsT0FBdUIsYUFBM0IsRUFBMEMsT0FBT3dJLHVEQUFQO0FBQzFDLE1BQUk5UCxJQUFJLENBQUNzSCxXQUFMLE9BQXVCLGVBQTNCLEVBQTRDLE9BQU95SSwwREFBUDtBQUU1QyxDQVhNO0FBY1E7QUFDZC9ILFNBQU8sRUFBUEE7QUFEYyxDQUFmLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuYXBwLmJ1bmRsZS5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbmltcG9ydCBicm93c2VyIGZyb20gJy4vYnJvd3Nlci1yZXF1ZXN0JztcblxuYnJvd3Nlci5uYXZpZ2F0aW9uKCk7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJiaW9oYXphcmRcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMi4wNTEgMzIuMDUxXFxcIj48Zz48cGF0aCBkPVxcXCJNMjUuMjY3LDEzLjI0N2MtMC40MjUtMC4xMjItMC44NzgtMC4xMjktMS4zMjEtMC4xNDZjMC4xMjEtMC4zMTEsMy4zMjYtOC4yNTgtNS4xMzYtMTEuNDA4IGMtMC4wMDQsMC4wNzEtMC4wMSwwLjE0My0wLjAyMSwwLjIxMWM1LjQzOCwzLjI2OCwyLjkyMiw4LjUwMiwyLjcxNyw4LjczMWMtMS40OTktMS4xNTQtMy4zNzEtMS44NC01LjQwMy0xLjg0IGMtMi4wNjgsMC0zLjk3MiwwLjcxMS01LjQ4MywxLjkwNGMtMC4zNzItMC42MTUtMC42NjItMS4zMTUtMC44NDctMi4wODdjLTAuMTUtMS4zNTEtMC4wNTYtMi41NjUsMC41MzMtMy44MjEgYzAuNTgzLTEuMTQ0LDEuNTIyLTIuMTExLDIuNjQtMi43NDRjLTAuMDEzLTAuMDYyLTAuMDIzLTAuMTI1LTAuMDMxLTAuMTljLTEuMjQsMC41MDEtMi4zNjksMS4zNC0zLjM4MSwyLjQyMiBjLTAuNDQsMC42MTUtMy4wNzMsMy43ODItMS40MDgsOC42MTdjLTAuNDQ5LDAuMDE2LTAuODk1LDAuMDYzLTEuMzM1LDAuMTQ2Yy0xLjc1MSwwLjM3Mi00LjUzNCwxLjg3OC01Ljg0NSw0LjQ2NyBjLTAuNDM5LDAuNzQtMC42MTIsMS40OTYtMC44MTksMi4yMjZjLTAuMjEyLDEuNDY0LTAuMTY2LDIuODcsMC4yMTUsNC4xNTNjMC4wNTYtMC4wMzQsMC4xMTEtMC4wNjYsMC4xNjgtMC4wOTYgYy0wLjIwMS0xLjI2OS0wLjAzMi0yLjYwOCwwLjUtMy43NzRjMC42MTQtMS4yNDYsMS41MDQtMi4wNzUsMi42NTQtMi43OThjMS45MzctMC45MDgsMy41NjQtMC42NTYsMy42MzEtMC42NDUgYy0wLjA0MywwLjM1OC0wLjA2OCwwLjcyMy0wLjA2OCwxLjA5NmMwLDMuNTQ5LDIuMDk1LDYuNjE1LDUuMTEzLDguMDM1Yy0wLjAxNiwwLjA0My0wLjAzMSwwLjA4Ni0wLjA0NSwwLjEyNSBjLTAuMDU2LDAuMTAzLTIuODUsNC42NTEtOC4yNTIsMi42MTljLTAuMDQ4LDAuMDUxLTAuMDk5LDAuMS0wLjE1MSwwLjE0N2MwLjY2MywwLjUxLDYuMzAzLDQuMjksMTEuNDk3LTIuMDg2IGMwLjIzNSwwLjAyMSwwLjQ3MywwLjAzNCwwLjcxNCwwLjAzNGMwLjE0NSwwLDAuMjg5LTAuMDA2LDAuNDMzLTAuMDEyYzEuMDk3LDEuNTI1LDUuMyw2LjI0NCwxMS42MzMsMi4yNjggYy0wLjA1NC0wLjA0OS0wLjEwNC0wLjA5OC0wLjE1LTAuMTQ5Yy01LjY1MiwyLjExLTguMzEyLTIuNzc2LTguMzQyLTIuODZjMy4zNjEtMS41MjgsNS4zMDItNC41LDUuMzAyLTguMTIxIGMwLTAuMzEyLTAuMDE3LTAuNjE3LTAuMDQ3LTAuOTIyYzAuMDEyLTAuMDAyLDAuMDIxLTAuMDA0LDAuMDM1LTAuMDA4YzEuMDk5LTAuMDc0LDIuMjc1LDAuMTM5LDMuNDI5LDAuNjggYzEuMTUsMC43MjYsMi4wNCwxLjU1NiwyLjY1NCwyLjgwMWMwLjUzLDEuMTY3LDAuNywyLjUwNCwwLjQ5OSwzLjc3M2MwLjA1OCwwLjAyOSwwLjExMiwwLjA2LDAuMTY4LDAuMDk2IEMzMi4xNzgsMjIuNjQsMzMuMzMzLDE1LjU2MiwyNS4yNjcsMTMuMjQ3eiBNMTEuNTkzLDE5LjE5MmMtMC4wMDQtMC4wMDQtMC4wMS0wLjAxMi0wLjAxNS0wLjAxOGwwLjAxMiwwLjAxNEwxMS41OTMsMTkuMTkyeiBNMTMuODAzLDE3LjY3MWMwLTAuODM4LDAuNDQ4LTEuNTY1LDEuMTE4LTEuOTcxYzAuMzQ1LTAuMjA3LDAuNzQ4LTAuMzI5LDEuMTgtMC4zMjljMC40NSwwLDAuODcsMC4xMzMsMS4yMjQsMC4zNTQgYzAuNjQ2LDAuNDA4LDEuMDc1LDEuMTI1LDEuMDc1LDEuOTQ1YzAsMC45NDktMC41NzksMS43Ny0xLjQwNCwyLjExOWMtMC4yNzUsMC4xMTUtMC41NzgsMC4xOC0wLjg5NSwwLjE4IEMxNC44MzEsMTkuOTcxLDEzLjgwMywxOC45NCwxMy44MDMsMTcuNjcxeiBNMTYuMTAxLDExLjIwOWMxLjM3MywwLDIuNjQ2LDAuNDM0LDMuNjk0LDEuMTY3Yy0xLjE2NSwwLjgyNS00Ljc0MywyLjEyMy03LjQ5NiwwLjA3OCBDMTMuMzY3LDExLjY3MiwxNC42ODEsMTEuMjA5LDE2LjEwMSwxMS4yMDl6IE05LjY0MiwxNy42NzFjMC0wLjA5MiwwLjAwNC0wLjE4NSwwLjAwNi0wLjI3N2MwLjEwNywwLjA2MSwyLjk5OSwxLjYyMSwzLjIyMSw1Ljg2NSBDMTAuOTQyLDIyLjEzOSw5LjY0MiwyMC4wNTUsOS42NDIsMTcuNjcxeiBNMTkuMTg4LDIzLjM0M2MwLjAwMi0wLjEwOCwwLjIzOS00LjAxNiwzLjM2OS01LjgyNCBjMC4wMDEsMC4wNSwwLjAwNCwwLjEwMiwwLjAwNCwwLjE1MkMyMi41NjIsMjAuMTE0LDIxLjE5NiwyMi4yNDUsMTkuMTg4LDIzLjM0M3pcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcImNvbmVcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCI+PHBhdGggZD1cXFwibTEzLjUgNTZoMzdjMy4wMzMgMCA1LjUtMi40NjggNS41LTUuNXMtMi40NjctNS41LTUuNS01LjVoLTEuMDQ2bC0zLjc4Ny0xMS42NzVjLS4wMDQtLjAxNS0uMDEtLjAzLS4wMTQtLjA0NWwtMy4zNzMtMTAuNHYtLjAwMWwtMy40OC0xMC43MjljLS44MDUtMi40ODMtMy4wOTgtNC4xNS01LjcwOC00LjE1aC0yLjE4NWMtMi42MDkgMC00LjkwMyAxLjY2Ny01LjcwNyA0LjE0OWwtNi44NTQgMjEuMTMzYy0uMDA0LjAxNC0uMDEuMDI4LS4wMTQuMDQzbC0zLjc4NiAxMS42NzVoLTEuMDQ2Yy0zLjAzMyAwLTUuNSAyLjQ2OC01LjUgNS41czIuNDY3IDUuNSA1LjUgNS41em0xMS4zODEtMjkuODk5YzIuMTguNTg5IDQuNjAxLjg5OSA3LjExOS44OTlzNC45MzgtLjMxIDcuMTE5LS44OTlsMi4yMjggNi44NjljLTIuMzE4IDEuMjY2LTUuNzQyIDIuMDMtOS4zNDcgMi4wM3MtNy4wMjktLjc2NC05LjM0Ny0yLjAzem00LjEyNC0xMi43MThjLjI2OC0uODI3IDEuMDMzLTEuMzgzIDEuOTAzLTEuMzgzaDIuMTg1Yy44NyAwIDEuNjM0LjU1NiAxLjkwMiAxLjM4M2wyLjg4OCA4LjkwNWMtMS43OTQuNDYxLTMuODIuNzEyLTUuODgzLjcxMnMtNC4wODktLjI1MS01Ljg4My0uNzEyem0tNy42MDIgMjMuNDM5YzIuODY1IDEuMzgzIDYuNjI3IDIuMTc4IDEwLjU5NyAyLjE3OHM3LjczMi0uNzk1IDEwLjU5Ny0yLjE3OGwyLjY1MiA4LjE3OGgtMjYuNDk4em0tNy45MDMgMTIuMTc4aDM0LjQ5M2MuMDAyIDAgLjAwNC4wMDEuMDA2LjAwMXMuMDA0LS4wMDEuMDA2LS4wMDFoMi40OTVjLjgyNyAwIDEuNS42NzMgMS41IDEuNXMtLjY3MyAxLjUtMS41IDEuNWgtMzdjLS44MjcgMC0xLjUtLjY3My0xLjUtMS41cy42NzMtMS41IDEuNS0xLjV6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcImhlbHBcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIj48Zz48Zz48Zz48cGF0aCBkPVxcXCJNMjQ4LjE1OCwzNDMuMjJjLTE0LjYzOSwwLTI2LjQ5MSwxMi4yLTI2LjQ5MSwyNi44NGMwLDE0LjI5MSwxMS41MDMsMjYuODQsMjYuNDkxLDI2Ljg0IGMxNC45ODgsMCwyNi44NC0xMi41NDgsMjYuODQtMjYuODRDMjc0Ljk5OCwzNTUuNDIsMjYyLjc5OSwzNDMuMjIsMjQ4LjE1OCwzNDMuMjJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI1Mi42OSwxNDAuMDAyYy00Ny4wNTcsMC02OC42NjgsMjcuODg1LTY4LjY2OCw0Ni43MDhjMCwxMy41OTUsMTEuNTAyLDE5Ljg2OSwyMC45MTQsMTkuODY5IGMxOC44MjIsMCwxMS4xNTQtMjYuODQsNDYuNzA4LTI2Ljg0YzE3LjQyOSwwLDMxLjM3Miw3LjY2OSwzMS4zNzIsMjMuNzAzYzAsMTguODI0LTE5LjUyLDI5LjYyOS0zMS4wMjMsMzkuMzg5IGMtMTAuMTA4LDguNzE0LTIzLjM1NCwyMy4wMDYtMjMuMzU0LDUyLjk4M2MwLDE4LjEyNSw0Ljg3OSwyMy4zNTQsMTkuMTcxLDIzLjM1NGMxNy4wOCwwLDIwLjU2NS03LjY2OCwyMC41NjUtMTQuMjkxIGMwLTE4LjEyNiwwLjM1LTI4LjU4MywxOS41MjEtNDMuNTcxYzkuNDExLTcuMzIsMzkuMDQtMzEuMDIzLDM5LjA0LTYzLjc4OVMyOTcuMzA3LDE0MC4wMDIsMjUyLjY5LDE0MC4wMDJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI1NiwwQzExNC41MTYsMCwwLDExNC40OTcsMCwyNTZ2MjM2YzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDIzNmMxNDEuNDgzLDAsMjU2LTExNC40OTcsMjU2LTI1NiBDNTEyLDExNC41MTYsMzk3LjUwMywwLDI1NiwweiBNMjU2LDQ3Mkg0MFYyNTZjMC0xMTkuMzc3LDk2LjYwNy0yMTYsMjE2LTIxNmMxMTkuMzc3LDAsMjE2LDk2LjYwNywyMTYsMjE2IEM0NzIsMzc1LjM3NywzNzUuMzkzLDQ3MiwyNTYsNDcyelxcXCI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJzZWFcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIuMDA0IDUxMi4wMDRcXFwiPjxnPjxnPjxwYXRoIGQ9XFxcIk01MDMuMzI1LDE0MC45MzFjLTE0LjI5LDAtMjAuOTg5LTYuMTQyLTI5LjQ2OS0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODItNDEuMTk4LTE4LjQ4MiBzLTMxLjc1MSw5LjgxOS00MS4xOTksMTguNDgyYy04LjQ3OSw3Ljc3Ni0xNS4xNzcsMTMuOTE4LTI5LjQ2NywxMy45MThzLTIwLjk4OC02LjE0Mi0yOS40NjctMTMuOTE4IGMtOS40NDgtOC42NjMtMjAuMTU1LTE4LjQ4Mi00MS4xOTgtMTguNDgycy0zMS43NSw5LjgxOS00MS4xOTgsMTguNDgzYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE3LTI5LjQ2NSwxMy45MTcgYy0xNC4yODgsMC0yMC45ODUtNi4xNDItMjkuNDY0LTEzLjkxN2MtOS40NDctOC42NjMtMjAuMTU0LTE4LjQ4My00MS4xOTYtMTguNDgzYy0yMS4wNDIsMC0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MiBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTgtMjkuNDY1LDEzLjkxOHMtMjAuOTg3LTYuMTQyLTI5LjQ2Ni0xMy45MThjLTkuNDQ4LTguNjYyLTIwLjE1NS0xOC40ODItNDEuMTk3LTE4LjQ4MiBjLTQuNzk0LDAtOC42NzgsMy44ODYtOC42NzgsOC42NzhzMy44ODQsOC42NzgsOC42NzgsOC42NzhjMTQuMjg5LDAsMjAuOTg3LDYuMTQyLDI5LjQ2NSwxMy45MTcgYzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODMsNDEuMTk4LDE4LjQ4M2MyMS4wNDIsMCwzMS43NDktOS44MTksNDEuMTk3LTE4LjQ4MWM4LjQ3OC03Ljc3NiwxNS4xNzYtMTMuOTE4LDI5LjQ2NS0xMy45MTggYzE0LjI4OCwwLDIwLjk4NSw2LjE0MiwyOS40NjQsMTMuOTE3YzkuNDQ3LDguNjYzLDIwLjE1NCwxOC40ODMsNDEuMTk2LDE4LjQ4M3MzMS43NDktOS44MTgsNDEuMTk3LTE4LjQ4MSBjOC40NzktNy43NzYsMTUuMTc3LTEzLjkxOCwyOS40NjYtMTMuOTE4czIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE3YzkuNDQ4LDguNjYzLDIwLjE1NiwxOC40ODMsNDEuMTk4LDE4LjQ4MyBzMzEuNzUtOS44MTgsNDEuMTk4LTE4LjQ4MWM4LjQ4MS03Ljc3NiwxNS4xNzgtMTMuOTE4LDI5LjQ2OS0xMy45MThjMTQuMjksMCwyMC45ODksNi4xNDIsMjkuNDY5LDEzLjkxOCBjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4MSw0MS4xOTgsMTguNDgxYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzhDNTEyLjAwNCwxNDQuODE3LDUwOC4xMTksMTQwLjkzMSw1MDMuMzI1LDE0MC45MzF6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNNTAzLjMyMywyMjIuNjU5Yy0xNC4yOSwwLTIwLjk4OS02LjE0Mi0yOS40NjktMTMuOTE4Yy05LjQ0Ny04LjY2My0yMC4xNTUtMTguNDgyLTQxLjE5OC0xOC40ODIgcy0zMS43NTEsOS44MTktNDEuMTk5LDE4LjQ4MmMtOC40NzksNy43NzYtMTUuMTc3LDEzLjkxOC0yOS40NjcsMTMuOTE4cy0yMC45ODgtNi4xNDItMjkuNDY4LTEzLjkxOCBjLTkuNDQ3LTguNjYzLTIwLjE1My0xOC40ODItNDEuMTk3LTE4LjQ4MnMtMzEuNzUsOS44MTktNDEuMTk4LDE4LjQ4M2MtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxNy0yOS40NjUsMTMuOTE3IGMtMTQuMjg4LDAtMjAuOTg0LTYuMTQyLTI5LjQ2NC0xMy45MTdjLTEuMDgzLTAuOTkzLTIuMTY1LTEuOTg2LTMuMjYzLTIuOTY1Yy0zLjU3OC0zLjE5LTkuMDY0LTIuODczLTEyLjI1MywwLjcwMyBjLTMuMTg5LDMuNTc4LTIuODczLDkuMDY0LDAuNzA0LDEyLjI1M2MxLjAzNywwLjkyNCwyLjA1OSwxLjg2MiwzLjA4MSwyLjc5OWM5LjQ0Nyw4LjY2MiwyMC4xNTQsMTguNDgxLDQxLjE5NSwxOC40ODEgYzIxLjA0MiwwLDMxLjc0OS05LjgxOCw0MS4xOTctMTguNDgxYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOHMyMC45ODcsNi4xNDIsMjkuNDY2LDEzLjkxNyBjOS40NDgsOC42NjMsMjAuMTU2LDE4LjQ4Myw0MS4xOTgsMTguNDgzczMxLjc1LTkuODE4LDQxLjE5OC0xOC40ODFjOC40OC03Ljc3NiwxNS4xNzgtMTMuOTE4LDI5LjQ2OS0xMy45MTggYzE0LjI5LDAsMjAuOTg5LDYuMTQyLDI5LjQ2OSwxMy45MThjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4MSw0MS4xOTgsMTguNDgxYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzggQzUxMi4wMDEsMjI2LjU0NCw1MDguMTE2LDIyMi42NTksNTAzLjMyMywyMjIuNjU5elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTE2Mi4zNzYsMTkxLjU2MWMtMy44NjQtMC44NjMtOC4wMjctMS4zMDItMTIuMzcyLTEuMzAyYy0yMS4wNDIsMC0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MSBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTgtMjkuNDY1LDEzLjkxOHMtMjAuOTg3LTYuMTQyLTI5LjQ2Ni0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODEtNDEuMTk3LTE4LjQ4MSBjLTQuNzk0LDAtOC42NzgsMy44ODYtOC42NzgsOC42NzhzMy44ODQsOC42OCw4LjY3OCw4LjY4YzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjUsMTMuOTE3IGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgzLDQxLjE5OCwxOC40ODNjMjEuMDQyLDAsMzEuNzQ5LTkuODE5LDQxLjE5Ny0xOC40ODJjOC40NzgtNy43NzYsMTUuMTc2LTEzLjkxOCwyOS40NjUtMTMuOTE4IGMzLjExOCwwLDUuOTI3LDAuMjg5LDguNTg3LDAuODgzYzQuNjc0LDEuMDQ0LDkuMzE3LTEuODk5LDEwLjM2Mi02LjU3N1MxNjcuMDUzLDE5Mi42MDYsMTYyLjM3NiwxOTEuNTYxelxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTUwMy4zMjMsMzg2LjExNWMtMTQuMjksMC0yMC45ODktNi4xNDItMjkuNDY5LTEzLjkxOGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4MS00MS4xOTgtMTguNDgxIHMtMzEuNzUxLDkuODE5LTQxLjE5OSwxOC40ODFjLTguNDc5LDcuNzc2LTE1LjE3NywxMy45MTgtMjkuNDY3LDEzLjkxOHMtMjAuOTg4LTYuMTQyLTI5LjQ2OC0xMy45MTggYy05LjQ0Ny04LjY2My0yMC4xNTMtMTguNDgxLTQxLjE5Ny0xOC40ODFzLTMxLjc1LDkuODE5LTQxLjE5OCwxOC40ODNjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTctMjkuNDY1LDEzLjkxNyBjLTE0LjI4OCwwLTIwLjk4NS02LjE0Mi0yOS40NjQtMTMuOTE3Yy05LjQ0Ny04LjY2My0yMC4xNTQtMTguNDgzLTQxLjE5Ni0xOC40ODNzLTMxLjc0OSw5LjgxOS00MS4xOTcsMTguNDgxIGMtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxOC0yOS40NjUsMTMuOTE4Yy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4YzAsNC43OTMsMy44ODQsOC42NzgsOC42NzgsOC42NzggYzIxLjA0MiwwLDMxLjc0OS05LjgxOSw0MS4xOTctMTguNDgxYzguNDc4LTcuNzc2LDE1LjE3Ni0xMy45MTgsMjkuNDY1LTEzLjkxOGMxNC4yODgsMCwyMC45ODUsNi4xNDIsMjkuNDY0LDEzLjkxNyBjOS40NDcsOC42NjMsMjAuMTU0LDE4LjQ4Myw0MS4xOTYsMTguNDgzczMxLjc0OS05LjgxOCw0MS4xOTctMTguNDgxYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOCBzMjAuOTg3LDYuMTQyLDI5LjQ2NiwxMy45MThjOS40NDgsOC42NjIsMjAuMTU2LDE4LjQ4MSw0MS4xOTgsMTguNDgxczMxLjc1LTkuODE4LDQxLjE5OC0xOC40ODEgYzguNDgxLTcuNzc2LDE1LjE3OC0xMy45MTgsMjkuNDY5LTEzLjkxOGMxNC4yOSwwLDIwLjk4OSw2LjE0MiwyOS40NjksMTMuOTE4YzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODEsNDEuMTk4LDE4LjQ4MSBjNC43OTQsMCw4LjY3OC0zLjg4Niw4LjY3OC04LjY3OEM1MTIuMDAxLDM5MC4wMDEsNTA4LjExNiwzODYuMTE1LDUwMy4zMjMsMzg2LjExNXpcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk01OS4wMjgsMzc5LjkxN2MtMy4xNjItMi4yMjctNi4wNzEtNC44OTUtOS4xNTItNy43MTljLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODMtNDEuMTk3LTE4LjQ4MyBjLTQuNzk0LDAtOC42NzgsMy44ODYtOC42NzgsOC42NzhzMy44ODQsOC42NzgsOC42NzgsOC42NzhjMTQuMjg5LDAsMjAuOTg3LDYuMTQyLDI5LjQ2NiwxMy45MTggYzMuMzUsMy4wNzEsNi44MTIsNi4yNDYsMTAuODg4LDkuMTE3YzEuNTE5LDEuMDcsMy4yNjIsMS41ODQsNC45OSwxLjU4NGMyLjcyNywwLDUuNDE0LTEuMjgyLDcuMTA0LTMuNjgyIEM2My44ODYsMzg4LjA5LDYyLjk0NiwzODIuNjc3LDU5LjAyOCwzNzkuOTE3elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTUwMy4zMjMsMzA0LjM4N2MtMTQuMjksMC0yMC45ODktNi4xNDItMjkuNDY5LTEzLjkxOGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4MS00MS4xOTgtMTguNDgxIGMtMjEuMDQyLDAtMzEuNzQ5LDkuODE4LTQxLjE5OCwxOC40OGMtMy41MzMsMy4yMzktMy43NzEsOC43MjgtMC41MzEsMTIuMjYyYzMuMjM4LDMuNTMzLDguNzI3LDMuNzcsMTIuMjYyLDAuNTMxIGM4LjQ3OS03Ljc3NSwxNS4xNzgtMTMuOTE3LDI5LjQ2Ny0xMy45MTdjMTQuMjksMCwyMC45ODksNi4xNDIsMjkuNDY5LDEzLjkxOGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgxLDQxLjE5OCwxOC40ODEgYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzhDNTEyLjAwMSwzMDguMjcyLDUwOC4xMTYsMzA0LjM4Nyw1MDMuMzIzLDMwNC4zODd6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNMzgyLjEyOCwzMDkuNTE2Yy0xLjE5MS00LjY0Mi01LjkxNS03LjQzOS0xMC41NjUtNi4yNDhjLTIuOTM0LDAuNzUzLTYuMDY2LDEuMTItOS41NzMsMS4xMiBjLTE0LjI5LDAtMjAuOTg4LTYuMTQyLTI5LjQ2OC0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NC0xOC40ODItNDEuMTk3LTE4LjQ4MnMtMzEuNzUsOS44MTktNDEuMTk4LDE4LjQ4MyBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTctMjkuNDY1LDEzLjkxN2MtMTQuMjg4LDAtMjAuOTg1LTYuMTQyLTI5LjQ2NC0xMy45MThjLTkuNDQ3LTguNjYyLTIwLjE1NC0xOC40ODItNDEuMTk2LTE4LjQ4MiBjLTIxLjA0MiwwLTMxLjc0OSw5LjgxOS00MS4xOTcsMTguNDgyYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE4LTI5LjQ2NSwxMy45MThzLTIwLjk4Ny02LjE0Mi0yOS40NjYtMTMuOTE4IGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4Mi00MS4xOTctMTguNDgyYy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4czMuODg2LDguNjc3LDguNjgsOC42NzcgYzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjUsMTMuOTE3YzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODMsNDEuMTk4LDE4LjQ4M2MyMS4wNDIsMCwzMS43NDktOS44MTksNDEuMTk3LTE4LjQ4MiBjOC40NzgtNy43NzYsMTUuMTc2LTEzLjkxOCwyOS40NjUtMTMuOTE4YzE0LjI4OCwwLDIwLjk4NSw2LjE0MiwyOS40NjQsMTMuOTE4YzkuNDQ3LDguNjYyLDIwLjE1NCwxOC40ODEsNDEuMTk2LDE4LjQ4MSBzMzEuNzQ5LTkuODE4LDQxLjE5Ny0xOC40ODFjOC40NzktNy43NzYsMTUuMTc3LTEzLjkxOCwyOS40NjYtMTMuOTE4czIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE4IGM5LjQ0OCw4LjY2MiwyMC4xNTYsMTguNDgxLDQxLjE5OCwxOC40ODFjNC45MTMsMCw5LjU4Ny0wLjU2LDEzLjg5LTEuNjY0QzM4MC41MjMsMzE4Ljg4OCwzODMuMzE5LDMxNC4xNTcsMzgyLjEyOCwzMDkuNTE2elxcXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcInNuYWtlXFxcIiBjbGFzcz1cXFwidGFnLWljb25cXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIC00IDUxMi4wMDE2NCA1MTJcXFwiPjxwYXRoIGQ9XFxcIm00MDEuNzQyMTg4IDE1Mi42MzY3MTljMjAuNDgwNDY4IDEuMDE1NjI1IDQyLjEzNjcxOC03LjY0NDUzMSA1OC4xNDQ1MzEtMjMuNjU2MjUgMjIuNzQ2MDkzLTIyLjc0MjE4OCAxNy4wOTM3NS02My4yODkwNjMgMTMuMDE5NTMxLTgxLjU4OTg0NGwyNi4yMzA0NjktMjYuMjMwNDY5LTIxLjE2NDA2My0yMS4xNjAxNTYtMjYuMjI2NTYyIDI2LjIyNjU2MmMtMTguMzA0Njg4LTQuMDc0MjE4LTU4Ljg1MTU2My05LjcyNjU2Mi04MS41OTM3NSAxMy4wMTk1MzItMTQuNjEzMjgyIDE0LjYwOTM3NS0yMy4xOTE0MDYgMzMuOTc2NTYyLTIzLjcyMjY1NiA1Mi45NTcwMzFsLTIyLjc2OTUzMiAyNC4zNTE1NjNjLTE3Ljc2OTUzMSAxOS0yNy4zMTY0MDYgNDMuNzkyOTY4LTI2Ljg4MjgxMiA2OS44MDQ2ODcuNDM3NSAyNi4wMTE3MTkgMTAuODA4NTk0IDUwLjQ3MjY1NiAyOS4yMDMxMjUgNjguODY3MTg3bDUxLjY2NDA2MiA1MS42NjQwNjNjNS43OTI5NjkgNS43OTI5NjkgNS43OTI5NjkgMTUuMjE0ODQ0IDAgMjEuMDExNzE5bC0xLjE4NzUgMS4xODc1Yy01Ljc5Mjk2OSA1Ljc5Mjk2OC0xNS4yMTg3NSA1Ljc5Mjk2OC0yMS4wMTE3MTkgMGwtMTc2LjcwMzEyNC0xNzYuNzA3MDMyYy0xNy42Nzk2ODgtMTcuNjc5Njg3LTQxLjE3NTc4Mi0yNy42NDA2MjQtNjYuMTYwMTU3LTI4LjA1MDc4MS0yNS4yMjI2NTYtLjQxNDA2Mi00OC45MTQwNjIgOC45Mzc1LTY2LjgzMjAzMSAyNi4zMzU5MzgtMTguMTQwNjI1IDE3LjYwOTM3NS0yOC4yNzM0MzggNDEuMjg1MTU2LTI4LjUyNzM0NCA2Ni42NjQwNjItLjI1NzgxMiAyNS4zODY3MTkgOS4zODY3MTkgNDkuMjY1NjI1IDI3LjEyODkwNiA2Ny4yMDMxMjVsMTIxLjA4MjAzMiAxMjMuMDM5MDYzYzIuODMyMDMxIDIuODYzMjgxIDQuMzQ3NjU2IDYuNjc5Njg3IDQuMjY1NjI1IDEwLjc1MzkwNi0uMDgyMDMxIDQuMDYyNS0xLjc1MzkwNyA3LjgxNjQwNi00LjcwNzAzMSAxMC41NzAzMTMtNS43NzczNDQgNS4zOTA2MjQtMTUuMjM4MjgyIDUuMDE5NTMxLTIxLjA4NTkzOC0uODI4MTI2bC00Mi4yMjY1NjItNDIuMjMwNDY4Yy0yNS4xMTcxODgtMjUuMTEzMjgyLTY1Ljk4NDM3Ni0yNS4xMTMyODItOTEuMTAxNTYzIDBsLTEwLjU3ODEyNSAxMC41ODIwMzEgODcuNTExNzE5IDg3LjUxMTcxOWMxNy42Nzk2ODcgMTcuNjc5Njg3IDQxLjE3NTc4MSAyNy42NDQ1MzEgNjYuMTYwMTU2IDI4LjA1NDY4Ny41MzUxNTYuMDA3ODEzIDEuMDYyNS4wMTE3MTkgMS41OTc2NTYuMDExNzE5IDI0LjU4MjAzMSAwIDQ3LjY5NTMxMy05LjMyNDIxOSA2NS4yMzQzNzUtMjYuMzUxNTYyIDE4LjEzNjcxOS0xNy42MDkzNzYgMjguMjY5NTMyLTQxLjI4MTI1IDI4LjUyNzM0NC02Ni42NjAxNTcuMjU3ODEyLTI1LjM5MDYyNS05LjM4NjcxOS00OS4yNjU2MjUtMjcuMTMyODEyLTY3LjIwNzAzMWwtMTIxLjA4MjAzMi0xMjMuMDM5MDYyYy0yLjgzMjAzMS0yLjg2MzI4Mi00LjM0Mzc1LTYuNjc5Njg4LTQuMjYxNzE4LTEwLjc1MzkwNy4wODIwMzEtNC4wNjI1IDEuNzUzOTA2LTcuODE2NDA2IDQuNzAzMTI0LTEwLjU3MDMxMiA1Ljc3NzM0NC01LjM5MDYyNSAxNS4yMzgyODItNS4wMTk1MzEgMjEuMDg1OTM4LjgyODEyNWwxNzYuOTcyNjU2IDE3Ni45NzI2NTZjMTcuNzk2ODc1IDE3Ljc5Njg3NSA0MS40NjA5MzggMjcuNjAxNTYyIDY2LjYzMjgxMyAyNy42MDE1NjJzNDguODM5ODQzLTkuODA0Njg3IDY2LjYzNjcxOS0yNy42MDE1NjJsMS4xOTE0MDYtMS4xOTE0MDZjMzYuNzQyMTg3LTM2Ljc0MjE4OCAzNi43NDIxODctOTYuNTI3MzQ0IDAtMTMzLjI2OTUzMmwtNTAuNzkyOTY5LTUwLjc5Mjk2OGMtMy44MTY0MDYtMy44MTY0MDYtNS45MTc5NjktOC44OTA2MjUtNS45MTc5NjktMTQuMjg1MTU2IDAtNS4zOTg0MzggMi4xMDE1NjMtMTAuNDY4NzUgNS45MTc5NjktMTQuMjg1MTU3em0wIDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwic25hcGNoYXRcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgLTQgNTEyLjAwMTY0IDUxMlxcXCI+PHBhdGggZD1cXFwibTQ5Ni45MTQwNjIgMzU0LjM2NzE4OC03NC4xNzk2ODctNzYuNjc5Njg4IDI4Ljg3NS0xMS45NjA5MzhjMTIuMjY1NjI1LTUuMDgyMDMxIDIxLjgxNjQwNi0xNC42MzY3MTggMjYuODk4NDM3LTI2LjkwMjM0MyA1LjA4MjAzMi0xMi4yNjU2MjUgNS4wODIwMzItMjUuNzc3MzQ0IDAtMzguMDQyOTY5LTcuNzIyNjU2LTE4LjY0NDUzMS0yNS43NTM5MDYtMzAuNjkxNDA2LTQ1LjkzMzU5My0zMC42OTE0MDYtNi41MzUxNTcgMC0xMi45MzM1OTQgMS4yNzczNDQtMTkuMDA3ODEzIDMuNzkyOTY4bC0xLjk0MTQwNi44MDg1OTR2LTE5LjA2NjQwNmMwLTg1LjgxMjUtNjkuODEyNS0xNTUuNjI1LTE1NS42MjUtMTU1LjYyNXMtMTU1LjYyNSA2OS44MTI1LTE1NS42MjUgMTU1LjYyNXYxOS4wNjI1bC0xLjkzNzUtLjgwMDc4MWMtNi4wNzgxMjUtMi41MTk1MzEtMTIuNDc2NTYyLTMuNzk2ODc1LTE5LjAxMTcxOS0zLjc5Njg3NS0yMC4xODM1OTMgMC0zOC4yMTQ4NDMgMTIuMDUwNzgxLTQ1LjkzMzU5MyAzMC42OTE0MDYtNS4wODIwMzIgMTIuMjY1NjI1LTUuMDgyMDMyIDI1Ljc3NzM0NC0uMDAzOTA3IDM4LjA0Mjk2OSA1LjA4MjAzMSAxMi4yNjU2MjUgMTQuNjM2NzE5IDIxLjgyMDMxMiAyNi44OTg0MzggMjYuOTAyMzQzbDI4Ljg3NSAxMS45NjA5MzgtNzQuMTc1NzgxIDc2LjY3OTY4OGMtMTcuODUxNTYzIDE4LjQ0OTIxOC0xNi4wNzAzMTMgMzMuNDc2NTYyLTEzLjQyMTg3NiA0MC43OTY4NzQgMy45NjA5MzggMTAuOTMzNTk0IDE0LjQxNzk2OSAxOC4wODU5MzggMjguNjkxNDA3IDE5LjYxNzE4OCA1Ljc0NjA5My42MTcxODggMTAuODk4NDM3IDMuNDMzNTk0IDE0LjUxNTYyNSA3LjkyOTY4OCAzLjQ5MjE4NyA0LjM0NzY1NiA1LjA4OTg0NCA5LjczMDQ2OCA0LjQ4ODI4MSAxNS4xNjQwNjItMS41NDY4NzUgMTQuMDU4NTk0IDMuMjc3MzQ0IDIyLjc1MzkwNiA3LjU5NzY1NiAyNy41NzQyMTkgNS42Njc5NjkgNi4zMjgxMjUgMTMuOTU3MDMxIDkuODE2NDA2IDIzLjMzOTg0NCA5LjgxNjQwNiA3Ljk1NzAzMSAwIDE2LjQ5NjA5NC0yLjM5ODQzNyAyNS4zNzg5MDYtNy4xMjEwOTRsNS4xMDE1NjMtMi43MTQ4NDNjNy4yOTY4NzUtMy44Nzg5MDcgMTcuMjQyMTg3LTYuMDE1NjI2IDI4LTYuMDE1NjI2IDEyLjQ1MzEyNSAwIDI0LjI2NTYyNSAyLjg2MzI4MiAzMi40MTc5NjggNy44NTU0NjlsMzkuOTc2NTYzIDI0LjQ5NjA5NGMxMS45MDIzNDQgNy4yOTI5NjkgMjcuNjQwNjI1IDExLjYyNSA0NC4zMTI1IDEyLjE5OTIxOS4xNzE4NzUuMDA3ODEyLjM0Mzc1LjAxMTcxOC41MTU2MjUuMDExNzE4cy4zNDc2NTYtLjAwMzkwNi41MTk1MzEtLjAxMTcxOGMxNi42Njc5NjktLjU3NDIxOSAzMi40MDIzNDQtNC45MDYyNSA0NC4zMDg1OTQtMTIuMTk5MjE5bDM5Ljk3MjY1Ni0yNC40OTYwOTRjOC4xNTIzNDQtNC45OTIxODcgMTkuOTY4NzUtNy44NTU0NjkgMzIuNDE3OTY5LTcuODU1NDY5IDEwLjc2NTYyNSAwIDIwLjcwNzAzMSAyLjEzNjcxOSAyOCA2LjAxNTYyNmw1LjEwNTQ2OSAyLjcxNDg0M2M4Ljg4MjgxMiA0LjcyMjY1NyAxNy40MjE4NzUgNy4xMTcxODggMjUuMzc1IDcuMTIxMDk0aC4wMDM5MDZjOS4zODI4MTMgMCAxNy42NzE4NzUtMy40ODgyODEgMjMuMzQzNzUtOS44MTY0MDYgNC4zMTY0MDYtNC44MjAzMTMgOS4xNDA2MjUtMTMuNTE1NjI1IDcuNTkzNzUtMjcuNTc4MTI1LS41OTc2NTYtNS40Mjk2ODguOTk2MDk0LTEwLjgxMjUgNC40OTIxODctMTUuMTYwMTU2IDMuNjA5Mzc2LTQuNDk2MDk0IDguNzY1NjI2LTcuMzEyNSAxNC41MTU2MjYtNy45Mjk2ODggMTQuMjczNDM3LTEuNTMxMjUgMjQuNzMwNDY4LTguNjgzNTk0IDI4LjY4NzUtMTkuNjE3MTg4IDIuNjQ4NDM3LTcuMzIwMzEyIDQuNDI5Njg3LTIyLjM0NzY1Ni0xMy40MjE4NzYtNDAuNzk2ODc0em0wIDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwidGhvdWdodC1idWJibGVcXFwiIGNsYXNzPVxcXCJ0YWctaWNvblxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAzNDQuNTcgMzQ0LjU3XFxcIj48Zz48cGF0aCBkPVxcXCJNMzM1LjIwNiwxNDQuNTUyYy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41YzAsMTkuMTgzLTE1LjYwNiwzNC43ODktMzQuNzksMzQuNzg5Yy0zLjY0NSwwLTcuMjc2LTAuNTgyLTEwLjc5My0xLjczIGMtMi4yNDktMC43MzMtNC43MTQtMC4zNjQtNi42NDgsMC45OTljLTEuOTM0LDEuMzYzLTMuMTEyLDMuNTYtMy4xNzYsNS45MjZjLTAuNTIsMTguOTY4LTE1Ljc3NiwzMy44MjYtMzQuNzMzLDMzLjgyNiBjLTEwLjEwNSwwLTE5LjcwNi00LjQxNS0yNi4zNDEtMTIuMTE0Yy0xLjQyNS0xLjY1My0zLjQ5OS0yLjYwNC01LjY4MS0yLjYwNGMtMi4xODIsMC00LjI1NiwwLjk1LTUuNjgxLDIuNjA0IGMtNi42MzUsNy42OTktMTYuMjM2LDEyLjExNC0yNi4zNDEsMTIuMTE0Yy0xMC43MjUsMC0yMC42OTYtNC44NjgtMjcuMzU4LTEzLjM1NmMtMS40MjItMS44MTItMy41OTctMi44NjktNS45LTIuODY5IGMtMi4zMDMsMC00LjQ3OCwxLjA1OC01LjksMi44NjljLTYuNjYyLDguNDg4LTE2LjYzNCwxMy4zNTYtMjcuMzU4LDEzLjM1NmMtNi45OTksMC0xMy43NDEtMi4wNjktMTkuNDk5LTUuOTg1IGMtMy40MjUtMi4zMzEtOC4wOS0xLjQ0Mi0xMC40MTksMS45ODNjLTIuMzMsMy40MjUtMS40NDEsOC4wOSwxLjk4NCwxMC40MTljOC4yNTUsNS42MTUsMTcuOTE1LDguNTgzLDI3LjkzNCw4LjU4MyBjMTIuNDUxLDAsMjQuMTg3LTQuNTcyLDMzLjI1OC0xMi43NjhjOS4wNzEsOC4xOTUsMjAuODA3LDEyLjc2OCwzMy4yNTgsMTIuNzY4YzExLjc5NSwwLDIzLjEwNS00LjE5MywzMi4wMjItMTEuNzAzIGM4LjkxNyw3LjUxLDIwLjIyNywxMS43MDMsMzIuMDIyLDExLjcwM2MxMy4wNTcsMCwyNS4zOTEtNS4wMjEsMzQuNzMxLTE0LjE0YzcuMTQxLTYuOTczLDExLjkzOC0xNS43NTMsMTMuOTQ4LTI1LjMzNCBjMi4yMTEsMC4zMDIsNC40MzksMC40NTMsNi42NzIsMC40NTNjMjcuNDU0LDAsNDkuNzktMjIuMzM1LDQ5Ljc5LTQ5Ljc4OUMzNDIuNzA2LDE0Ny45MDksMzM5LjM0OCwxNDQuNTUyLDMzNS4yMDYsMTQ0LjU1MnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNjcuMTAyLDE5OS4zN2MzLjkzOC0xLjI4Niw2LjA4Ny01LjUyLDQuODAyLTkuNDU4Yy0xLjI4Ni0zLjkzNy01LjUyMS02LjA4Ni05LjQ1Ny00LjgwMiBjLTMuNTE3LDEuMTQ4LTcuMTQ4LDEuNzMtMTAuNzkzLDEuNzNjLTE5LjE4MywwLTM0Ljc5LTE1LjYwNi0zNC43OS0zNC43ODljMC05LjkwOCw0LjI4My0xOS4zODgsMTEuNzUyLTI2LjAwOSBjMS42MDUtMS40MjQsMi41MjQtMy40NjcsMi41MjQtNS42MTJzLTAuOTE5LTQuMTg4LTIuNTI0LTUuNjExYy03LjQ2OC02LjYyMy0xMS43NTItMTYuMTAzLTExLjc1Mi0yNi4wMSBjMC0xOS4xODQsMTUuNjA2LTM0Ljc5LDM0Ljc5LTM0Ljc5YzMuNjQzLDAsNy4yNzQsMC41ODIsMTAuNzk0LDEuNzNjMi4yNSwwLjczNCw0LjcxMywwLjM2Myw2LjY0Ny0xczMuMTExLTMuNTYsMy4xNzYtNS45MjUgQzcyLjc5MiwyOS44NTgsODguMDQ4LDE1LDEwNy4wMDUsMTVjMTAuNzI1LDAsMjAuNjk3LDQuODY4LDI3LjM1OCwxMy4zNTVjMS40MjIsMS44MTMsMy41OTcsMi44Nyw1LjksMi44NyBjMi4zMDMsMCw0LjQ3OS0xLjA1OSw1LjktMi44N0MxNTIuODI0LDE5Ljg2OCwxNjIuNzk1LDE1LDE3My41MjEsMTVjNC4xNDIsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjUgYy0xMi40NTIsMC0yNC4xODcsNC41NzItMzMuMjU4LDEyLjc2N0MxMzEuMTkxLDQuNTcyLDExOS40NTcsMCwxMDcuMDA1LDBjLTEzLjA1NywwLTI1LjM5MSw1LjAyMS0zNC43MywxNC4xNCBjLTcuMTQxLDYuOTcyLTExLjkzOCwxNS43NTMtMTMuOTQ4LDI1LjMzM2MtMi4yMTEtMC4zMDItNC40MzktMC40NTMtNi42NzItMC40NTNjLTI3LjQ1NCwwLTQ5Ljc5LDIyLjMzNi00OS43OSw0OS43OSBjMCwxMS41ODcsNC4wOCwyMi43NTgsMTEuMzg3LDMxLjYyMWMtNy4zMDcsOC44NjItMTEuMzg3LDIwLjAzMy0xMS4zODcsMzEuNjIxYzAsMjcuNDU0LDIyLjMzNSw0OS43ODksNDkuNzksNDkuNzg5IEM1Ni44ODIsMjAxLjg0MSw2Mi4wOCwyMDEuMDEsNjcuMTAyLDE5OS4zN3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjAwLjY0NywyNy44OTljMy4xMzgsMi43MDQsNy44NzQsMi4zNTIsMTAuNTc4LTAuNzg1QzIxNy44NTksMTkuNDE1LDIyNy40NiwxNSwyMzcuNTY1LDE1IGMxOC45NTgsMCwzNC4yMTQsMTQuODU3LDM0LjczMywzMy44MjVjMC4wNjQsMi4zNjUsMS4yNDIsNC41NjIsMy4xNzYsNS45MjVzNC4zOTcsMS43MzQsNi42NDcsMSBjMy41Mi0xLjE0OCw3LjE1Mi0xLjczLDEwLjc5NC0xLjczYzE5LjE4MywwLDM0Ljc5LDE1LjYwNiwzNC43OSwzNC43OWMwLDkuOTA3LTQuMjg0LDE5LjM4Ny0xMS43NTIsMjYuMDEgYy0zLjEsMi43NDgtMy4zODQsNy40ODgtMC42MzYsMTAuNTg3YzEuNDgyLDEuNjcyLDMuNTQzLDIuNTI0LDUuNjE1LDIuNTI0YzEuNzY5LDAsMy41NDUtMC42MjIsNC45NzMtMS44ODkgYzEwLjY3Ny05LjQ2NywxNi44MDEtMjMuMDM3LDE2LjgwMS0zNy4yMzJjMC0yNy40NTQtMjIuMzM1LTQ5Ljc5LTQ5Ljc5LTQ5Ljc5Yy0yLjIzMywwLTQuNDYsMC4xNTEtNi42NzIsMC40NTMgYy0yLjAxLTkuNTgtNi44MDctMTguMzYxLTEzLjk0OC0yNS4zMzNDMjYyLjk1Nyw1LjAyMSwyNTAuNjIyLDAsMjM3LjU2NSwwYy0xNC40NzUsMC0yOC4yMTcsNi4zMTMtMzcuNzA0LDE3LjMyMSBDMTk3LjE1OCwyMC40NiwxOTcuNTEsMjUuMTk1LDIwMC42NDcsMjcuODk5elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMjkuMzE5LDI1MS44OTljLTIwLjU0MSwwLTM2LjYzLDEwLjgwMS0zNi42MywyNC41OXMxNi4wOSwyNC41OSwzNi42MywyNC41OWMyMC41NCwwLDM2LjYzLTEwLjgwMSwzNi42My0yNC41OSBTMTQ5Ljg1OSwyNTEuODk5LDEyOS4zMTksMjUxLjg5OXogTTEyOS4zMTksMjg2LjA3OWMtMTMuMDAzLDAtMjEuNjMtNS43NzItMjEuNjMtOS41OXM4LjYyNy05LjU5LDIxLjYzLTkuNTkgYzEzLjAwMywwLDIxLjYzLDUuNzcyLDIxLjYzLDkuNTlTMTQyLjMyMiwyODYuMDc5LDEyOS4zMTksMjg2LjA3OXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOTUuNTI4LDMxMi44MThjLTQuMTQyLDAtNy41LDMuMzU3LTcuNSw3LjVjMCw0LjM2Ny03LjQyMyw5LjI1Mi0xNy4zNTgsOS4yNTJzLTE3LjM1OC00Ljg4NS0xNy4zNTgtOS4yNTIgYzAtNC4zNjgsNy40MjMtOS4yNTMsMTcuMzU4LTkuMjUzYzQuMTQyLDAsNy41LTMuMzU3LDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41Yy0xOC4xNDUsMC0zMi4zNTgsMTAuNjUzLTMyLjM1OCwyNC4yNTMgUzUyLjUyNiwzNDQuNTcsNzAuNjcsMzQ0LjU3czMyLjM1OC0xMC42NTIsMzIuMzU4LTI0LjI1MkMxMDMuMDI4LDMxNi4xNzYsOTkuNjcsMzEyLjgxOCw5NS41MjgsMzEyLjgxOHpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcInRob3VnaHRzXFxcIiBjbGFzcz1cXFwidGFnLWljb25cXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTExIDUxMS45OTlcXFwiPjxwYXRoIGQ9XFxcIm0xMTQuNDQ5MjE5IDQxMC4yNjk1MzEgMzQuNjIxMDkzIDI1LjA2NjQwN2MxMC41OTM3NSA3LjY2Nzk2OCAyNS45Njg3NSA3LjY2Nzk2OCAzNi41NjI1IDBsMzQuNjIxMDk0LTI1LjA2NjQwN2MyMS4xMDU0NjktMTUuMjgxMjUgNTAuNTg5ODQ0LTE1LjI4MTI1IDcxLjY5NTMxMyAwbDM0LjYyNSAyNS4wNjY0MDdjMTAuNTg5ODQzIDcuNjY3OTY4IDI1Ljk2ODc1IDcuNjY3OTY4IDM2LjU2MjUgMGwzNC42MjEwOTMtMjUuMDY2NDA3YzIxLjEwOTM3Ni0xNS4yODEyNSA1MC41ODk4NDQtMTUuMjgxMjUgNzEuNjk5MjE5IDBsNDIuMjUgMzAuNTg1OTM4di02My4xOTUzMTNsLTU5LjgyMDMxMi00My4zMDQ2ODdjLTEwLjU4OTg0NC03LjY2Nzk2OS0yNS45NjQ4NDQtNy42Njc5NjktMzYuNTU4NTk0IDBsLTM0LjYyNSAyNS4wNjI1Yy0yMS4xMDU0NjkgMTUuMjgxMjUtNTAuNTg5ODQ0IDE1LjI4MTI1LTcxLjY5NTMxMyAwbC0zNC42MjUtMjUuMDYyNWMtMTAuNTg5ODQzLTcuNjcxODc1LTI1Ljk2ODc1LTcuNjY3OTY5LTM2LjU1ODU5MyAwbC0zNC42MjUgMjUuMDYyNWMtMjEuMTA1NDY5IDE1LjI4MTI1LTUwLjU4OTg0NCAxNS4yODEyNS03MS42OTUzMTMgMGwtMzQuNjI1LTI1LjA2MjVjLTEwLjU4OTg0NC03LjY2Nzk2OS0yNS45Njg3NS03LjY2Nzk2OS0zNi41NTg1OTQgMGwtNTkuODIwMzEyIDQzLjMwNDY4N3Y2My4xOTUzMTNsNDIuMjUtMzAuNTg1OTM4YzIxLjEwOTM3NS0xNS4yODEyNSA1MC41ODk4NDQtMTUuMjgxMjUgNzEuNjk5MjE5IDB6bTAgMFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIm0xMTQuNDQ5MjE5IDMxMC4wODU5MzggMzQuNjIxMDkzIDI1LjA2NjQwNmMxMC41OTM3NSA3LjY2Nzk2OCAyNS45Njg3NSA3LjY2Nzk2OCAzNi41NjI1IDBsMzQuNjIxMDk0LTI1LjA2NjQwNmMyMS4xMDkzNzUtMTUuMjc3MzQ0IDUwLjU5Mzc1LTE1LjI3NzM0NCA3MS42OTUzMTMgMGwzNC42MjUgMjUuMDY2NDA2YzEwLjU4OTg0MyA3LjY2Nzk2OCAyNS45Njg3NSA3LjY2Nzk2OCAzNi41NjI1IDBsMzQuNjIxMDkzLTI1LjA2NjQwNmMyMS4xMDkzNzYtMTUuMjc3MzQ0IDUwLjU4OTg0NC0xNS4yNzczNDQgNzEuNjk5MjE5IDBsNDIuMjUgMzAuNTg5ODQzdi05NS41MDM5MDZoLTEzOS42NDg0MzdjLTQ1LjE0ODQzOC0xLjg2MzI4MS04MS45MDYyNS00MC4wNzgxMjUtODEuOTk2MDk0LTg1LjMyMDMxMy0uMDQyOTY5LTIyLjg5NDUzMSA4LjgzNTkzOC00NC40MjE4NzQgMjUuMDAzOTA2LTYwLjYyMTA5MyAxNS45MjE4NzUtMTUuOTU3MDMxIDM3LjAyNzM0NC0yNC44NTE1NjMgNTkuNTIzNDM4LTI1LjExNzE4OGw4LjY0MDYyNSAxLjI1NzgxMyAxMS41ODU5MzctMTguODI4MTI1LTguOTQ5MjE4LTguMzYzMjgxYy01OS4yMzA0NjktNTUuMzU1NDY5LTE0OC41NDI5NjktNjMuOTQ5MjE5LTIxNy4xODM1OTQtMjAuOTAyMzQ0LTIxLjYwOTM3NSAxMy41NTQ2ODctNDAuNTk3NjU2IDMyLjU4NTkzNy01NC45MTc5NjkgNTUuMDU0Njg3bC0xMTMuMjY1NjI1IDE3OC4xNzE4NzV2ODAuMTcxODc1bDQyLjI1LTMwLjU4OTg0M2MyMS4xMDkzNzUtMTUuMjc3MzQ0IDUwLjU4OTg0NC0xNS4yNzczNDQgNzEuNjk5MjE5IDB6bTAgMFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIm00MTUuMzI0MjE5IDQzNC41MzUxNTYtMzQuNjIxMDk0IDI1LjA2NjQwNmMtMjEuMTA1NDY5IDE1LjI3NzM0NC01MC41ODk4NDQgMTUuMjc3MzQ0LTcxLjY5NTMxMyAwbC0zNC42MjUtMjUuMDY2NDA2Yy0xMC41OTM3NS03LjY2Nzk2OC0yNS45Njg3NS03LjY2Nzk2OC0zNi41NjI1IDBsLTM0LjYyMTA5MyAyNS4wNjY0MDZjLTIxLjEwNTQ2OSAxNS4yNzczNDQtNTAuNTg5ODQ0IDE1LjI3NzM0NC03MS42OTUzMTMgMGwtMzQuNjI1LTI1LjA2NjQwNmMtMTAuNTg5ODQ0LTcuNjY3OTY4LTI1Ljk2ODc1LTcuNjY3OTY4LTM2LjU1ODU5NCAwbC01OS44MjAzMTIgNDMuMzA0Njg4djM0LjE2MDE1Nmg1MTEuMjA3MDMxdi0zNC4xNjAxNTZsLTU5LjgyMDMxMi00My4zMDQ2ODhjLTEwLjU4OTg0NC03LjY2Nzk2OC0yNS45NjQ4NDQtNy42Njc5NjgtMzYuNTYyNSAwem0wIDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCBjb250ZW50IGZyb20gJy4vY29udGVudCc7XG5cbmNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuY29uc3Qgcm9vdFBhdGggPSAnL2dob3N0LXJpdmVyLyc7XG4vLyBjb25zdCBob3N0ID0gJyBodHRwczovL2dob3N0cml2ZXIuZXRobm9ncmFwaHlsYWJjb25jb3JkaWEuY2EnOyAvLydodHRwOi8vbG9jYWxob3N0Ojg4ODgnOyAvLyBodHRwOi8vbGFicy5mbHV4by5hcnQuYnIgLy8gZ2hvc3RyaXZlci5ldGhub2dyYXBoeWxhYmNvbmNvcmRpYS5jYVxuLy8gY29uc3Qgcm9vdFBhdGggPSAnLyc7XG5cblxuY29uc3QgbmF2aWdhdGlvbiA9ICgpID0+IHtcblxuXHQvL3Rlc3QgaWYgdXJsIGlzIHRyeWluZyB0byByZWFjaCBhIGRlZXBsaW5rXHRcdFxuXHRpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSByb290UGF0aCkge1x0XG5cdFx0XG5cdFx0Y29uc3QgZGVlcFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcblx0XHRjb25zdCBub2RlID0gZGVlcFBhdGhbZGVlcFBhdGgubGVuZ3RoLTJdO1xuXG5cdFx0Ly8gY29uc3QgZGVlcExpbmsgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5sZW5ndGg7IFx0Ly9nZXQgcGF0aCBhZnRlciB0aGUgJy8nIGFzIGRlZXBsaW5rXG5cdFx0bG9jYXRpb24gPSBgJHtob3N0fSR7cm9vdFBhdGh9P25vZGU9JHtub2RlfWA7XHRcdFx0Ly9uYXZpYXRlIHRvIHJvb3Qgd2l0aCBkZWVwbGluayBhcyBhIHNlYXJjaCBwYXJhbWV0ZXJzXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly90ZXN0IGlmIHVybCBpcyBzZWFyY2hpbmcgZm9yIGRlZXBsaW5rXG5cdGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1x0XHRcdFx0XHQvL2dldCB1dGxcdFx0XG5cdFx0Y29uc3Qgc2x1ZyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdub2RlJyk7XHRcdFx0XHRcdC8vZ2V0IHRoZSBwYXJhbXMgZm9yIHNlYXJjaCAoYSBzbHVnIGZvciBhIHBhZ2Ugb3IgcG9zdClcblx0XHRsb2FkRGVlcExpbmsoc2x1Zyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly9HbyBIb21lXG5cdGdvSG9tZSgpO1xuXG59O1xuXG5jb25zdCBsb2FkRGVlcExpbmsgPSBhc3luYyBzbHVnID0+IHtcblxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7c2x1Z30pO1x0XHRcdFx0XHQvL2NoYW5nZSBVUkwgQmFyXG5cblx0bGV0IHRoZW1lID0gY29udGVudC5nZXRUaGVtZUJ5U2x1ZyhzbHVnKTtcdFx0XHRcdC8vZ2V0IHRoZW1lIGJhc2VkIG9uIHRoZSBzZWFyY2ggcGFyYW1ldGVyc1xuXG5cdC8vaWYgc2VhcmNoIG1hdGNoIHRvIHRoZW1lIChwYWdlKVxuXHRpZiAodGhlbWUpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0YXdhaXQgY29udGVudC5zaG93UGFnZSh0aGVtZSk7XHRcdFx0XHRcdFx0Ly9sb2FkIHRoZSB0aGVtZSBwYWdlXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly90cnkgdG8gbG9hZCBhIHBvc3QgYmFzZWQgb24gc2VhcmNoIHBhcmFtZXRlcnNcblx0Y29uc3QgcG9zdCA9IGF3YWl0IGNvbnRlbnQuc2hvd1Bvc3Qoe3NsdWd9KTtcdFx0XHRcblxuXHQvL2lmIG5vIHBhZ2UvcG9zdCBmb3VuZDogbG9hZCBob21lIHdpdGggNDA0XG5cdGlmICghcG9zdCkgZ29Ib21lKCk7XG5cbn07XG5cbmNvbnN0IGdvSG9tZSA9IGFzeW5jICgpID0+IHtcblxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7c2x1Zzogcm9vdFBhdGh9KTtcblx0Y29udGVudC5pbml0SG9tZSgpO1xuXG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlQnJvd3Nlckhpc3RvcnkgPSAoe3RpdGxlLHNsdWd9KSA9PiB7XG5cdGxldCBwYWdlVGl0bGUgPSAnR2hvc3QgUml2ZXInO1xuXHRpZiAodGl0bGUpIHBhZ2VUaXRsZSArPSBgIC0gJHt0aXRsZX1gO1xuXG5cdGRvY3VtZW50LnRpdGxlID0gcGFnZVRpdGxlO1xuXHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXG5cdFx0e3BhZ2VUaXRsZX0sXG5cdFx0JycsXG5cdFx0c2x1Zyk7XG59O1xuIFxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYXZpZ2F0aW9uLFxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeVxufTsiLCJpbXBvcnQgV1BBUEkgZnJvbSAnd3BhcGknO1xuXG5pbXBvcnQge2NoYW5nZUJyb3dzZXJIaXN0b3J5fSBmcm9tICcuL2Jyb3dzZXItcmVxdWVzdCc7XG5pbXBvcnQgY29udGVudEhUTUwgZnJvbSAnLi9jb250ZW50SFRNTCc7XG5pbXBvcnQgZ2VvZGF0YSBmcm9tICcuL2dlb2RhdGEnO1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcCc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvY29uZmlnLmpzb24nO1xuaW1wb3J0IHRoZW1lcyBmcm9tICcuL2NvbmZpZy90aGVtZXMuanNvbic7XG5cblxuY29uc3Qgd3AgPSBuZXcgV1BBUEkoe2VuZHBvaW50OiBjb25maWcud29yZHByZXNzLmVuZHBvaW50fSk7XG5cbmxldCB0aGVtZTtcbmxldCBjdXJyZW50Tm9kZTtcbmxldCBhY3RpdmVQYW5lbDtcblxuY29uc3QgaW5pdEhvbWUgPSAoKSA9PiBjb250ZW50SFRNTC5pbml0SG9tZSgpO1xuXG5jb25zdCBzZXRDdXJyZW50Tm9kZSA9IGRhdGEgPT4gY3VycmVudE5vZGUgPSBkYXRhO1xuXG5jb25zdCBzZXRBY3RpdmVQYW5lbCA9IHBhbmVsID0+IGFjdGl2ZVBhbmVsID0gcGFuZWw7XG5cblxuZXhwb3J0IGNvbnN0IHNob3dQYWdlID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRhd2FpdCBzZXRUaGVtZShzbHVnKTtcblxuXHRpZiAoaWQgPT09IDApIHtcblx0XHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7c2x1ZzogJy9naG9zdC1yaXZlci8nfSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gaWYgKHRoZW1lLmlzTmV3KSBcblx0aWYgKHNsdWcgIT09ICdhYm91dCcpIHVwZGF0ZU1hcCh0aGVtZSk7XG5cblx0Y29uc3QgcGFnZURhdGEgPSBhd2FpdCBsb2FkUGFnZSh7aWQsIHNsdWd9KTtcblx0Ly8gY29uc29sZS5sb2cocGFnZURhdGEpO1xuXG5cdHNldEN1cnJlbnROb2RlKG51bGwpO1xuXG5cdGlmIChzbHVnICE9PSAnYWJvdXQnKSBtYXAuZmx5VG9PcmlnaW4oKTtcblxuXHQvL3BhbmVsXG5cdHNldEFjdGl2ZVBhbmVsKChzbHVnID09PSAnYWJvdXQnKSA/ICdmdWxsLXBhbmVsJyA6ICdyaWdodC1wYW5lbCcpO1xuXHRcblx0Y29udGVudEhUTUwudXBkYXRlUGFnZShhY3RpdmVQYW5lbCwgcGFnZURhdGEpO1xuXHRcblx0Ly9zaG93IHBhbmVsXG5cdGNvbnRlbnRIVE1MLnNob3dQYW5lbCh7YWN0aXZlUGFuZWx9KTtcblxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7XG5cdFx0dGl0bGU6IHBhZ2VEYXRhLnRpdGxlLnJlbmRlcmVkLFxuXHRcdHNsdWc6IHBhZ2VEYXRhLnNsdWdcblx0fSk7XG5cblx0cmV0dXJuIHBhZ2VEYXRhO1xufTtcblxuY29uc3QgbG9hZFBhZ2UgPSBhc3luYyAoe2lkLCBzbHVnfSkgPT4ge1xuXG5cdGxldCBwYWdlRGF0YTtcblxuXHRpZiAoaWQpIHtcblx0XHRwYWdlRGF0YSA9IGF3YWl0IHdwLnBhZ2VzKCkuaWQoaWQpLmVtYmVkKCk7XG5cdH0gZWxzZSBpZiAoc2x1Zykge1xuXHRcdHBhZ2VEYXRhID0gYXdhaXQgd3AucGFnZXMoKS5zbHVnKHNsdWcpLmVtYmVkKCk7XG5cdFx0cGFnZURhdGEgPSBwYWdlRGF0YVswXTtcblx0fVxuXG5cdHJldHVybiBwYWdlRGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93UG9zdCA9IGFzeW5jICh7aWQsIHNsdWd9KSA9PiB7XG5cblx0aWYgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLmlkID09PSBpZCkgcmV0dXJuO1xuXG5cdGF3YWl0IGNvbnRlbnRIVE1MLmhpZGVQYW5lbCh7YWN0aXZlUGFuZWx9KTtcblxuXHRjb250ZW50SFRNTC5zaG93U3Bpbm5lcigpO1xuXG5cdGNvbnN0IHBvc3REYXRhID0gYXdhaXQgbG9hZFBvc3Qoe2lkLHNsdWd9KTtcblx0Ly8gY29uc29sZS5sb2cocG9zdERhdGEpO1xuXHRpZiAoIXBvc3REYXRhKSB7XG5cdFx0Y29udGVudEhUTUwuaGlkZVNwaW5uZXIoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb250ZW50SFRNTC5oaWRlU3Bpbm5lcigpO1xuXHRzZXRDdXJyZW50Tm9kZShwb3N0RGF0YSk7XG5cblx0Y29uc3QgcG9zdENhdGVnb3JpZXMgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVswXTtcblx0Y29uc3QgcG9zdFRhZ3MgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVsxXTtcblxuXHRjb25zdCBwb3N0VGhlbWUgPSBnZXRQb3N0VGhlbWUocG9zdENhdGVnb3JpZXMpO1xuXHRpZiAocG9zdFRoZW1lLnNsdWcgPT09ICd1bmNhdGVnb3JpemVkJykgY29uc29sZS5sb2coJ1Byb2JsZW0gd2l0aCBjYXRlZ29yeSBcInVuY2F0ZWdvcml6ZWRcIjogJywgcG9zdERhdGEpO1xuXG5cdHNldFRoZW1lKHBvc3RUaGVtZS5zbHVnKTtcblx0aWYgKHRoZW1lLmlzTmV3KSBhd2FpdCB1cGRhdGVNYXAodGhlbWUpO1xuXG5cdC8vZmx5IHRvIGxvY2FsXG5cdGdlb2RhdGEuc2V0Q3VycmVudE5vZGUoY3VycmVudE5vZGUpO1xuXHRjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdlb2RhdGEuZ2V0Tm9kZUNvb3JkaW5hdGVzKGN1cnJlbnROb2RlKTtcblxuXHRtYXAuZmx5VG8oY29vcmRpbmF0ZXMpO1xuXG5cdHNldEFjdGl2ZVBhbmVsKCdyaWdodC1wYW5lbCcpO1xuXHRcblx0Y29udGVudEhUTUwudXBkYXRlUG9zdChwb3N0RGF0YSxwb3N0VGFncyx0aGVtZSk7XG5cblx0Ly9zaG93IFBhbmVsXG5cdGNvbnRlbnRIVE1MLnNob3dQYW5lbCh7YWN0aXZlUGFuZWx9KTtcblxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7XG5cdFx0dGl0bGU6IHBvc3REYXRhLnRpdGxlLnJlbmRlcmVkLFxuXHRcdHNsdWc6IHBvc3REYXRhLnNsdWdcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRwb3N0OiBwb3N0RGF0YSxcblx0XHR0aGVtZTogcG9zdFRoZW1lXG5cdH07XG59O1xuXG5jb25zdCBnZXRQb3N0VGhlbWUgPSAocG9zdENhdGVnb3JpZXMpID0+IHtcblxuXHRsZXQgcG9zdFRoZW1lO1xuXHRpZiAodGhlbWUpIHBvc3RUaGVtZSA9IHBvc3RDYXRlZ29yaWVzLmZpbmQoY2F0ID0+IGNhdC5zbHVnID09PSB0aGVtZS5zbHVnKTtcblxuXHRpZiAoIXBvc3RUaGVtZSkge1xuXHRcdGlmIChwb3N0Q2F0ZWdvcmllcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRjb25zdCB0aGVtZVBvc3QgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3N0Q2F0ZWdvcmllcy5sZW5ndGgpO1xuXHRcdFx0cG9zdFRoZW1lID0gcG9zdENhdGVnb3JpZXNbdGhlbWVQb3N0XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9zdFRoZW1lID0gcG9zdENhdGVnb3JpZXNbMF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHBvc3RUaGVtZTtcbn07XG5cbmNvbnN0IGxvYWRQb3N0ID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRsZXQgcG9zdERhdGE7XG5cblx0aWYgKGlkKSB7XG5cdFx0cG9zdERhdGEgPSBhd2FpdCB3cC5wb3N0cygpLmlkKGlkKS5lbWJlZCgpO1xuXHR9IGVsc2UgaWYgKHNsdWcpIHtcblx0XHRwb3N0RGF0YSA9IGF3YWl0IHdwLnBvc3RzKCkuc2x1ZyhzbHVnKS5lbWJlZCgpO1xuXHRcdHBvc3REYXRhID0gcG9zdERhdGFbMF07XG5cdH1cblxuXHRyZXR1cm4gcG9zdERhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VQYW5lbCA9IGFzeW5jICgpID0+IHtcblxuXHRhd2FpdCBjb250ZW50SFRNTC5oaWRlUGFuZWwoe2FjdGl2ZVBhbmVsfSk7XG5cdFxuXHRzZXRDdXJyZW50Tm9kZShudWxsKTtcblx0Z2VvZGF0YS5yZXNldE5vZGVzU3RhdGUoe30pO1xuXG5cdHJldHVybiBjdXJyZW50Tm9kZTtcbn07XG5cblxuY29uc3Qgc2V0VGhlbWUgPSBhc3luYyByZXF1ZXN0ZWRUaGVtZVNsdWcgPT4ge1xuXG5cdGlmICghdGhlbWUpIHRoZW1lID0ge307XG5cblx0dGhlbWUuaXNOZXcgPSBmYWxzZTtcblx0XG5cdGlmKHRoZW1lLnNsdWcgIT0gcmVxdWVzdGVkVGhlbWVTbHVnKSB7XG5cdFx0Y29uc3QgcmVxdWVzdGVkVGhlbWUgPSBnZXRUaGVtZUJ5U2x1ZyhyZXF1ZXN0ZWRUaGVtZVNsdWcpO1xuXHRcdGNoYW5nZVN0YXRlKHJlcXVlc3RlZFRoZW1lLnN0YXRlKTtcblx0XHR0aGVtZSA9IHJlcXVlc3RlZFRoZW1lO1xuXHRcdHRoZW1lLmlzTmV3ID0gdHJ1ZTtcblx0fVxuXG5cdGlmICh0aGVtZS5zbHVnICE9ICdob21lJykge1xuXHRcdGF3YWl0IGNvbnRlbnRIVE1MLmhpZGVQYW5lbCh7YWN0aXZlUGFuZWx9KTtcblx0fVxuXHRcblx0cmV0dXJuIHRoZW1lO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudFRoZW1lID0gKCkgPT4gdGhlbWU7XG5jb25zdCBnZXRUaGVtZUJ5U2x1ZyA9IHNsdWcgPT4gdGhlbWVzLmZpbmQoIHRoZW1lID0+IHRoZW1lLnNsdWcgPT09IHNsdWcgKTtcblxuY29uc3QgY2hhbmdlU3RhdGUgPSBhc3luYyBuZXdTdGF0ZSA9PiB7XG5cblx0aWYgKG5ld1N0YXRlICE9IHRoZW1lLnN0YXRlKSB7XG5cdFx0aWYgKG5ld1N0YXRlID09PSAnaG9tZScpIHtcblx0XHRcdGNvbnRlbnRIVE1MLmhpZGVUb3BNZW51KCk7XG5cdFx0XHRhd2FpdCBjb250ZW50SFRNTC5oaWRlUGFuZWwoe2FjdGl2ZVBhbmVsfSk7XG5cdFx0XHRjb250ZW50SFRNTC5zaG93SG9tZSgpO1xuXHRcdH0gZWxzZSBpZiAobmV3U3RhdGUgPT09ICdwYWdlJykge1xuXHRcdFx0Y29udGVudEhUTUwuaGlkZUhvbWUoKTtcblx0XHRcdGNvbnRlbnRIVE1MLnNob3dUb3BNZW51KCk7XG5cdFx0fVxuXHR9XG5cdFxufTtcblxuY29uc3QgdXBkYXRlTWFwID0gYXN5bmMgKHtsb2NhdGlvbn0pID0+IHtcblxuXHRpZiAoIXRoZW1lKSB0aGVtZSA9IHRoZW1lc1swXTtcblxuXHRpZighbWFwLmlzTWFwYm94TG9hZGVkKCkpIHtcblxuXHRcdGlmIChsb2NhdGlvbiA9PT0gJzQwNCcpIHtcblx0XHRcdGF3YWl0IG1hcC5pbml0KHtsb2NhdGlvbn0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhd2FpdCBtYXAuaW5pdCh0aGVtZSk7XG5cdFx0fVxuXHRcdFxuXHR9IGVsc2Uge1xuXHRcdGF3YWl0IG1hcC5jaGFuZ2VNYXAodGhlbWUpO1xuXHR9XG5cblx0YXdhaXQgZ2VvZGF0YS5kcmF3Tm9kZXModGhlbWUpO1xuXG59O1xuXG5leHBvcnQgY29uc3QgdGFnU2VhcmNoID0gdGFnID0+IHtcblxuXHRnZW9kYXRhLmRyYXdOb2RlQnlUYWcodGFnKTtcblx0bWFwLmZseVRvT3JpZ2luKCk7XG5cdGNvbnRlbnRIVE1MLnVwZGF0ZUhlYWRpbmcodGFnLm5hbWUpO1xuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdEhvbWUsXG5cdHNob3dQYWdlLFxuXHRzaG93UG9zdCxcblx0Y2xvc2VQYW5lbCxcblx0Z2V0Q3VycmVudFRoZW1lLFxuXHRnZXRUaGVtZUJ5U2x1Zyxcblx0dGFnU2VhcmNoXG59O1xuIiwiaW1wb3J0IHtzZWxlY3QsIHNlbGVjdEFsbCwgZXZlbnR9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQge1R3ZWVuTWF4fSBmcm9tICdnc2FwL1R3ZWVuTWF4JztcblxuaW1wb3J0IHtzaG93UGFnZSwgc2hvd1Bvc3QsIGNsb3NlUGFuZWwsIHRhZ1NlYXJjaH0gZnJvbSAnLi9jb250ZW50JztcbmltcG9ydCB7Z2V0SWNvbn0gZnJvbSAnLi90YWdzJztcblxuaW1wb3J0IHRoZW1lcyBmcm9tICcuL2NvbmZpZy90aGVtZXMuanNvbic7XG5cbnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCdtYXAtYmcnKTtcblxuY29uc3QgaW5pdEhvbWUgPSAoKSA9PiBjb25maWdNYWluTWVudSgpO1xuXG5jb25zdCBjb25maWdNYWluTWVudSA9ICgpID0+IHtcblxuXHRmb3IgKGNvbnN0IHRoZW1lIG9mIHRoZW1lcykge1xuXHRcdHNlbGVjdChgI21haW4tJHt0aGVtZS5zbHVnfS1idGApLnNlbGVjdCgnYScpXG5cdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0fVxuXG59O1xuXG5jb25zdCBjb25maWdUb3BNZW51ID0gKCkgPT4ge1xuXG5cdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0c2VsZWN0KGAjdG9wLSR7dGhlbWUuc2x1Z30tYnRgKVxuXHRcdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0fVxuXG59O1xuXG5jb25zdCBzaG93SG9tZSA9ICgpID0+IHtcblxuXHRUd2Vlbk1heC50bygnI2hlYWRlci1jb2wnLCAyLCB7XG5cdFx0eTogMCxcblx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGVjdCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRUd2Vlbk1heC50bygnLmNvbC1tYWluLW1lbnUnLCAyLCB7XG5cdFx0eTogMCxcblx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGVjdEFsbCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRjb25maWdNYWluTWVudSgpO1xuXHRzaG93SG9tZUJHKCk7XG5cdGhpZGVIZWFkaW5nKCk7XG5cbn07XG5cbmNvbnN0IGhpZGVIb21lID0gKCkgPT4ge1xuXG5cdFR3ZWVuTWF4LnRvKCcjaGVhZGVyLWNvbCcsIDIsIHtcblx0XHR5OiAtNTAwLFxuXHRcdG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZWN0KHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0fSk7XG5cblx0VHdlZW5NYXgudG8oJy5jb2wtbWFpbi1tZW51JywgMiwge1xuXHRcdHk6IC04MDAsXG5cdFx0b25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxlY3RBbGwodGhpcy50YXJnZXQuc2VsZWN0b3IpXG5cdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRoaWRlSG9tZUJHKCk7XG5cdHNob3dIZWFkaW5nKCk7XG5cbn07XG5cbmNvbnN0IHNob3dIb21lQkcgPSAoKSA9PiB7XG5cblx0VHdlZW5NYXgudG8oJyNtYXAtYmcnLCAyLCB7XG5cdFx0YWxwaGE6IDEsXG5cdFx0b25TdGFydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxlY3RBbGwodGhpcy50YXJnZXQuc2VsZWN0b3IpXG5cdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH1cblx0fSk7XG5cbn07XG5cbmNvbnN0IGhpZGVIb21lQkcgPSAoKSA9PiB7XG5cdFxuXHRUd2Vlbk1heC50bygnI21hcC1iZycsIDIsIHtcblx0XHRhbHBoYTogMCxcblx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGVjdEFsbCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdH0pO1xuXG59O1xuXG5jb25zdCBzaG93VG9wTWVudSA9ICgpID0+IHtcblxuXHRUd2Vlbk1heC5mcm9tVG8oJyN0b3AtbWVudScsIDIsXG5cdFx0e3k6IC0yMDB9LFxuXHRcdHtcblx0XHRcdHk6IDAsXG5cdFx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0QWxsKHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcblxuXHRjb25maWdUb3BNZW51KCk7XG5cbn07XG5cbmNvbnN0IGhpZGVUb3BNZW51ID0gKCkgPT4ge1xuXG5cdFR3ZWVuTWF4LnRvKCcjdG9wLW1lbnUnLCAyLCB7XG5cdFx0eTogLTIwMCxcblx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGVjdEFsbCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdH0pO1xuXHRcdFxufTtcblxuY29uc3Qgc2hvd1BhbmVsID0gKHthY3RpdmVQYW5lbCA9ICdsZWZ0LXBhbmVsJ30pID0+IHtcblxuXHRpZiAoYWN0aXZlUGFuZWwgPT09ICdmdWxsLXBhbmVsJykge1xuXG5cdFx0Ly9GdWxsIFBhbmVsXG5cdFx0VHdlZW5NYXguZnJvbVRvKCcjZnVsbC1wYW5lbCcsIDIsIFxuXHRcdFx0e3k6IHdpbmRvdy5vdXRlckhlaWdodH0sXG5cdFx0XHR7XG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdG9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHNlbGVjdCh0aGlzLnRhcmdldC5zZWxlY3Rvcilcblx0XHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHNlbGVjdCgnI2Z1bGwtcGFuZWwnKS5zZWxlY3QoJy5mbC1jb2wtY29udGVudCcpLnByb3BlcnR5KCdzY3JvbGxUb3AnLCAwKTtcblx0XHRzaG93SG9tZUJHKCk7XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vTGVmdCBQYW5lbFxuXHRcdFR3ZWVuTWF4LnRvKCcjbGVmdC1wYW5lbCcsIDIsIHtcblx0XHRcdHg6IDAsXG5cdFx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0KHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL1JpZ2h0IFBhbmVsXG5cdFx0VHdlZW5NYXgudG8oJyNyaWdodC1wYW5lbCcsIDIsIHtcblx0XHRcdHg6IDAsXG5cdFx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0KHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0c2VsZWN0KCcjcmlnaHQtcGFuZWwnKS5zZWxlY3QoJy5mbC1jb2wtY29udGVudCcpLnByb3BlcnR5KCdzY3JvbGxUb3AnLCAwKTtcblxuXHR9XG5cbn07XG5cbmNvbnN0IGhpZGVQYW5lbCA9IGFzeW5jICh7YWN0aXZlUGFuZWwgPSAncmlnaHQtcGFuZWwnfSkgPT4ge1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuXHRcdGlmIChhY3RpdmVQYW5lbCA9PT0gJ2Z1bGwtcGFuZWwnKSB7XG5cblx0XHRcdFR3ZWVuTWF4LnRvKCcjZnVsbC1wYW5lbCcsIDIsIHtcblx0XHRcdFx0eTogd2luZG93Lm91dGVySGVpZ2h0LFxuXHRcdFx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzZWxlY3QodGhpcy50YXJnZXQuc2VsZWN0b3IpXG5cdFx0XHRcdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGhpZGVIb21lQkcoKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vTGVmdCBQYW5lbFxuXHRcdFx0VHdlZW5NYXgudG8oJyNsZWZ0LXBhbmVsJywgMiwge3g6IHdpbmRvdy5vdXRlcldpZHRofSk7XG5cblx0XHRcdC8vUmlnaHQgUGFuZWxcblx0XHRcdFR3ZWVuTWF4LnRvKCcjcmlnaHQtcGFuZWwnLCAyLCB7XG5cdFx0XHRcdHg6IHdpbmRvdy5vdXRlcldpZHRoLFxuXHRcdFx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fVxuXHRcdFxuXHR9KTtcblxufTtcblxuY29uc3Qgc2hvd0hlYWRpbmcgPSAoKSA9PiB7XG5cblx0bGV0IGhlYWRpbmcgPSBzZWxlY3QoJyNtYXAtaGVhZGluZycpO1xuXG5cdGlmIChoZWFkaW5nLmVtcHR5KCkpIHtcblx0XHRoZWFkaW5nID0gc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuXHRcdFx0LmF0dHIoJ2lkJywnbWFwLWhlYWRpbmcnKTtcblx0XHRoZWFkaW5nLmFwcGVuZCgnaDMnKTtcblx0fVxuXG5cdFR3ZWVuTWF4LmZyb21UbygnI21hcC1oZWFkaW5nJywgMiwgXG5cdFx0e2FscGhhOiAwLH0sXG5cdFx0e1xuXHRcdFx0YWxwaGE6IDEsXG5cdFx0XHRvblN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0QWxsKHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcblxuXHRyZXR1cm4gaGVhZGluZztcbn07XG5cbmNvbnN0IGhpZGVIZWFkaW5nID0gKCkgPT4ge1xuXG5cdGNvbnN0IGhlYWRpbmcgPSBzZWxlY3QoJyNtYXAtaGVhZGluZycpO1xuXG5cdGlmICghaGVhZGluZy5lbXB0eSgpKSB7XG5cblx0XHRUd2Vlbk1heC50bygnI21hcC1oZWFkaW5nJywgMSwge1xuXHRcdFx0YWxwaGE6IDAsXG5cdFx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZWN0QWxsKHRoaXMudGFyZ2V0LnNlbGVjdG9yKVxuXHRcdFx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufTtcblxuY29uc3QgdXBkYXRlSGVhZGluZyA9IHRpdGxlID0+IHtcblxuXHRpZiAodGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gJ2Fib3V0JykgdGl0bGUgPSAnJztcblxuXHRsZXQgaGVhZGluZyA9IHNlbGVjdCgnI21hcC1oZWFkaW5nJyk7XG5cdGlmIChoZWFkaW5nLmVtcHR5KCkpIGhlYWRpbmcgPSBzaG93SGVhZGluZygpO1xuXG5cdGhlYWRpbmcuc2VsZWN0KCdoMycpLmh0bWwodGl0bGUpO1xuXG59O1xuXG5jb25zdCB1cGRhdGVQYWdlID0gKGFjdGl2ZVBhbmVsLCB7dGl0bGUsIGNvbnRlbnR9KSA9PiB7XG5cblx0Ly9kb20gbWFuaXB1bGF0aW9uXG5cdGNvbnN0IHBhbmVsID0gc2VsZWN0KGAjJHthY3RpdmVQYW5lbH1gKTtcblx0cGFuZWwuc2VsZWN0KCcudGFnbGluZScpLnNlbGVjdCgnLmZsLWhlYWRpbmctdGV4dCcpLmh0bWwoJycpO1xuXHRwYW5lbC5zZWxlY3QoJyNjbG9zZS1wYW5lbCcpLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpLm9uKCdjbGljaycsIGNsb3NlUGFuZWwpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLXRpdGxlJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCh0aXRsZS5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtY29udGVudCcpLnNlbGVjdCgnLmZsLXJpY2gtdGV4dCcpLmh0bWwoY29udGVudC5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtdGFncycpLnNlbGVjdCgnLmZsLWh0bWwnKS5odG1sKCcnKTtcblx0Y2FwdHVyZUxpbmtzKCk7XG5cblx0dXBkYXRlSGVhZGluZyh0aXRsZS5yZW5kZXJlZCk7XG5cbn07XG5cbmNvbnN0IHVwZGF0ZVBvc3QgPSAoe3RpdGxlLCBjb250ZW50fSwgdGFncywgdGhlbWUpID0+IHtcblxuXHQvL0RPTSBtYW5pcHVsYXRpb25cblx0Y29uc3QgcGFuZWwgPSBzZWxlY3QoJyNyaWdodC1wYW5lbCcpO1xuXG5cdHBhbmVsLnNlbGVjdCgnLnRhZ2xpbmUnKS5zZWxlY3QoJy5mbC1oZWFkaW5nLXRleHQnKS5odG1sKHRoZW1lLnNsdWcpO1xuXHRwYW5lbC5zZWxlY3QoJyNjbG9zZS1wYW5lbCcpLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpLm9uKCdjbGljaycsIGNsb3NlUGFuZWwpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLXRpdGxlJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCh0aXRsZS5yZW5kZXJlZCk7XG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtY29udGVudCcpLnNlbGVjdCgnLmZsLXJpY2gtdGV4dCcpLmh0bWwoY29udGVudC5yZW5kZXJlZCk7XG5cblx0Ly90YWdzXG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtdGFncycpLnNlbGVjdCgnLmZsLWh0bWwnKS5odG1sKCcnKTtcblxuXHRjb25zdCB0YWdzRElWID0gcGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10YWdzJykuc2VsZWN0KCcuZmwtaHRtbCcpXG5cdFx0LmFwcGVuZCgnZGl2Jylcblx0XHQuYXR0cignaWQnLCd0YWctY29udGFpbmVyJyk7XG5cblx0Y29uc3QgdGFnc0hUTUwgPSB0YWdzRElWLnNlbGVjdEFsbCgnLmNpcmNsZScpXG5cdFx0LmRhdGEodGFncyk7XG5cblx0dGFnc0hUTUwuZXhpdCgpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC5yZW1vdmUoKTtcblxuXHR0YWdzSFRNTC5lbnRlcigpLmFwcGVuZCgnZGl2Jylcblx0XHQuYXR0cignaWQnLCB0YWcgPT4gYHRhZy0ke3RhZy5zbHVnfWApXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ3RhZy1waWxsJylcblx0XHQuaHRtbCggdGFnID0+IHtcblx0XHRcdGNvbnN0IGljb24gPSBnZXRJY29uKHRhZyk7XG5cdFx0XHRyZXR1cm4gYCR7aWNvbn0gJHt0YWcubmFtZX1gO1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2NvbG9yJywgJ3N0ZWVsYmx1ZScpO1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZWN0KHRoaXMpLnN0eWxlKCdjb2xvcicsICcjNTM1MzU0Jyk7XG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgZCA9PiB0YWdTZWFyY2goZCkpO1xuXHRcdFxuXHQvL3Jlc2l6ZSB0YWcgaWNvbnNcblx0dGFnc0RJVi5zZWxlY3RBbGwoJy50YWctaWNvbicpXG5cdFx0LmF0dHIoJ3dpZHRoJywnMTVweCcpXG5cdFx0LmF0dHIoJ2hlaWdodCcsJzE1cHgnKTtcblxuXHRjYXB0dXJlTGlua3MoKTtcblxufTtcblxuY29uc3QgY2FwdHVyZUxpbmtzID0gKCkgPT4ge1xuXG5cdHNlbGVjdEFsbCgnYScpXG5cdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Ly9nZXQgdXJsIC8vIGRvbWFpblxuXHRcdFx0Y29uc3QgbGluayA9IHNlbGVjdCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRjb25zdCBkb21haW4gPSBsaW5rLnNwbGl0KCcvJylbMl07XG5cblx0XHRcdC8vVGVzdCBpZiBpdCBpcyBhIGxvY2FsIGxpbmsgKGxvY2FsaG9zdCAtPiByZW1vdGUpXG5cdFx0XHRjb25zdCBob3N0ID0gKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcpID8gJ2xhYnMuZmx1eG8uYXJ0LmJyJyA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcblxuXHRcdFx0Ly9pZiBleHRycm5hbCwgbmF2aWdhdGVcblx0XHRcdGlmIChkb21haW4gIT0gaG9zdCkgcmV0dXJuOyAvL3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxuXG5cdFx0XHQvL2lmIGxvY2FsLCBwcmV2ZW50IHBhZ2UgdXBkYXRlXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvL2xvYWQgcG9zdCBiYXNlZCBvbiBzbHVnIG9uIHRoZSB1cmxcblx0XHRcdGNvbnN0IHNsdWcgPSBsaW5rLnNwbGl0KCcvJylbNF07XG5cblx0XHRcdHNob3dQb3N0KHtzbHVnfSk7XG5cdFx0fSk7XG5cbn07XG5cbmNvbnN0IHNob3dTcGlubmVyID0gKCkgPT4ge1xuXG5cdHNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2Jylcblx0XHQuYXR0cignaWQnLCAnc3Bpbm5lcicpXG5cdFx0Lmh0bWwoJzxkaXYgY2xhc3M9XCJsZHMtcmlwcGxlXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PicpO1xuXG59O1xuXG5jb25zdCBoaWRlU3Bpbm5lciA9ICgpID0+IHNlbGVjdCgnI3NwaW5uZXInKS5yZW1vdmUoKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXRIb21lLFxuXHRjb25maWdNYWluTWVudSxcblx0Y29uZmlnVG9wTWVudSxcblx0c2hvd0hvbWUsXG5cdGhpZGVIb21lLFxuXHRzaG93VG9wTWVudSxcblx0aGlkZVRvcE1lbnUsXG5cdHNob3dIZWFkaW5nLFxuXHRoaWRlSGVhZGluZyxcblx0dXBkYXRlSGVhZGluZyxcblx0c2hvd1BhbmVsLFxuXHRoaWRlUGFuZWwsXG5cdHVwZGF0ZVBhZ2UsXG5cdHVwZGF0ZVBvc3QsXG5cdHNob3dTcGlubmVyLFxuXHRoaWRlU3Bpbm5lclxufTsiLCJpbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7Z2VvVHJhbnNmb3JtLCBnZW9QYXRofSBmcm9tICdkMy1nZW8nO1xuaW1wb3J0IHt0cmFuc2l0aW9ufSBmcm9tICdkMy10cmFuc2l0aW9uJztcbi8vIGltcG9ydCB7c2VsZWN0LCBnZW9UcmFuc2Zvcm0sIGdlb1BhdGh9IGZyb20gJ2QzJztcblxuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9jb250ZW50JztcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZy5qc29uJztcbmltcG9ydCBoaXN0b3JpY2FsUml2ZXIgZnJvbSAnLi9kYXRhL2hpc3RvcmljYWwtcml2ZXIuanNvbic7XG5cblxuY29uc3QgaGlzdG9yaWNhbFJpdmVyU2NhbGUgPSBjaHJvbWEuc2NhbGUoWyd2aW9sZXQnLCdpbmRpZ28nLCdibHVlJywnZ3JlZW4nXSkuZG9tYWluKFsxLDddKTtcblxubGV0IEQzZ2VvUGF0aDtcbmxldCBzdmc7XG5sZXQgZGF0YXNldDtcbmxldCBub2Rlc1BvaW50O1xubGV0IG5vZGVzTGluZTtcbmxldCBub2Rlc1BveWdvbjtcblxubGV0IGN1cnJlbnROb2RlT3ZlcjtcblxuXG5jb25zdCBpbml0ID0gYXN5bmMgY2FudmFzID0+IHtcblxuXHRjb25zdCBEM2dlb1RyYW5zZm9ybSA9IGdlb1RyYW5zZm9ybSh7cG9pbnQ6bWFwLnByb2plY3RQb2ludH0pO1xuXHREM2dlb1BhdGggPSBnZW9QYXRoKCkucHJvamVjdGlvbihEM2dlb1RyYW5zZm9ybSk7XG5cblx0Ly8gT3ZlcmxheSBkMyBvbiB0aGUgbWFwYm94IGNhbnZhc1xuXHRzdmcgPSBzZWxlY3QoY2FudmFzKS5hcHBlbmQoJ3N2ZycpXG5cdFx0LmF0dHIoJ2lkJywgJ21hcC1ib3gtdmlzJylcblx0XHQuYXR0cignaGVpZ2h0JywgJzEwMCUnKTtcblxuXG5cdHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdwb2x5Z29ucy1jb250YWluZXInKTtcblx0c3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ2xpbmVzLWNvbnRhaW5lcicpO1xuXHRzdmcuYXBwZW5kKCdnJykuYXR0cignaWQnLCAncG9pbnRzLWNvbnRhaW5lcicpO1xuXG59O1xuXG5jb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBkYXRhVVJMID0gYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vZGF0YXNldHMvdjEvJHtjb25maWcubWFwYm94LnVzZXJ9LyR7Y29uZmlnLm1hcC5kYXRhc2V0fS9mZWF0dXJlcz9hY2Nlc3NfdG9rZW49JHtjb25maWcubWFwYm94LnRva2VufWA7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVVSTCk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdGRhdGFzZXQgPSBkYXRhLmZlYXR1cmVzO1xuXG5cdGRhdGFzZXQgPSBkYXRhc2V0LmNvbmNhdChoaXN0b3JpY2FsUml2ZXIuZmVhdHVyZXMpO1xuXHRcblx0cmV0dXJuIGRhdGFzZXQ7XG59O1xuXG5jb25zdCBkcmF3Tm9kZXMgPSBhc3luYyAoe3NsdWc6IHRoZW1lfSkgPT4ge1xuXG5cdGlmICghZGF0YXNldCkgYXdhaXQgbG9hZERhdGEoKTtcblxuXHRjb25zdCB0aGVtZU5vZGVzID0gZ2V0VGhlbWVOb2Rlcyh0aGVtZSk7XG5cblx0Y29uc3QgcG9pbnRzID0gdGhlbWVOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpO1xuXHRjb25zdCBsaW5lcyA9IHRoZW1lTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnTGluZVN0cmluZycpO1xuXHRjb25zdCBwb2x5Z29ucyA9IHRoZW1lTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnUG9seWdvbicpO1xuXG5cdGRyYXdQb2x5Z2lucyh7ZGF0YTpwb2x5Z29uc30pO1xuXHRkcmF3TGluZXMoe2RhdGE6bGluZXN9KTtcblx0ZHJhd1BvaW50cyh7ZGF0YTpwb2ludHN9KTtcblxufTtcblxuY29uc3QgZHJhd05vZGVCeVRhZyA9IGFzeW5jICh7bmFtZTogdGFnfSkgPT4ge1xuXG5cdGNvbnN0IHRhZ05vZGVzID0gZ2V0VGFnTm9kZXModGFnKTtcblxuXHRjb25zdCBwb2ludHMgPSB0YWdOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpO1xuXHRjb25zdCBsaW5lcyA9IHRhZ05vZGVzLmZpbHRlcihuID0+IG4uZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmVTdHJpbmcnKTtcblx0Y29uc3QgcG9seWdvbnMgPSB0YWdOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdQb2x5Z29uJyk7XG5cblx0ZHJhd1BvbHlnaW5zKHtkYXRhOnBvbHlnb25zfSk7XG5cdGRyYXdMaW5lcyh7ZGF0YTpsaW5lc30pO1xuXHRkcmF3UG9pbnRzKHtkYXRhOnBvaW50c30pO1xuXG59O1xuXG5jb25zdCBnZXRUaGVtZU5vZGVzID0gdGhlbWUgPT4ge1xuXG5cdGNvbnN0IHNlbGVjdGVkTm9kZXMgPSBkYXRhc2V0LmZpbHRlciggbm9kZSA9PiB7XG5cdFx0aWYobm9kZS5wcm9wZXJ0aWVzLnRoZW1lKSB7XG5cdFx0XHRjb25zdCBub2RldGhlbWVzID0gbm9kZS5wcm9wZXJ0aWVzLnRoZW1lLnNwbGl0KCcsICcpO1xuXHRcdFx0Y29uc3QgdGhlbWVOb2RlID0gbm9kZXRoZW1lcy5maWx0ZXIodCA9PiB0LnRvTG93ZXJDYXNlKCkgPT09IHRoZW1lKTtcblx0XHRcdGlmICh0aGVtZU5vZGUubGVuZ3RoID4gMCkgcmV0dXJuIG5vZGU7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gc2VsZWN0ZWROb2Rlcztcbn07XG5cbmNvbnN0IGdldFRhZ05vZGVzID0gdGFnID0+IHtcblxuXHRjb25zdCBzZWxlY3RlZE5vZGVzID0gZGF0YXNldC5maWx0ZXIoIG5vZGUgPT4ge1xuXHRcdGlmIChub2RlLnByb3BlcnRpZXMudGFnKSB7XG5cdFx0XHRjb25zdCBub2RlVGFncyA9IG5vZGUucHJvcGVydGllcy50YWcuc3BsaXQoJywgJyk7XG5cdFx0XHRjb25zdCB0YWdOb2RlID0gbm9kZVRhZ3MuZmlsdGVyKHQgPT4gdC50b0xvd2VyQ2FzZSgpID09PSB0YWcudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRpZiAodGFnTm9kZS5sZW5ndGggPiAwKSByZXR1cm4gbm9kZTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBzZWxlY3RlZE5vZGVzO1xufTtcblxuY29uc3QgZ2V0Tm9kZUNvb3JkaW5hdGVzID0gYXN5bmMgKHtpZH0pID0+IHtcblxuXHRpZiAoIWRhdGFzZXQpIGF3YWl0IGxvYWREYXRhKCk7XG5cdGNvbnN0IGl0ZW0gPSBkYXRhc2V0LmZpbmQoIGl0ZW0gPT4gaXRlbS5wcm9wZXJ0aWVzLmlkID09PSBpZCApO1xuXG5cdGlmICghaXRlbSkgcmV0dXJuIGNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXI7IC8vIHJldHVybiBjZW50ZXIgb2YgbWFwXG5cblx0aWYgKGl0ZW0uZ2VvbWV0cnkudHlwZSA9PT0gJ1BvaW50JykgcmV0dXJuIGl0ZW0uZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG5cdGlmIChpdGVtLmdlb21ldHJ5LnR5cGUgPT09ICdMaW5lU3RyaW5nJykgcmV0dXJuIGl0ZW0uZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF07XG5cdGlmIChpdGVtLmdlb21ldHJ5LnR5cGUgPT09ICdQb2x5Z29uJykgcmV0dXJuIGl0ZW0uZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF1bMF07XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgZ2V0Q29sb3VycyA9ICgpID0+IHtcblxuXHRjb25zdCB0aGVtZSA9IGNvbnRlbnQuZ2V0Q3VycmVudFRoZW1lKCk7XG5cblx0Y29uc3QgY29sb3JzID0ge1xuXHRcdHJpdmVyOiAnIzAwNzFiYydcblx0fTtcblxuXHRpZiAodGhlbWUuc2x1ZyA9PT0gJ2Vudmlyb25tZW50Jykge1xuXHRcdGNvbG9ycy5maWxsID0gJyNGRkRFMTcnO1xuXHRcdGNvbG9ycy5zdHJva2UgPSAnIzhCNUUzQyc7XG5cdFx0Y29sb3JzLnRleHQgPSAnIzMzMyc7XG5cdH0gZWxzZSBpZiAodGhlbWUuc2x1ZyA9PT0gJ3dhdGVyJykge1xuXHRcdGNvbG9ycy5maWxsID0gJyNmZWZlZmUnO1xuXHRcdGNvbG9ycy5zdHJva2UgPSAnIzY1MmUwMCc7XG5cdFx0Y29sb3JzLnRleHQgPSAnIzMzMyc7XG5cdH0gZWxzZSBpZiAodGhlbWUuc2x1ZyA9PT0gJ3N0ZXBzJykge1xuXHRcdGNvbG9ycy5maWxsID0gJyNGMTVBMjknO1xuXHRcdGNvbG9ycy5zdHJva2UgPSAnI0YxNUEyOSc7XG5cdFx0Y29sb3JzLnRleHQgPSAnI0ZGRic7XG5cdH1cblxuXHRyZXR1cm4gY29sb3JzO1xufTtcblxuY29uc3QgZHJhd1BvaW50cyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gMTAwMCwgZGVsYXlUaW1lID0gMjAwfSkgPT4ge1xuXG5cdGNvbnN0IGNvbG91cnMgPSBnZXRDb2xvdXJzKCk7XG5cdFxuXHRub2Rlc1BvaW50ID0gc3ZnLnNlbGVjdCgnI3BvaW50cy1jb250YWluZXInKS5zZWxlY3RBbGwoJy5jaXJjbGUnKVxuXHRcdC5kYXRhKGRhdGEpO1xuXG5cdG5vZGVzUG9pbnQuZXhpdCgpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5hdHRyKCdyJywgMClcblx0XHQucmVtb3ZlKCk7XG5cblx0bm9kZXNQb2ludC5lbnRlcigpLmFwcGVuZCgnY2lyY2xlJylcblx0XHQuYXR0cignY2xhc3MnLCAnY2lyY2xlJyk7XG5cblx0bm9kZXNQb2ludCA9IHN2Zy5zZWxlY3RBbGwoJy5jaXJjbGUnKVxuXHRcdC5hdHRyKCdpZCcsIGQgPT4gYGluZGV4LSR7ZC5wcm9wZXJ0aWVzLmlkfWApXG5cdFx0LmF0dHIoJ2N4JywgZCA9PiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS54KVxuXHRcdC5hdHRyKCdjeScsIGQgPT4gbWFwLnByb2plY3QoZC5nZW9tZXRyeS5jb29yZGluYXRlcykueSlcblx0XHQuYXR0cigncicsIDApXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgY2hyb21hKGNvbG91cnMuc3Ryb2tlKS5oZXgoKSlcblx0XHQuc3R5bGUoJ2ZpbGwnLCBjaHJvbWEoY29sb3Vycy5maWxsKS5hbHBoYSgwLjcpLmhleCgpKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0Lm9uKCdtb3VzZW92ZXInLCBkID0+IG5vZGVzT3ZlcihkKSlcblx0XHQub24oJ21vdXNlb3V0JywgKCkgPT4gbm9kZXNPdXQoKSlcblx0XHQub24oJ2NsaWNrJywgZCA9PiB7XG5cdFx0XHRyZXNldE5vZGVzU3RhdGUoZCk7XG5cdFx0XHRjb250ZW50LnNob3dQb3N0KGQucHJvcGVydGllcyk7XG5cdFx0fSk7XG5cdFx0XG5cdFxuXHRub2Rlc1BvaW50LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHQuZGVsYXkoKGQsIGkpID0+IGRlbGF5VGltZSAqIGkpXG5cdFx0LmF0dHIoJ3InLCA4KVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG59O1xuXG5jb25zdCBkcmF3TGluZXMgPSAgKHtkYXRhLCB0cmFuc2l0aW9uVGltZSA9IDEwMDAsIGRlbGF5VGltZSA9IDIwMH0pID0+IHtcblxuXHRjb25zdCBjb2xvdXJzID0gZ2V0Q29sb3VycygpO1xuXG5cdG5vZGVzTGluZSA9IHN2Zy5zZWxlY3QoJyNsaW5lcy1jb250YWluZXInKS5zZWxlY3RBbGwoJy5saW5lJylcblx0XHQuZGF0YShkYXRhKTtcblxuXHRub2Rlc0xpbmUuZXhpdCgpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5yZW1vdmUoKTtcblxuXHRub2Rlc0xpbmUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuXHRcdC5hdHRyKCdjbGFzcycsICdsaW5lJyk7XG5cblx0bm9kZXNMaW5lID0gc3ZnLnNlbGVjdEFsbCgnLmxpbmUnKVxuXHRcdC5hdHRyKCdpZCcsIGQgPT4gZC5wcm9wZXJ0aWVzLmlkKVxuXHRcdC5hdHRyKCdkJywgRDNnZW9QYXRoKVxuXHRcdC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMilcblx0XHQuc3R5bGUoJ3N0cm9rZScsIGQgPT4ge1xuXHRcdFx0aWYgKGQucHJvcGVydGllcy5uYW1lID09PSAnU2FpbnQtUGllcnJlIFNwZWN1bGF0aXZlIFJpdmVyJykgcmV0dXJuIGNocm9tYShjb2xvdXJzLnJpdmVyKS5oZXgoKTtcblx0XHRcdGlmIChkLnByb3BlcnRpZXMudHlwZSA9PT0gJ2hpc3RvcmljYWwnKSByZXR1cm4gaGlzdG9yaWNhbFJpdmVyU2NhbGUoZC5wcm9wZXJ0aWVzLmNvbG9yKS5hbHBoYSguOCkuaGV4KCk7XG5cdFx0XHRyZXR1cm4gY2hyb21hKGNvbG91cnMuc3Ryb2tlKS5oZXgoKTtcblx0XHR9KVxuXHRcdC5zdHlsZSgnZmlsbCcsICdub25lJylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC5vbignbW91c2VvdmVyJywgZCA9PiBub2Rlc092ZXIoZCkpXG5cdFx0Lm9uKCdtb3VzZW91dCcsICgpID0+IG5vZGVzT3V0KCkpXG5cdFx0Lm9uKCdjbGljaycsIGQgPT4ge1xuXHRcdFx0Y29uc3QgdGhlbWUgPSBjb250ZW50LmdldEN1cnJlbnRUaGVtZSgpO1xuXHRcdFx0aWYgKGQucHJvcGVydGllcy5uYW1lID09PSAnU2FpbnQtUGllcnJlIFNwZWN1bGF0aXZlIFJpdmVyJyAmJiB0aGVtZS5zbHVnICE9PSAnc3RlcHMnKSByZXR1cm47XG5cdFx0XHRyZXNldE5vZGVzU3RhdGUoZCk7XG5cdFx0XHRjb250ZW50LnNob3dQb3N0KGQucHJvcGVydGllcyk7XG5cdFx0fSk7XG5cblx0bm9kZXNMaW5lLnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHQuZGVsYXkoKGQsIGkpID0+IGRlbGF5VGltZSAqIGkpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cbn07XG5cbmNvbnN0IGRyYXdQb2x5Z2lucyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gMTAwMCwgZGVsYXlUaW1lID0gMjAwfSkgPT4ge1xuXG5cdGNvbnN0IGNvbG91cnMgPSBnZXRDb2xvdXJzKCk7XG5cblx0bm9kZXNQb3lnb24gPSBzdmcuc2VsZWN0KCcjcG9seWdvbnMtY29udGFpbmVyJykuc2VsZWN0QWxsKCcucG9seWdvbnMnKVxuXHRcdC5kYXRhKGRhdGEpO1xuXG5cdG5vZGVzUG95Z29uLmV4aXQoKVxuXHRcdC5hdHRyKCdjbGFzcycsICdleGl0Jylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKDUwMClcblx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgMClcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC5yZW1vdmUoKTtcblxuXHRub2Rlc1BveWdvbi5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ3BvbHlnb25zJyk7XG5cblx0bm9kZXNQb3lnb24gPSBzdmcuc2VsZWN0QWxsKCcucG9seWdvbnMnKVxuXHRcdC5hdHRyKCdpZCcsIGQgPT4gZC5wcm9wZXJ0aWVzLmlkKVxuXHRcdC5hdHRyKCdkJywgRDNnZW9QYXRoKVxuXHRcdC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMilcblx0XHQuc3R5bGUoJ3N0cm9rZScsIGNocm9tYShjb2xvdXJzLnN0cm9rZSkuaGV4KCkpXG5cdFx0LnN0eWxlKCdmaWxsJywgY2hyb21hKGNvbG91cnMuZmlsbCkuYWxwaGEoMC43KS5oZXgoKSlcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC5vbignbW91c2VvdmVyJywgZCA9PiBub2Rlc092ZXIoZCkpXG5cdFx0Lm9uKCdtb3VzZW91dCcsICgpID0+IG5vZGVzT3V0KCkpXG5cdFx0Lm9uKCdjbGljaycsIGQgPT4ge1xuXHRcdFx0cmVzZXROb2Rlc1N0YXRlKGQpO1xuXHRcdFx0Y29udGVudC5zaG93UG9zdChkLnByb3BlcnRpZXMpO1xuXHRcdH0pO1xuXG5cdG5vZGVzUG95Z29uLnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHQuZGVsYXkoKGQsIGkpID0+IGRlbGF5VGltZSAqIGkpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cbn07XG5cbmNvbnN0IG5vZGVzVXBkYXRlID0gKCkgPT4ge1xuXHRcblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50LmF0dHIoJ2N4JywgZCA9PiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS54KVxuXHRcdFx0LmF0dHIoJ2N5JywgZCA9PiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS55KTtcblx0fVxuXG5cdGlmIChub2Rlc0xpbmUpIG5vZGVzTGluZS5hdHRyKCdkJywgRDNnZW9QYXRoKTtcblx0aWYgKG5vZGVzUG95Z29uKSBub2Rlc1BveWdvbi5hdHRyKCdkJywgRDNnZW9QYXRoKTtcblx0XG59O1xuXG5jb25zdCBjYWxsVG9vbHRpcCA9IGQgPT4ge1xuXG5cdGNvbnN0IGNvbG91cnMgPSBnZXRDb2xvdXJzKCk7XG5cblx0bGV0IHBvc2l0aW9uO1xuXG5cdGlmIChkLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpIHBvc2l0aW9uID0gZC5nZW9tZXRyeS5jb29yZGluYXRlcztcblx0aWYgKGQuZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmVTdHJpbmcnKSBwb3NpdGlvbiA9IGQuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF07XG5cdGlmIChkLmdlb21ldHJ5LnR5cGUgPT09ICdQb2x5Z29uJykgcG9zaXRpb24gPSBkLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdWzBdO1xuXG5cdGNvbnN0IHBvc1ggPSBtYXAucHJvamVjdChwb3NpdGlvbikueDtcblx0Y29uc3QgcG9zWSA9IG1hcC5wcm9qZWN0KHBvc2l0aW9uKS55O1xuXG5cdGNvbnN0IG1hcmdpbnMgPSAxMDtcblx0Y29uc3QgeU9mZnNldCA9IDI1O1xuXG5cdGNvbnN0IHRvb2x0aXAgPSBzdmcuYXBwZW5kKCdnJylcblx0XHQuYXR0cignY2xhc3MnLCd0b29sdGlwJylcblx0XHQuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3Bvc1h9LCR7cG9zWX0pYCk7XG5cblx0Y29uc3QgcmVjdCA9IHRvb2x0aXAuYXBwZW5kKCdyZWN0Jylcblx0XHQuc3R5bGUoJ3N0cm9rZScsICgpID0+IGNocm9tYShjb2xvdXJzLnN0cm9rZSkuaGV4KCkpXG5cdFx0LnN0eWxlKCdmaWxsJywgKCkgPT4gY2hyb21hKGNvbG91cnMuZmlsbCkuYWxwaGEoMC43KS5oZXgoKSk7XG5cdFx0XG5cdHRvb2x0aXAuYXBwZW5kKCd0ZXh0Jylcblx0XHQuYXR0cigneScsLXlPZmZzZXQpXG5cdFx0LnN0eWxlKCd0ZXh0LWFuY2hvcicsJ21pZGRsZScpXG5cdFx0LnN0eWxlKCdmaWxsJywgY2hyb21hKGNvbG91cnMudGV4dCkuaGV4KCkpXG5cdFx0LnRleHQoZC5wcm9wZXJ0aWVzLm5hbWUpO1xuXG5cdFxuXHRjb25zdCB0b29sdGlwU2l6ZSA9IHRvb2x0aXAubm9kZSgpLmdldEJCb3goKTtcblxuXHRjb25zdCB0dFBvc2l0aW9uID0ge1xuXHRcdHg6ICgtdG9vbHRpcFNpemUud2lkdGggLyAyKSAtIG1hcmdpbnMsXG5cdFx0eTogLXRvb2x0aXBTaXplLmhlaWdodCAtIHlPZmZzZXQsXG5cdFx0d2lkdGg6IHRvb2x0aXBTaXplLndpZHRoICsgKDIqbWFyZ2lucyksXG5cdFx0aGVpZ2h0OiB0b29sdGlwU2l6ZS5oZWlnaHQgKyAobWFyZ2lucylcblx0fTtcblxuXHRyZWN0LmF0dHIoJ3gnLCB0dFBvc2l0aW9uLngpXG5cdFx0LmF0dHIoJ3knLCAgdHRQb3NpdGlvbi55KVxuXHRcdC5hdHRyKCd3aWR0aCcsICB0dFBvc2l0aW9uLndpZHRoKVxuXHRcdC5hdHRyKCdoZWlnaHQnLCAgdHRQb3NpdGlvbi5oZWlnaHQpO1xufTtcblxuY29uc3Qgbm9kZXNPdmVyID0gY3VycmVudCA9PiB7XG5cblx0Y2FsbFRvb2x0aXAoY3VycmVudCk7XG5cblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50XG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCBkID0+IHtcblx0XHRcdFx0aWYgKGQgIT09IGN1cnJlbnQpIHJldHVybiAwLjU7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCBkID0+IHtcblx0XHRcdFx0aWYgKGQgPT09IGN1cnJlbnQpIHJldHVybiAzO1xuXHRcdFx0fSk7XG5cblx0fVxuXG5cdGlmIChub2Rlc0xpbmUpIHtcblx0XHRub2Rlc0xpbmVcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIGQgPT4ge1xuXHRcdFx0XHRpZiAoY3VycmVudC5wcm9wZXJ0aWVzLmNvbG9yICYmIGQucHJvcGVydGllcy5jb2xvciA9PT0gY3VycmVudC5wcm9wZXJ0aWVzLmNvbG9yKSByZXR1cm47XG5cdFx0XHRcdGlmIChkLnByb3BlcnRpZXMubmFtZSAhPT0gY3VycmVudC5wcm9wZXJ0aWVzLm5hbWUpIHJldHVybiAwLjU7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCBkID0+IHtcblx0XHRcdFx0aWYgKGN1cnJlbnQucHJvcGVydGllcy5jb2xvciAmJiBkLnByb3BlcnRpZXMuY29sb3IgPT09IGN1cnJlbnQucHJvcGVydGllcy5jb2xvcikgcmV0dXJuIDM7XG5cdFx0XHRcdGlmIChkLnByb3BlcnRpZXMubmFtZSA9PT0gY3VycmVudC5wcm9wZXJ0aWVzLm5hbWUpIHJldHVybiAzO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpZiAobm9kZXNQb3lnb24pIHtcblx0XHRub2Rlc1BveWdvblxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgZCA9PiB7XG5cdFx0XHRcdGlmIChkICE9PSBjdXJyZW50KSByZXR1cm4gMC41O1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZCA9PiB7XG5cdFx0XHRcdGlmIChkID09PSBjdXJyZW50KSByZXR1cm4gMztcblx0XHRcdH0pO1xuXHR9XG5cbn07IFxuXG5jb25zdCBub2Rlc091dCA9ICgpID0+IHtcblxuXHRzdmcuc2VsZWN0KCcudG9vbHRpcCcpLnJlbW92ZSgpO1xuXG5cdGlmIChub2Rlc1BvaW50KSB7XG5cdFx0bm9kZXNQb2ludC5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIpO1xuXHR9XG5cdGlmIChub2Rlc0xpbmUpIHtcblx0XHRub2Rlc0xpbmUuc3R5bGUoJ29wYWNpdHknLCAxKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKTtcblx0fVxuXHRpZiAobm9kZXNQb3lnb24pIHtcblx0XHRub2Rlc1BveWdvbi5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIpO1xuXHR9XG5cbn07XG5cbmV4cG9ydCBjb25zdCByZXNldE5vZGVzU3RhdGUgPSAoe3RyYW5zaXRpb25UaW1lID0gMjAwMCwgZGVsYXlUaW1lID0gMTAwfSkgPT4ge1xuXG5cdGlmIChub2Rlc1BvaW50KSB7XG5cdFx0bm9kZXNQb2ludC50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHRcdC5kZWxheShkZWxheVRpbWUpXG5cdFx0XHQuYXR0cigncicsIDgpO1xuXHR9XG5cblx0aWYgKG5vZGVzTGluZSkge1xuXHRcdG5vZGVzTGluZS50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHRcdC5kZWxheShkZWxheVRpbWUpXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDQpO1xuXHR9XG5cblx0aWYgKG5vZGVzUG95Z29uKSB7XG5cdFx0bm9kZXNQb3lnb24udHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0XHQuZGVsYXkoZGVsYXlUaW1lKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKTtcblx0fVxuXG59O1xuXG5jb25zdCBzZXRDdXJyZW50Tm9kZSA9ICh7aWR9KSA9PiB7XG5cblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0XHQuYXR0cigncicsIGQgPT4ge1xuXHRcdFx0XHRpZiAoZC5wcm9wZXJ0aWVzLmlkID09PSBpZCkgcmV0dXJuIDE2O1xuXHRcdFx0XHRyZXR1cm4gODtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0fVxuXG5cdGlmIChub2Rlc0xpbmUpIHtcblx0XHRub2Rlc0xpbmUudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oMzAwMClcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZCA9PiB7XG5cdFx0XHRcdGlmIChkLnByb3BlcnRpZXMuaWQgPT09IGlkKSByZXR1cm4gODtcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cdH1cblxuXHRpZiAobm9kZXNQb3lnb24pIHtcblx0XHRub2Rlc1BveWdvbi50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbigzMDAwKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCBkID0+IHtcblx0XHRcdFx0aWYgKGQucHJvcGVydGllcy5pZCA9PT0gaWQpIHJldHVybiA4O1xuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0fVxuXHRcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpbml0LFxuXHRkcmF3Tm9kZXMsXG5cdGRyYXdOb2RlQnlUYWcsXG5cdG5vZGVzVXBkYXRlLFxuXHRnZXROb2RlQ29vcmRpbmF0ZXMsXG5cdHNldEN1cnJlbnROb2RlLFxuXHRyZXNldE5vZGVzU3RhdGVcbn07IiwiaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG4vLyBpbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsJztcblxuaW1wb3J0IGdlb2RhdGEgZnJvbSAnLi9nZW9kYXRhJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcuanNvbic7XG5cblxuY29uc3QgbWFwQm94Q29uZmlnID0ge1xuXHRjb250YWluZXI6ICdtYXAnLFxuXHRzdHlsZTogYG1hcGJveDovL3N0eWxlcy8ke2NvbmZpZy5tYXBib3gudXNlcn0vJHtjb25maWcubWFwLmRlZmF1bHQuc3R5bGVJRH1gLFxuXHRjZW50ZXI6IGNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXIsIC8vY2VudGVyIGluIE1vbnRyZWFsXG5cdHpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC56b29tLFxuXHRwaXRjaDogY29uZmlnLm1hcC5kZWZhdWx0LnBpdGNoLFxuXHRtaW5ab29tOiBjb25maWcubWFwLmRlZmF1bHQubWluWm9vbSxcblx0bWF4Wm9vbTogY29uZmlnLm1hcC5kZWZhdWx0Lm1heFpvb20sXG5cdG1heEJvdW5kczogY29uZmlnLm1hcC5kZWZhdWx0Lm1heEJvdW5kcyxcblx0aW50ZXJhY3RpdmU6IHRydWUsXG59O1xuXG5sZXQgbWFwYm94Z2w7XG5sZXQgbWFwYm94O1xuXG5cbmNvbnN0IGluaXQgPSBhc3luYyAoe21hcElELCBsb2NhdGlvbn0pID0+IHtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoIGFzeW5jIHJlc29sdmUgPT4ge1xuXG5cdFx0Ly9tYXAgY29udGFpbmVyIHNldCBvbiBXUCA+IEJlYXZlclxuXHRcdHNlbGVjdCgnI2FwcCcpLnNlbGVjdCgnOmZpcnN0LWNoaWxkJylcblx0XHRcdC5hcHBlbmQoJ2RpdicpXG5cdFx0XHQuYXR0cignaWQnLCAnbWFwJyk7XG5cblx0XHRpZiAobG9jYXRpb24gPT09ICc0MDQnKSBzZXRVbmtub3dMb2NhdGlvbigpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLzQwNDogY2VudGVyIHRoZSBtYXAgYW55d2hlcmUgaW4gdGhlIGdsb2JlXG5cblx0XHRpZiAobWFwSUQpIG1hcEJveENvbmZpZy5zdHlsZSA9IGBtYXBib3g6Ly9zdHlsZXMvJHtjb25maWcubWFwYm94LnVzZXJ9LyR7bWFwSUR9YDtcdFx0Ly9pZiBkZWVwbGluazogc2V0IG1hcCBzdHlsZVxuXG5cdFx0YXdhaXQgbG9hZE1hcEJveEdMKClcblxuXHRcdC8vIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gY29uZmlnLm1hcGJveC50b2tlbjtcblx0XHRtYXBib3hnbC5kZWZhdWx0LmFjY2Vzc1Rva2VuID0gY29uZmlnLm1hcGJveC50b2tlbjtcblx0XHRtYXBib3ggPSBuZXcgbWFwYm94Z2wuTWFwKG1hcEJveENvbmZpZyk7XG5cblx0XHRtYXBib3gub24oJ2xvYWQnLCAoKSA9PiB7XG5cblx0XHRcdGdlb2RhdGEuaW5pdChtYXBib3guZ2V0Q2FudmFzQ29udGFpbmVyKCkpO1xuXG5cdFx0XHRtYXBib3gub24oJ3ZpZXdyZXNldCcsIHVwZGF0ZSk7XG5cdFx0XHRtYXBib3gub24oJ21vdmUnLCB1cGRhdGUpO1xuXHRcdFx0bWFwYm94Lm9uKCdtb3ZlZW5kJywgdXBkYXRlKTtcblxuXHRcdFx0aWYgKGxvY2F0aW9uID09PSAnNDA0JykgZmx5RnJvbVVua25vd0xvY2F0aW9uKCk7XG5cdFx0XHRcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9KTtcblx0XHRcblx0fSk7XG5cbn07XG5cbmNvbnN0IGxvYWRNYXBCb3hHTCA9IGFzeW5jICgpID0+IHtcblx0aWYoIW1hcGJveGdsKSBtYXBib3hnbCA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1hcGJveC1nbFwiICovICdtYXBib3gtZ2wnKTtcbn07XG5cbi8vY2hlY2sgaWYgbWFwIGlzIGxvYWRlZFxuY29uc3QgaXNNYXBib3hMb2FkZWQgPSAoKSA9PiAge1xuXHRpZiAobWFwYm94KSByZXR1cm4gbWFwYm94LmlzU3R5bGVMb2FkZWQoKTtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuLy9jaGFuZ2UgbWFwIHN0eWxlXG5jb25zdCBjaGFuZ2VNYXAgPSAoe21hcElEfSkgPT4gbWFwYm94LnNldFN0eWxlKGBtYXBib3g6Ly9zdHlsZXMvJHtjb25maWcubWFwYm94LnVzZXJ9LyR7bWFwSUR9YCk7XG5cbi8vIFByb2plY3QgR2VvSlNPTiBjb29yZGluYXRlIHRvIHRoZSBtYXAncyBjdXJyZW50IHN0YXRlXG5jb25zdCBwcm9qZWN0ID0gZCA9PiBtYXBib3gucHJvamVjdChuZXcgbWFwYm94Z2wuTG5nTGF0KCtkWzBdLCArZFsxXSkpO1xuXG4vLyBQcm9qZWN0IEdlb0pTT04gY29vcmRpbmF0ZSB0byB0aGUgbWFwJ3MgY3VycmVudCBzdGF0ZVxuY29uc3QgcHJvamVjdFBvaW50ID0gZnVuY3Rpb24gKGxvbiwgbGF0KSB7XG5cdGxldCBwb2ludCA9IG1hcGJveC5wcm9qZWN0KG5ldyBtYXBib3hnbC5MbmdMYXQobG9uLCBsYXQpKTtcblx0dGhpcy5zdHJlYW0ucG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG59O1xuXG4vL3VwZGF0ZVxuY29uc3QgdXBkYXRlID0gKCkgPT4gZ2VvZGF0YS5ub2Rlc1VwZGF0ZSgpO1xuXG5jb25zdCBzZXRVbmtub3dMb2NhdGlvbiA9IGFzeW5jICgpID0+IHtcblxuXHQvL2FueXdoZXJlIGluIHRoZSBnbG9iZVxuXHRjb25zdCBsYXQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxODApIC0gOTA7XG5cdGNvbnN0IGxvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2MCkgLSAxODA7XG5cblx0bWFwQm94Q29uZmlnLnpvb20gPSA1O1xuXHRtYXBCb3hDb25maWcuY2VudGVyID0gW2xvbixsYXRdO1xuXHRtYXBCb3hDb25maWcubWF4Qm91bmRzID0gbnVsbDtcblxufTtcblxuY29uc3QgZmx5RnJvbVVua25vd0xvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuXG5cdG1hcGJveC5mbHlUbyh7XG5cdFx0Y2VudGVyOiBjb25maWcubWFwLmRlZmF1bHQuY2VudGVyLFxuXHRcdHpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC56b29tLFxuXHRcdHNwZWVkOiAxLFxuXHRcdGN1cnZlOiAxLFxuXHRcdG1pblpvb206IDMsXG5cdFx0ZWFzaW5nOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfVxuXHR9KTtcblxuXHRtYXBib3gub24oJ21vdmVlbmQnLCAoKSA9PiB7XG5cdFx0aWYgKG1hcGJveC5nZXRNYXhCb3VuZHMoKSA9PT0gbnVsbCkgbWFwYm94LnNldE1heEJvdW5kcyhjb25maWcubWFwLmRlZmF1bHQubWF4Qm91bmRzKTtcblx0fSk7XG5cbn07XG5cbmNvbnN0IGZseVRvID0gY29vcmRpbmF0ZXMgPT4ge1xuXG5cdGlmKG1hcGJveCkge1xuXHRcdG1hcGJveC5mbHlUbyh7XG5cdFx0XHRjZW50ZXI6Y29vcmRpbmF0ZXMsXG5cdFx0XHR6b29tOiAxNyxcblx0XHRcdHNwZWVkOiAxLFxuXHRcdFx0Y3VydmU6IDEsXG5cdFx0XHRlYXNpbmc6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9XG5cdFx0fSk7XG5cdH1cblxufTtcblxuY29uc3QgZmx5VG9PcmlnaW4gPSAoKSA9PiB7XG5cblx0aWYobWFwYm94KSB7XG5cdFx0bWFwYm94LmZseVRvKHtcblx0XHRcdGNlbnRlcjpjb25maWcubWFwLmRlZmF1bHQuY2VudGVyLFxuXHRcdFx0em9vbTogY29uZmlnLm1hcC5kZWZhdWx0Lnpvb20gKyAwLjIsXG5cdFx0XHRzcGVlZDogMS4yLFxuXHRcdFx0Y3VydmU6IDEsXG5cdFx0XHRlYXNpbmc6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9XG5cdFx0fSk7XG5cdH1cblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXQsXG5cdHVwZGF0ZSxcblx0aXNNYXBib3hMb2FkZWQsXG5cdGNoYW5nZU1hcCxcblx0cHJvamVjdCxcblx0cHJvamVjdFBvaW50LFxuXHRmbHlUbyxcblx0Zmx5VG9PcmlnaW5cbn07XG4iLCJpbXBvcnQgY29udGFtaW5hdGlvbiBmcm9tICcuL2Fzc2V0cy9iaW9oYXphcmQuc3ZnJztcbmltcG9ydCBpbmZyYXN0cnVjdHVyZXMgZnJvbSAnLi9hc3NldHMvY29uZS5zdmcnO1xuaW1wb3J0IHNwZWN1bGF0aXZlIGZyb20gJy4vYXNzZXRzL2hlbHAuc3ZnJztcbmltcG9ydCBkaXNyZWFwcGVhcmluZ1dhdGVycyBmcm9tICcuL2Fzc2V0cy9zZWEuc3ZnJztcbmltcG9ydCBnaG9zdCBmcm9tICcuL2Fzc2V0cy9zbmFwY2hhdC5zdmcnO1xuaW1wb3J0IGJleW9uZEh1bWFucyBmcm9tICcuL2Fzc2V0cy9zbmFrZS5zdmcnO1xuaW1wb3J0IGltYWdpbmFyaWVzIGZyb20gJy4vYXNzZXRzL3Rob3VnaHQtYnViYmxlLnN2Zyc7XG5pbXBvcnQgdW5ydWx5V2F0ZXJzIGZyb20gJy4vYXNzZXRzL3RzdW5hbWkuc3ZnJztcblxuXG5leHBvcnQgY29uc3QgZ2V0SWNvbiA9ICh7c2x1Z30pID0+IHtcblx0XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT09ICdnaG9zdHMnKSByZXR1cm4gZ2hvc3Q7XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT09ICdiZXlvbmQtaHVtYW5zJykgcmV0dXJuIGJleW9uZEh1bWFucztcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRhbWluYXRpb24nKSByZXR1cm4gY29udGFtaW5hdGlvbjtcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PT0gJ2Rpc3JlYXBwZWFyaW5nd2F0ZXJzJykgcmV0dXJuIGRpc3JlYXBwZWFyaW5nV2F0ZXJzO1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09PSAnaW5mcmFzdHJ1Y3R1cmUnKSByZXR1cm4gaW5mcmFzdHJ1Y3R1cmVzO1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09PSAnaW1hZ2luYXJpZXMnKSByZXR1cm4gaW1hZ2luYXJpZXM7XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT09ICdzcGVjdWxhdGlvbicpIHJldHVybiBzcGVjdWxhdGl2ZTtcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PT0gJ3VucnVsbHl3YXRlcnMnKSByZXR1cm4gdW5ydWx5V2F0ZXJzO1xuXHRcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRJY29uXG59OyJdLCJzb3VyY2VSb290IjoiIn0=