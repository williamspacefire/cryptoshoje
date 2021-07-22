import React from "react"
import {Heading} from "@chakra-ui/react"

export default class PostTitle extends React.Component<{title: string}> {
    render() {
        return (
            <Heading
                as='h1'
                margin='3'
                fontSize='1.875rem'
                fontWeight='extrabold'>
                {this.props.title}
            </Heading>
        )
    }
}