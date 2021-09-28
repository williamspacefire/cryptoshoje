import {
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { ChangeEvent, useState } from 'react'
import { CryptoInformation } from '../../entities/cryptointerface'
import { formatter } from '../../use_cases/currency'
import ConvertComponent from '../crypto/ConvertComponent'

export default function HomePage(props: { cryptosData: CryptoInformation[] }) {
    return (
        <>
            <ConvertComponent crypto={props.cryptosData[0]} />
        </>
    )
}
