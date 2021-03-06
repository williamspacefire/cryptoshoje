import { CryptoInformation } from '../entities/cryptointerface'
import ICryptoApi from '../entities/ICryptoApi'

export const nomics_api = '14b4e61072b7f29158a3c747e27d5df1c0a2cf77'
const endpoint = 'https://api.nomics.com/v1/currencies/ticker?'
import queryString from 'query-string'
import { defaultCurrency } from '../use_cases/currency'

export default class NomicsApiImpl implements ICryptoApi {
    private async callNomicsApi(
        ids: string[] = [],
        currency: string = defaultCurrency,
        coinsPerPage: number = 100,
        sort: string = 'rank'
    ): Promise<CryptoInformation[]> {
        const params = this.getUrlParams({
            key: nomics_api,
            'per-page': coinsPerPage,
            convert: currency,
            ids: ids,
            interval: ['1d', '7d', '30d'],
            page: 1,
            sort: sort,
        })
        const cryptoData = await fetch(endpoint + params)
        const cryptoJson: CryptoInformation[] = await cryptoData.json()

        return cryptoJson
    }

    getUrlParams(params: {
        key: string
        ids: string[]
        interval: string[]
        convert: string
        page: number
        'per-page': number
        sort: string
    }): string {
        return queryString.stringify(params)
    }

    async getAll() {
        const cryptos = await this.callNomicsApi()

        return cryptos
    }

    async getSingleCrypto(crypto: string): Promise<CryptoInformation> {
        const id = [crypto.toUpperCase()]
        const response = await this.callNomicsApi(id)
        return response[0]
    }
}
