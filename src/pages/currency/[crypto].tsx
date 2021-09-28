import React from 'react'
import Header from '../../views/header'
import { CryptoInformation } from '../../entities/cryptointerface'
import HomePage from '../../views/home'
import NomicsApiImpl from '../../adapters/NomicsApi'
import { GetStaticPaths, GetStaticProps } from 'next'
import ConvertComponent from '../../views/crypto/ConvertComponent'
import Head from 'next/head'
import { formatter } from '../../use_cases/currency'

export const getStaticProps: GetStaticProps = async context => {
    const api = new NomicsApiImpl()
    const cryptoName = context!.params!.crypto as string
    console.log('CryptoName: ' + cryptoName)
    const cryptoResponse = await api.getSingleCrypto(cryptoName.toUpperCase())
    return { props: { cryptos: JSON.stringify(cryptoResponse) }, revalidate: 1 }
}

export default function IndexPage(props: { cryptos: string }) {
    var data: CryptoInformation | null = null
    if (props.cryptos != undefined) {
        data = JSON.parse(props.cryptos) as CryptoInformation
    }

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

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}
