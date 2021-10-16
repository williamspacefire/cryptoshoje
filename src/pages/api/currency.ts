import { NextApiRequest, NextApiResponse } from 'next'
import NomicsApiImpl from '../../adapters/NomicsApi'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const currency = req.headers['x-currency']

    if (currency) {
        const api = new NomicsApiImpl()
        const apiData = await api.getSingleCrypto(currency as string)

        res.status(200).json(apiData)
    } else {
        res.status(400).json({
            error: true,
            message: 'Currency not set',
        })
    }
}
