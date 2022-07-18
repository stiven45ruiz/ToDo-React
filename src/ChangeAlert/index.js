import React from "react";
import { useStorageListener } from "./useStorageListener";

import './ChangeAlert.css'

function ChangeAlert({sincronize}){
  const {show, toggleShow} = useStorageListener(sincronize);


  if(show){
    return(
      <div className="alert">
        <p className="alert__text">It seems that there were changes in the ToDos, do you want to reload?</p>
        <button
          className="alert__button"
          onClick={()=> toggleShow(false)}
        >
          Refresh
        </button>
      </div>
    )
  }else{
    return null
  }
}



export { ChangeAlert }