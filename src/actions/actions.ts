import { INCREMENT, DECREMENT } from 'constants/actionTypes'

interface IAction {
    type: string
    // add more stuff to actions here
}

export const increment = (): IAction => ({
    type: INCREMENT
})

export const decrement = (): IAction => ({
    type: DECREMENT
})
