import React from "react";
import './NotResults.css'

function NotResults(props){
    
    return(
        <li>
            
            <p>
               no results for {props.searchText}
            </p>
            
        </li>
    )
}

export {NotResults}