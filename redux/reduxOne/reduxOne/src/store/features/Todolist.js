import { compose } from "redux"
import { Add, DEL, DONE } from "../actionTypes"

const initialState = {
    todo: [
        {
            task: 'conding',
            isDone: true
        },
        {
            task: 'gym',
            isDone: false
        },
        {
            task: 'breakfast',
            isDone: true
        },
    ]
}

const todoReducer = (state=initialState, action) => {
    if(action.type === Add) {
        return {
            ...state,
            todo: [...state.todo, action.payload]
        }
    }
    if(action.type === DONE) {
        var temp = [...state.todo]
        console.log(temp[action.index].isDone)
        temp[action.index].isDone = !temp[action.index].isDone
        return {...state, todo: [...temp]}
    }
    if(action.type === DEL) {
        console.log(action.index)
        var tem = [...state.todo]
        tem.splice(action.index,1)
        console.log(tem)
        return {
            ...state,
            todo:[...tem]
        }
    }
    return state
}

export default todoReducer