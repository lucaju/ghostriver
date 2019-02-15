// import 'uikit/dist/js/uikit.min';
// import 'uikit/dist/css/uikit.min.css';

// import * as d3 from 'd3';
import {select} from 'd3-selection/dist/d3-selection.min.js';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

import WPAPI from 'wpapi';


import Post from './post';

// import homeMustache from './home.html';
import './style.css';
import 'mapbox-gl/dist/mapbox-gl.css';

// APP
function App() {

	mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYWp1IiwiYSI6IlVyQTZDODQifQ.FUtjr5TQfJNR606U1v4gcQ';

	this.mapBoxConfig = {
		container: 'map',
		style: 'mapbox://styles/lucaju/cjr8n08pq0xrh2smihdq81bzb',
		center: [-73.59, 45.485],
		zoom: 13,
		// pitch: 60,
		interactive: false

	};

	this.mapbox;
	this.svg;
	this.dataset = undefined;

	this.wp = new WPAPI({ endpoint: 'http://localhost:8888/ghost-river/wp-json/' });

	this.post = new Post();


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


	this.init = function init() {

		const _this = this;

		// const pageData = {};

		// const html = homeMustache(pageData);
		// d3.select('#app').append(html);
		// const mapContainer = select('#app').insert('div',':first-child');
		const mapContainer = select('#app').select(':first-child').append('div');
		mapContainer.attr('id','map');

		this.mapbox = new mapboxgl.Map(this.mapBoxConfig);

		// this.mapbox.scrollZoom.disable();
		// this.mapbox.dragPan.disable();
		// this.mapbox.doubleClickZoom.disable();

		// Get Mapbox map canvas container
		// const canvas = this.mapbox.getCanvasContainer();
		// Overlay d3 on the map
		// this.svg = d3.select(canvas).append('svg');
		// this.svg.attr('id', 'map-box-vis');

		// Load map and dataset
		// this.mapbox.on('load', function () {
		// 	// _this.svg.attr('width', '100%');
		// 	// _this.svg.attr('class', 'uk-height-viewport');
		// 	// _this.drawData(mapVis.dataset,500,2);
		// });

		// this.mapbox.on('click', 'tt', function () {
		// 	console.log(this);
		// });

		this.mapbox.on('click', function (e) {
			const features = _this.mapbox.queryRenderedFeatures(e.point, {
				layers: ['ghost-river-nodes','ghost-river-lines'] // replace this with the name of the layer
			});

			if (!features.length) {
				return;
			}

			const feature = features[0];

			console.log(feature);

			// const popup = new mapboxgl.Popup({
			// 		offset: [0, -15]
			// 	})
			// 	.setLngLat(feature.geometry.coordinates)
			// 	.setHTML('<h3>' + feature.properties.name + '</h3><p>' + feature.properties.theme + '</p>')
			// 	.setLngLat(feature.geometry.coordinates)
			// 	.addTo(_this.mapbox);
			
		
			// _this.post.init();

			const postID = feature.properties.postID;
			console.log(postID);
			

			_this.wp.posts().id(postID).then(function (data) {
				console.log(data);

				select('#article-title').select('.fl-heading-text').html(data.title.rendered);
				select('#article-content').select('.fl-rich-text').html(data.content.rendered);
			});
	
		});

	};
}

const app = new App();
window.app = app;
app.init();