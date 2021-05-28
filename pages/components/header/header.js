import { Flex, Box, Heading } from '@chakra-ui/layout'
import Head from 'next/head'
import config from '../../../config.json'

export default function Header(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Flex p={4} justify='center' align='center'>
                <Box p='2'>
                    <Heading size='md'>{config.site.name}</Heading>
                </Box>
            </Flex>
        </>
    )
}
