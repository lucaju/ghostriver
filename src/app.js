import wpAPI from './wordpress.js';

const pathname = window.location.pathname;
const search = window.location.search;

const loadDeepLink = async slug => {

	let theme = wpAPI.getThemeBySlug(slug);

	if (theme) {
		await wpAPI.showPage(theme);
	} else {
		const post = await wpAPI.showPost({slug});

		//if no page found: 404
		if (!post) notFound404();
	}

};

const notFound404 = async () => {
	wpAPI.changeBrowserHistory({slug: '/ghost-river/'});
	wpAPI.initHome({notFound: true});
};

const goHome = async () => {
	wpAPI.changeBrowserHistory({slug: '/ghost-river/'});
	wpAPI.initHome({});
};
 
( async () => {
	if (pathname == '/ghost-river/') {

		if (!search) {
			goHome();
		} else {
			const url = new URL(window.location.href);
			const slug = url.searchParams.get('node');

			wpAPI.changeBrowserHistory({slug});
			loadDeepLink(slug);
		}

	} else { 
		
		const deepLink = pathname.split('/')[2];
		location = `http://localhost:8888/ghost-river?node=${deepLink}`;
	}
})();