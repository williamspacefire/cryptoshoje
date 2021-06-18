import { PostsModel } from '../entities/posts_interface'
import { Post } from '../entities/post_type'
import {
    getDirectoryFiles,
    getFileContent,
    postsDirectory,
} from '../use_cases/file'

export class PostsMarkdownFileImpl implements PostsModel {
    private postId?: string

    setPostId(postId: string): void {
        this.postId = postId
    }

    getPost(): Post {
        if (!this.postId)
            throw new Error('You need to set postId to use this function')

        const postFileContent = getFileContent(
            `${postsDirectory}/${this.getPostFileNameFromPostId()}`
        )
        const postDescription =
            'Nessa série de posts vamos aprender a criar um bot para o Discord.'

        return {
            content: postFileContent,
            title: 'Criando um Bot para o Discord com Node.js – Parte 1 - Testando...',
            canonical: this.postId,
            description: postDescription,
        }
    }

    getPosts(limit?: number): Post[] {
        return getDirectoryFiles(postsDirectory).map(filename => {
            const postsInstance = new PostsMarkdownFileImpl()
            postsInstance.setPostId(this.getPostIdFromFileName(filename))
            return postsInstance.getPost()
        })
    }

    getPostFileNameFromPostId(postId?: string): string {
        return postId ? `${postId}.md` : `${this.postId}.md`
    }

    getPostIdFromFileName(filename?: string): string {
        if (filename) {
            return filename.replace('.md', '')
        } else if (this.postId) {
            return this.postId.replace('.md', '')
        } else throw new Error('You need to pass filename or set the postId')
    }
}
