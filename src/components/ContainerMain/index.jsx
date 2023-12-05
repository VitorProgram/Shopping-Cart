/* eslint-disable react/prop-types */
import { ContainerElement } from "./ContainerMain.styled";

function ContainerMain ({children}) {
    return (
        <ContainerElement>{ children }</ContainerElement>
    )
}

export default ContainerMain