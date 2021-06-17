import { PostsModel } from '../entities/posts_interface'
import { Post } from '../entities/post_type'
import {
    getDirectoryFiles,
    getFileContent,
    postsDirectory,
} from '../use_cases/file'

export class PostsMarkdownFileImpl implements PostsModel {
    private postId: string

    constructor(postId: string) {
        this.postId = postId
    }

    getPost(): Post {
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
            const postsInstance = new PostsMarkdownFileImpl(
                this.getPostIdFromFileName(filename)
            )
            return postsInstance.getPost()
        })
    }

    getPostFileNameFromPostId(postId?: string): string {
        return postId ? `${postId}.md` : `${this.postId}.md`
    }

    getPostIdFromFileName(filename?: string): string {
        return filename
            ? filename.replace('.md', '')
            : this.postId.replace('.md', '')
    }
}
