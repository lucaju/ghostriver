import * as d3 from 'd3';
import postMustache from './post.html';


export default function post() {


	this.init = function init() {

		const _this = this;

		const pageData = {};

		d3.select('#app').append('div').attr('id', 'post');
		const html = postMustache(pageData);
		d3.select('#post').html(html);

	};

}