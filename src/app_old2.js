// import * as d3 from 'd3';
// import {
// 	select
// } from 'd3-selection/dist/d3-selection.min.js';
import {select} from 'd3/dist/d3.min';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import WPAPI from 'wpapi';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

import map from './map.js';
import dataset from './features.json';


// APP
function App() {

	mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYWp1IiwiYSI6IlVyQTZDODQifQ.FUtjr5TQfJNR606U1v4gcQ';

	this.mapBoxConfig = {
		container: 'map',
		// style: 'mapbox://styles/lucaju/cjr8n08pq0xrh2smihdq81bzb',
		style: 'mapbox://styles/lucaju/cjsd7jniz0yva1fmzkcxh2wxn',
		center: [-73.59, 45.485],
		zoom: 13,
		// pitch: 60,
		// interactive: false,
		// transition: {
		// 	duration: 3000,
		// 	delay: 0
		// }
	};

	this.mapbox;
	this.svg;
	this.dataset;

	this.hoveredPostId;
	this.activePostId;

	this.margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20
	};

	this.height = 400 - this.margin.top - this.margin.bottom;
	// this.width = select('#map').width() - this.margin.left - this.margin.right;

	this.wp = new WPAPI({
		endpoint: 'http://localhost:8888/ghost-river/wp-json/'
	});


	this.testWP = function testWP() {
		// d3.json('http://labs.fluxo.art.br/ghost-river/wp-json/wp/v2/posts', function(d) {
		// 	console.log('oi');
		// 	console.log(d);
		// 	return d;
		// }).then(function(data) {
		// 	console.log(data);
		// });

		this.wp.posts().then(function (data) {
			console.log(data);
		});

	};

	// Project GeoJSON coordinate to the map's current state
	this.project = function (d) {
		return this.mapbox.project(new mapboxgl.LngLat(+d[0], +d[1]));
	};

	this.init = function init() {

		console.log('a new beginning');

		const _this = this;

		// const pageData = {};

		// const html = homeMustache(pageData);
		// select('#app').append(html);
		// const mapContainer = select('#app').insert('div',':first-child');
		const mapContainer = select('#app').select(':first-child').append('div'); //map container set on WP > Beaver
		mapContainer.attr('id', 'map');


		this.mapbox = new mapboxgl.Map(this.mapBoxConfig);

		//Get Mapbox map canvas container
		const canvas = this.mapbox.getCanvasContainer();
		// Overlay d3 on the map
		this.svg = select(canvas).append('svg');
		this.svg.attr('id', 'map-box-vis');
		
		// Load map and dataset
		this.mapbox.on('load', function () {
			// console.log(_this.dataset);
			_this.svg.attr('height', '100%');
			// _this.setupMapInterations();
			_this.drawData(dataset.features, 500, 2);
		});

		// console.log(dataset);
		console.log(this.mapbox);
	};


	this.drawData = function drawData(data, transitionTime = 0, delayTime = 0) {

		const _this = this;

		this.dataset = data;

		// Add circles
		let circles = this.svg.selectAll('.circle')
			.data(data);

		circles.exit()
			.attr('id', 'exit')
			.attr('class', 'exit')
			.transition()
			.duration(500)
			.style('fill', '#000000')
			.attr('r', 0)
			.remove();

		circles.enter().append('circle')
			.attr('class', 'circle');

		circles = this.svg.selectAll('.circle')
			.attr('id', function (d) {
				return `index-${d.postID}`;
			})
			.on('click', function (d) {
				app.showDetails(d.properties.postID);
			})
			.on('mouseover', function (d) {
				_this._mouseOverSelection(d);
				console.log(this)
			})
			.on('mouseout', function (d) {
				_this._mouseOutSelection(d);
			})
			.attr('cx', function (d) {
				return _this.project(d.geometry.coordinates).x;
			})
			.attr('r', 0)
			.attr('cy', function (d) {
				return _this.project(d.geometry.coordinates).y;
			})
			.style('opacity', 0.1)
			.style('fill', function (d) {
				// return app.color(_this.colorCategory(d, app.colorCodeBy));
			})
			.style('stroke', function (d) {
				// return app.color(_this.colorCategory(d, app.colorCodeBy));
			})
			.transition()
			.duration(1000)
			// .duration(transitionTime)
			// .delay(function (d, i) {
			// 	return delayTime * i;
			// })
			.attr('r', 8)
			.style('opacity', 0.8);

		// Call the update function
		// this.updateDataPoints();

	};
	

	this.showDetails = function showDetails(postID) {


		console.log(postID);

		this.wp.posts().id(postID).then(function (data) {
			console.log(data);

			select('#article-title').select('.fl-heading-text').html(data.title.rendered);
			select('#article-content').select('.fl-rich-text').html(data.content.rendered);
		});
	}


}

const app = new App();
window.app = app;
app.init();