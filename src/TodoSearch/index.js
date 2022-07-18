import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue, loading}){

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
            key={onSearchValueChange}
            className="todoSearch" 
            placeholder="Filter a todo"
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    )
}

export {TodoSearch}