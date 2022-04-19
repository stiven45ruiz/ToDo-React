import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
            key={onSearchValueChange}
            className="todoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch}