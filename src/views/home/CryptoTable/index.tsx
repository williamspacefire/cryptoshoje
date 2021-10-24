import { Avatar } from '@chakra-ui/avatar'
import {
    Table,
    TableCaption,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/table'
import { CryptoInformation } from '../../../entities/cryptointerface'
import { formatter } from '../../../use_cases/currency'
import Link from 'next/link'
import { Progress } from '@chakra-ui/progress'
import { Text } from '@chakra-ui/layout'

export default function CryptoTable(props: { data: CryptoInformation[] }) {
    return (
        <>
            <Table variant='simple'>
                <TableCaption>Top cryptocurrencies by marketcap</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Ranking</Th>
                        <Th>Logo</Th>
                        <Th>Nome</Th>
                        <Th>Em Circulação</Th>
                        <Th>Preço</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.data.map((crypto, index) => {
                        return (
                            <>
                                <Tr>
                                    <Td>{index + 1}</Td>
                                    <Td>
                                        <Avatar
                                            bg='white'
                                            size='md'
                                            name={crypto.name}
                                            src={crypto.logo_url}
                                        />
                                    </Td>
                                    <Td>
                                        <Link
                                            href={`/currency/${crypto.id.toLocaleLowerCase()}`}
                                            passHref>
                                            <a>{crypto.name}</a>
                                        </Link>
                                    </Td>
                                    <Td>
                                        <Text>
                                            {new Intl.NumberFormat(
                                                'pt-BR'
                                            ).format(
                                                crypto.circulating_supply
                                            )}{' '}
                                            {crypto.id}
                                        </Text>
                                        {crypto.max_supply ? (
                                            <>
                                                <Progress
                                                    value={
                                                        (crypto.circulating_supply *
                                                            100) /
                                                        crypto.max_supply
                                                    }
                                                    size='sm'
                                                    colorScheme='pink'
                                                />
                                                <Text>
                                                    {new Intl.NumberFormat(
                                                        'pt-br',
                                                        {
                                                            maximumSignificantDigits: 4,
                                                        }
                                                    ).format(
                                                        (crypto.circulating_supply *
                                                            100) /
                                                            crypto.max_supply
                                                    )}
                                                    %
                                                </Text>
                                            </>
                                        ) : (
                                            ''
                                        )}
                                    </Td>
                                    <Td>{formatter.format(crypto.price)}</Td>
                                </Tr>
                            </>
                        )
                    })}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Ranking</Th>
                        <Th>Logo</Th>
                        <Th>Nome</Th>
                        <Th>Em Circulação</Th>
                        <Th>Preço</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </>
    )
}
