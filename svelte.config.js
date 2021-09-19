// svelte.config.js
import adapter from '@sveltejs/adapter-node'
import 'dotenv/config'
import replace from '@rollup/plugin-replace'
import preprocess from 'svelte-preprocess'

// Get env keys from .env file
const keys = [
	`CONTENTFUL_ACCESS_TOKEN`,
	`CONTENTFUL_SPACE_ID`,
]
const replacements = Object.fromEntries(
	keys.map((key) => [`process.env.${key}`, JSON.stringify(process.env[key])])
)

export default {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		target: `#svelte`,
		vite: {
			plugins: [replace(replacements)],
		},
	}
};