import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

const HelloWorld = TestUtils.renderIntoDocument(
    <HelloWorld text={"World"} />
)

const HelloWorldNode = ReactDOM.findDOMNode(HelloWorld)

expect(HelloWorldNode.textContent).toEqual('Hello World')
