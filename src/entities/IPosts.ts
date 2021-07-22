import { Post } from './Post'

export interface IPosts {
    getPost(): Post
    getPosts(limit?: number): Post[]
    setPostId(postId: string): void
    getPostId(): string
    getHomePagePaths(): string[]
}
