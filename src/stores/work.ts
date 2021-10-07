import type About from '../types/About';
import { writable } from "svelte/store";
import space from './contentful';
import { parseContentfulHtml, parseContentfulImage } from './contentful';


const defaultAbout = {
	image: '',
	photo: '',
	description: '',
	bio: ''
};

const get = async (locale: string) => {
	const res: any = await space.getEntry('5XwCQ8QR6u1GWjCbG4cjR2', { locale });

	return res.fields as About;
}

const getList = async (locale: string) => {
	const res: any = await space.getEntry('5XwCQ8QR6u1GWjCbG4cjR2', { locale });

	if (!res.fields) throw new Error('Bad response');
	// Html parser
	for (const field of ['description', 'bio']) {
		if (res.fields[field]?.nodeType) {
			res.fields[field] = parseContentfulHtml(res.fields[field])
		}
	}

	//Image parser
	for (const field of ['image', 'photo']) {
		if (res.fields[field]?.fields?.file) {
			res.fields[field] = parseContentfulImage(res.fields[field])
		}
	}

	return res.fields as About;
}

function createWorkStore() {
	const { subscribe, update } = writable(defaultAbout);

	return {
		subscribe,
		get: async (locale: string) => {
			try {
				const res = (await get(locale));
				update(state => (state = { ...state }));

				return res;
			} catch (e) {
				console.log(e.message);
			}
		},
		getList: async (locale: string) => {
			try {
				const res = (await getList(locale));
				update(state => (state = { ...state }));

				return res;
			} catch (e) {
				console.log(e.message);
			}
		},
		getMore: async (locale: string) => {
			try {
				const res = (await getList(locale));
				update(state => (state = { ...state }));

				return res;
			} catch (e) {
				console.log(e.message);
			}
		}
	};
}

export const workStore = createWorkStore();