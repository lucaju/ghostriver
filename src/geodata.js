// import * as d3 from 'd3';
import {select,geoTransform,geoPath,easeLinear} from 'd3/dist/d3.min';
import chroma from 'chroma-js';

import map from './map';
import content from './content';

import config from './config/config.json';
// import river1834 from './data/speculative-river.json';
import historicalRivel from './data/historical.json';


// const internalOption = {
// 	passThrough: true,
// };

const historicalRiverScale = chroma.scale(['violet','indigo','blue','green']).domain([1,7]);

let D3geoPath;
let svg;
// let riverLines;
let dataset;
let nodesPoint;
let nodesLine;
let nodesPoygon;



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

	// drawRiver(river1834.features, 500, 2);

};

const loadData = async () => {
	const dataURL = `https://api.mapbox.com/datasets/v1/${config.mapbox.user}/${config.map.dataset}/features?access_token=${config.mapbox.token}`;
	const response = await fetch(dataURL);
	const data = await response.json();
	dataset = data.features;

	dataset = dataset.concat(historicalRivel.features);
	
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

	return {
		points,
		lines,
		polygons
	};

};

const drawNodeByTag = async ({name: tag}) => {

	const tagNodes = getTagNodes(tag);

	const points = tagNodes.filter(n => n.geometry.type === 'Point');
	const lines = tagNodes.filter(n => n.geometry.type === 'LineString');
	const polygons = tagNodes.filter(n => n.geometry.type === 'Polygon');

	drawPolygins({data:polygons});
	drawLines({data:lines});
	drawPoints({data:points});

	return {
		points,
		lines,
		polygons
	};

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

	if (item.geometry.type == 'Point') return item.geometry.coordinates;
	const coordinates = item.geometry.coordinates[0];
	return coordinates;
};

const drawPoints =  ({data, transitionTime = 5000, delayTime = 200}) => {

	const colours = getColours();
	
	nodesPoint = svg.select('#points-container').selectAll('.circle')
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
		.style('cursor', 'pointer')
		.style('stroke-width', 2)
		.style('stroke', () => {
			return chroma(colours.active.stroke).hex();
		})
		.style('fill', () => {
			return chroma(colours.active.fill).alpha(0.7).hex();
		})
		.attr('cx', function (d) {
			return map.project(d.geometry.coordinates).x;
		})
		.attr('cy', function (d) {
			return map.project(d.geometry.coordinates).y;
		})
		.attr('r', 0)
		.style('opacity', 0.1)
		.on('click', function (d) {
			resetNodesState(d);
			content.showPost(d.properties);
		})
		.on('mouseover', function (d) {
			nodesOver(d);
		})
		.on('mouseout', () => {
			nodesOut();
		});
	
	nodesPoint.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.attr('r', 8)
		.style('opacity', 1);
};

const drawLines =  ({data, transitionTime = 5000, delayTime = 200}) => {

	const colours = getColours();

	nodesLine = svg.select('#lines-container').selectAll('.line')
		.data(data);

	nodesLine.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.attr('stroke-width', 0)
		.remove();

	nodesLine.enter().append('path')
		.attr('class', 'line');

	nodesLine = svg.selectAll('.line')
		.attr('id', function (d) {
			return d.properties.id;
		})
		.attr('d', D3geoPath)
		.style('cursor', 'pointer')
		.style('stroke-width', 0)
		.style('stroke', function (d) {
			if (d.properties.name === 'Saint-Pierre Speculative River') return chroma('#0071bc').hex();
			if (d.properties.type === 'historical') {
				return historicalRiverScale(d.properties.color).alpha(.8).hex();
			}
			return chroma(colours.active.stroke).hex();
		})
		.style('fill', 'none')
		.style('opacity', 0.1)
		.on('click', function (d) {
			const theme = content.getCurrentTheme();
			if (d.properties.name === 'Saint-Pierre Speculative River' && theme.slug !== 'steps') return;
			resetNodesState(d);
			content.showPost(d.properties);
		})
		.on('mouseover', function (d) {
			nodesOver(d);
		})
		.on('mouseout', () => {
			nodesOut();
		});


	nodesLine.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.style('stroke-width', 2)
		.style('opacity', 1);


};

const drawPolygins =  ({data, transitionTime = 5000, delayTime = 200}) => {

	const colours = getColours();

	nodesPoygon = svg.select('#polygons-container').selectAll('.polygons')
		.data(data);

	nodesPoygon.exit()
		.attr('id', 'exit')
		.attr('class', 'exit')
		.transition()
		.duration(500)
		.style('fill', '#000000')
		.attr('stroke-width', 0)
		.remove();

	nodesPoygon.enter().append('path')
		.attr('class', 'polygons');

	nodesPoygon = svg.selectAll('.polygons')
		.attr('id', function (d) {
			return d.properties.id;
		})
		.attr('d', D3geoPath)
		.style('cursor', 'pointer')
		.style('stroke-width', 0)
		.style('stroke', () => {
			return chroma(colours.active.stroke).hex();
		})
		.style('fill', () => {
			return chroma(colours.active.fill).alpha(0.7).hex();
		})
		.style('opacity', 0.1)
		.on('click', function (d) {
			resetNodesState(d);
			content.showPost(d.properties);
		})
		.on('mouseover', function (d) {
			nodesOver(d);
		})
		.on('mouseout', () => {
			nodesOut();
		});


	nodesPoygon.transition()
		.duration(transitionTime)
		.delay(function (d, i) {
			return delayTime * i;
		})
		.style('stroke-width', 2)
		.style('opacity', 1);

};

// const drawRiver = data => {

// 	riverLines = svg.selectAll('#river')
// 		.data(data)
// 		.enter()
// 		.append('path')
// 		.attr('id', 'river')
// 		.attr('d', D3geoPath)
// 		.style('fill','none')
// 		.style('stroke-width', 1)
// 		.style('stroke', '#0071bc')
// 		.style('opacity', 0.8);

// 	// riverLines.transition()
// 	// 	.duration(1000)
// 	// 	.style('stroke-width', 4)
// 	// 	.style('opacity', 0.8);

// 	//graph animation
// 	let lineLength = riverLines.node().getTotalLength();

// 	riverLines
// 		.attr('stroke-dasharray', lineLength + ' ' + lineLength)
// 		.attr('stroke-dashoffset', +lineLength)
// 		.transition()
// 		.duration(8000)
// 		.ease(easeLinear)
// 		.attr('stroke-dashoffset', 0)
// 		.style('stroke-width', 3)
// 		.on('end', () => {
// 			if(!internalOption.passThrough) map.pitchMap({finalPitch:40, duration:2000});
// 		});
// };

const mapUpdate =  () => {
	// riverUpdate();
	nodeUpdate();
};

// const riverUpdate = () => {
// 	if (riverLines) {
// 		riverLines
// 			.attr('d', D3geoPath)
// 			.attr('stroke-dasharray', 'none')
// 			.attr('stroke-dashoffset', 'none');
// 	}
// };

const nodeUpdate = () => {
	
	if (nodesPoint) {
		nodesPoint
			.attr('cx', function (d) {
				return map.project(d.geometry.coordinates).x;
			})
			.attr('cy', function (d) {
				return map.project(d.geometry.coordinates).y;
			});
	}

	if (nodesLine) nodesLine.attr('d', D3geoPath);
	if (nodesPoygon) nodesPoygon.attr('d', D3geoPath);
	
};

const getColours = () => {

	const theme = content.getCurrentTheme();

	if (theme.slug === 'environment') {
		return {
			active: {
				fill: '#FFDE17',
				stroke: '#8B5E3C'
			},
			selected: {
				stroke: '#ffffff'
			}
		};
	}

	if (theme.slug === 'water') {
		return {
			active: {
				fill: '#fefefe',
				stroke: '#652e00'
			},
			selected: {
				stroke: '#ffffff'
			}
		};
	}

	if (theme.slug === 'steps') {
		return {
			active: {
				fill: '#F15A29',
				stroke: '#F15A29'
			},
			selected: {
				stroke: '#58595B'
			}
		};
	}
};

const nodesOver = current => {
	if (nodesPoint) {
		nodesPoint
			.style('opacity', function (d) {
				if (d !== current) return 0.5;
			})
			.style('stroke-width', function (d) {
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
				if (current.properties.color && d.properties.color === current.properties.color) return 3;
				if (d.properties.name === current.properties.name) return 3;
			});
	}

	if (nodesPoygon) {
		nodesPoygon
			.style('opacity', function (d) {
				if (d !== current) return 0.5;
			})
			.style('stroke-width', function (d) {
				if (d === current) return 3;
			});
	}
}; 

const nodesOut = () => {
	if (nodesPoint) {
		nodesPoint
			.style('opacity', 1)
			.style('stroke-width', 2);
	}
	if (nodesLine) {
		nodesLine
			.style('opacity', 1)
			.style('stroke-width', 2);
	}
	if (nodesPoygon) {
		nodesPoygon
			.style('opacity', 1)
			.style('stroke-width', 2);
	}
};

export const resetNodesState = () => {
	if (nodesPoint) {
		nodesPoint.transition()
			.duration(2000)
			.delay(1000)
			.attr('r', 8);
	}

	if (nodesLine) {
		nodesLine.transition()
			.duration(2000)
			.delay(1000)
			.style('stroke-width', 4);
	}

	if (nodesPoygon) {
		nodesPoygon.transition()
			.duration(2000)
			.delay(1000)
			.style('stroke-width', 2);
	}
};

const setCurrentNode = ({id}) => {

	if (nodesPoint) {
		nodesPoint.transition()
			.duration(3000)
			.attr('r', function(d) {
				if (d.properties.id === id) return 16;
				return 8;
			})
			.style('opacity', 1);
	}

	if (nodesLine) {
		nodesLine.transition()
			.duration(3000)
			.style('stroke-width', function(d) {
				if (d.properties.id === id) return 8;
				return 2;
			})
			.style('opacity', 1);
	}

	if (nodesPoygon) {
		nodesPoygon.transition()
			.duration(3000)
			.style('stroke-width', function(d) {
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
	mapUpdate,
	getNodeCoordinates,
	setCurrentNode,
	resetNodesState
};