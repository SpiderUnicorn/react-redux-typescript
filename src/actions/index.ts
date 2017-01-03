import { SAVE_RECIPE, DELETE_RECIPE } from 'actions/actionTypes';

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