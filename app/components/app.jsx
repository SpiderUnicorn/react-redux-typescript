// react
import React from 'react'

// components
import HelloWorld from './helloWorld'

// redux
class App extends React.Component {
    handleChange() {
        console.log('hello');
    }

    render() {
        return (
            <div>
                <HelloWorld phrase="the other side" />
                <input onChange={this.handleChange} />
                <h2>hej</h2>
            </div>

        )
    }
}

export default App
