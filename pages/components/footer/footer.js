import { Flex } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import config from '../../../config.json'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <Flex justify='center' align='center'>
            <Box p={8}>
                Copyright ©{' '}
                <Link href={config.spacefire.link} isExternal>
                    Spacefire
                </Link>{' '}
                {year}.
            </Box>
        </Flex>
    )
}
