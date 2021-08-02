import { Button } from '@chakra-ui/button'
import { Badge } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Post } from '../../entities/Post'
import PostCard from './PostCard'

type HomePageContentProps = {
    posts: Post[]
}

export default class HomePageContent extends React.Component<HomePageContentProps> {
    render() {
        return (
            <Flex justify='center' align='center' m={3} direction='column'>
                {this.props.posts.map((post, index) => {
                    return <PostCard key={index} {...post} />
                })}
            </Flex>
        )
    }
}
