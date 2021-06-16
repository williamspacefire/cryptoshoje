import { Post } from './post_type'

export interface PostsModel {
    getPost(postid: string): Post
    getPosts(limit?: number): Post[]
}
