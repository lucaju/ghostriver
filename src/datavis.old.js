import * as d3 from 'd3';

import dataset from './features.json';
import river1834 from './1834_A_Jobin_final-2.json';


// APP
export default function Datavis(_app) {

	const app = _app;
	const mapAPI = app.mapAPI;

	this.svg;

	this.margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20
	};

	const transform = d3.geoTransform({point:mapAPI.projectPoint});
	const path = d3.geoPath().projection(transform);

	this.riverLines;
	this.nodes;

	this.init = function init(canvas) {

		// Overlay d3 on the mapbox canvas
		this.svg = d3.select(canvas).append('svg');
		this.svg.attr('id', 'map-box-vis');


		this.svg.attr('height', '100%');

		this.draNodes(dataset.features, 500, 2);
		this.drawRiver(river1834.features, 500, 2);

		console.log('opa')
	};

	this.draNodes = function draNodes(data, transitionTime = 0, delayTime = 0) {

		console.log('go')

		const _this = this;

		this.dataset = data;

		// Add circles
		this.nodes = this.svg.selectAll('.circle')
			.data(data);

		this.nodes.exit()
			.attr('id', 'exit')
			.attr('class', 'exit')
			.transition()
			.duration(500)
			.style('fill', '#000000')
			.attr('r', 0)
			.remove();

		this.nodes.enter().append('circle')
			.attr('class', 'circle');

		this.nodes = this.svg.selectAll('.circle')
			.attr('id', function (d) {
				return `index-${d.postID}`;
			})
			.on('click', function (d) {
				console.log(d.properties.postID);
				app.showDetails(d.properties.postID);
			})
			.on('mouseover', function (d) {
				// _this._mouseOverSelection(d);
				console.log(this);
			})
			.on('mouseout', function (d) {
				// _this._mouseOutSelection(d);
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
				// return app.color(_this.colorCategory(d, app.colorCodeBy));
			})
			.style('stroke', function (d) {
				// return app.color(_this.colorCategory(d, app.colorCodeBy));
			});
			
		this.nodes.transition()
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

	this.drawRiver = function drawData(data, transitionTime = 0, delayTime = 0) {

		this.riverLines = this.svg.selectAll('path')
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

			})
			.on('mouseout', function () {
				
			});

		//graph animation
		let lineLength = this.riverLines.node().getTotalLength();
		this.riverLines
			.attr('stroke-dasharray', lineLength + ' ' + lineLength)
			.attr('stroke-dashoffset', +lineLength)
			.transition()
			.duration(10000)
			.ease(d3.easeLinear)
			.attr('stroke-dashoffset', 0);
	};

	this.mapUpdate = function mapUpdate() {
		this.riverUpdate();
	};

	this.nodeUpdate = function nodeUpdate() {
		this.riverLines.attr('d', path);
	};

	this.riverUpdate = function riverUpdate() {
		this.riverLines.attr('d', path);
		
		this.nodes
			.attr('cx', function (d) {
				return mapAPI.project(d.geometry.coordinates).x;
			})
			.attr('cy', function (d) {
				return mapAPI.project(d.geometry.coordinates).y;
			});
	};

}