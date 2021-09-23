import type LayoutContent from './LayoutContent'

export default interface Layout {
    theme: string,
    locale: string,
    content?: LayoutContent
}