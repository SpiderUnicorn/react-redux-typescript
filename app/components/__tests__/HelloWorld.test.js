jest.unmock('../HelloWorld')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import HelloWorld from '../HelloWorld'

const hello = TestUtils.renderIntoDocument(
    <div>
        <HelloWorld text={"World"} />
    </div>
)

const helloNode = ReactDOM.findDOMNode(hello).children[0]

describe('A sample test', () => {
    it('works', () => {
        expect(helloNode.textContent).toEqual('Hello World')
    })
})

