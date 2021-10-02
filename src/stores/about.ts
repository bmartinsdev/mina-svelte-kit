import type About from '../types/About';
import { writable } from "svelte/store";
import space from './contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


const defaultAbout = {
	image: '',
	photo: '',
	description: '',
	bio: ''
};

const getContent = async (locale: string) => {
	const res: any = await space.getEntry('5XwCQ8QR6u1GWjCbG4cjR2', { locale });

	if (!res.fields) throw new Error('Bad response');
	// Html parser
	for (const field of ['description', 'bio']) {
		if (res.fields[field]?.nodeType) {
			res.fields[field] = documentToHtmlString(res.fields[field]);
		}
	}

	//Image parser
	for (const field of ['image', 'photo']) {
		if (res.fields[field]?.fields?.file) {
			res.fields[field] = {
				path: res.fields[field].fields.file.url,
				title: res.fields[field].fields.title
			};
		}
	}

	return res.fields as About;
}

function createAboutStore() {
	const { subscribe, update } = writable(defaultAbout);

	return {
		subscribe,
		getContent: async (locale: string) => {
			try {
				const res = (await getContent(locale));
				update(state => (state = { ...state }));

				return res;
			} catch (e) {
				console.log(e.message);
			}
		}
	};
}

export const aboutStore = createAboutStore();