import {select} from 'd3/dist/d3.min';
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'

import datavis from './datavis.js';


let mapbox;

//lucaju
// mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYWp1IiwiYSI6IlVyQTZDODQifQ.FUtjr5TQfJNR606U1v4gcQ';
//project
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FpbnRwaWVycmVtYXBwaW5nIiwiYSI6ImNqdDBpOXo4aDBkYmk0Nm5wMTU0MzhxcWcifQ.tH1TZXEMh4KOnahRKRl_BA';

const mapBoxUser = 'saintpierremapping';

const mapBoxConfig = {
	container: 'map',
	style: `mapbox://styles/${mapBoxUser}/cjtf3qpso03kh1fkvzo8dd4xk`,
	center: [-73.59, 45.485],
	zoom: 12,
	pitch: 0,
	interactive: false,
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

const update = () => datavis.mapUpdate();

// Project GeoJSON coordinate to the map's current state
const project = d => mapbox.project(new mapboxgl.LngLat(+d[0], +d[1]));

// Project GeoJSON coordinate to the map's current state
const projectPoint = function (lon, lat) {
	let point = mapbox.project(new mapboxgl.LngLat(lon, lat));
	this.stream.point(point.x, point.y);
};

const changeMap = mapID => {
	console.log(mapID);
	mapbox.setStyle(`mapbox://styles/${mapBoxUser}/${mapID}`);
};


export default {
	init,
	update,
	project,
	projectPoint,
	changeMap
};
