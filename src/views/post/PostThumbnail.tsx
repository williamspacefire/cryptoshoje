import React from 'react'
import { Image } from '@chakra-ui/react'

type PostThumbnailProps = { thumbnail: string }

export class PostThumbnail extends React.Component<PostThumbnailProps> {
    render() {
        return (
            <Image
                borderRadius='xl'
                src={this.props.thumbnail}
                width='full'
                maxH='405px'
            />
        )
    }
}
