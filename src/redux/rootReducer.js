import todoReducer from "../redux/todos/reducer";
import filterReducer from "../redux/filters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
});

export default rootReducer;