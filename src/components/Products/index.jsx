import { useState, useEffect } from "react"
import { ProductContainer } from "./Products.style"
import fetchProducts from "../../API/fetchProducts"
import ProductCard from "../ProductCard"
import Loading from "../Loading"

function Products () {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)   

    useEffect(() => {
        fetchProducts('monitor FHD bordas finas').then((response) => {
            setProducts(response)
            setLoading(false)
        })

    }, [])

    return (
        ( loading && <Loading /> ) || (
            <ProductContainer>
                {/* Iterando sobre cada item do array de produtos e adicionando um indentificador em cada um */}
                {products.map((product) => <ProductCard key={product.id} data={product}/>)}
            </ProductContainer>
        )   
    )
}

export default Products