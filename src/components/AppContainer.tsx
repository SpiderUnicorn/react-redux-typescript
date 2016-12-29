import {increment, decrement} from 'actions'
import {connect} from 'react-redux'
import {IApplicationState} from 'reducers'

import App from './App'

const mapStateToProps = (state:IApplicationState) => ({
    value: state.count
})

const AppContainer = connect(
    mapStateToProps,
    {
        /* Shorthand for mapDispatchToProps. Can be used when arguments match */
        onIncrement: increment,
        onDecrement: decrement
    }
)(App)

export default AppContainer
