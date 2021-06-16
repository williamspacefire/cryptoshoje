import { join } from 'path'
const fs = require('fs')

export class File {
    static readonly postsDirectory: string = join(process.cwd(), '_posts')
    private encoding: string = 'utf8'

    getFileContent(absoluteFilePath: string): string {
        return fs.readFileSync(absoluteFilePath, this.encoding)
    }

    getDirectoryFiles(directoryPath: string): string[] {
        return fs.readdirSync(directoryPath) as string[]
    }
}
