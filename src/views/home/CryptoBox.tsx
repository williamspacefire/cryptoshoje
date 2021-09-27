import { Box, chakra, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import { CryptoInformation } from '../../entities/cryptointerface'
import { formatter } from '../../use_cases/currency'

export default function CryptoBox(props: {
    cryptoinformation: CryptoInformation
}) {
    const crypto = props.cryptoinformation
    var price_date: string = 'Loading date...'
    var price_time: string = 'Loading time...'

    if (process.browser) {
        price_date = new Date(crypto.price_timestamp).toLocaleDateString()
        price_time = new Date(crypto.price_timestamp).toLocaleTimeString()
    }

    return (
        <Flex p={50} w='full' alignItems='center' justifyContent='center'>
            <Flex
                w='xl'
                mx='auto'
                bg={useColorModeValue('white', 'gray.800')}
                shadow='lg'
                rounded='lg'
                overflow='hidden'>
                <Box w={1 / 3} p={4}>
                    <Image src={crypto.logo_url} width='200px' height='150px' />
                </Box>

                <Box w={2 / 3} p={{ base: 4, md: 4 }}>
                    <chakra.h1
                        fontSize='2xl'
                        fontWeight='bold'
                        color={useColorModeValue('gray.800', 'white')}>
                        {crypto.name}
                    </chakra.h1>

                    <chakra.p
                        mt={2}
                        fontSize='sm'
                        color={useColorModeValue('gray.600', 'gray.400')}>
                        MARKET CAP: {formatter.format(crypto.market_cap)}
                        <br />
                        MAX SUPPLY: {crypto.max_supply}
                        <br />
                        CIRCULATING SUPPLY: {crypto.circulating_supply}
                        <br />
                        PRICE DATE: {price_date + ' ' + price_time}
                    </chakra.p>

                    <Flex
                        mt={3}
                        alignItems='center'
                        justifyContent='space-between'>
                        <chakra.h1 fontWeight='bold' fontSize='lg'>
                            {formatter.format(crypto.price)}
                        </chakra.h1>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}
