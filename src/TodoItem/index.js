import React from "react";
import './TodoItem.css'

function TodoItem(props){

    const onDelete = ()=>{
        alert(`Borraste el todo ${props.text}`)
    };

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <ion-icon 
                    size="large" 
                    name="checkbox-outline"
                >
                </ion-icon>
            </span>
    
            
            

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <ion-icon size="large" name="close-circle"></ion-icon>
            </span>
        </li>
    );
}

export {TodoItem};