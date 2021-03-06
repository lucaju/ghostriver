import {select, selectAll, event} from 'd3-selection';
import gsap from 'gsap';

import {showPage, showPost, closePanel, tagSearch} from './content';
import {getIcon} from './tags';

import themes from './config/themes.json';

select('body').append('div').attr('id','map-bg');

const initHome = () => configMainMenu();

const configMainMenu = () => {

	for (const theme of themes) {
		select(`#main-${theme.slug}-bt`).select('a')
			.on('click', () => showPage(theme));
	}

};

const configTopMenu = () => {

	for (const theme of themes) {
		select(`#top-${theme.slug}-bt`)
			.style('cursor', 'pointer')
			.on('click', () => showPage(theme));
	}

};

const showHome = () => {

	select('#header-col').style('display', 'block');
	gsap.to('#header-col', {
		duration: 2,
		y: 0,
		onStart: function() {
			selectAll(this._target)
				.style('display', 'block');
		}
	});

	gsap.to('.col-main-menu', {
		duration: 2,
		y: 0,
		onStart: function() {
			selectAll(this._target)
				.style('display', 'block');
		}
	});

	configMainMenu();
	showHomeBG();
	hideHeading();

};

const hideHome = () => {

	gsap.to('#header-col', {
		duration: 2,
		y: -500,
		onComplete: function() {
			selectAll(this._targets)
				.style('display', 'none');
		}
	});

	gsap.to('.col-main-menu', {
		duration: 2,
		y: -800,
		onComplete: function() {
			selectAll(this._target)
				.style('display', 'none');
		}
	});

	hideHomeBG();
	showHeading();

};

const showHomeBG = () => {

	gsap.to('#map-bg', {
		duration: 2,
		alpha: 1,
		onStart: function() {
			selectAll(this._targets)
				.style('display', 'block');
		}
	});

};

const hideHomeBG = () => {
	
	gsap.to('#map-bg', {
		duration: 2,
		alpha: 0,
		onComplete: function() {
			selectAll(this._targets)
				.style('display', 'none');
		}
	});

};

const showTopMenu = () => {

	gsap.fromTo('#top-menu', 2,
		{y: -200},
		{
			y: 0,
			onStart: function() {
				selectAll(this._targets)
					.style('display', 'block');
			}
		}
	);

	configTopMenu();

};

const hideTopMenu = () => {

	gsap.to('#top-menu', {
		duration: 2,
		y: -200,
		onComplete: function() {
			selectAll(this._targets)
				.style('display', 'none');
		}
	});
		
};

const showPanel = ({activePanel = 'left-panel'}) => {

	if (activePanel === 'full-panel') {

		//Full Panel
		gsap.fromTo('#full-panel', 2, 
			{y: window.outerHeight},
			{
				y: 0,
				onStart: function() {
					selectAll(this._targets)
						.style('display', 'block');
				}
			}
		);

		select('#full-panel').select('.fl-col-content').property('scrollTop', 0);
		showHomeBG();

	} else {

		//Left Panel
		gsap.to('#left-panel', {
			duration: 2,
			x: 0,
			onStart: function() {
				selectAll(this._targets)
					.style('display', 'block')
					.style('opacity', 0);
			}
		});

		//Right Panel
		select('#right-panel').style('margin-top', '-125px');
		gsap.to('#right-panel', {
			duration: 2,
			x: 0,
			y: 0,
			onStart: function() {
				selectAll(this._targets)
					.style('display', 'block');
			}
		});

		select('#right-panel').select('.fl-col-content').property('scrollTop', 0);

	}

};

const hidePanel = async ({activePanel = 'right-panel'}) => {

	return new Promise(resolve => {

		if (activePanel === 'full-panel') {

			gsap.to('#full-panel', {
				duration: 2,
				y: window.outerHeight,
				onComplete: function() {
					selectAll(this._targets)
						.style('display', 'none');
					resolve();
				}
			});

			hideHomeBG();

		} else {

			//Left Panel
			gsap.to('#left-panel', {
				duration: 2,
				x: window.outerWidth
			});

			//Right Panel
			gsap.to('#right-panel',{
				duration: 2,
				x: window.outerWidth,
				y: 0,
				onComplete: function() {
					resolve();
				}

			});

		}
		
	});

};

const showHeading = () => {

	let heading = select('#map-heading');

	if (heading.empty()) {
		heading = select('body').append('div')
			.attr('id','map-heading');
		heading.append('h3');
	}

	gsap.fromTo('#map-heading', 2, 
		{alpha: 0,},
		{
			alpha: 1,
			onStart: function() {
				selectAll(this._targets)
					.style('display', 'block');
			}
		}
	);

	return heading;
};

const hideHeading = () => {

	const heading = select('#map-heading');

	if (!heading.empty()) {

		gsap.to('#map-heading', {
			duration: 1,
			alpha: 0,
			onComplete: function() {
				selectAll(this._targets)
					.style('display', 'none');
			}
		});
	}

};

const updateHeading = title => {

	if (title.toLowerCase() === 'about') title = '';

	let heading = select('#map-heading');
	if (heading.empty()) heading = showHeading();

	heading.select('h3').html(title);

};

const updatePage = (activePanel, {title, content}) => {

	//dom manipulation
	const panel = select(`#${activePanel}`);
	panel.select('.tagline').select('.fl-heading-text').html('');
	panel.select('#close-panel').style('cursor', 'pointer').on('click', closePanel);
	panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
	panel.select('#article-content').select('.fl-rich-text').html(content.rendered);
	panel.select('#article-tags').select('.fl-html').html('');
	captureLinks();

	updateHeading(title.rendered);

};

const updatePost = ({title, content}, tags, theme) => {

	//DOM manipulation
	const panel = select('#right-panel');

	panel.select('.tagline').select('.fl-heading-text').html(theme.slug);
	panel.select('#close-panel').style('cursor', 'pointer').on('click', closePanel);
	panel.select('#article-title').select('.fl-heading-text').html(title.rendered);
	panel.select('#article-content').select('.fl-rich-text').html(content.rendered);

	//tags
	panel.select('#article-tags').select('.fl-html').html('');

	const tagsDIV = panel.select('#article-tags').select('.fl-html')
		.append('div')
		.attr('id','tag-container');

	const tagsHTML = tagsDIV.selectAll('.circle')
		.data(tags);

	tagsHTML.exit()
		.attr('class', 'exit')
		.remove();

	tagsHTML.enter().append('div')
		.attr('id', tag => `tag-${tag.slug}`)
		.attr('class', 'tag-pill')
		.html( tag => {
			const icon = getIcon(tag);
			return `${icon} ${tag.name}`;
		})
		.on('mouseover', function () {
			select(this).style('color', 'steelblue');
		})
		.on('mouseout', function() {
			select(this).style('color', '#535354');
		})
		.on('click', d => tagSearch(d));
		
	//resize tag icons
	tagsDIV.selectAll('.tag-icon')
		.attr('width','15px')
		.attr('height','15px');

	captureLinks();

};

const captureLinks = () => {

	selectAll('a')
		.on('click', function () {

			//get url // domain
			const link = select(this).attr('href');
			const domain = link.split('/')[2];

			//Test if it is a local link (localhost -> remote)
			const host = (window.location.hostname === 'localhost') ? 'labs.fluxo.art.br' : window.location.hostname;

			//if extrrnal, navigate
			if (domain != host) return; //window.location.hostname

			//if local, prevent page update
			event.preventDefault();

			//load post based on slug on the url
			const slug = link.split('/')[4];

			showPost({slug});
		});

};

const showSpinner = () => {

	select('body').append('div')
		.attr('id', 'spinner')
		.html('<div class="lds-ripple"><div></div><div></div></div>');

};

const hideSpinner = () => select('#spinner').remove();


export default {
	initHome,
	configMainMenu,
	configTopMenu,
	showHome,
	hideHome,
	showTopMenu,
	hideTopMenu,
	showHeading,
	hideHeading,
	updateHeading,
	showPanel,
	hidePanel,
	updatePage,
	updatePost,
	showSpinner,
	hideSpinner
};