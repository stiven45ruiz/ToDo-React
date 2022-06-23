import React from "react";
import './TodoList.css'

function TodoList(props){
  const renderFunc = props.render || props.children

  return(
    <section className="TodoList">

      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      
      {(!props.loading && !props.totalTodos) && props.onEmotyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmotySearchReslts(props.searchValue)}


      {props.searchedTodos.map(renderFunc)}


      {/* {props.children} */}
    </section>
  )
};

export {TodoList}