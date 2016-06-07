import React from 'react'

import CounterButton from './CounterButton'
import CounterDisplay from './CounterDisplay'

const App = ({onIncrement, onDecrement, value}) => (
    <div>
        <CounterButton onClick={ () => onIncrement() } text="+" />
        <CounterButton onClick={ () => onDecrement() } text="-" />
        <CounterDisplay value={value} />
    </div>
)

App.propTypes = {
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired,
    value: React.PropTypes.number.isRequired
}

export default App
