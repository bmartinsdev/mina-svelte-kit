import { layoutStore } from './stores/layout';
import { Layout } from './types';
import cookie from 'cookie';

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(request) {
    const langPath = request.path.split('/')[1];
    const locale = ['en', 'pt'].includes(langPath) ? langPath : 'en';

    const cookies = cookie.parse(request.headers.cookie || '')

    const theme = cookies.theme || 'light';

    const layout: Layout = {
        locale,
        theme,
        content: await layoutStore.getLayout(locale)
    };
    console.log(layout);
    return layout;
}