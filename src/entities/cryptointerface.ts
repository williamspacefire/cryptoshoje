export interface oneDay {
    volume: string
    price_change: string
    price_change_pct: string
    volume_change: string
    volume_change_pct: string
    market_cap_change: string
    market_cap_change_pct: string
}

export interface sevenDays {
    volume: string
    price_change: string
    price_change_pct: string
    volume_change: string
    volume_change_pct: string
    market_cap_change: string
    market_cap_change_pct: string
}

export interface thirtyDays {
    volume: string
    price_change: string
    price_change_pct: string
    volume_change: string
    volume_change_pct: string
    market_cap_change: string
    market_cap_change_pct: string
}

export interface CryptoInformation {
    id: string
    currency: string
    symbol: string
    name: string
    logo_url: string
    status: string
    price: bigint
    price_date: Date
    price_timestamp: Date
    circulating_supply: number
    max_supply: number
    market_cap: bigint
    market_cap_dominance: string
    num_exchanges: string
    num_pairs: string
    num_pairs_unmapped: string
    first_candle: Date
    first_trade: Date
    first_order_book: Date
    rank: string
    rank_delta: string
    high: string
    high_timestamp: Date
    '1d': oneDay
    '7d': sevenDays
    '30d': thirtyDays
}
