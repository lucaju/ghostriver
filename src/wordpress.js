import WPAPI from 'wpapi';
import {select, selectAll, event} from 'd3/dist/d3.min';
import mapAPI from './mapAPI.js';
import datavis from './datavis.js';
import config from './config/config.json';

const wp = new WPAPI({
	endpoint: config.wordpress.remote.endpoint
});

const internalOption = {
	animation: {
		duration: {
			in: 3000,
			out: 2000
		}
	},
	mainMenu: false,
	topMenu: false,
};

const themes = [
	{
		id: 0,
		slug: 'home',
		mapID: 'cjxzbs7nf0a4b1cowp80tsndy',
		state: 'home'
	},
	{
		id: 56,
		slug: 'about',
		mapID: 'cjybs9tuv1gnl1clpln0s5vq9',
		state: 'page'
	},
	{
		id: 114,
		slug: 'environment',
		mapID: 'cjtf3qpso03kh1fkvzo8dd4xk',
		state: 'page'
	},
	{
		id: 118,
		slug: 'steps',
		mapID: 'cjtg0c42v0w5x1fqlf1rmfs76',
		state: 'page'
	},
	{
		id: 116,
		slug: 'water',
		mapID: 'cjuee51b92imr1fpof8u119ws',
		state: 'page'
	}
];

let theme = themes[0];

const getThemeBySlug = slug => themes.find( theme => theme.slug === slug );

const initHome = ({notFound}) => {

	select('#home-text')
		.style('opacity', 0)
		.style('display', 'block')
		.transition()
		.delay(0) //3000
		.duration(0)
		// .duration(internalOption.animation.duration.in)
		.style('opacity', 1);

	let delay = 0; //8000
	
	for (const theme of themes) {

		select(`#main-${theme.slug}-bt`)
			.style('opacity', 0)
			.style('display', 'block')
			.transition()
			.delay(delay)
			.duration(internalOption.animation.duration.in)
			.style('opacity', 1);

		delay += 1000;
	}

	configMainMenu();
	updateMap({notFound});
};

const configMainMenu = () => {
	if (internalOption.mainMenu == false) {
		for (const theme of themes) {
			select(`#main-${theme.slug}-bt`)
				.on('click', () => showPage(theme));
		}
		internalOption.mainMenu = true;
	}
};

const configTopMenu = () => {
	if (internalOption.topMenu == false) {
		for (const theme of themes) {
			select(`#top-${theme.slug}-bt`)
				.on('click', () => showPage(theme))
				.style('cursor', 'pointer'); 
		}
		internalOption.topMenu = true;
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

	select('#home-text')
		.style('display', 'block')
		.style('opacity', 1);

	for (const theme of themes) {
		select(`#main-${theme.slug}-bt`)
			.style('display', 'block')
			.style('opacity', 1);
	}

	configMainMenu();
};

const hideHome = () => {
	select('#header-col')
		.transition()
		.duration(3000)
		.style('opacity', 0)
		.style('margin-top', '-500px')
		.on('end', function () {
			select(this).style('display', 'none');
		});

	selectAll('.col-main-menu')
		.transition()
		.duration(3000)
		.style('opacity', 0)
		.style('margin-top', '-200px')
		.on('end', function () {
			select(this).style('display', 'none');
		});
};

const showTopMenu = () => {
	select('#top-menu')
		.style('opacity', 0)
		.style('top', -200)
		.style('display', 'block')
		.transition()
		.delay(3000)
		.duration(2000)
		.style('opacity', 1)
		.style('top', 0);

	configTopMenu();
};

const hideTopMenu = () => {
	select('#top-menu')
		.transition()
		.delay(0)
		.duration(2000)
		.style('opacity', 0)
		.style('top', -200)
		.on('end', function () {
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
		.style('opacity', 0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(internalOption.animation.duration.in)
		.style('opacity', 0)
		.style('margin-top', '0px');

	select('#middle-panel')
		.style('opacity', 0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(internalOption.animation.duration.in)
		.style('opacity', 0)
		.style('margin-top', '0px');

	select('#right-panel')
		.style('opacity', 0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(internalOption.animation.duration.in)
		.style('opacity', 1)
		.style('margin-top', '0px');

	select('#right-panel').select('.fl-col-content').property('scrollTop', 0);
};

const hidePanel = async ({direction = 'none'}) => {

	return new Promise(resolve => {

		if (direction == 'none') {
			direction = '0px';
		} else if (direction == 'up') {
			direction = '-2000px';
		} else if (direction == 'down') {
			direction = '2000px';
		}

	
		select('#left-panel')
			.transition()
			.delay(0)
			.duration(internalOption.animation.duration.out)
			.style('opacity', 0)
			.style('margin-top', direction)
			.on('end', function () {
				select(this).style('display', 'none');
			});

		select('#middle-panel')
			.transition()
			.delay(0)
			.duration(internalOption.animation.duration.out)
			.style('opacity', 0)
			.style('margin-top', direction)
			.on('end', function () {
				select(this).style('display', 'none');
			});

		select('#right-panel')
			.transition()
			.delay(0)
			.duration(internalOption.animation.duration.out)
			.style('opacity', 0)
			.style('margin-top', direction)
			.on('end', function () {
				select(this).style('display', 'none');
				resolve();
			});
	});
};


const showPost = async ({id, slug}) => {

	//postData - load by ID or by Slug
	const postData = await loadPost({id,slug});
	// console.log(postData);
	if (!postData) return;

	const postCategories = postData._embedded['wp:term'][0];
	const postTags = postData._embedded['wp:term'][1];

	// const postTheme = postCategories[0].slug;
	let postTheme = postCategories.find(cat => cat.slug == theme.slug);

	if (!postTheme) postTheme = postCategories[0];
	
	if(postTheme.slug == 'uncategorized') console.log('Problem with category "uncategorized": ', postData);

	setTheme(postTheme.slug);
	if (theme.isNew) updateMap(theme);
	
	await hidePanel({direction: 'up'});

	updatePost(postData,postTags);

	//show Panel
	showPanel({direction: 'down', delay: 0});

	changeBrowserHistory({
		title: postData.title.rendered,
		slug: postData.slug
	});

	return {
		post: postData,
		theme: postTheme
	};

};

const loadPost = async ({id, slug}) => {

	let postData;

	if (id) {
		postData = await wp.posts().id(id).embed();
	} else if (slug) {
		postData = await wp.posts().slug(slug).embed();
		postData = postData[0];
	}

	return postData;
};

const updatePost = ({title, content}, tags) => {
	//DOM manipulation
	const panel = select('#right-panel');

	panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
	panel.select('#article-content').select('.fl-rich-text').html(content.rendered);
	panel.select('.tagline').select('.fl-heading-text').html(theme.slug);

	//tags
	const tagsDIV = panel.select('#article-tags').select('.fl-html');
	let tagsHTML = '<div id="tag-container">';
	for (const tag of tags) {
		tagsHTML += `<div id="tag-${tag.slug}" class="tag-pill">${tag.name}</div>`;
	}
	tagsHTML += '</div>';

	tagsDIV.html(tagsHTML);

	captureLinks();
};

const showPage = async ({id, slug}) => {

	await setTheme(slug);

	if (theme.isNew) updateMap(theme);

	if (id == 0) {
		changeBrowserHistory({slug: '/ghost-river/'});
		return;
	}
		
	const pageData = await loadPage({id, slug});
	// console.log(pageData);
	
	updatePage(pageData);
	
	//show panel
	showPanel({direction: 'down', delay: 0});

	changeBrowserHistory({
		title: pageData.title.rendered,
		slug: pageData.slug
	});

	return pageData;
	
};

const setTheme = async requestedThemeSlug => {

	theme.isNew = false;
	
	if(theme.slug != requestedThemeSlug) {
		const requestedTheme = getThemeBySlug(requestedThemeSlug);
		changeState(requestedTheme.state);
		theme = requestedTheme;
		theme.isNew = true;
	}

	if (theme.slug != 'home') await hidePanel({direction: 'up'});
	
	return theme;
};

const updateMap = async ({notFound}) => {

	if(!mapAPI.isMapboxLoaded()) {
		if (notFound == true) {
			await mapAPI.init({notFound});
		} else {
			await mapAPI.init(theme);
		}
		
	} else {
		await mapAPI.changeMap(theme);
	}

	datavis.drawNodes(theme);
};


const changeState = newState => {

	if (newState != theme.state) {
		if (newState === 'home') {
			hideTopMenu();
			hidePanel({direction: 'up'});
			showHome();
		} else if (newState === 'page') {
			hideHome();
			showTopMenu();
		}
	}
	
};

const loadPage = async ({id, slug}) => {
	let pageData;

	if (id) {
		pageData = await wp.pages().id(id).embed();
	} else if (slug) {
		pageData = await wp.pages().slug(slug).embed();
		pageData = pageData[0];
	}

	return pageData;
};

const updatePage = ({title, content}) => {
	//dom manipulation
	select('#right-panel').select('#article-title').select('.fl-heading-text').html(title.rendered);
	select('#right-panel').select('#article-content').select('.fl-rich-text').html(content.rendered);
	select('#right-panel').select('.tagline').select('.fl-heading-text').html('');
	select('#right-panel').select('#article-tags').select('.fl-html').html('');
	captureLinks();
};

const captureLinks = () => {
	selectAll('a')
		.on('click', function () {

			//get url // domain
			const link = select(this).attr('href');
			const domain = link.split('/')[2];

			//Test if it is a local link (localhost -> remote)
			const host = (window.location.hostname == 'localhost') ? 'labs.fluxo.art.br' : window.location.hostname;

			//if extrrnal, navigate
			if (domain != host) return; //window.location.hostname

			//if local, prevent page update
			event.preventDefault();

			//load post based on slug on the url
			const slug = link.split('/')[4];

			showPost({slug});
		});

};

const changeBrowserHistory = ({title,slug}) => {

	let pageTitle = 'Ghost River';
	if (title) pageTitle += ` - ${title}`;

	document.title = pageTitle;
	window.history.pushState(
		{pageTitle},
		'',
		slug);
};

export default {
	initHome,
	showPost,
	showPage,
	loadPage,
	changeBrowserHistory,
	getThemeBySlug
};