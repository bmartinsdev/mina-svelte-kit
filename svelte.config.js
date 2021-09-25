// svelte.config.js
import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

export default {
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		adapter: adapter(),
		target: `#svelte`,
		vite: {
			ssr: {
				noExternal: []
			}
		}
	}
};