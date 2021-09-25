import { GetStaticProps } from 'next'
import React from 'react'
import { chakra, Box, Flex, useColorModeValue, HStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export const getStaticProps: GetStaticProps = async context => {
    const cryptoData = await fetch(
        'https://api.nomics.com/v1/currencies/ticker?key=14b4e61072b7f29158a3c747e27d5df1c0a2cf77&ids=BTC&interval=1d,7d,30d&convert=USD&per-page=100&page=1'
    )
    const cryptoJson = await cryptoData.json()
    console.log(JSON.stringify(cryptoJson))
    return { props: { cryptos: JSON.stringify(cryptoJson) }, revalidate: 1 }
}

export default function IndexPage(props: { cryptos: string }) {
    const data = JSON.parse(props.cryptos)
    const btc = data[0]
    var price_date: string = 'Loading date...'
    var price_time: string = 'Loading time...'
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    if (process.browser) {
        price_date = new Date(btc.price_timestamp).toLocaleDateString()
        price_time = new Date(btc.price_timestamp).toLocaleTimeString()
    }

    return (
        <Flex p={50} w='full' alignItems='center' justifyContent='center'>
            <title>Cryptos Hoje - Seu site de cryptomoedas</title>
            <Flex
                w='xl'
                mx='auto'
                bg={useColorModeValue('white', 'gray.800')}
                shadow='lg'
                rounded='lg'
                overflow='hidden'>
                <Box w={1 / 3} p={4}>
                    <img src={btc.logo_url} width='200px' />
                </Box>

                <Box w={2 / 3} p={{ base: 4, md: 4 }}>
                    <chakra.h1
                        fontSize='2xl'
                        fontWeight='bold'
                        color={useColorModeValue('gray.800', 'white')}>
                        {btc.name}
                    </chakra.h1>

                    <chakra.p
                        mt={2}
                        fontSize='sm'
                        color={useColorModeValue('gray.600', 'gray.400')}>
                        MARKET CAP: {formatter.format(btc.market_cap)}
                        <br />
                        MAX SUPPLY: {btc.max_supply}
                        <br />
                        CIRCULATING SUPPLY: {btc.circulating_supply}
                        <br />
                        PRICE DATE: {price_date + ' ' + price_time}
                    </chakra.p>

                    <Flex
                        mt={3}
                        alignItems='center'
                        justifyContent='space-between'>
                        <chakra.h1
                            //color='white'
                            fontWeight='bold'
                            fontSize='lg'>
                            {formatter.format(btc.price)}
                        </chakra.h1>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}
