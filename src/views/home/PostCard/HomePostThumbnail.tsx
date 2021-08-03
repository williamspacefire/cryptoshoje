import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/layout'
import { ChakraProps } from '@chakra-ui/system'

type PostThumbnailProps = {
    thumbnailUrl: string
}

export default class HomePostThumbnail extends React.Component<PostThumbnailProps> {
    style: ChakraProps = {
        h: '210px',
        bg: 'gray.100',
        mt: -6,
        mx: -6,
        mb: 6,
        pos: 'relative',
    }

    render() {
        return (
            <Box {...this.style}>
                <Image src={this.props.thumbnailUrl} layout={'fill'} />
            </Box>
        )
    }
}
