import React from 'react'
import Header from '../components/header/header'
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
import { Image } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { GetStaticProps, InferGetServerSidePropsType, NextPage } from 'next'
import gfm from 'remark-gfm'
import { join } from 'path'
const highlight = require('rehype-highlight')
const fs = require('fs')

type Post = {
    content: string
}

export const getStaticProps: GetStaticProps = async context => {
    const postsPath = join(process.cwd(), '_posts')
    const fullPath = join(postsPath, 'como-criar-um-bot.md')
    const mark = fs.readFileSync(fullPath, 'utf8') as string
    //console.log(mark)
    const post = mark
    return { props: { post } }
}

const Posts = (props: { post: string }) => {
    const { post } = props
    console.log(post)
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
                            Criando um Bot para o Discord com Node.js – Parte 1
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
                                //rehypePlugins={[highlight]}
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
                                            <Heading as='h2' margin='3'>
                                                {children}
                                            </Heading>
                                            <Divider />
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
                                }}>
                                {post}
                            </ReactMarkdown>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </>
    )
}

export async function getStaticPaths() {
    return { fallback: true, paths: ['/como-criar-um-bot'] }
}

export default Posts
