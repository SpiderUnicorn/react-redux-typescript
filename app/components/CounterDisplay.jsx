import React from 'react'

const CounterDisplay = ({value}) => <h4>{value}</h4>

CounterDisplay.propTypes = {
    value: React.PropTypes.number.isRequired
}

export default CounterDisplay
