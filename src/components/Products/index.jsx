import { useState, useEffect } from "react"
import { ProductContainer } from "./Products.style"
import fetchProducts from "../../API/fetchProducts"
import ProductCard from "../ProductCard"

function Products () {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response)
        })

    }, [])

    return (
        <ProductContainer>
            {products.map((products) => <ProductCard key={products.id} data={products}/>)}
        </ProductContainer>
    )
}

export default Products