
import type { LayoutContent } from "src/types";
import { writable } from "svelte/store";
import contentful from './contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


const defaultLayout = {
	theme: 'light',
	locale: 'en',
	content: {}
};

const getLayout = async (locale) => {
	const res: any = await contentful.getEntry('3tUUEUguOCqg1Uu2jjXq0I', { locale });

	if (!res.fields) throw new Error('Bad response');
	if (res.fields?.footerText?.nodeType) {
		res.fields.footerText = documentToHtmlString(res.fields.footerText);
	}

	return res.fields as LayoutContent;
}

function createLayoutStore() {
	const { subscribe, update } = writable(defaultLayout);

	return {
		subscribe,
		getLayout: async (lang) => {
			try {
				const res = (await getLayout(lang));
				update(state => (state = { ...state, content: res }));

				return res;
			} catch (e) {
				console.log(e.message);
			}
		}
	};
}

export const layoutStore = createLayoutStore();