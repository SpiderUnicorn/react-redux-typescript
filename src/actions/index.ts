import { SAVE_RECIPE,
    SAVE_RECIPE_SUCCESS,
    SAVE_RECIPE_ERROR,
    DELETE_RECIPE,
    LOAD_RECIPES_SUCCESS } from 'actions/actionTypes';
import { fetchAll, save } from 'api/mockApi';
import { Recipe } from 'model/recipe';
import {dispatch, Dispatch} from 'react-redux';
import * as ActionTypes from 'actions/actionTypes';

/** 
 * An action created for saving a recipe.
 * 
 * An sync action resulting in a successful or rejected
 * save. 
 * @param {recipe} Recipe   Recipe to save
 */
export function saveRecipe(recipe: Recipe) {
    return async (dispatch: Dispatch)  => {
        dispatch(beginSaveRecipe());
        try {
             const savedRecipe = await save(recipe);
             dispatch(saveRecipeSuccess(savedRecipe));
        } catch (e) {
            dispatch(saveRecipeError(recipe));
        }
    };
};

const beginSaveRecipe = (): ActionTypes.SaveRecipe => ({
    type: SAVE_RECIPE
});

const saveRecipeSuccess = (savedRecipe: Recipe): ActionTypes.SaveRecipeSuccess => ({
    type: SAVE_RECIPE_SUCCESS,
    recipe: savedRecipe
});

const saveRecipeError = (unsavedRecipe: Recipe): ActionTypes.SaveRecipeError => ({
    type: SAVE_RECIPE_ERROR,
    recipe: unsavedRecipe
});

/** 
 * An action creator for making delete actions.
 * 
 * Carries the id of the recipe to be deleted.
 * @param {number} Id   Id of the recipe to be carried on the action. 
 */
export const deleteRecipe = (id: number): ActionTypes.DeleteRecipe => ({
    type: DELETE_RECIPE,
    id
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

const loadRecipesSuccess = (recipes: Recipe[]): ActionTypes.LoadRecipesSuccess => ({
    type: LOAD_RECIPES_SUCCESS,
    recipes
});