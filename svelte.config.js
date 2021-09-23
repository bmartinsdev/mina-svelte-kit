// svelte.config.js
import netlify from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

export default {
	preprocess: preprocess(),
	kit: {
		adapter: netlify(),
		target: `#svelte`
	}
};