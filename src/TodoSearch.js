import React from "react";
import './TodoSearch.css'

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return[
        <input 
            className="todoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            key={onSearchValueChange}
            onChange={onSearchValueChange}
        />,
        <p
            key={searchValue}
        >
            {searchValue}
        </p>
    ];
}

export {TodoSearch}