import * as React from 'react'

export const CounterButton = ({onClick, text}) => (
    <div>
        <button onClick={ () => onClick() }>{text}</button>
    </div>
)