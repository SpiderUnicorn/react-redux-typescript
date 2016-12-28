import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants/actionTypes'
import { IState } from './IState'

const initialState:IState = { count: 0 }

function counterReducer(state:IState = initialState, action:any) {
    switch(action.type) {
    case INCREMENT_COUNTER:
            // make a copy of state with new properties
        return Object.assign({}, state, {
            count: state.count + 1
        })
    case DECREMENT_COUNTER:
        return Object.assign({}, state, {
            count: state.count - 1
        })
    default:
            // return the previous state on any unknown action
        return state
    }
}

export default counterReducer
