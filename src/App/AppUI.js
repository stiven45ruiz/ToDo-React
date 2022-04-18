import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreatetodoButton } from "../CreatetodoButton";

function AppUI({
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodo,
        completeTodo,
        deleteTodo,
    }){   
    return(
      <React.Fragment>
        <TodoCounter
          total={totalTodos}//cada ves que cambie cualquier estado, nos envia a totalTodos
          completed={completedTodos}//Nos envia las info de todos completados
        />
        <TodoSearch
          searchValue={searchValue}//Es igaula al valor
          setSearchValue={setSearchValue}// es igual a la función
        />
        <TodoList>
          {searchedTodo.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=> completeTodo(todo.text)}
              onDelete={()=> deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreatetodoButton/>
      </React.Fragment>   
    );
};

export {AppUI};