// Default export of contentful plugin is in cjs, so we import esm js file
import { createClient } from 'contentful/dist/es-modules/contentful.js';

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string;

const api = createClient({
	space,
	accessToken
});

export default api;