import { Posts } from "../entities/posts_interface";
import { Post } from "../entities/post_type";

class PostsImpl implements Posts {
    getPost(postid: string): Post {
        throw new Error("Method not implemented.");
    }
    getPosts(): Post[] {
        throw new Error("Method not implemented.");
    }
}