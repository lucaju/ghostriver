import {select,scaleLinear} from 'd3/dist/d3.min';
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
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

let mapbox;
let pitchAnimation;


const init = async ({mapID, location}) => {

	return new Promise(resolve => {

		//map container set on WP > Beaver
		select('#app').select(':first-child')
			.append('div')
			.attr('id', 'map');


		if (location === '404') setUnknowLocation();											//404: center the map anywhere in the globe

		if (mapID) mapBoxConfig.style = `mapbox://styles/${config.mapbox.user}/${mapID}`;		//if deeplink: set map style

		mapboxgl.accessToken = config.mapbox.token;
		mapbox = new mapboxgl.Map(mapBoxConfig);

		mapbox.on('load', () => {
			// pitchMap();

			geodata.init(mapbox.getCanvasContainer());
			
			if (location === '404') flyFromUnknowLocation();

			mapbox.on('viewreset', update);
			mapbox.on('move', update);
			mapbox.on('moveend', update);
			
			resolve();
		});
	});

};

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
		// pitch: 60,
		// maxDuration: 5000,
		easing: function (t) { return t; }
	});

	mapbox.on('moveend', () => {
		if (mapbox.getMaxBounds() == null) mapbox.setMaxBounds(config.map.default.maxBounds);
	});
};

const update = () => {
	geodata.mapUpdate();
};

//check if map is loaded
const isMapboxLoaded = () =>  {
	if (mapbox) return mapbox.isStyleLoaded();
	return false;
};

//change map style
const changeMap = ({mapID}) => {
	mapbox.setStyle(`mapbox://styles/${config.mapbox.user}/${mapID}`);
	pitchMap({finalPitch:0, duration:1});
};

const flyTo = coordinates => {
	mapbox.flyTo({
		center:coordinates,
		zoom: 17,
		speed: 1,
		curve: 1,
		// minZoom: 3,
		// pitch: 60,
		// maxDuration: 5000,
		easing: function (t) { return t; }
	});
};

const flyToOrigin = coordinates => {
	mapbox.flyTo({
		center:config.map.default.center,
		zoom: config.map.default.zoom + 0.2,
		speed: 1.2,
		curve: 1,
		easing: function (t) { return t; }
	});
};

//pitch map animation
const pitchMap = ({finalPitch = 0, duration = 1000}) => {

	if (pitchAnimation) clearInterval(pitchAnimation);

	const tick = 10;
	let elapse = 0;

	const scalePitch = scaleLinear()
		.domain([0, duration])
		.range([mapbox.getPitch(), finalPitch]);

	pitchAnimation = setInterval( () => {
		mapbox.setPitch(scalePitch(elapse));
		// mapbox.setZoom(scaleZoom(elapse));
		elapse += tick;
		if (elapse > duration) {
			clearInterval(pitchAnimation);
			pitchAnimation = null;
		}
	}, tick);

};

// Project GeoJSON coordinate to the map's current state
const project = d => mapbox.project(new mapboxgl.LngLat(+d[0], +d[1]));

// Project GeoJSON coordinate to the map's current state
const projectPoint = function (lon, lat) {
	let point = mapbox.project(new mapboxgl.LngLat(lon, lat));
	this.stream.point(point.x, point.y);
};

export default {
	init,
	update,
	isMapboxLoaded,
	changeMap,
	pitchMap,
	project,
	projectPoint,
	flyTo,
	flyToOrigin
};
