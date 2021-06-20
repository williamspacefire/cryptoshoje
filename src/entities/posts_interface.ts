import { Post } from './post_type'

export interface PostsModel {
    getPost(): Post
    getPosts(limit?: number): Post[]
    setPostId(postId: string): void
    getPostId(): string
}
