import { GetStaticProps } from 'next'
import React from 'react'
import Header from '../views/header'
import { CryptoInformation } from '../entities/cryptointerface'
import HomePage from '../views/home'

export const getStaticProps: GetStaticProps = async context => {
    const cryptoData = await fetch(
        'https://api.nomics.com/v1/currencies/ticker?key=14b4e61072b7f29158a3c747e27d5df1c0a2cf77&ids=BTC,ETH&interval=1d,7d,30d&convert=BRL&per-page=100&page=1'
    )
    const cryptoJson = await cryptoData.json()
    console.log(JSON.stringify(cryptoJson))
    return { props: { cryptos: JSON.stringify(cryptoJson) }, revalidate: 1 }
}

export default function IndexPage(props: { cryptos: string }) {
    const data: CryptoInformation[] = JSON.parse(props.cryptos)

    return (
        <>
            <Header />
            <HomePage cryptosData={data} />
        </>
    )
}
