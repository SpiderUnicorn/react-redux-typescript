import { WRITE } from '../constants/actionTypes'

export function write(text) {
    return { type: WRITE, text }
}
