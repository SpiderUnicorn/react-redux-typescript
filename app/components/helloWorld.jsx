import React from 'react'

const HelloWorld = ({text}) => (
    <h1>Hello {text}</h1>
)

HelloWorld.propTypes = {text: React.PropTypes.string.isRequired}

export default HelloWorld

