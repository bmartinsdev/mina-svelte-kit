
import { writable } from "svelte/store";
import contentful from './contentful';

const defaultLayout = {
	theme: 'light',
	lang: 'en',
	layout: {}
};

const getLayout = async (lang) => {
	console.log(lang);
	const res = await contentful.getEntry('3tUUEUguOCqg1Uu2jjXq0I');

	if (!res) throw new Error('Bad response')

	return res;
}

function createLayoutStore() {
	const { subscribe, update } = writable(defaultLayout);

	return {
		subscribe,
		getLayout: async (lang) => {
			try {
				const res = (await getLayout(lang));
				update(state => (state = { ...state, layout: res }));
			} catch (e) {
				console.log(e.message);
			}
		}
	};
}

export const layoutStore = createLayoutStore();