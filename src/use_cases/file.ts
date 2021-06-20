import { join } from 'path'
import fs from 'fs'

export const postsDirectory: string = join(process.cwd(), 'posts')
const encoding = 'utf8'

export const getFileContent = (absoluteFilePath: string): string =>
    fs.readFileSync(absoluteFilePath, encoding)

export const getDirectoryFiles = (directoryPath: string): string[] =>
    fs.readdirSync(directoryPath)

export const getFileStats = (absoluteFilePath: string): fs.Stats =>
    fs.statSync(absoluteFilePath)
