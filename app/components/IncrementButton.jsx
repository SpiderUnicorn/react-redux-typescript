import React from 'react'

const IncrementButton = ({onClick, text}) => (
    <button onClick={ () => onClick() }>{text}</button>
)

IncrementButton.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired
}

export default IncrementButton
