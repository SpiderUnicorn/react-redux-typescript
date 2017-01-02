import { SAVE_RECIPE } from 'actions/actionTypes';
import { Reducer } from 'redux';
import { Action } from 'actions';

export interface ApplicationState {
    recipes: Recipe[]
}

export interface Recipe {
    title: string,
    description: string
}

const initialState: ApplicationState = {
    recipes: [
        {
            title: 'Demo',
            description: 'This is overridden in createStore'
        }
    ]
};

function counterReducer(state = initialState, action: Action): ApplicationState {
    switch (action.type) {
    case SAVE_RECIPE:
        return combine(state, { recipes: [...state.recipes, action.payload] });
    default:
            // return the previous state on any unknown action
        return state;
    }
}

function combine(firstObject, secondObject) {
    return Object.assign({}, firstObject, secondObject);
}

export default counterReducer;
