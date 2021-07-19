import { PostsMarkdownFileImpl } from '../adapters/PostsMarkdownFileImpl'
import { IPosts } from '../entities/IPosts'

const postsDatabase: IPosts = new PostsMarkdownFileImpl()

export default postsDatabase
