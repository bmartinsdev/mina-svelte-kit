// svelte.config.js
import netlify from '@sveltejs/adapter-netlify'
import 'dotenv/config'
import replace from '@rollup/plugin-replace'
import preprocess from 'svelte-preprocess'
import pkg from './package.json'

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
		adapter: netlify(),
		target: `#svelte`,
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {}),
			},
			plugins: [replace(replacements)],
		},
	}
};