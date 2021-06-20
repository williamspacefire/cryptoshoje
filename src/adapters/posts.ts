import { PostsModel } from '../entities/posts_interface'
import { Post } from '../entities/post_type'
import {
    getDirectoryFiles,
    getFileContent,
    getFileStats,
    postsDirectory,
} from '../use_cases/file'

export class PostsMarkdownFileImpl implements PostsModel {
    private postId?: string
    protected directoryFiles?: string[]

    setPostId(postId: string): void {
        this.postId = postId
    }

    getPostId(): string {
        if (!this.postId)
            throw new Error(
                'PostId not defined, please set postId before get it'
            )

        return this.postId
    }

    public getPost(): Post {
        if (!this.postId)
            throw new Error('You need to set postId to use this function')

        const absoluteFilePath =
            postsDirectory + '/' + this.getPostFileNameFromPostId()
        const postFileContent = getFileContent(absoluteFilePath)
        const postFileStats = getFileStats(absoluteFilePath)
        const postDescription =
            'Nessa série de posts vamos aprender a criar um bot para o Discord.'

        return {
            content: postFileContent,
            title: 'Criando um Bot para o Discord com Node.js – Parte 1 - Testando...',
            canonical: this.postId,
            description: postDescription,
            creation_time: postFileStats.ctimeMs,
            modification_time: postFileStats.mtimeMs,
        }
    }

    public getPosts(limit?: number): Post[] {
        this.directoryFiles = getDirectoryFiles(postsDirectory)

        if (limit) this.limitDirectoryFiles(limit)
        const posts = this.directoryFiles.map(filename =>
            this.directoryFilesMapCallback(filename)
        )
        return this.sortPost(posts)
    }

    protected directoryFilesMapCallback(filename: string): Post {
        const postsInstance = new PostsMarkdownFileImpl()
        postsInstance.setPostId(this.getPostIdFromFileName(filename))

        return postsInstance.getPost()
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

    public sortPost(post: Post[]) {
        return post.sort((a, b) => b.creation_time - a.creation_time)
    }
}
