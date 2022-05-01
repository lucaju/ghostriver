import chroma from 'chroma-js';
import {select} from 'd3-selection';
import {geoTransform, geoPath} from 'd3-geo';
import {transition} from 'd3-transition';

import content from './content';
import map from './map';

import config from './config/config.json';
import historicalRiver from './data/historical-river.json';


const historicalRiverScale = chroma.scale(['indigo','blue','green']).domain([1,7]);

let D3geoPath;
let svg;
let dataset;
let nodesPoint;
let nodesLine;
let nodesPoygon;

let currentNodeOver;


const init = async canvas => {

	const D3geoTransform = geoTransform({point:map.projectPoint});
	D3geoPath = geoPath().projection(D3geoTransform);

	// Overlay d3 on the mapbox canvas
	svg = select(canvas).append('svg')
		.attr('id', 'map-box-vis')
		.attr('height', '100%');


	svg.append('g').attr('id', 'polygons-container');
	svg.append('g').attr('id', 'lines-container');
	svg.append('g').attr('id', 'points-container');

};

const loadData = async () => {

	const dataURL = `https://api.mapbox.com/datasets/v1/${config.mapbox.user}/${config.map.dataset}/features?access_token=${config.mapbox.token}`;
	const response = await fetch(dataURL);
	const data = await response.json();
	dataset = data.features;

	dataset = dataset.concat(historicalRiver.features);

	///load titles
	content.getPostsTitle();
	
	return dataset;
};

const drawNodes = async ({slug: theme}) => {

	if (!dataset) await loadData();

	const themeNodes = getThemeNodes(theme);

	const points = themeNodes.filter(n => n.geometry.type === 'Point');
	const lines = themeNodes.filter(n => n.geometry.type === 'LineString');
	const polygons = themeNodes.filter(n => n.geometry.type === 'Polygon');

	drawPolygins({data:polygons});
	drawLines({data:lines});
	drawPoints({data:points});

};

const drawNodeByTag = async ({name: tag}) => {

	const tagNodes = getTagNodes(tag);

	const points = tagNodes.filter(n => n.geometry.type === 'Point');
	const lines = tagNodes.filter(n => n.geometry.type === 'LineString');
	const polygons = tagNodes.filter(n => n.geometry.type === 'Polygon');

	drawPolygins({data:polygons});
	drawLines({data:lines});
	drawPoints({data:points});

};

const getThemeNodes = theme => {

	const selectedNodes = dataset.filter( node => {
		if(node.properties.theme) {
			const nodethemes = node.properties.theme.split(', ');
			const themeNode = nodethemes.filter(t => t.toLowerCase() === theme);
			if (themeNode.length > 0) return node;
		}
	});

	return selectedNodes;
};

const getTagNodes = tag => {

	const selectedNodes = dataset.filter( node => {
		if (node.properties.tag) {
			const nodeTags = node.properties.tag.split(', ');
			const tagNode = nodeTags.filter(t => t.toLowerCase() === tag.toLowerCase());
			if (tagNode.length > 0) return node;
		}
	});

	return selectedNodes;
};

const getNodeCoordinates = async ({id}) => {

	if (!dataset) await loadData();
	const item = dataset.find( item => item.properties.id === id );

	if (!item) return config.map.default.center; // return center of map

	if (item.geometry.type === 'Point') return item.geometry.coordinates;
	if (item.geometry.type === 'LineString') return item.geometry.coordinates[0];
	if (item.geometry.type === 'Polygon') return item.geometry.coordinates[0][0];

	return false;
};

const getColours = () => {

	const theme = content.getCurrentTheme();

	const colors = {
		river: '#0071bc'
	};

	if (theme.slug === 'environment') {
		colors.fill = '#FFDE17';
		colors.stroke = '#8B5E3C';
		colors.text = '#333';
	} else if (theme.slug === 'water') {
		colors.fill = '#fefefe';
		colors.stroke = '#652e00';
		colors.text = '#333';
	} else if (theme.slug === 'steps') {
		colors.fill = '#F15A29';
		colors.stroke = '#F15A29';
		colors.text = '#FFF';
	}

	return colors;
};

const drawPoints =  ({data, transitionTime = 1000, delayTime = 200}) => {

	const colours = getColours();
	
	nodesPoint = svg.select('#points-container').selectAll('.circle')
		.data(data);

	nodesPoint.exit()
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.attr('r', 0)
		.remove();

	nodesPoint.enter().append('circle')
		.attr('class', 'circle');

	nodesPoint = svg.selectAll('.circle')
		.attr('id', d => `index-${d.properties.id}`)
		.attr('cx', d => map.project(d.geometry.coordinates).x)
		.attr('cy', d => map.project(d.geometry.coordinates).y)
		.attr('r', 0)
		.style('cursor', 'pointer')
		.style('stroke-width', 2)
		.style('stroke', chroma(colours.stroke).hex())
		.style('fill', chroma(colours.fill).alpha(0.7).hex())
		.style('opacity', 0)
		.on('mouseover', d => nodesOver(d))
		.on('mouseout', () => nodesOut())
		.on('click', d => {
			resetNodesState(d);
			content.showPost(d.properties);
		});
		
	
	nodesPoint.transition()
		.duration(transitionTime)
		.delay((d, i) => delayTime * i)
		.attr('r', 8)
		.style('opacity', 1);

};

const drawLines =  ({data, transitionTime = 1000, delayTime = 200}) => {

	const colours = getColours();

	nodesLine = svg.select('#lines-container').selectAll('.line')
		.data(data);

	nodesLine.exit()
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.attr('stroke-width', 0)
		.remove();

	nodesLine.enter().append('path')
		.attr('class', 'line');

	nodesLine = svg.selectAll('.line')
		.attr('id', d => d.properties.id)
		.attr('d', D3geoPath)
		.style('cursor', 'pointer')
		.style('stroke-width', 2)
		.style('stroke', d => {
			if (d.properties.name === 'Saint-Pierre Speculative River') return chroma(colours.river).hex();
			if (d.properties.type === 'historical') return historicalRiverScale(d.properties.color).alpha(.8).hex();
			return chroma(colours.stroke).hex();
		})
		.style('fill', 'none')
		.style('opacity', 0)
		.on('mouseover', d => nodesOver(d))
		.on('mouseout', () => nodesOut())
		.on('click', d => {
			const theme = content.getCurrentTheme();
			if (d.properties.name === 'Saint-Pierre Speculative River' && theme.slug !== 'steps') return;
			resetNodesState(d);
			content.showPost(d.properties);
		});

	nodesLine.transition()
		.duration(transitionTime)
		.delay((d, i) => delayTime * i)
		.style('opacity', 1);

};

const drawPolygins =  ({data, transitionTime = 1000, delayTime = 200}) => {

	const colours = getColours();

	nodesPoygon = svg.select('#polygons-container').selectAll('.polygons')
		.data(data);

	nodesPoygon.exit()
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.attr('stroke-width', 0)
		.style('opacity', 0)
		.remove();

	nodesPoygon.enter().append('path')
		.attr('class', 'polygons');

	nodesPoygon = svg.selectAll('.polygons')
		.attr('id', d => d.properties.id)
		.attr('d', D3geoPath)
		.style('cursor', 'pointer')
		.style('stroke-width', 2)
		.style('stroke', chroma(colours.stroke).hex())
		.style('fill', chroma(colours.fill).alpha(0.7).hex())
		.style('opacity', 0)
		.on('mouseover', d => nodesOver(d))
		.on('mouseout', () => nodesOut())
		.on('click', d => {
			resetNodesState(d);
			content.showPost(d.properties);
		});

	nodesPoygon.transition()
		.duration(transitionTime)
		.delay((d, i) => delayTime * i)
		.style('opacity', 1);

};

const nodesUpdate = () => {
	
	if (nodesPoint) {
		nodesPoint.attr('cx', d => map.project(d.geometry.coordinates).x)
			.attr('cy', d => map.project(d.geometry.coordinates).y);
	}

	if (nodesLine) nodesLine.attr('d', D3geoPath);
	if (nodesPoygon) nodesPoygon.attr('d', D3geoPath);
	
};

const callTooltip = async d => {

	let title = content.getTitleById(d.properties.id);
	if (!title) title = '...';

	const colours = getColours();

	let position;

	if (d.geometry.type === 'Point') position = d.geometry.coordinates;
	if (d.geometry.type === 'LineString') position = d.geometry.coordinates[0];
	if (d.geometry.type === 'Polygon') position = d.geometry.coordinates[0][0];

	const posX = map.project(position).x;
	const posY = map.project(position).y;

	const margins = 10;
	const yOffset = 25;

	const tooltip = svg.append('g')
		.attr('class','tooltip')
		.attr('transform', `translate(${posX},${posY})`);

	const rect = tooltip.append('rect')
		.style('stroke', () => chroma(colours.stroke).hex())
		.style('fill', () => chroma(colours.fill).alpha(0.7).hex());
		
	tooltip.append('text')
		.attr('y',-yOffset)
		.style('text-anchor','middle')
		.style('fill', chroma(colours.text).hex())
		.text(title);
		
	
	const tooltipSize = tooltip.node().getBBox();

	const ttPosition = {
		x: (-tooltipSize.width / 2) - margins,
		y: -tooltipSize.height - yOffset,
		width: tooltipSize.width + (2*margins),
		height: tooltipSize.height + (margins)
	};

	rect.attr('x', ttPosition.x)
		.attr('y',  ttPosition.y)
		.attr('width',  ttPosition.width)
		.attr('height',  ttPosition.height);
};

const nodesOver = current => {

	callTooltip(current);

	if (nodesPoint) {
		nodesPoint
			.style('opacity', d => {
				if (d !== current) return 0.5;
			})
			.style('stroke-width', d => {
				if (d === current) return 3;
			});

	}

	if (nodesLine) {
		nodesLine
			.style('opacity', d => {
				if (current.properties.color && d.properties.color === current.properties.color) return;
				if (d.properties.name !== current.properties.name) return 0.5;
			})
			.style('stroke-width', d => {
				if (current.properties.color && d.properties.color === current.properties.color) return 5;
				if (d.properties.name === current.properties.name) return 5;
			});
	}

	if (nodesPoygon) {
		nodesPoygon
			.style('opacity', d => {
				if (d !== current) return 0.5;
			})
			.style('stroke-width', d => {
				if (d === current) return 3;
			});
	}

}; 

const nodesOut = () => {

	svg.select('.tooltip').remove();

	if (nodesPoint) {
		nodesPoint.style('opacity', 1)
			.style('stroke-width', 2);
	}
	if (nodesLine) {
		nodesLine.style('opacity', 1)
			.style('stroke-width', 2);
	}
	if (nodesPoygon) {
		nodesPoygon.style('opacity', 1)
			.style('stroke-width', 2);
	}

};

export const resetNodesState = ({transitionTime = 2000, delayTime = 100}) => {

	if (nodesPoint) {
		nodesPoint.transition()
			.duration(transitionTime)
			.delay(delayTime)
			.attr('r', 8);
	}

	if (nodesLine) {
		nodesLine.transition()
			.duration(transitionTime)
			.delay(delayTime)
			.style('stroke-width', 4);
	}

	if (nodesPoygon) {
		nodesPoygon.transition()
			.duration(transitionTime)
			.delay(delayTime)
			.style('stroke-width', 2);
	}

};

const setCurrentNode = ({id}) => {

	if (nodesPoint) {
		nodesPoint.transition()
			.duration(3000)
			.attr('r', d => {
				if (d.properties.id === id) return 16;
				return 8;
			})
			.style('opacity', 1);
	}

	if (nodesLine) {
		nodesLine.transition()
			.duration(3000)
			.style('stroke-width', d => {
				if (d.properties.id === id) return 8;
				return 2;
			})
			.style('opacity', 1);
	}

	if (nodesPoygon) {
		nodesPoygon.transition()
			.duration(3000)
			.style('stroke-width', d => {
				if (d.properties.id === id) return 8;
				return 2;
			})
			.style('opacity', 1);
	}
	
};


export default {
	init,
	drawNodes,
	drawNodeByTag,
	nodesUpdate,
	getNodeCoordinates,
	setCurrentNode,
	resetNodesState
};