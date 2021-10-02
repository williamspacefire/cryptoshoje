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
                                            href={`/currency/${crypto.id}`}
                                            passHref>
                                            <a>{crypto.name}</a>
                                        </Link>
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
                        <Th>Preço</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </>
    )
}
