import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter(){

    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h3 
            className="TodoCounter"
        >
            Haz completado {completedTodos} de {totalTodos} TODOs
        </h3>
    );
};

export {TodoCounter};