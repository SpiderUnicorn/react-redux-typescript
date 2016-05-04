import { write } from '../actions/actions'

const initialState = {
    text: 'init'
}

// default syntax
// first call to redux is with state === 'undefined'
// which will be replaced with the initialState
function helloWorld(state = initialState, action) {
    switch (action.type) {
        case WRITE:
            // make a copy of state with new properties
            return Object.assign({}, state, {
                text: action.text
            })
        default:
            // return the previous state on any unknown action
            return state
    }
}


export default helloWorld
