import React from "react"

function ToDoItem(props){
    return(
        <div index={props.key}>
            <p>index: {props.index}</p>
          <p>{props.title}</p>
          <p>{props.comment}</p>
        </div>
    )
}

export default ToDoItem


