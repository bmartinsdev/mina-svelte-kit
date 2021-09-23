import contentful from 'contentful';
const { createClient } = contentful;

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string;

const api = createClient({
	space,
	accessToken
});

export default api;