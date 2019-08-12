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
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");


const host = 'http://localhost:8888'; //'http://localhost:8888'; // http://labs.fluxo.art.br
const rootPath = '/ghost-river/';


const loadDeepLink = async slug => {

	_content__WEBPACK_IMPORTED_MODULE_0__["default"].changeBrowserHistory({slug});					//change URL Bar

	let theme = _content__WEBPACK_IMPORTED_MODULE_0__["default"].getThemeBySlug(slug);				//get theme based on the search parameters

	//if search match to theme (page)
	if (theme) {											
		await _content__WEBPACK_IMPORTED_MODULE_0__["default"].showPage(theme);						//load the theme page
		return;
	}

	//try to load a post based on search parameters
	const post = await _content__WEBPACK_IMPORTED_MODULE_0__["default"].showPost({slug});			

	//if no page/post found: load home with 404
	if (!post) goHome({location: '404'});

};

const goHome = async data => {
	_content__WEBPACK_IMPORTED_MODULE_0__["default"].changeBrowserHistory({slug: rootPath});
	_content__WEBPACK_IMPORTED_MODULE_0__["default"].initHome(data);
};
 
( async () => {		

	//test if url is trying to reach a deeplink		
	if (window.location.pathname !== rootPath) {								
		const deepLink = window.location.pathname.split('/')[2]; 	//get path after the '/' as deeplink
		location = `${host}${rootPath}?node=${deepLink}`;			//naviate to root with deeplink as a search parameters
		return;
	}

	//test if url is searching for deeplink
	if (window.location.search) {																				
		const url = new URL(window.location.href);					//get utl		
		const slug = url.searchParams.get('node');					//get the params for search (a slug for a page or post)
		loadDeepLink(slug);
		return;
	}

	//Go Home
	goHome({location: 'home'});

})();


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

module.exports = JSON.parse("{\"map\":{\"default\":{\"styleID\":\"cjxzbs7nf0a4b1cowp80tsndy\",\"center\":[-73.56,45.465],\"zoom\":11.5,\"pitch\":0,\"maxZoom\":17,\"maxBounds\":[[-73.81,45.35],[-73.34,45.58]]},\"dataset\":\"cjxdpkggs01gi2os0srxdx837\"},\"mapbox\":{\"user\":\"saintpierremapping\",\"token\":\"pk.eyJ1Ijoic2FpbnRwaWVycmVtYXBwaW5nIiwiYSI6ImNqdDBpOXo4aDBkYmk0Nm5wMTU0MzhxcWcifQ.tH1TZXEMh4KOnahRKRl_BA\"},\"wordpress\":{\"local\":{\"endpoint\":\"http://localhost:8888/ghost-river/wp-json/\"},\"remote\":{\"endpoint\":\"http://labs.fluxo.art.br/ghost-river/wp-json/\"}}}");

/***/ }),

/***/ "./src/config/themes.json":
/*!********************************!*\
  !*** ./src/config/themes.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"Home\",\"slug\":\"home\",\"mapID\":\"cjxzbs7nf0a4b1cowp80tsndy\",\"state\":\"home\"},{\"id\":56,\"name\":\"About\",\"slug\":\"about\",\"mapID\":\"cjybs9tuv1gnl1clpln0s5vq9\",\"state\":\"page\"},{\"id\":114,\"name\":\"Environment\",\"slug\":\"environment\",\"mapID\":\"cjtf3qpso03kh1fkvzo8dd4xk\",\"state\":\"page\"},{\"id\":118,\"name\":\"Steps\",\"slug\":\"steps\",\"mapID\":\"cjtg0c42v0w5x1fqlf1rmfs76\",\"state\":\"page\"},{\"id\":116,\"name\":\"Water\",\"slug\":\"water\",\"mapID\":\"cjuee51b92imr1fpof8u119ws\",\"state\":\"page\"}]");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: showPage, showPost, closePanel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPage", function() { return showPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPost", function() { return showPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePanel", function() { return closePanel; });
/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wpapi */ "./node_modules/wpapi/wpapi.js");
/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wpapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _geodata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geodata */ "./src/geodata.js");
/* harmony import */ var _contentHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contentHTML */ "./src/contentHTML.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
/* harmony import */ var _config_themes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/themes.json */ "./src/config/themes.json");
var _config_themes_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/themes.json */ "./src/config/themes.json", 1);










const wp = new wpapi__WEBPACK_IMPORTED_MODULE_0___default.a({endpoint: _config_config_json__WEBPACK_IMPORTED_MODULE_4__.wordpress.remote.endpoint});

let theme;
let currentNode;


const initHome = ({location}) => {
	_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].initHome();
	updateMap({location});
};

const showPage = async ({id, slug}) => {

	await setTheme(slug);

	if (theme.isNew) updateMap(theme);

	// map.pitchMap();

	if (id == 0) {
		changeBrowserHistory({slug: '/ghost-river/'});
		return;
	}

	// console.log(theme.id, id);
		
	const pageData = await loadPage({id, slug});
	// console.log(pageData);

	currentNode = null;
	
	_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].updatePage(pageData);
	
	//show panel
	_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showPanel({
		direction: 'down',
		delay: 0
	});

	changeBrowserHistory({
		title: pageData.title.rendered,
		slug: pageData.slug
	});

	return pageData;
	
};

const loadPage = async ({id, slug}) => {
	let pageData;

	if (id) {
		pageData = await wp.pages().id(id).embed();
	} else if (slug) {
		pageData = await wp.pages().slug(slug).embed();
		pageData = pageData[0];
	}

	return pageData;
};

const showPost = async ({id, slug}) => {

	if (currentNode && currentNode.id == id) return;

	await _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({direction: 'up'});

	_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showSpinner();

	//postData - load by ID or by Slug
	const postData = await loadPost({id,slug});
	// console.log(postData);
	if (!postData) {
		_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideSpinner();
		return;
	}

	currentNode = postData;

	const postCategories = postData._embedded['wp:term'][0];
	const postTags = postData._embedded['wp:term'][1];

	let postTheme;
	if (theme) postTheme = postCategories.find(cat => cat.slug == theme.slug);

	if (!postTheme) {
		if (postCategories.length > 1) {
			const themePost = Math.floor(Math.random() * postCategories.length);
			postTheme = postCategories[themePost];
		} else {
			postTheme = postCategories[0];
		}
	}
	
	if(postTheme.slug == 'uncategorized') console.log('Problem with category "uncategorized": ', postData);

	setTheme(postTheme.slug);
	if (theme.isNew) await updateMap(theme);

	//fly to local
	_geodata__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentNode(postData);
	const coordinates = await _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].getNodeCoordinates(postData);
	_map__WEBPACK_IMPORTED_MODULE_1__["default"].flyTo(coordinates);
	
	_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].updatePost(postData,postTags,theme);

	_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideSpinner();

	//show Panel
	_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showPanel({
		direction: 'down',
		delay: 0
	});

	changeBrowserHistory({
		title: postData.title.rendered,
		slug: postData.slug
	});

	return {
		post: postData,
		theme: postTheme
	};

};

const loadPost = async ({id, slug}) => {

	let postData;

	if (id) {
		postData = await wp.posts().id(id).embed();
	} else if (slug) {
		postData = await wp.posts().slug(slug).embed();
		postData = postData[0];
	}

	return postData;
};

const closePanel = async () => {
	await await _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({direction: 'up'});
	currentNode = null;
	return currentNode;
};


const setTheme = async requestedThemeSlug => {

	if (!theme) theme = {};

	theme.isNew = false;
	
	if(theme.slug != requestedThemeSlug) {
		const requestedTheme = getThemeBySlug(requestedThemeSlug);
		changeState(requestedTheme.state);
		theme = requestedTheme;
		theme.isNew = true;
	}

	if (theme.slug != 'home') {
		await _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({direction: 'up'});
	}
	
	return theme;
};

const getThemeBySlug = slug => _config_themes_json__WEBPACK_IMPORTED_MODULE_5__.find( theme => theme.slug === slug );
const getCurrentTheme = () => theme;

const changeState = async newState => {

	if (newState != theme.state) {
		if (newState === 'home') {
			_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideTopMenu();
			await _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({direction: 'up'});
			_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showHome();
		} else if (newState === 'page') {
			_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideHome();
			_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showTopMenu();
		}
	}
	
};

const updateMap = async ({location}) => {

	if (!theme) theme = _config_themes_json__WEBPACK_IMPORTED_MODULE_5__[0];

	if(!_map__WEBPACK_IMPORTED_MODULE_1__["default"].isMapboxLoaded()) {
		if (location === '404') {
			await _map__WEBPACK_IMPORTED_MODULE_1__["default"].init({location});
		} else {
			await _map__WEBPACK_IMPORTED_MODULE_1__["default"].init(theme);
		}
		
	} else {
		await _map__WEBPACK_IMPORTED_MODULE_1__["default"].changeMap(theme);
	}

	await _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].drawNodes(theme);
};

const changeBrowserHistory = ({title,slug}) => {
	let pageTitle = 'Ghost River';
	if (title) pageTitle += ` - ${title}`;

	document.title = pageTitle;
	window.history.pushState(
		{pageTitle},
		'',
		slug);
};


/* harmony default export */ __webpack_exports__["default"] = ({
	initHome,
	showPage,
	showPost,
	closePanel,
	getCurrentTheme,
	getThemeBySlug,
	changeBrowserHistory,
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






const animation = {
	duration: {
		in: 3000,
		out: 2000
	}
};

let mainMenu = false;
let topMenu = false;

const initHome = () => {

	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#home-text')
		.style('opacity', 0)
		.style('display', 'block')
		.transition()
		.delay(0) //3000
		// .duration(0)
		.duration(animation.duration.in)
		.style('opacity', 1);

	let delay = 0; //8000
	
	for (const theme of _config_themes_json__WEBPACK_IMPORTED_MODULE_2__) {

		Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(`#main-${theme.slug}-bt`)
			.style('opacity', 0)
			.style('display', 'block')
			.transition()
			.delay(delay)
			.duration(animation.duration.in)
			.style('opacity', 1);

		delay += 1000;
	}

	configMainMenu();

};

const configMainMenu = () => {
	if (mainMenu == false) {
		for (const theme of _config_themes_json__WEBPACK_IMPORTED_MODULE_2__) {
			Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(`#main-${theme.slug}-bt`)
				.on('click', () => Object(_content__WEBPACK_IMPORTED_MODULE_1__["showPage"])(theme));
		}
		mainMenu = true;
	}
};

const configTopMenu = () => {
	if (topMenu == false) {
		for (const theme of _config_themes_json__WEBPACK_IMPORTED_MODULE_2__) {
			Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(`#top-${theme.slug}-bt`)
				.style('cursor', 'pointer')
				.on('click', () => Object(_content__WEBPACK_IMPORTED_MODULE_1__["showPage"])(theme));
				
		}
		topMenu = true;
	}
};

const showHome = () => {

	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#header-col')
		.style('display', 'block')
		.transition()
		.delay(1000)
		.duration(animation.duration.in)
		.style('opacity', 1)
		.style('margin-top', '0px');

	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('.col-main-menu')
		.style('opacity', 0)
		.style('display', 'block')
		.transition()
		.delay(1000)
		.duration(3000)
		.style('opacity', 1)
		.style('margin-top', '0px');

	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#home-text')
		.style('display', 'block')
		.style('opacity', 1);

	for (const theme of _config_themes_json__WEBPACK_IMPORTED_MODULE_2__) {
		Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(`#main-${theme.slug}-bt`)
			.style('display', 'block')
			.style('opacity', 1);
	}

	configMainMenu();

};

const hideHome = () => {
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#header-col')
		.transition()
		.duration(3000)
		.style('opacity', 0)
		.style('margin-top', '-500px')
		.on('end', function () {
			Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
		});

	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('.col-main-menu')
		.transition()
		.duration(3000)
		.style('opacity', 0)
		.style('margin-top', '-200px')
		.on('end', function () {
			Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
		});
};

const showTopMenu = () => {
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#top-menu')
		.style('opacity', 0)
		.style('top', -200)
		.style('display', 'block')
		.transition()
		.delay(3000)
		.duration(2000)
		.style('opacity', 1)
		.style('top', 0);

	configTopMenu();
};

const hideTopMenu = () => {
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#top-menu')
		.transition()
		.delay(0)
		.duration(2000)
		.style('opacity', 0)
		.style('top', -200)
		.on('end', function () {
			Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
		});
};

const showPanel = ({direction = 'none', delay = 0}) => {

	if (direction == 'none') {
		direction = '0px';
	} else if (direction == 'up') {
		direction = '-2000px';
	} else if (direction == 'down') {
		direction = '2000px';
	}

	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#left-panel')
		.style('opacity', 0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(animation.duration.in)
		.style('opacity', 0)
		.style('margin-top', '0px');

	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#middle-panel')
		.style('opacity', 0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(animation.duration.in)
		.style('opacity', 0)
		.style('margin-top', '0px');

	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel')
		.style('opacity', 0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(animation.duration.in)
		.style('opacity', 1)
		.style('margin-top', '0px');

	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').select('.fl-col-content').property('scrollTop', 0);
};

const hidePanel = async ({direction = 'none'}) => {

	return new Promise(resolve => {

		if (direction == 'none') {
			direction = '0px';
		} else if (direction == 'up') {
			direction = '-2000px';
		} else if (direction == 'down') {
			direction = '2000px';
		}
	
		Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#left-panel')
			.transition()
			.delay(0)
			.duration(animation.duration.out)
			.style('opacity', 0)
			.style('margin-top', direction)
			.on('end', function () {
				Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
			});

		Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#middle-panel')
			.transition()
			.delay(0)
			.duration(animation.duration.out)
			.style('opacity', 0)
			.style('margin-top', direction)
			.on('end', function () {
				Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
			});

		Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel')
			.transition()
			.delay(0)
			.duration(animation.duration.out)
			.style('opacity', 0)
			.style('margin-top', direction)
			.on('end', function () {
				Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).style('display', 'none');
				resolve();
			});
	});
};

const updatePage = ({title, content}) => {
	//dom manipulation
	const panel = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel');
	panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
	panel.select('#article-content').select('.fl-rich-text').html(content.rendered);
	panel.select('.tagline').select('.fl-heading-text').html('');
	panel.select('#article-tags').select('.fl-html').html('');
	panel.select('#close-panel').style('cursor', 'pointer').on('click', _content__WEBPACK_IMPORTED_MODULE_1__["closePanel"]);
	captureLinks();
};

const updatePost = ({title, content}, tags, theme) => {
	//DOM manipulation
	const panel = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel');

	panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
	panel.select('#article-content').select('.fl-rich-text').html(content.rendered);
	panel.select('#close-panel').style('cursor', 'pointer').on('click', _content__WEBPACK_IMPORTED_MODULE_1__["closePanel"]);
	panel.select('.tagline').select('.fl-heading-text').html(theme.slug);

	//tags
	const tagsDIV = panel.select('#article-tags').select('.fl-html');
	let tagsHTML = '<div id="tag-container">';
	for (const tag of tags) {
		const icon = Object(_tags__WEBPACK_IMPORTED_MODULE_3__["getIcon"])(tag);
		
		tagsHTML += `<div id="tag-${tag.slug}" class="tag-pill">${icon}
		${tag.name}
		</div>`;
	}
	tagsHTML += '</div>';

	tagsDIV.html(tagsHTML);
	tagsDIV.selectAll('svg').attr('width','15px').attr('height','15px');

	captureLinks();


};

const captureLinks = () => {
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('a')
		.on('click', function () {

			//get url // domain
			const link = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(this).attr('href');
			const domain = link.split('/')[2];

			//Test if it is a local link (localhost -> remote)
			const host = (window.location.hostname == 'localhost') ? 'labs.fluxo.art.br' : window.location.hostname;

			//if extrrnal, navigate
			if (domain != host) return; //window.location.hostname

			//if local, prevent page update
			d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["event"].preventDefault();

			//load post based on slug on the url
			const slug = link.split('/')[4];

			Object(_content__WEBPACK_IMPORTED_MODULE_1__["showPost"])({slug});
		});

};

const showSpinner = () => {
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('body').append('div')
		.attr('id', 'spinner')
		.html('<div class="lds-ripple"><div></div><div></div></div>');
};

const hideSpinner = () => {
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#spinner').remove();
};


/* harmony default export */ __webpack_exports__["default"] = ({
	initHome,
	configMainMenu,
	configTopMenu,
	showHome,
	hideHome,
	showTopMenu,
	hideTopMenu,
	showPanel,
	hidePanel,
	updatePage,
	updatePost,
	showSpinner,
	hideSpinner
});

/***/ }),

/***/ "./src/data/1834_A_Jobin_final-2.json":
/*!********************************************!*\
  !*** ./src/data/1834_A_Jobin_final-2.json ***!
  \********************************************/
/*! exports provided: type, name, crs, features, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"FeatureCollection\",\"name\":\"1834 A Jobin, final\",\"crs\":{\"type\":\"name\",\"properties\":{\"name\":\"urn:ogc:def:crs:OGC:1.3:CRS84\"}},\"features\":[{\"type\":\"Feature\",\"properties\":{\"Name\":\"1834 A Jobin, final\",\"description\":null,\"tessellate\":1},\"geometry\":{\"type\":\"LineString\",\"coordinates\":[[-73.6269044295439,45.49570393151461],[-73.62712527721307,45.49527032378407],[-73.62748845019665,45.49485541265055],[-73.6277081740576,45.4944259817559],[-73.62792752557769,45.49399813165515],[-73.62814627336965,45.4935717403812],[-73.62838356557604,45.49303709269595],[-73.6284781209361,45.49248699166942],[-73.62857242254518,45.49193837273843],[-73.62864768324928,45.49150053671138],[-73.62872264715314,45.49106016229743],[-73.62865608057069,45.49060267287517],[-73.62874957003223,45.49005410781436],[-73.6288614014145,45.48939792683122],[-73.62907643255615,45.48898077402798],[-73.62943202404799,45.48857685382967],[-73.63003138350109,45.48842247593652],[-73.63038520503433,45.48801864592417],[-73.63073801876578,45.48761307030919],[-73.63109002197055,45.48720842687503],[-73.63130137944991,45.48679193813197],[-73.6316521809241,45.48639177004048],[-73.63214196219366,45.48600779499818],[-73.63263078482115,45.48562477325565],[-73.63283959086274,45.48521285169947],[-73.63318741824109,45.48481747388206],[-73.6333953189804,45.48440838039475],[-73.63346368017324,45.48398513613373],[-73.63353188064181,45.48356282089775],[-73.63363327809428,45.48292694816125],[-73.63371725704715,45.48239710036709],[-73.63393926295997,45.48188360101909],[-73.63428215374478,45.48149156289798],[-73.63462426653759,45.48110040764571],[-73.6349653664145,45.4807089075208],[-73.63530561497878,45.48031797655415],[-73.63564505544396,45.47992795574067],[-73.63584656481437,45.47952536457471],[-73.63591068675343,45.4791105405595],[-73.63611172771489,45.47871118951195],[-73.6364328257594,45.47842791101461],[-73.6369055358355,45.47805515862913],[-73.63737740180046,45.47768404785739],[-73.63771151159364,45.47729992043084],[-73.63818152401133,45.47693068438835],[-73.638514052127,45.47654805668584],[-73.63884580102697,45.47616632289284],[-73.63916198366447,45.47588739269819],[-73.63974887222284,45.47563608238297],[-73.64019923975609,45.47537164625832],[-73.6406488373789,45.47510765308696],[-73.64097658582254,45.47472931895678],[-73.64130355472405,45.47435186788705],[-73.64162979645127,45.47397540203801],[-73.64194142166886,45.47370030018404],[-73.64240096286906,45.47333854385694],[-73.64285906619286,45.47297701565748],[-73.64318248458159,45.47260442508935],[-73.64350562905892,45.4722335131257],[-73.64396161540554,45.47187578753325],[-73.64438993561018,45.47171665733809],[-73.64484250659872,45.47135766116673],[-73.64526800101758,45.47119628162693],[-73.64572011926063,45.47084052102322],[-73.64617121148413,45.47048556907626],[-73.64660887397054,45.47022976395559],[-73.64717848784454,45.46998685245564],[-73.64748092938386,45.46971806178843],[-73.64792799547192,45.46936519800321],[-73.64810925174422,45.46898797322501],[-73.64829010167084,45.46861159075912],[-73.64860317130217,45.46824924029176],[-73.64904802659272,45.46790086513006],[-73.64948031685266,45.46764995552677],[-73.64991192410905,45.46739944257688],[-73.65034174833838,45.46714822704652],[-73.65089178562799,45.46700686655657],[-73.65144133384447,45.46686577448562],[-73.65197986608929,45.46682150902078],[-73.65253854092437,45.46658407622696],[-73.65295387807313,45.46642984350219],[-73.65351150265353,45.46619345748217],[-73.65380613940839,45.46593249993162],[-73.65436280245592,45.46569754930347],[-73.65466371085003,45.46533989375549],[-73.65508541201868,45.46509137304841],[-73.65550764253388,45.46484428130104],[-73.65592903793085,45.46459741469361],[-73.65646070723255,45.46455293118041],[-73.65700450402802,45.46441589768632],[-73.65754548880794,45.46427732528762],[-73.65797322691341,45.46393703343102],[-73.65826043374717,45.46367884421053],[-73.65842611531944,45.46331446999797],[-73.65884227458139,45.46306976687636],[-73.65912843499923,45.4628133422532],[-73.65929284945848,45.46245103878356],[-73.65970779797834,45.4622082555256],[-73.66012206279251,45.461965874592],[-73.66040612012658,45.46171128270827],[-73.66056883939015,45.46135163940763],[-73.66111124642461,45.46112363028283],[-73.66152366560499,45.46088343206912],[-73.66204824088966,45.46084108768562],[-73.6625804947549,45.46070630453787],[-73.66274116470449,45.46034950761927],[-73.66315107213975,45.46011058076007],[-73.66356008084807,45.45987183278071],[-73.66409678433003,45.45964577750696],[-73.66450419170624,45.45940770734799],[-73.66491092849819,45.4591700224064],[-73.66532415877434,45.45884133360802],[-73.66572943585905,45.45860455963508],[-73.66588542570562,45.45825235352621],[-73.66591744645656,45.45779673460112],[-73.66594226018978,45.45743275459881],[-73.66622484005237,45.45709529803818],[-73.66650729130805,45.4567590089895],[-73.66703066060775,45.45662810278868],[-73.6671936734063,45.45619140219414],[-73.66746719469002,45.45594612821761],[-73.66787414683225,45.45562455983568],[-73.66827638542513,45.45539371823123],[-73.66867103469433,45.4551610758865],[-73.66907314771633,45.45484038329047],[-73.66947461131666,45.45461076411703],[-73.66974506730739,45.45436851326132],[-73.67014660912491,45.45404987863012],[-73.6706669805881,45.45383248538944],[-73.67106096469477,45.45360337382132],[-73.67120919124369,45.45326217272814],[-73.67135708982892,45.45292169865897],[-73.67138519376601,45.45248199553271],[-73.67153256647934,45.45214310449443],[-73.67167963940196,45.45180491647438],[-73.67170172639003,45.45145538498432],[-73.67172359082076,45.45110643609868],[-73.67173981486854,45.45084523693107],[-73.67177237796471,45.4503241014465],[-73.67191704673739,45.44998941250431],[-73.67230887508416,45.44967931426088],[-73.67233309855571,45.44924770421582],[-73.67272352447287,45.44893915441721],[-73.67298952695256,45.4486193177632],[-73.6732553776772,45.44830021741396],[-73.67354098792562,45.44789806546056],[-73.6735686941275,45.44747168884408],[-73.67382918585557,45.44715447837708],[-73.67409204895299,45.44683828259335],[-73.6741155752458,45.44641439204795],[-73.67413435121055,45.44607605592198],[-73.67403573566713,45.44564224017539],[-73.67381456997094,45.44528192681619],[-73.67346930432456,45.44491028889048],[-73.67348228657266,45.44465856288452],[-73.67345664364481,45.44306186421542],[-73.67383577927912,45.44284846651401],[-73.67397580362511,45.44252900631491],[-73.67399844504476,45.44211584432731],[-73.67389460907292,45.44177428491814],[-73.67366920402189,45.44142166438782],[-73.67319626212108,45.44112828333675],[-73.6729719951427,45.44077695945757],[-73.67262719571322,45.44041465225575],[-73.67240415557832,45.44006478208749],[-73.67217679408462,45.4397969784323],[-73.67183722553702,45.43935559448632],[-73.67161248456799,45.43900814230615],[-73.67126755985996,45.43864978047112],[-73.67104087616218,45.4383842819616],[-73.67069488027346,45.43810750713309],[-73.67034925899861,45.43783121594206],[-73.66988338349191,45.43754375477285],[-73.66953318330545,45.4373484887553],[-73.66894329794323,45.43713018893579],[-73.66834421850052,45.43707191812912],[-73.66785402887638,45.43718538757178],[-73.66738037714343,45.43705866599436],[-73.66690115132398,45.43701201479977],[-73.66630210589098,45.43695369762251],[-73.66583503555283,45.43674710536217],[-73.66549952646315,45.43639302078481],[-73.66515774149869,45.43611929196371],[-73.66481436523691,45.43584645928177],[-73.66434565743005,45.43564185203765],[-73.66388488608446,45.43543601616536],[-73.66342373073755,45.43523050398204],[-73.66307199114993,45.43511667265473],[-73.66259094212538,45.43507098344276],[-73.66211198964642,45.4350249676347],[-73.66162074521453,45.43513679371656],[-73.66123878588843,45.43534028854669],[-73.6609625591957,45.43563619257696],[-73.6605814427346,45.43583979505058],[-73.66019971783128,45.43604371892815],[-73.65970462701365,45.43615669854236],[-73.65932171841071,45.43636113559779],[-73.65905094692766,45.43665741351107],[-73.65877958546558,45.43695432555989],[-73.65850764496629,45.43725186701687],[-73.65813011050896,45.4373775891757],[-73.65762345651044,45.4375722574302],[-73.6571404439856,45.43752564795032],[-73.65665934267943,45.43747858380618],[-73.65605728981241,45.43742006258649],[-73.65545451042111,45.43736196886969],[-73.6549665481565,45.43739481491266],[-73.65458054622384,45.43760082710335],[-73.65442539725062,45.43791159029418],[-73.65439022276219,45.43823490132011],[-73.65423450475902,45.43854707801022],[-73.65407681448396,45.4388600871974],[-73.65357194114426,45.43897590347018],[-73.65296055582802,45.43899758751527],[-73.65222965069452,45.43892771288896],[-73.65162644535751,45.43886825019175],[-73.65135340768622,45.43908910871265],[-73.65106980598432,45.43939198634042],[-73.65078519288613,45.43969554888992],[-73.65050194144398,45.43999929368094],[-73.65009595391558,45.44029217781201],[-73.64970929702287,45.4404211917692],[-73.64918968534325,45.44062071401586],[-73.64866923167948,45.44082056256033],[-73.64825833783733,45.44111520447436],[-73.64774015198448,45.44123368301964],[-73.64724049821064,45.44126879615556],[-73.64676333916724,45.44113844309118],[-73.6462748791722,45.44109080812004],[-73.64599582996333,45.44131524457949],[-73.64558227375566,45.44161108692514],[-73.64506907956772,45.44172941692876],[-73.6445552922927,45.44184787955032],[-73.64404092552986,45.44196647373383],[-73.64363635581779,45.44218047443491],[-73.6433415379772,45.44249028663933],[-73.64304608196883,45.44280076418638],[-73.64287308361281,45.44312389734817],[-73.64281041527991,45.44354377931859],[-73.64251344944273,45.44385647463682],[-73.6421050587483,45.4440734285386],[-73.64148754835631,45.44401336034585],[-73.64100611924279,45.44388093294653],[-73.64038797854339,45.443820802689],[-73.63986674131873,45.44394137264798],[-73.63934494510576,45.4440620678258],[-73.63882259643557,45.44418288587157],[-73.63840979251741,45.44440052560731],[-73.63798241530215,45.44470332026852],[-73.63755409503045,45.44500677949557],[-73.63724939554146,45.44532301917995],[-73.63694343877667,45.44563977818529],[-73.63665125511444,45.44587169313902],[-73.6363441241297,45.44618957821654],[-73.63603671280147,45.4465082819073],[-73.63572879401062,45.44682773628519],[-73.63519984291999,45.44695141230814],[-73.63467026340359,45.44707523633924],[-73.63436013718466,45.44739604261242],[-73.63428479239474,45.44782837275399],[-73.63397347507696,45.44815078893356],[-73.633661470443,45.44847391537346],[-73.63336415809485,45.44871064697936],[-73.63281467186545,45.44892338447633],[-73.63229537303754,45.44896155035831],[-73.6316498270393,45.44898745837357],[-73.63128784569508,45.4488633330398],[-73.63098767113414,45.44910030187852],[-73.6307968488556,45.44943684300269],[-73.63060661598729,45.44977640056042],[-73.63028876618768,45.45010295149473],[-73.62986022369222,45.45032986493149],[-73.62932114426985,45.45045690538667],[-73.62890804591801,45.450596768342],[-73.62847710480709,45.45082221141443],[-73.62828271891117,45.45116277968795],[-73.62819823811067,45.4516064888324],[-73.62840165716696,45.4518972515556],[-73.6284443564454,45.4523545979717],[-73.62813873412944,45.45259811901056],[-73.6275774309789,45.45281777845555],[-73.62727048480595,45.45306175492761],[-73.62707345689897,45.45340813078505],[-73.62700396739322,45.45376753956442],[-73.62667808688546,45.45410318858433],[-73.6261655628483,45.45405409443573],[-73.62561737947968,45.45418534455852],[-73.62517899380818,45.45441897564231],[-73.62485025115372,45.45475593558387],[-73.62452076464956,45.45509375201739],[-73.62395136054762,45.45531647459507],[-73.62339949875967,45.45544852833947],[-73.62284699346941,45.45558073249651],[-73.62264318288517,45.45593306069776],[-73.62256866332707,45.45629717980712],[-73.62249398534921,45.45666203139228],[-73.62216010311921,45.45700333823358],[-73.6217340393877,45.4571487793445],[-73.6211971326112,45.45718994293546],[-73.62065974258245,45.45723162647447],[-73.62012205017982,45.45727332193354],[-73.61967422477328,45.45751219762443],[-73.61946693045336,45.4578663894217],[-73.6193667183667,45.45833149218441],[-73.61928572219989,45.45870573697105],[-73.61883620014132,45.45894484872007],[-73.61831744004387,45.45889009083645],[-73.61777560539034,45.45893328379396],[-73.61732316558317,45.4591750178104],[-73.61722112726831,45.45964111613565],[-73.61713840540327,45.46001628498149],[-73.61703360869812,45.46048839408714],[-73.61668841414479,45.46083981851727],[-73.61614504199203,45.46087994660994],[-73.61546864391535,45.46090994893711],[-73.61494308848776,45.46086024780866],[-73.61476930351618,45.46103603634851],[-73.61439969305019,45.46148273911922],[-73.61429228336512,45.46195631168987],[-73.6138318038076,45.46220366316679],[-73.61315008912513,45.46223628636267],[-73.61280030891719,45.46258903743974],[-73.61244610203093,45.46294735476961],[-73.61185137865137,45.46318191549843],[-73.61127744081979,45.46332193628288],[-73.61094574465842,45.46358296046237],[-73.61059238867358,45.46393830382719],[-73.61036668528376,45.46431256600638],[-73.61014372683599,45.46468368196755],[-73.60965498289788,45.46502896314909],[-73.60918926799796,45.46527702984903],[-73.60860662994362,45.46542322140716],[-73.60839140637412,45.46578444047773],[-73.60817622705835,45.46614567540101],[-73.60796081936351,45.46650729104974],[-73.60760761940027,45.46686122622583],[-73.60710333759474,45.467222838804],[-73.60662248237736,45.46748649760971],[-73.60600328517057,45.46774133555262],[-73.60538313153842,45.46799601187412],[-73.60492821057967,45.46815710839828],[-73.60431286659201,45.46840459759029],[-73.6036962557361,45.46865259445729],[-73.60321526555823,45.46891190585027],[-73.60259630972139,45.46916089922038],[-73.60197957339577,45.46940677794962],[-73.60130660314404,45.46933911364424],[-73.60082199086914,45.46959980485554],[-73.60028412416837,45.47006049630554],[-73.60015480150524,45.47055849776631],[-73.60018789005166,45.47096989698128],[-73.59995605219748,45.47134896662593],[-73.59958102011464,45.47172258181781],[-73.59920516758508,45.47209701056968],[-73.59865924112395,45.47256657678628],[-73.59844245308132,45.47285709718809],[-73.59806195753235,45.47323619651597],[-73.5975168642868,45.47370450078026],[-73.597003634208,45.47406587035726],[-73.59662567342158,45.47444203339859],[-73.59610908585954,45.47480632225135],[-73.59561669127037,45.47507132959872],[-73.59520864394351,45.47555204591723],[-73.59457763823289,45.47580411316543],[-73.59394478394499,45.4760574166803],[-73.59354332050981,45.47645572604898],[-73.59317009625113,45.4767507990004],[-73.59262339309285,45.47714239615884],[-73.59221812109945,45.4775441152121],[-73.59195729724645,45.47795367618985],[-73.59171160367755,45.47834868029167],[-73.59143991350754,45.4788455030349],[-73.59133761685273,45.47925032743464],[-73.59123516936116,45.479655756657],[-73.59125148281517,45.48017152036795],[-73.59145224593064,45.48050463405761],[-73.59178408239757,45.48086083677806],[-73.59226271002422,45.48122399080751],[-73.59276346736435,45.48148982388904],[-73.59329780850324,45.4816450669943],[-73.5937995210719,45.48191131207116],[-73.59413365658611,45.48227034899552],[-73.59446903489248,45.48262919350866],[-73.59463328767858,45.48308559981509],[-73.59466121616529,45.48352503115235],[-73.59426882628019,45.48337718679576],[-73.59393300802863,45.48301691785122],[-73.59360009261557,45.4826544736893],[-73.59312615767911,45.48228106873015],[-73.59278912844321,45.48192602499286],[-73.59259492190324,45.48158219047629],[-73.5922916526365,45.48111827205191],[-73.59209486754521,45.48077936517132],[-73.59190022229235,45.48043899942962],[-73.59190598427826,45.47989943587934],[-73.5918381839943,45.47958709324545],[-73.59196555108885,45.47908085500878],[-73.59192327121961,45.47866824130846],[-73.59202495746264,45.47826449316153],[-73.59212847941704,45.47785938420916],[-73.59239113839352,45.47744797962329],[-73.59279596099195,45.47704659460516],[-73.59331273189375,45.47675969581293],[-73.59368573431107,45.47646464189829],[-73.59422135278741,45.47608297766127],[-73.59471538092404,45.47581730686233],[-73.59520864394351,45.47555204591723],[-73.59556361635019,45.4752740132087],[-73.5958072858824,45.47488182194378],[-73.59607810210116,45.47438818877648],[-73.59659619069893,45.47402268592101],[-73.5971118438923,45.47365929030792],[-73.59746234410775,45.47338530753217],[-73.59787088216613,45.4729043136435],[-73.59824450152344,45.47253276040465],[-73.59862003904155,45.47215926323383],[-73.59899675959706,45.47178453846805],[-73.59937405537914,45.47140921801316],[-73.5996165378081,45.47101977143267],[-73.59972211176701,45.47061885996978],[-73.59968927825051,45.47020840239028],[-73.5993076194094,45.47007086748384],[-73.59876539648633,45.47001887959883],[-73.59822315103486,45.46996688022764],[-73.59774006113791,45.47022353750803],[-73.59711576234501,45.47047182725841],[-73.5965968746523,45.47083576188849],[-73.59611030716817,45.47109456228991],[-73.59559267696245,45.47145680842372],[-73.59510168631446,45.47171898059808],[-73.5947459406752,45.47199502317375],[-73.59398094281073,45.47223123853542],[-73.59335327058317,45.47247927049278],[-73.59297141903274,45.47285401572395],[-73.59260759581463,45.47313631034867],[-73.5920762997141,45.47350860895855],[-73.5915776853421,45.4737753631707],[-73.59118699466337,45.47415762712321],[-73.59071696608547,45.47432208514491],[-73.59007953845939,45.47457588329165],[-73.58944099669704,45.47483011653185],[-73.58904640936268,45.47521494706467],[-73.58854333122498,45.47548381773216],[-73.58796226901325,45.47553284410777],[-73.58740762015442,45.47548162874448],[-73.58671396256263,45.47541777450303],[-73.58602337794015,45.47535138061012],[-73.58547151640018,45.47529776575831],[-73.58478243267469,45.4752301826554],[-73.5841690330545,45.47538208475913],[-73.58355493254807,45.47553415326446],[-73.58294013279868,45.47568639265761],[-73.58225055166606,45.47561820322409],[-73.58170020856781,45.47556273363867],[-73.58100579252073,45.47549796605787],[-73.5804556535352,45.47544234317499],[-73.57993287020781,45.47528710363814],[-73.57944680993266,45.47502619743984],[-73.57913136990327,45.47467653722191],[-73.5788164856356,45.47432748566239],[-73.57833110369477,45.47406844756024],[-73.5778456268613,45.47381015032804],[-73.57739412694723,45.47344967411306],[-73.57673850720103,45.4732812015621],[-73.57622659226033,45.47354719642131],[-73.5756541686472,45.4735889716001],[-73.57506877860854,45.47363834175333],[-73.57451576641618,45.47358601544212],[-73.57412939955431,45.47344766628103],[-73.57343108355903,45.47338621023988],[-73.57287744018876,45.4733341316257],[-73.57232372513641,45.47328205232155],[-73.57173628851746,45.47333169556895],[-73.57104605451404,45.47326534628515],[-73.57021772365918,45.47318571508465],[-73.56952856372989,45.47311871453891],[-73.5689422409587,45.47316711638643],[-73.56842946599807,45.47300970021141],[-73.56774326908906,45.47294122221668],[-73.5670557969416,45.47287337297607],[-73.56654572368265,45.47271516358722],[-73.56606385483967,45.47245917382589],[-73.56593474175752,45.47202464614504],[-73.56594438346647,45.47160392981268],[-73.56612794196683,45.47109607589421],[-73.56627439572263,45.4706908686361],[-73.56614598041638,45.47026034581302],[-73.5659812290061,45.46993157637935],[-73.56554332283609,45.46957687272464],[-73.56524479990293,45.46923515568518],[-73.56512002618975,45.46880712059452],[-73.56552866092993,45.46884708096935],[-73.56586384553776,45.4690876480642],[-73.56612697892436,45.46952920038625],[-73.5662916605991,45.46985724352492],[-73.56628311773031,45.47027353404464],[-73.56613725401601,45.4706775946644],[-73.56599071073217,45.47108275450165],[-73.56611852970462,45.47151557582923],[-73.56624665005349,45.47194941561954],[-73.56654944980232,45.47229549899123],[-73.56685686784793,45.47264012822325],[-73.56736789121122,45.47279778940883],[-73.56788050156962,45.47295492008914],[-73.56856671362435,45.47302339548798],[-73.5690795655488,45.47318080683196],[-73.56955880828905,45.47343998749734],[-73.56972703874392,45.47377533197452],[-73.5697216552864,45.4742008641032],[-73.56954203642711,45.4747172761079],[-73.56939795298128,45.47513151633711],[-73.5693921523194,45.4755603107461],[-73.56952513843214,45.47600370924551],[-73.56938051407202,45.47642096924375],[-73.56919924679642,45.47694394361045],[-73.56901743288317,45.47746848459161],[-73.56883643733266,45.47799383501684],[-73.5686529204111,45.47852182785996],[-73.56850811140404,45.47894394919008],[-73.5685034258182,45.47938056538271],[-73.56835810026813,45.47980467489668],[-73.5683532285356,45.4802433194776],[-73.56820738098206,45.48066944131983],[-73.56802458612248,45.48120350561612],[-73.56801930233944,45.48164546681602],[-73.56801400527854,45.48208847148195],[-73.56814729818504,45.48254823030108],[-73.56811946934621,45.48300860505128],[-73.56798366291672,45.48343351617215],[-73.56782675618302,45.4838735774565],[-73.56780935869666,45.4843302294976],[-73.56794616995394,45.4847936566641],[-73.567756555141,45.48534308630943],[-73.56778594923391,45.4856869321154],[-73.56767320357713,45.48601704563387],[-73.56748483447615,45.48656858034116],[-73.56719040098682,45.48699713258561],[-73.56689524241962,45.48742674307629],[-73.56659934245354,45.48785740631053],[-73.5664101803096,45.48841323657471],[-73.56654713303406,45.48888661080131],[-73.56666847884325,45.48937330747228],[-73.56698897522772,45.48975045993681],[-73.56731004062925,45.49012827594386],[-73.56744742798243,45.49060678793648],[-73.56747614691855,45.49096112199561],[-73.56746614138592,45.49142997740264],[-73.56741658642551,45.49201477011872],[-73.56722185032699,45.49258696632906],[-73.56702648531065,45.49316099750894],[-73.56683049037325,45.49373686875263],[-73.5666732363228,45.49419889980334],[-73.56647784140087,45.4947766246704],[-73.56632174630491,45.49523955592784],[-73.56612841215947,45.49581783387125],[-73.56612973985291,45.49628775512285]]}}]}");

/***/ }),

/***/ "./src/geodata.js":
/*!************************!*\
  !*** ./src/geodata.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3/dist/d3.min */ "./node_modules/d3/dist/d3.min.js");
/* harmony import */ var d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
/* harmony import */ var _data_1834_A_Jobin_final_2_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/1834_A_Jobin_final-2.json */ "./src/data/1834_A_Jobin_final-2.json");
var _data_1834_A_Jobin_final_2_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/1834_A_Jobin_final-2.json */ "./src/data/1834_A_Jobin_final-2.json", 1);
// import * as d3 from 'd3';










const internalOption = {
	passThrough: true,
};

let D3geoPath;
let svg;
let riverLines;
let dataset;
let nodesPoint;
let nodesLine;
let nodesPoygon;

const init = async canvas => {

	const D3geoTransform = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["geoTransform"])({point:_map__WEBPACK_IMPORTED_MODULE_2__["default"].projectPoint});
	D3geoPath = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["geoPath"])().projection(D3geoTransform);

	// Overlay d3 on the mapbox canvas
	svg = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(canvas).append('svg')
		.attr('id', 'map-box-vis')
		.attr('height', '100%');

	drawRiver(_data_1834_A_Jobin_final_2_json__WEBPACK_IMPORTED_MODULE_5__.features, 500, 2);

};

const loadData = async () => {
	const dataURL = `https://api.mapbox.com/datasets/v1/${_config_config_json__WEBPACK_IMPORTED_MODULE_4__.mapbox.user}/${_config_config_json__WEBPACK_IMPORTED_MODULE_4__.map.dataset}/features?access_token=${_config_config_json__WEBPACK_IMPORTED_MODULE_4__.mapbox.token}`;
	const response = await fetch(dataURL);
	const data = await response.json();
	dataset = data.features;
	
	return dataset;
};


const drawNodes = async ({slug: theme}) => {

	if (!dataset) await loadData();

	const themeNodes = getThemeNodes(theme);

	const points = themeNodes.filter(n => n.geometry.type === 'Point');
	const lines = themeNodes.filter(n => n.geometry.type === 'LineString');
	const polygons = themeNodes.filter(n => n.geometry.type === 'Polygon');

	drawPolygins({data:polygons});
	drawLines({data:lines});
	drawPoints({data:points});

	return {
		points,
		lines,
		polygons
	};

};

const getThemeNodes = theme => {

	const selectedNodes = dataset.filter( node => {
		if(node.properties.theme) {
			const nodethemes = node.properties.theme.split(', ');
			const themeNode = nodethemes.filter(t => t.toLowerCase() === theme);
			if (themeNode.length > 0) return node;
		}
	});

	return selectedNodes;
};

const getNodeCoordinates = async ({id}) => {
	if (!dataset) await loadData();
	const item = dataset.find( item => item.properties.id === id );
	if (!item) return _config_config_json__WEBPACK_IMPORTED_MODULE_4__.map.default.center; // return center of map

	if (item.geometry.type == 'Point') return item.geometry.coordinates;
	const coordinates = item.geometry.coordinates[0];
	return coordinates;
};

const drawPoints =  ({data, transitionTime = 5000, delayTime = 200}) => {

	const colours = getColours();

	nodesPoint = svg.selectAll('.circle')
		.data(data);

	nodesPoint.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.style('fill', '#000000')
		.attr('r', 0)
		.remove();

	nodesPoint.enter().append('circle')
		.attr('class', 'circle');

	nodesPoint = svg.selectAll('.circle')
		.attr('id', function (d) {
			return `index-${d.properties.id}`;
		})
		.style('cursor', 'pointer')
		.style('stroke-width', 2)
		.style('stroke', () => {
			return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.stroke).hex();
		})
		.style('fill', () => {
			return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.fill).alpha(0.7).hex();
		})
		.attr('cx', function (d) {
			return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).x;
		})
		.attr('cy', function (d) {
			return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).y;
		})
		.attr('r', 0)
		.style('opacity', 0.1)
		.on('click', function (d) {
			resetNodesState(d);
			_content__WEBPACK_IMPORTED_MODULE_3__["default"].showPost(d.properties);
		})
		.on('mouseover', function (d) {
			nodesOver(d);
		})
		.on('mouseout', () => {
			nodesOut();
		});
	
	nodesPoint.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.attr('r', 8)
		.style('opacity', 1);
};

const drawLines =  ({data, transitionTime = 5000, delayTime = 200}) => {

	const colours = getColours();

	nodesLine = svg.selectAll('.line')
		.data(data);

	nodesLine.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.attr('stroke-width', 0)
		.remove();

	nodesLine.enter().append('path')
		.attr('class', 'line');

	nodesLine = svg.selectAll('.line')
		.attr('id', function (d) {
			return d.properties.id;
		})
		.attr('d', D3geoPath)
		.style('cursor', 'pointer')
		.style('stroke-width', 0)
		.style('stroke', () => {
			return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.stroke).hex();
		})
		.style('fill', 'none')
		.style('opacity', 0.1)
		.on('click', function (d) {
			resetNodesState(d);
			_content__WEBPACK_IMPORTED_MODULE_3__["default"].showPost(d.properties);
		})
		.on('mouseover', function (d) {
			nodesOver(d);
		})
		.on('mouseout', () => {
			nodesOut();
		});


	nodesLine.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.style('stroke-width', 4)
		.style('opacity', 1);


};

const drawPolygins =  ({data, transitionTime = 5000, delayTime = 200}) => {

	const colours = getColours();

	nodesPoygon = svg.selectAll('.polygons')
		.data(data);

	nodesPoygon.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.style('fill', '#000000')
		.attr('stroke-width', 0)
		.remove();

	nodesPoygon.enter().append('path')
		.attr('class', 'polygons');

	nodesPoygon = svg.selectAll('.polygons')
		.attr('id', function (d) {
			return d.properties.id;
		})
		.attr('d', D3geoPath)
		.style('cursor', 'pointer')
		.style('stroke-width', 0)
		.style('stroke', () => {
			return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.stroke).hex();
		})
		.style('fill', () => {
			return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(colours.active.fill).alpha(0.7).hex();
		})
		.style('opacity', 0.1)
		.on('click', function (d) {
			resetNodesState(d);
			_content__WEBPACK_IMPORTED_MODULE_3__["default"].showPost(d.properties);
		})
		.on('mouseover', function (d) {
			nodesOver(d);
		})
		.on('mouseout', () => {
			nodesOut();
		});


	nodesPoygon.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.style('stroke-width', 2)
		.style('opacity', 1);

};

const drawRiver = data => {

	riverLines = svg.selectAll('#river')
		.data(data)
		.enter()
		.append('path')
		.attr('id', 'river')
		.attr('d', D3geoPath)
		.style('fill','none')
		.style('stroke-width', 1)
		.style('stroke', '#0071bc')
		.style('opacity', 0.8);

	// riverLines.transition()
	// 	.duration(1000)
	// 	.style('stroke-width', 4)
	// 	.style('opacity', 0.8);

	//graph animation
	let lineLength = riverLines.node().getTotalLength();

	riverLines
		.attr('stroke-dasharray', lineLength + ' ' + lineLength)
		.attr('stroke-dashoffset', +lineLength)
		.transition()
		.duration(8000)
		.ease(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["easeLinear"])
		.attr('stroke-dashoffset', 0)
		.style('stroke-width', 3)
		.on('end', () => {
			if(!internalOption.passThrough) _map__WEBPACK_IMPORTED_MODULE_2__["default"].pitchMap({finalPitch:40, duration:2000});
		});
};

const mapUpdate =  () => {
	riverUpdate();
	nodeUpdate();
};

const riverUpdate = () => {
	if (riverLines) {
		riverLines
			.attr('d', D3geoPath)
			.attr('stroke-dasharray', 'none')
			.attr('stroke-dashoffset', 'none');
	}
};

const nodeUpdate = () => {
	
	if (nodesPoint) {
		nodesPoint
			.attr('cx', function (d) {
				return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).x;
			})
			.attr('cy', function (d) {
				return _map__WEBPACK_IMPORTED_MODULE_2__["default"].project(d.geometry.coordinates).y;
			});
	}

	if (nodesLine) nodesLine.attr('d', D3geoPath);
	if (nodesPoygon) nodesPoygon.attr('d', D3geoPath);
	
};

const getColours = () => {

	const theme = _content__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTheme();

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
				fill: '#00AEEF',
				stroke: '#1B75BC'
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

const nodesOver = current => {
	if (nodesPoint) {
		nodesPoint
			.style('opacity', function (d) {
				if (d !== current) return 0.5;
			})
			.style('stroke-width', function (d) {
				if (d === current) return 4;
			});

	}

	if (nodesLine) {
		nodesLine
			.style('opacity', function (d) {
				if (d !== current) return 0.5;
			})
			.style('stroke-width', function (d) {
				if (d === current) return 7;
			});
	}

	if (nodesPoygon) {
		nodesPoygon
			.style('opacity', function (d) {
				if (d !== current) return 0.5;
			})
			.style('stroke-width', function (d) {
				if (d === current) return 4;
			});
	}
}; 

const nodesOut = () => {
	if (nodesPoint) {
		nodesPoint
			.style('opacity', 1)
			.style('stroke-width', 2);
	}
	if (nodesLine) {
		nodesLine
			.style('opacity', 1)
			.style('stroke-width', 4);
	}
	if (nodesPoygon) {
		nodesPoygon
			.style('opacity', 1)
			.style('stroke-width', 2);
	}
};

const resetNodesState = () => {
	if (nodesPoint) {
		nodesPoint.transition()
			.duration(2000)
			.delay(1000)
			.attr('r', 8);
	}

	if (nodesLine) {
		nodesLine.transition()
			.duration(2000)
			.delay(1000)
			.style('stroke-width', 4);
	}

	if (nodesPoygon) {
		nodesPoygon.transition()
			.duration(2000)
			.delay(1000)
			.style('stroke-width', 2);
	}
};

const setCurrentNode = ({id}) => {

	if (nodesPoint) {
		nodesPoint.transition()
			.duration(3000)
			.attr('r', function(d) {
				if (d.properties.id === id) return 16;
				return 8;
			})
			.style('opacity', 1);
	}

	if (nodesLine) {
		nodesLine.transition()
			.duration(3000)
			.style('stroke-width', function(d) {
				console.log(d.properties.id === id);
				if (d.properties.id === id) return 8;
				return 2;
			})
			.style('opacity', 1);
	}

	if (nodesPoygon) {
		nodesPoygon.transition()
			.duration(3000)
			.style('stroke-width', function(d) {
				if (d.properties.id === id) return 8;
				return 2;
			})
			.style('opacity', 1);
	}
	
};


/* harmony default export */ __webpack_exports__["default"] = ({
	init,
	drawNodes,
	mapUpdate,
	getNodeCoordinates,
	setCurrentNode
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


// import 'mapbox-gl/dist/mapbox-gl.css'





const mapBoxConfig = {
	container: 'map',
	style: `mapbox://styles/${_config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.user}/${_config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.default.styleID}`,
	center: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.default.center, //center in Montreal
	zoom: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.default.zoom,
	pitch: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.default.pitch,
	maxZoom: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.default.maxZoom,
	maxBounds: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.default.maxBounds,
	interactive: true,
};

let mapbox;
let pitchAnimation;


const init = async ({mapID, location}) => {

	return new Promise(resolve => {

		//map container set on WP > Beaver
		Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#app').select(':first-child')
			.append('div')
			.attr('id', 'map');
		

		// select('#map').append('div').attr('id','map-bg');
		// select('.mapboxgl-canvas').style('opacity', 0);


		if (location === '404') setUnknowLocation();											//404: center the map anywhere in the globe

		if (mapID) mapBoxConfig.style = `mapbox://styles/${_config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.user}/${mapID}`;		//if deeplink: set map style

		mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.accessToken = _config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.token;
		mapbox = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Map(mapBoxConfig);

		mapbox.on('load', () => {
			// pitchMap();

			_geodata__WEBPACK_IMPORTED_MODULE_2__["default"].init(mapbox.getCanvasContainer());
			
			if (location === '404') flyFromUnknowLocation();

			mapbox.on('viewreset', update);
			mapbox.on('move', update);
			mapbox.on('moveend', update);
			
			resolve();
		});
	});

};

const setUnknowLocation = async () => {

	//anywhere in the globe
	const lat = Math.floor(Math.random() * 180) - 90;
	const lon = Math.floor(Math.random() * 360) - 180;

	mapBoxConfig.zoom = 5;
	mapBoxConfig.center = [lon,lat];
	mapBoxConfig.maxBounds = null;
};

const flyFromUnknowLocation = async () => {
	mapbox.flyTo({
		center: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.default.center,
		zoom: _config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.default.zoom,
		speed: 1,
		curve: 1,
		minZoom: 3,
		// pitch: 60,
		// maxDuration: 5000,
		easing: function (t) { return t; }
	});

	mapbox.on('moveend', () => {
		if (mapbox.getMaxBounds() == null) mapbox.setMaxBounds(_config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.default.maxBounds);
	});
};

const update = () => _geodata__WEBPACK_IMPORTED_MODULE_2__["default"].mapUpdate();

//check if map is loaded
const isMapboxLoaded = () =>  {
	if (mapbox) return mapbox.isStyleLoaded();
	return false;
};

//change map style
const changeMap = ({mapID}) => {
	mapbox.setStyle(`mapbox://styles/${_config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.user}/${mapID}`);
	pitchMap({finalPitch:0, duration:1});
};

const flyTo = coordinates => {
	mapbox.flyTo({
		center:coordinates,
		zoom: 17,
		speed: 1,
		curve: 1,
		// minZoom: 3,
		// pitch: 60,
		// maxDuration: 5000,
		easing: function (t) { return t; }
	});
};

//pitch map animation
const pitchMap = ({finalPitch = 0, duration = 1000}) => {

	if (pitchAnimation) clearInterval(pitchAnimation);

	const tick = 10;
	let elapse = 0;

	const scalePitch = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"])()
		.domain([0, duration])
		.range([mapbox.getPitch(), finalPitch]);

	pitchAnimation = setInterval( () => {
		mapbox.setPitch(scalePitch(elapse));
		// mapbox.setZoom(scaleZoom(elapse));
		elapse += tick;
		if (elapse > duration) {
			clearInterval(pitchAnimation);
			pitchAnimation = null;
		}
	}, tick);

};

// Project GeoJSON coordinate to the map's current state
const project = d => mapbox.project(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.LngLat(+d[0], +d[1]));

// Project GeoJSON coordinate to the map's current state
const projectPoint = function (lon, lat) {
	let point = mapbox.project(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.LngLat(lon, lat));
	this.stream.point(point.x, point.y);
};

/* harmony default export */ __webpack_exports__["default"] = ({
	init,
	update,
	isMapboxLoaded,
	changeMap,
	pitchMap,
	project,
	projectPoint,
	flyTo
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









const getIcon = ({slug}) => {
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
	getIcon
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jpb2hhemFyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb25lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2hlbHAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VhLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYWtlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NuYXBjaGF0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rob3VnaHQtYnViYmxlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RzdW5hbWkuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50SFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90YWdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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QztBQUNNO0FBQ007QUFDTjtBQUNHO0FBQ1A7QUFDRTtBQUNNOztBQUU3QyxrQkFBa0IsS0FBSztBQUM5Qiw0Q0FBNEMsMkRBQUs7QUFDakQsbURBQW1ELDBEQUFZO0FBQy9ELGlEQUFpRCxpRUFBVztBQUM1RCxvREFBb0QsdURBQWU7QUFDbkUsbURBQW1ELDREQUFhO0FBQ2hFLGlEQUFpRCx1REFBVztBQUM1RCxtREFBbUQsd0RBQVk7QUFDL0QsMERBQTBELHNEQUFvQjtBQUM5RTs7QUFFZTtBQUNmO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9jb250ZW50JztcblxuY29uc3QgaG9zdCA9ICdodHRwOi8vbG9jYWxob3N0Ojg4ODgnOyAvLydodHRwOi8vbG9jYWxob3N0Ojg4ODgnOyAvLyBodHRwOi8vbGFicy5mbHV4by5hcnQuYnJcbmNvbnN0IHJvb3RQYXRoID0gJy9naG9zdC1yaXZlci8nO1xuXG5cbmNvbnN0IGxvYWREZWVwTGluayA9IGFzeW5jIHNsdWcgPT4ge1xuXG5cdGNvbnRlbnQuY2hhbmdlQnJvd3Nlckhpc3Rvcnkoe3NsdWd9KTtcdFx0XHRcdFx0Ly9jaGFuZ2UgVVJMIEJhclxuXG5cdGxldCB0aGVtZSA9IGNvbnRlbnQuZ2V0VGhlbWVCeVNsdWcoc2x1Zyk7XHRcdFx0XHQvL2dldCB0aGVtZSBiYXNlZCBvbiB0aGUgc2VhcmNoIHBhcmFtZXRlcnNcblxuXHQvL2lmIHNlYXJjaCBtYXRjaCB0byB0aGVtZSAocGFnZSlcblx0aWYgKHRoZW1lKSB7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdGF3YWl0IGNvbnRlbnQuc2hvd1BhZ2UodGhlbWUpO1x0XHRcdFx0XHRcdC8vbG9hZCB0aGUgdGhlbWUgcGFnZVxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vdHJ5IHRvIGxvYWQgYSBwb3N0IGJhc2VkIG9uIHNlYXJjaCBwYXJhbWV0ZXJzXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBjb250ZW50LnNob3dQb3N0KHtzbHVnfSk7XHRcdFx0XG5cblx0Ly9pZiBubyBwYWdlL3Bvc3QgZm91bmQ6IGxvYWQgaG9tZSB3aXRoIDQwNFxuXHRpZiAoIXBvc3QpIGdvSG9tZSh7bG9jYXRpb246ICc0MDQnfSk7XG5cbn07XG5cbmNvbnN0IGdvSG9tZSA9IGFzeW5jIGRhdGEgPT4ge1xuXHRjb250ZW50LmNoYW5nZUJyb3dzZXJIaXN0b3J5KHtzbHVnOiByb290UGF0aH0pO1xuXHRjb250ZW50LmluaXRIb21lKGRhdGEpO1xufTtcbiBcbiggYXN5bmMgKCkgPT4ge1x0XHRcblxuXHQvL3Rlc3QgaWYgdXJsIGlzIHRyeWluZyB0byByZWFjaCBhIGRlZXBsaW5rXHRcdFxuXHRpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSByb290UGF0aCkge1x0XHRcdFx0XHRcdFx0XHRcblx0XHRjb25zdCBkZWVwTGluayA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzJdOyBcdC8vZ2V0IHBhdGggYWZ0ZXIgdGhlICcvJyBhcyBkZWVwbGlua1xuXHRcdGxvY2F0aW9uID0gYCR7aG9zdH0ke3Jvb3RQYXRofT9ub2RlPSR7ZGVlcExpbmt9YDtcdFx0XHQvL25hdmlhdGUgdG8gcm9vdCB3aXRoIGRlZXBsaW5rIGFzIGEgc2VhcmNoIHBhcmFtZXRlcnNcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvL3Rlc3QgaWYgdXJsIGlzIHNlYXJjaGluZyBmb3IgZGVlcGxpbmtcblx0aWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHRcdFx0XHRcdC8vZ2V0IHV0bFx0XHRcblx0XHRjb25zdCBzbHVnID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ25vZGUnKTtcdFx0XHRcdFx0Ly9nZXQgdGhlIHBhcmFtcyBmb3Igc2VhcmNoIChhIHNsdWcgZm9yIGEgcGFnZSBvciBwb3N0KVxuXHRcdGxvYWREZWVwTGluayhzbHVnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvL0dvIEhvbWVcblx0Z29Ib21lKHtsb2NhdGlvbjogJ2hvbWUnfSk7XG5cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzIuMDUxIDMyLjA1MVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIuMDUxIDMyLjA1MTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk0yNS4yNjcsMTMuMjQ3Yy0wLjQyNS0wLjEyMi0wLjg3OC0wLjEyOS0xLjMyMS0wLjE0NmMwLjEyMS0wLjMxMSwzLjMyNi04LjI1OC01LjEzNi0xMS40MDggYy0wLjAwNCwwLjA3MS0wLjAxLDAuMTQzLTAuMDIxLDAuMjExYzUuNDM4LDMuMjY4LDIuOTIyLDguNTAyLDIuNzE3LDguNzMxYy0xLjQ5OS0xLjE1NC0zLjM3MS0xLjg0LTUuNDAzLTEuODQgYy0yLjA2OCwwLTMuOTcyLDAuNzExLTUuNDgzLDEuOTA0Yy0wLjM3Mi0wLjYxNS0wLjY2Mi0xLjMxNS0wLjg0Ny0yLjA4N2MtMC4xNS0xLjM1MS0wLjA1Ni0yLjU2NSwwLjUzMy0zLjgyMSBjMC41ODMtMS4xNDQsMS41MjItMi4xMTEsMi42NC0yLjc0NGMtMC4wMTMtMC4wNjItMC4wMjMtMC4xMjUtMC4wMzEtMC4xOWMtMS4yNCwwLjUwMS0yLjM2OSwxLjM0LTMuMzgxLDIuNDIyIGMtMC40NCwwLjYxNS0zLjA3MywzLjc4Mi0xLjQwOCw4LjYxN2MtMC40NDksMC4wMTYtMC44OTUsMC4wNjMtMS4zMzUsMC4xNDZjLTEuNzUxLDAuMzcyLTQuNTM0LDEuODc4LTUuODQ1LDQuNDY3IGMtMC40MzksMC43NC0wLjYxMiwxLjQ5Ni0wLjgxOSwyLjIyNmMtMC4yMTIsMS40NjQtMC4xNjYsMi44NywwLjIxNSw0LjE1M2MwLjA1Ni0wLjAzNCwwLjExMS0wLjA2NiwwLjE2OC0wLjA5NiBjLTAuMjAxLTEuMjY5LTAuMDMyLTIuNjA4LDAuNS0zLjc3NGMwLjYxNC0xLjI0NiwxLjUwNC0yLjA3NSwyLjY1NC0yLjc5OGMxLjkzNy0wLjkwOCwzLjU2NC0wLjY1NiwzLjYzMS0wLjY0NSBjLTAuMDQzLDAuMzU4LTAuMDY4LDAuNzIzLTAuMDY4LDEuMDk2YzAsMy41NDksMi4wOTUsNi42MTUsNS4xMTMsOC4wMzVjLTAuMDE2LDAuMDQzLTAuMDMxLDAuMDg2LTAuMDQ1LDAuMTI1IGMtMC4wNTYsMC4xMDMtMi44NSw0LjY1MS04LjI1MiwyLjYxOWMtMC4wNDgsMC4wNTEtMC4wOTksMC4xLTAuMTUxLDAuMTQ3YzAuNjYzLDAuNTEsNi4zMDMsNC4yOSwxMS40OTctMi4wODYgYzAuMjM1LDAuMDIxLDAuNDczLDAuMDM0LDAuNzE0LDAuMDM0YzAuMTQ1LDAsMC4yODktMC4wMDYsMC40MzMtMC4wMTJjMS4wOTcsMS41MjUsNS4zLDYuMjQ0LDExLjYzMywyLjI2OCBjLTAuMDU0LTAuMDQ5LTAuMTA0LTAuMDk4LTAuMTUtMC4xNDljLTUuNjUyLDIuMTEtOC4zMTItMi43NzYtOC4zNDItMi44NmMzLjM2MS0xLjUyOCw1LjMwMi00LjUsNS4zMDItOC4xMjEgYzAtMC4zMTItMC4wMTctMC42MTctMC4wNDctMC45MjJjMC4wMTItMC4wMDIsMC4wMjEtMC4wMDQsMC4wMzUtMC4wMDhjMS4wOTktMC4wNzQsMi4yNzUsMC4xMzksMy40MjksMC42OCBjMS4xNSwwLjcyNiwyLjA0LDEuNTU2LDIuNjU0LDIuODAxYzAuNTMsMS4xNjcsMC43LDIuNTA0LDAuNDk5LDMuNzczYzAuMDU4LDAuMDI5LDAuMTEyLDAuMDYsMC4xNjgsMC4wOTYgQzMyLjE3OCwyMi42NCwzMy4zMzMsMTUuNTYyLDI1LjI2NywxMy4yNDd6IE0xMS41OTMsMTkuMTkyYy0wLjAwNC0wLjAwNC0wLjAxLTAuMDEyLTAuMDE1LTAuMDE4bDAuMDEyLDAuMDE0TDExLjU5MywxOS4xOTJ6IE0xMy44MDMsMTcuNjcxYzAtMC44MzgsMC40NDgtMS41NjUsMS4xMTgtMS45NzFjMC4zNDUtMC4yMDcsMC43NDgtMC4zMjksMS4xOC0wLjMyOWMwLjQ1LDAsMC44NywwLjEzMywxLjIyNCwwLjM1NCBjMC42NDYsMC40MDgsMS4wNzUsMS4xMjUsMS4wNzUsMS45NDVjMCwwLjk0OS0wLjU3OSwxLjc3LTEuNDA0LDIuMTE5Yy0wLjI3NSwwLjExNS0wLjU3OCwwLjE4LTAuODk1LDAuMTggQzE0LjgzMSwxOS45NzEsMTMuODAzLDE4Ljk0LDEzLjgwMywxNy42NzF6IE0xNi4xMDEsMTEuMjA5YzEuMzczLDAsMi42NDYsMC40MzQsMy42OTQsMS4xNjdjLTEuMTY1LDAuODI1LTQuNzQzLDIuMTIzLTcuNDk2LDAuMDc4IEMxMy4zNjcsMTEuNjcyLDE0LjY4MSwxMS4yMDksMTYuMTAxLDExLjIwOXogTTkuNjQyLDE3LjY3MWMwLTAuMDkyLDAuMDA0LTAuMTg1LDAuMDA2LTAuMjc3YzAuMTA3LDAuMDYxLDIuOTk5LDEuNjIxLDMuMjIxLDUuODY1IEMxMC45NDIsMjIuMTM5LDkuNjQyLDIwLjA1NSw5LjY0MiwxNy42NzF6IE0xOS4xODgsMjMuMzQzYzAuMDAyLTAuMTA4LDAuMjM5LTQuMDE2LDMuMzY5LTUuODI0IGMwLjAwMSwwLjA1LDAuMDA0LDAuMTAyLDAuMDA0LDAuMTUyQzIyLjU2MiwyMC4xMTQsMjEuMTk2LDIyLjI0NSwxOS4xODgsMjMuMzQzelxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGlkPVxcXCJMYXllclxcXCIgZW5hYmxlLWJhY2tncm91bmQ9XFxcIm5ldyAwIDAgNjQgNjRcXFwiIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtMTMuNSA1NmgzN2MzLjAzMyAwIDUuNS0yLjQ2OCA1LjUtNS41cy0yLjQ2Ny01LjUtNS41LTUuNWgtMS4wNDZsLTMuNzg3LTExLjY3NWMtLjAwNC0uMDE1LS4wMS0uMDMtLjAxNC0uMDQ1bC0zLjM3My0xMC40di0uMDAxbC0zLjQ4LTEwLjcyOWMtLjgwNS0yLjQ4My0zLjA5OC00LjE1LTUuNzA4LTQuMTVoLTIuMTg1Yy0yLjYwOSAwLTQuOTAzIDEuNjY3LTUuNzA3IDQuMTQ5bC02Ljg1NCAyMS4xMzNjLS4wMDQuMDE0LS4wMS4wMjgtLjAxNC4wNDNsLTMuNzg2IDExLjY3NWgtMS4wNDZjLTMuMDMzIDAtNS41IDIuNDY4LTUuNSA1LjVzMi40NjcgNS41IDUuNSA1LjV6bTExLjM4MS0yOS44OTljMi4xOC41ODkgNC42MDEuODk5IDcuMTE5Ljg5OXM0LjkzOC0uMzEgNy4xMTktLjg5OWwyLjIyOCA2Ljg2OWMtMi4zMTggMS4yNjYtNS43NDIgMi4wMy05LjM0NyAyLjAzcy03LjAyOS0uNzY0LTkuMzQ3LTIuMDN6bTQuMTI0LTEyLjcxOGMuMjY4LS44MjcgMS4wMzMtMS4zODMgMS45MDMtMS4zODNoMi4xODVjLjg3IDAgMS42MzQuNTU2IDEuOTAyIDEuMzgzbDIuODg4IDguOTA1Yy0xLjc5NC40NjEtMy44Mi43MTItNS44ODMuNzEycy00LjA4OS0uMjUxLTUuODgzLS43MTJ6bS03LjYwMiAyMy40MzljMi44NjUgMS4zODMgNi42MjcgMi4xNzggMTAuNTk3IDIuMTc4czcuNzMyLS43OTUgMTAuNTk3LTIuMTc4bDIuNjUyIDguMTc4aC0yNi40OTh6bS03LjkwMyAxMi4xNzhoMzQuNDkzYy4wMDIgMCAuMDA0LjAwMS4wMDYuMDAxcy4wMDQtLjAwMS4wMDYtLjAwMWgyLjQ5NWMuODI3IDAgMS41LjY3MyAxLjUgMS41cy0uNjczIDEuNS0xLjUgMS41aC0zN2MtLjgyNyAwLTEuNS0uNjczLTEuNS0xLjVzLjY3My0xLjUgMS41LTEuNXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PGc+PGc+PHBhdGggZD1cXFwiTTI0OC4xNTgsMzQzLjIyYy0xNC42MzksMC0yNi40OTEsMTIuMi0yNi40OTEsMjYuODRjMCwxNC4yOTEsMTEuNTAzLDI2Ljg0LDI2LjQ5MSwyNi44NCBjMTQuOTg4LDAsMjYuODQtMTIuNTQ4LDI2Ljg0LTI2Ljg0QzI3NC45OTgsMzU1LjQyLDI2Mi43OTksMzQzLjIyLDI0OC4xNTgsMzQzLjIyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNTIuNjksMTQwLjAwMmMtNDcuMDU3LDAtNjguNjY4LDI3Ljg4NS02OC42NjgsNDYuNzA4YzAsMTMuNTk1LDExLjUwMiwxOS44NjksMjAuOTE0LDE5Ljg2OSBjMTguODIyLDAsMTEuMTU0LTI2Ljg0LDQ2LjcwOC0yNi44NGMxNy40MjksMCwzMS4zNzIsNy42NjksMzEuMzcyLDIzLjcwM2MwLDE4LjgyNC0xOS41MiwyOS42MjktMzEuMDIzLDM5LjM4OSBjLTEwLjEwOCw4LjcxNC0yMy4zNTQsMjMuMDA2LTIzLjM1NCw1Mi45ODNjMCwxOC4xMjUsNC44NzksMjMuMzU0LDE5LjE3MSwyMy4zNTRjMTcuMDgsMCwyMC41NjUtNy42NjgsMjAuNTY1LTE0LjI5MSBjMC0xOC4xMjYsMC4zNS0yOC41ODMsMTkuNTIxLTQzLjU3MWM5LjQxMS03LjMyLDM5LjA0LTMxLjAyMywzOS4wNC02My43ODlTMjk3LjMwNywxNDAuMDAyLDI1Mi42OSwxNDAuMDAyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNTYsMEMxMTQuNTE2LDAsMCwxMTQuNDk3LDAsMjU2djIzNmMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGgyMzZjMTQxLjQ4MywwLDI1Ni0xMTQuNDk3LDI1Ni0yNTYgQzUxMiwxMTQuNTE2LDM5Ny41MDMsMCwyNTYsMHogTTI1Niw0NzJINDBWMjU2YzAtMTE5LjM3Nyw5Ni42MDctMjE2LDIxNi0yMTZjMTE5LjM3NywwLDIxNiw5Ni42MDcsMjE2LDIxNiBDNDcyLDM3NS4zNzcsMzc1LjM5Myw0NzIsMjU2LDQ3MnpcXFwiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTEyLjAwNCA1MTIuMDA0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDA0IDUxMi4wMDQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48Zz48cGF0aCBkPVxcXCJNNTAzLjMyNSwxNDAuOTMxYy0xNC4yOSwwLTIwLjk4OS02LjE0Mi0yOS40NjktMTMuOTE4Yy05LjQ0Ny04LjY2My0yMC4xNTUtMTguNDgyLTQxLjE5OC0xOC40ODIgcy0zMS43NTEsOS44MTktNDEuMTk5LDE4LjQ4MmMtOC40NzksNy43NzYtMTUuMTc3LDEzLjkxOC0yOS40NjcsMTMuOTE4cy0yMC45ODgtNi4xNDItMjkuNDY3LTEzLjkxOCBjLTkuNDQ4LTguNjYzLTIwLjE1NS0xOC40ODItNDEuMTk4LTE4LjQ4MnMtMzEuNzUsOS44MTktNDEuMTk4LDE4LjQ4M2MtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxNy0yOS40NjUsMTMuOTE3IGMtMTQuMjg4LDAtMjAuOTg1LTYuMTQyLTI5LjQ2NC0xMy45MTdjLTkuNDQ3LTguNjYzLTIwLjE1NC0xOC40ODMtNDEuMTk2LTE4LjQ4M2MtMjEuMDQyLDAtMzEuNzQ5LDkuODE5LTQxLjE5NywxOC40ODIgYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE4LTI5LjQ2NSwxMy45MThzLTIwLjk4Ny02LjE0Mi0yOS40NjYtMTMuOTE4Yy05LjQ0OC04LjY2Mi0yMC4xNTUtMTguNDgyLTQxLjE5Ny0xOC40ODIgYy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4czMuODg0LDguNjc4LDguNjc4LDguNjc4YzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjUsMTMuOTE3IGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgzLDQxLjE5OCwxOC40ODNjMjEuMDQyLDAsMzEuNzQ5LTkuODE5LDQxLjE5Ny0xOC40ODFjOC40NzgtNy43NzYsMTUuMTc2LTEzLjkxOCwyOS40NjUtMTMuOTE4IGMxNC4yODgsMCwyMC45ODUsNi4xNDIsMjkuNDY0LDEzLjkxN2M5LjQ0Nyw4LjY2MywyMC4xNTQsMTguNDgzLDQxLjE5NiwxOC40ODNzMzEuNzQ5LTkuODE4LDQxLjE5Ny0xOC40ODEgYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOHMyMC45ODcsNi4xNDIsMjkuNDY2LDEzLjkxN2M5LjQ0OCw4LjY2MywyMC4xNTYsMTguNDgzLDQxLjE5OCwxOC40ODMgczMxLjc1LTkuODE4LDQxLjE5OC0xOC40ODFjOC40ODEtNy43NzYsMTUuMTc4LTEzLjkxOCwyOS40NjktMTMuOTE4YzE0LjI5LDAsMjAuOTg5LDYuMTQyLDI5LjQ2OSwxMy45MTggYzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODEsNDEuMTk4LDE4LjQ4MWM0Ljc5NCwwLDguNjc4LTMuODg2LDguNjc4LTguNjc4QzUxMi4wMDQsMTQ0LjgxNyw1MDguMTE5LDE0MC45MzEsNTAzLjMyNSwxNDAuOTMxelxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTUwMy4zMjMsMjIyLjY1OWMtMTQuMjksMC0yMC45ODktNi4xNDItMjkuNDY5LTEzLjkxOGMtOS40NDctOC42NjMtMjAuMTU1LTE4LjQ4Mi00MS4xOTgtMTguNDgyIHMtMzEuNzUxLDkuODE5LTQxLjE5OSwxOC40ODJjLTguNDc5LDcuNzc2LTE1LjE3NywxMy45MTgtMjkuNDY3LDEzLjkxOHMtMjAuOTg4LTYuMTQyLTI5LjQ2OC0xMy45MTggYy05LjQ0Ny04LjY2My0yMC4xNTMtMTguNDgyLTQxLjE5Ny0xOC40ODJzLTMxLjc1LDkuODE5LTQxLjE5OCwxOC40ODNjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTctMjkuNDY1LDEzLjkxNyBjLTE0LjI4OCwwLTIwLjk4NC02LjE0Mi0yOS40NjQtMTMuOTE3Yy0xLjA4My0wLjk5My0yLjE2NS0xLjk4Ni0zLjI2My0yLjk2NWMtMy41NzgtMy4xOS05LjA2NC0yLjg3My0xMi4yNTMsMC43MDMgYy0zLjE4OSwzLjU3OC0yLjg3Myw5LjA2NCwwLjcwNCwxMi4yNTNjMS4wMzcsMC45MjQsMi4wNTksMS44NjIsMy4wODEsMi43OTljOS40NDcsOC42NjIsMjAuMTU0LDE4LjQ4MSw0MS4xOTUsMTguNDgxIGMyMS4wNDIsMCwzMS43NDktOS44MTgsNDEuMTk3LTE4LjQ4MWM4LjQ3OS03Ljc3NiwxNS4xNzctMTMuOTE4LDI5LjQ2Ni0xMy45MThzMjAuOTg3LDYuMTQyLDI5LjQ2NiwxMy45MTcgYzkuNDQ4LDguNjYzLDIwLjE1NiwxOC40ODMsNDEuMTk4LDE4LjQ4M3MzMS43NS05LjgxOCw0MS4xOTgtMTguNDgxYzguNDgtNy43NzYsMTUuMTc4LTEzLjkxOCwyOS40NjktMTMuOTE4IGMxNC4yOSwwLDIwLjk4OSw2LjE0MiwyOS40NjksMTMuOTE4YzkuNDQ3LDguNjYzLDIwLjE1NSwxOC40ODEsNDEuMTk4LDE4LjQ4MWM0Ljc5NCwwLDguNjc4LTMuODg2LDguNjc4LTguNjc4IEM1MTIuMDAxLDIyNi41NDQsNTA4LjExNiwyMjIuNjU5LDUwMy4zMjMsMjIyLjY1OXpcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk0xNjIuMzc2LDE5MS41NjFjLTMuODY0LTAuODYzLTguMDI3LTEuMzAyLTEyLjM3Mi0xLjMwMmMtMjEuMDQyLDAtMzEuNzQ5LDkuODE5LTQxLjE5NywxOC40ODEgYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE4LTI5LjQ2NSwxMy45MThzLTIwLjk4Ny02LjE0Mi0yOS40NjYtMTMuOTE4Yy05LjQ0Ny04LjY2My0yMC4xNTUtMTguNDgxLTQxLjE5Ny0xOC40ODEgYy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4czMuODg0LDguNjgsOC42NzgsOC42OGMxNC4yODksMCwyMC45ODcsNi4xNDIsMjkuNDY1LDEzLjkxNyBjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4Myw0MS4xOTgsMTguNDgzYzIxLjA0MiwwLDMxLjc0OS05LjgxOSw0MS4xOTctMTguNDgyYzguNDc4LTcuNzc2LDE1LjE3Ni0xMy45MTgsMjkuNDY1LTEzLjkxOCBjMy4xMTgsMCw1LjkyNywwLjI4OSw4LjU4NywwLjg4M2M0LjY3NCwxLjA0NCw5LjMxNy0xLjg5OSwxMC4zNjItNi41NzdTMTY3LjA1MywxOTIuNjA2LDE2Mi4zNzYsMTkxLjU2MXpcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk01MDMuMzIzLDM4Ni4xMTVjLTE0LjI5LDAtMjAuOTg5LTYuMTQyLTI5LjQ2OS0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODEtNDEuMTk4LTE4LjQ4MSBzLTMxLjc1MSw5LjgxOS00MS4xOTksMTguNDgxYy04LjQ3OSw3Ljc3Ni0xNS4xNzcsMTMuOTE4LTI5LjQ2NywxMy45MThzLTIwLjk4OC02LjE0Mi0yOS40NjgtMTMuOTE4IGMtOS40NDctOC42NjMtMjAuMTUzLTE4LjQ4MS00MS4xOTctMTguNDgxcy0zMS43NSw5LjgxOS00MS4xOTgsMTguNDgzYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE3LTI5LjQ2NSwxMy45MTcgYy0xNC4yODgsMC0yMC45ODUtNi4xNDItMjkuNDY0LTEzLjkxN2MtOS40NDctOC42NjMtMjAuMTU0LTE4LjQ4My00MS4xOTYtMTguNDgzcy0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MSBjLTguNDc4LDcuNzc2LTE1LjE3NiwxMy45MTgtMjkuNDY1LDEzLjkxOGMtNC43OTQsMC04LjY3OCwzLjg4Ni04LjY3OCw4LjY3OGMwLDQuNzkzLDMuODg0LDguNjc4LDguNjc4LDguNjc4IGMyMS4wNDIsMCwzMS43NDktOS44MTksNDEuMTk3LTE4LjQ4MWM4LjQ3OC03Ljc3NiwxNS4xNzYtMTMuOTE4LDI5LjQ2NS0xMy45MThjMTQuMjg4LDAsMjAuOTg1LDYuMTQyLDI5LjQ2NCwxMy45MTcgYzkuNDQ3LDguNjYzLDIwLjE1NCwxOC40ODMsNDEuMTk2LDE4LjQ4M3MzMS43NDktOS44MTgsNDEuMTk3LTE4LjQ4MWM4LjQ3OS03Ljc3NiwxNS4xNzctMTMuOTE4LDI5LjQ2Ni0xMy45MTggczIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE4YzkuNDQ4LDguNjYyLDIwLjE1NiwxOC40ODEsNDEuMTk4LDE4LjQ4MXMzMS43NS05LjgxOCw0MS4xOTgtMTguNDgxIGM4LjQ4MS03Ljc3NiwxNS4xNzgtMTMuOTE4LDI5LjQ2OS0xMy45MThjMTQuMjksMCwyMC45ODksNi4xNDIsMjkuNDY5LDEzLjkxOGM5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgxLDQxLjE5OCwxOC40ODEgYzQuNzk0LDAsOC42NzgtMy44ODYsOC42NzgtOC42NzhDNTEyLjAwMSwzOTAuMDAxLDUwOC4xMTYsMzg2LjExNSw1MDMuMzIzLDM4Ni4xMTV6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNNTkuMDI4LDM3OS45MTdjLTMuMTYyLTIuMjI3LTYuMDcxLTQuODk1LTkuMTUyLTcuNzE5Yy05LjQ0Ny04LjY2My0yMC4xNTUtMTguNDgzLTQxLjE5Ny0xOC40ODMgYy00Ljc5NCwwLTguNjc4LDMuODg2LTguNjc4LDguNjc4czMuODg0LDguNjc4LDguNjc4LDguNjc4YzE0LjI4OSwwLDIwLjk4Nyw2LjE0MiwyOS40NjYsMTMuOTE4IGMzLjM1LDMuMDcxLDYuODEyLDYuMjQ2LDEwLjg4OCw5LjExN2MxLjUxOSwxLjA3LDMuMjYyLDEuNTg0LDQuOTksMS41ODRjMi43MjcsMCw1LjQxNC0xLjI4Miw3LjEwNC0zLjY4MiBDNjMuODg2LDM4OC4wOSw2Mi45NDYsMzgyLjY3Nyw1OS4wMjgsMzc5LjkxN3pcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk01MDMuMzIzLDMwNC4zODdjLTE0LjI5LDAtMjAuOTg5LTYuMTQyLTI5LjQ2OS0xMy45MThjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODEtNDEuMTk4LTE4LjQ4MSBjLTIxLjA0MiwwLTMxLjc0OSw5LjgxOC00MS4xOTgsMTguNDhjLTMuNTMzLDMuMjM5LTMuNzcxLDguNzI4LTAuNTMxLDEyLjI2MmMzLjIzOCwzLjUzMyw4LjcyNywzLjc3LDEyLjI2MiwwLjUzMSBjOC40NzktNy43NzUsMTUuMTc4LTEzLjkxNywyOS40NjctMTMuOTE3YzE0LjI5LDAsMjAuOTg5LDYuMTQyLDI5LjQ2OSwxMy45MThjOS40NDcsOC42NjMsMjAuMTU1LDE4LjQ4MSw0MS4xOTgsMTguNDgxIGM0Ljc5NCwwLDguNjc4LTMuODg2LDguNjc4LTguNjc4QzUxMi4wMDEsMzA4LjI3Miw1MDguMTE2LDMwNC4zODcsNTAzLjMyMywzMDQuMzg3elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTM4Mi4xMjgsMzA5LjUxNmMtMS4xOTEtNC42NDItNS45MTUtNy40MzktMTAuNTY1LTYuMjQ4Yy0yLjkzNCwwLjc1My02LjA2NiwxLjEyLTkuNTczLDEuMTIgYy0xNC4yOSwwLTIwLjk4OC02LjE0Mi0yOS40NjgtMTMuOTE4Yy05LjQ0Ny04LjY2My0yMC4xNTQtMTguNDgyLTQxLjE5Ny0xOC40ODJzLTMxLjc1LDkuODE5LTQxLjE5OCwxOC40ODMgYy04LjQ3OCw3Ljc3Ni0xNS4xNzYsMTMuOTE3LTI5LjQ2NSwxMy45MTdjLTE0LjI4OCwwLTIwLjk4NS02LjE0Mi0yOS40NjQtMTMuOTE4Yy05LjQ0Ny04LjY2Mi0yMC4xNTQtMTguNDgyLTQxLjE5Ni0xOC40ODIgYy0yMS4wNDIsMC0zMS43NDksOS44MTktNDEuMTk3LDE4LjQ4MmMtOC40NzgsNy43NzYtMTUuMTc2LDEzLjkxOC0yOS40NjUsMTMuOTE4cy0yMC45ODctNi4xNDItMjkuNDY2LTEzLjkxOCBjLTkuNDQ3LTguNjYzLTIwLjE1NS0xOC40ODItNDEuMTk3LTE4LjQ4MmMtNC43OTQsMC04LjY3OCwzLjg4Ni04LjY3OCw4LjY3OHMzLjg4Niw4LjY3Nyw4LjY4LDguNjc3IGMxNC4yODksMCwyMC45ODcsNi4xNDIsMjkuNDY1LDEzLjkxN2M5LjQ0Nyw4LjY2MywyMC4xNTUsMTguNDgzLDQxLjE5OCwxOC40ODNjMjEuMDQyLDAsMzEuNzQ5LTkuODE5LDQxLjE5Ny0xOC40ODIgYzguNDc4LTcuNzc2LDE1LjE3Ni0xMy45MTgsMjkuNDY1LTEzLjkxOGMxNC4yODgsMCwyMC45ODUsNi4xNDIsMjkuNDY0LDEzLjkxOGM5LjQ0Nyw4LjY2MiwyMC4xNTQsMTguNDgxLDQxLjE5NiwxOC40ODEgczMxLjc0OS05LjgxOCw0MS4xOTctMTguNDgxYzguNDc5LTcuNzc2LDE1LjE3Ny0xMy45MTgsMjkuNDY2LTEzLjkxOHMyMC45ODcsNi4xNDIsMjkuNDY2LDEzLjkxOCBjOS40NDgsOC42NjIsMjAuMTU2LDE4LjQ4MSw0MS4xOTgsMTguNDgxYzQuOTEzLDAsOS41ODctMC41NiwxMy44OS0xLjY2NEMzODAuNTIzLDMxOC44ODgsMzgzLjMxOSwzMTQuMTU3LDM4Mi4xMjgsMzA5LjUxNnpcXFwiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiLTYgMCA1MTIgNTEyXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIm00MDEuNzQyMTg4IDE1Mi42MzY3MTljMjAuNDgwNDY4IDEuMDE1NjI1IDQyLjEzNjcxOC03LjY0NDUzMSA1OC4xNDQ1MzEtMjMuNjU2MjUgMjIuNzQ2MDkzLTIyLjc0MjE4OCAxNy4wOTM3NS02My4yODkwNjMgMTMuMDE5NTMxLTgxLjU4OTg0NGwyNi4yMzA0NjktMjYuMjMwNDY5LTIxLjE2NDA2My0yMS4xNjAxNTYtMjYuMjI2NTYyIDI2LjIyNjU2MmMtMTguMzA0Njg4LTQuMDc0MjE4LTU4Ljg1MTU2My05LjcyNjU2Mi04MS41OTM3NSAxMy4wMTk1MzItMTQuNjEzMjgyIDE0LjYwOTM3NS0yMy4xOTE0MDYgMzMuOTc2NTYyLTIzLjcyMjY1NiA1Mi45NTcwMzFsLTIyLjc2OTUzMiAyNC4zNTE1NjNjLTE3Ljc2OTUzMSAxOS0yNy4zMTY0MDYgNDMuNzkyOTY4LTI2Ljg4MjgxMiA2OS44MDQ2ODcuNDM3NSAyNi4wMTE3MTkgMTAuODA4NTk0IDUwLjQ3MjY1NiAyOS4yMDMxMjUgNjguODY3MTg3bDUxLjY2NDA2MiA1MS42NjQwNjNjNS43OTI5NjkgNS43OTI5NjkgNS43OTI5NjkgMTUuMjE0ODQ0IDAgMjEuMDExNzE5bC0xLjE4NzUgMS4xODc1Yy01Ljc5Mjk2OSA1Ljc5Mjk2OC0xNS4yMTg3NSA1Ljc5Mjk2OC0yMS4wMTE3MTkgMGwtMTc2LjcwMzEyNC0xNzYuNzA3MDMyYy0xNy42Nzk2ODgtMTcuNjc5Njg3LTQxLjE3NTc4Mi0yNy42NDA2MjQtNjYuMTYwMTU3LTI4LjA1MDc4MS0yNS4yMjI2NTYtLjQxNDA2Mi00OC45MTQwNjIgOC45Mzc1LTY2LjgzMjAzMSAyNi4zMzU5MzgtMTguMTQwNjI1IDE3LjYwOTM3NS0yOC4yNzM0MzggNDEuMjg1MTU2LTI4LjUyNzM0NCA2Ni42NjQwNjItLjI1NzgxMiAyNS4zODY3MTkgOS4zODY3MTkgNDkuMjY1NjI1IDI3LjEyODkwNiA2Ny4yMDMxMjVsMTIxLjA4MjAzMiAxMjMuMDM5MDYzYzIuODMyMDMxIDIuODYzMjgxIDQuMzQ3NjU2IDYuNjc5Njg3IDQuMjY1NjI1IDEwLjc1MzkwNi0uMDgyMDMxIDQuMDYyNS0xLjc1MzkwNyA3LjgxNjQwNi00LjcwNzAzMSAxMC41NzAzMTMtNS43NzczNDQgNS4zOTA2MjQtMTUuMjM4MjgyIDUuMDE5NTMxLTIxLjA4NTkzOC0uODI4MTI2bC00Mi4yMjY1NjItNDIuMjMwNDY4Yy0yNS4xMTcxODgtMjUuMTEzMjgyLTY1Ljk4NDM3Ni0yNS4xMTMyODItOTEuMTAxNTYzIDBsLTEwLjU3ODEyNSAxMC41ODIwMzEgODcuNTExNzE5IDg3LjUxMTcxOWMxNy42Nzk2ODcgMTcuNjc5Njg3IDQxLjE3NTc4MSAyNy42NDQ1MzEgNjYuMTYwMTU2IDI4LjA1NDY4Ny41MzUxNTYuMDA3ODEzIDEuMDYyNS4wMTE3MTkgMS41OTc2NTYuMDExNzE5IDI0LjU4MjAzMSAwIDQ3LjY5NTMxMy05LjMyNDIxOSA2NS4yMzQzNzUtMjYuMzUxNTYyIDE4LjEzNjcxOS0xNy42MDkzNzYgMjguMjY5NTMyLTQxLjI4MTI1IDI4LjUyNzM0NC02Ni42NjAxNTcuMjU3ODEyLTI1LjM5MDYyNS05LjM4NjcxOS00OS4yNjU2MjUtMjcuMTMyODEyLTY3LjIwNzAzMWwtMTIxLjA4MjAzMi0xMjMuMDM5MDYyYy0yLjgzMjAzMS0yLjg2MzI4Mi00LjM0Mzc1LTYuNjc5Njg4LTQuMjYxNzE4LTEwLjc1MzkwNy4wODIwMzEtNC4wNjI1IDEuNzUzOTA2LTcuODE2NDA2IDQuNzAzMTI0LTEwLjU3MDMxMiA1Ljc3NzM0NC01LjM5MDYyNSAxNS4yMzgyODItNS4wMTk1MzEgMjEuMDg1OTM4LjgyODEyNWwxNzYuOTcyNjU2IDE3Ni45NzI2NTZjMTcuNzk2ODc1IDE3Ljc5Njg3NSA0MS40NjA5MzggMjcuNjAxNTYyIDY2LjYzMjgxMyAyNy42MDE1NjJzNDguODM5ODQzLTkuODA0Njg3IDY2LjYzNjcxOS0yNy42MDE1NjJsMS4xOTE0MDYtMS4xOTE0MDZjMzYuNzQyMTg3LTM2Ljc0MjE4OCAzNi43NDIxODctOTYuNTI3MzQ0IDAtMTMzLjI2OTUzMmwtNTAuNzkyOTY5LTUwLjc5Mjk2OGMtMy44MTY0MDYtMy44MTY0MDYtNS45MTc5NjktOC44OTA2MjUtNS45MTc5NjktMTQuMjg1MTU2IDAtNS4zOTg0MzggMi4xMDE1NjMtMTAuNDY4NzUgNS45MTc5NjktMTQuMjg1MTU3em0wIDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgLTQgNTEyLjAwMTY0IDUxMlxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtNDk2LjkxNDA2MiAzNTQuMzY3MTg4LTc0LjE3OTY4Ny03Ni42Nzk2ODggMjguODc1LTExLjk2MDkzOGMxMi4yNjU2MjUtNS4wODIwMzEgMjEuODE2NDA2LTE0LjYzNjcxOCAyNi44OTg0MzctMjYuOTAyMzQzIDUuMDgyMDMyLTEyLjI2NTYyNSA1LjA4MjAzMi0yNS43NzczNDQgMC0zOC4wNDI5NjktNy43MjI2NTYtMTguNjQ0NTMxLTI1Ljc1MzkwNi0zMC42OTE0MDYtNDUuOTMzNTkzLTMwLjY5MTQwNi02LjUzNTE1NyAwLTEyLjkzMzU5NCAxLjI3NzM0NC0xOS4wMDc4MTMgMy43OTI5NjhsLTEuOTQxNDA2LjgwODU5NHYtMTkuMDY2NDA2YzAtODUuODEyNS02OS44MTI1LTE1NS42MjUtMTU1LjYyNS0xNTUuNjI1cy0xNTUuNjI1IDY5LjgxMjUtMTU1LjYyNSAxNTUuNjI1djE5LjA2MjVsLTEuOTM3NS0uODAwNzgxYy02LjA3ODEyNS0yLjUxOTUzMS0xMi40NzY1NjItMy43OTY4NzUtMTkuMDExNzE5LTMuNzk2ODc1LTIwLjE4MzU5MyAwLTM4LjIxNDg0MyAxMi4wNTA3ODEtNDUuOTMzNTkzIDMwLjY5MTQwNi01LjA4MjAzMiAxMi4yNjU2MjUtNS4wODIwMzIgMjUuNzc3MzQ0LS4wMDM5MDcgMzguMDQyOTY5IDUuMDgyMDMxIDEyLjI2NTYyNSAxNC42MzY3MTkgMjEuODIwMzEyIDI2Ljg5ODQzOCAyNi45MDIzNDNsMjguODc1IDExLjk2MDkzOC03NC4xNzU3ODEgNzYuNjc5Njg4Yy0xNy44NTE1NjMgMTguNDQ5MjE4LTE2LjA3MDMxMyAzMy40NzY1NjItMTMuNDIxODc2IDQwLjc5Njg3NCAzLjk2MDkzOCAxMC45MzM1OTQgMTQuNDE3OTY5IDE4LjA4NTkzOCAyOC42OTE0MDcgMTkuNjE3MTg4IDUuNzQ2MDkzLjYxNzE4OCAxMC44OTg0MzcgMy40MzM1OTQgMTQuNTE1NjI1IDcuOTI5Njg4IDMuNDkyMTg3IDQuMzQ3NjU2IDUuMDg5ODQ0IDkuNzMwNDY4IDQuNDg4MjgxIDE1LjE2NDA2Mi0xLjU0Njg3NSAxNC4wNTg1OTQgMy4yNzczNDQgMjIuNzUzOTA2IDcuNTk3NjU2IDI3LjU3NDIxOSA1LjY2Nzk2OSA2LjMyODEyNSAxMy45NTcwMzEgOS44MTY0MDYgMjMuMzM5ODQ0IDkuODE2NDA2IDcuOTU3MDMxIDAgMTYuNDk2MDk0LTIuMzk4NDM3IDI1LjM3ODkwNi03LjEyMTA5NGw1LjEwMTU2My0yLjcxNDg0M2M3LjI5Njg3NS0zLjg3ODkwNyAxNy4yNDIxODctNi4wMTU2MjYgMjgtNi4wMTU2MjYgMTIuNDUzMTI1IDAgMjQuMjY1NjI1IDIuODYzMjgyIDMyLjQxNzk2OCA3Ljg1NTQ2OWwzOS45NzY1NjMgMjQuNDk2MDk0YzExLjkwMjM0NCA3LjI5Mjk2OSAyNy42NDA2MjUgMTEuNjI1IDQ0LjMxMjUgMTIuMTk5MjE5LjE3MTg3NS4wMDc4MTIuMzQzNzUuMDExNzE4LjUxNTYyNS4wMTE3MThzLjM0NzY1Ni0uMDAzOTA2LjUxOTUzMS0uMDExNzE4YzE2LjY2Nzk2OS0uNTc0MjE5IDMyLjQwMjM0NC00LjkwNjI1IDQ0LjMwODU5NC0xMi4xOTkyMTlsMzkuOTcyNjU2LTI0LjQ5NjA5NGM4LjE1MjM0NC00Ljk5MjE4NyAxOS45Njg3NS03Ljg1NTQ2OSAzMi40MTc5NjktNy44NTU0NjkgMTAuNzY1NjI1IDAgMjAuNzA3MDMxIDIuMTM2NzE5IDI4IDYuMDE1NjI2bDUuMTA1NDY5IDIuNzE0ODQzYzguODgyODEyIDQuNzIyNjU3IDE3LjQyMTg3NSA3LjExNzE4OCAyNS4zNzUgNy4xMjEwOTRoLjAwMzkwNmM5LjM4MjgxMyAwIDE3LjY3MTg3NS0zLjQ4ODI4MSAyMy4zNDM3NS05LjgxNjQwNiA0LjMxNjQwNi00LjgyMDMxMyA5LjE0MDYyNS0xMy41MTU2MjUgNy41OTM3NS0yNy41NzgxMjUtLjU5NzY1Ni01LjQyOTY4OC45OTYwOTQtMTAuODEyNSA0LjQ5MjE4Ny0xNS4xNjAxNTYgMy42MDkzNzYtNC40OTYwOTQgOC43NjU2MjYtNy4zMTI1IDE0LjUxNTYyNi03LjkyOTY4OCAxNC4yNzM0MzctMS41MzEyNSAyNC43MzA0NjgtOC42ODM1OTQgMjguNjg3NS0xOS42MTcxODggMi42NDg0MzctNy4zMjAzMTIgNC40Mjk2ODctMjIuMzQ3NjU2LTEzLjQyMTg3Ni00MC43OTY4NzR6bTAgMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDM0NC41NyAzNDQuNTdcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0NC41NyAzNDQuNTc7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBkPVxcXCJNMzM1LjIwNiwxNDQuNTUyYy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41YzAsMTkuMTgzLTE1LjYwNiwzNC43ODktMzQuNzksMzQuNzg5Yy0zLjY0NSwwLTcuMjc2LTAuNTgyLTEwLjc5My0xLjczIGMtMi4yNDktMC43MzMtNC43MTQtMC4zNjQtNi42NDgsMC45OTljLTEuOTM0LDEuMzYzLTMuMTEyLDMuNTYtMy4xNzYsNS45MjZjLTAuNTIsMTguOTY4LTE1Ljc3NiwzMy44MjYtMzQuNzMzLDMzLjgyNiBjLTEwLjEwNSwwLTE5LjcwNi00LjQxNS0yNi4zNDEtMTIuMTE0Yy0xLjQyNS0xLjY1My0zLjQ5OS0yLjYwNC01LjY4MS0yLjYwNGMtMi4xODIsMC00LjI1NiwwLjk1LTUuNjgxLDIuNjA0IGMtNi42MzUsNy42OTktMTYuMjM2LDEyLjExNC0yNi4zNDEsMTIuMTE0Yy0xMC43MjUsMC0yMC42OTYtNC44NjgtMjcuMzU4LTEzLjM1NmMtMS40MjItMS44MTItMy41OTctMi44NjktNS45LTIuODY5IGMtMi4zMDMsMC00LjQ3OCwxLjA1OC01LjksMi44NjljLTYuNjYyLDguNDg4LTE2LjYzNCwxMy4zNTYtMjcuMzU4LDEzLjM1NmMtNi45OTksMC0xMy43NDEtMi4wNjktMTkuNDk5LTUuOTg1IGMtMy40MjUtMi4zMzEtOC4wOS0xLjQ0Mi0xMC40MTksMS45ODNjLTIuMzMsMy40MjUtMS40NDEsOC4wOSwxLjk4NCwxMC40MTljOC4yNTUsNS42MTUsMTcuOTE1LDguNTgzLDI3LjkzNCw4LjU4MyBjMTIuNDUxLDAsMjQuMTg3LTQuNTcyLDMzLjI1OC0xMi43NjhjOS4wNzEsOC4xOTUsMjAuODA3LDEyLjc2OCwzMy4yNTgsMTIuNzY4YzExLjc5NSwwLDIzLjEwNS00LjE5MywzMi4wMjItMTEuNzAzIGM4LjkxNyw3LjUxLDIwLjIyNywxMS43MDMsMzIuMDIyLDExLjcwM2MxMy4wNTcsMCwyNS4zOTEtNS4wMjEsMzQuNzMxLTE0LjE0YzcuMTQxLTYuOTczLDExLjkzOC0xNS43NTMsMTMuOTQ4LTI1LjMzNCBjMi4yMTEsMC4zMDIsNC40MzksMC40NTMsNi42NzIsMC40NTNjMjcuNDU0LDAsNDkuNzktMjIuMzM1LDQ5Ljc5LTQ5Ljc4OUMzNDIuNzA2LDE0Ny45MDksMzM5LjM0OCwxNDQuNTUyLDMzNS4yMDYsMTQ0LjU1MnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNjcuMTAyLDE5OS4zN2MzLjkzOC0xLjI4Niw2LjA4Ny01LjUyLDQuODAyLTkuNDU4Yy0xLjI4Ni0zLjkzNy01LjUyMS02LjA4Ni05LjQ1Ny00LjgwMiBjLTMuNTE3LDEuMTQ4LTcuMTQ4LDEuNzMtMTAuNzkzLDEuNzNjLTE5LjE4MywwLTM0Ljc5LTE1LjYwNi0zNC43OS0zNC43ODljMC05LjkwOCw0LjI4My0xOS4zODgsMTEuNzUyLTI2LjAwOSBjMS42MDUtMS40MjQsMi41MjQtMy40NjcsMi41MjQtNS42MTJzLTAuOTE5LTQuMTg4LTIuNTI0LTUuNjExYy03LjQ2OC02LjYyMy0xMS43NTItMTYuMTAzLTExLjc1Mi0yNi4wMSBjMC0xOS4xODQsMTUuNjA2LTM0Ljc5LDM0Ljc5LTM0Ljc5YzMuNjQzLDAsNy4yNzQsMC41ODIsMTAuNzk0LDEuNzNjMi4yNSwwLjczNCw0LjcxMywwLjM2Myw2LjY0Ny0xczMuMTExLTMuNTYsMy4xNzYtNS45MjUgQzcyLjc5MiwyOS44NTgsODguMDQ4LDE1LDEwNy4wMDUsMTVjMTAuNzI1LDAsMjAuNjk3LDQuODY4LDI3LjM1OCwxMy4zNTVjMS40MjIsMS44MTMsMy41OTcsMi44Nyw1LjksMi44NyBjMi4zMDMsMCw0LjQ3OS0xLjA1OSw1LjktMi44N0MxNTIuODI0LDE5Ljg2OCwxNjIuNzk1LDE1LDE3My41MjEsMTVjNC4xNDIsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjUgYy0xMi40NTIsMC0yNC4xODcsNC41NzItMzMuMjU4LDEyLjc2N0MxMzEuMTkxLDQuNTcyLDExOS40NTcsMCwxMDcuMDA1LDBjLTEzLjA1NywwLTI1LjM5MSw1LjAyMS0zNC43MywxNC4xNCBjLTcuMTQxLDYuOTcyLTExLjkzOCwxNS43NTMtMTMuOTQ4LDI1LjMzM2MtMi4yMTEtMC4zMDItNC40MzktMC40NTMtNi42NzItMC40NTNjLTI3LjQ1NCwwLTQ5Ljc5LDIyLjMzNi00OS43OSw0OS43OSBjMCwxMS41ODcsNC4wOCwyMi43NTgsMTEuMzg3LDMxLjYyMWMtNy4zMDcsOC44NjItMTEuMzg3LDIwLjAzMy0xMS4zODcsMzEuNjIxYzAsMjcuNDU0LDIyLjMzNSw0OS43ODksNDkuNzksNDkuNzg5IEM1Ni44ODIsMjAxLjg0MSw2Mi4wOCwyMDEuMDEsNjcuMTAyLDE5OS4zN3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjAwLjY0NywyNy44OTljMy4xMzgsMi43MDQsNy44NzQsMi4zNTIsMTAuNTc4LTAuNzg1QzIxNy44NTksMTkuNDE1LDIyNy40NiwxNSwyMzcuNTY1LDE1IGMxOC45NTgsMCwzNC4yMTQsMTQuODU3LDM0LjczMywzMy44MjVjMC4wNjQsMi4zNjUsMS4yNDIsNC41NjIsMy4xNzYsNS45MjVzNC4zOTcsMS43MzQsNi42NDcsMSBjMy41Mi0xLjE0OCw3LjE1Mi0xLjczLDEwLjc5NC0xLjczYzE5LjE4MywwLDM0Ljc5LDE1LjYwNiwzNC43OSwzNC43OWMwLDkuOTA3LTQuMjg0LDE5LjM4Ny0xMS43NTIsMjYuMDEgYy0zLjEsMi43NDgtMy4zODQsNy40ODgtMC42MzYsMTAuNTg3YzEuNDgyLDEuNjcyLDMuNTQzLDIuNTI0LDUuNjE1LDIuNTI0YzEuNzY5LDAsMy41NDUtMC42MjIsNC45NzMtMS44ODkgYzEwLjY3Ny05LjQ2NywxNi44MDEtMjMuMDM3LDE2LjgwMS0zNy4yMzJjMC0yNy40NTQtMjIuMzM1LTQ5Ljc5LTQ5Ljc5LTQ5Ljc5Yy0yLjIzMywwLTQuNDYsMC4xNTEtNi42NzIsMC40NTMgYy0yLjAxLTkuNTgtNi44MDctMTguMzYxLTEzLjk0OC0yNS4zMzNDMjYyLjk1Nyw1LjAyMSwyNTAuNjIyLDAsMjM3LjU2NSwwYy0xNC40NzUsMC0yOC4yMTcsNi4zMTMtMzcuNzA0LDE3LjMyMSBDMTk3LjE1OCwyMC40NiwxOTcuNTEsMjUuMTk1LDIwMC42NDcsMjcuODk5elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMjkuMzE5LDI1MS44OTljLTIwLjU0MSwwLTM2LjYzLDEwLjgwMS0zNi42MywyNC41OXMxNi4wOSwyNC41OSwzNi42MywyNC41OWMyMC41NCwwLDM2LjYzLTEwLjgwMSwzNi42My0yNC41OSBTMTQ5Ljg1OSwyNTEuODk5LDEyOS4zMTksMjUxLjg5OXogTTEyOS4zMTksMjg2LjA3OWMtMTMuMDAzLDAtMjEuNjMtNS43NzItMjEuNjMtOS41OXM4LjYyNy05LjU5LDIxLjYzLTkuNTkgYzEzLjAwMywwLDIxLjYzLDUuNzcyLDIxLjYzLDkuNTlTMTQyLjMyMiwyODYuMDc5LDEyOS4zMTksMjg2LjA3OXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOTUuNTI4LDMxMi44MThjLTQuMTQyLDAtNy41LDMuMzU3LTcuNSw3LjVjMCw0LjM2Ny03LjQyMyw5LjI1Mi0xNy4zNTgsOS4yNTJzLTE3LjM1OC00Ljg4NS0xNy4zNTgtOS4yNTIgYzAtNC4zNjgsNy40MjMtOS4yNTMsMTcuMzU4LTkuMjUzYzQuMTQyLDAsNy41LTMuMzU3LDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41Yy0xOC4xNDUsMC0zMi4zNTgsMTAuNjUzLTMyLjM1OCwyNC4yNTMgUzUyLjUyNiwzNDQuNTcsNzAuNjcsMzQ0LjU3czMyLjM1OC0xMC42NTIsMzIuMzU4LTI0LjI1MkMxMDMuMDI4LDMxNi4xNzYsOTkuNjcsMzEyLjgxOCw5NS41MjgsMzEyLjgxOHpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNTExIDUxMS45OTlcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwibTExNC40NDkyMTkgNDEwLjI2OTUzMSAzNC42MjEwOTMgMjUuMDY2NDA3YzEwLjU5Mzc1IDcuNjY3OTY4IDI1Ljk2ODc1IDcuNjY3OTY4IDM2LjU2MjUgMGwzNC42MjEwOTQtMjUuMDY2NDA3YzIxLjEwNTQ2OS0xNS4yODEyNSA1MC41ODk4NDQtMTUuMjgxMjUgNzEuNjk1MzEzIDBsMzQuNjI1IDI1LjA2NjQwN2MxMC41ODk4NDMgNy42Njc5NjggMjUuOTY4NzUgNy42Njc5NjggMzYuNTYyNSAwbDM0LjYyMTA5My0yNS4wNjY0MDdjMjEuMTA5Mzc2LTE1LjI4MTI1IDUwLjU4OTg0NC0xNS4yODEyNSA3MS42OTkyMTkgMGw0Mi4yNSAzMC41ODU5Mzh2LTYzLjE5NTMxM2wtNTkuODIwMzEyLTQzLjMwNDY4N2MtMTAuNTg5ODQ0LTcuNjY3OTY5LTI1Ljk2NDg0NC03LjY2Nzk2OS0zNi41NTg1OTQgMGwtMzQuNjI1IDI1LjA2MjVjLTIxLjEwNTQ2OSAxNS4yODEyNS01MC41ODk4NDQgMTUuMjgxMjUtNzEuNjk1MzEzIDBsLTM0LjYyNS0yNS4wNjI1Yy0xMC41ODk4NDMtNy42NzE4NzUtMjUuOTY4NzUtNy42Njc5NjktMzYuNTU4NTkzIDBsLTM0LjYyNSAyNS4wNjI1Yy0yMS4xMDU0NjkgMTUuMjgxMjUtNTAuNTg5ODQ0IDE1LjI4MTI1LTcxLjY5NTMxMyAwbC0zNC42MjUtMjUuMDYyNWMtMTAuNTg5ODQ0LTcuNjY3OTY5LTI1Ljk2ODc1LTcuNjY3OTY5LTM2LjU1ODU5NCAwbC01OS44MjAzMTIgNDMuMzA0Njg3djYzLjE5NTMxM2w0Mi4yNS0zMC41ODU5MzhjMjEuMTA5Mzc1LTE1LjI4MTI1IDUwLjU4OTg0NC0xNS4yODEyNSA3MS42OTkyMTkgMHptMCAwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwibTExNC40NDkyMTkgMzEwLjA4NTkzOCAzNC42MjEwOTMgMjUuMDY2NDA2YzEwLjU5Mzc1IDcuNjY3OTY4IDI1Ljk2ODc1IDcuNjY3OTY4IDM2LjU2MjUgMGwzNC42MjEwOTQtMjUuMDY2NDA2YzIxLjEwOTM3NS0xNS4yNzczNDQgNTAuNTkzNzUtMTUuMjc3MzQ0IDcxLjY5NTMxMyAwbDM0LjYyNSAyNS4wNjY0MDZjMTAuNTg5ODQzIDcuNjY3OTY4IDI1Ljk2ODc1IDcuNjY3OTY4IDM2LjU2MjUgMGwzNC42MjEwOTMtMjUuMDY2NDA2YzIxLjEwOTM3Ni0xNS4yNzczNDQgNTAuNTg5ODQ0LTE1LjI3NzM0NCA3MS42OTkyMTkgMGw0Mi4yNSAzMC41ODk4NDN2LTk1LjUwMzkwNmgtMTM5LjY0ODQzN2MtNDUuMTQ4NDM4LTEuODYzMjgxLTgxLjkwNjI1LTQwLjA3ODEyNS04MS45OTYwOTQtODUuMzIwMzEzLS4wNDI5NjktMjIuODk0NTMxIDguODM1OTM4LTQ0LjQyMTg3NCAyNS4wMDM5MDYtNjAuNjIxMDkzIDE1LjkyMTg3NS0xNS45NTcwMzEgMzcuMDI3MzQ0LTI0Ljg1MTU2MyA1OS41MjM0MzgtMjUuMTE3MTg4bDguNjQwNjI1IDEuMjU3ODEzIDExLjU4NTkzNy0xOC44MjgxMjUtOC45NDkyMTgtOC4zNjMyODFjLTU5LjIzMDQ2OS01NS4zNTU0NjktMTQ4LjU0Mjk2OS02My45NDkyMTktMjE3LjE4MzU5NC0yMC45MDIzNDQtMjEuNjA5Mzc1IDEzLjU1NDY4Ny00MC41OTc2NTYgMzIuNTg1OTM3LTU0LjkxNzk2OSA1NS4wNTQ2ODdsLTExMy4yNjU2MjUgMTc4LjE3MTg3NXY4MC4xNzE4NzVsNDIuMjUtMzAuNTg5ODQzYzIxLjEwOTM3NS0xNS4yNzczNDQgNTAuNTg5ODQ0LTE1LjI3NzM0NCA3MS42OTkyMTkgMHptMCAwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwibTQxNS4zMjQyMTkgNDM0LjUzNTE1Ni0zNC42MjEwOTQgMjUuMDY2NDA2Yy0yMS4xMDU0NjkgMTUuMjc3MzQ0LTUwLjU4OTg0NCAxNS4yNzczNDQtNzEuNjk1MzEzIDBsLTM0LjYyNS0yNS4wNjY0MDZjLTEwLjU5Mzc1LTcuNjY3OTY4LTI1Ljk2ODc1LTcuNjY3OTY4LTM2LjU2MjUgMGwtMzQuNjIxMDkzIDI1LjA2NjQwNmMtMjEuMTA1NDY5IDE1LjI3NzM0NC01MC41ODk4NDQgMTUuMjc3MzQ0LTcxLjY5NTMxMyAwbC0zNC42MjUtMjUuMDY2NDA2Yy0xMC41ODk4NDQtNy42Njc5NjgtMjUuOTY4NzUtNy42Njc5NjgtMzYuNTU4NTk0IDBsLTU5LjgyMDMxMiA0My4zMDQ2ODh2MzQuMTYwMTU2aDUxMS4yMDcwMzF2LTM0LjE2MDE1NmwtNTkuODIwMzEyLTQzLjMwNDY4OGMtMTAuNTg5ODQ0LTcuNjY3OTY4LTI1Ljk2NDg0NC03LjY2Nzk2OC0zNi41NjI1IDB6bTAgMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IFdQQVBJIGZyb20gJ3dwYXBpJztcblxuaW1wb3J0IG1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgZ2VvZGF0YSBmcm9tICcuL2dlb2RhdGEnO1xuaW1wb3J0IGNvbnRlbnRIVE1MIGZyb20gJy4vY29udGVudEhUTUwnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZy5qc29uJztcbmltcG9ydCB0aGVtZXMgZnJvbSAnLi9jb25maWcvdGhlbWVzLmpzb24nO1xuXG5cbmNvbnN0IHdwID0gbmV3IFdQQVBJKHtlbmRwb2ludDogY29uZmlnLndvcmRwcmVzcy5yZW1vdGUuZW5kcG9pbnR9KTtcblxubGV0IHRoZW1lO1xubGV0IGN1cnJlbnROb2RlO1xuXG5cbmNvbnN0IGluaXRIb21lID0gKHtsb2NhdGlvbn0pID0+IHtcblx0Y29udGVudEhUTUwuaW5pdEhvbWUoKTtcblx0dXBkYXRlTWFwKHtsb2NhdGlvbn0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dQYWdlID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRhd2FpdCBzZXRUaGVtZShzbHVnKTtcblxuXHRpZiAodGhlbWUuaXNOZXcpIHVwZGF0ZU1hcCh0aGVtZSk7XG5cblx0Ly8gbWFwLnBpdGNoTWFwKCk7XG5cblx0aWYgKGlkID09IDApIHtcblx0XHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7c2x1ZzogJy9naG9zdC1yaXZlci8nfSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2codGhlbWUuaWQsIGlkKTtcblx0XHRcblx0Y29uc3QgcGFnZURhdGEgPSBhd2FpdCBsb2FkUGFnZSh7aWQsIHNsdWd9KTtcblx0Ly8gY29uc29sZS5sb2cocGFnZURhdGEpO1xuXG5cdGN1cnJlbnROb2RlID0gbnVsbDtcblx0XG5cdGNvbnRlbnRIVE1MLnVwZGF0ZVBhZ2UocGFnZURhdGEpO1xuXHRcblx0Ly9zaG93IHBhbmVsXG5cdGNvbnRlbnRIVE1MLnNob3dQYW5lbCh7XG5cdFx0ZGlyZWN0aW9uOiAnZG93bicsXG5cdFx0ZGVsYXk6IDBcblx0fSk7XG5cblx0Y2hhbmdlQnJvd3Nlckhpc3Rvcnkoe1xuXHRcdHRpdGxlOiBwYWdlRGF0YS50aXRsZS5yZW5kZXJlZCxcblx0XHRzbHVnOiBwYWdlRGF0YS5zbHVnXG5cdH0pO1xuXG5cdHJldHVybiBwYWdlRGF0YTtcblx0XG59O1xuXG5jb25zdCBsb2FkUGFnZSA9IGFzeW5jICh7aWQsIHNsdWd9KSA9PiB7XG5cdGxldCBwYWdlRGF0YTtcblxuXHRpZiAoaWQpIHtcblx0XHRwYWdlRGF0YSA9IGF3YWl0IHdwLnBhZ2VzKCkuaWQoaWQpLmVtYmVkKCk7XG5cdH0gZWxzZSBpZiAoc2x1Zykge1xuXHRcdHBhZ2VEYXRhID0gYXdhaXQgd3AucGFnZXMoKS5zbHVnKHNsdWcpLmVtYmVkKCk7XG5cdFx0cGFnZURhdGEgPSBwYWdlRGF0YVswXTtcblx0fVxuXG5cdHJldHVybiBwYWdlRGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93UG9zdCA9IGFzeW5jICh7aWQsIHNsdWd9KSA9PiB7XG5cblx0aWYgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLmlkID09IGlkKSByZXR1cm47XG5cblx0YXdhaXQgY29udGVudEhUTUwuaGlkZVBhbmVsKHtkaXJlY3Rpb246ICd1cCd9KTtcblxuXHRjb250ZW50SFRNTC5zaG93U3Bpbm5lcigpO1xuXG5cdC8vcG9zdERhdGEgLSBsb2FkIGJ5IElEIG9yIGJ5IFNsdWdcblx0Y29uc3QgcG9zdERhdGEgPSBhd2FpdCBsb2FkUG9zdCh7aWQsc2x1Z30pO1xuXHQvLyBjb25zb2xlLmxvZyhwb3N0RGF0YSk7XG5cdGlmICghcG9zdERhdGEpIHtcblx0XHRjb250ZW50SFRNTC5oaWRlU3Bpbm5lcigpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGN1cnJlbnROb2RlID0gcG9zdERhdGE7XG5cblx0Y29uc3QgcG9zdENhdGVnb3JpZXMgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVswXTtcblx0Y29uc3QgcG9zdFRhZ3MgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVsxXTtcblxuXHRsZXQgcG9zdFRoZW1lO1xuXHRpZiAodGhlbWUpIHBvc3RUaGVtZSA9IHBvc3RDYXRlZ29yaWVzLmZpbmQoY2F0ID0+IGNhdC5zbHVnID09IHRoZW1lLnNsdWcpO1xuXG5cdGlmICghcG9zdFRoZW1lKSB7XG5cdFx0aWYgKHBvc3RDYXRlZ29yaWVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGNvbnN0IHRoZW1lUG9zdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3RDYXRlZ29yaWVzLmxlbmd0aCk7XG5cdFx0XHRwb3N0VGhlbWUgPSBwb3N0Q2F0ZWdvcmllc1t0aGVtZVBvc3RdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3N0VGhlbWUgPSBwb3N0Q2F0ZWdvcmllc1swXTtcblx0XHR9XG5cdH1cblx0XG5cdGlmKHBvc3RUaGVtZS5zbHVnID09ICd1bmNhdGVnb3JpemVkJykgY29uc29sZS5sb2coJ1Byb2JsZW0gd2l0aCBjYXRlZ29yeSBcInVuY2F0ZWdvcml6ZWRcIjogJywgcG9zdERhdGEpO1xuXG5cdHNldFRoZW1lKHBvc3RUaGVtZS5zbHVnKTtcblx0aWYgKHRoZW1lLmlzTmV3KSBhd2FpdCB1cGRhdGVNYXAodGhlbWUpO1xuXG5cdC8vZmx5IHRvIGxvY2FsXG5cdGdlb2RhdGEuc2V0Q3VycmVudE5vZGUocG9zdERhdGEpO1xuXHRjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdlb2RhdGEuZ2V0Tm9kZUNvb3JkaW5hdGVzKHBvc3REYXRhKTtcblx0bWFwLmZseVRvKGNvb3JkaW5hdGVzKTtcblx0XG5cdGNvbnRlbnRIVE1MLnVwZGF0ZVBvc3QocG9zdERhdGEscG9zdFRhZ3MsdGhlbWUpO1xuXG5cdGNvbnRlbnRIVE1MLmhpZGVTcGlubmVyKCk7XG5cblx0Ly9zaG93IFBhbmVsXG5cdGNvbnRlbnRIVE1MLnNob3dQYW5lbCh7XG5cdFx0ZGlyZWN0aW9uOiAnZG93bicsXG5cdFx0ZGVsYXk6IDBcblx0fSk7XG5cblx0Y2hhbmdlQnJvd3Nlckhpc3Rvcnkoe1xuXHRcdHRpdGxlOiBwb3N0RGF0YS50aXRsZS5yZW5kZXJlZCxcblx0XHRzbHVnOiBwb3N0RGF0YS5zbHVnXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0cG9zdDogcG9zdERhdGEsXG5cdFx0dGhlbWU6IHBvc3RUaGVtZVxuXHR9O1xuXG59O1xuXG5jb25zdCBsb2FkUG9zdCA9IGFzeW5jICh7aWQsIHNsdWd9KSA9PiB7XG5cblx0bGV0IHBvc3REYXRhO1xuXG5cdGlmIChpZCkge1xuXHRcdHBvc3REYXRhID0gYXdhaXQgd3AucG9zdHMoKS5pZChpZCkuZW1iZWQoKTtcblx0fSBlbHNlIGlmIChzbHVnKSB7XG5cdFx0cG9zdERhdGEgPSBhd2FpdCB3cC5wb3N0cygpLnNsdWcoc2x1ZykuZW1iZWQoKTtcblx0XHRwb3N0RGF0YSA9IHBvc3REYXRhWzBdO1xuXHR9XG5cblx0cmV0dXJuIHBvc3REYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlUGFuZWwgPSBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGF3YWl0IGNvbnRlbnRIVE1MLmhpZGVQYW5lbCh7ZGlyZWN0aW9uOiAndXAnfSk7XG5cdGN1cnJlbnROb2RlID0gbnVsbDtcblx0cmV0dXJuIGN1cnJlbnROb2RlO1xufTtcblxuXG5jb25zdCBzZXRUaGVtZSA9IGFzeW5jIHJlcXVlc3RlZFRoZW1lU2x1ZyA9PiB7XG5cblx0aWYgKCF0aGVtZSkgdGhlbWUgPSB7fTtcblxuXHR0aGVtZS5pc05ldyA9IGZhbHNlO1xuXHRcblx0aWYodGhlbWUuc2x1ZyAhPSByZXF1ZXN0ZWRUaGVtZVNsdWcpIHtcblx0XHRjb25zdCByZXF1ZXN0ZWRUaGVtZSA9IGdldFRoZW1lQnlTbHVnKHJlcXVlc3RlZFRoZW1lU2x1Zyk7XG5cdFx0Y2hhbmdlU3RhdGUocmVxdWVzdGVkVGhlbWUuc3RhdGUpO1xuXHRcdHRoZW1lID0gcmVxdWVzdGVkVGhlbWU7XG5cdFx0dGhlbWUuaXNOZXcgPSB0cnVlO1xuXHR9XG5cblx0aWYgKHRoZW1lLnNsdWcgIT0gJ2hvbWUnKSB7XG5cdFx0YXdhaXQgY29udGVudEhUTUwuaGlkZVBhbmVsKHtkaXJlY3Rpb246ICd1cCd9KTtcblx0fVxuXHRcblx0cmV0dXJuIHRoZW1lO1xufTtcblxuY29uc3QgZ2V0VGhlbWVCeVNsdWcgPSBzbHVnID0+IHRoZW1lcy5maW5kKCB0aGVtZSA9PiB0aGVtZS5zbHVnID09PSBzbHVnICk7XG5jb25zdCBnZXRDdXJyZW50VGhlbWUgPSAoKSA9PiB0aGVtZTtcblxuY29uc3QgY2hhbmdlU3RhdGUgPSBhc3luYyBuZXdTdGF0ZSA9PiB7XG5cblx0aWYgKG5ld1N0YXRlICE9IHRoZW1lLnN0YXRlKSB7XG5cdFx0aWYgKG5ld1N0YXRlID09PSAnaG9tZScpIHtcblx0XHRcdGNvbnRlbnRIVE1MLmhpZGVUb3BNZW51KCk7XG5cdFx0XHRhd2FpdCBjb250ZW50SFRNTC5oaWRlUGFuZWwoe2RpcmVjdGlvbjogJ3VwJ30pO1xuXHRcdFx0Y29udGVudEhUTUwuc2hvd0hvbWUoKTtcblx0XHR9IGVsc2UgaWYgKG5ld1N0YXRlID09PSAncGFnZScpIHtcblx0XHRcdGNvbnRlbnRIVE1MLmhpZGVIb21lKCk7XG5cdFx0XHRjb250ZW50SFRNTC5zaG93VG9wTWVudSgpO1xuXHRcdH1cblx0fVxuXHRcbn07XG5cbmNvbnN0IHVwZGF0ZU1hcCA9IGFzeW5jICh7bG9jYXRpb259KSA9PiB7XG5cblx0aWYgKCF0aGVtZSkgdGhlbWUgPSB0aGVtZXNbMF07XG5cblx0aWYoIW1hcC5pc01hcGJveExvYWRlZCgpKSB7XG5cdFx0aWYgKGxvY2F0aW9uID09PSAnNDA0Jykge1xuXHRcdFx0YXdhaXQgbWFwLmluaXQoe2xvY2F0aW9ufSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF3YWl0IG1hcC5pbml0KHRoZW1lKTtcblx0XHR9XG5cdFx0XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgbWFwLmNoYW5nZU1hcCh0aGVtZSk7XG5cdH1cblxuXHRhd2FpdCBnZW9kYXRhLmRyYXdOb2Rlcyh0aGVtZSk7XG59O1xuXG5jb25zdCBjaGFuZ2VCcm93c2VySGlzdG9yeSA9ICh7dGl0bGUsc2x1Z30pID0+IHtcblx0bGV0IHBhZ2VUaXRsZSA9ICdHaG9zdCBSaXZlcic7XG5cdGlmICh0aXRsZSkgcGFnZVRpdGxlICs9IGAgLSAke3RpdGxlfWA7XG5cblx0ZG9jdW1lbnQudGl0bGUgPSBwYWdlVGl0bGU7XG5cdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcblx0XHR7cGFnZVRpdGxlfSxcblx0XHQnJyxcblx0XHRzbHVnKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpbml0SG9tZSxcblx0c2hvd1BhZ2UsXG5cdHNob3dQb3N0LFxuXHRjbG9zZVBhbmVsLFxuXHRnZXRDdXJyZW50VGhlbWUsXG5cdGdldFRoZW1lQnlTbHVnLFxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSxcbn07IiwiaW1wb3J0IHtzZWxlY3QsIHNlbGVjdEFsbCwgZXZlbnR9IGZyb20gJ2QzL2Rpc3QvZDMubWluJztcbmltcG9ydCB7c2hvd1BhZ2UsIHNob3dQb3N0LCBjbG9zZVBhbmVsfSBmcm9tICcuL2NvbnRlbnQnO1xuaW1wb3J0IHRoZW1lcyBmcm9tICcuL2NvbmZpZy90aGVtZXMuanNvbic7XG5pbXBvcnQge2dldEljb259IGZyb20gJy4vdGFncyc7XG5cblxuY29uc3QgYW5pbWF0aW9uID0ge1xuXHRkdXJhdGlvbjoge1xuXHRcdGluOiAzMDAwLFxuXHRcdG91dDogMjAwMFxuXHR9XG59O1xuXG5sZXQgbWFpbk1lbnUgPSBmYWxzZTtcbmxldCB0b3BNZW51ID0gZmFsc2U7XG5cbmNvbnN0IGluaXRIb21lID0gKCkgPT4ge1xuXG5cdHNlbGVjdCgnI2hvbWUtdGV4dCcpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoMCkgLy8zMDAwXG5cdFx0Ly8gLmR1cmF0aW9uKDApXG5cdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbi5pbilcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuXHRsZXQgZGVsYXkgPSAwOyAvLzgwMDBcblx0XG5cdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cblx0XHRzZWxlY3QoYCNtYWluLSR7dGhlbWUuc2x1Z30tYnRgKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZGVsYXkoZGVsYXkpXG5cdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cblx0XHRkZWxheSArPSAxMDAwO1xuXHR9XG5cblx0Y29uZmlnTWFpbk1lbnUoKTtcblxufTtcblxuY29uc3QgY29uZmlnTWFpbk1lbnUgPSAoKSA9PiB7XG5cdGlmIChtYWluTWVudSA9PSBmYWxzZSkge1xuXHRcdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0XHRzZWxlY3QoYCNtYWluLSR7dGhlbWUuc2x1Z30tYnRgKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0XHR9XG5cdFx0bWFpbk1lbnUgPSB0cnVlO1xuXHR9XG59O1xuXG5jb25zdCBjb25maWdUb3BNZW51ID0gKCkgPT4ge1xuXHRpZiAodG9wTWVudSA9PSBmYWxzZSkge1xuXHRcdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0XHRzZWxlY3QoYCN0b3AtJHt0aGVtZS5zbHVnfS1idGApXG5cdFx0XHRcdC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0XHRcdFx0XG5cdFx0fVxuXHRcdHRvcE1lbnUgPSB0cnVlO1xuXHR9XG59O1xuXG5jb25zdCBzaG93SG9tZSA9ICgpID0+IHtcblxuXHRzZWxlY3QoJyNoZWFkZXItY29sJylcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoMTAwMClcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJzBweCcpO1xuXG5cdHNlbGVjdEFsbCgnLmNvbC1tYWluLW1lbnUnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KDEwMDApXG5cdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnMHB4Jyk7XG5cblx0c2VsZWN0KCcjaG9tZS10ZXh0Jylcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0c2VsZWN0KGAjbWFpbi0ke3RoZW1lLnNsdWd9LWJ0YClcblx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0fVxuXG5cdGNvbmZpZ01haW5NZW51KCk7XG5cbn07XG5cbmNvbnN0IGhpZGVIb21lID0gKCkgPT4ge1xuXHRzZWxlY3QoJyNoZWFkZXItY29sJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnLTUwMHB4Jylcblx0XHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0fSk7XG5cblx0c2VsZWN0QWxsKCcuY29sLW1haW4tbWVudScpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbigzMDAwKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJy0yMDBweCcpXG5cdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0pO1xufTtcblxuY29uc3Qgc2hvd1RvcE1lbnUgPSAoKSA9PiB7XG5cdHNlbGVjdCgnI3RvcC1tZW51Jylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC5zdHlsZSgndG9wJywgLTIwMClcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoMzAwMClcblx0XHQuZHVyYXRpb24oMjAwMClcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKVxuXHRcdC5zdHlsZSgndG9wJywgMCk7XG5cblx0Y29uZmlnVG9wTWVudSgpO1xufTtcblxuY29uc3QgaGlkZVRvcE1lbnUgPSAoKSA9PiB7XG5cdHNlbGVjdCgnI3RvcC1tZW51Jylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KDApXG5cdFx0LmR1cmF0aW9uKDIwMDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ3RvcCcsIC0yMDApXG5cdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0pO1xufTtcblxuY29uc3Qgc2hvd1BhbmVsID0gKHtkaXJlY3Rpb24gPSAnbm9uZScsIGRlbGF5ID0gMH0pID0+IHtcblxuXHRpZiAoZGlyZWN0aW9uID09ICdub25lJykge1xuXHRcdGRpcmVjdGlvbiA9ICcwcHgnO1xuXHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAndXAnKSB7XG5cdFx0ZGlyZWN0aW9uID0gJy0yMDAwcHgnO1xuXHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAnZG93bicpIHtcblx0XHRkaXJlY3Rpb24gPSAnMjAwMHB4Jztcblx0fVxuXG5cdHNlbGVjdCgnI2xlZnQtcGFuZWwnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgZGlyZWN0aW9uKVxuXHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheShkZWxheSlcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJzBweCcpO1xuXG5cdHNlbGVjdCgnI21pZGRsZS1wYW5lbCcpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KGRlbGF5KVxuXHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb24uaW4pXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnMHB4Jyk7XG5cblx0c2VsZWN0KCcjcmlnaHQtcGFuZWwnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgZGlyZWN0aW9uKVxuXHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheShkZWxheSlcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJzBweCcpO1xuXG5cdHNlbGVjdCgnI3JpZ2h0LXBhbmVsJykuc2VsZWN0KCcuZmwtY29sLWNvbnRlbnQnKS5wcm9wZXJ0eSgnc2Nyb2xsVG9wJywgMCk7XG59O1xuXG5jb25zdCBoaWRlUGFuZWwgPSBhc3luYyAoe2RpcmVjdGlvbiA9ICdub25lJ30pID0+IHtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cblx0XHRpZiAoZGlyZWN0aW9uID09ICdub25lJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJzBweCc7XG5cdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3VwJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJy0yMDAwcHgnO1xuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICdkb3duJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJzIwMDBweCc7XG5cdFx0fVxuXHRcblx0XHRzZWxlY3QoJyNsZWZ0LXBhbmVsJylcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kZWxheSgwKVxuXHRcdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbi5vdXQpXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgZGlyZWN0aW9uKVxuXHRcdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHR9KTtcblxuXHRcdHNlbGVjdCgnI21pZGRsZS1wYW5lbCcpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZGVsYXkoMClcblx0XHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb24ub3V0KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsIGRpcmVjdGlvbilcblx0XHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0fSk7XG5cblx0XHRzZWxlY3QoJyNyaWdodC1wYW5lbCcpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZGVsYXkoMClcblx0XHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb24ub3V0KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsIGRpcmVjdGlvbilcblx0XHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0fSk7XG59O1xuXG5jb25zdCB1cGRhdGVQYWdlID0gKHt0aXRsZSwgY29udGVudH0pID0+IHtcblx0Ly9kb20gbWFuaXB1bGF0aW9uXG5cdGNvbnN0IHBhbmVsID0gc2VsZWN0KCcjcmlnaHQtcGFuZWwnKTtcblx0cGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10aXRsZScpLnNlbGVjdCgnLmZsLWhlYWRpbmctdGV4dCcpLmh0bWwodGl0bGUucmVuZGVyZWQpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLWNvbnRlbnQnKS5zZWxlY3QoJy5mbC1yaWNoLXRleHQnKS5odG1sKGNvbnRlbnQucmVuZGVyZWQpO1xuXHRwYW5lbC5zZWxlY3QoJy50YWdsaW5lJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCgnJyk7XG5cdHBhbmVsLnNlbGVjdCgnI2FydGljbGUtdGFncycpLnNlbGVjdCgnLmZsLWh0bWwnKS5odG1sKCcnKTtcblx0cGFuZWwuc2VsZWN0KCcjY2xvc2UtcGFuZWwnKS5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKS5vbignY2xpY2snLCBjbG9zZVBhbmVsKTtcblx0Y2FwdHVyZUxpbmtzKCk7XG59O1xuXG5jb25zdCB1cGRhdGVQb3N0ID0gKHt0aXRsZSwgY29udGVudH0sIHRhZ3MsIHRoZW1lKSA9PiB7XG5cdC8vRE9NIG1hbmlwdWxhdGlvblxuXHRjb25zdCBwYW5lbCA9IHNlbGVjdCgnI3JpZ2h0LXBhbmVsJyk7XG5cblx0cGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10aXRsZScpLnNlbGVjdCgnLmZsLWhlYWRpbmctdGV4dCcpLmh0bWwodGl0bGUucmVuZGVyZWQpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLWNvbnRlbnQnKS5zZWxlY3QoJy5mbC1yaWNoLXRleHQnKS5odG1sKGNvbnRlbnQucmVuZGVyZWQpO1xuXHRwYW5lbC5zZWxlY3QoJyNjbG9zZS1wYW5lbCcpLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpLm9uKCdjbGljaycsIGNsb3NlUGFuZWwpO1xuXHRwYW5lbC5zZWxlY3QoJy50YWdsaW5lJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCh0aGVtZS5zbHVnKTtcblxuXHQvL3RhZ3Ncblx0Y29uc3QgdGFnc0RJViA9IHBhbmVsLnNlbGVjdCgnI2FydGljbGUtdGFncycpLnNlbGVjdCgnLmZsLWh0bWwnKTtcblx0bGV0IHRhZ3NIVE1MID0gJzxkaXYgaWQ9XCJ0YWctY29udGFpbmVyXCI+Jztcblx0Zm9yIChjb25zdCB0YWcgb2YgdGFncykge1xuXHRcdGNvbnN0IGljb24gPSBnZXRJY29uKHRhZyk7XG5cdFx0XG5cdFx0dGFnc0hUTUwgKz0gYDxkaXYgaWQ9XCJ0YWctJHt0YWcuc2x1Z31cIiBjbGFzcz1cInRhZy1waWxsXCI+JHtpY29ufVxuXHRcdCR7dGFnLm5hbWV9XG5cdFx0PC9kaXY+YDtcblx0fVxuXHR0YWdzSFRNTCArPSAnPC9kaXY+JztcblxuXHR0YWdzRElWLmh0bWwodGFnc0hUTUwpO1xuXHR0YWdzRElWLnNlbGVjdEFsbCgnc3ZnJykuYXR0cignd2lkdGgnLCcxNXB4JykuYXR0cignaGVpZ2h0JywnMTVweCcpO1xuXG5cdGNhcHR1cmVMaW5rcygpO1xuXG5cbn07XG5cbmNvbnN0IGNhcHR1cmVMaW5rcyA9ICgpID0+IHtcblx0c2VsZWN0QWxsKCdhJylcblx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHQvL2dldCB1cmwgLy8gZG9tYWluXG5cdFx0XHRjb25zdCBsaW5rID0gc2VsZWN0KHRoaXMpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdGNvbnN0IGRvbWFpbiA9IGxpbmsuc3BsaXQoJy8nKVsyXTtcblxuXHRcdFx0Ly9UZXN0IGlmIGl0IGlzIGEgbG9jYWwgbGluayAobG9jYWxob3N0IC0+IHJlbW90ZSlcblx0XHRcdGNvbnN0IGhvc3QgPSAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09ICdsb2NhbGhvc3QnKSA/ICdsYWJzLmZsdXhvLmFydC5icicgOiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG5cblx0XHRcdC8vaWYgZXh0cnJuYWwsIG5hdmlnYXRlXG5cdFx0XHRpZiAoZG9tYWluICE9IGhvc3QpIHJldHVybjsgLy93aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcblxuXHRcdFx0Ly9pZiBsb2NhbCwgcHJldmVudCBwYWdlIHVwZGF0ZVxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Ly9sb2FkIHBvc3QgYmFzZWQgb24gc2x1ZyBvbiB0aGUgdXJsXG5cdFx0XHRjb25zdCBzbHVnID0gbGluay5zcGxpdCgnLycpWzRdO1xuXG5cdFx0XHRzaG93UG9zdCh7c2x1Z30pO1xuXHRcdH0pO1xuXG59O1xuXG5jb25zdCBzaG93U3Bpbm5lciA9ICgpID0+IHtcblx0c2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuXHRcdC5hdHRyKCdpZCcsICdzcGlubmVyJylcblx0XHQuaHRtbCgnPGRpdiBjbGFzcz1cImxkcy1yaXBwbGVcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+Jyk7XG59O1xuXG5jb25zdCBoaWRlU3Bpbm5lciA9ICgpID0+IHtcblx0c2VsZWN0KCcjc3Bpbm5lcicpLnJlbW92ZSgpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXRIb21lLFxuXHRjb25maWdNYWluTWVudSxcblx0Y29uZmlnVG9wTWVudSxcblx0c2hvd0hvbWUsXG5cdGhpZGVIb21lLFxuXHRzaG93VG9wTWVudSxcblx0aGlkZVRvcE1lbnUsXG5cdHNob3dQYW5lbCxcblx0aGlkZVBhbmVsLFxuXHR1cGRhdGVQYWdlLFxuXHR1cGRhdGVQb3N0LFxuXHRzaG93U3Bpbm5lcixcblx0aGlkZVNwaW5uZXJcbn07IiwiLy8gaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHtzZWxlY3QsZ2VvVHJhbnNmb3JtLGdlb1BhdGgsZWFzZUxpbmVhcn0gZnJvbSAnZDMvZGlzdC9kMy5taW4nO1xuaW1wb3J0IGNocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuXG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBjb250ZW50IGZyb20gJy4vY29udGVudCc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvY29uZmlnLmpzb24nO1xuaW1wb3J0IHJpdmVyMTgzNCBmcm9tICcuL2RhdGEvMTgzNF9BX0pvYmluX2ZpbmFsLTIuanNvbic7XG5cblxuY29uc3QgaW50ZXJuYWxPcHRpb24gPSB7XG5cdHBhc3NUaHJvdWdoOiB0cnVlLFxufTtcblxubGV0IEQzZ2VvUGF0aDtcbmxldCBzdmc7XG5sZXQgcml2ZXJMaW5lcztcbmxldCBkYXRhc2V0O1xubGV0IG5vZGVzUG9pbnQ7XG5sZXQgbm9kZXNMaW5lO1xubGV0IG5vZGVzUG95Z29uO1xuXG5jb25zdCBpbml0ID0gYXN5bmMgY2FudmFzID0+IHtcblxuXHRjb25zdCBEM2dlb1RyYW5zZm9ybSA9IGdlb1RyYW5zZm9ybSh7cG9pbnQ6bWFwLnByb2plY3RQb2ludH0pO1xuXHREM2dlb1BhdGggPSBnZW9QYXRoKCkucHJvamVjdGlvbihEM2dlb1RyYW5zZm9ybSk7XG5cblx0Ly8gT3ZlcmxheSBkMyBvbiB0aGUgbWFwYm94IGNhbnZhc1xuXHRzdmcgPSBzZWxlY3QoY2FudmFzKS5hcHBlbmQoJ3N2ZycpXG5cdFx0LmF0dHIoJ2lkJywgJ21hcC1ib3gtdmlzJylcblx0XHQuYXR0cignaGVpZ2h0JywgJzEwMCUnKTtcblxuXHRkcmF3Uml2ZXIocml2ZXIxODM0LmZlYXR1cmVzLCA1MDAsIDIpO1xuXG59O1xuXG5jb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgZGF0YVVSTCA9IGBodHRwczovL2FwaS5tYXBib3guY29tL2RhdGFzZXRzL3YxLyR7Y29uZmlnLm1hcGJveC51c2VyfS8ke2NvbmZpZy5tYXAuZGF0YXNldH0vZmVhdHVyZXM/YWNjZXNzX3Rva2VuPSR7Y29uZmlnLm1hcGJveC50b2tlbn1gO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFVUkwpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRkYXRhc2V0ID0gZGF0YS5mZWF0dXJlcztcblx0XG5cdHJldHVybiBkYXRhc2V0O1xufTtcblxuXG5jb25zdCBkcmF3Tm9kZXMgPSBhc3luYyAoe3NsdWc6IHRoZW1lfSkgPT4ge1xuXG5cdGlmICghZGF0YXNldCkgYXdhaXQgbG9hZERhdGEoKTtcblxuXHRjb25zdCB0aGVtZU5vZGVzID0gZ2V0VGhlbWVOb2Rlcyh0aGVtZSk7XG5cblx0Y29uc3QgcG9pbnRzID0gdGhlbWVOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpO1xuXHRjb25zdCBsaW5lcyA9IHRoZW1lTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnTGluZVN0cmluZycpO1xuXHRjb25zdCBwb2x5Z29ucyA9IHRoZW1lTm9kZXMuZmlsdGVyKG4gPT4gbi5nZW9tZXRyeS50eXBlID09PSAnUG9seWdvbicpO1xuXG5cdGRyYXdQb2x5Z2lucyh7ZGF0YTpwb2x5Z29uc30pO1xuXHRkcmF3TGluZXMoe2RhdGE6bGluZXN9KTtcblx0ZHJhd1BvaW50cyh7ZGF0YTpwb2ludHN9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHBvaW50cyxcblx0XHRsaW5lcyxcblx0XHRwb2x5Z29uc1xuXHR9O1xuXG59O1xuXG5jb25zdCBnZXRUaGVtZU5vZGVzID0gdGhlbWUgPT4ge1xuXG5cdGNvbnN0IHNlbGVjdGVkTm9kZXMgPSBkYXRhc2V0LmZpbHRlciggbm9kZSA9PiB7XG5cdFx0aWYobm9kZS5wcm9wZXJ0aWVzLnRoZW1lKSB7XG5cdFx0XHRjb25zdCBub2RldGhlbWVzID0gbm9kZS5wcm9wZXJ0aWVzLnRoZW1lLnNwbGl0KCcsICcpO1xuXHRcdFx0Y29uc3QgdGhlbWVOb2RlID0gbm9kZXRoZW1lcy5maWx0ZXIodCA9PiB0LnRvTG93ZXJDYXNlKCkgPT09IHRoZW1lKTtcblx0XHRcdGlmICh0aGVtZU5vZGUubGVuZ3RoID4gMCkgcmV0dXJuIG5vZGU7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gc2VsZWN0ZWROb2Rlcztcbn07XG5cbmNvbnN0IGdldE5vZGVDb29yZGluYXRlcyA9IGFzeW5jICh7aWR9KSA9PiB7XG5cdGlmICghZGF0YXNldCkgYXdhaXQgbG9hZERhdGEoKTtcblx0Y29uc3QgaXRlbSA9IGRhdGFzZXQuZmluZCggaXRlbSA9PiBpdGVtLnByb3BlcnRpZXMuaWQgPT09IGlkICk7XG5cdGlmICghaXRlbSkgcmV0dXJuIGNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXI7IC8vIHJldHVybiBjZW50ZXIgb2YgbWFwXG5cblx0aWYgKGl0ZW0uZ2VvbWV0cnkudHlwZSA9PSAnUG9pbnQnKSByZXR1cm4gaXRlbS5nZW9tZXRyeS5jb29yZGluYXRlcztcblx0Y29uc3QgY29vcmRpbmF0ZXMgPSBpdGVtLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdO1xuXHRyZXR1cm4gY29vcmRpbmF0ZXM7XG59O1xuXG5jb25zdCBkcmF3UG9pbnRzID0gICh7ZGF0YSwgdHJhbnNpdGlvblRpbWUgPSA1MDAwLCBkZWxheVRpbWUgPSAyMDB9KSA9PiB7XG5cblx0Y29uc3QgY29sb3VycyA9IGdldENvbG91cnMoKTtcblxuXHRub2Rlc1BvaW50ID0gc3ZnLnNlbGVjdEFsbCgnLmNpcmNsZScpXG5cdFx0LmRhdGEoZGF0YSk7XG5cblx0bm9kZXNQb2ludC5leGl0KClcblx0XHQuYXR0cignaWQnLCAnZXhpdCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5zdHlsZSgnZmlsbCcsICcjMDAwMDAwJylcblx0XHQuYXR0cigncicsIDApXG5cdFx0LnJlbW92ZSgpO1xuXG5cdG5vZGVzUG9pbnQuZW50ZXIoKS5hcHBlbmQoJ2NpcmNsZScpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2NpcmNsZScpO1xuXG5cdG5vZGVzUG9pbnQgPSBzdmcuc2VsZWN0QWxsKCcuY2lyY2xlJylcblx0XHQuYXR0cignaWQnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmV0dXJuIGBpbmRleC0ke2QucHJvcGVydGllcy5pZH1gO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLmFjdGl2ZS5zdHJva2UpLmhleCgpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdmaWxsJywgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLmFjdGl2ZS5maWxsKS5hbHBoYSgwLjcpLmhleCgpO1xuXHRcdH0pXG5cdFx0LmF0dHIoJ2N4JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJldHVybiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS54O1xuXHRcdH0pXG5cdFx0LmF0dHIoJ2N5JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJldHVybiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS55O1xuXHRcdH0pXG5cdFx0LmF0dHIoJ3InLCAwKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuMSlcblx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJlc2V0Tm9kZXNTdGF0ZShkKTtcblx0XHRcdGNvbnRlbnQuc2hvd1Bvc3QoZC5wcm9wZXJ0aWVzKTtcblx0XHR9KVxuXHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdG5vZGVzT3ZlcihkKTtcblx0XHR9KVxuXHRcdC5vbignbW91c2VvdXQnLCAoKSA9PiB7XG5cdFx0XHRub2Rlc091dCgpO1xuXHRcdH0pO1xuXHRcblx0bm9kZXNQb2ludC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0LmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG5cdFx0XHRyZXR1cm4gZGVsYXlUaW1lICogaTtcblx0XHR9KVxuXHRcdC5hdHRyKCdyJywgOClcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcbn07XG5cbmNvbnN0IGRyYXdMaW5lcyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gNTAwMCwgZGVsYXlUaW1lID0gMjAwfSkgPT4ge1xuXG5cdGNvbnN0IGNvbG91cnMgPSBnZXRDb2xvdXJzKCk7XG5cblx0bm9kZXNMaW5lID0gc3ZnLnNlbGVjdEFsbCgnLmxpbmUnKVxuXHRcdC5kYXRhKGRhdGEpO1xuXG5cdG5vZGVzTGluZS5leGl0KClcblx0XHQuYXR0cignaWQnLCAnZXhpdCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5yZW1vdmUoKTtcblxuXHRub2Rlc0xpbmUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuXHRcdC5hdHRyKCdjbGFzcycsICdsaW5lJyk7XG5cblx0bm9kZXNMaW5lID0gc3ZnLnNlbGVjdEFsbCgnLmxpbmUnKVxuXHRcdC5hdHRyKCdpZCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZC5wcm9wZXJ0aWVzLmlkO1xuXHRcdH0pXG5cdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLmFjdGl2ZS5zdHJva2UpLmhleCgpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuMSlcblx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJlc2V0Tm9kZXNTdGF0ZShkKTtcblx0XHRcdGNvbnRlbnQuc2hvd1Bvc3QoZC5wcm9wZXJ0aWVzKTtcblx0XHR9KVxuXHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdG5vZGVzT3ZlcihkKTtcblx0XHR9KVxuXHRcdC5vbignbW91c2VvdXQnLCAoKSA9PiB7XG5cdFx0XHRub2Rlc091dCgpO1xuXHRcdH0pO1xuXG5cblx0bm9kZXNMaW5lLnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHQuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHtcblx0XHRcdHJldHVybiBkZWxheVRpbWUgKiBpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCA0KVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cbn07XG5cbmNvbnN0IGRyYXdQb2x5Z2lucyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gNTAwMCwgZGVsYXlUaW1lID0gMjAwfSkgPT4ge1xuXG5cdGNvbnN0IGNvbG91cnMgPSBnZXRDb2xvdXJzKCk7XG5cblx0bm9kZXNQb3lnb24gPSBzdmcuc2VsZWN0QWxsKCcucG9seWdvbnMnKVxuXHRcdC5kYXRhKGRhdGEpO1xuXG5cdG5vZGVzUG95Z29uLmV4aXQoKVxuXHRcdC5hdHRyKCdpZCcsICdleGl0Jylcblx0XHQuYXR0cignY2xhc3MnLCAnZXhpdCcpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbig1MDApXG5cdFx0LnN0eWxlKCdmaWxsJywgJyMwMDAwMDAnKVxuXHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5yZW1vdmUoKTtcblxuXHRub2Rlc1BveWdvbi5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ3BvbHlnb25zJyk7XG5cblx0bm9kZXNQb3lnb24gPSBzdmcuc2VsZWN0QWxsKCcucG9seWdvbnMnKVxuXHRcdC5hdHRyKCdpZCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZC5wcm9wZXJ0aWVzLmlkO1xuXHRcdH0pXG5cdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG5cdFx0LnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAwKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLmFjdGl2ZS5zdHJva2UpLmhleCgpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdmaWxsJywgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNocm9tYShjb2xvdXJzLmFjdGl2ZS5maWxsKS5hbHBoYSgwLjcpLmhleCgpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMC4xKVxuXHRcdC5vbignY2xpY2snLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmVzZXROb2Rlc1N0YXRlKGQpO1xuXHRcdFx0Y29udGVudC5zaG93UG9zdChkLnByb3BlcnRpZXMpO1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0bm9kZXNPdmVyKGQpO1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW91dCcsICgpID0+IHtcblx0XHRcdG5vZGVzT3V0KCk7XG5cdFx0fSk7XG5cblxuXHRub2Rlc1BveWdvbi50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWUpXG5cdFx0LmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG5cdFx0XHRyZXR1cm4gZGVsYXlUaW1lICogaTtcblx0XHR9KVxuXHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMilcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxufTtcblxuY29uc3QgZHJhd1JpdmVyID0gZGF0YSA9PiB7XG5cblx0cml2ZXJMaW5lcyA9IHN2Zy5zZWxlY3RBbGwoJyNyaXZlcicpXG5cdFx0LmRhdGEoZGF0YSlcblx0XHQuZW50ZXIoKVxuXHRcdC5hcHBlbmQoJ3BhdGgnKVxuXHRcdC5hdHRyKCdpZCcsICdyaXZlcicpXG5cdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG5cdFx0LnN0eWxlKCdmaWxsJywnbm9uZScpXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuXHRcdC5zdHlsZSgnc3Ryb2tlJywgJyMwMDcxYmMnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuOCk7XG5cblx0Ly8gcml2ZXJMaW5lcy50cmFuc2l0aW9uKClcblx0Ly8gXHQuZHVyYXRpb24oMTAwMClcblx0Ly8gXHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDQpXG5cdC8vIFx0LnN0eWxlKCdvcGFjaXR5JywgMC44KTtcblxuXHQvL2dyYXBoIGFuaW1hdGlvblxuXHRsZXQgbGluZUxlbmd0aCA9IHJpdmVyTGluZXMubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cblx0cml2ZXJMaW5lc1xuXHRcdC5hdHRyKCdzdHJva2UtZGFzaGFycmF5JywgbGluZUxlbmd0aCArICcgJyArIGxpbmVMZW5ndGgpXG5cdFx0LmF0dHIoJ3N0cm9rZS1kYXNob2Zmc2V0JywgK2xpbmVMZW5ndGgpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbig4MDAwKVxuXHRcdC5lYXNlKGVhc2VMaW5lYXIpXG5cdFx0LmF0dHIoJ3N0cm9rZS1kYXNob2Zmc2V0JywgMClcblx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpXG5cdFx0Lm9uKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRpZighaW50ZXJuYWxPcHRpb24ucGFzc1Rocm91Z2gpIG1hcC5waXRjaE1hcCh7ZmluYWxQaXRjaDo0MCwgZHVyYXRpb246MjAwMH0pO1xuXHRcdH0pO1xufTtcblxuY29uc3QgbWFwVXBkYXRlID0gICgpID0+IHtcblx0cml2ZXJVcGRhdGUoKTtcblx0bm9kZVVwZGF0ZSgpO1xufTtcblxuY29uc3Qgcml2ZXJVcGRhdGUgPSAoKSA9PiB7XG5cdGlmIChyaXZlckxpbmVzKSB7XG5cdFx0cml2ZXJMaW5lc1xuXHRcdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG5cdFx0XHQuYXR0cignc3Ryb2tlLWRhc2hhcnJheScsICdub25lJylcblx0XHRcdC5hdHRyKCdzdHJva2UtZGFzaG9mZnNldCcsICdub25lJyk7XG5cdH1cbn07XG5cbmNvbnN0IG5vZGVVcGRhdGUgPSAoKSA9PiB7XG5cdFxuXHRpZiAobm9kZXNQb2ludCkge1xuXHRcdG5vZGVzUG9pbnRcblx0XHRcdC5hdHRyKCdjeCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS54O1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdjeScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBtYXAucHJvamVjdChkLmdlb21ldHJ5LmNvb3JkaW5hdGVzKS55O1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSBub2Rlc0xpbmUuYXR0cignZCcsIEQzZ2VvUGF0aCk7XG5cdGlmIChub2Rlc1BveWdvbikgbm9kZXNQb3lnb24uYXR0cignZCcsIEQzZ2VvUGF0aCk7XG5cdFxufTtcblxuY29uc3QgZ2V0Q29sb3VycyA9ICgpID0+IHtcblxuXHRjb25zdCB0aGVtZSA9IGNvbnRlbnQuZ2V0Q3VycmVudFRoZW1lKCk7XG5cblx0aWYgKHRoZW1lLnNsdWcgPT09ICdlbnZpcm9ubWVudCcpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aXZlOiB7XG5cdFx0XHRcdGZpbGw6ICcjRkZERTE3Jyxcblx0XHRcdFx0c3Ryb2tlOiAnIzhCNUUzQydcblx0XHRcdH0sXG5cdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHRzdHJva2U6ICcjZmZmZmZmJ1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRpZiAodGhlbWUuc2x1ZyA9PT0gJ3dhdGVyJykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmU6IHtcblx0XHRcdFx0ZmlsbDogJyMwMEFFRUYnLFxuXHRcdFx0XHRzdHJva2U6ICcjMUI3NUJDJ1xuXHRcdFx0fSxcblx0XHRcdHNlbGVjdGVkOiB7XG5cdFx0XHRcdHN0cm9rZTogJyNmZmZmZmYnXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGlmICh0aGVtZS5zbHVnID09PSAnc3RlcHMnKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGl2ZToge1xuXHRcdFx0XHRmaWxsOiAnI0YxNUEyOScsXG5cdFx0XHRcdHN0cm9rZTogJyNGMTVBMjknXG5cdFx0XHR9LFxuXHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0c3Ryb2tlOiAnIzU4NTk1Qidcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5jb25zdCBub2Rlc092ZXIgPSBjdXJyZW50ID0+IHtcblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50XG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRpZiAoZCAhPT0gY3VycmVudCkgcmV0dXJuIDAuNTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdGlmIChkID09PSBjdXJyZW50KSByZXR1cm4gNDtcblx0XHRcdH0pO1xuXG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSB7XG5cdFx0bm9kZXNMaW5lXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRpZiAoZCAhPT0gY3VycmVudCkgcmV0dXJuIDAuNTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdGlmIChkID09PSBjdXJyZW50KSByZXR1cm4gNztcblx0XHRcdH0pO1xuXHR9XG5cblx0aWYgKG5vZGVzUG95Z29uKSB7XG5cdFx0bm9kZXNQb3lnb25cblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdGlmIChkICE9PSBjdXJyZW50KSByZXR1cm4gMC41O1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0aWYgKGQgPT09IGN1cnJlbnQpIHJldHVybiA0O1xuXHRcdFx0fSk7XG5cdH1cbn07IFxuXG5jb25zdCBub2Rlc091dCA9ICgpID0+IHtcblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50XG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKTtcblx0fVxuXHRpZiAobm9kZXNMaW5lKSB7XG5cdFx0bm9kZXNMaW5lXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCA0KTtcblx0fVxuXHRpZiAobm9kZXNQb3lnb24pIHtcblx0XHRub2Rlc1BveWdvblxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMik7XG5cdH1cbn07XG5cbmNvbnN0IHJlc2V0Tm9kZXNTdGF0ZSA9ICgpID0+IHtcblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDIwMDApXG5cdFx0XHQuZGVsYXkoMTAwMClcblx0XHRcdC5hdHRyKCdyJywgOCk7XG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSB7XG5cdFx0bm9kZXNMaW5lLnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDIwMDApXG5cdFx0XHQuZGVsYXkoMTAwMClcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNCk7XG5cdH1cblxuXHRpZiAobm9kZXNQb3lnb24pIHtcblx0XHRub2Rlc1BveWdvbi50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbigyMDAwKVxuXHRcdFx0LmRlbGF5KDEwMDApXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIpO1xuXHR9XG59O1xuXG5jb25zdCBzZXRDdXJyZW50Tm9kZSA9ICh7aWR9KSA9PiB7XG5cblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0XHQuYXR0cigncicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0aWYgKGQucHJvcGVydGllcy5pZCA9PT0gaWQpIHJldHVybiAxNjtcblx0XHRcdFx0cmV0dXJuIDg7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cdH1cblxuXHRpZiAobm9kZXNMaW5lKSB7XG5cdFx0bm9kZXNMaW5lLnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZC5wcm9wZXJ0aWVzLmlkID09PSBpZCk7XG5cdFx0XHRcdGlmIChkLnByb3BlcnRpZXMuaWQgPT09IGlkKSByZXR1cm4gODtcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cdH1cblxuXHRpZiAobm9kZXNQb3lnb24pIHtcblx0XHRub2Rlc1BveWdvbi50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbigzMDAwKVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGlmIChkLnByb3BlcnRpZXMuaWQgPT09IGlkKSByZXR1cm4gODtcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cdH1cblx0XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdCxcblx0ZHJhd05vZGVzLFxuXHRtYXBVcGRhdGUsXG5cdGdldE5vZGVDb29yZGluYXRlcyxcblx0c2V0Q3VycmVudE5vZGVcbn07IiwiaW1wb3J0IHtzZWxlY3Qsc2NhbGVMaW5lYXJ9IGZyb20gJ2QzL2Rpc3QvZDMubWluJztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xuLy8gaW1wb3J0ICdtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuY3NzJ1xuaW1wb3J0IGdlb2RhdGEgZnJvbSAnLi9nZW9kYXRhJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcuanNvbic7XG5cblxuY29uc3QgbWFwQm94Q29uZmlnID0ge1xuXHRjb250YWluZXI6ICdtYXAnLFxuXHRzdHlsZTogYG1hcGJveDovL3N0eWxlcy8ke2NvbmZpZy5tYXBib3gudXNlcn0vJHtjb25maWcubWFwLmRlZmF1bHQuc3R5bGVJRH1gLFxuXHRjZW50ZXI6IGNvbmZpZy5tYXAuZGVmYXVsdC5jZW50ZXIsIC8vY2VudGVyIGluIE1vbnRyZWFsXG5cdHpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC56b29tLFxuXHRwaXRjaDogY29uZmlnLm1hcC5kZWZhdWx0LnBpdGNoLFxuXHRtYXhab29tOiBjb25maWcubWFwLmRlZmF1bHQubWF4Wm9vbSxcblx0bWF4Qm91bmRzOiBjb25maWcubWFwLmRlZmF1bHQubWF4Qm91bmRzLFxuXHRpbnRlcmFjdGl2ZTogdHJ1ZSxcbn07XG5cbmxldCBtYXBib3g7XG5sZXQgcGl0Y2hBbmltYXRpb247XG5cblxuY29uc3QgaW5pdCA9IGFzeW5jICh7bWFwSUQsIGxvY2F0aW9ufSkgPT4ge1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuXHRcdC8vbWFwIGNvbnRhaW5lciBzZXQgb24gV1AgPiBCZWF2ZXJcblx0XHRzZWxlY3QoJyNhcHAnKS5zZWxlY3QoJzpmaXJzdC1jaGlsZCcpXG5cdFx0XHQuYXBwZW5kKCdkaXYnKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ21hcCcpO1xuXHRcdFxuXG5cdFx0Ly8gc2VsZWN0KCcjbWFwJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ21hcC1iZycpO1xuXHRcdC8vIHNlbGVjdCgnLm1hcGJveGdsLWNhbnZhcycpLnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cblxuXHRcdGlmIChsb2NhdGlvbiA9PT0gJzQwNCcpIHNldFVua25vd0xvY2F0aW9uKCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vNDA0OiBjZW50ZXIgdGhlIG1hcCBhbnl3aGVyZSBpbiB0aGUgZ2xvYmVcblxuXHRcdGlmIChtYXBJRCkgbWFwQm94Q29uZmlnLnN0eWxlID0gYG1hcGJveDovL3N0eWxlcy8ke2NvbmZpZy5tYXBib3gudXNlcn0vJHttYXBJRH1gO1x0XHQvL2lmIGRlZXBsaW5rOiBzZXQgbWFwIHN0eWxlXG5cblx0XHRtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IGNvbmZpZy5tYXBib3gudG9rZW47XG5cdFx0bWFwYm94ID0gbmV3IG1hcGJveGdsLk1hcChtYXBCb3hDb25maWcpO1xuXG5cdFx0bWFwYm94Lm9uKCdsb2FkJywgKCkgPT4ge1xuXHRcdFx0Ly8gcGl0Y2hNYXAoKTtcblxuXHRcdFx0Z2VvZGF0YS5pbml0KG1hcGJveC5nZXRDYW52YXNDb250YWluZXIoKSk7XG5cdFx0XHRcblx0XHRcdGlmIChsb2NhdGlvbiA9PT0gJzQwNCcpIGZseUZyb21Vbmtub3dMb2NhdGlvbigpO1xuXG5cdFx0XHRtYXBib3gub24oJ3ZpZXdyZXNldCcsIHVwZGF0ZSk7XG5cdFx0XHRtYXBib3gub24oJ21vdmUnLCB1cGRhdGUpO1xuXHRcdFx0bWFwYm94Lm9uKCdtb3ZlZW5kJywgdXBkYXRlKTtcblx0XHRcdFxuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0pO1xuXHR9KTtcblxufTtcblxuY29uc3Qgc2V0VW5rbm93TG9jYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cblx0Ly9hbnl3aGVyZSBpbiB0aGUgZ2xvYmVcblx0Y29uc3QgbGF0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTgwKSAtIDkwO1xuXHRjb25zdCBsb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjApIC0gMTgwO1xuXG5cdG1hcEJveENvbmZpZy56b29tID0gNTtcblx0bWFwQm94Q29uZmlnLmNlbnRlciA9IFtsb24sbGF0XTtcblx0bWFwQm94Q29uZmlnLm1heEJvdW5kcyA9IG51bGw7XG59O1xuXG5jb25zdCBmbHlGcm9tVW5rbm93TG9jYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cdG1hcGJveC5mbHlUbyh7XG5cdFx0Y2VudGVyOiBjb25maWcubWFwLmRlZmF1bHQuY2VudGVyLFxuXHRcdHpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC56b29tLFxuXHRcdHNwZWVkOiAxLFxuXHRcdGN1cnZlOiAxLFxuXHRcdG1pblpvb206IDMsXG5cdFx0Ly8gcGl0Y2g6IDYwLFxuXHRcdC8vIG1heER1cmF0aW9uOiA1MDAwLFxuXHRcdGVhc2luZzogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH1cblx0fSk7XG5cblx0bWFwYm94Lm9uKCdtb3ZlZW5kJywgKCkgPT4ge1xuXHRcdGlmIChtYXBib3guZ2V0TWF4Qm91bmRzKCkgPT0gbnVsbCkgbWFwYm94LnNldE1heEJvdW5kcyhjb25maWcubWFwLmRlZmF1bHQubWF4Qm91bmRzKTtcblx0fSk7XG59O1xuXG5jb25zdCB1cGRhdGUgPSAoKSA9PiBnZW9kYXRhLm1hcFVwZGF0ZSgpO1xuXG4vL2NoZWNrIGlmIG1hcCBpcyBsb2FkZWRcbmNvbnN0IGlzTWFwYm94TG9hZGVkID0gKCkgPT4gIHtcblx0aWYgKG1hcGJveCkgcmV0dXJuIG1hcGJveC5pc1N0eWxlTG9hZGVkKCk7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbi8vY2hhbmdlIG1hcCBzdHlsZVxuY29uc3QgY2hhbmdlTWFwID0gKHttYXBJRH0pID0+IHtcblx0bWFwYm94LnNldFN0eWxlKGBtYXBib3g6Ly9zdHlsZXMvJHtjb25maWcubWFwYm94LnVzZXJ9LyR7bWFwSUR9YCk7XG5cdHBpdGNoTWFwKHtmaW5hbFBpdGNoOjAsIGR1cmF0aW9uOjF9KTtcbn07XG5cbmNvbnN0IGZseVRvID0gY29vcmRpbmF0ZXMgPT4ge1xuXHRtYXBib3guZmx5VG8oe1xuXHRcdGNlbnRlcjpjb29yZGluYXRlcyxcblx0XHR6b29tOiAxNyxcblx0XHRzcGVlZDogMSxcblx0XHRjdXJ2ZTogMSxcblx0XHQvLyBtaW5ab29tOiAzLFxuXHRcdC8vIHBpdGNoOiA2MCxcblx0XHQvLyBtYXhEdXJhdGlvbjogNTAwMCxcblx0XHRlYXNpbmc6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9XG5cdH0pO1xufTtcblxuLy9waXRjaCBtYXAgYW5pbWF0aW9uXG5jb25zdCBwaXRjaE1hcCA9ICh7ZmluYWxQaXRjaCA9IDAsIGR1cmF0aW9uID0gMTAwMH0pID0+IHtcblxuXHRpZiAocGl0Y2hBbmltYXRpb24pIGNsZWFySW50ZXJ2YWwocGl0Y2hBbmltYXRpb24pO1xuXG5cdGNvbnN0IHRpY2sgPSAxMDtcblx0bGV0IGVsYXBzZSA9IDA7XG5cblx0Y29uc3Qgc2NhbGVQaXRjaCA9IHNjYWxlTGluZWFyKClcblx0XHQuZG9tYWluKFswLCBkdXJhdGlvbl0pXG5cdFx0LnJhbmdlKFttYXBib3guZ2V0UGl0Y2goKSwgZmluYWxQaXRjaF0pO1xuXG5cdHBpdGNoQW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHRtYXBib3guc2V0UGl0Y2goc2NhbGVQaXRjaChlbGFwc2UpKTtcblx0XHQvLyBtYXBib3guc2V0Wm9vbShzY2FsZVpvb20oZWxhcHNlKSk7XG5cdFx0ZWxhcHNlICs9IHRpY2s7XG5cdFx0aWYgKGVsYXBzZSA+IGR1cmF0aW9uKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHBpdGNoQW5pbWF0aW9uKTtcblx0XHRcdHBpdGNoQW5pbWF0aW9uID0gbnVsbDtcblx0XHR9XG5cdH0sIHRpY2spO1xuXG59O1xuXG4vLyBQcm9qZWN0IEdlb0pTT04gY29vcmRpbmF0ZSB0byB0aGUgbWFwJ3MgY3VycmVudCBzdGF0ZVxuY29uc3QgcHJvamVjdCA9IGQgPT4gbWFwYm94LnByb2plY3QobmV3IG1hcGJveGdsLkxuZ0xhdCgrZFswXSwgK2RbMV0pKTtcblxuLy8gUHJvamVjdCBHZW9KU09OIGNvb3JkaW5hdGUgdG8gdGhlIG1hcCdzIGN1cnJlbnQgc3RhdGVcbmNvbnN0IHByb2plY3RQb2ludCA9IGZ1bmN0aW9uIChsb24sIGxhdCkge1xuXHRsZXQgcG9pbnQgPSBtYXBib3gucHJvamVjdChuZXcgbWFwYm94Z2wuTG5nTGF0KGxvbiwgbGF0KSk7XG5cdHRoaXMuc3RyZWFtLnBvaW50KHBvaW50LngsIHBvaW50LnkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpbml0LFxuXHR1cGRhdGUsXG5cdGlzTWFwYm94TG9hZGVkLFxuXHRjaGFuZ2VNYXAsXG5cdHBpdGNoTWFwLFxuXHRwcm9qZWN0LFxuXHRwcm9qZWN0UG9pbnQsXG5cdGZseVRvXG59O1xuIiwiaW1wb3J0IGdob3N0IGZyb20gJy4vYXNzZXRzL3NuYXBjaGF0LnN2Zyc7XG5pbXBvcnQgdW5ydWx5V2F0ZXJzIGZyb20gJy4vYXNzZXRzL3RzdW5hbWkuc3ZnJztcbmltcG9ydCBpbWFnaW5hcmllcyBmcm9tICcuL2Fzc2V0cy90aG91Z2h0LWJ1YmJsZS5zdmcnO1xuaW1wb3J0IGluZnJhc3RydWN0dXJlcyBmcm9tICcuL2Fzc2V0cy9jb25lLnN2Zyc7XG5pbXBvcnQgY29udGFtaW5hdGlvbiBmcm9tICcuL2Fzc2V0cy9iaW9oYXphcmQuc3ZnJztcbmltcG9ydCBzcGVjdWxhdGl2ZSBmcm9tICcuL2Fzc2V0cy9oZWxwLnN2Zyc7XG5pbXBvcnQgYmV5b25kSHVtYW5zIGZyb20gJy4vYXNzZXRzL3NuYWtlLnN2Zyc7XG5pbXBvcnQgZGlzcmVhcHBlYXJpbmdXYXRlcnMgZnJvbSAnLi9hc3NldHMvc2VhLnN2Zyc7XG5cbmV4cG9ydCBjb25zdCBnZXRJY29uID0gKHtzbHVnfSkgPT4ge1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09ICdnaG9zdHMnKSByZXR1cm4gZ2hvc3Q7XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT0gJ3VucnVsbHl3YXRlcnMnKSByZXR1cm4gdW5ydWx5V2F0ZXJzO1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09ICdpbWFnaW5hcmllcycpIHJldHVybiBpbWFnaW5hcmllcztcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PSAnaW5mcmFzdHJ1Y3R1cmUnKSByZXR1cm4gaW5mcmFzdHJ1Y3R1cmVzO1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09ICdjb250YW1pbmF0aW9uJykgcmV0dXJuIGNvbnRhbWluYXRpb247XG5cdGlmIChzbHVnLnRvTG93ZXJDYXNlKCkgPT0gJ3NwZWN1bGF0aW9uJykgcmV0dXJuIHNwZWN1bGF0aXZlO1xuXHRpZiAoc2x1Zy50b0xvd2VyQ2FzZSgpID09ICdiZXlvbmQtaHVtYW5zJykgcmV0dXJuIGJleW9uZEh1bWFucztcblx0aWYgKHNsdWcudG9Mb3dlckNhc2UoKSA9PSAnZGlzcmVhcHBlYXJpbmd3YXRlcnMnKSByZXR1cm4gZGlzcmVhcHBlYXJpbmdXYXRlcnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEljb25cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==