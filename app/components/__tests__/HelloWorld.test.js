import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

var HelloWorld = TestUtils.renderIntoDocument(
    React.createElement('HelloWorld', { text: 'World'})
)

expect(ReactDOM.findDOMNode(HelloWorld)).toEqual('World')
