import useSWR from 'swr'
import CryptoTable from './CryptoTable'

const fetcher = (args: RequestInfo) => fetch(args).then(res => res.json())

export default function HomePage() {
    const { data, error } = useSWR('/api/top100', fetcher, {
        refreshInterval: 1000,
    })

    return (
        <>
            <CryptoTable data={data} />
        </>
    )
}
