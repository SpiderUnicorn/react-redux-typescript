import { INCREMENT, DECREMENT } from 'constants/actionTypes'

interface IAction {
    type: string
}

export const increment = (): IAction => ({
    type: INCREMENT
})

export const decrement = (): IAction => ({
    type: DECREMENT
})
