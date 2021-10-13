import { GetStaticProps } from 'next'
import React from 'react'
import Header from '../views/header'
import { CryptoInformation } from '../entities/cryptointerface'
import HomePage from '../views/home'
import NomicsApiImpl from '../adapters/NomicsApi'
import { SWRConfig } from 'swr'

export const getStaticProps: GetStaticProps = async _ => {
    const api = new NomicsApiImpl()
    const cryptoResponse = await api.getAll()

    return {
        props: {
            fallback: {
                '/api/top100': cryptoResponse,
            },
        },
    }
}

export default function IndexPage(props: { fallback: CryptoInformation[] }) {
    return (
        <SWRConfig value={{ fallback: props.fallback }}>
            <Header />
            <HomePage />
        </SWRConfig>
    )
}
