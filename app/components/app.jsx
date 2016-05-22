import React from 'react'

import IncrementButton from './IncrementButton'
import CounterDisplay from './CounterDisplay'

import Container from './controller-as/Container'

const App = ({onClick, value}) => (
    <div>
        <IncrementButton onClick={ () => onClick() } text="+" />
        <CounterDisplay value={value} />
        <Container />
    </div>
)

App.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    value: React.PropTypes.number.isRequired
}

export default App
