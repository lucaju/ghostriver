// import * as d3 from 'd3';
// import {
// 	select
// } from 'd3-selection/dist/d3-selection.min.js';
// import {select} from 'd3/dist/d3.min';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import './style.css';

// import wordpressAPI from './wordpress.js';
import mapAPI from './mapAPI.js';
// import datavis from './datavis.js';




mapAPI.init();
// datavis.init();
// wordpressAPI.init();


// this.testWP = function testWP() {
// 	this.wp.posts().then(function (data) {
// 		console.log(data);
// 	});

// };




// this.showDetails = function showDetails(postID) {

// 	console.log(postID);

// 	this.wordpressAPI.showPost(postID);

// 	this.wordpressAPI.wp.posts().id(postID)
// 		.then(function (data) {
// 			console.log(data);

// 			select('#article-title').select('.fl-heading-text').html(data.title.rendered);
// 			select('#article-content').select('.fl-rich-text').html(data.content.rendered);
// 		});
// };


