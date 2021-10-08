// Default export of contentful plugin is in cjs, so we import esm js file
import { createClient } from 'contentful/dist/es-modules/contentful.js';
import type Image from '../types/Image';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string;

const api = createClient({
	space,
	accessToken
});

export function parseContentfulHtml(contentfulHtml): string {
	return documentToHtmlString(contentfulHtml);
}

export function parseContentfulImage(contentfulImage): Image {
	return {
		thumb: `${contentfulImage.fields.file.url}?w=200&h=200&fm=webp`,
		large: `${contentfulImage.fields.file.url}?w=1400&h=1400&fm=webp`,
		title: contentfulImage.fields.title
	}
}

export default api;