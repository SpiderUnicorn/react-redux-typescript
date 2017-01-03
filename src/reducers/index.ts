import { SAVE_RECIPE, DELETE_RECIPE } from 'actions/actionTypes';
import { Reducer } from 'redux';
import { Action } from 'actions';

export interface ApplicationState {
    recipes: Recipe[]
}

export interface Recipe {
    id: number,
    title: string,
    description: string
}

const initialState: ApplicationState = {
    recipes: [
        {
            id: 0,
            title: 'Demo',
            description: 'This is overridden in createStore'
        }
    ]
};

function recipeReducer(state = initialState, action: Action): ApplicationState {
    switch (action.type) {

    case SAVE_RECIPE:
        return combine(state, { recipes: [...state.recipes, action.payload] });

    case DELETE_RECIPE:
        const id = action.payload.id;
        const recipes = state.recipes;
        const indexOfRecipeToRemove = recipes.map(r => r.id).indexOf(id);
        return {recipes: [...recipes.slice(0, indexOfRecipeToRemove), ...recipes.slice(indexOfRecipeToRemove + 1)] };

    default:
            // return the previous state on any unknown action
        return state;
    }
}

function combine(firstObject, secondObject): ApplicationState {
    return Object.assign({}, firstObject, secondObject);
}

export default recipeReducer;
