import {select} from 'd3-selection';
// import mapboxgl from 'mapbox-gl';

import geodata from './geodata';

import config from './config/config.json';


const mapBoxConfig = {
	container: 'map',
	style: `mapbox://styles/${config.mapbox.user}/${config.map.default.styleID}`,
	center: config.map.default.center, //center in Montreal
	zoom: config.map.default.zoom,
	pitch: config.map.default.pitch,
	minZoom: config.map.default.minZoom,
	maxZoom: config.map.default.maxZoom,
	maxBounds: config.map.default.maxBounds,
	interactive: true,
};

let mapboxgl;
let mapbox;


const init = async ({mapID, location}) => {

	return new Promise( async resolve => {

		//map container set on WP > Beaver
		select('#app').select(':first-child')
			.append('div')
			.attr('id', 'map');

		if (location === '404') setUnknowLocation();											//404: center the map anywhere in the globe

		if (mapID) mapBoxConfig.style = `mapbox://styles/${config.mapbox.user}/${mapID}`;		//if deeplink: set map style

		await loadMapBoxGL()

		// mapboxgl.accessToken = config.mapbox.token;
		mapboxgl.default.accessToken = config.mapbox.token;
		mapbox = new mapboxgl.Map(mapBoxConfig);

		mapbox.on('load', () => {

			geodata.init(mapbox.getCanvasContainer());

			mapbox.on('viewreset', update);
			mapbox.on('move', update);
			mapbox.on('moveend', update);

			if (location === '404') flyFromUnknowLocation();
			
			resolve();
		});
		
	});

};

const loadMapBoxGL = async () => {
	if(!mapboxgl) mapboxgl = await import(/* webpackChunkName: "mapbox-gl" */ 'mapbox-gl');
};

//check if map is loaded
const isMapboxLoaded = () =>  {
	if (mapbox) return mapbox.isStyleLoaded();
	return false;
};

//change map style
const changeMap = ({mapID}) => mapbox.setStyle(`mapbox://styles/${config.mapbox.user}/${mapID}`);

// Project GeoJSON coordinate to the map's current state
const project = d => mapbox.project(new mapboxgl.LngLat(+d[0], +d[1]));

// Project GeoJSON coordinate to the map's current state
const projectPoint = function (lon, lat) {
	let point = mapbox.project(new mapboxgl.LngLat(lon, lat));
	this.stream.point(point.x, point.y);
};

//update
const update = () => geodata.nodesUpdate();

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
		center: config.map.default.center,
		zoom: config.map.default.zoom,
		speed: 1,
		curve: 1,
		minZoom: 3,
		easing: function (t) { return t; }
	});

	mapbox.on('moveend', () => {
		if (mapbox.getMaxBounds() === null) mapbox.setMaxBounds(config.map.default.maxBounds);
	});

};

const flyTo = coordinates => {

	if(mapbox) {
		mapbox.flyTo({
			center:coordinates,
			zoom: 14,
			speed: 1,
			curve: 1,
			easing: function (t) { return t; }
		});
	}

};

const flyToOrigin = () => {

	if(mapbox) {
		mapbox.flyTo({
			center:config.map.default.center,
			zoom: config.map.default.zoom + 0.2,
			speed: 1.2,
			curve: 1,
			easing: function (t) { return t; }
		});
	}

};


export default {
	init,
	update,
	isMapboxLoaded,
	changeMap,
	project,
	projectPoint,
	flyTo,
	flyToOrigin
};
