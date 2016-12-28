import * as React from 'react'

import CounterButton from './CounterButton'
import CounterDisplay from './CounterDisplay'

const App = ({onIncrement, onDecrement, value}) => (
    <div>
        <CounterButton onClick={ () => onIncrement() } text="+" />
        <CounterButton onClick={ () => onDecrement() } text="-" />
        <CounterDisplay value={value} />
    </div>
)

export default App
