// import 'uikit/dist/js/uikit.min';
// import 'uikit/dist/css/uikit.min.css';

// import * as d3 from 'd3';
// import {
// 	select
// } from 'd3-selection/dist/d3-selection.min.js';
import {
	select
} from 'd3/dist/d3.min';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

import WPAPI from 'wpapi';

import dataset from './features.json';

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
					// 'circle-radius': 8,
					'circle-radius': [
						'case',
						[
							'boolean',
							[
								'feature-state',
								'active'
							],
							false
						],
						11,
						5
					],
					'circle-radius-transition': {
						'duration': 4000,
						'delay': 1000
					},
					// 'circle-stroke-width': [
					// 	'case',
					// 	[
					// 		'boolean',
					// 		['feature-state', 'over'],
					// 		false
					// 	],
					// 	10,
					// 	0
					// ],
					// 'circle-stroke-width-transition': {
					// 	'duration': 4000,
					// 	'delay': 1000
					// },
					'circle-color': 'rgba(55,148,179,1)',
					'circle-stroke-color': 'rgba(255,255,255,.68)'
				},
				'source-layer': 'ghost-river-nodes'
			});
		});


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
					source: 'ghost-river-nodes',
					id: _this.activePostId
				}, {
					active: false
				});
			}

			_this.activePostId = feature.id;
			_this.mapbox.setFeatureState({
				sourceLayer: 'ghost-river-nodes',
				source: 'ghost-river-nodes',
				id: _this.activePostId
			}, {
				active: true
			});


		});

		this.mapbox.on('mouseover', 'ghost-river-nodes', function (e) {

			_this.mapbox.setPaintProperty('ghost-river-nodes', 'circle-stroke-width-transition', {
				'duration': 4000,
				'delay': 1000
			});


			_this.mapbox.setPaintProperty('ghost-river-nodes', 'circle-stroke-width',
				['case',
					['==', ['id'], e.features[0].id],
					20,
					0
				]);




			console.log(e.features[0]);
			// e.features[0].properties.active = true;

			// if (e.features.length > 0) {
			// 	if (_this.hoveredPostId) {
			// 		_this.mapbox.setFeatureState({
			// 			sourceLayer: 'ghost-river-nodes',
			// 			source: 'ghost-river-nodes',
			// 			id: _this.hoveredPostId
			// 		}, {
			// 			over: false
			// 		});
			// 	}

			// 	_this.hoveredPostId = e.features[0].id;
			// 	_this.mapbox.setFeatureState({
			// 		sourceLayer: 'ghost-river-nodes',
			// 		source: 'ghost-river-nodes',
			// 		id: _this.hoveredPostId
			// 	}, {
			// 		over: true
			// 	});
			// }
		});

		this.mapbox.on('mouseleave', 'ghost-river-nodes', function () {
			if (_this.hoveredPostId) {
				_this.mapbox.setFeatureState({
					sourceLayer: 'ghost-river-nodes',
					source: 'ghost-river-nodes',
					id: _this.hoveredPostId
				}, {
					over: false
				});
			}
			_this.hoveredPostId = null;
		});

	};

	// Project GeoJSON coordinate to the map's current state
	this.project = function (d) {
		return this.mapbox.project(new mapboxgl.LngLat(+d.lat, +d.long));
	};

	this.init3 = function init3() {

		const _this = this;

		// const pageData = {};

		// const html = homeMustache(pageData);
		// select('#app').append(html);
		// const mapContainer = select('#app').insert('div',':first-child');
		const mapContainer = select('#app').select(':first-child').append('div');
		mapContainer.attr('id', 'map');


		this.mapbox = new mapboxgl.Map(this.mapBoxConfig);

		//Get Mapbox map canvas container
		const canvas = this.mapbox.getCanvasContainer();
		// Overlay d3 on the map
		this.svg = select(canvas).append('svg');
		this.svg.attr('id', 'map-box-vis');

		// Load map and dataset
		this.mapbox.on('load', function () {
			console.log('opa')
			_this.svg.attr('height', '100%');
			// _this.setupMapInterations();
			_this.drawData(_this.dataset.features, 500, 2);
		});

		console.log(dataset);
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
				app.showDetails(d.postID);
			})
			.on('mouseover', function (d) {
				_this._mouseOverSelection(d);
			})
			.on('mouseout', function (d) {
				_this._mouseOutSelection(d);
			})
			.attr('cx', function (d) {
				if (d.location.hasOwnProperty('coordinates')) {
					return _this.project(d.geometry.coordinates).x;
				} else {
					return 0;
				}
			})
			.attr('r', 0)
			.attr('cy', function (d) {
				if (d.location.hasOwnProperty('coordinates')) {
					return _this.project(d.geometry.coordinates).y;
				} else {
					return 0;
				}
			})
			.style('opacity', 0.1)
			.style('fill', function (d) {
				return app.color(_this.colorCategory(d, app.colorCodeBy));
			})
			.style('stroke', function (d) {
				return app.color(_this.colorCategory(d, app.colorCodeBy));
			})
			.transition()
			.duration(transitionTime)
			.delay(function (d, i) {
				return delayTime * i;
			})
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
app.init3();