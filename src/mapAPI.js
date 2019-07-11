import {select,mouse,scaleLinear} from 'd3/dist/d3.min';
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
import config from './config/config.json';
import datavis from './datavis.js';

const bounds = [
	[-73.81,45.35],
	[-73.34,45.58]
];

mapboxgl.accessToken = config.mapbox.token;
let mapbox;
const mapBoxConfig = {
	container: 'map',
	style: `mapbox://styles/${config.mapbox.user}/cjtf3qpso03kh1fkvzo8dd4xk`,
	center: [-73.59, 45.485], //center in Montreal
	zoom: 12,
	pitch: 0,
	interactive: true,
	maxZoom: 17,
	maxBounds: bounds // Sets bounds as max
};

const init = () => {

	const mapContainer = select('#app').select(':first-child').append('div'); //map container set on WP > Beaver
	mapContainer.attr('id', 'map');

	mapbox = new mapboxgl.Map(mapBoxConfig);

	//Get Mapbox map canvas container
	const canvas = mapbox.getCanvasContainer();

	//load mapbox
	mapbox.on('load', () => datavis.init(canvas));
	mapbox.on('viewreset', update);
	mapbox.on('move', update);
	mapbox.on('moveend', update);

};

const pitchMap = () => {

	const _scale = scaleLinear()
		.domain([0, window.innerWidth])
		.range([0, 60]);

	select('#map').on('mousemove', function() {
		const _mouse = mouse(this);
		console.log(_mouse[0], _scale(_mouse[0]));
		mapbox.setPitch(_scale(_mouse[0]));
	});
};

const update = () => datavis.mapUpdate();

// Project GeoJSON coordinate to the map's current state
const project = d => mapbox.project(new mapboxgl.LngLat(+d[0], +d[1]));

// Project GeoJSON coordinate to the map's current state
const projectPoint = function (lon, lat) {
	let point = mapbox.project(new mapboxgl.LngLat(lon, lat));
	this.stream.point(point.x, point.y);
};

const changeMap = mapID => {
	mapbox.setStyle(`mapbox://styles/${config.mapbox.user}/${mapID}`);
};


export default {
	init,
	update,
	project,
	projectPoint,
	changeMap
};
