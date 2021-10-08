import type Work from '../types/Work';
import type WorkList from '../types/WorkList';
import space from './contentful';
import { parseContentfulHtml, parseContentfulImage } from './contentful';


const fieldsList = ['slug', 'title', 'subtitle', 'thumbnail'];
const getListParams = {
	select: `sys.id,fields.${fieldsList.join(',fields.')}`,
	limit: 6,
	content_type: 'works'
};

const get = async (id: string, locale: string) => {
	const res: any = await space.getEntry(id, { locale });

	// Gallery image parse
	if (res.fields['gallery']?.fields?.file) {
		const gallery = [];
		for (const image of res.fields['gallery']) {
			gallery.push(parseContentfulImage(image));
		}
		res.fields['gallery'] = gallery;
	}

	return res.fields as Work;
}

const getList = async (locale: string, skip: number = 0) => {
	const res: any = await space.getEntries({
		locale,
		skip,
		...getListParams
	});

	if (!res.items?.length) throw new Error('Bad response');

	const newWorkList: WorkList = {
		missing: res.total - res.skip - res.items.length,
		items: []
	};

	for (const item of res.items) {
		// Image parse
		if (item.fields['thumbnail']?.fields?.file) {
			item.fields['thumbnail'] = parseContentfulImage(item.fields['thumbnail'])
		}
		newWorkList.items.push({ ...item.fields, id: item.sys.id } as Work);
	}

	return newWorkList;
}

function createWorkStore() {
	return {
		get: async (locale: string, id: string): Promise<Work> => {
			try {
				return await get(id, locale);
			} catch (e) {
				console.log(e.message);
			}
		},
		getList: async (locale: string, skip: number = 0): Promise<WorkList> => {
			try {
				return await getList(locale, skip);
			} catch (e) {
				console.log(e.message);
			}
		}
	};
}

export const workStore = createWorkStore();