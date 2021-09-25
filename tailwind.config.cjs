// tailwind.config.js
module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            '**/*.svelte'
        ]
    }
}