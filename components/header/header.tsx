import { Flex, Box, Heading } from '@chakra-ui/layout'
import {
    IconButton,
    Spacer,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import config from '../../config.json'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AppProps } from 'next/dist/next-server/lib/router/router'

export default function Header(props: { title: string }) {
    const changeThemeIcon = useColorModeValue(<MoonIcon />, <SunIcon />)
    const { toggleColorMode } = useColorMode()
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Flex p={4} justify='center' align='center'>
                <Spacer />
                <Box p='2'>
                    <Heading size='md'>{config.site.name}</Heading>
                </Box>
                <Spacer />
                <Box>
                    <IconButton
                        aria-label='Mudar tema'
                        onClick={toggleColorMode}
                        icon={changeThemeIcon}></IconButton>
                </Box>
            </Flex>
        </>
    )
}
