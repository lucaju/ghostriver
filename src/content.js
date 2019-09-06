import WPAPI from 'wpapi';

import {changeBrowserHistory} from './browser-request';
import contentHTML from './contentHTML';
import geodata from './geodata';
import map from './map';

import config from './config/config.json';
import themes from './config/themes.json';


const wp = new WPAPI({endpoint: config.wordpress.endpoint});

let theme;
let currentNode;
let activePanel;

const initHome = () => contentHTML.initHome();

const setCurrentNode = data => currentNode = data;

const setActivePanel = panel => activePanel = panel;


export const showPage = async ({id, slug}) => {

	await setTheme(slug);

	if (id === 0) {
		changeBrowserHistory({slug: '/ghost-river/'});
		return;
	}

	// if (theme.isNew) 
	if (slug !== 'about') updateMap(theme);

	const pageData = await loadPage({id, slug});
	// console.log(pageData);

	setCurrentNode(null);

	if (slug !== 'about') map.flyToOrigin();

	//panel
	setActivePanel((slug === 'about') ? 'full-panel' : 'right-panel');
	
	contentHTML.updatePage(activePanel, pageData);
	
	//show panel
	contentHTML.showPanel({activePanel});

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

	if (currentNode && currentNode.id === id) return;

	await contentHTML.hidePanel({activePanel});

	contentHTML.showSpinner();

	const postData = await loadPost({id,slug});
	// console.log(postData);
	if (!postData) {
		contentHTML.hideSpinner();
		return;
	}

	contentHTML.hideSpinner();
	setCurrentNode(postData);

	const postCategories = postData._embedded['wp:term'][0];
	const postTags = postData._embedded['wp:term'][1];

	const postTheme = getPostTheme(postCategories);
	if (postTheme.slug === 'uncategorized') console.log('Problem with category "uncategorized": ', postData);

	setTheme(postTheme.slug);
	if (theme.isNew) await updateMap(theme);

	//fly to local
	geodata.setCurrentNode(currentNode);
	const coordinates = await geodata.getNodeCoordinates(currentNode);

	map.flyTo(coordinates);

	setActivePanel('right-panel');
	
	contentHTML.updatePost(postData,postTags,theme);

	//show Panel
	contentHTML.showPanel({activePanel});

	changeBrowserHistory({
		title: postData.title.rendered,
		slug: postData.slug
	});

	return {
		post: postData,
		theme: postTheme
	};
};

const getPostTheme = (postCategories) => {

	let postTheme;
	if (theme) postTheme = postCategories.find(cat => cat.slug === theme.slug);

	if (!postTheme) {
		if (postCategories.length > 1) {
			const themePost = Math.floor(Math.random() * postCategories.length);
			postTheme = postCategories[themePost];
		} else {
			postTheme = postCategories[0];
		}
	}

	return postTheme;
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

export const closePanel = async () => {

	await contentHTML.hidePanel({activePanel});
	
	setCurrentNode(null);
	geodata.resetNodesState({});

	return currentNode;
};


const setTheme = async requestedThemeSlug => {

	if (!theme) theme = {};

	theme.isNew = false;
	
	if(theme.slug != requestedThemeSlug) {
		const requestedTheme = getThemeBySlug(requestedThemeSlug);
		changeState(requestedTheme.state);
		theme = requestedTheme;
		theme.isNew = true;
	}

	if (theme.slug != 'home') {
		await contentHTML.hidePanel({activePanel});
	}
	
	return theme;
};

const getCurrentTheme = () => theme;
const getThemeBySlug = slug => themes.find( theme => theme.slug === slug );

const changeState = async newState => {

	if (newState != theme.state) {
		if (newState === 'home') {
			contentHTML.hideTopMenu();
			await contentHTML.hidePanel({activePanel});
			contentHTML.showHome();
		} else if (newState === 'page') {
			contentHTML.hideHome();
			contentHTML.showTopMenu();
		}
	}
	
};

const updateMap = async ({location}) => {

	if (!theme) theme = themes[0];

	if(!map.isMapboxLoaded()) {

		if (location === '404') {
			await map.init({location});
		} else {
			await map.init(theme);
		}
		
	} else {
		await map.changeMap(theme);
	}

	await geodata.drawNodes(theme);

};

export const tagSearch = tag => {

	geodata.drawNodeByTag(tag);
	map.flyToOrigin();
	contentHTML.updateHeading(tag.name);

};


export default {
	initHome,
	showPage,
	showPost,
	closePanel,
	getCurrentTheme,
	getThemeBySlug,
	tagSearch
};
