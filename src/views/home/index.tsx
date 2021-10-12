import { CryptoInformation } from '../../entities/cryptointerface'
import CryptoTable from './CryptoTable'

export default function HomePage(props: { cryptosData: CryptoInformation[] }) {
    const data = props.cryptosData

    return (
        <>
            <CryptoTable data={data} />
        </>
    )
}
