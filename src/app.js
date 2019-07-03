// import * as d3 from 'd3';
// import {
// 	select
// } from 'd3-selection/dist/d3-selection.min.js';
import {select} from 'd3/dist/d3.min';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import './style.css';

import WordpressAPI from './wordpress.js';
import MapAPI from './mapAPI.js';
import Datavis from './datavis.js';


function App() {


	this.mapAPI = new MapAPI(this);
	this.datavis = new Datavis(this);
	this.wordpressAPI = new WordpressAPI(this);

	this.currentPage;
	this.currentTheme;

	/////------

	let panel = select('#left-panel');
	panel.classed('hide', false);
	console.log(panel.attr('id'));
	console.log(panel.classed('hide'));



	// this.height = 400 - this.margin.top - this.margin.bottom;
	// this.width = select('#map').width() - this.margin.left - this.margin.right;


	this.testWP = function testWP() {
		this.wp.posts().then(function (data) {
			console.log(data);
		});

	};


	this.init = function init() {
		this.mapAPI.init();
		this.wordpressAPI.init();
	};


	
	

	this.showDetails = function showDetails(postID) {

		console.log(postID);

		this.wordpressAPI.showPost(postID);

		// this.wordpressAPI.wp.posts().id(postID)
		// 	.then(function (data) {
		// 		console.log(data);

		// 		select('#article-title').select('.fl-heading-text').html(data.title.rendered);
		// 		select('#article-content').select('.fl-rich-text').html(data.content.rendered);
		// 	});
	};


}

const app = new App();
window.app = app;
app.init();