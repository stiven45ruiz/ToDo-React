import React from "react";
//import logo from './logo.svg';
//import './App.css';

const todos = [
  { text: 'Cortar cebolla', complete: false },
  { text: 'Tomar Curso de React', complete: false },
  { text: 'Llorar con la llorona', complete: false }
]

function App() {
  return (
    <React.Fragment>
      {/*<TodoCounter/>*/}
      <h2>Has completado 2 de 3 TODOs</h2>
      {/* <TodoSearch/> */}
      <input placeholder="Cebolla"/>
      {/* <TodoList>
        {todos.map(todo => (
          <todoItem/>
        ))}
      </TodoList> */}
      {/* <CreatetodoButton/> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
