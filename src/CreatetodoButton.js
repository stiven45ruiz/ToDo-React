import React from "react";
import './CreatetodoButton.css'

function CreatetodoButton(){
    const onClickButton = (msg) => {
        alert(msg)
    }

    return(
        <button 
            className="CreatetodoButton"
            onClick={() => onClickButton('Abrir modal')}
        >
            +
        </button>
    )
}
export {CreatetodoButton}