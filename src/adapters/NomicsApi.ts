import { CryptoInformation } from '../entities/cryptointerface'
import ICryptoApi from '../entities/ICryptoApi'

export const nomics_api = '14b4e61072b7f29158a3c747e27d5df1c0a2cf77'

export default class NomicsApiImpl implements ICryptoApi {
    private async callNomicsApi(
        ids: string[] = ['BTC', 'ETH', 'ADA', 'SOL'],
        currency: string = 'BRL'
    ): Promise<CryptoInformation[]> {
        const cryptoData = await fetch(
            `https://api.nomics.com/v1/currencies/ticker?key=${nomics_api}&ids=${ids.toString()}&interval=1d,7d,30d&convert=${currency}&per-page=100&page=1`
        )
        const cryptoJson: CryptoInformation[] = await cryptoData.json()

        return cryptoJson
    }

    async getAll() {
        const cryptos = await this.callNomicsApi()

        return cryptos
    }

    async getSingleCrypto(crypto: string): Promise<CryptoInformation> {
        const id = [crypto]
        const response = await this.callNomicsApi(id)
        return response[0]
    }
}
