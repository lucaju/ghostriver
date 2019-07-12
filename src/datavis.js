import * as d3 from 'd3';
import mapAPI from './mapAPI.js';
import wpAPI from './wordpress.js';

import nodesDataset from './data/features.json';
import river1834 from './data/1834_A_Jobin_final-2.json';

let geoTransform;
let geoPath;
let svg;
let riverLines;
let dataset = [];
let nodesPoint;
let nodesLine;
let nodesPoygon;

const init = canvas => {

	geoTransform = d3.geoTransform({point:mapAPI.projectPoint});
	geoPath = d3.geoPath().projection(geoTransform);

	dataset = nodesDataset.features;

	// Overlay d3 on the mapbox canvas
	svg = d3.select(canvas).append('svg');
	svg.attr('id', 'map-box-vis');

	svg.attr('height', '100%');

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

	drawPoints({data:points});
	drawLines({data:lines});
	drawPolygins({data:polygons});

};

const drawPoints =  ({data, transitionTime = 5000, delayTime = 1000}) => {

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
		})
		.style('stroke', function (d) {
			// console.log(d);=
		});
		
	nodesPoint.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.attr('r', 8)
		.style('opacity', 0.8);
};

const drawLines =  ({data, transitionTime = 5000, delayTime = 1000}) => {

	// Add circles
	nodesLine = svg.selectAll('.line')
		.data(data);

	nodesLine.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.style('fill', '#000000')
		.attr('width', 0)
		.remove();

	nodesLine.enter().append('path')
		.attr('class', 'line');

	nodesLine = svg.selectAll('.line')
		.attr('id', function (d) {
			return d.properties.id;
		})
		.attr('d', geoPath)
		.on('mouseover', function (d) {
			// console.log(d);
		})
		.on('mouseout', function (d) {
			// console.log(d);
		})
		.on('click', function (d) {
			wpAPI.showPost(d.properties);
		})
		.style('cursor', 'pointer')
		.style('fill','none')
		.style('stroke-width', 0)
		.style('stroke', '#FF8C00')
		.style('opacity', 0.1);


	nodesLine.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.style('stroke-width', 2)
		.style('opacity', 0.8);


};

const drawPolygins =  ({data, transitionTime = 5000, delayTime = 1000}) => {

	// Add circles
	nodesPoygon = svg.selectAll('.polygons')
		.data(data);

	nodesPoygon.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.style('fill', '#000000')
		.attr('width', 0)
		.remove();

	nodesPoygon.enter().append('path')
		.attr('class', 'polygons');

	nodesPoygon = svg.selectAll('.polygons')
		.attr('id', function (d) {
			return d.properties.id;
		})
		.attr('d', geoPath)
		.on('mouseover', function (d) {
			// console.log(d);
		})
		.on('mouseout', function (d) {
			// console.log(d);
		})
		.on('click', function (d) {
			wpAPI.showPost(d.properties);
		})
		.style('cursor', 'pointer')
		.style('fill','#FFA500')
		.style('stroke-width', 0)
		.style('stroke', '#FF8C00')
		.style('opacity', 0.1);


	nodesPoygon.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.style('stroke-width', 2)
		.style('opacity', 0.8);

};

const drawRiver = data => {

	riverLines = svg.selectAll('#river')
		// .data(data.features)
		.data(data)
		.enter()
		.append('path')
		.attr('id', 'river')
		.attr('d', geoPath)
		.style('fill','none')
		.style('stroke-width', 1)
		.style('stroke', '#0071bc')
		.style('opacity', 0.8);

	// riverLines.transition()
	// 	.duration(1000)
	// 	.style('stroke-width', 4)
	// 	.style('opacity', 0.8);

	//graph animation
	let lineLength = riverLines.node().getTotalLength();

	riverLines
		.attr('stroke-dasharray', lineLength + ' ' + lineLength)
		.attr('stroke-dashoffset', +lineLength)
		.transition()
		.duration(8000)
		.ease(d3.easeLinear)
		.attr('stroke-dashoffset', 0)
		.style('stroke-width', 3)
		.on('end', () => mapAPI.pitchMap({finalPitch:40, duration:20}) );
};

const mapUpdate =  () => {
	riverUpdate();
	nodeUpdate();
};

const riverUpdate = () => {
	if (riverLines) {
		riverLines
			.attr('d', geoPath)
			.attr('stroke-dasharray', 'none')
			.attr('stroke-dashoffset', 'none');
	}
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

	if (nodesLine) nodesLine.attr('d', geoPath);
	if (nodesPoygon) nodesPoygon.attr('d', geoPath);
	
};



export default {
	init,
	drawNodes,
	mapUpdate
};