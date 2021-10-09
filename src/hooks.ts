import { layoutStore } from '$stores/layout';
import type Layout from '$types/Layout';
import type { Handle, GetSession } from '@sveltejs/kit';
import cookie from 'cookie';

export const handle: Handle = async ({ request, resolve }) => {

    const langPath = request.path.split('/')[1];
    const locale = ['en', 'pt'].includes(langPath) ? langPath : 'en';
    const cookies = cookie.parse(request.headers.cookie || '');
    const maintenance = cookies.maintenance !== 'false';

    request.locals.layout = {
        locale,
        maintenance,
        content: await layoutStore.get(locale)
    } as Layout;

    const response = await resolve(request);

    return response;
};

export const getSession: GetSession = (request) => {
    return request.locals.layout;
}