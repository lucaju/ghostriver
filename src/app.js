// import 'uikit/dist/js/uikit.min';
// import 'uikit/dist/css/uikit.min.css';

// import * as d3 from 'd3';
import {
	select
} from 'd3-selection/dist/d3-selection.min.js';
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
	this.dataset = undefined;

	this.hoveredPostId;
	this.activePostId;

	this.wp = new WPAPI({
		endpoint: 'http://localhost:8888/ghost-river/wp-json/'
	});

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
		mapContainer.attr('id', 'map');

		this.mapbox = new mapboxgl.Map(this.mapBoxConfig);

		console.log(this.mapbox);

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
				layers: ['ghost-river-nodes', 'ghost-river-lines'] // replace this with the name of the layer
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




			console.log(feature)


			if (_this.activePostId) {
				_this.mapbox.setFeatureState({
					sourceLayer: 'ghost-river-nodes',
					source: 'composite',
					id: _this.activePostId
				}, {
					active: false
				});
			}

			_this.activePostId = feature.id;
			_this.mapbox.setFeatureState({
				sourceLayer: 'ghost-river-nodes',
				source: 'composite',
				id: _this.activePostId
			}, {
				active: true
			});


		});

		this.mapbox.on('mouseover', 'ghost-river-nodes', function (e) {

			console.log(e.features[0].properties);
			e.features[0].properties.active = true;

			if (e.features.length > 0) {
				if (_this.hoveredPostId) {
					_this.mapbox.setFeatureState({
						sourceLayer: 'ghost-river-nodes',
						source: 'composite',
						id: _this.hoveredPostId
					}, {
						over: false
					});
				}

				_this.hoveredPostId = e.features[0].id;
				_this.mapbox.setFeatureState({
					sourceLayer: 'ghost-river-nodes',
					source: 'composite',
					id: _this.hoveredPostId
				}, {
					over: true
				});
			}
		});

		this.mapbox.on('mouseleave', 'ghost-river-nodes', function () {
			if (_this.hoveredPostId) {
				_this.mapbox.setFeatureState({
					sourceLayer: 'ghost-river-nodes',
					source: 'composite',
					id: _this.hoveredPostId
				}, {
					over: false
				});
			}
			_this.hoveredPostId = null;
		});

	};

	this.init2 = function init2() {

		const _this = this;

		// const pageData = {};

		// const html = homeMustache(pageData);
		// d3.select('#app').append(html);
		// const mapContainer = select('#app').insert('div',':first-child');
		const mapContainer = select('#app').select(':first-child').append('div');
		mapContainer.attr('id', 'map');

		this.mapbox = new mapboxgl.Map(this.mapBoxConfig);

		console.log(this.mapbox);

		this.mapbox.on('load', function () {

			_this.mapbox.addSource('ghost-river-nodes', {
				type: 'vector',
				url: 'mapbox://lucaju.cjinoes3m01qaikqu1rx3aqte-7sgm4'
			});

			console.log(_this.mapbox);

			_this.mapbox.addLayer({
				'id': 'ghost-river-nodes',
				'type': 'circle',
				'source': 'ghost-river-nodes',
				'layout': {
					'visibility': 'visible'
				},
				'paint': {
					'circle-radius': 8,
					'circle-color': 'rgba(55,148,179,1)'
				},
				'source-layer': 'ghost-river-nodes'
			});


			// _this.mapbox.addLayer({
			// 	'id': 'population',
			// 	'type': 'circle',
			// 	'source': {
			// 		type: 'vector',
			// 		url: 'mapbox://examples.8fgz4egr'
			// 	},
			// 	'source-layer': 'sf2010',
			// 	'paint': {
			// 		// make circles larger as the user zooms from z12 to z22
			// 		'circle-radius': {
			// 			'base': 1.75,
			// 			'stops': [
			// 				[12, 2],
			// 				[22, 180]
			// 			]
			// 		},
			// 		// color circles by ethnicity, using a match expression
			// 		// https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
			// 		'circle-color': [
			// 			'match',
			// 			['get', 'ethnicity'],
			// 			'White', '#fbb03b',
			// 			'Black', '#223b53',
			// 			'Hispanic', '#e55e5e',
			// 			'Asian', '#3bb2d0',
			// 			/* other */
			// 			'#ccc'
			// 		]
			// 	}
			// });
		});


	};


}

const app = new App();
window.app = app;
app.init2();