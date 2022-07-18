import React from "react";
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos, loading}){
  return(
    <React.Fragment>
      <h2 
        className="greetings"
      >
        What's up
      </h2>,
      <h3 
        className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
      >
        You have completed {completedTodos} of {totalTodos} TODOs
      </h3>
    </React.Fragment>
  );
};

export {TodoCounter};