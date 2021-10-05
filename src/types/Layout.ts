import type LayoutContent from './LayoutContent'

export default interface Layout {
    maintenance: boolean,
    locale: string,
    content?: LayoutContent
}