import { combineReducers } from "redux"
import usersReducer from "./reducer"

const rootReducer = () => 
    combineReducers({
        todos: usersReducer,
    });

export default rootReducer;