export interface Layout {
    theme: string,
    locale: string,
    content?: LayoutContent
}
export interface LayoutContent {
    email?: string,
    footerText?: string,
    homeTitle?: string,
    slogan?: string,
    socialNetworks?: [string, string]
}