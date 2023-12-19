/* eslint-disable react/prop-types */
import { ProductButtonAddCart, ProductContainer, ProductImage, ProductInforms, ProductInformsPrice, ProductInformsTitle } from "./ProductCard.style"
import { FaCartPlus  } from "react-icons/fa";

import propTypes from 'prop-types'
import formatCurrency from "../../utils/formatCurrency"; // Função de formatação de texto para BRL

function ProductCard ({ data }) {
    const { price, title, thumbnail } = data

    return (
        <ProductContainer>
            <ProductImage src={ thumbnail.replace(/\w\.jpg/gi, 'W.jpg') } alt="Imagem do Produto"/>

            <ProductInforms>
                <ProductInformsPrice>{ formatCurrency(price, 'BRL') }</ProductInformsPrice>

                <ProductInformsTitle>{ title }</ProductInformsTitle>
            </ProductInforms>
            
            <ProductButtonAddCart type="button">
                <FaCartPlus />
            </ProductButtonAddCart>
        </ProductContainer>
    )
}

export default ProductCard

ProductCard.propTypes = {
    data: propTypes.shape({})
}