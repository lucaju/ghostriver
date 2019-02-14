// import * as d3 from 'd3';
import {select} from 'd3-selection/dist/d3-selection.min.js';
import postMustache from './post.html';


export default function post() {


	this.init = function init() {

		// const _this = this;

		const pageData = {};

		select('#app').append('div').attr('id', 'post');
		const html = postMustache(pageData);
		select('#post').html(html);

	};

}