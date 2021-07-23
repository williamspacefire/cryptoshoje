import React from 'react'
import Header from '../views/header'
import { Flex, Heading, VStack, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { GetStaticProps } from 'next'
import gfm from 'remark-gfm'
import { Post } from '../entities/Post'
import Footer from '../views/footer'
import { postsImageDirectory, postsImpl } from '../main/dependencies'
import { PostsComponents } from '../use_cases/posts_components'
import PostTitle from '../views/post/PostTitle'
import { PostThumbnail } from '../views/post/PostThumbnail'
const highlight = require('rehype-highlight')

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postId = params?.post as string
    postsImpl.setPostId(postId)
    const post = postsImpl.getPost()

    if (post) return { props: { post } }

    return { notFound: true }
}

const Posts = (props: { post: Post }) => {
    const { post } = props

    return (
        <>
            <Header title={post.title} />
            <Flex justify='center' align='center' p='10'>
                <Box w='3xl'>
                    <VStack spacing='20px'>
                        <PostTitle title={post.title} />
                        <PostThumbnail thumbnail={post.thumbnail} />
                        <Box>
                            <ReactMarkdown
                                remarkPlugins={[gfm]}
                                rehypePlugins={[highlight]}
                                components={PostsComponents.components()}>
                                {post?.content}
                            </ReactMarkdown>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: postsImpl.getHomePagePaths(),
    }
}

export default Posts
