import type Work from '$types/Work';
import type WorkList from '$types/WorkList';
import space from '$stores/contentful';
import { parseContentfulHtml, parseContentfulImage } from '$stores/contentful';

// Default getList parameters
const getListFields = ['slug', 'title', 'subtitle', 'thumbnail', 'order', 'type'];
const getListParams = {
	select: `sys.id,fields.${getListFields.join(',fields.')}`,
	limit: 6,
	content_type: 'works',
	order: '-fields.order'
};

// Default get parameters
const getFields = ['title', 'slug', 'description', 'subtitle', 'date', 'gallery', 'seoDescription'];
const getParams = {
	select: `sys.id,fields.${getFields.join(',fields.')}`,
	limit: 1,
	content_type: 'works'
};

const get = async (slug: string, locale: string) => {
	const res: any = await space.getEntries({
		'fields.slug[match]': slug,
		locale,
		...getParams
	});
	if (!res.items?.length) throw new Error('Bad response');
	const work = res.items[0];

	// Parse description
	if (work.fields['description']?.nodeType) {
		work.fields['description'] = parseContentfulHtml(work.fields['description']);
	}

	// Gallery image parse
	if (work.fields['gallery']?.length) {
		const gallery = [];
		for (const image of work.fields['gallery']) {
			if (image.fields?.file?.url) {
				gallery.push(parseContentfulImage(image));
			}
		}
		work.fields['gallery'] = gallery;
	}

	work.fields['id'] = work.sys.id;

	console.log(work);
	return work.fields as Work;
};

const getList = async (locale: string, skip = 0) => {
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
			item.fields['thumbnail'] = parseContentfulImage(item.fields['thumbnail']);
		}
		newWorkList.items.push({ ...item.fields, id: item.sys.id } as Work);
	}

	return newWorkList;
};

function createWorkStore() {
	return {
		get: async (locale: string, slug: string): Promise<Work> => {
			try {
				return await get(slug, locale);
			} catch (e) {
				console.log(e.message);
			}
		},
		getList: async (locale: string, skip = 0): Promise<WorkList> => {
			try {
				return await getList(locale, skip);
			} catch (e) {
				console.log(e.message);
			}
		}
	};
}

export const workStore = createWorkStore();
