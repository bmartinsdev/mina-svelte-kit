// svelte.config.js
import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import path from 'path'

export default {
	preprocess: preprocess({
		postcss: process.env.NODE_ENV === 'production'
	}),
	kit: {
		adapter: adapter(),
		target: `#svelte`,
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$types: path.resolve('./src/types'),
					$stores: path.resolve('./src/stores')
				}
			}
		}
	}
};