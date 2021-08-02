import React from 'react'
import { Post } from '../../entities/Post'
import Image from 'next/image'
import { Badge, Box, Spacer } from '@chakra-ui/layout'
import Link from 'next/link'
import { Button } from '@chakra-ui/button'

export default class PostCard extends React.Component<Post> {
    render() {
        const publishedDate = new Date(this.props.creation_time)

        return (
            <Box
                key={this.props.creation_time}
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
                    src={this.props.thumbnail}
                    width={600}
                    height={350}
                    alt={this.props.title}
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
                            {this.props.tags
                                .filter((_, index) => index < 8)
                                .map((tag, index) => {
                                    return (
                                        <Badge
                                            key={index}
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
                        {this.props.title}
                    </Box>

                    <Box
                        mt='1'
                        color='gray.600'
                        fontSize='sm'
                        lineHeight='tight'
                        isTruncated>
                        {this.props.description}
                    </Box>

                    <Box d='flex' mt='2' alignItems='center'>
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {`${publishedDate.getDay()}/${publishedDate.getMonth()}/${publishedDate.getFullYear()}`}
                        </Box>
                        <Spacer />
                        <Box>
                            <Link href={`/${this.props.canonical}`} passHref>
                                <Button colorScheme='teal' size='sm' as='a'>
                                    Continuar lendo...
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}
