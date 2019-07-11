import * as d3 from 'd3';
import mapAPI from './mapAPI.js';
import wpAPI from './wordpress.js';

import nodesDataset from './data/features.json';
import river1834 from './data/1834_A_Jobin_final-2.json';

let riverPath;
let svg;
let riverLines;
let dataset = [];
let nodesPoint;
let nodesLine;
let nodesPoygon;

const init = canvas => {

	dataset = nodesDataset.features;

	// Overlay d3 on the mapbox canvas
	svg = d3.select(canvas).append('svg');
	svg.attr('id', 'map-box-vis');

	svg.attr('height', '100%');

	// draNodes(dataset.features, 500, 2);
	drawRiver(river1834.features, 500, 2);

	wpAPI.init();
};

const getThemeNodes = theme => {
	const selectedNodes = [];
	for (const node of dataset) {
		const nodethemes = node.properties.theme.split(', ');
		const themeNode = nodethemes.filter(t => t.toLowerCase() === theme);
		if (themeNode.length > 0) selectedNodes.push(node);
	}
	return selectedNodes;
};

const drawNodes =  theme => {

	const themeNodes = getThemeNodes(theme);
	const points = themeNodes.filter(n => n.geometry.type === 'Point');
	const lines = themeNodes.filter(n => n.geometry.type === 'LineString');
	const polygons = themeNodes.filter(n => n.geometry.type === 'Polygon');
	// console.log(themeNodes,points,lines,polygons);

	drawPoints(points);

};

const drawPoints =  (data, transitionTime = 500, delayTime = 2) => {

	// Add circles
	nodesPoint = svg.selectAll('.circle')
		.data(data);

	nodesPoint.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.style('fill', '#000000')
		.attr('r', 0)
		.remove();

	nodesPoint.enter().append('circle')
		.attr('class', 'circle');

	nodesPoint = svg.selectAll('.circle')
		.attr('id', function (d) {
			return `index-${d.properties.id}`;
		})
		.on('click', function (d) {
			wpAPI.showPost(d.properties);
		})
		.on('mouseover', function (d) {
			// _this._mouseOverSelection(d);
			console.log(d.properties);
		})
		.on('mouseout', function (d) {
			// _this._mouseOutSelection(d);
			// console.log(d);
		})
		.attr('cx', function (d) {
			return mapAPI.project(d.geometry.coordinates).x;
		})
		.attr('cy', function (d) {
			return mapAPI.project(d.geometry.coordinates).y;
		})
		.attr('r', 0)
		.style('opacity', 0.1)
		.style('fill', function (d) {
			// console.log(d);
			// return app.color(_this.colorCategory(d, app.colorCodeBy));
		})
		.style('stroke', function (d) {
			// console.log(d);
			// return app.color(_this.colorCategory(d, app.colorCodeBy));
		});
		
	nodesPoint.transition()
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

	const transform = d3.geoTransform({point:mapAPI.projectPoint});
	riverPath = d3.geoPath().projection(transform);

	riverLines = svg.selectAll('path')
		// .data(data.features)
		.data(data)
		.enter()
		.append('path')
		.attr('id', function (d) {
			return d.properties.Name;
		})
		.attr('d', riverPath)
		.style('fill','none')
		.style('stroke-width', 2)
		.style('stroke', '#0071bc')
		.on('mousemove', function (d) {
			// console.log(d);
		})
		.on('mouseout', function (d) {
			// console.log(d);
		});

	//graph animation
	// let lineLength = riverLines.node().getTotalLength();

	// riverLines
	// 	.attr('stroke-dasharray', lineLength + ' ' + lineLength)
	// 	.attr('stroke-dashoffset', +lineLength)
	// 	.transition()
	// 	.duration(10000)
	// 	.ease(d3.easeLinear)
	// 	.attr('stroke-dashoffset', 0);
};

const mapUpdate =  () => {
	riverUpdate();
	nodeUpdate();
};

const riverUpdate = () => {
	if (riverLines) riverLines.attr('d', riverPath);
};

const nodeUpdate = () => {
	
	if (nodesPoint) {
		nodesPoint
			.attr('cx', function (d) {
				return mapAPI.project(d.geometry.coordinates).x;
			})
			.attr('cy', function (d) {
				return mapAPI.project(d.geometry.coordinates).y;
			});
	}
};



export default {
	init,
	drawNodes,
	mapUpdate
};