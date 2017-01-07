import { SAVE_RECIPE,
    DELETE_RECIPE,
    LOAD_RECIPES_SUCCESS,
    SAVE_RECIPE_SUCCESS } from 'actions/actionTypes';
import {RecipeActions} from 'actions/actionTypes';
import {Recipe} from 'model/recipe';

/** The complete structure of the application state
 * 
 * In redux, the state is never mutated directly.
 * For this reason, the state interface declares all
 * members as readonly to gain compile-time checks
 * against mutation. 
 */
export interface ApplicationState {
    readonly recipes: ReadonlyArray<Recipe>;
    readonly saveLoading: boolean;
}

const initialState: ApplicationState = {
    recipes: [
        {
            id: 0,
            title: 'Demo',
            description: 'This is overridden in createStore'
        }
    ],
    saveLoading: false
};

/** The redux reducer for recipes. Handles recipe actions. */
function recipeReducer(state = initialState, action: RecipeActions): ApplicationState {
    switch (action.type) {

    case LOAD_RECIPES_SUCCESS:
        return Object.assign({}, state, {recipes: action.recipes});

    case SAVE_RECIPE:
        return Object.assign({}, state, {saveLoading: true});

    case SAVE_RECIPE_SUCCESS:
        return Object.assign({}, state, {
            recipes: [...state.recipes, action.recipe],
            saveLoading: false
        });

    case DELETE_RECIPE:
        const id = action.id;
        const recipes = state.recipes;
        const indexOfRecipeToRemove = recipes.map(r => r.id).indexOf(id);

        return Object.assign(
            {},
            state,
            {recipes: [...recipes.slice(0, indexOfRecipeToRemove), ...recipes.slice(indexOfRecipeToRemove + 1)] }
        );

    default:
            // return the previous state on any unknown action
        return state;
    }
}

export default recipeReducer;
