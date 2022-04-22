import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

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
                placeholder='Cortar cebolla'
            />
            <div 
                className="modalform__buttons"
            >
                <button
                type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
};

export {TodoForm}