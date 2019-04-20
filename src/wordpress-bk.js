import WPAPI from 'wpapi';
import {select} from 'd3/dist/d3.min';

export default function WordpressAPI(_app) {

	const app = _app;

	const leftPanel = select('#left-panel');
	const rightPanel = select('#right-panel');
	
	// leftPanel.classed('lower-layer', true);
	this.wp = new WPAPI({
		// endpoint: 'http://localhost:8888/ghost-river/wp-json/'
		// http://labs.fluxo.art.br/ghost-river/
		endpoint: 'http://labs.fluxo.art.br/ghost-river/wp-json/'
	});

	this.init = function init() {
		// leftPanel.classed('lower-layer', true);
	};

	this.showPost = function showPost(postID) {
		console.log(postID);
		this.wp.posts().id(postID)
			.then(function (data) {
				console.log(data);

				select('#article-title').select('.fl-heading-text').html(data.title.rendered);
				select('#article-content').select('.fl-rich-text').html(data.content.rendered);
			});
	}

}