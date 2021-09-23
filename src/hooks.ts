import { layoutStore } from './stores/layout';
import type Layout from './types/LayoutContent';
import cookie from 'cookie';

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(request) {
    const langPath = request.path.split('/')[1];
    const locale = ['en', 'pt'].includes(langPath) ? langPath : 'en';

    const cookies = cookie.parse(request.headers.cookie || '')

    const theme = cookies.theme || 'light';

    const layout = {
        locale,
        theme,
        content: await layoutStore.getLayout(locale)
    } as Layout;

    return layout;
}