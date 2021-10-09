import type LayoutContent from '$types/LayoutContent'

export default interface Layout {
    maintenance: boolean,
    locale: string,
    content?: LayoutContent
}