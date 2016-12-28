import {increment, decrement} from 'actions/actions'
import {connect} from 'react-redux'
import {IState} from 'reducers/IState'

import App from './App'

const mapStateToProps = (state:IState) => ({
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
