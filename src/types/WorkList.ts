import type Work from '$types/Work'
export default interface WorkList {
    missing: number,
    items: Work[]
}