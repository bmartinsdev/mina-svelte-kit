import { layoutStore } from './stores/layout';

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(request) {
    const langPath = request.path.split('/')[1];
    const lang = ['en', 'pt'].includes(langPath) ? langPath : 'en';
    let layout = {};

    layoutStore.subscribe(data => layout = data);
    await layoutStore.getLayout(lang);

    return layout;
}