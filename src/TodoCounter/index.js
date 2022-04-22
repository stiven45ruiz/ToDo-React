import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter(){

    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return[
        <h2 
            className="greetings"
        >
            What's up
        </h2>,
        <h3 
            className="TodoCounter"
        >
            You have completed {completedTodos} of {totalTodos} TODOs
        </h3>
    ];
};

export {TodoCounter};