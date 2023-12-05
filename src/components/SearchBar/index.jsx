import { useState } from "react";

import { SearchBarContainer, InputSearch, SearchButton } from "./SearchBar.style"
import { MdSearch } from "react-icons/md";

function SearchBar () {
    const [searchValue, setSearchValue] = useState('')

    return (
        <SearchBarContainer>
            <InputSearch
                type="search"
                value={searchValue}
                placeholder="Buscar Produtos"
                onChange={ ({ target }) => setSearchValue(target.value) }
                required
            />

            { searchValue }

            <SearchButton type="submit">
                {/* Ícone de pesquisa */}
                <MdSearch /> 
            </SearchButton>
        </SearchBarContainer>
    )
}

export default SearchBar