import React from 'react'

import IncrementButton from './IncrementButton'
import CounterDisplay from './CounterDisplay'


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }

    increment() {
       this.setState({
           count: this.state.count + 1
       })
    }

    render() {
        return (
            <div>
                <IncrementButton onClick={this.increment} text='+' />
                <CounterDisplay value={this.state.count}/>
            </div>
        )
    }
}

export default App
