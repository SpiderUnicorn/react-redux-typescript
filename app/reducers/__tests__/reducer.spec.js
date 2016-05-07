jest.unmock('../')
jest.unmock('../../constants/actionTypes')

import React from 'react'
import TestUtils from 'react-addons-test-utils'

import reducer from '../'
import { INCREMENT } from '../../constants/actionTypes'

describe('Counter reducer', () => {
    it('increments by 1', () => {
        expect(reducer({count: 0}, {type: INCREMENT}).count).toEqual(1)
    })

    describe('given no action', () => {
        it('returns previous state', () => {
            expect(reducer(undefined, {}).count).toEqual(0)
        })
    })

})

