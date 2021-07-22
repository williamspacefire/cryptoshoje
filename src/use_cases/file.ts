import { join } from 'path'
import fs from 'fs'

export default class File {
    static readonly encoding = 'utf8'

    static getPostsDirectory(): string {
        return join(process.cwd(), 'posts')
    }

    static getFileContent(absoluteFilePath: string): string {
        return fs.readFileSync(absoluteFilePath, File.encoding)
    }

    static getDirectoryFiles(directoryPath: string): string[] {
        return fs.readdirSync(directoryPath)
    }

    static getFileStats(absoluteFilePath: string): fs.Stats {
        return fs.statSync(absoluteFilePath)
    }
}
