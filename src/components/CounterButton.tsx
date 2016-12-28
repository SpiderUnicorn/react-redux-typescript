import * as React from 'react'

export default ({onClick, text}) => (
    <div>
        <button onClick={ () => onClick() }>{text}</button>
    </div>
)