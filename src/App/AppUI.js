import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoForm} from '../TodoForm'
import {CreateTodoButton } from '../CreateTodoButton';
import {LoadingSkeleton} from '../Skeleton/LoadingSkeleton';
import {NotResults} from "../Skeleton/NotResults";
import {CreateLastTodo} from '../Skeleton/CreateLastTodo';
import {Footer} from '../Footer'

import { Modal } from '../modal';


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,

  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
 
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && new Array(3).fill(1).map((a, i) => <LoadingSkeleton key={i}/>)}
        {(!loading && !searchedTodos.length) && <NotResults/>}
        {(!loading && !searchedTodos.length) && <CreateLastTodo/>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
        
      {!!openModal &&(
        <Modal>
          <TodoForm/>
      </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      <Footer/>
    </React.Fragment>
  );
}

export { AppUI };