import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Post } from '../../entities/Post'
import { PostsComponents } from '../../use_cases/posts_components'
const highlight = require('rehype-highlight')

export default class MarkdownRender extends React.Component<Post> {
    render() {
        return (
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[highlight]}
                components={PostsComponents.components()}>
                {this.props.content}
            </ReactMarkdown>
        )
    }
}
