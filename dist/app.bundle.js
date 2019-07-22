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
/******/ 			if(installedChunks[chunkId]) {
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



const host = 'http://labs.fluxo.art.br'; //'http://localhost:8888'; // http://labs.fluxo.art.br
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

	//test if url is searching fofr deeplink
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
/*! exports provided: showPage, showPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPage", function() { return showPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPost", function() { return showPost; });
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

let theme = _config_themes_json__WEBPACK_IMPORTED_MODULE_5__[0];


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
		
	const pageData = await loadPage({id, slug});
	// console.log(pageData);
	
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

	await _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({direction: 'up'});

	_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].showSpinner();

	//postData - load by ID or by Slug
	const postData = await loadPost({id,slug});
	// console.log(postData);
	if (!postData) {
		_contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hideSpinner();
		return;
	}

	const postCategories = postData._embedded['wp:term'][0];
	const postTags = postData._embedded['wp:term'][1];

	// const postTheme = postCategories[0].slug;
	let postTheme = postCategories.find(cat => cat.slug == theme.slug);

	if (!postTheme) postTheme = postCategories[0];
	
	if(postTheme.slug == 'uncategorized') console.log('Problem with category "uncategorized": ', postData);

	setTheme(postTheme.slug);
	if (theme.isNew) updateMap(theme);
	
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


const setTheme = async requestedThemeSlug => {

	theme.isNew = false;
	
	if(theme.slug != requestedThemeSlug) {
		const requestedTheme = getThemeBySlug(requestedThemeSlug);
		changeState(requestedTheme.state);
		theme = requestedTheme;
		theme.isNew = true;
	}

	if (theme.slug != 'home') {
		await _contentHTML__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanel({
			direction: 'up'
		});
	}
	
	return theme;
};

const getThemeBySlug = slug => _config_themes_json__WEBPACK_IMPORTED_MODULE_5__.find( theme => theme.slug === slug );

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

	if(!_map__WEBPACK_IMPORTED_MODULE_1__["default"].isMapboxLoaded()) {
		if (location === '404') {
			await _map__WEBPACK_IMPORTED_MODULE_1__["default"].init({location});
		} else {
			await _map__WEBPACK_IMPORTED_MODULE_1__["default"].init(theme);
		}
		
	} else {
		await _map__WEBPACK_IMPORTED_MODULE_1__["default"].changeMap(theme);
	}

	_geodata__WEBPACK_IMPORTED_MODULE_2__["default"].drawNodes(theme);
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
				.on('click', () => Object(_content__WEBPACK_IMPORTED_MODULE_1__["showPage"])(theme))
				.style('cursor', 'pointer'); 
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
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').select('#article-title').select('.fl-heading-text').html(title.rendered);
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').select('#article-content').select('.fl-rich-text').html(content.rendered);
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').select('.tagline').select('.fl-heading-text').html('');
	Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel').select('#article-tags').select('.fl-html').html('');
	captureLinks();
};

const updatePost = ({title, content}, tags, theme) => {
	//DOM manipulation
	const panel = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])('#right-panel');

	panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
	panel.select('#article-content').select('.fl-rich-text').html(content.rendered);
	panel.select('.tagline').select('.fl-heading-text').html(theme.slug);

	//tags
	const tagsDIV = panel.select('#article-tags').select('.fl-html');
	let tagsHTML = '<div id="tag-container">';
	for (const tag of tags) {
		tagsHTML += `<div id="tag-${tag.slug}" class="tag-pill">${tag.name}</div>`;
	}
	tagsHTML += '</div>';

	tagsDIV.html(tagsHTML);

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
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/config/config.json", 1);
/* harmony import */ var _data_1834_A_Jobin_final_2_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/1834_A_Jobin_final-2.json */ "./src/data/1834_A_Jobin_final-2.json");
var _data_1834_A_Jobin_final_2_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/1834_A_Jobin_final-2.json */ "./src/data/1834_A_Jobin_final-2.json", 1);
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

	const D3geoTransform = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["geoTransform"])({point:_map__WEBPACK_IMPORTED_MODULE_1__["default"].projectPoint});
	D3geoPath = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["geoPath"])().projection(D3geoTransform);

	// Overlay d3 on the mapbox canvas
	svg = Object(d3_dist_d3_min__WEBPACK_IMPORTED_MODULE_0__["select"])(canvas).append('svg')
		.attr('id', 'map-box-vis')
		.attr('height', '100%');

	drawRiver(_data_1834_A_Jobin_final_2_json__WEBPACK_IMPORTED_MODULE_4__.features, 500, 2);

};

const loadData = async () => {
	const dataURL = `https://api.mapbox.com/datasets/v1/${_config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.user}/${_config_config_json__WEBPACK_IMPORTED_MODULE_3__.map.dataset}/features?access_token=${_config_config_json__WEBPACK_IMPORTED_MODULE_3__.mapbox.token}`;
	const response = await fetch(dataURL);
	const data = await response.json();
	dataset = data.features;
};


const drawNodes = async ({slug: theme}) => {

	if (!dataset) await loadData();

	const themeNodes = getThemeNodes(theme);

	const points = themeNodes.filter(n => n.geometry.type === 'Point');
	const lines = themeNodes.filter(n => n.geometry.type === 'LineString');
	const polygons = themeNodes.filter(n => n.geometry.type === 'Polygon');

	drawPoints({data:points});
	drawLines({data:lines});
	drawPolygins({data:polygons});

};

const getThemeNodes = theme => {

	const selectedNodes = dataset.filter( node => {
		const nodethemes = node.properties.theme.split(', ');
		const themeNode = nodethemes.filter(t => t.toLowerCase() === theme);
		if (themeNode.length > 0) return node;
	});

	return selectedNodes;
};

const drawPoints =  ({data, transitionTime = 5000, delayTime = 1000}) => {

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
		.on('click', function (d) {
			_content__WEBPACK_IMPORTED_MODULE_2__["default"].showPost(d.properties);
		})
		// .on('mouseover', function (d) {
		// 	// _this._mouseOverSelection(d);
		// 	console.log(d.properties);
		// })
		// .on('mouseout', function (d) {
		// 	// _this._mouseOutSelection(d);
		// 	// console.log(d);
		// })
		.attr('cx', function (d) {
			return _map__WEBPACK_IMPORTED_MODULE_1__["default"].project(d.geometry.coordinates).x;
		})
		.attr('cy', function (d) {
			return _map__WEBPACK_IMPORTED_MODULE_1__["default"].project(d.geometry.coordinates).y;
		})
		.attr('r', 0)
		.style('opacity', 0.1);
	// .style('fill', )
	// .style('stroke', );
		
	nodesPoint.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.attr('r', 8)
		.style('opacity', 0.8);
};

const drawLines =  ({data, transitionTime = 5000, delayTime = 1000}) => {

	nodesLine = svg.selectAll('.line')
		.data(data);

	nodesLine.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.style('fill', '#000000')
		.attr('width', 0)
		.remove();

	nodesLine.enter().append('path')
		.attr('class', 'line');

	nodesLine = svg.selectAll('.line')
		.attr('id', function (d) {
			return d.properties.id;
		})
		.attr('d', D3geoPath)
		// .on('mouseover', function (d) {
		// 	// console.log(d);
		// })
		// .on('mouseout', function (d) {
		// 	// console.log(d);
		// })
		.on('click', function (d) {
			_content__WEBPACK_IMPORTED_MODULE_2__["default"].showPost(d.properties);
		})
		.style('cursor', 'pointer')
		.style('fill','none')
		.style('stroke-width', 0)
		.style('stroke', '#FF8C00')
		.style('opacity', 0.1);


	nodesLine.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.style('stroke-width', 2)
		.style('opacity', 0.8);


};

const drawPolygins =  ({data, transitionTime = 5000, delayTime = 1000}) => {

	nodesPoygon = svg.selectAll('.polygons')
		.data(data);

	nodesPoygon.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.style('fill', '#000000')
		.attr('width', 0)
		.remove();

	nodesPoygon.enter().append('path')
		.attr('class', 'polygons');

	nodesPoygon = svg.selectAll('.polygons')
		.attr('id', function (d) {
			return d.properties.id;
		})
		.attr('d', D3geoPath)
		// .on('mouseover', function (d) {
		// 	// console.log(d);
		// })
		// .on('mouseout', function (d) {
		// 	// console.log(d);
		// })
		.on('click', function (d) {
			_content__WEBPACK_IMPORTED_MODULE_2__["default"].showPost(d.properties);
		})
		.style('cursor', 'pointer')
		.style('fill','#FFA500')
		.style('stroke-width', 0)
		.style('stroke', '#FF8C00')
		.style('opacity', 0.1);


	nodesPoygon.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.style('stroke-width', 2)
		.style('opacity', 0.8);

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
			if(!internalOption.passThrough) _map__WEBPACK_IMPORTED_MODULE_1__["default"].pitchMap({finalPitch:40, duration:2000});
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
				return _map__WEBPACK_IMPORTED_MODULE_1__["default"].project(d.geometry.coordinates).x;
			})
			.attr('cy', function (d) {
				return _map__WEBPACK_IMPORTED_MODULE_1__["default"].project(d.geometry.coordinates).y;
			});
	}

	if (nodesLine) nodesLine.attr('d', D3geoPath);
	if (nodesPoygon) nodesPoygon.attr('d', D3geoPath);
	
};


/* harmony default export */ __webpack_exports__["default"] = ({
	init,
	drawNodes,
	mapUpdate
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
	projectPoint
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudEhUTUwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FB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L0IsZUFBZSxnREFBUTs7QUFFdkI7QUFDQTs7QUFFQSxHQUFHLGdEQUFPOztBQUVWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnREFBTTtBQUNoQixRQUFRLGdEQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDLEVBQUU7O0FBRUY7QUFDQSx5REFBeUQsZ0RBQU07QUFDL0QsRUFBRTtBQUNGOztBQUVBLHFCQUFxQixnREFBTzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCLG9DQUFvQyxnREFBTSxhQUFhLEdBQUcsTUFBTTtBQUNoRSxXQUFXLHlCQUF5QjtBQUNwQzs7QUFFQTtBQUNBLG1CQUFtQixnQ0FBZ0M7O0FBRW5EOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGtFQUFXO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQSx3Q0FBd0MsZ0RBQVE7O0FBRWhEO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQVE7QUFDeEM7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9jb250ZW50JztcblxuXG5jb25zdCBob3N0ID0gJ2h0dHA6Ly9sYWJzLmZsdXhvLmFydC5icic7IC8vJ2h0dHA6Ly9sb2NhbGhvc3Q6ODg4OCc7IC8vIGh0dHA6Ly9sYWJzLmZsdXhvLmFydC5iclxuY29uc3Qgcm9vdFBhdGggPSAnL2dob3N0LXJpdmVyLyc7XG5cblxuY29uc3QgbG9hZERlZXBMaW5rID0gYXN5bmMgc2x1ZyA9PiB7XG5cblx0Y29udGVudC5jaGFuZ2VCcm93c2VySGlzdG9yeSh7c2x1Z30pO1x0XHRcdFx0XHQvL2NoYW5nZSBVUkwgQmFyXG5cblx0bGV0IHRoZW1lID0gY29udGVudC5nZXRUaGVtZUJ5U2x1ZyhzbHVnKTtcdFx0XHRcdC8vZ2V0IHRoZW1lIGJhc2VkIG9uIHRoZSBzZWFyY2ggcGFyYW1ldGVyc1xuXG5cdC8vaWYgc2VhcmNoIG1hdGNoIHRvIHRoZW1lIChwYWdlKVxuXHRpZiAodGhlbWUpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0YXdhaXQgY29udGVudC5zaG93UGFnZSh0aGVtZSk7XHRcdFx0XHRcdFx0Ly9sb2FkIHRoZSB0aGVtZSBwYWdlXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly90cnkgdG8gbG9hZCBhIHBvc3QgYmFzZWQgb24gc2VhcmNoIHBhcmFtZXRlcnNcblx0Y29uc3QgcG9zdCA9IGF3YWl0IGNvbnRlbnQuc2hvd1Bvc3Qoe3NsdWd9KTtcdFx0XHRcblxuXHQvL2lmIG5vIHBhZ2UvcG9zdCBmb3VuZDogbG9hZCBob21lIHdpdGggNDA0XG5cdGlmICghcG9zdCkgZ29Ib21lKHtsb2NhdGlvbjogJzQwNCd9KTtcblx0XG5cbn07XG5cbmNvbnN0IGdvSG9tZSA9IGFzeW5jIGRhdGEgPT4ge1xuXHRjb250ZW50LmNoYW5nZUJyb3dzZXJIaXN0b3J5KHtzbHVnOiByb290UGF0aH0pO1xuXHRjb250ZW50LmluaXRIb21lKGRhdGEpO1xufTtcbiBcbiggYXN5bmMgKCkgPT4ge1x0XHRcblxuXHQvL3Rlc3QgaWYgdXJsIGlzIHRyeWluZyB0byByZWFjaCBhIGRlZXBsaW5rXHRcdFxuXHRpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSByb290UGF0aCkge1x0XHRcdFx0XHRcdFx0XHRcblx0XHRjb25zdCBkZWVwTGluayA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzJdOyBcdC8vZ2V0IHBhdGggYWZ0ZXIgdGhlICcvJyBhcyBkZWVwbGlua1xuXHRcdGxvY2F0aW9uID0gYCR7aG9zdH0ke3Jvb3RQYXRofT9ub2RlPSR7ZGVlcExpbmt9YDtcdFx0XHQvL25hdmlhdGUgdG8gcm9vdCB3aXRoIGRlZXBsaW5rIGFzIGEgc2VhcmNoIHBhcmFtZXRlcnNcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvL3Rlc3QgaWYgdXJsIGlzIHNlYXJjaGluZyBmb2ZyIGRlZXBsaW5rXG5cdGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1x0XHRcdFx0XHQvL2dldCB1dGxcdFx0XG5cdFx0Y29uc3Qgc2x1ZyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdub2RlJyk7XHRcdFx0XHRcdC8vZ2V0IHRoZSBwYXJhbXMgZm9yIHNlYXJjaCAoYSBzbHVnIGZvciBhIHBhZ2Ugb3IgcG9zdClcblx0XHRsb2FkRGVlcExpbmsoc2x1Zyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly9HbyBIb21lXG5cdGdvSG9tZSh7bG9jYXRpb246ICdob21lJ30pO1xuXG59KSgpO1xuIiwiaW1wb3J0IFdQQVBJIGZyb20gJ3dwYXBpJztcblxuaW1wb3J0IG1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgZ2VvZGF0YSBmcm9tICcuL2dlb2RhdGEnO1xuaW1wb3J0IGNvbnRlbkhUTUwgZnJvbSAnLi9jb250ZW50SFRNTCc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvY29uZmlnLmpzb24nO1xuaW1wb3J0IHRoZW1lcyBmcm9tICcuL2NvbmZpZy90aGVtZXMuanNvbic7XG5cblxuY29uc3Qgd3AgPSBuZXcgV1BBUEkoe2VuZHBvaW50OiBjb25maWcud29yZHByZXNzLnJlbW90ZS5lbmRwb2ludH0pO1xuXG5sZXQgdGhlbWUgPSB0aGVtZXNbMF07XG5cblxuY29uc3QgaW5pdEhvbWUgPSAoe2xvY2F0aW9ufSkgPT4ge1xuXHRjb250ZW5IVE1MLmluaXRIb21lKCk7XG5cdHVwZGF0ZU1hcCh7bG9jYXRpb259KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93UGFnZSA9IGFzeW5jICh7aWQsIHNsdWd9KSA9PiB7XG5cblx0YXdhaXQgc2V0VGhlbWUoc2x1Zyk7XG5cblx0aWYgKHRoZW1lLmlzTmV3KSB1cGRhdGVNYXAodGhlbWUpO1xuXG5cdC8vIG1hcC5waXRjaE1hcCgpO1xuXG5cdGlmIChpZCA9PSAwKSB7XG5cdFx0Y2hhbmdlQnJvd3Nlckhpc3Rvcnkoe3NsdWc6ICcvZ2hvc3Qtcml2ZXIvJ30pO1xuXHRcdHJldHVybjtcblx0fVxuXHRcdFxuXHRjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGxvYWRQYWdlKHtpZCwgc2x1Z30pO1xuXHQvLyBjb25zb2xlLmxvZyhwYWdlRGF0YSk7XG5cdFxuXHRjb250ZW5IVE1MLnVwZGF0ZVBhZ2UocGFnZURhdGEpO1xuXHRcblx0Ly9zaG93IHBhbmVsXG5cdGNvbnRlbkhUTUwuc2hvd1BhbmVsKHtcblx0XHRkaXJlY3Rpb246ICdkb3duJyxcblx0XHRkZWxheTogMFxuXHR9KTtcblxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSh7XG5cdFx0dGl0bGU6IHBhZ2VEYXRhLnRpdGxlLnJlbmRlcmVkLFxuXHRcdHNsdWc6IHBhZ2VEYXRhLnNsdWdcblx0fSk7XG5cblx0cmV0dXJuIHBhZ2VEYXRhO1xuXHRcbn07XG5cbmNvbnN0IGxvYWRQYWdlID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblx0bGV0IHBhZ2VEYXRhO1xuXG5cdGlmIChpZCkge1xuXHRcdHBhZ2VEYXRhID0gYXdhaXQgd3AucGFnZXMoKS5pZChpZCkuZW1iZWQoKTtcblx0fSBlbHNlIGlmIChzbHVnKSB7XG5cdFx0cGFnZURhdGEgPSBhd2FpdCB3cC5wYWdlcygpLnNsdWcoc2x1ZykuZW1iZWQoKTtcblx0XHRwYWdlRGF0YSA9IHBhZ2VEYXRhWzBdO1xuXHR9XG5cblx0cmV0dXJuIHBhZ2VEYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dQb3N0ID0gYXN5bmMgKHtpZCwgc2x1Z30pID0+IHtcblxuXHRhd2FpdCBjb250ZW5IVE1MLmhpZGVQYW5lbCh7ZGlyZWN0aW9uOiAndXAnfSk7XG5cblx0Y29udGVuSFRNTC5zaG93U3Bpbm5lcigpO1xuXG5cdC8vcG9zdERhdGEgLSBsb2FkIGJ5IElEIG9yIGJ5IFNsdWdcblx0Y29uc3QgcG9zdERhdGEgPSBhd2FpdCBsb2FkUG9zdCh7aWQsc2x1Z30pO1xuXHQvLyBjb25zb2xlLmxvZyhwb3N0RGF0YSk7XG5cdGlmICghcG9zdERhdGEpIHtcblx0XHRjb250ZW5IVE1MLmhpZGVTcGlubmVyKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9zdENhdGVnb3JpZXMgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVswXTtcblx0Y29uc3QgcG9zdFRhZ3MgPSBwb3N0RGF0YS5fZW1iZWRkZWRbJ3dwOnRlcm0nXVsxXTtcblxuXHQvLyBjb25zdCBwb3N0VGhlbWUgPSBwb3N0Q2F0ZWdvcmllc1swXS5zbHVnO1xuXHRsZXQgcG9zdFRoZW1lID0gcG9zdENhdGVnb3JpZXMuZmluZChjYXQgPT4gY2F0LnNsdWcgPT0gdGhlbWUuc2x1Zyk7XG5cblx0aWYgKCFwb3N0VGhlbWUpIHBvc3RUaGVtZSA9IHBvc3RDYXRlZ29yaWVzWzBdO1xuXHRcblx0aWYocG9zdFRoZW1lLnNsdWcgPT0gJ3VuY2F0ZWdvcml6ZWQnKSBjb25zb2xlLmxvZygnUHJvYmxlbSB3aXRoIGNhdGVnb3J5IFwidW5jYXRlZ29yaXplZFwiOiAnLCBwb3N0RGF0YSk7XG5cblx0c2V0VGhlbWUocG9zdFRoZW1lLnNsdWcpO1xuXHRpZiAodGhlbWUuaXNOZXcpIHVwZGF0ZU1hcCh0aGVtZSk7XG5cdFxuXHRjb250ZW5IVE1MLnVwZGF0ZVBvc3QocG9zdERhdGEscG9zdFRhZ3MsdGhlbWUpO1xuXG5cdGNvbnRlbkhUTUwuaGlkZVNwaW5uZXIoKTtcblxuXHQvL3Nob3cgUGFuZWxcblx0Y29udGVuSFRNTC5zaG93UGFuZWwoe1xuXHRcdGRpcmVjdGlvbjogJ2Rvd24nLFxuXHRcdGRlbGF5OiAwXG5cdH0pO1xuXG5cdGNoYW5nZUJyb3dzZXJIaXN0b3J5KHtcblx0XHR0aXRsZTogcG9zdERhdGEudGl0bGUucmVuZGVyZWQsXG5cdFx0c2x1ZzogcG9zdERhdGEuc2x1Z1xuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHBvc3Q6IHBvc3REYXRhLFxuXHRcdHRoZW1lOiBwb3N0VGhlbWVcblx0fTtcblxufTtcblxuY29uc3QgbG9hZFBvc3QgPSBhc3luYyAoe2lkLCBzbHVnfSkgPT4ge1xuXG5cdGxldCBwb3N0RGF0YTtcblxuXHRpZiAoaWQpIHtcblx0XHRwb3N0RGF0YSA9IGF3YWl0IHdwLnBvc3RzKCkuaWQoaWQpLmVtYmVkKCk7XG5cdH0gZWxzZSBpZiAoc2x1Zykge1xuXHRcdHBvc3REYXRhID0gYXdhaXQgd3AucG9zdHMoKS5zbHVnKHNsdWcpLmVtYmVkKCk7XG5cdFx0cG9zdERhdGEgPSBwb3N0RGF0YVswXTtcblx0fVxuXG5cdHJldHVybiBwb3N0RGF0YTtcbn07XG5cblxuY29uc3Qgc2V0VGhlbWUgPSBhc3luYyByZXF1ZXN0ZWRUaGVtZVNsdWcgPT4ge1xuXG5cdHRoZW1lLmlzTmV3ID0gZmFsc2U7XG5cdFxuXHRpZih0aGVtZS5zbHVnICE9IHJlcXVlc3RlZFRoZW1lU2x1Zykge1xuXHRcdGNvbnN0IHJlcXVlc3RlZFRoZW1lID0gZ2V0VGhlbWVCeVNsdWcocmVxdWVzdGVkVGhlbWVTbHVnKTtcblx0XHRjaGFuZ2VTdGF0ZShyZXF1ZXN0ZWRUaGVtZS5zdGF0ZSk7XG5cdFx0dGhlbWUgPSByZXF1ZXN0ZWRUaGVtZTtcblx0XHR0aGVtZS5pc05ldyA9IHRydWU7XG5cdH1cblxuXHRpZiAodGhlbWUuc2x1ZyAhPSAnaG9tZScpIHtcblx0XHRhd2FpdCBjb250ZW5IVE1MLmhpZGVQYW5lbCh7XG5cdFx0XHRkaXJlY3Rpb246ICd1cCdcblx0XHR9KTtcblx0fVxuXHRcblx0cmV0dXJuIHRoZW1lO1xufTtcblxuY29uc3QgZ2V0VGhlbWVCeVNsdWcgPSBzbHVnID0+IHRoZW1lcy5maW5kKCB0aGVtZSA9PiB0aGVtZS5zbHVnID09PSBzbHVnICk7XG5cbmNvbnN0IGNoYW5nZVN0YXRlID0gYXN5bmMgbmV3U3RhdGUgPT4ge1xuXG5cdGlmIChuZXdTdGF0ZSAhPSB0aGVtZS5zdGF0ZSkge1xuXHRcdGlmIChuZXdTdGF0ZSA9PT0gJ2hvbWUnKSB7XG5cdFx0XHRjb250ZW5IVE1MLmhpZGVUb3BNZW51KCk7XG5cdFx0XHRhd2FpdCBjb250ZW5IVE1MLmhpZGVQYW5lbCh7ZGlyZWN0aW9uOiAndXAnfSk7XG5cdFx0XHRjb250ZW5IVE1MLnNob3dIb21lKCk7XG5cdFx0fSBlbHNlIGlmIChuZXdTdGF0ZSA9PT0gJ3BhZ2UnKSB7XG5cdFx0XHRjb250ZW5IVE1MLmhpZGVIb21lKCk7XG5cdFx0XHRjb250ZW5IVE1MLnNob3dUb3BNZW51KCk7XG5cdFx0fVxuXHR9XG5cdFxufTtcblxuY29uc3QgdXBkYXRlTWFwID0gYXN5bmMgKHtsb2NhdGlvbn0pID0+IHtcblxuXHRpZighbWFwLmlzTWFwYm94TG9hZGVkKCkpIHtcblx0XHRpZiAobG9jYXRpb24gPT09ICc0MDQnKSB7XG5cdFx0XHRhd2FpdCBtYXAuaW5pdCh7bG9jYXRpb259KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgbWFwLmluaXQodGhlbWUpO1xuXHRcdH1cblx0XHRcblx0fSBlbHNlIHtcblx0XHRhd2FpdCBtYXAuY2hhbmdlTWFwKHRoZW1lKTtcblx0fVxuXG5cdGdlb2RhdGEuZHJhd05vZGVzKHRoZW1lKTtcbn07XG5cbmNvbnN0IGNoYW5nZUJyb3dzZXJIaXN0b3J5ID0gKHt0aXRsZSxzbHVnfSkgPT4ge1xuXHRsZXQgcGFnZVRpdGxlID0gJ0dob3N0IFJpdmVyJztcblx0aWYgKHRpdGxlKSBwYWdlVGl0bGUgKz0gYCAtICR7dGl0bGV9YDtcblxuXHRkb2N1bWVudC50aXRsZSA9IHBhZ2VUaXRsZTtcblx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFxuXHRcdHtwYWdlVGl0bGV9LFxuXHRcdCcnLFxuXHRcdHNsdWcpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXRIb21lLFxuXHRzaG93UGFnZSxcblx0c2hvd1Bvc3QsXG5cdGdldFRoZW1lQnlTbHVnLFxuXHRjaGFuZ2VCcm93c2VySGlzdG9yeSxcbn07IiwiaW1wb3J0IHtzZWxlY3QsIHNlbGVjdEFsbCwgZXZlbnR9IGZyb20gJ2QzL2Rpc3QvZDMubWluJztcbmltcG9ydCB7c2hvd1BhZ2UsIHNob3dQb3N0fSBmcm9tICcuL2NvbnRlbnQnO1xuaW1wb3J0IHRoZW1lcyBmcm9tICcuL2NvbmZpZy90aGVtZXMuanNvbic7XG5cblxuY29uc3QgYW5pbWF0aW9uID0ge1xuXHRkdXJhdGlvbjoge1xuXHRcdGluOiAzMDAwLFxuXHRcdG91dDogMjAwMFxuXHR9XG59O1xuXG5sZXQgbWFpbk1lbnUgPSBmYWxzZTtcbmxldCB0b3BNZW51ID0gZmFsc2U7XG5cbmNvbnN0IGluaXRIb21lID0gKCkgPT4ge1xuXG5cdHNlbGVjdCgnI2hvbWUtdGV4dCcpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoMCkgLy8zMDAwXG5cdFx0Ly8gLmR1cmF0aW9uKDApXG5cdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbi5pbilcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuXHRsZXQgZGVsYXkgPSAwOyAvLzgwMDBcblx0XG5cdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cblx0XHRzZWxlY3QoYCNtYWluLSR7dGhlbWUuc2x1Z30tYnRgKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZGVsYXkoZGVsYXkpXG5cdFx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cblx0XHRkZWxheSArPSAxMDAwO1xuXHR9XG5cblx0Y29uZmlnTWFpbk1lbnUoKTtcblxufTtcblxuY29uc3QgY29uZmlnTWFpbk1lbnUgPSAoKSA9PiB7XG5cdGlmIChtYWluTWVudSA9PSBmYWxzZSkge1xuXHRcdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0XHRzZWxlY3QoYCNtYWluLSR7dGhlbWUuc2x1Z30tYnRgKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UodGhlbWUpKTtcblx0XHR9XG5cdFx0bWFpbk1lbnUgPSB0cnVlO1xuXHR9XG59O1xuXG5jb25zdCBjb25maWdUb3BNZW51ID0gKCkgPT4ge1xuXHRpZiAodG9wTWVudSA9PSBmYWxzZSkge1xuXHRcdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0XHRzZWxlY3QoYCN0b3AtJHt0aGVtZS5zbHVnfS1idGApXG5cdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiBzaG93UGFnZSh0aGVtZSkpXG5cdFx0XHRcdC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKTsgXG5cdFx0fVxuXHRcdHRvcE1lbnUgPSB0cnVlO1xuXHR9XG59O1xuXG5jb25zdCBzaG93SG9tZSA9ICgpID0+IHtcblxuXHRzZWxlY3QoJyNoZWFkZXItY29sJylcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoMTAwMClcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJzBweCcpO1xuXG5cdHNlbGVjdEFsbCgnLmNvbC1tYWluLW1lbnUnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KDEwMDApXG5cdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMSlcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnMHB4Jyk7XG5cblx0c2VsZWN0KCcjaG9tZS10ZXh0Jylcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG5cdFx0c2VsZWN0KGAjbWFpbi0ke3RoZW1lLnNsdWd9LWJ0YClcblx0XHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0fVxuXG5cdGNvbmZpZ01haW5NZW51KCk7XG5cbn07XG5cbmNvbnN0IGhpZGVIb21lID0gKCkgPT4ge1xuXHRzZWxlY3QoJyNoZWFkZXItY29sJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKDMwMDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnLTUwMHB4Jylcblx0XHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0fSk7XG5cblx0c2VsZWN0QWxsKCcuY29sLW1haW4tbWVudScpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbigzMDAwKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJy0yMDBweCcpXG5cdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0pO1xufTtcblxuY29uc3Qgc2hvd1RvcE1lbnUgPSAoKSA9PiB7XG5cdHNlbGVjdCgnI3RvcC1tZW51Jylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdC5zdHlsZSgndG9wJywgLTIwMClcblx0XHQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoMzAwMClcblx0XHQuZHVyYXRpb24oMjAwMClcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKVxuXHRcdC5zdHlsZSgndG9wJywgMCk7XG5cblx0Y29uZmlnVG9wTWVudSgpO1xufTtcblxuY29uc3QgaGlkZVRvcE1lbnUgPSAoKSA9PiB7XG5cdHNlbGVjdCgnI3RvcC1tZW51Jylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KDApXG5cdFx0LmR1cmF0aW9uKDIwMDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ3RvcCcsIC0yMDApXG5cdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0pO1xufTtcblxuY29uc3Qgc2hvd1BhbmVsID0gKHtkaXJlY3Rpb24gPSAnbm9uZScsIGRlbGF5ID0gMH0pID0+IHtcblxuXHRpZiAoZGlyZWN0aW9uID09ICdub25lJykge1xuXHRcdGRpcmVjdGlvbiA9ICcwcHgnO1xuXHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAndXAnKSB7XG5cdFx0ZGlyZWN0aW9uID0gJy0yMDAwcHgnO1xuXHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAnZG93bicpIHtcblx0XHRkaXJlY3Rpb24gPSAnMjAwMHB4Jztcblx0fVxuXG5cdHNlbGVjdCgnI2xlZnQtcGFuZWwnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgZGlyZWN0aW9uKVxuXHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheShkZWxheSlcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJzBweCcpO1xuXG5cdHNlbGVjdCgnI21pZGRsZS1wYW5lbCcpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCBkaXJlY3Rpb24pXG5cdFx0LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KGRlbGF5KVxuXHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb24uaW4pXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ21hcmdpbi10b3AnLCAnMHB4Jyk7XG5cblx0c2VsZWN0KCcjcmlnaHQtcGFuZWwnKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDApXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgZGlyZWN0aW9uKVxuXHRcdC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheShkZWxheSlcblx0XHQuZHVyYXRpb24oYW5pbWF0aW9uLmR1cmF0aW9uLmluKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpXG5cdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgJzBweCcpO1xuXG5cdHNlbGVjdCgnI3JpZ2h0LXBhbmVsJykuc2VsZWN0KCcuZmwtY29sLWNvbnRlbnQnKS5wcm9wZXJ0eSgnc2Nyb2xsVG9wJywgMCk7XG59O1xuXG5jb25zdCBoaWRlUGFuZWwgPSBhc3luYyAoe2RpcmVjdGlvbiA9ICdub25lJ30pID0+IHtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cblx0XHRpZiAoZGlyZWN0aW9uID09ICdub25lJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJzBweCc7XG5cdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3VwJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJy0yMDAwcHgnO1xuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICdkb3duJykge1xuXHRcdFx0ZGlyZWN0aW9uID0gJzIwMDBweCc7XG5cdFx0fVxuXHRcblx0XHRzZWxlY3QoJyNsZWZ0LXBhbmVsJylcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kZWxheSgwKVxuXHRcdFx0LmR1cmF0aW9uKGFuaW1hdGlvbi5kdXJhdGlvbi5vdXQpXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnN0eWxlKCdtYXJnaW4tdG9wJywgZGlyZWN0aW9uKVxuXHRcdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHR9KTtcblxuXHRcdHNlbGVjdCgnI21pZGRsZS1wYW5lbCcpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZGVsYXkoMClcblx0XHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb24ub3V0KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsIGRpcmVjdGlvbilcblx0XHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0fSk7XG5cblx0XHRzZWxlY3QoJyNyaWdodC1wYW5lbCcpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZGVsYXkoMClcblx0XHRcdC5kdXJhdGlvbihhbmltYXRpb24uZHVyYXRpb24ub3V0KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsIGRpcmVjdGlvbilcblx0XHRcdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0fSk7XG59O1xuXG5jb25zdCB1cGRhdGVQYWdlID0gKHt0aXRsZSwgY29udGVudH0pID0+IHtcblx0Ly9kb20gbWFuaXB1bGF0aW9uXG5cdHNlbGVjdCgnI3JpZ2h0LXBhbmVsJykuc2VsZWN0KCcjYXJ0aWNsZS10aXRsZScpLnNlbGVjdCgnLmZsLWhlYWRpbmctdGV4dCcpLmh0bWwodGl0bGUucmVuZGVyZWQpO1xuXHRzZWxlY3QoJyNyaWdodC1wYW5lbCcpLnNlbGVjdCgnI2FydGljbGUtY29udGVudCcpLnNlbGVjdCgnLmZsLXJpY2gtdGV4dCcpLmh0bWwoY29udGVudC5yZW5kZXJlZCk7XG5cdHNlbGVjdCgnI3JpZ2h0LXBhbmVsJykuc2VsZWN0KCcudGFnbGluZScpLnNlbGVjdCgnLmZsLWhlYWRpbmctdGV4dCcpLmh0bWwoJycpO1xuXHRzZWxlY3QoJyNyaWdodC1wYW5lbCcpLnNlbGVjdCgnI2FydGljbGUtdGFncycpLnNlbGVjdCgnLmZsLWh0bWwnKS5odG1sKCcnKTtcblx0Y2FwdHVyZUxpbmtzKCk7XG59O1xuXG5jb25zdCB1cGRhdGVQb3N0ID0gKHt0aXRsZSwgY29udGVudH0sIHRhZ3MsIHRoZW1lKSA9PiB7XG5cdC8vRE9NIG1hbmlwdWxhdGlvblxuXHRjb25zdCBwYW5lbCA9IHNlbGVjdCgnI3JpZ2h0LXBhbmVsJyk7XG5cblx0cGFuZWwuc2VsZWN0KCcjYXJ0aWNsZS10aXRsZScpLnNlbGVjdCgnLmZsLWhlYWRpbmctdGV4dCcpLmh0bWwodGl0bGUucmVuZGVyZWQpO1xuXHRwYW5lbC5zZWxlY3QoJyNhcnRpY2xlLWNvbnRlbnQnKS5zZWxlY3QoJy5mbC1yaWNoLXRleHQnKS5odG1sKGNvbnRlbnQucmVuZGVyZWQpO1xuXHRwYW5lbC5zZWxlY3QoJy50YWdsaW5lJykuc2VsZWN0KCcuZmwtaGVhZGluZy10ZXh0JykuaHRtbCh0aGVtZS5zbHVnKTtcblxuXHQvL3RhZ3Ncblx0Y29uc3QgdGFnc0RJViA9IHBhbmVsLnNlbGVjdCgnI2FydGljbGUtdGFncycpLnNlbGVjdCgnLmZsLWh0bWwnKTtcblx0bGV0IHRhZ3NIVE1MID0gJzxkaXYgaWQ9XCJ0YWctY29udGFpbmVyXCI+Jztcblx0Zm9yIChjb25zdCB0YWcgb2YgdGFncykge1xuXHRcdHRhZ3NIVE1MICs9IGA8ZGl2IGlkPVwidGFnLSR7dGFnLnNsdWd9XCIgY2xhc3M9XCJ0YWctcGlsbFwiPiR7dGFnLm5hbWV9PC9kaXY+YDtcblx0fVxuXHR0YWdzSFRNTCArPSAnPC9kaXY+JztcblxuXHR0YWdzRElWLmh0bWwodGFnc0hUTUwpO1xuXG5cdGNhcHR1cmVMaW5rcygpO1xufTtcblxuY29uc3QgY2FwdHVyZUxpbmtzID0gKCkgPT4ge1xuXHRzZWxlY3RBbGwoJ2EnKVxuXHRcdC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdC8vZ2V0IHVybCAvLyBkb21haW5cblx0XHRcdGNvbnN0IGxpbmsgPSBzZWxlY3QodGhpcykuYXR0cignaHJlZicpO1xuXHRcdFx0Y29uc3QgZG9tYWluID0gbGluay5zcGxpdCgnLycpWzJdO1xuXG5cdFx0XHQvL1Rlc3QgaWYgaXQgaXMgYSBsb2NhbCBsaW5rIChsb2NhbGhvc3QgLT4gcmVtb3RlKVxuXHRcdFx0Y29uc3QgaG9zdCA9ICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT0gJ2xvY2FsaG9zdCcpID8gJ2xhYnMuZmx1eG8uYXJ0LmJyJyA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcblxuXHRcdFx0Ly9pZiBleHRycm5hbCwgbmF2aWdhdGVcblx0XHRcdGlmIChkb21haW4gIT0gaG9zdCkgcmV0dXJuOyAvL3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxuXG5cdFx0XHQvL2lmIGxvY2FsLCBwcmV2ZW50IHBhZ2UgdXBkYXRlXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvL2xvYWQgcG9zdCBiYXNlZCBvbiBzbHVnIG9uIHRoZSB1cmxcblx0XHRcdGNvbnN0IHNsdWcgPSBsaW5rLnNwbGl0KCcvJylbNF07XG5cblx0XHRcdHNob3dQb3N0KHtzbHVnfSk7XG5cdFx0fSk7XG5cbn07XG5cbmNvbnN0IHNob3dTcGlubmVyID0gKCkgPT4ge1xuXHRzZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG5cdFx0LmF0dHIoJ2lkJywgJ3NwaW5uZXInKVxuXHRcdC5odG1sKCc8ZGl2IGNsYXNzPVwibGRzLXJpcHBsZVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcbn07XG5cbmNvbnN0IGhpZGVTcGlubmVyID0gKCkgPT4ge1xuXHRzZWxlY3QoJyNzcGlubmVyJykucmVtb3ZlKCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdEhvbWUsXG5cdGNvbmZpZ01haW5NZW51LFxuXHRjb25maWdUb3BNZW51LFxuXHRzaG93SG9tZSxcblx0aGlkZUhvbWUsXG5cdHNob3dUb3BNZW51LFxuXHRoaWRlVG9wTWVudSxcblx0c2hvd1BhbmVsLFxuXHRoaWRlUGFuZWwsXG5cdHVwZGF0ZVBhZ2UsXG5cdHVwZGF0ZVBvc3QsXG5cdHNob3dTcGlubmVyLFxuXHRoaWRlU3Bpbm5lclxufTsiLCIvLyBpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQge3NlbGVjdCxnZW9UcmFuc2Zvcm0sZ2VvUGF0aCxlYXNlTGluZWFyfSBmcm9tICdkMy9kaXN0L2QzLm1pbic7XG5cbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9jb250ZW50JztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcuanNvbic7XG5pbXBvcnQgcml2ZXIxODM0IGZyb20gJy4vZGF0YS8xODM0X0FfSm9iaW5fZmluYWwtMi5qc29uJztcblxuXG5jb25zdCBpbnRlcm5hbE9wdGlvbiA9IHtcblx0cGFzc1Rocm91Z2g6IHRydWUsXG59O1xuXG5sZXQgRDNnZW9QYXRoO1xubGV0IHN2ZztcbmxldCByaXZlckxpbmVzO1xubGV0IGRhdGFzZXQ7XG5sZXQgbm9kZXNQb2ludDtcbmxldCBub2Rlc0xpbmU7XG5sZXQgbm9kZXNQb3lnb247XG5cblxuY29uc3QgaW5pdCA9IGFzeW5jIGNhbnZhcyA9PiB7XG5cblx0Y29uc3QgRDNnZW9UcmFuc2Zvcm0gPSBnZW9UcmFuc2Zvcm0oe3BvaW50Om1hcC5wcm9qZWN0UG9pbnR9KTtcblx0RDNnZW9QYXRoID0gZ2VvUGF0aCgpLnByb2plY3Rpb24oRDNnZW9UcmFuc2Zvcm0pO1xuXG5cdC8vIE92ZXJsYXkgZDMgb24gdGhlIG1hcGJveCBjYW52YXNcblx0c3ZnID0gc2VsZWN0KGNhbnZhcykuYXBwZW5kKCdzdmcnKVxuXHRcdC5hdHRyKCdpZCcsICdtYXAtYm94LXZpcycpXG5cdFx0LmF0dHIoJ2hlaWdodCcsICcxMDAlJyk7XG5cblx0ZHJhd1JpdmVyKHJpdmVyMTgzNC5mZWF0dXJlcywgNTAwLCAyKTtcblxufTtcblxuY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGRhdGFVUkwgPSBgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9kYXRhc2V0cy92MS8ke2NvbmZpZy5tYXBib3gudXNlcn0vJHtjb25maWcubWFwLmRhdGFzZXR9L2ZlYXR1cmVzP2FjY2Vzc190b2tlbj0ke2NvbmZpZy5tYXBib3gudG9rZW59YDtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhVVJMKTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0ZGF0YXNldCA9IGRhdGEuZmVhdHVyZXM7XG59O1xuXG5cbmNvbnN0IGRyYXdOb2RlcyA9IGFzeW5jICh7c2x1ZzogdGhlbWV9KSA9PiB7XG5cblx0aWYgKCFkYXRhc2V0KSBhd2FpdCBsb2FkRGF0YSgpO1xuXG5cdGNvbnN0IHRoZW1lTm9kZXMgPSBnZXRUaGVtZU5vZGVzKHRoZW1lKTtcblxuXHRjb25zdCBwb2ludHMgPSB0aGVtZU5vZGVzLmZpbHRlcihuID0+IG4uZ2VvbWV0cnkudHlwZSA9PT0gJ1BvaW50Jyk7XG5cdGNvbnN0IGxpbmVzID0gdGhlbWVOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdMaW5lU3RyaW5nJyk7XG5cdGNvbnN0IHBvbHlnb25zID0gdGhlbWVOb2Rlcy5maWx0ZXIobiA9PiBuLmdlb21ldHJ5LnR5cGUgPT09ICdQb2x5Z29uJyk7XG5cblx0ZHJhd1BvaW50cyh7ZGF0YTpwb2ludHN9KTtcblx0ZHJhd0xpbmVzKHtkYXRhOmxpbmVzfSk7XG5cdGRyYXdQb2x5Z2lucyh7ZGF0YTpwb2x5Z29uc30pO1xuXG59O1xuXG5jb25zdCBnZXRUaGVtZU5vZGVzID0gdGhlbWUgPT4ge1xuXG5cdGNvbnN0IHNlbGVjdGVkTm9kZXMgPSBkYXRhc2V0LmZpbHRlciggbm9kZSA9PiB7XG5cdFx0Y29uc3Qgbm9kZXRoZW1lcyA9IG5vZGUucHJvcGVydGllcy50aGVtZS5zcGxpdCgnLCAnKTtcblx0XHRjb25zdCB0aGVtZU5vZGUgPSBub2RldGhlbWVzLmZpbHRlcih0ID0+IHQudG9Mb3dlckNhc2UoKSA9PT0gdGhlbWUpO1xuXHRcdGlmICh0aGVtZU5vZGUubGVuZ3RoID4gMCkgcmV0dXJuIG5vZGU7XG5cdH0pO1xuXG5cdHJldHVybiBzZWxlY3RlZE5vZGVzO1xufTtcblxuY29uc3QgZHJhd1BvaW50cyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gNTAwMCwgZGVsYXlUaW1lID0gMTAwMH0pID0+IHtcblxuXHRub2Rlc1BvaW50ID0gc3ZnLnNlbGVjdEFsbCgnLmNpcmNsZScpXG5cdFx0LmRhdGEoZGF0YSk7XG5cblx0bm9kZXNQb2ludC5leGl0KClcblx0XHQuYXR0cignaWQnLCAnZXhpdCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5zdHlsZSgnZmlsbCcsICcjMDAwMDAwJylcblx0XHQuYXR0cigncicsIDApXG5cdFx0LnJlbW92ZSgpO1xuXG5cdG5vZGVzUG9pbnQuZW50ZXIoKS5hcHBlbmQoJ2NpcmNsZScpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2NpcmNsZScpO1xuXG5cdG5vZGVzUG9pbnQgPSBzdmcuc2VsZWN0QWxsKCcuY2lyY2xlJylcblx0XHQuYXR0cignaWQnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmV0dXJuIGBpbmRleC0ke2QucHJvcGVydGllcy5pZH1gO1xuXHRcdH0pXG5cdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRjb250ZW50LnNob3dQb3N0KGQucHJvcGVydGllcyk7XG5cdFx0fSlcblx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkKSB7XG5cdFx0Ly8gXHQvLyBfdGhpcy5fbW91c2VPdmVyU2VsZWN0aW9uKGQpO1xuXHRcdC8vIFx0Y29uc29sZS5sb2coZC5wcm9wZXJ0aWVzKTtcblx0XHQvLyB9KVxuXHRcdC8vIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCkge1xuXHRcdC8vIFx0Ly8gX3RoaXMuX21vdXNlT3V0U2VsZWN0aW9uKGQpO1xuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coZCk7XG5cdFx0Ly8gfSlcblx0XHQuYXR0cignY3gnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmV0dXJuIG1hcC5wcm9qZWN0KGQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpLng7XG5cdFx0fSlcblx0XHQuYXR0cignY3knLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmV0dXJuIG1hcC5wcm9qZWN0KGQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpLnk7XG5cdFx0fSlcblx0XHQuYXR0cigncicsIDApXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMC4xKTtcblx0Ly8gLnN0eWxlKCdmaWxsJywgKVxuXHQvLyAuc3R5bGUoJ3N0cm9rZScsICk7XG5cdFx0XG5cdG5vZGVzUG9pbnQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKVxuXHRcdC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0cmV0dXJuIGRlbGF5VGltZSAqIGk7XG5cdFx0fSlcblx0XHQuYXR0cigncicsIDgpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMC44KTtcbn07XG5cbmNvbnN0IGRyYXdMaW5lcyA9ICAoe2RhdGEsIHRyYW5zaXRpb25UaW1lID0gNTAwMCwgZGVsYXlUaW1lID0gMTAwMH0pID0+IHtcblxuXHRub2Rlc0xpbmUgPSBzdmcuc2VsZWN0QWxsKCcubGluZScpXG5cdFx0LmRhdGEoZGF0YSk7XG5cblx0bm9kZXNMaW5lLmV4aXQoKVxuXHRcdC5hdHRyKCdpZCcsICdleGl0Jylcblx0XHQuYXR0cignY2xhc3MnLCAnZXhpdCcpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbig1MDApXG5cdFx0LnN0eWxlKCdmaWxsJywgJyMwMDAwMDAnKVxuXHRcdC5hdHRyKCd3aWR0aCcsIDApXG5cdFx0LnJlbW92ZSgpO1xuXG5cdG5vZGVzTGluZS5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2xpbmUnKTtcblxuXHRub2Rlc0xpbmUgPSBzdmcuc2VsZWN0QWxsKCcubGluZScpXG5cdFx0LmF0dHIoJ2lkJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJldHVybiBkLnByb3BlcnRpZXMuaWQ7XG5cdFx0fSlcblx0XHQuYXR0cignZCcsIEQzZ2VvUGF0aClcblx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkKSB7XG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhkKTtcblx0XHQvLyB9KVxuXHRcdC8vIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCkge1xuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coZCk7XG5cdFx0Ly8gfSlcblx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdGNvbnRlbnQuc2hvd1Bvc3QoZC5wcm9wZXJ0aWVzKTtcblx0XHR9KVxuXHRcdC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdC5zdHlsZSgnZmlsbCcsJ25vbmUnKVxuXHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMClcblx0XHQuc3R5bGUoJ3N0cm9rZScsICcjRkY4QzAwJylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwLjEpO1xuXG5cblx0bm9kZXNMaW5lLnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHQuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHtcblx0XHRcdHJldHVybiBkZWxheVRpbWUgKiBpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuOCk7XG5cblxufTtcblxuY29uc3QgZHJhd1BvbHlnaW5zID0gICh7ZGF0YSwgdHJhbnNpdGlvblRpbWUgPSA1MDAwLCBkZWxheVRpbWUgPSAxMDAwfSkgPT4ge1xuXG5cdG5vZGVzUG95Z29uID0gc3ZnLnNlbGVjdEFsbCgnLnBvbHlnb25zJylcblx0XHQuZGF0YShkYXRhKTtcblxuXHRub2Rlc1BveWdvbi5leGl0KClcblx0XHQuYXR0cignaWQnLCAnZXhpdCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2V4aXQnKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdC5zdHlsZSgnZmlsbCcsICcjMDAwMDAwJylcblx0XHQuYXR0cignd2lkdGgnLCAwKVxuXHRcdC5yZW1vdmUoKTtcblxuXHRub2Rlc1BveWdvbi5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ3BvbHlnb25zJyk7XG5cblx0bm9kZXNQb3lnb24gPSBzdmcuc2VsZWN0QWxsKCcucG9seWdvbnMnKVxuXHRcdC5hdHRyKCdpZCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZC5wcm9wZXJ0aWVzLmlkO1xuXHRcdH0pXG5cdFx0LmF0dHIoJ2QnLCBEM2dlb1BhdGgpXG5cdFx0Ly8gLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCkge1xuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coZCk7XG5cdFx0Ly8gfSlcblx0XHQvLyAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQpIHtcblx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKGQpO1xuXHRcdC8vIH0pXG5cdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRjb250ZW50LnNob3dQb3N0KGQucHJvcGVydGllcyk7XG5cdFx0fSlcblx0XHQuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcblx0XHQuc3R5bGUoJ2ZpbGwnLCcjRkZBNTAwJylcblx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDApXG5cdFx0LnN0eWxlKCdzdHJva2UnLCAnI0ZGOEMwMCcpXG5cdFx0LnN0eWxlKCdvcGFjaXR5JywgMC4xKTtcblxuXG5cdG5vZGVzUG95Z29uLnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZSlcblx0XHQuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHtcblx0XHRcdHJldHVybiBkZWxheVRpbWUgKiBpO1xuXHRcdH0pXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuXHRcdC5zdHlsZSgnb3BhY2l0eScsIDAuOCk7XG5cbn07XG5cbmNvbnN0IGRyYXdSaXZlciA9IGRhdGEgPT4ge1xuXG5cdHJpdmVyTGluZXMgPSBzdmcuc2VsZWN0QWxsKCcjcml2ZXInKVxuXHRcdC5kYXRhKGRhdGEpXG5cdFx0LmVudGVyKClcblx0XHQuYXBwZW5kKCdwYXRoJylcblx0XHQuYXR0cignaWQnLCAncml2ZXInKVxuXHRcdC5hdHRyKCdkJywgRDNnZW9QYXRoKVxuXHRcdC5zdHlsZSgnZmlsbCcsJ25vbmUnKVxuXHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcblx0XHQuc3R5bGUoJ3N0cm9rZScsICcjMDA3MWJjJylcblx0XHQuc3R5bGUoJ29wYWNpdHknLCAwLjgpO1xuXG5cdC8vIHJpdmVyTGluZXMudHJhbnNpdGlvbigpXG5cdC8vIFx0LmR1cmF0aW9uKDEwMDApXG5cdC8vIFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCA0KVxuXHQvLyBcdC5zdHlsZSgnb3BhY2l0eScsIDAuOCk7XG5cblx0Ly9ncmFwaCBhbmltYXRpb25cblx0bGV0IGxpbmVMZW5ndGggPSByaXZlckxpbmVzLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuXG5cdHJpdmVyTGluZXNcblx0XHQuYXR0cignc3Ryb2tlLWRhc2hhcnJheScsIGxpbmVMZW5ndGggKyAnICcgKyBsaW5lTGVuZ3RoKVxuXHRcdC5hdHRyKCdzdHJva2UtZGFzaG9mZnNldCcsICtsaW5lTGVuZ3RoKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZHVyYXRpb24oODAwMClcblx0XHQuZWFzZShlYXNlTGluZWFyKVxuXHRcdC5hdHRyKCdzdHJva2UtZGFzaG9mZnNldCcsIDApXG5cdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAzKVxuXHRcdC5vbignZW5kJywgKCkgPT4ge1xuXHRcdFx0aWYoIWludGVybmFsT3B0aW9uLnBhc3NUaHJvdWdoKSBtYXAucGl0Y2hNYXAoe2ZpbmFsUGl0Y2g6NDAsIGR1cmF0aW9uOjIwMDB9KTtcblx0XHR9KTtcbn07XG5cbmNvbnN0IG1hcFVwZGF0ZSA9ICAoKSA9PiB7XG5cdHJpdmVyVXBkYXRlKCk7XG5cdG5vZGVVcGRhdGUoKTtcbn07XG5cbmNvbnN0IHJpdmVyVXBkYXRlID0gKCkgPT4ge1xuXHRpZiAocml2ZXJMaW5lcykge1xuXHRcdHJpdmVyTGluZXNcblx0XHRcdC5hdHRyKCdkJywgRDNnZW9QYXRoKVxuXHRcdFx0LmF0dHIoJ3N0cm9rZS1kYXNoYXJyYXknLCAnbm9uZScpXG5cdFx0XHQuYXR0cignc3Ryb2tlLWRhc2hvZmZzZXQnLCAnbm9uZScpO1xuXHR9XG59O1xuXG5jb25zdCBub2RlVXBkYXRlID0gKCkgPT4ge1xuXHRcblx0aWYgKG5vZGVzUG9pbnQpIHtcblx0XHRub2Rlc1BvaW50XG5cdFx0XHQuYXR0cignY3gnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gbWFwLnByb2plY3QoZC5nZW9tZXRyeS5jb29yZGluYXRlcykueDtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cignY3knLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gbWFwLnByb2plY3QoZC5nZW9tZXRyeS5jb29yZGluYXRlcykueTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aWYgKG5vZGVzTGluZSkgbm9kZXNMaW5lLmF0dHIoJ2QnLCBEM2dlb1BhdGgpO1xuXHRpZiAobm9kZXNQb3lnb24pIG5vZGVzUG95Z29uLmF0dHIoJ2QnLCBEM2dlb1BhdGgpO1xuXHRcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpbml0LFxuXHRkcmF3Tm9kZXMsXG5cdG1hcFVwZGF0ZVxufTsiLCJpbXBvcnQge3NlbGVjdCxzY2FsZUxpbmVhcn0gZnJvbSAnZDMvZGlzdC9kMy5taW4nO1xuaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbCc7XG4vLyBpbXBvcnQgJ21hcGJveC1nbC9kaXN0L21hcGJveC1nbC5jc3MnXG5pbXBvcnQgZ2VvZGF0YSBmcm9tICcuL2dlb2RhdGEnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZy5qc29uJztcblxuXG5jb25zdCBtYXBCb3hDb25maWcgPSB7XG5cdGNvbnRhaW5lcjogJ21hcCcsXG5cdHN0eWxlOiBgbWFwYm94Oi8vc3R5bGVzLyR7Y29uZmlnLm1hcGJveC51c2VyfS8ke2NvbmZpZy5tYXAuZGVmYXVsdC5zdHlsZUlEfWAsXG5cdGNlbnRlcjogY29uZmlnLm1hcC5kZWZhdWx0LmNlbnRlciwgLy9jZW50ZXIgaW4gTW9udHJlYWxcblx0em9vbTogY29uZmlnLm1hcC5kZWZhdWx0Lnpvb20sXG5cdHBpdGNoOiBjb25maWcubWFwLmRlZmF1bHQucGl0Y2gsXG5cdG1heFpvb206IGNvbmZpZy5tYXAuZGVmYXVsdC5tYXhab29tLFxuXHRtYXhCb3VuZHM6IGNvbmZpZy5tYXAuZGVmYXVsdC5tYXhCb3VuZHMsXG5cdGludGVyYWN0aXZlOiB0cnVlLFxufTtcblxubGV0IG1hcGJveDtcbmxldCBwaXRjaEFuaW1hdGlvbjtcblxuXG5jb25zdCBpbml0ID0gYXN5bmMgKHttYXBJRCwgbG9jYXRpb259KSA9PiB7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG5cdFx0Ly9tYXAgY29udGFpbmVyIHNldCBvbiBXUCA+IEJlYXZlclxuXHRcdHNlbGVjdCgnI2FwcCcpLnNlbGVjdCgnOmZpcnN0LWNoaWxkJylcblx0XHRcdC5hcHBlbmQoJ2RpdicpXG5cdFx0XHQuYXR0cignaWQnLCAnbWFwJyk7XG5cblx0XHRpZiAobG9jYXRpb24gPT09ICc0MDQnKSBzZXRVbmtub3dMb2NhdGlvbigpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLzQwNDogY2VudGVyIHRoZSBtYXAgYW55d2hlcmUgaW4gdGhlIGdsb2JlXG5cblx0XHRpZiAobWFwSUQpIG1hcEJveENvbmZpZy5zdHlsZSA9IGBtYXBib3g6Ly9zdHlsZXMvJHtjb25maWcubWFwYm94LnVzZXJ9LyR7bWFwSUR9YDtcdFx0Ly9pZiBkZWVwbGluazogc2V0IG1hcCBzdHlsZVxuXG5cdFx0bWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBjb25maWcubWFwYm94LnRva2VuO1xuXHRcdG1hcGJveCA9IG5ldyBtYXBib3hnbC5NYXAobWFwQm94Q29uZmlnKTtcblxuXHRcdG1hcGJveC5vbignbG9hZCcsICgpID0+IHtcblx0XHRcdC8vIHBpdGNoTWFwKCk7XG5cblx0XHRcdGdlb2RhdGEuaW5pdChtYXBib3guZ2V0Q2FudmFzQ29udGFpbmVyKCkpO1xuXHRcdFx0XG5cdFx0XHRpZiAobG9jYXRpb24gPT09ICc0MDQnKSBmbHlGcm9tVW5rbm93TG9jYXRpb24oKTtcblxuXHRcdFx0bWFwYm94Lm9uKCd2aWV3cmVzZXQnLCB1cGRhdGUpO1xuXHRcdFx0bWFwYm94Lm9uKCdtb3ZlJywgdXBkYXRlKTtcblx0XHRcdG1hcGJveC5vbignbW92ZWVuZCcsIHVwZGF0ZSk7XG5cdFx0XHRcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9KTtcblx0fSk7XG5cbn07XG5cbmNvbnN0IHNldFVua25vd0xvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuXG5cdC8vYW55d2hlcmUgaW4gdGhlIGdsb2JlXG5cdGNvbnN0IGxhdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE4MCkgLSA5MDtcblx0Y29uc3QgbG9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKSAtIDE4MDtcblxuXHRtYXBCb3hDb25maWcuem9vbSA9IDU7XG5cdG1hcEJveENvbmZpZy5jZW50ZXIgPSBbbG9uLGxhdF07XG5cdG1hcEJveENvbmZpZy5tYXhCb3VuZHMgPSBudWxsO1xufTtcblxuY29uc3QgZmx5RnJvbVVua25vd0xvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuXHRtYXBib3guZmx5VG8oe1xuXHRcdGNlbnRlcjogY29uZmlnLm1hcC5kZWZhdWx0LmNlbnRlcixcblx0XHR6b29tOiBjb25maWcubWFwLmRlZmF1bHQuem9vbSxcblx0XHRzcGVlZDogMSxcblx0XHRjdXJ2ZTogMSxcblx0XHRtaW5ab29tOiAzLFxuXHRcdC8vIHBpdGNoOiA2MCxcblx0XHQvLyBtYXhEdXJhdGlvbjogNTAwMCxcblx0XHRlYXNpbmc6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9XG5cdH0pO1xuXG5cdG1hcGJveC5vbignbW92ZWVuZCcsICgpID0+IHtcblx0XHRpZiAobWFwYm94LmdldE1heEJvdW5kcygpID09IG51bGwpIG1hcGJveC5zZXRNYXhCb3VuZHMoY29uZmlnLm1hcC5kZWZhdWx0Lm1heEJvdW5kcyk7XG5cdH0pO1xufTtcblxuY29uc3QgdXBkYXRlID0gKCkgPT4gZ2VvZGF0YS5tYXBVcGRhdGUoKTtcblxuLy9jaGVjayBpZiBtYXAgaXMgbG9hZGVkXG5jb25zdCBpc01hcGJveExvYWRlZCA9ICgpID0+ICB7XG5cdGlmIChtYXBib3gpIHJldHVybiBtYXBib3guaXNTdHlsZUxvYWRlZCgpO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG4vL2NoYW5nZSBtYXAgc3R5bGVcbmNvbnN0IGNoYW5nZU1hcCA9ICh7bWFwSUR9KSA9PiB7XG5cdG1hcGJveC5zZXRTdHlsZShgbWFwYm94Oi8vc3R5bGVzLyR7Y29uZmlnLm1hcGJveC51c2VyfS8ke21hcElEfWApO1xuXHRwaXRjaE1hcCh7ZmluYWxQaXRjaDowLCBkdXJhdGlvbjoxfSk7XG59O1xuXG4vL3BpdGNoIG1hcCBhbmltYXRpb25cbmNvbnN0IHBpdGNoTWFwID0gKHtmaW5hbFBpdGNoID0gMCwgZHVyYXRpb24gPSAxMDAwfSkgPT4ge1xuXG5cdGlmIChwaXRjaEFuaW1hdGlvbikgY2xlYXJJbnRlcnZhbChwaXRjaEFuaW1hdGlvbik7XG5cblx0Y29uc3QgdGljayA9IDEwO1xuXHRsZXQgZWxhcHNlID0gMDtcblxuXHRjb25zdCBzY2FsZVBpdGNoID0gc2NhbGVMaW5lYXIoKVxuXHRcdC5kb21haW4oWzAsIGR1cmF0aW9uXSlcblx0XHQucmFuZ2UoW21hcGJveC5nZXRQaXRjaCgpLCBmaW5hbFBpdGNoXSk7XG5cblx0cGl0Y2hBbmltYXRpb24gPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdG1hcGJveC5zZXRQaXRjaChzY2FsZVBpdGNoKGVsYXBzZSkpO1xuXHRcdC8vIG1hcGJveC5zZXRab29tKHNjYWxlWm9vbShlbGFwc2UpKTtcblx0XHRlbGFwc2UgKz0gdGljaztcblx0XHRpZiAoZWxhcHNlID4gZHVyYXRpb24pIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwocGl0Y2hBbmltYXRpb24pO1xuXHRcdFx0cGl0Y2hBbmltYXRpb24gPSBudWxsO1xuXHRcdH1cblx0fSwgdGljayk7XG5cbn07XG5cbi8vIFByb2plY3QgR2VvSlNPTiBjb29yZGluYXRlIHRvIHRoZSBtYXAncyBjdXJyZW50IHN0YXRlXG5jb25zdCBwcm9qZWN0ID0gZCA9PiBtYXBib3gucHJvamVjdChuZXcgbWFwYm94Z2wuTG5nTGF0KCtkWzBdLCArZFsxXSkpO1xuXG4vLyBQcm9qZWN0IEdlb0pTT04gY29vcmRpbmF0ZSB0byB0aGUgbWFwJ3MgY3VycmVudCBzdGF0ZVxuY29uc3QgcHJvamVjdFBvaW50ID0gZnVuY3Rpb24gKGxvbiwgbGF0KSB7XG5cdGxldCBwb2ludCA9IG1hcGJveC5wcm9qZWN0KG5ldyBtYXBib3hnbC5MbmdMYXQobG9uLCBsYXQpKTtcblx0dGhpcy5zdHJlYW0ucG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXQsXG5cdHVwZGF0ZSxcblx0aXNNYXBib3hMb2FkZWQsXG5cdGNoYW5nZU1hcCxcblx0cGl0Y2hNYXAsXG5cdHByb2plY3QsXG5cdHByb2plY3RQb2ludFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=