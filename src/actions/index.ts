import { Dispatch } from 'redux';
import { SAVE_RECIPE, DELETE_RECIPE, LOAD_RECIPES_SUCCESS } from 'actions/actionTypes';
import { fetchAll } from 'api/mockApi';
import { Recipe } from 'model/recipe';

export interface Action {
    type: string
    payload: any
}

export const saveRecipe = (title, description): Action => ({
    type: SAVE_RECIPE,
    payload: { title, description }
});

export const deleteRecipe = (id: number): Action => ({
    type: DELETE_RECIPE,
    payload: { id }
});

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