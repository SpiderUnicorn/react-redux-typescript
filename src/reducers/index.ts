import { SAVE_RECIPE, DELETE_RECIPE, LOAD_RECIPES_SUCCESS } from 'actions/actionTypes';
import { Action } from 'actions';
import { Recipe } from 'model/recipe';

/** The complete structure of the application state */
export interface ApplicationState {
    recipes: Recipe[]
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

/** The redux reducer for recipes. Handles recipe actions. */
function recipeReducer(state = initialState, action: Action): ApplicationState {
    switch (action.type) {

    case LOAD_RECIPES_SUCCESS:
        return {recipes: action.payload};

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
