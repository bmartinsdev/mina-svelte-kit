import type Image from './Image'
export default interface About {
    description: string,
    bio: string,
    photo: Image,
    image: Image,
    seoTitle: string,
    seoDescription: string
}