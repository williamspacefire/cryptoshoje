import React from 'react'
import Header from '../views/header/header'
import {
    Flex,
    Heading,
    VStack,
    Box,
    Text,
    Divider,
    UnorderedList,
    ListItem,
} from '@chakra-ui/layout'
import { Code, Image } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { GetStaticProps } from 'next'
import gfm from 'remark-gfm'
import { Post } from '../entities/post_type'
import Footer from '../views/footer/footer'
import { getDirectoryFiles, postsDirectory } from '../use_cases/file'
import postsDatabase from '../use_cases/posts_database'
const highlight = require('rehype-highlight')

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postId = params?.post as string
    postsDatabase.setPostId(postId)
    const post = postsDatabase.getPost()
    return { props: { post } }
}

const Posts = (props: { post: Post }) => {
    const { post } = props
    return (
        <>
            <Header title='Olá mundo' />
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
                            src='/image/12.jpg'
                            width='full'
                            maxH='405px'
                        />
                        <Box>
                            <ReactMarkdown
                                remarkPlugins={[gfm]}
                                rehypePlugins={[highlight]}
                                components={{
                                    h1: ({ node, children }) => (
                                        <>
                                            <Heading as='h1' margin='3'>
                                                {children}
                                            </Heading>
                                            <Divider />
                                        </>
                                    ),
                                    h2: ({ node, children }) => (
                                        <>
                                            <Heading
                                                variant='h2'
                                                as='h2'
                                                margin='3'>
                                                {children}
                                            </Heading>
                                        </>
                                    ),
                                    p: ({ node, children }) => (
                                        <>
                                            <Text as='p' margin='3'>
                                                {children}
                                            </Text>
                                        </>
                                    ),
                                    ul: ({ node, children }) => (
                                        <>
                                            <UnorderedList as='ul' margin='3'>
                                                {children}
                                            </UnorderedList>
                                        </>
                                    ),
                                    li: ({ node, children }) => (
                                        <>
                                            <ListItem as='li' margin='3'>
                                                {children}
                                            </ListItem>
                                        </>
                                    ),
                                    code: ({ node, children }) => (
                                        <Code className='article-code'>
                                            {children}
                                        </Code>
                                    ),
                                }}>
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
