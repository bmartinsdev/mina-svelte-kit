import type Image from './Image'
export default interface Work {
    id: string,
    title: string,
    slug: string,
    subtitle: string,
    thumbnail: Image,
    description?: string,
    date?: Date,
    gallery?: Image[],
}