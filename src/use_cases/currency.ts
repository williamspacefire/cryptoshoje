export const defaultCurrency = 'USD'

export const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: defaultCurrency,
})
