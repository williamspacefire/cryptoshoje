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
import { NextPage } from 'next'
import gfm from 'remark-gfm'
import { join } from 'path'
const highlight = require('rehype-highlight')
const fs = require('fs')

interface Props {
    userAgent: string
}

const Post: NextPage<Props> = ({ userAgent }) => {
    const mark = userAgent

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
                                {mark}
                            </ReactMarkdown>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </>
    )
}

Post.getInitialProps = async ({ pathname }) => {
    const postsPath = join(process.cwd(), 'posts')
    const mark = fs.readFileSync(`${postsPath}/como-criar-um-bot.md`, 'utf8')
    return { userAgent: mark }
}

export default Post
