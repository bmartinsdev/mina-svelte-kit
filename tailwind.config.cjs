module.exports = {
	mode: 'jit',
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		mode: 'all',
		content: ['./public/index.html', './src/**/*.svelte']
	}
};
