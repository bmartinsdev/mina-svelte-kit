// tailwind.config.js
module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        mode: 'all',
        content: ['./public/index.html', './src/**/*.svelte'],
    }
}