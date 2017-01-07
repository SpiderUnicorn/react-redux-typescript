import { saveRecipe } from './';
import {Recipe} from 'model/recipe';

/** Action types for usage with redux. */
export const SAVE_RECIPE: 'SAVE_RECIPE' = 'SAVE_RECIPE';
export const SAVE_RECIPE_SUCCESS: 'SAVE_RECIPE_SUCCESS' = 'SAVE_RECIPE_SUCCESS';
export const SAVE_RECIPE_ERROR: 'SAVE_RECIPE_ERROR' = 'SAVE_RECIPE_ERROR';
export const DELETE_RECIPE: 'DELETE_RECIPE' = 'DELETE_RECIPE';
export const LOAD_RECIPES_SUCCESS: 'LOAD_RECIPES_SUCCESS' = 'LOAD_RECIPES_SUCCESS';

export interface SaveRecipe {
   type: typeof SAVE_RECIPE
}

export interface DeleteRecipe {
   type: typeof DELETE_RECIPE
   id: number;
}

export interface SaveRecipeSuccess {
   type: typeof SAVE_RECIPE_SUCCESS
   recipe: Recipe
}

export interface SaveRecipeError {
   type: typeof SAVE_RECIPE_ERROR,
   recipe: Recipe
}

export interface LoadRecipesSuccess {
   type: typeof LOAD_RECIPES_SUCCESS
   recipes: Recipe[]
}

export type RecipeActions = SaveRecipe | SaveRecipeSuccess | DeleteRecipe | LoadRecipesSuccess;