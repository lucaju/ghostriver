import WPAPI from 'wpapi';

import map from './map';
import geodata from './geodata';
import contenHTML from './contentHTML';

import config from './config/config.json';
import themes from './config/themes.json';


const wp = new WPAPI({endpoint: config.wordpress.remote.endpoint});

let theme = themes[0];


const initHome = ({location}) => {
	contenHTML.initHome();
	updateMap({location});
};

export const showPage = async ({id, slug}) => {

	await setTheme(slug);

	if (theme.isNew) updateMap(theme);

	// map.pitchMap();

	if (id == 0) {
		changeBrowserHistory({slug: '/ghost-river/'});
		return;
	}
		
	const pageData = await loadPage({id, slug});
	// console.log(pageData);
	
	contenHTML.updatePage(pageData);
	
	//show panel
	contenHTML.showPanel({
		direction: 'down',
		delay: 0
	});

	changeBrowserHistory({
		title: pageData.title.rendered,
		slug: pageData.slug
	});

	return pageData;
	
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

export const showPost = async ({id, slug}) => {

	await contenHTML.hidePanel({direction: 'up'});

	contenHTML.showSpinner();

	//postData - load by ID or by Slug
	const postData = await loadPost({id,slug});
	// console.log(postData);
	if (!postData) {
		contenHTML.hideSpinner();
		return;
	}

	const postCategories = postData._embedded['wp:term'][0];
	const postTags = postData._embedded['wp:term'][1];

	// const postTheme = postCategories[0].slug;
	let postTheme = postCategories.find(cat => cat.slug == theme.slug);

	if (!postTheme) postTheme = postCategories[0];
	
	if(postTheme.slug == 'uncategorized') console.log('Problem with category "uncategorized": ', postData);

	setTheme(postTheme.slug);
	if (theme.isNew) updateMap(theme);
	
	contenHTML.updatePost(postData,postTags,theme);

	contenHTML.hideSpinner();

	//show Panel
	contenHTML.showPanel({
		direction: 'down',
		delay: 0
	});

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


const setTheme = async requestedThemeSlug => {

	theme.isNew = false;
	
	if(theme.slug != requestedThemeSlug) {
		const requestedTheme = getThemeBySlug(requestedThemeSlug);
		changeState(requestedTheme.state);
		theme = requestedTheme;
		theme.isNew = true;
	}

	if (theme.slug != 'home') {
		await contenHTML.hidePanel({
			direction: 'up'
		});
	}
	
	return theme;
};

const getThemeBySlug = slug => themes.find( theme => theme.slug === slug );

const changeState = async newState => {

	if (newState != theme.state) {
		if (newState === 'home') {
			contenHTML.hideTopMenu();
			await contenHTML.hidePanel({direction: 'up'});
			contenHTML.showHome();
		} else if (newState === 'page') {
			contenHTML.hideHome();
			contenHTML.showTopMenu();
		}
	}
	
};

const updateMap = async ({location}) => {

	if(!map.isMapboxLoaded()) {
		if (location === '404') {
			await map.init({location});
		} else {
			await map.init(theme);
		}
		
	} else {
		await map.changeMap(theme);
	}

	geodata.drawNodes(theme);
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
	showPage,
	showPost,
	getThemeBySlug,
	changeBrowserHistory,
};