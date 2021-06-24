
    import { combineReducers } from 'redux';
    import {toDoReducer} from "./reducers/toDoReducer"

    const rootReducer = combineReducers({
        toDos: toDoReducer

    });

    export default rootReducer;