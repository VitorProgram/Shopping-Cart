import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    
    to {
        transform: rotate(360deg);
    }
`

export const LoadingDiv = styled.div`
    text-align: center;
    width: 100vw;

    & > svg {
        font-size: 2rem;
        margin: 12.5rem auto 0;
        animation: ${spin} 1s linear infinite;
    }
`