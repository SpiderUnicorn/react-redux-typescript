/*
jest.unmock('../HelloWorld')

import React from 'react'
import TestUtils from 'react-addons-test-utils'

import HelloWorld from '../HelloWorld'

var renderer = TestUtils.createRenderer()
renderer.render(<HelloWorld text={"World"} />)

const result = renderer.getRenderOutput();

describe('A sample test', () => {
    it('works', () => {
        expect(result.props.children).toEqual(['Hello ', 'World'])
    })

    it('only accepts text input', () => {
        expect(result.type).toBe('h1')
    })
})

*/
