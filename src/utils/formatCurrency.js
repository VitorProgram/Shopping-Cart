// Função para formatação de strings no formato brasileiro
function formatCurrency (value, currency) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency
    })
}

export default formatCurrency