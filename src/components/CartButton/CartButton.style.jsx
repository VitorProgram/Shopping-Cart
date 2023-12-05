import styled from "styled-components"

export const CartButtonElement = styled.button`
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border: none;
    background: none;
    cursor: pointer;

    position: relative;
    margin-left: 1.3rem;
    padding: 5px;

    color: #333;
    transition: color .3s;

    &:hover {
        color: #616161;
    }
`

export const CartCounter = styled.span`
    width: 1rem;
    height: 1rem;
    
    position: absolute;
    top: 0;
    left: 0;
    
    background: #f00;
    color: #fff;
    font-size: .7rem; // 11px
    font-weight: 600;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`