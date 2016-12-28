import * as React from 'react'

const CounterButton = ({onClick, text}) => (
    <div>
        <button onClick={ () => onClick() }>{text}</button>
    </div>
)

export default CounterButton
