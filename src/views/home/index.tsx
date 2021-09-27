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

export default function HomePage(props: { cryptosData: CryptoInformation[] }) {
    const defaultCrypto = props.cryptosData[0]
    const [cotation, setCotation] = useState(Number(defaultCrypto.price))
    const [quantity, setQuantity] = useState(1)
    const [value, setValue] = useState(cotation * quantity)

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

    return (
        <>
            <VStack marginTop='14'>
                <Image
                    marginBottom='4'
                    width='150px'
                    height='150px'
                    src={defaultCrypto.logo_url}
                />
                <Stack width='70%' spacing={4}>
                    <Text>Cotação:</Text>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1em'
                            children='R$'
                        />
                        <Input
                            disabled={true}
                            value={formatter.format(cotation).replace('R$', '')}
                            variant='filled'
                            placeholder='Cotação'
                        />
                    </InputGroup>
                    <Text>Quantidade:</Text>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1em'
                            children='BTC'
                        />
                        <Input
                            variant='filled'
                            type='number'
                            value={Number(quantity)}
                            onChange={handleQuantityChange}
                            placeholder={defaultCrypto.name + 'quantidade'}
                        />
                    </InputGroup>

                    <Text>Valor</Text>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1em'
                            children='R$'
                        />
                        <Input
                            value={formatter.format(value).replace('R$', '')}
                            variant='filled'
                            disabled={true}
                        />
                    </InputGroup>
                </Stack>
            </VStack>
        </>
    )
}
