import { Button } from '@chakra-ui/button'
import { Badge } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PostsMarkdownFileImpl } from '../../adapters/posts'
import { Post } from '../../entities/post_type'

export default function PostPage(props: { posts: Post[] }) {
    const { posts } = props

    return (
        <Flex justify='center' align='center' m={3}>
            {posts.map(post => {
                return (
                    <Box
                        maxW='600px'
                        borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'>
                        <Image
                            src='/image/12.jpg'
                            width={600}
                            height={350}
                            alt='Caroline Rommanel'
                        />

                        <Box p='6'>
                            <Box d='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'>
                                    <Badge
                                        m={2}
                                        borderRadius='full'
                                        px='2'
                                        colorScheme='teal'>
                                        Bot
                                    </Badge>
                                    <Badge
                                        m={2}
                                        borderRadius='full'
                                        px='2'
                                        colorScheme='teal'>
                                        Discord
                                    </Badge>
                                    <Badge
                                        m={2}
                                        borderRadius='full'
                                        px='2'
                                        colorScheme='teal'>
                                        NodeJS
                                    </Badge>
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated>
                                {post.title}
                            </Box>

                            <Box>
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    {post.description}
                                </Box>
                            </Box>

                            <Box d='flex' mt='2' alignItems='center'>
                                <Box
                                    as='span'
                                    ml='2'
                                    color='gray.600'
                                    fontSize='sm'>
                                    7 Meses atrás
                                </Box>
                                <Spacer />
                                <Box>
                                    <Link href={`/${post.canonical}`} passHref>
                                        <Button
                                            colorScheme='teal'
                                            size='sm'
                                            as='a'>
                                            Ler mais...
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </Flex>
    )
}
