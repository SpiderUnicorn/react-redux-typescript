import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import HelloWorld from '../HelloWorld'

const hello = TestUtils.renderIntoDocument(
    <HelloWorld text={"World"} />
)

const helloNode = ReactDOM.findDOMNode(hello)

expect(helloNode.textContent).toEqual('Hello World')
