import {select,mouse,scaleLinear} from 'd3/dist/d3.min';
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
import config from './config/config.json';
import datavis from './datavis.js';

const internalOption = {
	mousePitch: false
};

mapboxgl.accessToken = config.mapbox.token;
let mapbox;
const bounds = [
	[-73.81,45.35],
	[-73.34,45.58]
];

let pitchAnimation;

const mapBoxConfig = {
	container: 'map',
	style: `mapbox://styles/${config.mapbox.user}/cjxzbs7nf0a4b1cowp80tsndy`,
	center: [-73.56, 45.465], //center in Montreal
	zoom: 11.5,
	pitch: 0,
	interactive: true,
	// maxZoom: 17,
	maxBounds: null//bounds // Sets bounds as max
};

const init = async ({mapID, notFound}) => {

	return new Promise(resolve => {

		if (mapID) mapBoxConfig.style = `mapbox://styles/${config.mapbox.user}/${mapID}`;
		if (notFound) {

			const lat = Math.floor(Math.random() * 180) - 90;
			const lon = Math.floor(Math.random() * 360) - 180;

			mapBoxConfig.zoom = 5;
			mapBoxConfig.center = [lon,lat];
			// delete mapBoxConfig.maxBounds;
		}

		console.log(mapBoxConfig);
		const mapContainer = select('#app').select(':first-child').append('div'); //map container set on WP > Beaver
		mapContainer.attr('id', 'map');

		mapbox = new mapboxgl.Map(mapBoxConfig);
		// const canvas = mapbox.getCanvasContainer();
		
		mapbox.on('viewreset', update);
		mapbox.on('move', update);
		mapbox.on('moveend', update);


		mapbox.on('load', () => {
			// pitchMap();

			datavis.init(mapbox.getCanvasContainer());
			if(internalOption.mousePitch) mouseMapPitch();
			
			if (notFound) {
				mapbox.flyTo({
					center: [-73.56, 45.465],
					zoom: 11.5,
					speed: 1,
					curve: 1,
					minZoom: 3,
					// pitch: 60,
					macBounds: bounds,
					// maxDuration: 5000,
					easing: function (t) { return t; }
				});

				mapbox.on('moveend', () => {
					if (mapbox.getMaxBounds() == null) mapbox.setMaxBounds(bounds);
				});
				// mapbox.setMaxBounds = bounds;
			}
			

			resolve();
		});
	});

};


const isMapboxLoaded = () =>  {
	if (mapbox) return mapbox.isStyleLoaded();
	return false;
};

const pitchMap = ({finalPitch = 0, duration = 1000}) => {

	if (pitchAnimation) clearInterval(pitchAnimation);

	const tick = 10;
	let elapse = 0;

	const scalePitch = scaleLinear()
		.domain([0, duration])
		.range([mapbox.getPitch(), finalPitch]);

	// const scaleZoom = scaleLinear()
	// 	.domain([0, max])
	// 	.range([11.5, 12]);

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

const mouseMapPitch = () => {
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

const changeMap = ({mapID}) => {
	mapbox.setStyle(`mapbox://styles/${config.mapbox.user}/${mapID}`);
	pitchMap({finalPitch:0, duration:1});
};


export default {
	init,
	update,
	project,
	projectPoint,
	changeMap,
	pitchMap,
	isMapboxLoaded
};
