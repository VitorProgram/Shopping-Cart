import CartButton from "../CartButton"
import SearchBar from "../SearchBar"
import  { HeaderElement, StyledContainerMain } from "./Header.style"

function Header () {
    return (
        <HeaderElement>
            <StyledContainerMain>

                <SearchBar />
                <CartButton />

            </StyledContainerMain>
        </HeaderElement>
    )
}

export default Header