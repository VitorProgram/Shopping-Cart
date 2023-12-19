// Consumindo a API
const fetchProducts = async (query) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    const data = await response.json()
    
    return data.results // Selecionando os resultados da pesquisa
}  

export default fetchProducts