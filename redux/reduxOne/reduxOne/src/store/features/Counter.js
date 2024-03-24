import { DEC, INC } from "../actionTypes"

const initialState = {
    count:0
}

const counterReducer = (state=initialState,action) => {
    if(action.type === INC) {
        return {count: state.count+1}
    }else{
        if(action.type === DEC) {
            return {count: state.count-1}
        }
    }
    return state
}

export default counterReducer