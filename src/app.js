import 'core-js/stable';
import 'regenerator-runtime/runtime';

import content from './content';


const host = 'http://localhost:8888'; //'http://localhost:8888'; // http://labs.fluxo.art.br
const rootPath = '/ghost-river/';


const loadDeepLink = async slug => {

	content.changeBrowserHistory({slug});					//change URL Bar

	let theme = content.getThemeBySlug(slug);				//get theme based on the search parameters

	//if search match to theme (page)
	if (theme) {											
		await content.showPage(theme);						//load the theme page
		return;
	}

	//try to load a post based on search parameters
	const post = await content.showPost({slug});			

	//if no page/post found: load home with 404
	if (!post) goHome({location: '404'});

};

const goHome = async data => {

	content.changeBrowserHistory({slug: rootPath});
	content.initHome(data);

};
 
( async () => {		

	if (window.innerWidth <= 880) goHome({location: 'home'});

	//test if url is trying to reach a deeplink		
	if (window.location.pathname !== rootPath) {								
		const deepLink = window.location.pathname.split('/')[2]; 	//get path after the '/' as deeplink
		location = `${host}${rootPath}?node=${deepLink}`;			//naviate to root with deeplink as a search parameters
		return;
	}

	//test if url is searching for deeplink
	if (window.location.search) {																				
		const url = new URL(window.location.href);					//get utl		
		const slug = url.searchParams.get('node');					//get the params for search (a slug for a page or post)
		loadDeepLink(slug);
		return;
	}

	//Go Home
	goHome({location: 'home'});

})();
