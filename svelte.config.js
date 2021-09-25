// svelte.config.js
import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import { join } from 'path'
import { readFileSync } from 'fs'
import { cwd } from 'process'


export default {
	preprocess: preprocess({
		postcss: process.env.NODE_ENV === 'production',
		preserve: ['ld+json'],
	}),
	kit: {
		adapter: adapter(),
		target: `#svelte`
	},
	ssr: {
		noExternal: ['contentful']
	}
};