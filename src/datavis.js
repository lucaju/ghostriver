import * as d3 from 'd3';
import mapAPI from './mapAPI.js';
import wpAPI from './wordpress.js';

import nodesDataset from './data/features.json';
import river1834 from './data/1834_A_Jobin_final-2.json';

let path;
let svg;
let riverLines;
let dataset = [];
let nodes;
let themeNodes = [];

const init = canvas => {

	const transform = d3.geoTransform({point:mapAPI.projectPoint});
	path = d3.geoPath().projection(transform);

	dataset = nodesDataset.features;

	console.log(dataset);

	// Overlay d3 on the mapbox canvas
	svg = d3.select(canvas).append('svg');
	svg.attr('id', 'map-box-vis');

	svg.attr('height', '100%');

	// draNodes(dataset.features, 500, 2);
	drawRiver(river1834.features, 500, 2);

	wpAPI.init();
};

const getThemeNodes = theme => dataset.filter( feature => feature.properties.theme.toLowerCase() === theme );

const drawNodes =  (theme, transitionTime = 500, delayTime = 2) => {

	const data = getThemeNodes(theme);
	console.log(data);

	// Add circles
	nodes = svg.selectAll('.circle')
		.data(data);

	nodes.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.style('fill', '#000000')
		.attr('r', 0)
		.remove();

	nodes.enter().append('circle')
		.attr('class', 'circle');

	nodes = svg.selectAll('.circle')
		.attr('id', d => {
			return `index-${d.postID}`;
		})
		.on('click', d => {
			console.log(d.properties.postID);
			wpAPI.showPost(d.properties.postID);
		})
		.on('mouseover', function (d) {
			// _this._mouseOverSelection(d);
			console.log(this);
			console.log(d);
		})
		.on('mouseout', function (d) {
			// _this._mouseOutSelection(d);
			console.log(d);
		})
		.attr('cx', function (d) {
			return mapAPI.project(d.geometry.coordinates).x;
		})
		.attr('r', 0)
		.attr('cy', function (d) {
			return mapAPI.project(d.geometry.coordinates).y;
		})
		.style('opacity', 0.1)
		.style('fill', function (d) {
			// console.log(d);
			// return app.color(_this.colorCategory(d, app.colorCodeBy));
		})
		.style('stroke', function (d) {
			// console.log(d);
			// return app.color(_this.colorCategory(d, app.colorCodeBy));
		});
		
	nodes.transition()
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

const drawRiver = (data, transitionTime = 0, delayTime = 0) => {

	riverLines = svg.selectAll('path')
		// .data(data.features)
		.data(data)
		.enter()
		.append('path')
		.attr('id', function (d) {
			return d.properties.Name;
		})
		.attr('d', path)
		.style('fill','none')
		.style('stroke-width', 2)
		.style('stroke', '#0071bc')
		.on('mousemove', function (d) {
			console.log(d);
		})
		.on('mouseout', function (d) {
			console.log(d);
		});

	//graph animation
	let lineLength = riverLines.node().getTotalLength();

	riverLines
		.attr('stroke-dasharray', lineLength + ' ' + lineLength)
		.attr('stroke-dashoffset', +lineLength)
		.transition()
		.duration(10000)
		.ease(d3.easeLinear)
		.attr('stroke-dashoffset', 0);
};

const mapUpdate =  () => {
	riverUpdate();
};

const nodeUpdate = () => {
	riverLines.attr('d', path);
};

const riverUpdate = () => {
	riverLines.attr('d', path);
	
	nodes
		.attr('cx', function (d) {
			return mapAPI.project(d.geometry.coordinates).x;
		})
		.attr('cy', function (d) {
			return mapAPI.project(d.geometry.coordinates).y;
		});
};



export default {
	init,
	drawNodes,
};