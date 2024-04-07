import { Add, DEC, INC } from "./actionTypes"

export const exportTodo = (newTodo) => {
    return {type:Add, payload:newTodo}
}


export const incCount = () => {
    return {type:INC}
}

export const decCount = () => {
    return {type:DEC}
}




