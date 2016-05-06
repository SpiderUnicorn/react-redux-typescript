jest.unmock('../reducers')
jest.unmock('../../constants/actionTypes')

import React from 'react'
import TestUtils from 'react-addons-test-utils'

import reducer from '../reducers'
import { INCREMENT } from '../../constants/actionTypes'

describe('Counter reducer', () => {
    it('increments by 1', () => {
        expect(reducer({count: 0}, {type: INCREMENT}).count).toEqual(1)
    })

    describe('given undefined action', () => {
        it('returns previous state', () => {
            expect(reducer({count: 0}, {type: ''}).count).toEqual(0)
        })
    })

})

