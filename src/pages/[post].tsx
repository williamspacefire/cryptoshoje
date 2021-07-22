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
                        <Heading
                            as='h1'
                            margin='3'
                            fontSize='1.875rem'
                            fontWeight='extrabold'>
                            {post?.title}
                        </Heading>
                        <Image
                            borderRadius='xl'
                            src={postsImageDirectory + post.thumbnail}
                            width='full'
                            maxH='405px'
                        />
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
