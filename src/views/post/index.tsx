import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import { Post } from '../../entities/Post'
import MarkdownRender from './MarkdownRender'
import { PostThumbnail } from './PostThumbnail'
import PostTitle from './PostTitle'

export default class PostPageContent extends React.Component<Post> {
    render() {
        return (
            <>
                <Flex justify='center' align='center' p='10'>
                    <Box w='3xl'>
                        <VStack spacing='20px'>
                            <PostTitle title={this.props.title} />
                            <PostThumbnail thumbnail={this.props.thumbnail} />
                            <Box>
                                <MarkdownRender {...this.props} />
                            </Box>
                        </VStack>
                    </Box>
                </Flex>
            </>
        )
    }
}
