import React from 'react';
import {useTodos} from './useTodos'

import { Header } from '../Header';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm'
import { CreateTodoButton } from '../CreateTodoButton';
import { LoadingSkeleton } from '../Skeleton/LoadingSkeleton';
import { NotResults } from "../Skeleton/NotResults";
import { CreateLastTodo } from '../Skeleton/CreateLastTodo';
import { Footer } from '../Footer'
import { Modal } from '../modal';
import { ChangeAlert } from '../ChangeAlert';



// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,

  } = useTodos();
  
  return (
    <React.Fragment>

      <Header
        loading={loading}
      >
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
      </Header>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        
        onError={()=> <p>Desespérate, hubo un error...</p>}
        onLoading={() => <LoadingSkeleton/>}
        onEmotyTodos={() => <CreateLastTodo/>}
        onEmotySearchReslts={
            (searchText) => <NotResults searchText={searchText}
          />}
        
        // Con la validacion en el componenete TodoList se puede usar tanto 
        // props.render como props.children

        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >

        {/*Con la validacion en el componenete TodoList se puede usar tanto 
        props.render como props.children */}

        {/* {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
      </TodoList>
        
      {!!openModal &&(
        <Modal>
          <TodoForm 
            addTodo={addTodo}
          />
      </Modal>
      )}

      <CreateTodoButton 
        addTodo={addTodo}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
      <Footer/>
      
    </React.Fragment>
  );
}

export default App;