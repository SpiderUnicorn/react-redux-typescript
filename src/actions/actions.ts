import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants/actionTypes'

interface IAction {
    type: string
    // add more stuff to actions here
}

export const increment = (): IAction => ({
    type: INCREMENT_COUNTER
})

export const decrement = (): IAction => ({
    type: DECREMENT_COUNTER
})