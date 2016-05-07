jest.unmock('../actions')

import { increment } from '../actions'
import { INCREMENT } from '../../constants/actionTypes'

describe('Actions', () => {
    describe('increment', () => {
        it('has type of increment', () => {
            const expected = { type: INCREMENT }

            const result = increment()

            expect(expected).toEqual(result)
        })
    })
})
