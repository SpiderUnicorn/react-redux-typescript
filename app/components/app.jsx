import React from 'react'

import IncrementButton from './IncrementButton'
import CounterDisplay from './CounterDisplay'

const App = ({onClick, value}) => (
    <div>
        <IncrementButton onClick={ () => onClick() } text="+" />
        <CounterDisplay value={value} />
    </div>
)

export default App
