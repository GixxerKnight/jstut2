export const toDoAdd =(toDo) => {
    return{
        type: "TODO_ADD",
        payload:{
            toDo: toDo
        }
    }
}

export const toDoCheck =(title) => {
    return{
        type: "TODO_CHECK",
        payload: {
            title:title
        }
    }
}