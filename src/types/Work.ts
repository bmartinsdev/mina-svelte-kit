import type Image from '$types/Image'
export default interface Work {
    id: string,
    title: string,
    slug: string,
    subtitle: string,
    thumbnail: Image,
    type: string,
    description?: string,
    seoDescription?: string,
    date?: Date,
    gallery?: Image[],
}