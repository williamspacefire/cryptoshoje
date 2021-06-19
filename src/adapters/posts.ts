import { PostsModel } from '../entities/posts_interface'
import { Post } from '../entities/post_type'
import {
    getDirectoryFiles,
    getFileContent,
    postsDirectory,
} from '../use_cases/file'

export class PostsMarkdownFileImpl implements PostsModel {
    private postId?: string
    private directoryFiles?: string[]

    public setPostId(postId: string): void {
        this.postId = postId
    }

    public getPost(): Post {
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

    public getPosts(limit?: number): Post[] {
        this.directoryFiles = getDirectoryFiles(postsDirectory)

        if (limit) this.limitDirectoryFiles(limit)

        return this.directoryFiles.map(filename => {
            const postsInstance = new PostsMarkdownFileImpl()
            postsInstance.setPostId(this.getPostIdFromFileName(filename))
            return postsInstance.getPost()
        })
    }

    private limitDirectoryFiles(limit: number): void {
        if (!this.directoryFiles) throw new Error('directory files not set')

        this.directoryFiles = this.directoryFiles.filter(
            (_, index) => index < limit
        )
    }

    private getPostFileNameFromPostId(postId?: string): string {
        return postId ? `${postId}.md` : `${this.postId}.md`
    }

    private getPostIdFromFileName(filename?: string): string {
        if (filename) {
            return filename.replace('.md', '')
        } else if (this.postId) {
            return this.postId.replace('.md', '')
        } else throw new Error('You need to pass filename or set the postId')
    }
}
