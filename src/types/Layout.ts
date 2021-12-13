import type LayoutContent from '$types/LayoutContent'

export default interface Layout {
    locale: string,
    content?: LayoutContent
}