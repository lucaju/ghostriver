import WPAPI from 'wpapi';
import {select, selectAll} from 'd3/dist/d3.min';

export default function WordpressAPI(_app) {

	const app = _app;
	
	// const leftPanel = select('#left-panel');
	// const rightPanel = select('#right-panel');

	const mainMenu = {
		environmentBT: select('#main-environment-bt'),
		waterBT: select('#main-water-bt'),
		journeyBT: select('#main-journey-bt')
	};

	const topMenu = {
		environmentBT: select('#top-environment-bt'),
		waterBT: select('#top-water-bt'),
		journeyBT: select('#top-journey-bt'),
		aboutBT: select('#top-about-bt'),
	};
	
	// leftPanel.classed('lower-layer', true);
	this.wp = new WPAPI({
		endpoint: 'http://localhost:8888/ghost-river/wp-json/'
		// http://labs.fluxo.art.br/ghost-river/
		// endpoint: 'http://labs.fluxo.art.br/ghost-river/wp-json/'
	});

	// this.init = () => {
	// 	// leftPanel.classed('lower-layer', true);
	// };

	//main menu
	mainMenu.environmentBT.on('click', () => {
		changeState('internal');
		this.showPost('page',114);
	});

	mainMenu.waterBT.on('click', () => {
		changeState('internal');
		this.showPost('page',116);
	});

	mainMenu.journeyBT.on('click', () => {
		changeState('internal');
		this.showPost('page',118);
	});

	topMenu.environmentBT.on('click', () => {
		this.showPost('page',114);
	});

	topMenu.waterBT.on('click', () => {
		this.showPost('page',116);
	});

	topMenu.journeyBT.on('click', () => {
		this.showPost('page',118);
	});

	const changeState = (newState) => {

		if (newState == 'home') {
			console.log('go to home');
		} else if (newState == 'internal') {
			hideHome();
			showTopMenu();
			showLeftPanel();
		}
	};

	const hideHome = () => {
		select('#header-col')
			.transition()
			.duration(3000)
			.style('opacity', 0)
			.style('margin-top', '-500px');

		select('#header-col')
			.transition()
			.delay(3000)
			.duration(10)
			.style('display', 'none');

		selectAll('.col-main-menu')
			.transition()
			.duration(3000)
			.style('opacity', 0.5)
			.style('margin-top', '-200px');

		selectAll('.col-main-menu')
			.transition()
			.delay(3000)
			.duration(10)
			.style('display', 'none');

	};

	const showTopMenu = () => {
		const topMenu = select('#top-menu');
		topMenu.style('opacity',0)
			.style('top', -200)
			.style('display', 'block')
			.transition()
			.delay(3000)
			.duration(2000)
			.style('opacity', 1)
			.style('top', 0);
		
	};

	const showLeftPanel = () => {
		select('#left-panel')
			.style('opacity',0)
			.style('margin-top', '2000px')
			.style('display', 'block')
			.transition()
			.delay(3000)
			.duration(2000)
			.style('opacity', 1)
			.style('margin-top','0px');

		select('#right-panel')
			.style('opacity',0)
			.style('margin-top', '2000px')
			.style('display', 'block')
			.transition()
			.delay(3000)
			.duration(2000)
			.style('opacity', 1)
			.style('margin-top','0px');
		
	};


	this.showPost = (type, postID) => {
		console.log(postID);

		if (type == 'page') {
		
			this.wp.pages().id(postID)
				.then(function (data) {
					update(data);
					// console.log(data);

					// select('#article-title').select('.fl-heading-text').html(data.title.rendered);
					// select('#article-content').select('.fl-rich-text').html(data.content.rendered);
				});

		} else {

			this.wp.posts().id(postID)
				.then(function (data) {
					update(data);
					// console.log(data);

					// select('#article-title').select('.fl-heading-text').html(data.title.rendered);
					// select('#article-content').select('.fl-rich-text').html(data.content.rendered);
				});
		}

		function update(data) {
			console.log(data);

			select('#article-title').select('.fl-heading-text').html(data.title.rendered);
			select('#article-content').select('.fl-rich-text').html(data.content.rendered);
		}
	};

}