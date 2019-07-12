import WPAPI from 'wpapi';
import {select, selectAll} from 'd3/dist/d3.min';
import mapAPI from './mapAPI.js';
import datavis from './datavis.js';
import config from './config/config.json';

let theme = 'home';

const mainMenu = {};
const topMenu = {};

const wp = new WPAPI({ endpoint: config.wordpress.remote.endpoint });

const themes = [
	{
		name: 'environment',
		pageID: 114,
		mapID: 'cjtf3qpso03kh1fkvzo8dd4xk'
	},
	{
		name: 'steps',
		pageID: 118,
		mapID: 'cjtg0c42v0w5x1fqlf1rmfs76'
	},
	{
		name: 'water',
		pageID: 116,
		mapID: 'cjuee51b92imr1fpof8u119ws'
	},
	{
		name: 'about',
		pageID: 56,
		mapID: 'cjtg0c42v0w5x1fqlf1rmfs76'
	},
	{
		name: 'home',
		pageID: 0,
		mapID: 'cjxzbs7nf0a4b1cowp80tsndy'
	},
];



const init = () => {
	
	// leftPanel.classed('lower-layer', true);

	// let panel = select('#left-panel');
	// panel.classed('hide', false);
	// console.log(panel.attr('id'));
	// console.log(panel.classed('hide'));

	// const leftPanel = select('#left-panel');
	// const rightPanel = select('#right-panel');

	// const homeTitle = select('#home-title')
	// 	.style('opacity', 0)
	// 	.style('display', 'block')
	// 	.transition()
	// 	.delay(1000)
	// 	.duration(3000)
	// 	.style('opacity', 1);

	// console.log(homeTitle);

	select('#home-text')
		.style('opacity', 0)
		.style('display', 'block')
		.transition()
		.delay(3000)
		.duration(3000)
		.style('opacity', 1);

	let delay = 8000;
	for (const theme of themes) {

		const mainMenuBT = select(`#main-${theme.name}-bt`);
		const topMenuBT = select(`#top-${theme.name}-bt`);
		
		mainMenu[theme.name] = mainMenuBT;
		topMenu[theme.name] = topMenuBT;

		mainMenuBT.on('click', () => showPage(theme));
		topMenuBT.on('click', () => showPage(theme));

		mainMenuBT.style('opacity', 0)
			.style('display', 'block')
			.transition()
			.delay(delay)
			.duration(3000)
			.style('opacity', 1);

		delay += 1000;
	}
	
};

// const getTheme = name => themes.find( theme => theme.name === name );

const changeState = newState => {
	if (newState == 'home') {
		hideTopMenu();
		hidePanel({direction:'up'});
		showHome();
	} else if (newState == 'internal') {
		hideHome();
		showTopMenu();
	}
};

const showHome = () => {
	select('#header-col')
		.style('display', 'block')
		.transition()
		.delay(1000)
		.duration(3000)
		.style('opacity', 1)
		.style('margin-top', '0px');

	selectAll('.col-main-menu')
		.style('opacity', 0)
		.style('display', 'block')
		.transition()
		.delay(1000)
		.duration(3000)
		.style('opacity', 1)
		.style('margin-top', '0px');

}

const hideHome = () => {
	select('#header-col')
		.transition()
		.duration(3000)
		.style('opacity', 0)
		.style('margin-top', '-500px')
		.on('end', function() {
			select(this).style('display', 'none');
		});

	selectAll('.col-main-menu')
		.transition()
		.duration(3000)
		.style('opacity', 0)
		.style('margin-top', '-200px')
		.on('end', function() {
			select(this).style('display', 'none');
		});
};

const showTopMenu = () => {
	select('#top-menu')
		.style('opacity',0)
		.style('top', -200)
		.style('display', 'block')
		.transition()
		.delay(3000)
		.duration(2000)
		.style('opacity', 1)
		.style('top', 0);
};

const hideTopMenu = () => {
	select('#top-menu')
		.transition()
		.delay(0)
		.duration(2000)
		.style('opacity', 0)
		.style('top', -200)
		.on('end', function() {
			select(this).style('display', 'none');
		});
};

const showPanel = ({direction = 'none', delay = 0}) => {

	if (direction == 'none') {
		direction = '0px';
	} else if (direction == 'up') {
		direction = '-2000px';
	} else if (direction == 'down') {
		direction = '2000px';
	}

	select('#left-panel')
		.style('opacity',0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(2000)
		.style('opacity', 1)
		.style('margin-top','0px');

	select('#right-panel')
		.style('opacity',0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(2000)
		.style('opacity', 1)
		.style('margin-top','0px');
};

const hidePanel = async ({direction = 'none'}) => {

	if (direction == 'none') {
		direction = '0px';
	} else if (direction == 'up') {
		direction = '-2000px';
	} else if (direction == 'down') {
		direction = '2000px';
	}

	return new Promise(resolve => {

		select('#left-panel')
			.transition()
			.delay(0)
			.duration(2000)
			.style('opacity', 0)
			.style('margin-top',direction)
			.on('end', function() {
				select(this).style('display', 'none');
				resolve();
			});

		select('#right-panel')
			.transition()
			.delay(0)
			.duration(2000)
			.style('opacity', 0)
			.style('margin-top',direction)
			.on('end', function() {
				select(this).style('display', 'none');
			});
	});
};


const showPost = async ({id}) => {

	await hidePanel({direction:'up'});

	const postData = await wp.posts().id(id);
	console.log(postData);
	
	select('#article-title').select('.fl-heading-text').html(postData.title.rendered);
	select('#article-content').select('.fl-rich-text').html(postData.content.rendered);
	select('.tagline').select('.fl-heading-text').html(theme);

	showPanel({direction:'down', delay: 0});

};

// const loadPostData = (postData) => {
// 	console.log(postData)
// 	select('#article-title').select('.fl-heading-text').html(postData.title.rendered);
// 	select('#article-content').select('.fl-rich-text').html(postData.content.rendered);
// 	select('.tagline').select('.fl-heading-text').html(theme);

// 	showPanel();
// };

const showPage = async ({name, pageID, mapID}) => {

	if (theme === 'home') {
		changeState('internal');
	} else if (name === 'home') {
		theme = name;
		changeState('home');
		return;
	}

	theme = name;

	if (name != 'about') mapAPI.changeMap(mapID);

	await hidePanel({direction:'up'});

	datavis.drawNodes(theme);

	const pageData = await wp.pages().id(pageID);
	console.log(pageData);

	select('#article-title').select('.fl-heading-text').html(pageData.title.rendered);
	select('#article-content').select('.fl-rich-text').html(pageData.content.rendered);
	select('.tagline').select('.fl-heading-text').html('');

	showPanel({direction:'down', delay: 0});
};



export default {
	init,
	showPost,
	showPage
};