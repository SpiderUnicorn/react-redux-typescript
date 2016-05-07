import { INCREMENT } from '../constants/actionTypes'

const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            // make a copy of state with new properties
            return Object.assign({}, state, {
                count: state.count + 1
            })
        default:
            // return the previous state on any unknown action
            return state
    }
}

export default counterReducer
