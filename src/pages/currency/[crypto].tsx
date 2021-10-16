import React from 'react'
import Header from '../../views/header'
import { CryptoInformation } from '../../entities/cryptointerface'
import NomicsApiImpl from '../../adapters/NomicsApi'
import { GetStaticPaths, GetStaticProps } from 'next'
import ConvertComponent from '../../views/crypto/ConvertComponent'
import Head from 'next/head'
import { formatter } from '../../use_cases/currency'
import useSWR, { SWRConfig } from 'swr'

export const getStaticProps: GetStaticProps = async context => {
    const api = new NomicsApiImpl()
    const cryptoName = (await context!.params!.crypto) as string
    const cryptoResponse = await api.getSingleCrypto(cryptoName)

    return {
        props: {
            fallback: {
                '/api/currency/': cryptoResponse,
            },
            cryptoName: cryptoName,
        },
        revalidate: 1000,
    }
}

function CryptoComponent(props: {
    cryptoName: string
    fallback: CryptoInformation
}) {
    const heathers = new Headers()
    heathers.set('X-Currency', props.cryptoName)

    const fetcherOptions = {
        method: 'GET',
        headers: heathers,
    }
    const fetcher = (args: RequestInfo) =>
        fetch(args, fetcherOptions).then(res => res.json())
    const { data, error } = useSWR('/api/currency/', fetcher, {
        refreshInterval: 3000,
    })

    return (
        <>
            <Header />
            <Head>
                {data != undefined ? (
                    <title>
                        {data.name} hoje, preço de{' '}
                        {formatter.format(data.price)} | Cryptos Hoje
                    </title>
                ) : (
                    ''
                )}
            </Head>
            <ConvertComponent crypto={data!} />
        </>
    )
}

export default function IndexPage(props: {
    fallback: CryptoInformation
    cryptoName: string
}) {
    return (
        <SWRConfig value={{ fallback: props.fallback }}>
            <CryptoComponent
                cryptoName={props.cryptoName}
                fallback={props.fallback}
            />
        </SWRConfig>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}
