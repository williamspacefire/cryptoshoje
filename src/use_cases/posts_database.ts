import { PostsMarkdownFileImpl } from '../adapters/posts'
import { PostsModel } from '../entities/posts_interface'

const postsDatabase: PostsModel = new PostsMarkdownFileImpl()

export default postsDatabase
