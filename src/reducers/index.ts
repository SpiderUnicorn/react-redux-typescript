import { SAVE_RECIPE } from 'actions/actionTypes'
import { Reducer } from 'redux'
import { IAction } from 'actions'

export interface IApplicationState {
    recipes: Array<IRecipe>
}

export interface IRecipe {
    title: string,
    description: string
}

const initialState: IApplicationState = { 
    recipes: [ 
        { 
            title: "Demo",
            description: "This is overridden in createStore"
        }
    ]
}

function counterReducer(state = initialState, action:IAction): IApplicationState {
    switch(action.type) {
    case SAVE_RECIPE:
        return combine(state, { recipes: [...state.recipes, action.payload] }) 
    default:
            // return the previous state on any unknown action
        return state
    }
}

function combine(firstObject, secondObject) {
    return Object.assign({}, firstObject, secondObject);
}

export default counterReducer
