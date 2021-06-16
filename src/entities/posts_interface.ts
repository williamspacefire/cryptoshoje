import { Post } from "./post_type";

export interface Posts {
    getPost(postid: string): Post
    getPosts(): Post[]
}