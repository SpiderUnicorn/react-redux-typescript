import React from 'react'

const IncrementButton = ({onClick, text}) => <button onClick={ () => onClick() }>{text}</button>

export default IncrementButton
