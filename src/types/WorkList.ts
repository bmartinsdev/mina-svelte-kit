import type Work from './Work'
export default interface WorkList {
    missing: number,
    items: Work[]
}