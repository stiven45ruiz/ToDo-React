import React from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreatetodoButton } from "./CreatetodoButton";
//import logo from './logo.svg';
//import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar Curso de React', completed: true },
  { text: 'Llorar con la llorona', completed: false }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>
      <CreatetodoButton/>
    </React.Fragment>
  );
}

export default App;
