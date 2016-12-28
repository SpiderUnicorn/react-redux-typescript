import { increment, decrement } from 'actions/actions'
import {connect} from 'react-redux'
import App from './App'

const mapStateToProps = (state:any) => ({
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
