import type LayoutContent from '../types/LayoutContent';
import space, { parseContentfulHtml } from './contentful';



const get = async (locale: string) => {
	const res: any = await space.getEntry('3tUUEUguOCqg1Uu2jjXq0I', { locale });

	if (!res.fields) throw new Error('Bad response');
	if (res.fields?.footerText?.nodeType) {
		res.fields.footerText = parseContentfulHtml(res.fields.footerText);
	}

	return res.fields as LayoutContent;
}

function createLayoutStore() {
	return {
		get: async (locale: string) => {
			try {
				return await get(locale);
			} catch (e) {
				console.log(e.message);
			}
		}
	};
}

export const layoutStore = createLayoutStore();