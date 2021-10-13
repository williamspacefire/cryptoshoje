import { NextApiRequest, NextApiResponse } from 'next'
import NomicsApiImpl from '../../adapters/NomicsApi'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const api = new NomicsApiImpl()
    const apiData = await api.getAll()

    res.status(200).json(apiData)
}
