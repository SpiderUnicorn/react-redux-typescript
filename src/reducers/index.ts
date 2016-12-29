import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants/actionTypes'
import { Reducer } from 'redux'
import { IAction } from 'actions'

export interface IApplicationState {
    count: number
}

const initialState: IApplicationState = { count: 0 }

function counterReducer(state = initialState, action:IAction): IApplicationState {

    switch(action.type) {
    case INCREMENT_COUNTER:
            // make a copy of state with new properties
        return combine(state, {
            count: state.count + 1
        })
    case DECREMENT_COUNTER:
        return combine(state, {
            count: state.count - 1
        })
    default:
            // return the previous state on any unknown action
        return state
    }
}

function combine(firstObject, secondObject) {
    return Object.assign({}, firstObject, secondObject);
}

export default counterReducer
