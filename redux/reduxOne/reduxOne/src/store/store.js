import {combineReducers ,createStore} from 'redux'
import counterReducer from './features/Counter'
import todoReducer from './features/Todolist'
const finalReducer = combineReducers({c:counterReducer, t: todoReducer}) 

const store = createStore(finalReducer)

export default store