import {
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Skeleton,
    SkeletonCircle,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { CryptoInformation } from '../../../entities/cryptointerface'
import { formatter } from '../../../use_cases/currency'

export default function ConvertComponent(props: { crypto: CryptoInformation }) {
    const defaultCrypto = props.crypto
    const [cotation, setCotation] = useState(Number(defaultCrypto?.price))
    const [quantity, setQuantity] = useState(1)
    const [value, setValue] = useState(cotation)

    function handleQuantityChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        setQuantity(Number(value))
        setValue(cotation * quantity)
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setQuantity(quantity)
            setValue(cotation * quantity)
        }, 1)

        return () => clearTimeout(timeOut)
    }, [quantity])

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (defaultCrypto != undefined) {
                setCotation(Number(defaultCrypto.price))
                setValue(Number(defaultCrypto.price) * quantity)
                setQuantity(quantity)
            }
        }, 1)

        return () => clearTimeout(timeOut)
    }, [defaultCrypto])

    return (
        <>
            <VStack marginTop='14'>
                {defaultCrypto != undefined ? (
                    <Image
                        marginBottom='4'
                        width='150px'
                        height='150px'
                        src={defaultCrypto.logo_url}
                    />
                ) : (
                    <SkeletonCircle width='150px' height='150px' />
                )}
                <Stack width='70%' spacing={4}>
                    <Text>Cotação:</Text>
                    {defaultCrypto != undefined ? (
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1em'
                                children='R$'
                            />
                            <Input
                                disabled={true}
                                value={formatter
                                    .format(cotation)
                                    .replace('R$', '')}
                                variant='filled'
                                placeholder='Cotação'
                            />
                        </InputGroup>
                    ) : (
                        <Skeleton height='40px' spacing='4' />
                    )}
                    <Text>Quantidade:</Text>
                    {defaultCrypto != undefined ? (
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1em'
                                children={defaultCrypto.id}
                            />
                            <Input
                                variant='filled'
                                type='number'
                                value={Number(quantity)}
                                onChange={handleQuantityChange}
                                placeholder={defaultCrypto.name + 'quantidade'}
                            />
                        </InputGroup>
                    ) : (
                        <Skeleton height='40px' spacing='4' />
                    )}

                    <Text>Valor</Text>
                    {defaultCrypto != undefined ? (
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1em'
                                children='R$'
                            />
                            <Input
                                value={formatter
                                    .format(value)
                                    .replace('R$', '')}
                                variant='filled'
                                disabled={true}
                            />
                        </InputGroup>
                    ) : (
                        <Skeleton height='40px' spacing='4' />
                    )}
                </Stack>
            </VStack>
        </>
    )
}
