import { CryptoInformation } from './cryptointerface'

export default interface ICryptoApi {
    getAll(): Promise<CryptoInformation[]>
    getSingleCrypto(crypto: string): Promise<CryptoInformation>
}
