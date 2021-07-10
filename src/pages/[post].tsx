import React from 'react'
import Header from '../views/header/header'
import { Flex, Heading, VStack, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { GetStaticProps } from 'next'
import gfm from 'remark-gfm'
import { Post } from '../entities/post_type'
import Footer from '../views/footer/footer'
import { getDirectoryFiles, postsDirectory } from '../use_cases/file'
import { postsImpl } from '../main/dependencies'
import { PostsComponents } from '../use_cases/posts_components'
const highlight = require('rehype-highlight')
export const postsImageDirectory: string = '/image/posts/'

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postId = params?.post as string
    postsImpl.setPostId(postId)
    const post = postsImpl.getPost()
    return { props: { post } }
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
        paths: getDirectoryFiles(postsDirectory).map(
            file => '/' + file.replace('.md', '')
        ),
    }
}

export default Posts
