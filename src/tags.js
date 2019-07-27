import ghost from './assets/snapchat.svg';
import unrulyWaters from './assets/tsunami.svg';
import imaginaries from './assets/thought-bubble.svg';
import infrastructures from './assets/cone.svg';
import contamination from './assets/biohazard.svg';
import speculative from './assets/help.svg';
import beyondHumans from './assets/snake.svg';
import disreappearingWaters from './assets/sea.svg';

export const getIcon = ({slug}) => {
	if (slug.toLowerCase() == 'ghosts') return ghost;
	if (slug.toLowerCase() == 'unrullywaters') return unrulyWaters;
	if (slug.toLowerCase() == 'imaginaries') return imaginaries;
	if (slug.toLowerCase() == 'infrastructure') return infrastructures;
	if (slug.toLowerCase() == 'contamination') return contamination;
	if (slug.toLowerCase() == 'speculation') return speculative;
	if (slug.toLowerCase() == 'beyond-humans') return beyondHumans;
	if (slug.toLowerCase() == 'disreappearingwaters') return disreappearingWaters;
};

export default {
	getIcon
};