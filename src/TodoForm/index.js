import React from "react";
import './TodoForm.css';

function TodoForm({addTodo,setOpenModal}){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = () =>{
      setOpenModal(false)
    };
    const onSubmit = (event) =>{
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false)
    };
    const onChangeArea = (event) =>{
        setNewTodoValue(event.target.value);
    };

    return(
        <form className="modalform" onSubmit={onSubmit}>
            
            <textarea
                className="modalform__input"
                value={newTodoValue}
                onChange={onChangeArea}
                placeholder='E.g: Meet with the team at 9am'
            />
            <div 
                className="modalform__buttons"
            >
                <button
                type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
};

export {TodoForm}