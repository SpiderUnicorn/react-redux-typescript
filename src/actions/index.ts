import { SAVE_RECIPE, DELETE_RECIPE, LOAD_RECIPES_SUCCESS } from 'actions/actionTypes';
import { fetchAll } from 'api/mockApi';
import { Recipe } from 'model/recipe';

/** 
 * The basic structure of a redux action.
 * 
 * The type represents the kind of action that is being performed
 * and the payload is any data supplied with the action. The payload
 * is not typed, to easily allow for many different kinds of actions.
 * For example, a create action may need a full object as the payload,
 * while a delete action may only need an ID.
 */
export interface Action {
    type: string
    payload: any
}

/** 
 * An action created for saving a recipe.
 * 
 * Carries the title and a description of a recipe to save 
 * @param {string} title    Title of the new recipe
 * @param {string} description  Description of the new recipe
 */
export const saveRecipe = (title, description): Action => ({
    type: SAVE_RECIPE,
    payload: { title, description }
});

/** 
 * An action creator for making delete actions.
 * 
 * Carries the id of the recipe to be deleted.
 * @param {number} Id   Id of the recipe to be carried on the action. 
 */
export const deleteRecipe = (id: number): Action => ({
    type: DELETE_RECIPE,
    payload: { id }
});

/** 
 * An action creator for seeding the application with recipes
 * from an api.
 * 
 * The loading is asynchronous and handled by thunk, which is a middleware
 * that let's us provide functions to dispatch. These functions receive
 * the dispatch as an argument. The result is an abstraction over the async
 * behavior that enabled handling of async operations in the same way as 
 * synchronous operations. The load recipes function can be passed to redux
 * "connect" function despite not directly returning an action.
 * @todo This should be completed with error handling.
 */
export function loadRecipes() {
    return async (dispatch: any)  => {
        const recipes = await fetchAll();
        dispatch(loadRecipesSuccess(recipes));
    };
};

const loadRecipesSuccess = (recipes: Recipe[]): Action => ({
    type: LOAD_RECIPES_SUCCESS,
    payload: recipes
});