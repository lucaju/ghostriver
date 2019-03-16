import WPAPI from 'wpapi';
import {select} from 'd3/dist/d3.min';

export default function WordpressAPI(_app) {

	const app = _app;

	const leftPanel = select('#left-panel');
	const rightPanel = select('#right-panel');
	
	leftPanel.classed('lower-layer', true);
	this.wp = new WPAPI({
		endpoint: 'http://localhost:8888/ghost-river/wp-json/'
	});

	this.init = function init() {
		leftPanel.classed('lower-layer', true);
	};

}