import {select, selectAll, event} from 'd3/dist/d3.min';
import {showPage, showPost} from './content';
import themes from './config/themes.json';


const animation = {
	duration: {
		in: 3000,
		out: 2000
	}
};

let mainMenu = false;
let topMenu = false;

const initHome = () => {

	select('#home-text')
		.style('opacity', 0)
		.style('display', 'block')
		.transition()
		.delay(0) //3000
		// .duration(0)
		.duration(animation.duration.in)
		.style('opacity', 1);

	let delay = 0; //8000
	
	for (const theme of themes) {

		select(`#main-${theme.slug}-bt`)
			.style('opacity', 0)
			.style('display', 'block')
			.transition()
			.delay(delay)
			.duration(animation.duration.in)
			.style('opacity', 1);

		delay += 1000;
	}

	configMainMenu();

};

const configMainMenu = () => {
	if (mainMenu == false) {
		for (const theme of themes) {
			select(`#main-${theme.slug}-bt`)
				.on('click', () => showPage(theme));
		}
		mainMenu = true;
	}
};

const configTopMenu = () => {
	if (topMenu == false) {
		for (const theme of themes) {
			select(`#top-${theme.slug}-bt`)
				.on('click', () => showPage(theme))
				.style('cursor', 'pointer'); 
		}
		topMenu = true;
	}
};

const showHome = () => {

	select('#header-col')
		.style('display', 'block')
		.transition()
		.delay(1000)
		.duration(animation.duration.in)
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
		.duration(animation.duration.in)
		.style('opacity', 0)
		.style('margin-top', '0px');

	select('#middle-panel')
		.style('opacity', 0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(animation.duration.in)
		.style('opacity', 0)
		.style('margin-top', '0px');

	select('#right-panel')
		.style('opacity', 0)
		.style('margin-top', direction)
		.style('display', 'block')
		.transition()
		.delay(delay)
		.duration(animation.duration.in)
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
			.duration(animation.duration.out)
			.style('opacity', 0)
			.style('margin-top', direction)
			.on('end', function () {
				select(this).style('display', 'none');
			});

		select('#middle-panel')
			.transition()
			.delay(0)
			.duration(animation.duration.out)
			.style('opacity', 0)
			.style('margin-top', direction)
			.on('end', function () {
				select(this).style('display', 'none');
			});

		select('#right-panel')
			.transition()
			.delay(0)
			.duration(animation.duration.out)
			.style('opacity', 0)
			.style('margin-top', direction)
			.on('end', function () {
				select(this).style('display', 'none');
				resolve();
			});
	});
};

const updatePage = ({title, content}) => {
	//dom manipulation
	select('#right-panel').select('#article-title').select('.fl-heading-text').html(title.rendered);
	select('#right-panel').select('#article-content').select('.fl-rich-text').html(content.rendered);
	select('#right-panel').select('.tagline').select('.fl-heading-text').html('');
	select('#right-panel').select('#article-tags').select('.fl-html').html('');
	captureLinks();
};

const updatePost = ({title, content}, tags, theme) => {
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

const showSpinner = () => {
	select('body').append('div')
		.attr('id', 'spinner')
		.html('<div class="lds-ripple"><div></div><div></div></div>');
};

const hideSpinner = () => {
	select('#spinner').remove();
};


export default {
	initHome,
	configMainMenu,
	configTopMenu,
	showHome,
	hideHome,
	showTopMenu,
	hideTopMenu,
	showPanel,
	hidePanel,
	updatePage,
	updatePost,
	showSpinner,
	hideSpinner
};