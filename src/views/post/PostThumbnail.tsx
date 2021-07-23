import React from 'react'
import { Image } from '@chakra-ui/react'
import { postsImageDirectory } from '../../main/dependencies'

type PostThumbnailProps = { thumbnail: string }

export class PostThumbnail extends React.Component<PostThumbnailProps> {
    imageSrc: string = ''

    constructor(props: PostThumbnailProps) {
        super(props)
        this.setImageSrc()
    }

    setImageSrc() {
        this.imageSrc = this.props.thumbnail
    }

    render() {
        return (
            <Image
                borderRadius='xl'
                src={this.imageSrc}
                width='full'
                maxH='405px'
            />
        )
    }
}
