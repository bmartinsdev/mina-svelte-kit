import * as contentful from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const api = contentful.createClient({
	space,
	accessToken
});

export default api;