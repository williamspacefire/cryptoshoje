import { GetServerSideProps } from 'next'
import React from 'react'
import Header from '../views/header'
import { CryptoInformation } from '../entities/cryptointerface'
import HomePage from '../views/home'
import NomicsApiImpl from '../adapters/NomicsApi'

export const getServerSideProps: GetServerSideProps = async context => {
    const api = new NomicsApiImpl()
    const cryptoResponse = await api.getAll()
    return { props: { cryptos: JSON.stringify(cryptoResponse) } }
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
