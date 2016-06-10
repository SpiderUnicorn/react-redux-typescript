import React from 'react'

const CounterButton = ({onClick, text}) => (
    <div>
        <button onClick={ () => onClick() }>{text}</button>
    </div>
)

CounterButton.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired
}

export default CounterButton
