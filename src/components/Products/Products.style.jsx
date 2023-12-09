import styled from "styled-components";
import { ContainerElement } from "../ContainerMain/ContainerMain.style";

export const ProductContainer = styled(ContainerElement)`
    padding: 120px 20px 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
`