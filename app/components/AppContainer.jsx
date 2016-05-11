import { increment } from '../actions/actions'
import {connect} from 'react-redux'
import App from './App'

const mapStateToProps = (state) => {
    return {
        value: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(increment())
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer
