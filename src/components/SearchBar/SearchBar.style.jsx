import styled from "styled-components"

// Form 
export const SearchBarContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #fff;
    width: 100%;
    max-width: 31.25rem; // 500px

    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`
export const InputSearch = styled.input`
    font-weight: 500;
    font-size: .8125rem; 

    padding: .8125rem;
    flex: 1;

    border: none;
    border-right: 1px solid #ddd;
    outline: none;
`
export const SearchButton = styled.button`
    background: none;
    color: #333;
    border: none;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8125rem; // 13px

    cursor: pointer;
    transition: color .3s;

    &:hover {
        color: #616161;
    }
`