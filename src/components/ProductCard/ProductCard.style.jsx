import styled from "styled-components";

export const ProductImage = styled.img`
    width: 100%;
`

// Informações do produto
export const ProductInforms = styled.div`
    padding: 1.25rem;
    border-top: 1px solid #ddd;
`
export const ProductInformsPrice = styled.h2`
    font-size: 1.875rem; 
    font-weight: 400;
    display: block;
    margin-bottom: .625rem; // 10px
`
export const ProductInformsTitle = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;

    color: rgba(0, 0, 0, 0.5);
`

// Botão de adição ao carrinho
export const ProductButtonAddCart = styled.button`
    position: absolute;
    top: 0;
    right: 0;

    margin: .75rem 1rem 0 0;
    
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #0d5dd6;
    background: rgba(255, 255, 255, 0.8);

    font-size: 1.3rem;
    cursor: pointer;
    transition: .3s box-shadow;

    &:hover {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
`

export const ProductContainer = styled.div`
    width: 100%;
    max-width: 18.75rem; // 300px
    margin: 0 auto;

    position: relative;

    background: #fff;
    display: flex;
    flex-direction: column;

    cursor: pointer;

    // Adicionando animação do opacity do botão de adicionar ao carrinho
    ${ProductButtonAddCart} {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    &:hover {
        ${ProductButtonAddCart} {
            opacity: 1;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
    }
`