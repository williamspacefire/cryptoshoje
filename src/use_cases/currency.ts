export const defaultCurrency = 'BRL'

export const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: defaultCurrency,
})
