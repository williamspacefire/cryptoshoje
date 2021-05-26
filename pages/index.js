import { Button } from '@chakra-ui/button'
import { Heading } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'

export default function Index() {
    return (
        <Flex p={4}>
            <Box p='2'>
                <Heading size='md'>Compilado{'()'};</Heading>
            </Box>
            <Spacer />
            <Box>
                <Link>Sobre</Link>
            </Box>
        </Flex>
    )
}
