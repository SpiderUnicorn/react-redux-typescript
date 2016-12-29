import { SAVE_RECIPE } from 'actions/actionTypes'

export interface IAction {
    type: string
    payload: Object
}

export const saveRecipe = (title, description): IAction => ({
    type: SAVE_RECIPE,
    payload: { title, description }
})