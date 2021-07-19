import { Button } from '@chakra-ui/button'
import { Badge } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../../entities/Post'
import { postsImageDirectory } from '../../pages/[post]'

export default function PostPage(props: { posts: Post[] }) {
    const { posts } = props

    return (
        <Flex justify='center' align='center' m={3} direction='column'>
            {posts.map(post => {
                const publishedDate = new Date(post.creation_time)
                return (
                    <Box
                        maxW={{
                            base: '100%',
                            sm: 'sm',
                            md: 'md',
                            lg: 'lg',
                            xl: 'xl',
                        }}
                        borderWidth='1px'
                        borderRadius='lg'
                        marginBottom='8'
                        overflow='hidden'>
                        <Image
                            src={postsImageDirectory + post.thumbnail}
                            width={600}
                            height={350}
                            alt={post.title}
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
                                    {post.tags
                                        .filter((_, index) => index < 8)
                                        .map(tag => {
                                            return (
                                                <Badge
                                                    m={2}
                                                    borderRadius='full'
                                                    px='2'
                                                    colorScheme='teal'>
                                                    {tag}
                                                </Badge>
                                            )
                                        })}
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

                            <Box
                                mt='1'
                                color='gray.600'
                                fontSize='sm'
                                lineHeight='tight'
                                isTruncated>
                                {post.description}
                            </Box>

                            <Box d='flex' mt='2' alignItems='center'>
                                <Box
                                    as='span'
                                    ml='2'
                                    color='gray.600'
                                    fontSize='sm'>
                                    {`${publishedDate.getDay()}/${publishedDate.getMonth()}/${publishedDate.getFullYear()}`}
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
