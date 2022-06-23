import React from "react";
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos}){
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