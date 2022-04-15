import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span>x</span>
            <span className="material-icons-outlined">delete</span>
        </li>
    );
}

export {TodoItem};