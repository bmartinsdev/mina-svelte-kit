const pkg = require('./package.json');
require('dotenv/config');
const replace = require('@rollup/plugin-replace');

// Get env keys from .env file
const keys = [
	`CONTENTFUL_ACCESS_TOKEN`,
	`CONTENTFUL_SPACE_ID`,
]
const replacements = Object.fromEntries(
	keys.map((key) => [`process.env.${key}`, JSON.stringify(process.env[key])])
)

/** @type {import('vite').UserConfig} */
export default {
	ssr: {
		plugins: [replace(replacements)],
		noExternal: Object.keys(pkg.dependencies || {})
	}
};