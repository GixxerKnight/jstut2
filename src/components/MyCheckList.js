import React from "react"
import ToDoItem from "./ToDoItem"
import { connect } from "react-redux"
import { toDoAdd, toDoCheck } from "../redux/actions/toDoActions"

const MyCheckList = (props) => {
  const handleAddClick = () => {
    props.toDoAdd({
      title: "Add Me!",
      comment: "new comment",
      checked: false
    })
  }

  return (
    <div>
      {/* <ToDoItem /> */}
      <button onClick={handleAddClick}>Add To Do List </button>
      {props.toDos.entries.map((toDo, index) => <ToDoItem index={index} title={toDo.title} comment={toDo.comment} />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    toDos: state.toDos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toDoAdd: (toDo) => dispatch(toDoAdd(toDo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCheckList)