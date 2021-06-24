const defaultstate = {
    entries:[{
        title: "defalut todo",
        comment: "Hi",
        checked: true
    },{
        title: "second instance",
        comment: "eeek",
        checked: true
    }]

}
export const toDoReducer =(state = defaultstate,action) =>{
    switch(action.type){
        case "TODO_ADD": 
        state.entries.push(action.payload.toDo)
        return state 
        case "TODO_CHECK":
        break
    }
    return state
}