import {select} from 'd3/dist/d3.min';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';	
// import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';


// APP
export default function MapAPI(_app) {

	const app = _app;
	let mapbox;

	mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYWp1IiwiYSI6IlVyQTZDODQifQ.FUtjr5TQfJNR606U1v4gcQ';

	this.mapBoxConfig = {
		container: 'map',
		// style: 'mapbox://styles/lucaju/cj6psaaal2v8c2qns359x470g',
		style: 'mapbox://styles/lucaju/cjsd7jniz0yva1fmzkcxh2wxn',
		center: [-73.59, 45.485],
		zoom: 12,
		pitch: 20,
		// interactive: false,
	};

	this.init = function init() {

		const mapContainer = select('#app').select(':first-child').append('div'); //map container set on WP > Beaver
		mapContainer.attr('id', 'map');

		mapbox = new mapboxgl.Map(this.mapBoxConfig);

		//Get Mapbox map canvas container
		const canvas = mapbox.getCanvasContainer();

	
		//load mapbox
		mapbox.on('load', function () {
			app.datavis.init(canvas);
			
		});

		mapbox.on('viewreset', this.update);
		mapbox.on('move', this.update);
		mapbox.on('moveend', this.update);


	};

	this.update = function update() {
		app.datavis.mapUpdate();
	};

	// Project GeoJSON coordinate to the map's current state
	this.project = function project(d) {
		return mapbox.project(new mapboxgl.LngLat(+d[0], +d[1]));
	};

	// Project GeoJSON coordinate to the map's current state
	this.projectPoint = function projectPoint(lon, lat) {
		let point = mapbox.project(new mapboxgl.LngLat(lon, lat));
		this.stream.point(point.x, point.y);
	};


	
}