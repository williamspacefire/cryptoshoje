import { Flex, Box, Heading } from '@chakra-ui/layout'
import {
    IconButton,
    Spacer,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import config from '../../../config'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Header(props: { title: string; homePage?: boolean }) {
    const { title, homePage } = props
    const changeThemeIcon = useColorModeValue(<MoonIcon />, <SunIcon />)
    const { toggleColorMode } = useColorMode()
    const pageTitle = homePage ? title : title + config.site.title

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Flex p={4} justify='center' align='center'>
                <Spacer />
                <Box p='2'>
                    <Link href='/' passHref>
                        <Heading as='a' size='md'>
                            {config.site.name}
                        </Heading>
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <IconButton
                        aria-label='Mudar tema'
                        onClick={toggleColorMode}
                        icon={changeThemeIcon}
                    />
                </Box>
            </Flex>
        </>
    )
}
