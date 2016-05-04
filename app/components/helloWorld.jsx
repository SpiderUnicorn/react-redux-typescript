import React from 'react'

class HelloWorld extends React.Component {

    render() {
        return (
            <h1>Hello {this.props.phrase} from redux!</h1>
        )
    }
}

export default HelloWorld
