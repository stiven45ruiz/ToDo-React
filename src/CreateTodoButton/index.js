import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(){
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
export {CreateTodoButton}