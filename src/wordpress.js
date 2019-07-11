import WPAPI from 'wpapi';
import {select, selectAll} from 'd3/dist/d3.min';
import mapAPI from './mapAPI.js';
import datavis from './datavis.js';
import config from './config/config.json';

let theme;

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
		name: 'water',
		pageID: 116,
		mapID: 'cjuee51b92imr1fpof8u119ws'
	},
	{
		name: 'steps',
		pageID: 118,
		mapID: 'cjtg0c42v0w5x1fqlf1rmfs76'
	},
	{
		name: 'about',
		pageID: 9,
		mapID: 'cjtg0c42v0w5x1fqlf1rmfs76'
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


	for (const theme of themes) {

		const mainMenuBT = select(`#main-${theme.name}-bt`);
		const topMenuBT = select(`#top-${theme.name}-bt`);
		
		mainMenu[theme.name] = mainMenuBT;
		topMenu[theme.name] = topMenuBT;

		mainMenuBT.on('click', () => showPage(theme));
		topMenuBT.on('click', () => showPage(theme));
	}
};

const getTheme = name => themes.find( theme => theme.name === name );

const changeState = newState => {

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


const showPost = async data => {

	const postData = await wp.posts().id(data.id);
	console.log(postData);

	select('#article-title').select('.fl-heading-text').html(postData.title.rendered);
	select('#article-content').select('.fl-rich-text').html(postData.content.rendered);
	select('.tagline').select('.fl-heading-text').html(theme);

};

const showPage = async ({name, pageID, mapID}) => {

	theme = name;

	changeState('internal');

	const pageData = await wp.pages().id(pageID);
	console.log(pageData);

	select('#article-title').select('.fl-heading-text').html(pageData.title.rendered);
	select('#article-content').select('.fl-rich-text').html(pageData.content.rendered);
	select('.tagline').select('.fl-heading-text').html('');

	mapAPI.changeMap(mapID);
	datavis.drawNodes(theme);

};



export default {
	init,
	showPost,
	showPage
};