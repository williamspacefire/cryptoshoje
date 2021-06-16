import { PostsModel } from '../entities/posts_interface'
import { Post } from '../entities/post_type'
import { File } from '../use_cases/file'

export class PostsMarkdownFileImpl implements PostsModel {
    getPost(postid: string): Post {
        const file = new File()
        const postFileName = `${postid}.md`
        const postFileContent = file.getFileContent(
            `${File.postsDirectory}/${postFileName}`
        )
        const postDescription =
            'Nessa série de posts vamos aprender a criar um bot para o Discord.'

        return {
            content: postFileContent,
            title: 'Criando um Bot para o Discord com Node.js – Parte 1 - Testando...',
            canonical: postid,
            description: postDescription,
        }
    }
    getPosts(limit?: number): Post[] {
        const file = new File()

        return file
            .getDirectoryFiles(File.postsDirectory)
            .map(post => this.getPost(post.replace('.md', '')))
    }
}
