import content from './content';

const host = window.location.origin;
const rootPath = '/ghost-river/';
// const host = ' https://ghostriver.ethnographylabconcordia.ca'; //'http://localhost:8888'; // http://labs.fluxo.art.br // ghostriver.ethnographylabconcordia.ca
// const rootPath = '/';


const navigation = () => {

	//test if url is trying to reach a deeplink		
	if (window.location.pathname !== rootPath) {	
		
		const deepPath = window.location.pathname.split('/');
		const node = deepPath[deepPath.length-2];

		// const deepLink = window.location.pathname.split('/').length; 	//get path after the '/' as deeplink
		location = `${host}${rootPath}?node=${node}`;			//naviate to root with deeplink as a search parameters
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
	goHome();

};

const loadDeepLink = async slug => {

	changeBrowserHistory({slug});					//change URL Bar

	let theme = content.getThemeBySlug(slug);				//get theme based on the search parameters

	//if search match to theme (page)
	if (theme) {											
		await content.showPage(theme);						//load the theme page
		return;
	}

	//try to load a post based on search parameters
	const post = await content.showPost({slug});			

	//if no page/post found: load home with 404
	if (!post) goHome();

};

const goHome = async () => {

	changeBrowserHistory({slug: rootPath});
	content.initHome();

};

export const changeBrowserHistory = ({title,slug}) => {
	let pageTitle = 'Ghost River';
	if (title) pageTitle += ` - ${title}`;

	document.title = pageTitle;
	window.history.pushState(
		{pageTitle},
		'',
		slug);
};
 



export default {
	navigation,
	changeBrowserHistory
};