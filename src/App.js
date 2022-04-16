import React from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreatetodoButton } from "./CreatetodoButton";
//import logo from './logo.svg';
//import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar Curso de React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Tomar cafe', completed: false }
];



function App() {

  const [todos, setTodos] = React.useState(defaultTodos); 
  //Para que se puesdan cambiar los estados de los todos
  //siendo igual a default todos-
  const [searchValue, setSearchValue] = React.useState('');
  ///Lama al estado de search input


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  //Cada ves que Se complete un todo,se hace de nuevo el filtro y se cuenta
  const totalTodos = todos.length;//total de todos


  let searchedTodo = [];
  ///Busca y filtra todos
  if (!searchValue.length >= 1){
    searchedTodo = todos; //Si comple, muestra la lista por defectos
  }else {
    searchedTodo = todos.filter(todo=>{//llama al aray de todos
      const todoText = todo.text.toLowerCase();//combierte texto del array a minusculas
      const searchText = searchValue.toLowerCase();//combierte texto del input a minusculas
      return todoText.includes(searchText);//retorna los array que uncluyyen lo que se escribio en el input
    });
    
  }


  const completeTodo = (text) =>{//Recube el texto del todo
    const todoIndex = todos.findIndex(todo => todo.text === text); //examina que todos coninciden el texto enviado
    const newTodos = [...todos];//clona los todos
    newTodos[todoIndex].completed = true//asigna true a la propiedad complete del array todos
    setTodos(newTodos); //actualiza el estado para volver a renderizar

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // }
  }
  const deleteTodo = (text) =>{//Recube el texto del todo
    const todoIndex = todos.findIndex(todo => todo.text === text); //examina que todos coninciden el texto enviado
    const newTodos = [...todos];//clona los todos
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos); //actualiza el estado para volver a renderizar
  };

  return (
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
}

export default App;
