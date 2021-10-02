import type LayoutContent from './LayoutContent'

export default interface Layout {
    locale: string,
    content?: LayoutContent
}