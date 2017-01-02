import { SAVE_RECIPE } from 'actions/actionTypes';

export interface Action {
    type: string
    payload: Object
}

export const saveRecipe = (title, description): Action => ({
    type: SAVE_RECIPE,
    payload: { title, description }
});