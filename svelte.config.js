// svelte.config.js
import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

export default {
	preprocess: preprocess({
		postcss: process.env.NODE_ENV === 'production'
	}),
	kit: {
		adapter: adapter(),
		target: `#svelte`
	},
	trailingSlash: 'ignore'
};