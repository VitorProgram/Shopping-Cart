import styled from "styled-components";
import { ContainerElement } from "../ContainerMain/ContainerMain.style";

export const HeaderElement = styled.header`
    background: #fff159;

    position: fixed;
    z-index: 1;
    width: 100%;
`

export const StyledContainerMain = styled(ContainerElement)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.875rem; // 30px
`