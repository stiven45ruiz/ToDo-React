import React from "react";
import './TodoCounter.css'

function TodoCounter({total, completed}){
    return(
        <h3 className="TodoCounter">Haz completado {completed} de {total} TODOs</h3>
    );
};

export {TodoCounter};